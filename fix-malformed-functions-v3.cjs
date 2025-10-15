#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with the malformed return; pattern
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has the malformed pattern
    if (content.includes('return;\n},')) {
      console.log(`Fixing ${filePath}...`);
      
      // Split content into lines
      const lines = content.split('\n');
      const newLines = [];
      let i = 0;
      
      while (i < lines.length) {
        const line = lines[i];
        
        // Check if this is the malformed return; line
        if (line.trim() === 'return;' && i + 1 < lines.length && lines[i + 1].trim() === ',') {
          // Skip the return; and comma lines
          i += 2;
          
          // Collect the object literals until we find the closing bracket and semicolon
          const objectLines = [];
          let braceCount = 0;
          let foundStart = false;
          
          while (i < lines.length) {
            const currentLine = lines[i];
            
            // Count braces to track when we're inside objects
            for (const char of currentLine) {
              if (char === '{') {
                braceCount++;
                foundStart = true;
              } else if (char === '}') {
                braceCount--;
              }
            }
            
            objectLines.push(currentLine);
            
            // If we found the start and brace count is 0, we've reached the end
            if (foundStart && braceCount === 0 && currentLine.trim().endsWith('];')) {
              i++;
              break;
            }
            
            i++;
          }
          
          // Create the proper variable declaration
          const objectContent = objectLines.join('\n');
          // Remove the leading comma and fix indentation
          const cleanedContent = objectContent.replace(/^\s*,\s*/, '').replace(/^\s+/gm, '    ');
          
          // Determine variable name based on content
          let varName = 'features';
          if (objectContent.includes('title:')) {
            varName = 'features';
          } else if (objectContent.includes('name:') && objectContent.includes('price:')) {
            varName = 'pricingPlans';
          } else if (objectContent.includes('number:') && objectContent.includes('label:')) {
            varName = 'stats';
          } else if (objectContent.includes('name:') && objectContent.includes('company:')) {
            varName = 'testimonials';
          }
          
          newLines.push(`  const ${varName} = [`);
          newLines.push(cleanedContent);
          newLines.push('  ];');
          newLines.push('');
        } else {
          newLines.push(line);
          i++;
        }
      }
      
      // Write the fixed content
      fs.writeFileSync(fullPath, newLines.join('\n'));
      fixedCount++;
      console.log(`✓ Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files.`);