<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

<<<<<<< HEAD:backup-problematic-files/scripts/resolve-final-conflicts.cjs
console.log('🔧 Resolving Final Conflicts');
console.log('');

// Function to resolve merge conflicts by keeping the first version
function resolveMergeConflicts(content) {
  return content
    .replace(/}
=======
console.log('🔧 Final Syntax Cleanup');
console.log('======================');
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/complete-syntax-fix.cjs

// Function to fix all remaining syntax errors
function fixAllSyntax(content) {
  return content
    // Fix malformed JSX tags
    .replace(/<h3([^>]*)>([^<]+)><\/h3>/gm, '<h3$1>$2</h3>')
    .replace(/<h2([^>]*)>([^<]+)><\/h2>/gm, '<h2$1>$2</h2>')
    .replace(/<h1([^>]*)>([^<]+)><\/h1>/gm, '<h1$1>$2</h1>')
    .replace(/<p([^>]*)>([^<]+)><\/p>/gm, '<p$1>$2</p>')
    .replace(/<span([^>]*)>([^<]+)><\/span>/gm, '<span$1>$2</span>')
    .replace(/<div([^>]*)>([^<]+)><\/div>/gm, '<div$1>$2</div>')
    .replace(/<motion\.div([^>]*)>([^<]+)><\/motion\.div>/gm, '<motion.div$1>$2</motion.div>')
    
    // Fix malformed meta tags
    .replace(/<meta([^>]+) \/ \/>/gm, '<meta$1 />')
    .replace(/<meta([^>]+) \/>/gm, '<meta$1 />')
    
    // Fix object literal syntax
    .replace(/\{\s*$/gm, '{')
    .replace(/\[\s*$/gm, '[')
    .replace(/\(\s*$/gm, '(')
    
    // Fix semicolons in wrong places
    .replace(/;\s*$/gm, '')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
    
    // Fix array and object syntax
    .replace(/\[\s*\{\s*$/gm, '[{')
    .replace(/\{\s*\[\s*$/gm, '{[')
    .replace(/\}\s*\]\s*$/gm, '}]')
    .replace(/\]\s*\}\s*$/gm, ']}')
    
    // Fix empty objects and arrays
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
    
    // Fix trailing commas
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/,\s*\)/g, ')')
    
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    
    // Clean up whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
}

// Files with merge conflicts and syntax errors
const filesToFix = [
  'pages/about.tsx',
  'pages/blog.tsx',
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/accessibility.tsx',
  'pages/careers.tsx',
  'pages/docs/api.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/Layout.tsx',
  'components/layout/MainLayout.tsx'
];

let totalFixed = 0;

console.log('🔍 Resolving merge conflicts and fixing syntax errors...');

for (const file of filesToFix) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
    }

    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

<<<<<<< HEAD:backup-problematic-files/scripts/resolve-final-conflicts.cjs
    // Check for merge conflict markers
=======
console.log(`\n✅ Fixed ${totalFixed} files`);
console.log('🎉 Final syntax cleanup completed!');
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/complete-syntax-fix.cjs
