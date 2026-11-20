'use strict';
// Evidence-only workflow run pair evaluator; never closes incidents, changes GitHub or touches Gmail.
const fs = require('node:fs');
const path = require('node:path');

function comparable(run) {
  return run && typeof run === 'object' && !Array.isArray(run) &&
    Number.isSafeInteger(run.id) && run.id > 0;
}
function assessedRun(run) {
  return {
    id: run?.id ?? null,
    name: typeof run?.name === 'string' ? run.name.slice(0,160) : '',
    workflowId: run?.workflow_id ?? null,
    path: typeof run?.path === 'string' ? run.path.slice(0,200) : '',
    status: run?.status ?? null,
    conclusion: run?.conclusion ?? null,
    branch: run?.head_branch ?? null,
    sha: run?.head_sha ?? null,
    event: run?.event ?? null,
    createdAt: run?.created_at ?? null,
    updatedAt: run?.updated_at ?? null,
    repository: run?.repository?.full_name ?? null,
    url: typeof run?.html_url === 'string' && /^https:\/\/github\.com\//.test(run.html_url) ? run.html_url : null
  };
}
function examine(failure, recovery, repository) {
  const a = assessedRun(failure), b = assessedRun(recovery);
  const reasons = [];
  const add = (test, reason) => { if (!test) reasons.push(reason); };
  add(typeof repository === 'string' && /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository), 'INVALID_EXPECTED_REPOSITORY');
  add(comparable(failure) && comparable(recovery), 'INVALID_RUN_ID');
  add(a.id !== b.id, 'SAME_RUN_ID');
  add(a.repository === repository && b.repository === repository, 'REPOSITORY_MISMATCH');
  add(Number.isSafeInteger(a.workflowId) && a.workflowId > 0 && a.workflowId === b.workflowId, 'WORKFLOW_ID_MISMATCH');
  add(Boolean(a.name) && a.name === b.name && Boolean(a.path) && a.path === b.path, 'WORKFLOW_DEFINITION_MISMATCH');
  add(a.branch === 'main' && b.branch === 'main', 'NON_MAIN_BRANCH');
  add(a.status === 'completed' && a.conclusion === 'failure', 'ORIGINAL_NOT_FAILED');
  add(b.status === 'completed' && b.conclusion === 'success', 'RECOVERY_NOT_SUCCESSFUL');
  add(typeof a.sha === 'string' && /^[0-9a-f]{40}$/i.test(a.sha) && typeof b.sha === 'string' && /^[0-9a-f]{40}$/i.test(b.sha), 'INVALID_HEAD_SHA');
  const before = Date.parse(a.createdAt || ''), after = Date.parse(b.createdAt || '');
  add(Number.isFinite(before) && Number.isFinite(after) && after > before, 'NOT_LATER_RUN');
  const candidate = reasons.length === 0;
  return {
    schema: 'zion.actions.run-pair-evidence.v1',
    classification: candidate ? 'REVIEW_CANDIDATE' : 'NOT_RECONCILED',
    candidate,
    reasonCodes: reasons,
    failure: a,
    laterRun: b,
    restrictions: [
      'Read-only bounded pair comparison. This is not a CI release gate or independent reproduction.',
      'A later successful run cannot retroactively change a failed historical run.',
      'Manual owner must read the failing and successful job logs, verify the same defect and deployed functionality, and confirm no newer regression.',
      'Do not delete Gmail notifications, close incidents, merge code, or dispatch suppliers based on this report alone.'
    ]
  };
}
function mdSafe(x) { return String(x ?? '').replace(/[\r\n|<>`]/g, ' ').slice(0,200); }
function reportMarkdown(r) {
  const f = r.failure, l = r.laterRun;
  return [
    '# GitHub Actions run-pair evidence (review only)',
    '',
    '- Classification: **' + r.classification + '**',
    '- Reasons: ' + (r.reasonCodes.length ? r.reasonCodes.join(', ') : 'none in metadata; logs still required'),
    '- Workflow: ' + mdSafe(f.name) + ' (ID ' + mdSafe(f.workflowId) + ')',
    '- Original: ' + mdSafe(f.id) + ' / ' + mdSafe(f.sha) + ' / ' + mdSafe(f.conclusion),
    '- Later: ' + mdSafe(l.id) + ' / ' + mdSafe(l.sha) + ' / ' + mdSafe(l.conclusion),
    '',
    '## Mandatory checks before any Gmail cleanup',
    ...r.restrictions.map(x => '- ' + x),
    ''
  ].join('\n');
}
function save(report, outputDir) {
  fs.mkdirSync(outputDir, {recursive:true});
  const prefix = 'ci-resolution-' + (Number(report.failure.id)||0) + '-' + (Number(report.laterRun.id)||0);
  const jsonFile = path.join(outputDir, prefix + '.json');
  const mdFile = path.join(outputDir, prefix + '.md');
  fs.writeFileSync(jsonFile, JSON.stringify(report,null,2)+'\n');
  fs.writeFileSync(mdFile, reportMarkdown(report));
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, reportMarkdown(report));
  return {jsonFile,mdFile};
}
if (require.main === module) {
  try {
    const [failurePath, recoveryPath, repository, outputDir] = process.argv.slice(2);
    if (!failurePath || !recoveryPath || !repository || !outputDir) throw new Error('Usage: node ci-resolution-evidence.cjs FAILED_JSON LATER_JSON OWNER/REPO OUTPUT_DIR');
    const failure=JSON.parse(fs.readFileSync(failurePath,'utf8'));
    const recovery=JSON.parse(fs.readFileSync(recoveryPath,'utf8'));
    const report=examine(failure,recovery,repository);
    const files=save(report,outputDir);
    console.log(JSON.stringify({classification:report.classification,reasonCodes:report.reasonCodes,files}));
    if (!report.candidate) process.exitCode=1;
  } catch(err) {
    console.error('::error::Evidence generation failed: ' + String(err.message).slice(0,180));
    process.exitCode=1;
  }
}
module.exports={examine,reportMarkdown,assessedRun};
