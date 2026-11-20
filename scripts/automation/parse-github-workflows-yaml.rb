#!/usr/bin/env ruby
# frozen_string_literal: true

# Parse all GitHub workflow YAML files and emit a structural summary:
# workflow names, concurrency groups, job ids, local reusable 'uses',
# cron schedules and timeout-minutes coverage.
#
# Usage: ruby scripts/automation/parse-github-workflows-yaml.rb

require 'yaml'
require 'json'

files = Dir.glob('.github/workflows/**/*.{yml,yaml}').sort
abort('No workflow files found under .github/workflows') if files.empty?

summary = []
errors  = []

files.each do |path|
  begin
    doc = YAML.load_file(path, aliases: true)
  rescue Psych::Exception => e
    errors << { file: path, error: e.message }
    next
  end
  next unless doc.is_a?(Hash)

  jobs = doc['jobs'] || {}
  summary << {
    file: path,
    name: doc['name'] || File.basename(path),
    concurrency: doc['concurrency'],
    permissions: doc.key?('permissions:') || doc.key?('permissions'),
    cron: (doc.dig('on', 'schedule') || doc.dig(true, 'schedule') || []).map { |s| s['cron'] rescue nil }.compact,
    jobs: jobs.map do |job_id, job|
      {
        id: job_id,
        uses: job['uses'],
        timeout_minutes: job['timeout-minutes']
      }
    end
  }
end

puts JSON.pretty_generate({ workflows: summary, errors: errors })
exit(errors.empty? ? 0 : 1)
