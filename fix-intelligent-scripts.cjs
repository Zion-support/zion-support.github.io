#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const scriptsDir = 'scripts/intelligent';
const scripts = [
  'error-prevention-system.js',
  'performance-optimizer.js',
  'dependency-manager.js',
  'code-quality-monitor.js',
  'build-monitor.js',
  'security-auditor.js',
  'git-workflow-automator.js',
  'log-analyzer.js',
  'resource-optimizer.js'
];

function fixScript(scriptName) {
  const scriptPath = path.join(scriptsDir, scriptName);
  
  if (!fs.existsSync(scriptPath)) {
    console.log(`Script not found: ${scriptPath}`);
    return}
  
  let content = fs.readFileSync(scriptPath, 'utf8');
  
  // Replace CommonJS imports with ES modules
  content = content.replace(
    /const fs = require\('fs'\);\nconst path = require\('path'\);\nconst { execSync } = require\('child_process'\);/,
    `import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);`
  );
  
  // Replace module.exports with export default
  content = content.replace(/module\.exports = \w+;/, 'export default $1;');
  
  // Replace require.main check
  content = content.replace(
    /if \(require\.main === module\) \{/,
    'if (import.meta.url === `file://${process.argv[1]}`) {'
  );
  
  // Fix any remaining require statements
  content = content.replace(/require\('crypto'\)/g, "import crypto from 'crypto'");
  
  fs.writeFileSync(scriptPath, content);
  console.log(`Fixed: ${scriptName}`)}

console.log('Fixing intelligent automation scripts...');

scripts.forEach(fixScript);

console.log('All scripts fixed!');