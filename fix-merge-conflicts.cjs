#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to find all files with merge conflicts
function findFilesWithMergeConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (err) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  console.log(`Fixing merge conflicts in: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the newer version (after =======)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepAfterEquals = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        keepAfterEquals = false;
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        keepAfterEquals = true;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        keepAfterEquals = false;
        continue;
      }
      
      if (inConflict) {
        if (keepAfterEquals) {
          fixedLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedLines.join('\n'));
    console.log(`✓ Fixed merge conflicts in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  console.log(`Fixing syntax errors in: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax issues
    // Fix unclosed JSX tags
    content = content.replace(/<([^>]+)(?![^<]*\/>)(?![^<]*<\/\1>)/g, (match, tagName) => {
      if (!match.includes('/>') && !match.includes('</')) {
        return match + '>';
      }
      return match;
    });
    
    // Fix missing closing tags for common elements
    const openTags = ['div', 'section', 'main', 'article', 'header', 'footer', 'nav', 'aside'];
    for (const tag of openTags) {
      const openRegex = new RegExp(`<${tag}([^>]*)>`, 'g');
      const closeRegex = new RegExp(`</${tag}>`, 'g');
      
      const openMatches = content.match(openRegex) || [];
      const closeMatches = content.match(closeRegex) || [];
      
      if (openMatches.length > closeMatches.length) {
        // Add missing closing tags at the end of the component
        const missingTags = openMatches.length - closeMatches.length;
        for (let i = 0; i < missingTags; i++) {
          content += `\n        </${tag}>`;
        }
        modified = true;
      }
    }
    
    // Fix React component structure
    if (content.includes('const') && content.includes('React.FC') && !content.includes('export default')) {
      // Find the component name
      const componentMatch = content.match(/const\s+(\w+):\s*React\.FC/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        content += `\n\nexport default ${componentName};`;
        modified = true;
      }
    }
    
    // Fix missing return statement
    if (content.includes('React.FC') && !content.includes('return (')) {
      const lines = content.split('\n');
      const newLines = [];
      let foundComponent = false;
      let foundReturn = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('React.FC') && !foundComponent) {
          foundComponent = true;
          newLines.push(line);
          newLines.push('  return (');
          continue;
        }
        
        if (foundComponent && !foundReturn && line.trim().startsWith('<>')) {
          foundReturn = true;
        }
        
        newLines.push(line);
      }
      
      if (foundComponent && !foundReturn) {
        content = newLines.join('\n');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const filesWithConflicts = findFilesWithMergeConflicts('./app');

console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
filesWithConflicts.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing merge conflicts...');
filesWithConflicts.forEach(fixMergeConflicts);

console.log('\n🔧 Fixing syntax errors...');
filesWithConflicts.forEach(fixSyntaxErrors);

console.log('\n✅ Merge conflict and syntax error fixing completed!');