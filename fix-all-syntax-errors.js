import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all .tsx files in the app directory
async function findTsxFiles() {
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });
  return files;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix pattern 1: Missing const features = [ declaration
    // Pattern: export default function SomeFunction() {\n    {\n
    const pattern1 = /(export default function \w+\(\) \{\s*)\n\s*\{\s*\n/;
    const replacement1 = '$1\n  const features = [\n    {\n';
    
    if (pattern1.test(content)) {
      content = content.replace(pattern1, replacement1);
      modified = true;
      
      // Find the closing of the features array and add the closing bracket
      const featuresEndPattern = /(\s*\}\s*)\n\s*const pricingPlans/;
      if (featuresEndPattern.test(content)) {
        content = content.replace(featuresEndPattern, '$1\n  ];\n\n  const pricingPlans');
        modified = true;
      }
    }
    
    // Fix pattern 2: Missing const declaration for other arrays
    // Pattern: const SomeArray = [\n    {\n (missing const)
    const pattern2 = /(\s*)\n\s*\{\s*\n(\s*title:)/;
    if (pattern2.test(content) && !content.includes('const features = [')) {
      content = content.replace(pattern2, '$1\n  const features = [\n    {\n$2');
      modified = true;
    }
    
    // Fix pattern 3: Duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      const nonImportLines = content.split('\n').filter(line => !line.trim().startsWith('import'));
      const firstImportIndex = content.split('\n').findIndex(line => line.trim().startsWith('import'));
      const beforeImports = content.split('\n').slice(0, firstImportIndex);
      const afterImports = content.split('\n').slice(firstImportIndex + importLines.length);
      
      content = [...beforeImports, ...uniqueImports, ...afterImports].join('\n');
      modified = true;
    }
    
    // Fix pattern 4: Missing closing braces for JSX
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const files = await findTsxFiles();
  console.log(`Found ${files.length} .tsx files`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} out of ${files.length} files`);
}

main().catch(console.error);