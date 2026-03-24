#!/usr/bin/env ruby
# frozen_string_literal: true

# Parse every GitHub Actions workflow file as YAML. Exits 1 on parse errors.
# Also requires every job to set timeout-minutes (billing + hung-runner safety).
# Jobs with `steps` must set `runs-on` unless the job is a reusable-workflow caller (`uses:` + no steps).
# Requires a non-empty workflow `name` and a non-empty `on:` trigger map (Psych maps bare `on` to key true).
# Used by workflow-yaml-sanity and workflow contract guards (Ruby stdlib only).

require 'yaml'

ROOT = File.expand_path('../..', __dir__)
Dir.chdir(ROOT) do
  files = Dir.glob('.github/workflows/**/*.{yml,yaml}')
  abort 'No workflow files found.' if files.empty?

  failed = []
  name_violations = []
  trigger_violations = []
  timeout_violations = []
  runs_on_violations = []

  files.each do |f|
    begin
      data = YAML.load_file(f)
      puts "ok: #{f}"
      unless data.is_a?(Hash)
        failed << f
        next
      end

      unless data['name'].is_a?(String) && !data['name'].strip.empty?
        name_violations << f
      end

      triggers = data['on'] || data[true]
      if triggers.nil? || (triggers.respond_to?(:empty?) && triggers.empty?)
        trigger_violations << f
      end

      jobs = data['jobs']
      next if jobs.nil? || !jobs.is_a?(Hash)

      jobs.each do |job_name, job|
        next unless job.is_a?(Hash)

        timeout_violations << "#{f} (job: #{job_name})" unless job.key?('timeout-minutes')

        if job.key?('steps') && !job.key?('uses') && !job.key?('runs-on')
          runs_on_violations << "#{f} (job: #{job_name})"
        end
      end
    rescue StandardError => e
      warn "error: #{f}: #{e.class}: #{e.message}"
      failed << f
    end
  end

  unless failed.empty?
    warn "YAML parse failures: #{failed.join(', ')}"
    exit 1
  end

  unless name_violations.empty?
    warn 'error: Every workflow must set a non-empty name: string:'
    name_violations.each { |v| warn "  #{v}" }
    exit 1
  end

  unless trigger_violations.empty?
    warn 'error: Every workflow must set a non-empty on: trigger (use quoted \'on\' in YAML if needed):'
    trigger_violations.each { |v| warn "  #{v}" }
    exit 1
  end

  unless timeout_violations.empty?
    warn 'error: Every workflow job must set timeout-minutes:'
    timeout_violations.each { |v| warn "  #{v}" }
    exit 1
  end

  unless runs_on_violations.empty?
    warn 'error: Jobs with steps must set runs-on (reusable-workflow callers use uses: instead of steps):'
    runs_on_violations.each { |v| warn "  #{v}" }
    exit 1
  end
end
