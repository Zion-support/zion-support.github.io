#!/usr/bin/env ruby
# frozen_string_literal: true

# Parse every GitHub Actions workflow file as YAML. Exits 1 on parse errors.
# Also requires every job to set timeout-minutes (billing + hung-runner safety).
# Jobs with `steps` must set `runs-on` unless the job is a reusable-workflow caller (`uses:` + no steps).
# Used by workflow-yaml-sanity and workflow contract guards (Ruby stdlib only).

require 'yaml'

ROOT = File.expand_path('../..', __dir__)
Dir.chdir(ROOT) do
  files = Dir.glob('.github/workflows/**/*.{yml,yaml}')
  abort 'No workflow files found.' if files.empty?

  failed = []
  timeout_violations = []
  runs_on_violations = []

  files.each do |f|
    begin
      data = YAML.load_file(f)
      puts "ok: #{f}"
      jobs = data.is_a?(Hash) ? data['jobs'] : nil
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
