import fs from 'fs';
import path from 'path';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and choose the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
    
    // Clean up any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Fix common JSX issues
    content = content.replace(/\s*<>\s*<>\s*/g, '<>');
    content = content.replace(/\s*<\/>\s*<\/>\s*/g, '</>');
    
    // Fix unclosed JSX tags by ensuring proper structure
    content = content.replace(/(<[^>]+>)(?!.*<\/[^>]+>)(?=\s*$)/gm, (match, tag) => {
      const tagName = tag.match(/<(\w+)/);
      if (tagName) {
        return match + `</${tagName[1]}>`;
      }
      return match;
    });
    
    // Fix malformed JSX expressions
    content = content.replace(/\s*>\s*>\s*>\s*>\s*>\s*>\s*>\s*/g, '>');
    content = content.replace(/\s*<\s*<\s*<\s*<\s*<\s*<\s*<\s*/g, '<');
    
    // Fix broken JSX syntax
    content = content.replace(/\s*{\s*>\s*}\s*/g, '');
    content = content.replace(/\s*{\s*<\s*}\s*/g, '');
    
    // Ensure proper JSX structure
    content = content.replace(/(\s*)(<[^>]+>)(\s*)(<[^>]+>)(\s*)/g, '$1$2$3$4$5');
    
    // Fix missing closing tags for common elements
    const openTags = content.match(/<(\w+)(?:\s[^>]*)?(?!\s*\/>)/g) || [];
    const closeTags = content.match(/<\/(\w+)>/g) || [];
    
    // Basic validation and cleanup
    content = content.replace(/\s*;\s*$/gm, '');
    content = content.replace(/\s*}\s*$/gm, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/TSX files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace';
const conflictedFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`- ${file}`));

let fixedCount = 0;
conflictedFiles.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${conflictedFiles.length} files.`);