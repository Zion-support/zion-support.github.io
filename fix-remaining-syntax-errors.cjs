#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
=======
const { execSync } = require('child_process');
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

console.log('🔧 Fixing remaining syntax errors...');

// List of files with known syntax errors
<<<<<<< HEAD
<<<<<<< HEAD
const filesToFix = [
  '/workspace/app/about/page.tsx',
  '/workspace/app/services/automation/page.tsx',
  '/workspace/app/services/consulting/page.tsx',
  '/workspace/pages/api/admin/partners/fraud-flags.ts',
  '/workspace/pages/api/admin/partners/update.ts'
=======
const filesToFix = [;
=======
const filesToFix = [
>>>>>>> origin/chore/fix-lint-and-merge
  '/workspace/src/components/Footer.tsx',
  '/workspace/src/components/Header.tsx',
  '/workspace/src/components/HeroSection.tsx',
  '/workspace/src/components/LoadingSpinner.tsx',
  '/workspace/src/components/Navigation.tsx',
  '/workspace/src/components/ServicesSection.tsx'
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
<<<<<<< HEAD
      console.log(`⚠️ File not found: ${filePath}`);
=======
      console.log(`⚠️  File not found: ${filePath}`);
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
    let fixed = false;

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      fixed = true;
    }

    // Fix missing semicolons
    content = content.replace(/([^;}])\n(\s*)(return|if|const|let|var|function|export|import)/g, '$1;\n$2$3');
    content = content.replace(/([^;}])\n(\s*)(})/g, '$1;\n$2$3');

    // Fix incomplete function calls
    content = content.replace(/(\w+)\s*\(\s*\)\s*$/g, '$1();');

    // Fix incomplete object literals
    content = content.replace(/\{\s*$/g, '{}');

    // Fix incomplete array literals
    content = content.replace(/\[\s*$/g, '[]');

    // Fix incomplete strings
    content = content.replace(/"[^"]*$/g, '""');
    content = content.replace(/'[^']*$/g, "''");

    // Fix incomplete template literals
    content = content.replace(/`[^`]*$/g, '``');

    // Fix incomplete comments
    content = content.replace(/\/\*[^*]*$/g, '');
    content = content.replace(/\/\/[^\n]*$/g, '');

    // Fix incomplete regex
    content = content.replace(/\/[^/]*$/g, '//');

    // Clean up extra whitespace
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/^\s*\n/gm, '')
      .trim();

    if (fixed || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
=======
    const originalContent = content;

    // Fix common syntax errors
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{const\s+(\w+)\s*=\s*([^;]+)([^;])/g, 'const $1: React.FC = () => {\n  const $2 = $3;\n');
    content = content.replace(/}\s*const\s+/g, '}\n\nconst ');
    content = content.replace(/;\s*const\s+/g, ';\n\nconst ');
    content = content.replace(/}\s*export\s+/g, '}\n\nexport ');
    content = content.replace(/;\s*export\s+/g, ';\n\nexport ');
    content = content.replace(/return\s*\(\s*<div;\s*className/g, 'return (\n    <div\n      className');
    content = content.replace(/className={`([^`]+)`}\s*>\s*;/g, 'className={`$1`}>\n');
    content = content.replace(/;\s*title\s*:\s*string;/g, ';\n  title?: string;');
    content = content.replace(/;\s*description\s*:\s*string;/g, ';\n  description?: string;');
    content = content.replace(/;\s*className\s*:\s*string;/g, ';\n  className?: string;');
    content = content.replace(/;\s*onClick\s*:\s*\(\)\s*=>\s*void;/g, ';\n  onClick?: () => void;');
    content = content.replace(/;\s*children\s*:\s*React\.ReactNode;/g, ';\n  children: React.ReactNode;');
    content = content.replace(/;\s*}\s*const\s+/g, ';\n}\n\nconst ');
    content = content.replace(/;\s*}\s*export\s+/g, ';\n}\n\nexport ');
    content = content.replace(/;\s*}\s*\)\s*}\s*export\s+/g, ';\n  );\n}\n\nexport ');
    content = content.replace(/;\s*}\s*\)\s*}\s*const\s+/g, ';\n  );\n}\n\nconst ');
    content = content.replace(/;\s*}\s*\)\s*}\s*;\s*export\s+/g, ';\n  );\n};\n\nexport ');
    content = content.replace(/;\s*}\s*\)\s*}\s*;\s*const\s+/g, ';\n  );\n};\n\nconst ');

    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*const\s+/g, '$1 = $2;\n  const ');
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*}\s*const\s+/g, '$1 = $2;\n}\n\nconst ');
    content = content.replace(/(\w+)\s*=\s*([^;]+)([^;])\s*}\s*export\s+/g, '$1 = $2;\n}\n\nexport ');

    // Fix malformed JSX
    content = content.replace(/return\s*\(\s*<div;\s*className/g, 'return (\n    <div\n      className');
    content = content.replace(/className={`([^`]+)`}\s*>\s*;/g, 'className={`$1`}>\n');
    content = content.replace(/;\s*>\s*;/g, '>\n');

    // Fix interface definitions
    content = content.replace(/interface\s+(\w+)\s*{\s*([^}]+)\s*}\s*const\s+/g, 'interface $1 {\n  $2\n}\n\nconst ');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`⚠️  No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
>>>>>>> origin/chore/fix-lint-and-merge
    return false;
  }
}

<<<<<<< HEAD
// Fix all files
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed ${fixedCount} files`);
=======
let fixedCount = 0;
filesToFix.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

<<<<<<< HEAD
module.exports = SyntaxErrorFixer;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
console.log(`\n📊 Fixed ${fixedCount} files`);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
