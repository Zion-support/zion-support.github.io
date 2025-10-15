import fs from 'fs';
import path from 'path';

// Function to fix malformed function declarations
function fixMalformedFunctions(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern 1: export default function Name() { return; },
    const pattern1 = /export default function\s+(\w+)\s*\(\s*\)\s*\{\s*return;\s*\},\s*(\s*\{[\s\S]*?\});/g;
    
    // Pattern 2: export default function Name() { return; },
    const pattern2 = /export default function\s+(\w+)\s*\(\s*\)\s*\{\s*return;\s*\},/g;
    
    let modified = false;
    
    // Fix pattern 1 - where there's a features array after the malformed function
    if (pattern1.test(content)) {
      content = content.replace(pattern1, (match, functionName, featuresArray) => {
        modified = true;
        return `const features = ${featuresArray};\n\nexport default function ${functionName}() {`;
      });
    }
    
    // Fix pattern 2 - where there's just the malformed function
    if (pattern2.test(content)) {
      content = content.replace(pattern2, (match, functionName) => {
        modified = true;
        return `export default function ${functionName}() {`;
      });
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMalformedFunctions(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix malformed function declarations...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files.`);