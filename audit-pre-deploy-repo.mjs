import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname);

const files = [
  'app/agents/page.tsx',
  'public/agents-dashboard/index.html',
  'public/api/agents-monitoring.json',
  'netlify/functions/agents-monitoring.js',
  'app/constants/navigation.ts',
];

const missing = [];
for (const rel of files) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) missing.push(rel);
}

const dash = path.join(ROOT, 'public', 'agents-dashboard', 'index.html');
let dashboardSize = 0;
if (fs.existsSync(dash)) dashboardSize = fs.statSync(dash).size;

const jsonPath = path.join(ROOT, 'public', 'api', 'agents-monitoring.json');
let jsonObj = null;
if (fs.existsSync(jsonPath)) {
  try { jsonObj = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')); } catch {}
}

const report = {
  generatedAt: new Date().toISOString(),
  preDeployRepoCheck: true,
  sourceFilesPresent: missing.length === 0,
  missingSourceFiles: missing,
  dashboardHtmlSize: dashboardSize,
  monitoringJsonPresent: !!jsonObj,
  monitoringJsonAgentsCount: jsonObj?.agents?.length ?? 0,
};

fs.writeFileSync(path.join(__dirname, 'pre-deploy-repo-check.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
