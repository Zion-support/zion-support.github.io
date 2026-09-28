#!/usr/bin/env ruby
# frozen_string_literal: true

# parse-github-workflows-yaml.rb
# Smoke parser for GitHub Actions workflow YAML files.
# Extracts: workflow names, concurrency blocks, job ids, local reusable
# workflow/action uses, cron schedules, and timeout-minutes per job.
# Used by the "Workflow Ruby parse smoke (weekly)" workflow.

require 'yaml'
require 'json'

results = []

Dir.glob('.github/workflows/**/*.{yml,yaml}').sort.each do |file|
  begin
    doc = YAML.load_file(file, aliases: true) || {}
  rescue Psych::Exception => e
    warn "yaml_error: #{file}: #{e.message}"
    results << { file: file, error: e.message }
    next
  end

  jobs = doc['jobs'] || {}
  parsed_jobs = jobs.map do |job_id, job|
    job = job || {}
    {
      id: job_id,
      timeout_minutes: job['timeout-minutes'],
      uses: job['uses'],
      permissions: job['permissions:'] || job['permissions']
    }
  end

  local_uses = parsed_jobs.select { |j| j[:uses]&.start_with?('./') }.map { |j| j[:uses] }

  on_block = doc['on'] || doc[true] || {}
  schedule = on_block.is_a?(Hash) ? (on_block['schedule'] || []).map { |s| s['cron'] } : []

  results << {
    file: file,
    name: doc['name'],
    concurrency: doc['concurrency'],
    permissions: doc['permissions'] || doc['permissions:'],
    cron: schedule,
    job_ids: parsed_jobs.map { |j| j[:id] },
    local_uses: local_uses
  }
end

puts JSON.pretty_generate(results)
puts "ok: parsed #{results.length} workflow files"
