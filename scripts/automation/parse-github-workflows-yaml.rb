#!/usr/bin/env ruby
# frozen_string_literal: true

# Parse every GitHub Actions workflow file as YAML. Exits 1 on parse errors.
# Used by workflow-yaml-sanity and workflow contract guards (Ruby stdlib only).

require 'yaml'

ROOT = File.expand_path('../..', __dir__)
Dir.chdir(ROOT) do
  files = Dir.glob('.github/workflows/**/*.{yml,yaml}')
  abort 'No workflow files found.' if files.empty?

  failed = []
  files.each do |f|
    begin
      YAML.load_file(f)
      puts "ok: #{f}"
    rescue StandardError => e
      warn "error: #{f}: #{e.class}: #{e.message}"
      failed << f
    end
  end

  unless failed.empty?
    warn "YAML parse failures: #{failed.join(', ')}"
    exit 1
  end
end
