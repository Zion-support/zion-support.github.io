#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to resolve merge conflicts by choosing the appropriate version
function resolveMergeConflicts(content) {
  // Split content into lines
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictBuffer = [];
  let conflictType = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      conflictBuffer = [];
      conflictType = 'head';
      continue;
    }
    
    if (line.startsWith('=======')) {
      conflictType = 'separator';
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      
      // Choose the version after ======= (usually the newer version)
      if (conflictBuffer.length > 0) {
        resolvedLines.push(...conflictBuffer);
      }
      
      conflictBuffer = [];
      conflictType = '';
      continue;
    }
    
    if (inConflict) {
      if (conflictType === 'separator') {
        // This is the version we want to keep (after =======)
        conflictBuffer.push(line);
      }
      // Skip lines before ======= (HEAD version)
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>(?!.*<\/div>)/g, (match, attrs) => {
    // Check if this div has a closing tag
    const openTag = match;
    const afterOpen = fixed.substring(fixed.indexOf(openTag) + openTag.length);
    const hasClosing = afterOpen.includes('</div>');
    
    if (!hasClosing) {
      return match + '</div>';
    }
    return match;
  });
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>([^<]*?)(?!<\/>)/g, '<React.Fragment>$1</React.Fragment>');
  
  // Fix missing imports
  if (fixed.includes('Lightbulb') && !fixed.includes("import { Lightbulb }")) {
    fixed = fixed.replace(
      /import { ([^}]+) } from 'lucide-react'/,
      (match, imports) => {
        if (!imports.includes('Lightbulb')) {
          return `import { ${imports}, Lightbulb } from 'lucide-react'`;
        }
        return match;
      }
    );
  }
  
  // Fix missing React import
  if (fixed.includes('React.Fragment') && !fixed.includes("import React")) {
    fixed = "import React from 'react';\n" + fixed;
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return;
    }
    
    // Resolve merge conflicts
    let resolved = resolveMergeConflicts(content);
    
    // Fix syntax errors
    resolved = fixSyntaxErrors(resolved);
    
    // Write back to file
    fs.writeFileSync(filePath, resolved, 'utf8');
    
    console.log(`✓ Fixed: ${filePath}`);
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

// Main execution
async function main() {
  console.log('Starting merge conflict resolution...');
  
  // Get all TypeScript/JavaScript files in the app directory
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let allFiles = [];
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    allFiles = allFiles.concat(files);
  }
  
  // Remove duplicates
  allFiles = [...new Set(allFiles)];
  
  console.log(`Found ${allFiles.length} files to process`);
  
  // Process each file
  allFiles.forEach(processFile);
  
  console.log('Merge conflict resolution completed!');
}

// Run the main function
main().catch(console.error);

export { resolveMergeConflicts, fixSyntaxErrors, processFile };