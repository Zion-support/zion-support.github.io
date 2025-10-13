const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix parsing errors and unused imports
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix parsing errors - remove malformed imports
  if (content.includes('import { useLocation, useNavigate } from \'react-router-dom\';') && 
      !content.includes('useLocation(') && !content.includes('useNavigate(')) {
    content = content.replace(/import { useLocation, useNavigate } from 'react-router-dom';\n?/g, '');
    modified = true;
  }

  // Fix unused imports - remove if not used
  if (content.includes('import { useLocation } from \'react-router-dom\';') && !content.includes('useLocation(')) {
    content = content.replace(/import { useLocation } from 'react-router-dom';\n?/g, '');
    modified = true;
  }

  if (content.includes('import { useNavigate } from \'react-router-dom\';') && !content.includes('useNavigate(')) {
    content = content.replace(/import { useNavigate } from 'react-router-dom';\n?/g, '');
    modified = true;
  }

  // Fix unused variables - remove if not used in JSX
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip unused data arrays
    if (line.includes('const stats = [') && !content.includes('stats.')) {
      // Find the end of this array declaration
      let j = i;
      let braceCount = 0;
      let inArray = false;
      while (j < lines.length) {
        const currentLine = lines[j];
        if (currentLine.includes('const stats = [')) {
          inArray = true;
          braceCount = (currentLine.match(/\[/g) || []).length - (currentLine.match(/\]/g) || []).length;
        } else if (inArray) {
          braceCount += (currentLine.match(/\[/g) || []).length - (currentLine.match(/\]/g) || []).length;
          if (braceCount <= 0) {
            // Skip this entire array declaration
            i = j;
            break;
          }
        }
        j++;
      }
      continue;
    }

    if (line.includes('const features = [') && !content.includes('features.')) {
      // Find the end of this array declaration
      let j = i;
      let braceCount = 0;
      let inArray = false;
      while (j < lines.length) {
        const currentLine = lines[j];
        if (currentLine.includes('const features = [')) {
          inArray = true;
          braceCount = (currentLine.match(/\[/g) || []).length - (currentLine.match(/\]/g) || []).length;
        } else if (inArray) {
          braceCount += (currentLine.match(/\[/g) || []).length - (currentLine.match(/\]/g) || []).length;
          if (braceCount <= 0) {
            // Skip this entire array declaration
            i = j;
            break;
          }
        }
        j++;
      }
      continue;
    }

    if (line.includes('const testimonials = [') && !content.includes('testimonials.')) {
      // Find the end of this array declaration
      let j = i;
      let braceCount = 0;
      let inArray = false;
      while (j < lines.length) {
        const currentLine = lines[j];
        if (currentLine.includes('const testimonials = [')) {
          inArray = true;
          braceCount = (currentLine.match(/\[/g) || []).length - (currentLine.match(/\]/g) || []).length;
        } else if (inArray) {
          braceCount += (currentLine.match(/\[/g) || []).length - (currentLine.match(/\]/g) || []).length;
          if (braceCount <= 0) {
            // Skip this entire array declaration
            i = j;
            break;
          }
        }
        j++;
      }
      continue;
    }

    newLines.push(line);
  }

  const newContent = newLines.join('\n');

  // Fix specific parsing errors
  let finalContent = newContent;

  // Fix malformed import statements
  finalContent = finalContent.replace(/^import\s*$/gm, '');
  finalContent = finalContent.replace(/^import\s*{\s*}\s*from\s*'[^']*';\s*$/gm, '');
  
  // Fix empty lines at the beginning
  finalContent = finalContent.replace(/^\s*\n+/, '');

  // Fix missing React import
  if (finalContent.includes('const ') && finalContent.includes('= () =>') && !finalContent.includes('import React')) {
    finalContent = 'import React from \'react\';\n' + finalContent;
    modified = true;
  }

  if (finalContent !== content) {
    fs.writeFileSync(filePath, finalContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// Main execution
console.log('Starting remaining error fixes...');

// Get all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join(__dirname, file);
  try {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  } catch (error) {
    console.log(`Error fixing ${file}: ${error.message}`);
  }
}

console.log(`Fixed ${fixedCount} files`);