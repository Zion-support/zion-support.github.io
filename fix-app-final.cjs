#!/usr/bin/env node

const fs = require('fs');

function fixAppFinal() {
  try {
    let content = fs.readFileSync('App.tsx', 'utf8');
    
    // Fix all lazy imports with extra quotes
    content = content.replace(/React\.lazy\(\(\) => import\('([^']+)'\)\)';/g, "React.lazy(() => import('$1'));");
    
    // Fix any remaining double quotes
    content = content.replace(/''/g, "'");
    content = content.replace(/""/g, '"');
    
    // Fix any remaining syntax issues
    content = content.replace(/\);\);/g, '));');
    content = content.replace(/\);\)/g, '));');
    content = content.replace(/\);\)/g, '));');
    
    fs.writeFileSync('App.tsx', content, 'utf8');
    console.log('Fixed App.tsx final');
    return true;
  } catch (error) {
    console.error('Error fixing App.tsx:', error.message);
    return false;
  }
}

fixAppFinal();