#!/usr/bin/env ruby
# frozen_string_literal: true

# Parse every GitHub Actions workflow file as YAML. Exits 1 on parse errors.
# Requires unique workflow display names across files (avoids duplicate entries in the Actions UI).
# Validates on.schedule[].cron uses GitHub's 5-field cron (minute hour day month weekday), not 6-field.
# Also requires every job to set timeout-minutes (billing + hung-runner safety).
# Jobs with `steps` must set `runs-on` unless the job is a reusable-workflow caller (`uses:` + no steps).
# Requires a non-empty workflow `name`, top-level `permissions:` (Hash mapping, `{}`, or
# GHA shorthand strings read-all / write-all only),
# `on:` as a non-empty mapping (Psych maps bare `on` to key true),
# and a non-empty `jobs:` map with at least one job.
# Requires each workflow file to end with a newline (POSIX text file, stable diffs).
# Rejects UTF-8 BOM at file start (breaks some tooling and is easy to add by mistake).
# Used by workflow-yaml-sanity and workflow contract guards (Ruby stdlib only).

require 'yaml'

ROOT = File.expand_path('../..', __dir__)
Dir.chdir(ROOT) do
  files = Dir.glob('.github/workflows/**/*.{yml,yaml}')
  abort 'No workflow files found.' if files.empty?

  failed = []
  name_violations = []
  permissions_violations = []
  permissions_shape_violations = []
  trigger_violations = []
  jobs_violations = []
  timeout_violations = []
  runs_on_violations = []
  cron_violations = []
  newline_violations = []
  bom_violations = []
  name_to_files = Hash.new { |h, k| h[k] = [] }

  files.each do |f|
    begin
      raw = File.binread(f)
      bom_violations << f if raw.bytesize >= 3 && raw.getbyte(0) == 0xEF && raw.getbyte(1) == 0xBB && raw.getbyte(2) == 0xBF
      newline_violations << f if !raw.empty? && raw[-1] != "\n"

      data = YAML.load_file(f)
      puts "ok: #{f}"
      unless data.is_a?(Hash)
        failed << f
        next
      end

      unless data['name'].is_a?(String) && !data['name'].strip.empty?
        name_violations << f
      else
        name_to_files[data['name'].strip] << f
      end

      unless data.key?('permissions')
        permissions_violations << f
      else
        perm = data['permissions']
        unless perm.is_a?(Hash) || %w[read-all write-all].include?(perm)
          permissions_shape_violations << f
        end
      end

      triggers = data['on'] || data[true]
      unless triggers.is_a?(Hash) && !triggers.empty?
        trigger_violations << f
      end

      if triggers.is_a?(Hash) && triggers['schedule'].is_a?(Array)
        triggers['schedule'].each do |entry|
          next unless entry.is_a?(Hash) && entry.key?('cron')

          c = entry['cron']
          next unless c.is_a?(String)

          n = c.strip.split(/\s+/).size
          next if n == 5

          cron_violations << "#{f} (expected 5 cron fields, got #{n}: #{c.strip.inspect})"
        end
      end

      jobs = data['jobs']
      unless jobs.is_a?(Hash) && !jobs.empty?
        jobs_violations << f
        next
      end

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

  duplicate_name_files = name_to_files.select { |_n, fs| fs.size > 1 }
  unless duplicate_name_files.empty?
    warn 'error: Each workflow name: must be unique across .github/workflows (duplicate display names):'
    duplicate_name_files.each do |nm, fs|
      warn "  #{nm.inspect}:"
      fs.each { |path| warn "    #{path}" }
    end
    exit 1
  end

  unless permissions_violations.empty?
    warn 'error: Every workflow must declare a top-level permissions: block:'
    permissions_violations.each { |v| warn "  #{v}" }
    exit 1
  end

  unless permissions_shape_violations.empty?
    warn 'error: workflow permissions must be a mapping (e.g. contents: read), {}, or read-all / write-all:'
    permissions_shape_violations.each { |v| warn "  #{v}" }
    exit 1
  end

  unless trigger_violations.empty?
    warn 'error: Every workflow must set a non-empty on: trigger (use quoted \'on\' in YAML if needed):'
    trigger_violations.each { |v| warn "  #{v}" }
    exit 1
  end

  unless jobs_violations.empty?
    warn 'error: Every workflow must define a non-empty jobs: map:'
    jobs_violations.each { |v| warn "  #{v}" }
    exit 1
  end

  unless cron_violations.empty?
    warn 'error: GitHub Actions schedule cron must have exactly 5 fields (minute hour day month weekday):'
    cron_violations.each { |v| warn "  #{v}" }
    exit 1
  end

  unless newline_violations.empty?
    warn 'error: Every workflow file must end with a newline character:'
    newline_violations.each { |v| warn "  #{v}" }
    exit 1
  end

  unless bom_violations.empty?
    warn 'error: Workflow files must not start with a UTF-8 BOM (remove EF BB BF bytes):'
    bom_violations.each { |v| warn "  #{v}" }
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
