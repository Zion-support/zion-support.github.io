'use strict';
const fs = require('node:fs');
const {execFileSync} = require('node:child_process');
const {writeReport} = require('../../automation/reliability-reports.cjs');

function sourceChanges(status) {
  const entries = status.split('\0').filter(Boolean), changed = [];
  for (let i=0;i<entries.length;i++) {
    const record=entries[i], state=record.slice(0,2), file=record.slice(3);
    const paths=[file];
    if (/[RC]/.test(state)) paths.push(entries[++i] || '');
    for (const name of paths) if (/^(?:app|components|public|content|data|styles)\//.test(name) || /^(?:package(?:-lock)?\.json|next\.config\.[cm]?[jt]s|tsconfig\.json)$/.test(name)) changed.push(name);
  }
  return [...new Set(changed)];
}
function main() {
  const files = sourceChanges(execFileSync('git', ['status', '--porcelain=v1', '-z', '--untracked-files=all'], {encoding:'utf8', maxBuffer:16*1024*1024}));
  const scripts = process.argv.slice(2);
  const paused = scripts.length > 0 && scripts.every(file => /no-op - automation paused post-P0/.test(fs.readFileSync(file,'utf8')));
  const report={checkedAt:new Date().toISOString(), status: files.length ? 'source_changed' : paused ? 'paused' : 'no_source_changes',
    sourceFiles: files, generatorScripts:scripts, generationPaused:paused,
    note:files.length ? 'Run the full existing quality gates before publishing.' : 'No application or published content changed; compilation and publication are unnecessary. Existing generator pause is preserved.'};
  writeReport('content-change-gate-' + (process.env.GITHUB_JOB || 'local'), report);
  if(process.env.GITHUB_OUTPUT)fs.appendFileSync(process.env.GITHUB_OUTPUT,`changed=${files.length>0}\npaused=${paused}\n`);
  if(process.env.GITHUB_STEP_SUMMARY)fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,`### Content status: ${report.status}\n\n${report.note}\n`);
  console.log(JSON.stringify(report,null,2));
}
if(require.main===module)main();
module.exports={sourceChanges};
