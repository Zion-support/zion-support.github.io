
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD

=======


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
// Function to fix hover syntax errors
function fixHoverSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD
=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    // Fix various hover syntax patterns
    const patterns = [
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"focus":\s*/g, to: 'focus:' },
      { from: /"group-hover":\s*/g, to: 'group-hover:' },
      { from: /"sm":\s*/g, to: 'sm:' },
      { from: /"md":\s*/g, to: 'md:' },
      { from: /"lg":\s*/g, to: 'lg:' },
      { from: /"xl":\s*/g, to: 'xl:' },
      { from: /"2xl":\s*/g, to: '2xl:' },
    ];
<<<<<<< HEAD
=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    patterns.forEach(pattern => {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
      }
    }
});
<<<<<<< HEAD
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
<<<<<<< HEAD
=======

    


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

// Function to find and fix all TypeScript/JSX files
function fixAllFiles() {
  const filesToCheck = [
    'components/Footer.tsx',
    'components/Header.tsx',
    'components/layout/MainLayout.tsx',
    'pages/about.tsx',
    'pages/ai-services.tsx',
    'pages/blog.tsx',
    'pages/contact.tsx',
    'pages/index.tsx',
    'pages/privacy.tsx',
    'pages/terms.tsx',
    'pages/services.tsx',
    'pages/pricing.tsx'
  ];
<<<<<<< HEAD
let totalFixed = 0;
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b

  


  filesToCheck.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      if (fixHoverSyntax(filePath)) {
        totalFixed++;
      }
    }
  }
});
<<<<<<< HEAD
return totalFixed;
}
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b



<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
// Main execution
try {
  console.log('🔍 Scanning for syntax errors...');
  const fixedCount = fixAllFiles();
<<<<<<< HEAD
if (fixedCount > 0) {
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b

  if (fixedCount > 0) {
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

  
  if (fixedCount > 0) {
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
    



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

    // Try to build after fixes
    console.log('🔨 Attempting build after fixes...');
    try {
      execSync('npm run build', { stdio: 'inherit' }
});
      console.log('✅ Build successful!');
    } catch (error) {
      console.log('⚠️ Build still has issues, but syntax errors were fixed');
    }
  } else {
    console.log('✨ No syntax errors found to fix');
  }

} catch (error) {
  console.error('❌ Error:', error.message);

<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b

  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
<<<<<<< HEAD
}
}
}
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
