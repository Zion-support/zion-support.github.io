# frozen_string_literal: true

# The public Agent presence watchdog is retired, not redirected to another issue.
# Removing the workflow removes its schedule, dispatch entrypoint, script and token
# permissions together. This test never executes a workflow or calls GitHub.
# Run from any directory: ruby scripts/automation/test-agent-presence-retirement.rb
require 'minitest/autorun'
require 'yaml'
require 'tmpdir'
require 'open3'

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

  def test_acquisition_rejects_invalid_revisions_before_git_or_network
    workflow = YAML.load_file(File.join(WORKFLOWS, 'agent-presence-retirement-test.yml'))
    script = workflow.fetch('jobs').fetch('retirement').fetch('steps').first.fetch('run')
    ['', 'main', 'a' * 39, 'a' * 41, '$(touch injected)', "#{'a' * 40}\n"].each do |sha|
      Dir.mktmpdir('retirement-invalid-sha-') do |dir|
        _out, _err, status = Open3.capture3(
          { 'EXPECTED_SHA' => sha, 'RUNNER_TEMP' => dir },
          'bash', '--noprofile', '--norc', '-c', script, chdir: dir
        )
        refute status.success?, 'Invalid revision must fail closed'
        assert_empty Dir.children(dir), 'Invalid revision must not create files or initialize Git'
      end
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
    assert_equal ['env', 'name', 'run', 'shell'], checkout.keys.sort
    assert_equal({ 'EXPECTED_SHA' => '${{ github.sha }}' }, checkout.fetch('env'))
    assert_equal 'bash', checkout.fetch('shell')
    script = checkout.fetch('run')
    [
      'env -i PATH="$PATH" HOME="$RUNNER_TEMP" EXPECTED_SHA="$EXPECTED_SHA"',
      'GIT_CONFIG_NOSYSTEM=1 GIT_CONFIG_GLOBAL=/dev/null',
      'GIT_TERMINAL_PROMPT=0 GIT_ASKPASS=/bin/false SSH_ASKPASS=/bin/false',
      "bash --noprofile --norc <<'ACQUIRE'",
      'set -euo pipefail',
      'test "${#EXPECTED_SHA}" -eq 40',
      '[[ "$EXPECTED_SHA" =~ ^[0-9a-f]{40}$ ]]',
      'test ! -e .git',
      'git remote add origin https://github.com/Zion-support/zion-support.github.io.git',
      "git sparse-checkout set --no-cone '/.github/workflows/' '/scripts/automation/test-agent-presence-retirement.rb'",
      'git -c credential.helper= fetch --depth=1 --filter=blob:none --no-tags --no-recurse-submodules origin "$EXPECTED_SHA"',
      'test "$(git rev-parse FETCH_HEAD)" = "$EXPECTED_SHA"',
      'git -c credential.helper= checkout --detach FETCH_HEAD',
      'test "$(git rev-parse HEAD)" = "$EXPECTED_SHA"'
    ].each { |line| assert_includes script.lines.map { |value| value.strip.delete_suffix('\\').rstrip }, line }
    refute_match(/GITHUB_TOKEN|secrets\.|extraheader|continue-on-error|\|\|/, script)
    assert_equal({ 'name' => 'Verify retired public writer stays absent (offline)',
                   'run' => 'ruby scripts/automation/test-agent-presence-retirement.rb' }, test)
  end
end
