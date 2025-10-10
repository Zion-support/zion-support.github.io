#!/usr/bin/env node

const fs = require('fs');

function fixPerformanceMonitor() {
  try {
    let content = fs.readFileSync('src/utils/performanceMonitor.ts', 'utf8');
    
    // Fix all unterminated string literals
    content = content.replace(/'([^']*);/g, "'$1';");
    content = content.replace(/"([^"]*);/g, '"$1";');
    
    // Fix missing semicolons
    content = content.replace(/}\s*$/gm, '};');
    content = content.replace(/\)\s*$/gm, ');');
    
    // Fix specific patterns
    content = content.replace(/undefined\)/g, "undefined')");
    content = content.replace(/undefined'/g, "undefined'");
    
    fs.writeFileSync('src/utils/performanceMonitor.ts', content, 'utf8');
    console.log('Fixed performanceMonitor.ts');
    return true;
  } catch (error) {
    console.error('Error fixing performanceMonitor.ts:', error.message);
    return false;
  }
}

fixPerformanceMonitor();