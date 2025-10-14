// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
function runTypeCheck() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    return output;
  } catch (error) {
    // console.error('Error: '',
    return error.stdout || error.stderr || '';
  }
})
)
function processTypeCheckOutput() {
  const typeCheckOutput = runTypeCheck();
  const lines = typeCheckOutput.split('\n');
  lines.forEach(line => {)
    if (line.includes('.tsx') || line.includes('.ts')) {
      // console.log('Processing file: ''),
const createGenericPage = (serviceName, title, description) => ""
}"";