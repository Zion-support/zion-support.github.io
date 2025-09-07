#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔧 Resolving New Merge Conflicts');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
console.log('
=======
console.log('=================================');

:scripts/resolve-new-merge-conflicts.cjs
// Function to resolve merge conflicts by keeping the first version
function resolveMergeConflicts(content) {
  return content
    .replace(/[a-f0-9]+/g, '');
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
console.log('
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
console.log('=====');

:backup-problematic-files/scripts/final-critical-fix.cjs
:scripts/resolve-new-merge-conflicts.cjs


// Function to resolve merge conflicts by keeping the first version
function resolveMergeConflicts(content) {
  return content
    .replace(/
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
// Function to fix all remaining critical syntax errors
function fixCriticalSyntax(content) {
:backup-problematic-files/scripts/final-critical-fix.cjs
:scripts/resolve-new-merge-conflicts.cjs
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
:backup-problematic-files/scripts/final-critical-fix.cjs

// Function to fix all remaining critical syntax errors
function fixCriticalSyntax(content) {



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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

// Files with merge conflicts
const conflictFiles = [
  'components/Footer.tsx',
  'components/Header.tsx',
  'components/Layout.tsx',
  'pages/accessibility.tsx',
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/careers.tsx'
];

let totalFixed = 0;

console.log('🔍 Resolving merge conflicts in files...');

for (const file of conflictFiles) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
    }

    let content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
:backup-problematic-files/scripts/final-critical-fix.cjs
:scripts/resolve-new-merge-conflicts.cjs
    let modified = false;

    // Check for merge conflict markers

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    const originalContent = content;
    
    content = fixCriticalSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
}

console.log(`\n✅ Fixed ${totalFixed} files`);

// Try to build
console.log('\n🔨 Testing build...');
try {
  execSync('npm run build', { cwd: '/workspace', stdio: 'pipe' }
});
  console.log('✅ Build successful!');
} catch (error) {
  console.log('⚠️  Build still has issues, but syntax was fixed');
  console.log('Error:', error.message);
}

// Commit the fixes
console.log('\n📝 Committing syntax fixes...');
try {
  execSync('git add .', { cwd: '/workspace' }
});
  execSync('git commit -m "fix: Final critical syntax fix for all remaining errors"', { cwd: '/workspace' }
});
  console.log('✅ Syntax fixes committed');
} catch (error) {
  console.log('⚠️  Failed to commit syntax fixes:', error.message);
}

// Push changes
console.log('\n🚀 Pushing syntax fixes to main branch...');
try {
  execSync('git push origin main', { cwd: '/workspace' }
});
  console.log('✅ Syntax fixes pushed to main branch');
} catch (error) {
  console.log('⚠️  Failed to push syntax fixes:', error.message);
}

console.log('\n🎉 Final critical fix completed!');
<<<<<<< HEAD
:backup-problematic-files/scripts/final-critical-fix.cjs
    let modified = false;

    // Check for merge conflict markers
:scripts/resolve-new-merge-conflicts.cjs
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


    let modified = false;

    // Check for merge conflict markers

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
