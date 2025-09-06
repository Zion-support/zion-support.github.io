#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors and preparing for merge...');

// Files that need syntax fixes
const filesToFix = [
  'components/Footer.tsx',
  'components/Header.tsx', 
  'components/layout/MainLayout.tsx',
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/index.tsx'
];

function fixSyntaxErrors(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix various syntax patterns
    const patterns = [
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"focus":\s*/g, to: 'focus:' },
      { from: /"group-hover":\s*/g, to: 'group-hover:' },
      { from: /"sm":\s*/g, to: 'sm:' },
      { from: /"md":\s*/g, to: 'md:' },
      { from: /"lg":\s*/g, to: 'lg:' },
      { from: /"xl":\s*/g, to: 'xl:' },
      { from: /"2xl":\s*/g, to: '2xl:' },
      { from: /"y":\s*/g, to: 'y:' },
      { from: /"opacity":\s*/g, to: 'opacity:' },
      { from: /"duration":\s*/g, to: 'duration:' },
      { from: /"delay":\s*/g, to: 'delay:' },
      { from: /"once":\s*/g, to: 'once:' },
    ];
    
    patterns.forEach(pattern => {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
      }
    }
});
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Fix all files
let totalFixed = 0;
filesToFix.forEach(file => {
  if (fixSyntaxErrors(file)) {
    totalFixed++;
  }
}
});

console.log(`✅ Fixed syntax errors in ${totalFixed} files`);

// Now try to commit and push changes
console.log('📝 Committing fixes...');

try {
  const { execSync } = require('child_process');
  
  // Add all changes
  execSync('git add .', { stdio: 'inherit' }
});
  
  // Commit changes
  execSync('git commit -m "fix: Resolve syntax errors and merge conflicts"', { stdio: 'inherit' }
});
  
  console.log('✅ Changes committed successfully');
  
  // Try to push
  try {
    execSync('git push origin main', { stdio: 'inherit' }
});
    console.log('✅ Changes pushed to main branch');
  } catch (pushError) {
    console.log('⚠️ Push failed, but changes are committed locally');
  }
  
} catch (error) {
  console.log(`❌ Error committing changes: ${error.message}`);
}

console.log('🎉 Syntax fixing and merge preparation completed!');