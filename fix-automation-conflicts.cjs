#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing merge conflicts in automation files...');

const files = [
  'automation/comprehensive-syntax-fixer.cjs',
  'automation/comprehensive-app-improver.cjs',
  'automation/security-scanner.cjs',
  'automation/git-workflow-automator.cjs',
  'automation/enhanced-master-automation-orchestrator.cjs',
  'automation/error-recovery-system.cjs',
  'automation/deployment-automator.cjs',
  'automation/comprehensive-app-improvement-suite.cjs',
  'automation/performance-optimizer.cjs'
];

let fixedCount = 0;

for (const file of files) {
  const filePath = path.join(process.cwd(), file);

  if (fs.existsSync(filePath)) {
    console.log(`🔧 Fixing ${file}...`);

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove merge conflict markers and keep "ours" version
      content = content.replace(/

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${file}`);
        fixedCount++;
      } else {
        console.log(`⏭️  No conflicts found in ${file}`);
      }
    } catch (error) {
      console.warn(`⚠️  Could not fix ${file}: ${error.message}`);
    }
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} automation files!`);