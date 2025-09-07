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
const filesToFix = [
  '/workspace/src/components/Footer.tsx',
  '/workspace/src/components/Header.tsx',
  '/workspace/src/components/HeroSection.tsx',
  '/workspace/src/components/LoadingSpinner.tsx',
  '/workspace/src/components/Navigation.tsx',
  '/workspace/src/components/ServicesSection.tsx'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
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
    return false;
  }
}

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
