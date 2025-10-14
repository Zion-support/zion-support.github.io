#!/usr/bin/env node;

// Get list of files with merge conflicts;
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8'
const conflictedFiles = gitStatus
  .split('\n'
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'
  .map(line => line.substring(3).trim())

let resolvedCount = 0;
let errorCount = 0;
for (const file of conflictedFiles) {
  try {

    if (!fs.existsSync(file)) {
      console.log(`⚠️  File does not exist: ${file}`
      continue;
    }
;

      continue;
    }
    // Strategy: Use the version from main (the newer version) for most conflicts

