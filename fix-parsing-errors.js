import fs from 'fs';
import path from 'path';

// Function to fix parsing errors in a file
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix double semicolons
    if (content.includes(';;')) {
      content = content.replace(/;;/g, ';');
      modified = true;
    }
    
    // Fix malformed function declarations
    const malformedFunctionPattern = /export default function\s+(\w+)\s*\(\s*\)\s*\{\s*(\s*\{[\s\S]*?\});/g;
    const match = content.match(malformedFunctionPattern);
    
    if (match) {
      // Extract the function name and the features array
      const functionName = match[0].match(/export default function\s+(\w+)/)[1];
      const featuresArray = match[0].match(/\{\s*(\{[\s\S]*?\})\s*\}/)[1];
      
      // Replace with proper structure
      content = content.replace(malformedFunctionPattern, `const features = [${featuresArray}];\n\nexport default function ${functionName}() {`);
      modified = true;
    }
    
    // Fix missing function declarations where there's just a features array
    const featuresOnlyPattern = /^const features = \[[\s\S]*?\];\s*$/m;
    if (featuresOnlyPattern.test(content) && !content.includes('export default function')) {
      // Find the function name from the file path
      const fileName = path.basename(filePath, '.tsx');
      const functionName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      // Add function declaration
      content = content.replace(featuresOnlyPattern, `$&\n\nexport default function ${functionName}() {`);
      modified = true;
    }
    
    // Fix JSX expressions that must have one parent element
    const jsxParentPattern = /return\s*\(\s*<([^>]+)>\s*<([^>]+)>[\s\S]*?<\/\2>\s*<([^>]+)>[\s\S]*?<\/\3>\s*\)/g;
    if (jsxParentPattern.test(content)) {
      content = content.replace(jsxParentPattern, (match, parent, child1, child2) => {
        return match.replace(`<${parent}>`, `<${parent}><div>`).replace(`</${parent}>`, `</div></${parent}>`);
      });
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed parsing errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixParsingErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix parsing errors...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed parsing errors in ${fixedCount} files.`);