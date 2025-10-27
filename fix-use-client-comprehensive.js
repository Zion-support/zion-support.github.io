#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix "use client" directive placement
function fixUseClientDirective(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Check if file has "use client" directive
  if (fixed.includes("'use client'")) {
    const lines = fixed.split('\n');
    const useClientIndex = lines.findIndex(line => line.trim() === "'use client';" || line.trim() === "'use client'");
    
    if (useClientIndex > 0) {
      // Move "use client" to the top
      const useClientLine = lines[useClientIndex].trim();
      if (!useClientLine.endsWith(';')) {
        lines[useClientIndex] = "'use client';";
      }
      lines.splice(useClientIndex, 1);
      lines.unshift("'use client';");
      fixed = lines.join('\n');
      changes++;
    } else if (useClientIndex === 0) {
      // Make sure it ends with semicolon
      if (lines[0].trim() === "'use client'") {
        lines[0] = "'use client';";
        fixed = lines.join('\n');
        changes++;
      }
    }
  }

  return { content: fixed, changes };
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
console.log('Starting comprehensive "use client" directive fixes...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let totalFixed = 0;
for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const result = fixUseClientDirective(content, file);
    
    if (result.changes > 0) {
      fs.writeFileSync(file, result.content);
      console.log(`Fixed "use client" directive in ${file}`);
      totalFixed += result.changes;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nTotal "use client" directive fixes: ${totalFixed}`);
console.log('Comprehensive "use client" directive fixes completed!');