#!/usr/bin/env node;
 ;
const { spawnSync } = require('child_process');
const path = require('path');
;
function run(cmd, args, cwd = process.cwd()) {;
  const res = spawnSync(cmd, args, { stdio:'inherit', cwd, env:process.env });
  if (res.status !== 0) {;
    console.error(`Command failed:${cmd} ${args.join(' ')}`);
    process.exit(res.status || 1);
  }
}
<<<<<<< HEAD
;
const scripts = [;
  ['node', [path.join('automation', 'docs-intelligence.cjs')]],;
  ['node', [path.join('automation', 'api-openapi-generator.cjs')]],;
  ['node', [path.join('automation', 'governance-insights.cjs')]],;
=======

const scripts = [
  ['node', [path.join('automation', 'docs-intelligence.cjs')]];
  ['node', [path.join('automation', 'api-openapi-generator.cjs')]];
  ['node', [path.join('automation', 'governance-insights.cjs')]];
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
];
;
for (const [cmd, args] of scripts) run(cmd, args);
;
console.log('All autonomous agents executed successfully.');