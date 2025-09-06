<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

=======
const fs = require("fs");"const path = require("path");"console.log(" Fixing remaining syntax errors.");const filesToFix = [" "/workspace/components/Footer.tsx"," "/workspace/pages/about.tsx"," "/workspace/pages/ai-services.tsx"," "/workspace/pages/index.tsx"," "/workspace/pages/it-services.tsx"];let totalFixes = 0;filesToFix.forEach(filePath => { if (fs.existsSync(filePath)) {" let content = fs.readFileSync(filePath, "utf8"); let modified = false; / Fix line breaks in className attributes" content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, "className="$1 $2""); / Fix any remaining unterminated strings"" content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, "className="$1 $2">"); / Fix missing closing tags" content = content.replace(/<div([^>]*)\s*>\s*$/gm, "<div$1>"); / Fix any remaining syntax issues" content = content.replace(/\s+\n\s*>/g, ">"); " if (content !== fs.readFileSync(filePath, "utf8")) { fs.writeFileSync(filePath, content);" console.log(` Fixed: ${path.relative("/workspace", filePath)}`); totalFixes++; modified = true; } }});`console.log(`\n Summary:`);`console.log(` Files processed: ${filesToFix.length}`);`console.log(` Files fixed: ${totalFixes}`);"console.log(" Syntax error fixes completed!");""`"`
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
// Function to fix hover syntax errors
function fixHoverSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD
    
=======
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
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
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
    patterns.forEach(pattern => {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
      }
    }
});
<<<<<<< HEAD
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
    
=======
    if (modified) {
      fs.writeFileSync(filePath, content);
      }`);
      totalFixes++;
      modified = true;
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}
<<<<<<< HEAD

=======
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
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
  let totalFixed = 0;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
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
  
=======
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
  return totalFixed;
}
// Main execution
try {
  console.log('🔍 Scanning for syntax errors...');
  const fixedCount = fixAllFiles();
<<<<<<< HEAD
  
  if (fixedCount > 0) {
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
    
=======
  if (fixedCount > 0) {
    console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
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
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}}
=======
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
