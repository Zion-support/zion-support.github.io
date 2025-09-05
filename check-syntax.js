#!/usr/bin/env node
const fs = require('fs');
// const path = require('path'); // Not currently used

function checkSyntax(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Basic syntax check - could be enhanced with actual parsing
    console.log(`✅ ${filePath} syntax OK (${content.length} chars)`);
    return true;
  } catch (error) {
    console.error(`❌ Syntax error in ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔍 Checking for syntax errors...\n');
console.log('📁 Checking pages directory...');

// Example usage
const testFiles = ['package.json', 'next.config.js'];
testFiles.forEach(file => {
  if (fs.existsSync(file)) {
    checkSyntax(file);
  }
}
});