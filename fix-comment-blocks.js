#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix malformed comment blocks
function fixCommentBlocks(content) {
  // Fix malformed console.log comments
  content = content.replace(
    /\/\/ console\.(log|warn|error|info)\([^)]*\):\s*\{([^}]+)\}/gs,
    (match, method, body) => {
      const fixedBody = body.split('\n').map(line => {
        if (line.trim() && !line.trim().startsWith('//')) {
          return '// ' + line.trim();
        }
        return line;
      }).join('\n');
      return `// console.${method}(...): {\n${fixedBody}\n// }`;
    }
  );

  // Fix malformed comment blocks that are missing proper commenting
  content = content.replace(
    /\/\/ [^:]*:\s*\{([^}]+)\}/gs,
    (match, body) => {
      const fixedBody = body.split('\n').map(line => {
        if (line.trim() && !line.trim().startsWith('//')) {
          return '// ' + line.trim();
        }
        return line;
      }).join('\n');
      return match.replace(body, fixedBody);
    }
  );

  // Fix specific patterns we've seen
  content = content.replace(
    /\/\/ console\.(log|warn|error|info)\([^)]*\):\s*\{([^}]+)\}/gs,
    (match, method, body) => {
      const lines = body.split('\n');
      const fixedLines = lines.map(line => {
        if (line.trim() && !line.trim().startsWith('//')) {
          return '// ' + line.trim();
        }
        return line;
      });
      return `// console.${method}(...): {\n${fixedLines.join('\n')}\n// }`;
    }
  );

  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply fixes
    const originalContent = content;
    
    content = fixCommentBlocks(content);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting comment block fixes...');

const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');
const files = [...findSourceFiles(srcDir), ...findSourceFiles(appDir)];

console.log(`Found ${files.length} files to process`);

let processedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    processedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Processed ${processedCount} files`);
console.log('Comment block fixes completed!');