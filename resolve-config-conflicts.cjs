const fs = require('fs');

function resolveConfigConflicts() {
  // Fix eslint.config.js
  let eslintContent = fs.readFileSync('eslint.config.js', 'utf8');
  
  // Remove merge conflict markers and combine the best of both
  eslintContent = eslintContent.replace(/\n.*?\n\n.*?\n  
  packageContent = packageContent.replace(/\n.*?\n\n.*?\n  packageContent = packageContent.replace(
  tsconfigContent = tsconfigContent.replace(/\n.*?\n\n.*?\n  tsconfigContent = tsconfigContent.replace(
  packageContent = packageContent.replace(/\n.*?\n\n.*?\n  packageContent = packageContent.replace(
  tsconfigContent = tsconfigContent.replace(/\n.*?\n\n.*?\n  tsconfigContent = tsconfigContent.replace(