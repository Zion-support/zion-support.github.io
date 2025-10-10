#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixAllIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find the last export statement
    const exportMatch = content.match(/export\s+default\s+\w+;?\s*$/m);
    if (exportMatch) {
      const exportEnd = exportMatch.index + exportMatch[0].length;
      const beforeExport = content.substring(0, exportEnd);
      const afterExport = content.substring(exportEnd);
      
      // Remove everything after the export statement
      if (afterExport.trim()) {
        content = beforeExport;
        modified = true;
      }
    }
    
    // Fix common syntax issues
    content = content.replace(/\)\s*\}\s*\)/g, ')');
    content = content.replace(/\}\s*\)\s*\}/g, '}');
    content = content.replace(/\)\s*\)/g, ')');
    content = content.replace(/\}\s*\}/g, '}');
    
    // Fix missing closing braces in arrays/objects
    const lines = content.split('\n');
    const fixedLines = [];
    let braceCount = 0;
    let inArray = false;
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const trimmed = line.trim();
      
      // Track braces
      braceCount += (line.match(/\{/g) || []).length;
      braceCount -= (line.match(/\}/g) || []).length;
      
      // Check if we're in an array definition
      if (trimmed.includes('const') && trimmed.includes('[') && !trimmed.includes(']')) {
        inArray = true;
      }
      if (inArray && trimmed.includes(']')) {
        inArray = false;
      }
      
      // Fix missing closing brace for arrays
      if (inArray && trimmed.match(/^\s*\]\s*;?\s*$/)) {
        if (braceCount > 0) {
          line = '  }\n' + line;
          modified = true;
        }
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed all issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get list of problematic files
const files = [
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant/page.tsx'
];

console.log(`Fixing all remaining issues in ${files.length} files`);

let fixedCount = 0;
files.forEach(file => {
  if (fs.existsSync(file) && fixAllIssues(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);