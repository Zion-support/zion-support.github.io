import fs from 'fs';

// Files with specific issues
const filesToFix = [
  'app/ai-code-assistant/page.tsx',
  'app/ai-content-generation/page.tsx', 
  'app/ai-database-solutions/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/ai-voice-assistant-enterprise/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix pattern: const SomeFunction = () => {\n  return;\n},
    const pattern1 = /const \w+ = \(\) => \{\s*return;\s*\},/;
    if (pattern1.test(content)) {
      content = content.replace(pattern1, 'const $1 = () => {');
      modified = true;
    }
    
    // Fix pattern: Missing const declaration before array
    const pattern2 = /(\s*)\n\s*\{\s*\n(\s*title:)/;
    if (pattern2.test(content) && !content.includes('const features = [')) {
      content = content.replace(pattern2, '$1\n  const features = [\n    {\n$2');
      modified = true;
    }
    
    // Fix pattern: Duplicate const declarations
    const lines = content.split('\n');
    const constLines = lines.filter(line => line.trim().startsWith('const '));
    const uniqueConstLines = [...new Set(constLines)];
    if (constLines.length !== uniqueConstLines.length) {
      // Remove duplicate const declarations
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
    
    // Fix pattern: Missing closing braces
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

// Fix all files
let fixedCount = 0;
filesToFix.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} out of ${filesToFix.length} files`);