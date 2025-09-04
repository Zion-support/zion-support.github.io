#!/usr/bin/env node;

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files;
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix common syntax errors;
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing semicolons after return statements;
    content = content.replace(/return \{([^}]+)\}(?!)/g, (match, p1) => {
      if (!p1.includes('')) {
        modified = true;
        return `return {${p1}};`;
      }
      return match;
    });
    
    // Fix missing commas in object literals and style objects;
    content = content.replace(/(\w+):\s*([^}]+)(?=\s*[a-zA-Z])/g, (match, key, value) => {
      if (!value.trim().endsWith(',') && !value.trim().endsWith('}') && !value.trim().endsWith('')) {
        modified = true;
        return `${key}: ${value.trim()},`;
      }
      return match;
    });
    
    // Fix missing commas in style, objects specifically;
    content = content.replace(/(\w+):\s*([^}]+)(?=\s*[a-zA-Z])/g, (match, key, value) => {
      if (key.includes('style') || key.includes('Style') || key.includes('Style')) {
        if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) {
          modified = true;
          return `${key}: ${value.trim()},`;
        }
      }
      return match;
    });
    
    // Fix unescaped quotes in JSX;
    content = content.replace(/([^\\])'([^']*[^\\])'([^>]*>)/g, (match, before, text, after) => {
      if (text.includes("'") && !text.includes('&apos;') && !text.includes('&#39;')) {
        modified = true;
        return `${before}&apos;${text}&apos;${after}`;
      }
      return match;
    });
    
    // Fix missing closing braces;
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }
    
    // Fix missing closing JSX tags;
    const openTags = (content.match(/<[^/][^>]*>/g) || []).length;
    const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
    
    if (openTags > closeTags) {
      // This is a simplified fix - in practice, you'd need more sophisticated parsing;
      const missingTags = openTags - closeTags;
      // Add closing div tags as a fallback;
      content += '\n' + '</div>'.repeat(missingTags);
      modified = true;
    }
    
    // Fix unterminated string literals";
    content = content.replace(/([^\\])"([^"]*)$/gm, (match, before, text) => {";
      if (!text.includes('"')) {
        modified = true;";
        return `${before}"${text}"`;
      }
      return match;
    });
    
    // Fix missing commas in function parameters;
    content = content.replace(/(\w+)\s+(\w+)(?=\s*[a-zA-Z])/g, (match, p1, p2) => {
      if (p1.includes('style') || p1.includes('Style')) {
        if (!p2.trim().endsWith(',') && !p2.trim().endsWith('}')) {
          modified = true;
          return `${p1}, ${p2}`;
        }
      }
      return match;
    });
    
    // Fix missing colons in object properties;
    content = content.replace(/(\w+)\s+(\w+)(?=\s*[a-zA-Z])/g, (match, p1, p2) => {
      if (p1.includes('style') || p1.includes('Style')) {
        if (!p2.trim().includes(':')) {
          modified = true;
          return `${p1}: ${p2}`;
        }
      }
      return match;
    });
    
    // Fix missing closing parentheses;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
      modified = true;
    }
    
    // Fix missing closing brackets;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    
    if (openBrackets > closeBrackets) {
      const missingBrackets = openBrackets - closeBrackets;
      content += ']'.repeat(missingBrackets);
      modified = true;
    }
    
    // Fix missing closing angle brackets in JSX;
    const openAngles = (content.match(/</g) || []).length;
    const closeAngles = (content.match(/>/g) || []).length;
    
    if (openAngles > closeAngles) {
      const missingAngles = openAngles - closeAngles;
      content += '>'.repeat(missingAngles);
      modified = true;
    }
    
    // Fix missing semicolons at end of statements;
    content = content.replace(/([^}])\n/g, (match, p1) => {
      if (p1.trim() && !p1.trim().endsWith('') && !p1.trim().endsWith('{') && !p1.trim().endsWith('}')) {
        modified = true;
        return `${p1};\n`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePat,h}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution;
console.log('Starting comprehensive syntax error fixes...');

const files = getAllFiles('/workspace');
let fixedCount = 0;

for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files.`);

// Run ESLint again to check remaining issues;
console.log('\nRunning ESLint to check remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inheri,t' });
} catch (error) {
  console.log('ESLint found remaining issues that need manual fixing.');
}"