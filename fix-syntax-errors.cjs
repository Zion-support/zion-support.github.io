#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Starting comprehensive syntax error and merge conflict resolution...');

// Common syntax error patterns to fix
const fixes = [
  // Fix semicolons instead of commas in object properties
  {
    pattern: /(\w+):\s*(\w+);/g,
    replacement: '$1: $2,',
    description: 'Fix semicolons in object properties'
  },
  // Fix commas instead of semicolons in statements
  {
    pattern: /(\w+\([^)]*\)),\s*$/gm,
    replacement: '$1;',
    description: 'Fix commas at end of statements'
  },
  // Fix missing semicolons after variable declarations
  {
    pattern: /(let|const|var)\s+(\w+)\s*=\s*([^;]+),\s*$/gm,
    replacement: '$1 $2 = $3;',
    description: 'Fix missing semicolons after variable declarations'
  },
  // Fix merge conflict markers
  {
    pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g,
    replacement: '',
    description: 'Remove merge conflict markers'
  },
  // Fix Content-Type header syntax
  {
    pattern: /res\.setHeader\('Content-Typeapplication\/pdf'\);/g,
    replacement: "res.setHeader('Content-Type', 'application/pdf');",
    description: 'Fix Content-Type header syntax'
  },
  // Fix Allow header syntax
  {
    pattern: /res\.setHeader\('Allow(\w+)',/g,
    replacement: "res.setHeader('Allow', '$1');",
    description: 'Fix Allow header syntax'
  },
  // Fix PDFDocument constructor syntax
  {
    pattern: /new PDFDocument\(\{\s*size:\s*'([^']+)';\s*margin:\s*(\d+)\s*\}\)/g,
    replacement: "new PDFDocument({ size: '$1', margin: $2 })",
    description: 'Fix PDFDocument constructor syntax'
  },
  // Fix OpenAI API call syntax
  {
    pattern: /model:\s*'([^']+)';/g,
    replacement: "model: '$1',",
    description: 'Fix OpenAI model parameter syntax'
  },
  // Fix object property syntax in arrays
  {
    pattern: /(\w+):\s*(\w+);\s*name:/g,
    replacement: '$1: $2, name:',
    description: 'Fix object property syntax'
  }
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`  ✓ ${fix.description}`);
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`  ❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript and JavaScript files
const patterns = [
  'pages/api/**/*.ts',
  'pages/api/**/*.js',
  'components/**/*.tsx',
  'components/**/*.ts',
  'utils/**/*.ts',
  'lib/**/*.ts'
];

let totalFiles = 0;
let fixedFiles = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  totalFiles += files.length;
  
  files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    console.log(`\n🔍 Processing: ${file}`);
    
    if (fixFile(fullPath)) {
      fixedFiles++;
      console.log(`  ✅ Fixed: ${file}`);
    } else {
      console.log(`  ⏭️  No changes needed: ${file}`);
    }
  });
});

console.log(`\n🎉 Summary:`);
console.log(`  📁 Total files processed: ${totalFiles}`);
console.log(`  🔧 Files modified: ${fixedFiles}`);
console.log(`  ⏭️  Files unchanged: ${totalFiles - fixedFiles}`);

if (fixedFiles > 0) {
  console.log(`\n✨ Successfully fixed ${fixedFiles} files!`);
} else {
  console.log(`\n✨ No files needed fixing.`);
}

console.log('\n🏁 Syntax error resolution complete!');