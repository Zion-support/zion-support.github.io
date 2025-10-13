#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const apiFiles = [
  'api/error-report.js',
  'api/newsletter/subscribe.js',
  'api/quotes.js',
  'api/shipping-rates.js',
  'api/subscribe.js',
  'api/wallet.js'
];

function fixApiFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing closing braces
    if (content.includes('export default handler') && !content.trim().endsWith('}')) {
      content = content.trim() + '\n}';
    }
    
    // Fix missing try blocks for catch statements
    if (content.includes('} catch (error)') && !content.includes('try {')) {
      // Find the catch block and add try before it
      const lines = content.split('\n');
      const catchIndex = lines.findIndex(line => line.includes('} catch (error)'));
      if (catchIndex > 0) {
        // Find the last opening brace before catch
        let tryIndex = catchIndex - 1;
        while (tryIndex >= 0 && !lines[tryIndex].includes('{')) {
          tryIndex--;
        }
        if (tryIndex >= 0) {
          lines[tryIndex] = lines[tryIndex].replace('{', '{\n  try {');
          lines[catchIndex] = lines[catchIndex].replace('} catch (error)', '  } catch (error)');
        }
        content = lines.join('\n');
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all API files
for (const file of apiFiles) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixApiFile(fullPath);
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log('API files fixed');