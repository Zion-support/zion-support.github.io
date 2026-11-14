'use strict';
const {siteReport, github, writeReport} = require('../../automation/reliability-reports.cjs');
async function main(){
  const pages=await siteReport('release');
  const {data}=await github('actions/workflows/static-deploy.yml/runs?branch=main&status=completed&per_page=1');
  const deploy=data.workflow_runs?.[0];
  if(!deploy)throw new Error('No completed production deployment found');
  const healthy=pages.unhealthyCount===0 && deploy.conclusion==='success';
  const snapshot={timestamp:new Date().toISOString(),status:healthy?'ok':'degraded',severity:healthy?'nominal':'critical',
    scope:'Live production route sample and latest completed Simple Static Deploy. The full Next.js application build is not measured by this snapshot.',
    checks:{pages:pages.unhealthyCount===0,deploy:deploy.conclusion==='success',build:null},
    deployment:{url:deploy.html_url,conclusion:deploy.conclusion,headSha:deploy.head_sha,completedAt:deploy.updated_at},
    routes:pages.results};
  writeReport('automation-health-latest',snapshot);
  writeReport('automation-health',snapshot,'public/api');
  console.log(`Observed ${pages.checkedCount} routes; deployment ${deploy.conclusion}; snapshot ${snapshot.status}`);
}
if(require.main===module)main().catch(error=>{console.error(error.message);process.exitCode=1;});
module.exports={main};
