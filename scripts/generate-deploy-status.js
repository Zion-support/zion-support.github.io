import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const dir = 'automation/reports';
const file = join(dir, 'deploy-status-latest.json');

mkdirSync(dir, { recursive: true });

const data = {
  status: process.env.DEPLOY_STATUS || 'triggered',
  source: process.env.DEPLOY_STATUS_SOURCE || 'unknown',
  timestamp: new Date().toISOString(),
  commit: process.env.GITHUB_SHA || 'unknown',
  run_id: process.env.GITHUB_RUN_ID || 'unknown',
};

writeFileSync(file, JSON.stringify(data, null, 2));
console.log('✅ Deploy status written:', data);
