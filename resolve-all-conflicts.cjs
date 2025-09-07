const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// First, clean up .next directory conflicts
console.log('🧹 Cleaning up .next directory conflicts...');
try {
  execSync('rm -rf .next', { stdio: 'inherit' });
  console.log('✅ Removed .next directory');
} catch (error) {
  console.log('⚠️  Could not remove .next directory:', error.message);
}

// Remove src directory that was deleted in origin/main
console.log('🧹 Removing src directory...');
try {
  execSync('rm -rf src', { stdio: 'inherit' });
  console.log('✅ Removed src directory');
} catch (error) {
  console.log('⚠️  Could not remove src directory:', error.message);
}

// Function to resolve conflicts by keeping our version (HEAD)
function resolveConflictsByKeepingOurs(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      execSync(`git checkout --ours "${filePath}"`, { stdio: 'inherit' });
      execSync(`git add "${filePath}"`, { stdio: 'inherit' });
      console.log(`✅ Resolved conflicts in ${filePath} (kept our version)`);
    }
  } catch (error) {
    console.log(`⚠️  Could not resolve ${filePath}:`, error.message);
  }
}

// Function to resolve conflicts by keeping their version (origin/main)
function resolveConflictsByKeepingTheirs(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      execSync(`git checkout --theirs "${filePath}"`, { stdio: 'inherit' });
      execSync(`git add "${filePath}"`, { stdio: 'inherit' });
      console.log(`✅ Resolved conflicts in ${filePath} (kept their version)`);
    }
  } catch (error) {
    console.log(`⚠️  Could not resolve ${filePath}:`, error.message);
  }
}

// List of files to resolve by keeping our version (working build)
const keepOursFiles = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/solutions/page.tsx',
  'next.config.cjs',
  'eslint.config.js',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'tailwind.config.js'
];

// List of files to resolve by keeping their version (remote)
const keepTheirsFiles = [
  'App.test.ts',
  'components/AccessibilityEnhancer.tsx',
  'next.config.js',
  'public/sw.js',
  'tests/setup.ts'
];

console.log('🔧 Resolving conflicts by keeping our working versions...');
keepOursFiles.forEach(resolveConflictsByKeepingOurs);

console.log('🔧 Resolving conflicts by keeping their versions...');
keepTheirsFiles.forEach(resolveConflictsByKeepingTheirs);

// Handle all service pages by keeping our working versions
console.log('🔧 Resolving conflicts in service pages...');
const servicesDir = './app/services';

function resolveServiceConflicts(directory) {
  try {
    const files = fs.readdirSync(directory);
    
    files.forEach(file => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        resolveServiceConflicts(filePath);
      } else if (file.endsWith('.tsx')) {
        resolveConflictsByKeepingOurs(filePath);
      }
    });
  } catch (error) {
    console.log(`⚠️  Could not process directory ${directory}:`, error.message);
  }
}

resolveServiceConflicts(servicesDir);

// Add all resolved files
console.log('📝 Adding all resolved files...');
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ All files added to staging');
} catch (error) {
  console.log('⚠️  Could not add files:', error.message);
}

console.log('🎉 Merge conflict resolution completed!');
console.log('📋 Next steps:');
console.log('1. Review the resolved conflicts');
console.log('2. Run: git commit -m "Resolve merge conflicts: keep working build"');
console.log('3. Run: npm run build (to verify build still works)');
console.log('4. Run: git push origin main');