#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
const fs = require("fs");"const path = require("path");"console.log(" Fixing remaining syntax errors.");const filesToFix = [" "/workspace/components/Footer.tsx"," "/workspace/pages/about.tsx"," "/workspace/pages/ai-services.tsx"," "/workspace/pages/index.tsx"," "/workspace/pages/it-services.tsx"];let totalFixes = 0;filesToFix.forEach(filePath => { if (fs.existsSync(filePath)) {" let content = fs.readFileSync(filePath, "utf8"); let modified = false; / Fix line breaks in className attributes" content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, "className="$1 $2""); / Fix any remaining unterminated strings"" content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, "className="$1 $2">"); / Fix missing closing tags" content = content.replace(/<div([^>]*)\s*>\s*$/gm, "<div$1>"); / Fix any remaining syntax issues" content = content.replace(/\s+\n\s*>/g, ">"); " if (content !== fs.readFileSync(filePath, "utf8")) { fs.writeFileSync(filePath, content);" console.log(` Fixed: ${path.relative("/workspace", filePath)}`); totalFixes++; modified = true; } }});`console.log(`\n Summary:`);`console.log(` Files processed: ${filesToFix.length}`);`console.log(` Files fixed: ${totalFixes}`);"console.log(" Syntax error fixes completed!");""`"`
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Function to fix hover syntax errors
function fixHoverSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  let totalFixed = 0;
<<<<<<< HEAD
=======
  
=======
<<<<<<< HEAD
  let totalFixed = 0;
=======
  
  let totalFixed = 0;
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  filesToCheck.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      if (fixHoverSyntax(filePath)) {
        totalFixed++;
      }
    }
  }
});
  return totalFixed;
}
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Main execution
try {
  console.log('🔍 Scanning for syntax errors...');
  const fixedCount = fixAllFiles();
  if (fixedCount > 0) {
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  
  if (fixedCount > 0) {
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  process.exit(1);
=======
  process.exit(1);
}
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  
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
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
