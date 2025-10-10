const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictType = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<< HEAD')) {
      inConflict = true;
      conflictType = 'head';
      continue;
    }
    
    if (line.startsWith('=======')) {
      conflictType = 'separator';
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      conflictType = null;
      continue;
    }
    
    if (inConflict && conflictType === 'head') {
      resolvedLines.push(line);
    } else if (!inConflict) {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing closing tags
  content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
  content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
  content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1></main>');
  
  // Fix JSX fragments
  content = content.replace(/<>\s*$/gm, '<></>');
  
  // Fix missing semicolons
  content = content.replace(/([^;}])\s*$/gm, '$1;');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Processing file: ${filePath}`);
      
      let resolvedContent = resolveMergeConflicts(content);
      resolvedContent = fixSyntaxErrors(resolvedContent);
      
      // Write the resolved content back
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/TSX files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts('./app');

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

filesWithConflicts.forEach(file => {
  processFile(file);
});

console.log('✅ Merge conflict resolution complete!');