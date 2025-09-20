#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing final syntax errors...');

// List of files with remaining issues
const problemFiles = [
  'app/components/AISolutionsComparison.tsx',
  'app/components/AdvancedAIChatbot.tsx',
  'app/components/InteractiveFeatureShowcase.tsx',
  'app/components/ModernAnalyticsDashboard.tsx',
  'app/components/PerformanceOptimizer.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Fix semicolon instead of comma in object properties
    content = content.replace(/};\s*([a-zA-Z_][a-zA-Z0-9_]*):\s*{/g, (match, propName) => {
      hasChanges = true;
      return `},\n      ${propName}: {`;
    });

    // Fix arrow function return type syntax
    content = content.replace(/: string : any =>/g, (match) => {
      hasChanges = true;
      return ': string =>';
    });

    // Fix arrow function parameter syntax
    content = content.replace(/(\w+): any =>/g, (match, param) => {
      hasChanges = true;
      return `${param} =>`;
    });

    // Fix missing semicolon after array
    content = content.replace(/\]\);?\s*useEffect/g, (match) => {
      hasChanges = true;
      return ']);\n\n  useEffect';
    });

    // Fix missing semicolon after array
    content = content.replace(/\]\)\s*useEffect/g, (match) => {
      hasChanges = true;
      return ']);\n\n  useEffect';
    });

    // Fix missing semicolon in variable declarations
    content = content.replace(/const (\w+) = ([^;]+),\s*const/g, (match, varName, value) => {
      hasChanges = true;
      return `const ${varName} = ${value};\n  const`;
    });

    // Fix arrow function syntax in forEach
    content = content.replace(/\.forEach\((\w+) : any =>/g, (match, param) => {
      hasChanges = true;
      return `.forEach(${param} =>`;
    });

    // Fix missing semicolon after object
    content = content.replace(/}\s*\)\s*const/g, (match) => {
      hasChanges = true;
      return '});\n\n  const';
    });

    // Fix missing semicolon after object
    content = content.replace(/}\s*\)\s*useEffect/g, (match) => {
      hasChanges = true;
      return '});\n\n  useEffect';
    });

    // Fix return statement in useEffect
    content = content.replace(/return \(\) => ([^;]+);/g, (match, cleanup) => {
      hasChanges = true;
      return `return () => { ${cleanup}; };`;
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
console.log('🎉 Final syntax fixes completed!');