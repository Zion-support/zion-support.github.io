const fs = require('fs');
const path = require('path');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX fragments - the main issue
    // Look for patterns like: return ( <> <Head> ... </Head> <div> ... </div> </> );
    // and fix them to proper JSX structure
    
    // Fix the specific pattern where JSX fragments are malformed
    if (content.includes('return (') && content.includes('<>')) {
      // Check if the JSX structure is malformed
      const lines = content.split('\n');
      let newLines = [];
      let inJSX = false;
      let jsxDepth = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check for return statement
        if (line.includes('return (') && line.includes('<>')) {
          inJSX = true;
          jsxDepth = 1;
          newLines.push(line);
          continue;
        }
        
        // Check for opening JSX fragments
        if (inJSX && line.includes('<>')) {
          jsxDepth++;
          newLines.push(line);
          continue;
        }
        
        // Check for closing JSX fragments
        if (inJSX && line.includes('</>')) {
          jsxDepth--;
          newLines.push(line);
          if (jsxDepth === 0) {
            inJSX = false;
          }
          continue;
        }
        
        // Check for end of return statement
        if (inJSX && (line.includes(');') || line.includes('}')) && jsxDepth > 0) {
          // Add missing closing fragments
          for (let j = 0; j < jsxDepth; j++) {
            newLines.push('    </>');
          }
          inJSX = false;
          jsxDepth = 0;
          newLines.push(line);
          modified = true;
          continue;
        }
        
        newLines.push(line);
      }
      
      if (modified) {
        content = newLines.join('\n');
      }
    }

    // Fix specific className issues that might still exist
    content = content.replace(/bg-slate-900text-white/g, 'bg-slate-900 text-white');
    content = content.replace(/px-4sm:px-6lg:px-8py-12/g, 'px-4 sm:px-6 lg:px-8 py-12');
    content = content.replace(/grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8/g, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8');

    // Fix malformed closing tags
    content = content.replace(/<\/footer>\s*<div/g, '</footer>\n      <div');
    content = content.replace(/<\/div>,\s*<div/g, '</div>\n        <div');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX structure in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixJSXStructure(filePath);
    }
  });
}

// Start fixing from the app directory
console.log('Starting JSX structure fixes...');
walkDir('./app');
walkDir('./src');
console.log('JSX structure fixes completed!');