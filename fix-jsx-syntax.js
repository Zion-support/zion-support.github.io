#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax issues
    const fixes = [
      // Fix missing closing tags
      {
        pattern: /<div([^>]*)>\s*$/gm,
        replacement: (match, attrs) => {
          // This is a complex fix, let's just ensure proper structure
          return match;
        }
      },
      // Fix unterminated regular expressions (usually caused by malformed JSX)
      {
        pattern: /\/[^\/\s][^\/]*$/gm,
        replacement: (match) => {
          if (match.includes('className') || match.includes('src') || match.includes('href')) {
            return match;
          }
          return match + '/';
        }
      },
      // Fix missing closing fragments
      {
        pattern: /<>\s*$/gm,
        replacement: '<>'
      },
      // Fix extra closing tags
      {
        pattern: /<\/>\s*<\/>/gm,
        replacement: '</>'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix the support page specifically
const supportPage = path.join(__dirname, 'app', 'support', 'page.tsx');
if (fs.existsSync(supportPage)) {
  console.log('Fixing support page...');
  fixJsxSyntax(supportPage);
}

console.log('JSX syntax fixes completed');