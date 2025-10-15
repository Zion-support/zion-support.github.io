import fs from 'fs';
import { glob } from 'glob';

async function findTsxFiles() {
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });
  return files;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix pattern 1: Missing const declaration before array
    const pattern1 = /(\s*)\n\s*\{\s*\n(\s*title:)/;
    if (pattern1.test(content) && !content.includes('const features = [')) {
      content = content.replace(pattern1, '$1\n  const features = [\n    {\n$2');
      modified = true;
    }
    
    // Fix pattern 2: Duplicate const declarations
    const lines = content.split('\n');
    const constLines = lines.filter(line => line.trim().startsWith('const '));
    const uniqueConstLines = [...new Set(constLines)];
    if (constLines.length !== uniqueConstLines.length) {
      const newLines = [];
      const seenConsts = new Set();
      for (const line of lines) {
        if (line.trim().startsWith('const ')) {
          const constName = line.match(/const (\w+)/)?.[1];
          if (constName && !seenConsts.has(constName)) {
            seenConsts.add(constName);
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }
      content = newLines.join('\n');
      modified = true;
    }
    
    // Fix pattern 3: Missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }
    
    // Fix pattern 4: JSX fragments without proper wrapping
    const jsxFragmentPattern = /<>([^<]*)<\/>/g;
    if (jsxFragmentPattern.test(content)) {
      content = content.replace(jsxFragmentPattern, '<div>$1</div>');
      modified = true;
    }
    
    // Fix pattern 5: Missing return statement
    const functionPattern = /const \w+ = \(\) => \{\s*$/m;
    if (functionPattern.test(content)) {
      content = content.replace(functionPattern, '$&  return (');
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