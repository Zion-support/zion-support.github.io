#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMergeConflictsAndSyntax(filePath) {
  try {let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep HEAD version
    const originalContent = content;
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n    content = content.replace(/<<<<<<< HEAD\s*\n([\s\S]*?)\n=======\s*\n([\s\S]*?)\n    // Fix common syntax issues
    content = content.replace(/=======\s*\n\s*    content = content.replace(/<<<<<<< HEAD\s*\n/g, '');
    content = content.replace(/=======\s*\n/g, '');
    content = content.replace(/    // Fix malformed JSX closing tags
    content = content.replace(/<(\w+)\s*\/\s*>/g, '<$1 />');
    
    // Fix unclosed JSX tags by adding proper closing
    content = content.replace(/<(\w+)([^>]*?)(?<!\/)>(\s*)(?!.*<\/\1>)(?![^<]*<\/\1>)/g, (match, tagName, attributes, whitespace) => {
      // Only fix if it's not a self-closing tag
      if (!attributes.includes('/>') && !attributes.includes('</')) {
        return `<${tagName} $ {attributes}>${whitespace}</${tagName} >`;
      }
      return match;
    });
    
    // Fix broken JSX expressions
    content = content.replace(/\ {\s*([^}]*?)\s*\}\s*([^<{]*?)\s*\{/g, '{$1} $2 {');
    
    // Remove orphaned merge conflict markers
    content = content.replace(/^<<<<<<< HEAD\s*$/gm, '');
    content = content.replace(/^=======\s*$/gm, '');
    content = content.replace(/^    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath} `);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath} :`, error.message);
    return false;
  }
}

function findFilesWithIssues(dir) {
  const files = [];
  
  function traverse(currentDir) {const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules') && !item.includes('dist') && !item.includes('build')) {
        traverse(fullPath);} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('            content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {files.push(fullPath);} }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
const filesWithIssues = findFilesWithIssues(workspaceDir);

console.log(`Found $ {filesWithIssues.length} files with issues`);

let fixedCount = 0;
for (const file of filesWithIssues) {if (fixMergeConflictsAndSyntax(file)) {
    fixedCount++;} }

console.log(`Fixed $ {fixedCount} files`);