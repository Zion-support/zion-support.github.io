# frozen_string_literal: true

# The public Agent presence watchdog is retired, not redirected to another issue.
# Removing the workflow removes its schedule, dispatch entrypoint, script and token
# permissions together. This test never executes a workflow or calls GitHub.
# Run from any directory: ruby scripts/automation/test-agent-presence-retirement.rb
require 'minitest/autorun'
require 'yaml'

class AgentPresenceRetirementTest < Minitest::Test
  WORKFLOWS = File.expand_path('../../.github/workflows', __dir__)

  def test_retired_workflow_has_no_scheduled_or_manual_path_or_permissions
    %w[yml yaml].each do |extension|
      path = File.join(WORKFLOWS, "agent-presence-watchdog.#{extension}")
      refute File.exist?(path), "Retired writer must remain deleted: #{path}"
    end
  end

  def test_original_public_writer_is_not_restored_under_another_filename
    Dir.glob(File.join(WORKFLOWS, '*.{yml,yaml}')).each do |path|
      source = File.read(path)
      refute_match(/Agent presence watchdog|OFFLINE roster/i, source,
                   "Retired public writer identity restored in #{path}")
    end
  end

  def test_regression_workflow_is_read_only_and_only_runs_offline_test_on_prs
    workflow = YAML.load_file(File.join(WORKFLOWS, 'agent-presence-retirement-test.yml'))
    assert_equal ['pull_request'], workflow.fetch('on').keys
    assert_equal ['.github/workflows/**', 'scripts/automation/test-agent-presence-retirement.rb'],
                 workflow.fetch('on').fetch('pull_request').fetch('paths')
    assert_equal({ 'contents' => 'read' }, workflow.fetch('permissions'))
    assert_equal ['retirement'], workflow.fetch('jobs').keys
    job = workflow.fetch('jobs').fetch('retirement')
    refute job.key?('permissions'), 'No job permission override'
    assert_equal 5, job.fetch('timeout-minutes')
    checkout, test = job.fetch('steps')
    assert_equal 2, job.fetch('steps').length
    assert_equal 'actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd', checkout.fetch('uses')
    assert_equal false, checkout.fetch('with').fetch('persist-credentials')
    assert_equal ['.github/workflows', 'scripts/automation'], checkout.fetch('with').fetch('sparse-checkout').lines.map(&:strip)
    assert_equal({ 'name' => 'Verify retired public writer stays absent (offline)',
                   'run' => 'ruby scripts/automation/test-agent-presence-retirement.rb' }, test)
  end
end
