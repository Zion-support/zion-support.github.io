#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Final targeted fixes for remaining syntax errors
const fixes = [
  // Fix missing semicolons in import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    replacement: 'import { $1 } from \'$2\';'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Fix malformed import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    replacement: 'import { $1 } from \'$2\';\n\nexport default function'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Fix missing semicolons after import statements
  {
    pattern: /import\s+([^]+)\s*$/gm,
    replacement: 'import $1;'
  },
<<<<<<< HEAD
  // Fix unterminated string literals
=======
<<<<<<< HEAD
  
  // Fix missing semicolons after export statements
=======
<<<<<<< HEAD
  
  // Fix missing semicolons after export statements
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix unterminated string literals
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    pattern: /export\s+([^]+)\s*$/gm,
    replacement: 'export $1;'
  },
<<<<<<< HEAD
  // Fix malformed function declarations
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in variable declarations
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in variable declarations
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix malformed function declarations
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    pattern: /const\s+([^=]+)\s*=\s*([^;]+)\s*$/gm,
    replacement: 'const $1 = $2;'
  },
<<<<<<< HEAD
  // Fix missing closing brackets and parentheses
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in function declarations
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in function declarations
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix missing closing brackets and parentheses
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    pattern: /function\s+([^(]+)\s*\([^)]*\)\s*{\s*$/gm,
    replacement: 'function $1() {\n'
  },
<<<<<<< HEAD
  // Fix malformed JSX attributes
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in arrow functions
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in arrow functions
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix malformed JSX attributes
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    pattern: /const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*([^;]+)\s*$/gm,
    replacement: 'const $1 = () => $2;'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Fix missing semicolons in object properties
  {
    pattern: /(\w+):\s*([^,}]+)\s*$/gm,
    replacement: '$1: $2,'
  },
<<<<<<< HEAD
  // Fix malformed return statements
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in array elements
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in array elements
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix malformed return statements
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    pattern: /(\w+)\s*$/gm,
    replacement: '$1,'
  },
<<<<<<< HEAD
  // Fix duplicated content (remove duplicate lines)
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in return statements
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in return statements
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix duplicated content (remove duplicate lines)
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    pattern: /return\s+([^;]+)\s*$/gm,
    replacement: 'return $1;'
  },
<<<<<<< HEAD
  // Fix missing closing brackets in arrays
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in if statements
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in if statements
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix missing closing brackets in arrays
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    pattern: /if\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'if (condition) {\n'
  },
