import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { format } from 'node:util';

const dir = 'automation/reports';
const file = join(dir, 'deploy-status-latest.json');

mkdirSync(dir, { recursive: true });

const data = {
  status: process.env.DEPLOY_STATUS || 'triggered',
  source: process.env.DEPLOY_STATUS_SOURCE || 'unknown',
  timestamp: new Date().toISOString(),
  commit: process.env.GITHUB_SHA || 'unknown',
  'run_id': process.env.GITHUB_RUN_ID || 'unknown',
};

writeFileSync(file, JSON.stringify(data, null, 2));
process.stdout.write(`${format('✅ Deploy status written:', data)}\n`);
