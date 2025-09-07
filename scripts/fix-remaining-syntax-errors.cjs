

<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Function to fix hover syntax errors;
function fixHoverSyntax(filePath) {
  try {
  // TODO: Implement
}
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
=======
    let content = fs.readFileSync(filePath,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    let modified = false;
    
    // Fix various hover syntax patterns;
    const patterns = [
<<<<<<< HEAD
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"focus":\s*/g, to: 'focus:' },
      { from: /"group-hover":\s*/g, to: 'group-hover:' },
      { from: /"sm":\s*/g, to: 'sm:' },
      { from: /"md":\s*/g, to: 'md:' },
      { from: /"lg":\s*/g, to: 'lg:' },
      { from: /"xl":\s*/g, to: 'xl:' },
      { from: /"2xl":\s*/g, to: '2xl:' },']
=======
      { from: /"hover":\s*/g, to: hover:},
      { from: /"focus":\s*/g, to: focus:},
      { from: /"group-hover":\s*/g, to: group-hover:},
      { from: /"sm":\s*/g, to: sm:},
      { from: /"md":\s*/g, to: md:},
      { from: /"lg":\s*/g, to: lg:},
      { from: /"xl":\s*/g, to: xl:},
      { from: /"2xl":\s*/g, to: 2xl:},]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    ];
    
    patterns.forEach(pattern => {)
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
});
    
    if (modified) {
      fs.writeFileSync(filePath, content);

      console.log(`✅ Fixed syntax errors in ${filePath});
      return true;
    
    return false;
<<<<<<< HEAD
  } catch (error) {`;
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
=======
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message});
    return false;
  }
}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

// Function to find and fix all TypeScript/JSX files;
function fixAllFiles() {
  const filesToCheck = [
<<<<<<< HEAD
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
    'pages/pricing.tsx]
=======
    'components/Footer.tsx,components/Header.tsx,components/layout/MainLayout.tsx,pages/about.tsx,pages/ai-services.tsx,pages/blog.tsx,pages/contact.tsx,pages/index.tsx,pages/privacy.tsx,pages/terms.tsx,pages/services.tsx,pages/pricing.tsx]
  ];
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  
  let totalFixed = 0;
  
  filesToCheck.forEach(file => {)
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      if (fixHoverSyntax(filePath)) {
        totalFixed++;
  
  return totalFixed;

// Main execution;
  // TODO: Implement
<<<<<<< HEAD
  console.log('🔍 Scanning for syntax errors...');
=======
}
  console.log('🔍 Scanning for syntax errors...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  const fixedCount = fixAllFiles();
  
  if (fixedCount > 0) {`;
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
    
    // Try to build after fixes;
<<<<<<< HEAD
    console.log('🔨 Attempting build after fixes...');
  // TODO: Implement
      execSync('npm run build', { stdio: 'inherit' }')
      console.log('✅ Build successful!');
    } catch (error) {
      console.log('⚠️ Build still has issues, but syntax errors were fixed');
  } else {
  // TODO: Implement
    console.log('✨ No syntax errors found to fix');
  
  console.error('❌ Error:', error.message);
=======
    console.log('🔨 Attempting build after fixes...);
    try {
  // TODO: Implement
}
      execSync('npm run build, { stdio: inherit})
});
      console.log('✅ Build successful!);
    } catch (error) {
      console.log('⚠️ Build still has issues, but syntax errors were fixed');
    }
  } else {
  // TODO: Implement
}
    console.log('✨ No syntax errors found to fix');
  }
  
} catch (error) {
  console.error('❌ Error: , error.message);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  process.exit(1);

`;