import fs from 'fs';

// Files with specific const declaration issues
const filesToFix = [
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-marketing-automation-pro/page.tsx',
  'app/ai-neural-memory-assistant/page.tsx',
  'app/ai-project-manager-pro/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix pattern: const SomeFunction = () => {  return (
    const pattern1 = /const \w+ = \(\) => \{\s*return \(\s*\n\s*const features = \[/;
    if (pattern1.test(content)) {
      content = content.replace(pattern1, 'const $1 = () => {\n  const features = [');
      modified = true;
    }
    
    // Fix pattern: Missing return statement
    const pattern2 = /const \w+ = \(\) => \{\s*\n\s*const features = \[/;
    if (pattern2.test(content)) {
      content = content.replace(pattern2, 'const $1 = () => {\n  const features = [');
      modified = true;
    }
    
    // Fix pattern: Add return statement before JSX
    const pattern3 = /(\s*const \w+ = \[[^}]*\];\s*)\n\s*return \(/;
    if (pattern3.test(content)) {
      // Already has return statement
    } else {
      const jsxPattern = /(\s*const \w+ = \[[^}]*\];\s*)\n\s*<[A-Z]/;
      if (jsxPattern.test(content)) {
        content = content.replace(jsxPattern, '$1\n\n  return (\n    <');
        modified = true;
      }
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