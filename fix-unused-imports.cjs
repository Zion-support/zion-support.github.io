const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix unused imports
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused useLocation and useNavigate imports
  if (content.includes('useLocation') && content.includes('useNavigate') && 
      !content.includes('useLocation(') && !content.includes('useNavigate(')) {
    content = content.replace(/import { useLocation, useNavigate } from 'react-router-dom';\n?/g, '');
    modified = true;
  }

  // Remove unused useLocation only
  if (content.includes('useLocation') && !content.includes('useLocation(')) {
    content = content.replace(/import { useLocation } from 'react-router-dom';\n?/g, '');
    modified = true;
  }

  // Remove unused useNavigate only
  if (content.includes('useNavigate') && !content.includes('useNavigate(')) {
    content = content.replace(/import { useNavigate } from 'react-router-dom';\n?/g, '');
    modified = true;
  }

  // Remove unused data arrays
  const lines = content.split('\n');
  const newLines = [];
  let skipUntil = -1;

  for (let i = 0; i < lines.length; i++) {
    if (i <= skipUntil) continue;

    const line = lines[i];
    
    // Skip unused data arrays
    if ((line.includes('const stats = [') || 
         line.includes('const features = [') || 
         line.includes('const testimonials = [') || 
         line.includes('const benefits = [') ||
         line.includes('const capabilities = [') ||
         line.includes('const applications = [') ||
         line.includes('const services = [') ||
         line.includes('const socialLinks = [') ||
         line.includes('const microSaasServices = [')) && 
        !content.includes(line.split('=')[0].trim().replace('const ', '') + '.')) {
      
      // Find the end of this array declaration
      let j = i;
      let braceCount = 0;
      let inArray = false;
      let foundStart = false;
      
      while (j < lines.length) {
        const currentLine = lines[j];
        if (currentLine.includes('const ') && currentLine.includes('= [')) {
          if (j === i) {
            foundStart = true;
            braceCount = (currentLine.match(/\[/g) || []).length - (currentLine.match(/\]/g) || []).length;
          }
        } else if (foundStart) {
          braceCount += (currentLine.match(/\[/g) || []).length - (currentLine.match(/\]/g) || []).length;
          if (braceCount <= 0) {
            // Skip this entire array declaration
            skipUntil = j;
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

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// Main execution
console.log('Starting unused imports fix...');

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