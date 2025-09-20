#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

// List of files with known issues
const problemFiles = [
  'app/components/AIPoweredSearch.tsx',
  'app/components/AISolutionsComparison.tsx',
  'app/components/AdvancedAIChatbot.tsx',
  'app/components/DynamicFAQ.tsx',
  'app/components/InteractiveFeatureShowcase.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Fix unterminated string literals at end of export statements
    content = content.replace(/export default (\w+)'$/gm, (match, componentName) => {
      hasChanges = true;
      return `export default ${componentName}`;
    });

    // Fix semicolon instead of comma in switch cases
    content = content.replace(/case '([^']+)': return ([^;]+),/g, (match, caseValue, returnValue) => {
      hasChanges = true;
      return `case '${caseValue}': return ${returnValue};`;
    });

    // Fix missing semicolon in switch cases
    content = content.replace(/case '([^']+)': return ([^;]+);/g, (match, caseValue, returnValue) => {
      hasChanges = true;
      return `case '${caseValue}': return ${returnValue};`;
    });

    // Fix missing const declaration
    content = content.replace(/\]\),\s*const \[([^\]]+)\] = useState\(/g, (match, stateVar) => {
      hasChanges = true;
      return `]),\n  const [${stateVar}] = useState(`;
    });

    // Fix arrow function parameter syntax
    content = content.replace(/\.filter\((\w+) : any =>/g, (match, param) => {
      hasChanges = true;
      return `.filter(${param} =>`;
    });

    // Fix useEffect arrow function syntax
    content = content.replace(/useEffect\(\(\) : any =>/g, (match) => {
      hasChanges = true;
      return 'useEffect(() =>';
    });

    // Fix setInterval arrow function syntax
    content = content.replace(/setInterval\(\(\) : any =>/g, (match) => {
      hasChanges = true;
      return 'setInterval(() =>';
    });

    // Fix trailing comma in object/array literals
    content = content.replace(/,\s*\)\s*;\s*$/gm, (match) => {
      hasChanges = true;
      return ');';
    });

    // Fix missing semicolon after object literal
    content = content.replace(/}\s*,\s*$/gm, (match) => {
      hasChanges = true;
      return '};';
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all problem files
let fixedCount = 0;
for (const file of problemFiles) {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  } else {
    console.log(`⚠️ File not found: ${file}`);
  }
}

console.log(`\n📊 Fixed ${fixedCount} files`);
console.log('🎉 Remaining syntax fixes completed!');