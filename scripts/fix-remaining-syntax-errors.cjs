<<<<<<< HEAD
=======
<<<<<<< HEAD
const fs = require("fs");"const path = require("path");"console.log(" Fixing remaining syntax errors.");const filesToFix = [" "/workspace/components/Footer.tsx"," "/workspace/pages/about.tsx"," "/workspace/pages/ai-services.tsx"," "/workspace/pages/index.tsx"," "/workspace/pages/it-services.tsx"];let totalFixes = 0;filesToFix.forEach(filePath => { if (fs.existsSync(filePath)) {" let content = fs.readFileSync(filePath, "utf8"); let modified = false; / Fix line breaks in className attributes" content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, "className="$1 $2""); / Fix any remaining unterminated strings"" content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, "className="$1 $2">"); / Fix missing closing tags" content = content.replace(/<div([^>]*)\s*>\s*$/gm, "<div$1>"); / Fix any remaining syntax issues" content = content.replace(/\s+\n\s*>/g, ">"); " if (content !== fs.readFileSync(filePath, "utf8")) { fs.writeFileSync(filePath, content);" console.log(` Fixed: ${path.relative("/workspace", filePath)}`); totalFixes++; modified = true; } }});`console.log(`\n Summary:`);`console.log(` Files processed: ${filesToFix.length}`);`console.log(` Files fixed: ${totalFixes}`);"console.log(" Syntax error fixes completed!");""`"`
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
const fs = require("fs");"const path = require("path");"console.log(" Fixing remaining syntax errors.");const filesToFix = [" "/workspace/components/Footer.tsx"," "/workspace/pages/about.tsx"," "/workspace/pages/ai-services.tsx"," "/workspace/pages/index.tsx"," "/workspace/pages/it-services.tsx"];let totalFixes = 0;filesToFix.forEach(filePath => { if (fs.existsSync(filePath)) {" let content = fs.readFileSync(filePath, "utf8"); let modified = false; / Fix line breaks in className attributes" content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, "className="$1 $2""); / Fix any remaining unterminated strings"" content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, "className="$1 $2">"); / Fix missing closing tags" content = content.replace(/<div([^>]*)\s*>\s*$/gm, "<div$1>"); / Fix any remaining syntax issues" content = content.replace(/\s+\n\s*>/g, ">"); " if (content !== fs.readFileSync(filePath, "utf8")) { fs.writeFileSync(filePath, content);" console.log(` Fixed: ${path.relative("/workspace", filePath)}`); totalFixes++; modified = true; } }});`console.log(`\n Summary:`);`console.log(` Files processed: ${filesToFix.length}`);`console.log(` Files fixed: ${totalFixes}`);"console.log(" Syntax error fixes completed!");""`"`
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
// Function to fix hover syntax errors
function fixHoverSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
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
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    patterns.forEach(pattern => {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
      }
    }
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
    if (modified) {
      fs.writeFileSync(filePath, content);
      }`);
      totalFixes++;
      modified = true;
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
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
<<<<<<< HEAD
  let totalFixed = 0;
=======
  
  let totalFixed = 0;
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
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
<<<<<<< HEAD
  return totalFixed;
}
=======
  
  return totalFixed;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======

>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
// Main execution
try {
  console.log('🔍 Scanning for syntax errors...');
  const fixedCount = fixAllFiles();
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (fixedCount > 0) {
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  
  if (fixedCount > 0) {
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
<<<<<<< HEAD
}}
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
}
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