<<<<<<< HEAD
  // Fix malformed JSX closing tags
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in for loops
=======
<<<<<<< HEAD
  
  // Fix missing semicolons in for loops
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix malformed JSX closing tags
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    pattern: /for\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'for (let i = 0; i < length; i++) {\n'
  },
  // Fix missing semicolons in while loops
  {
    pattern: /while\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'while (condition) {\n'
  },
  // Fix missing semicolons in switch statements
  {
    pattern: /switch\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'switch (value) {\n'
  },
  // Fix missing semicolons in try-catch blocks
  {
    pattern: /try\s*{\s*$/gm,
    replacement: 'try {\n'
  },
  // Fix missing semicolons in catch blocks
  {
    pattern: /catch\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'catch (error) {\n'
  },
  // Fix missing semicolons in finally blocks
  {
    pattern: /finally\s*{\s*$/gm,
    replacement: 'finally {\n'
  },
  // Fix missing semicolons in class methods
  {
    pattern: /(\w+)\s*\([^)]*\)\s*{\s*$/gm,
    replacement: '$1() {\n'
  },
  // Fix missing semicolons in class properties
  {
    pattern: /(\w+)\s*:\s*([^;]+)\s*$/gm,
    replacement: '$1: $2;'
  },
  // Fix missing semicolons in interface properties
  {
    pattern: /(\w+)\s*:\s*([^;]+)\s*$/gm,
    replacement: '$1: $2;'
  },
  // Fix missing semicolons in type definitions
  {
    pattern: /type\s+(\w+)\s*=\s*([^;]+)\s*$/gm,
    replacement: 'type $1 = $2;'
  },
  // Fix missing semicolons in interface definitions
  {
    pattern: /interface\s+(\w+)\s*{\s*$/gm,
    replacement: 'interface $1 {\n'
  },
  // Fix missing semicolons in enum definitions
  {
    pattern: /enum\s+(\w+)\s*{\s*$/gm,
    replacement: 'enum $1 {\n'
  },
  // Fix missing semicolons in namespace definitions
  {
    pattern: /namespace\s+(\w+)\s*{\s*$/gm,
    replacement: 'namespace $1 {\n'
  },
  // Fix missing semicolons in module definitions
  {
    pattern: /module\s+(\w+)\s*{\s*$/gm,
    replacement: 'module $1 {\n'
  },
  // Fix missing semicolons in declare statements
  {
    pattern: /declare\s+([^;]+)\s*$/gm,
    replacement: 'declare $1;'
  },
  // Fix missing semicolons in export statements
  {
    pattern: /export\s+([^;]+)\s*$/gm,
    replacement: 'export $1;'
  },
  // Fix missing semicolons in import statements
  {
    pattern: /import\s+([^;]+)\s*$/gm,
    replacement: 'import $1;'
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
// Final targeted fixes for remaining syntax errors
const fixes = [// Fix missing semicolons in import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    "replacement": 'import { $1 } from \'$2\';'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix malformed import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    "replacement": 'import { $1 } from \'$2\';\n\nexport default function'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix missing semicolons after import statements
  {
    "pattern": /import\s+([^]+)\s*$/gm,
    "replacement": 'import $1;'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix unterminated string literals
  {
    "pattern": /'([^']*)\s*$/gm,
    "replacement": '\'$1\';'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix malformed function declarations
  {
    "pattern": /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,
    "replacement": 'export default function $1() {\n  return ('
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix missing closing brackets and parentheses
  {
    "pattern": /return\s*\(\s*<div[^>]*>\s*$/gm,
    "replacement": 'return (\n    <div className="min-h-screen bg-white">'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix malformed JSX attributes
  {
    "pattern": /className="([^"]*);\s*"/g,
    "replacement": 'className="$1"'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix missing semicolons in object properties
  {
    "pattern": /(\w+):\s*'([^']*)',\s*;/g,
    "replacement": '$1: \'$2\','
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix malformed return statements
  {
    "pattern": /return\s*\(\s*<div";"/g,
    "replacement": 'return (\n    <div className="min-h-screen bg-white">'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix duplicated content (remove duplicate lines)
  {
    "pattern": /^(.*)\n\1$/gm,
    "replacement": '$1'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix missing closing brackets in arrays
  {
    "pattern": /(\[.*?);\s*\]\s*},/g,
    "replacement": '$1\n  ]\n},'
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  // Fix malformed JSX closing tags
  {
    "pattern": /<\/div>\s*\)\s*}\s*$/gm,
    "replacement": '    </div>\n  );\n}'
  }
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
<<<<<<< HEAD

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
<<<<<<< HEAD
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
console.log('🔧 Fixing final syntax errors...');
// Fix specific files with known issues
const filesToFix = [
    'src/components/SEO.tsx',
    'src/components/talent/TalentCard.jsx',
    'src/components/ui/card.tsx',
    'src/components/ui/textarea.tsx',
    'src/components/ui/use-toast.ts'
];
function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        console.log(`File not found: ${filePath}`);
        return 0;        return;
        console.log(`File not found: ${filePath}`);
        return 0;
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
        console.log(`File not found: ${filePath}`);
        return 0;        return;
        console.log(`File not found: ${filePath}`);
        return 0;
<<<<<<< HEAD
=======
        return;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(`File not found: ${filePath}`);
        return 0;
=======
=======
        
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
        return;
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;
<<<<<<< HEAD
<<<<<<< HEAD
    let fixes = 0;
    let modified = false;
    let modified = false;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
    let fixes = 0;

=======
    let modified = false;
<<<<<<< HEAD
=======
=======
    let modified = false;
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
=======
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return true}
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)}
  return false}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
function walkDirectory(dir) {
  let fixedCount = 0;
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

function walkDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (stat.isDirectory()) {
        fixedCount += walkDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        if (fixFile(filePath)) {
          fixedCount++}
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)}
<<<<<<< HEAD
  return fixedCount}
    let fixes = 0;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  return fixedCount}
    let fixes = 0;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
  
  return fixedCount}
    let fixes = 0;
<<<<<<< HEAD
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
    let fixes = 0;

>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    // Fix textarea.tsx
    if (filePath.includes('textarea.tsx')) {
        // Fix malformed className
        content = content.replace(/className=\{`flex min-h-\[80px\] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder: tex t-muted-foreground focus-visible: outlin e-none focus-visible: rin g-2 focus-visible: rin g-ring focus-visible: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50 \$\{className\}`\}/g, 'className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}');
    }

    // Fix use-toast.ts
    if (filePath.includes('use-toast.ts')) {
        // Fix malformed interface
        content = content.replace(/position\?\: "top-right" \| "top-center" \| "top-left" \| "bottom-right" \| "bottom-center" \| "bottom-left"\}\s*$/g, 'position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";\n}');
        
        // Fix malformed function
        content = content.replace(/const showToast = \(message: string, options\?\: ToastOptions\)\s*=> \{\s*return toast\(message, options\)\s*return \{ showToast \};\s*\};\s*$/g, 'const showToast = (message: string, options?: ToastOptions) => {\n    return toast(message, options);\n  };\n\n  return { showToast };\n}');
    }

    // General fixes
    content = content.replace(/"""/g, '');
    content = content.replace(/""""/g, '');
    content = content.replace(/'"`/g, '');
    content = content.replace(/`"/g, '');
    content = content.replace(/`\s*$/gm, '');
    content = content.replace(/^\s*`\s*$/gm, '');

    // Count fixes
    const originalContent = fs.readFileSync(filePath, 'utf8');
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax in ${filePath}`);
      return true;
    }

    if (fixes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
    } else {
        console.log(`✨ No issues found in ${filePath}`);
    }

    return fixes;
}

// Process all files
let totalFixes = 0;
filesToFix.forEach(file => {
    totalFixes += fixFile(file);
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);
if (totalFixes > 0) {
    console.log('\n✅ Final syntax error fixing completed!');
} else {
    console.log('\n✨ No syntax errors found to fix.');
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
}#!/usr/bin/env node;
}
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}#!/usr/bin/env node;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);
if (totalFixes > 0) {
} else {
}
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Final targeted fixes for remaining syntax errorsconst fixes = [/ Fix missing semicolons in import statements {" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*$/gm,"" replacement: "import { $1 } from \"$2\";" }, / Fix malformed import statements {"" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*export\s*default\s*function/g,"" replacement: "import { $1 } from \"$2\";\n\nexport default function" }, / Fix missing semicolons after import statements {" pattern: /import\s+([^]+)\s*$/gm,"" replacement: "import $1;" }, / Fix unterminated string literals {"" pattern: /"([^"]*)\s*$/gm,"" replacement: "\"$1\";" }, / Fix malformed function declarations {" pattern: /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,"" replacement: "export default function $1() {\n return (" }, / Fix missing closing brackets and parentheses {" pattern: /return\s*\(\s*<div[^>]*>\s*$/gm,"" replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix malformed JSX attributes {" pattern: /className="([^"]*);\s*"/g,"" replacement: "className="$1"" }, / Fix missing semicolons in object properties {"" pattern: /(\w+):\s*"([^"]*)",\s*;/g,"" replacement: "$1: \"$2\"," }, / Fix malformed return statements {" pattern: /return\s*\(\s*<div";"/g,"" replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix duplicated content (remove duplicate lines) {" pattern: /^(.*)\n\1$/gm,"" replacement: "$1" }, / Fix missing closing brackets in arrays {" pattern: /(\[.*?);\s*\]\s*},/g,"" replacement: "$1\n ]\n}," }, / Fix malformed JSX closing tags {" pattern: /<\/div>\s*\)\s*}\s*$/gm,"" replacement: " </div>\n );\n}" }];function fixFile(filePath) { if (!fs.existsSync(filePath)) {" console.log(` File not found: ${filePath}`); return; }" let content = fs.readFileSync(filePath, "utf8"); let modified = false; fixes.forEach(fix => { const newContent = content.replace(fix.pattern, fix.replacement); if (newContent !== content) { content = newContent; modified = true} }); if (modified) {" fs.writeFileSync(filePath, content, "utf8");"` console.log(`Fixed: ${filePath}`); return true} } catch (error) {` console.error(`Error fixing ${filePath}:`, error.message)} return false}function walkDirectory(dir) { let fixedCount = 0; try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {" fixedCount += walkDirectory(filePath)} else if (file.endsWith(".tsx") | file.endsWith(".ts") | file.endsWith(".jsx") | file.endsWith(".js")) { if (fixFile(filePath)) { fixedCount++} } } } catch (error) {` console.error(`Error reading directory ${dir}:`, error.message)} return fixedCount}"console.log("\n Summary: ");`console.log(` Files processed: ${filesToFix.length}`);"`console.log(` Total fixes applied: ${totalFixes}`);if (totalFixes > 0) {" console.log("\n Final syntax error fixing completed!");} else {" console.log("\n No syntax errors found to fix.");}""`"`
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true}
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)}
  return false}
function walkDirectory(dir) {
  let fixedCount = 0;
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        fixedCount += walkDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        if (fixFile(filePath)) {
          fixedCount++}
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)}
  return fixedCount}
    let fixes = 0;
if (totalFixes > 0) {
} else {
}
} else {
}
<<<<<<< HEAD
#!/usr/bin/env node;
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node;
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
}#!/usr/bin/env node;
}
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const fs = require('fs')
const path = require('path')
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "replacement": 'return (\n    <div className="min-h-screen bg-white")
    "replacement": 'className="$1"
    "pattern"
    "replacement"
    "replacement": 'return (\n    <div className="min-h-screen bg-white")
    "replacement"
    "replacement"
<<<<<<< HEAD
<<<<<<< HEAD
    "replacement"
    "replacement"
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
    "replacement"
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    "replacement"
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function findFiles(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  console.log('🔧 Starting final syntax fixes...');
  
  const extensions = ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'];
  const files = findFiles(process.cwd(), extensions);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed syntax in ${fixedCount} files`);
  console.log('🎉 Final syntax fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findFiles };
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
    "replacement"
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
    "replacement"
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
    "replacement"
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
