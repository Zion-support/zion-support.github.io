#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixRemainingSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix extra commas in function definitions
    content = content.replace(/const \w+Page: React\.FC = \(\) => \{,/g, 'const $1Page: React.FC = () => {');
    content = content.replace(/const \w+ = \[,/g, 'const $1 = [');
    content = content.replace(/\{\s*,/g, '{');
    
    // Fix semicolons in object properties
    content = content.replace(/icon: \w+;/g, (match) => match.replace(';', ','));
    content = content.replace(/title: '[^']+';/g, (match) => match.replace(';', ','));
    content = content.replace(/description: '[^']+';/g, (match) => match.replace(';', ','));
    content = content.replace(/benefits: \[[^\]]+\];/g, (match) => match.replace(';', ','));
    content = content.replace(/name: '[^']+';/g, (match) => match.replace(';', ','));
    content = content.replace(/label: '[^']+';/g, (match) => match.replace(';', ','));
    content = content.replace(/count: \d+;/g, (match) => match.replace(';', ','));
    
    // Fix missing commas in object properties
    content = content.replace(/icon: \w+\s*title:/g, (match) => match.replace('title:', ', title:'));
    content = content.replace(/title: '[^']+'\s*description:/g, (match) => match.replace('description:', ', description:'));
    content = content.replace(/description: '[^']+'\s*benefits:/g, (match) => match.replace('benefits:', ', benefits:'));
    content = content.replace(/name: '[^']+'\s*label:/g, (match) => match.replace('label:', ', label:'));
    content = content.replace(/label: '[^']+'\s*count:/g, (match) => match.replace('count:', ', count:'));
    
    // Remove duplicate function definitions and orphaned JSX
    const lines = content.split('\n');
    let inFunction = false;
    let braceCount = 0;
    let functionStart = -1;
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('const ') && line.includes('Page: React.FC = () => {')) {
        if (inFunction) {
          // Skip duplicate function definitions
          continue;
        }
        inFunction = true;
        functionStart = i;
        braceCount = 0;
      }
      
      if (inFunction) {
        cleanedLines.push(line);
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        
        if (braceCount === 0 && line.includes('}')) {
          inFunction = false;
        }
      } else if (!line.includes('import ') && !line.includes('export ') && !line.includes('const ') && !line.includes('function ')) {
        // Skip orphaned JSX and other content outside functions
        continue;
      } else {
        cleanedLines.push(line);
      }
    }
    
    content = cleanedLines.join('\n');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const { execSync } = require('child_process');

try {
  const files = execSync('find /workspace/app -name "*.tsx" -o -name "*.ts" | head -100', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(f => f && !f.includes('node_modules'));

  console.log(`Fixing syntax in ${files.length} files`);
  
  let fixed = 0;
  for (const file of files) {
    if (fixRemainingSyntax(file)) {
      fixed++;
    }
  }
  
  console.log(`Fixed syntax in ${fixed} files`);
} catch (error) {
  console.error('Error:', error.message);
}