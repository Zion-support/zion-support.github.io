#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining type imports
function fixRemainingTypeImports(content) {
  // Fix ErrorInfo and ReactNode imports
  content = content.replace(
    /import\s*{\s*ErrorInfo\s*}\s*from\s*['"]react['"];?/g,
    'import type { ErrorInfo } from \'react\';'
  );
  content = content.replace(
    /import\s*{\s*ReactNode\s*}\s*from\s*['"]react['"];?/g,
    'import type { ReactNode } from \'react\';'
  );
  content = content.replace(
    /import\s*{\s*MetadataRoute\s*}\s*from\s*['"]next['"];?/g,
    'import type { MetadataRoute } from \'next\';'
  );
  content = content.replace(
    /import\s*{\s*WebVitalsMetrics\s*}\s*from\s*['"]web-vitals['"];?/g,
    'import type { WebVitalsMetrics } from \'web-vitals\';'
  );
  return content;
}

// Function to fix icon imports
function fixIconImports(content) {
  // Fix Cogs -> Cog
  content = content.replace(/import\s*{\s*([^}]*)\s*Cogs\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g, (match, before, after) => {
    const icons = before + after;
    return `import { ${icons.replace(/\s*,\s*$/, '')}, Cog } from 'lucide-react';`;
  });
  
  // Add missing icon imports
  const missingIcons = {
    'Shield': 'import { Shield } from \'lucide-react\';',
    'Link': 'import Link from \'next/link\';',
    'Cpu': 'import { Cpu } from \'lucide-react\';',
    'Sparkles': 'import { Sparkles } from \'lucide-react\';',
    'Lock': 'import { Lock } from \'lucide-react\';'
  };
  
  Object.entries(missingIcons).forEach(([icon, importStatement]) => {
    if (content.includes(icon) && !content.includes(`import { ${icon}`) && !content.includes(`import ${icon}`)) {
      content = importStatement + '\n' + content;
    }
  });
  
  return content;
}

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  // Remove duplicate Star imports
  const lines = content.split('\n');
  const seenImports = new Set();
  const filteredLines = [];
  
  for (const line of lines) {
    if (line.includes('import') && line.includes('Star')) {
      if (!seenImports.has('Star')) {
        seenImports.add('Star');
        filteredLines.push(line);
      }
    } else {
      filteredLines.push(line);
    }
  }
  
  return filteredLines.join('\n');
}

// Function to fix override modifiers
function fixOverrideModifiers(content) {
  content = content.replace(
    /componentDidCatch\(/g,
    'override componentDidCatch('
  );
  content = content.replace(
    /componentDidMount\(/g,
    'override componentDidMount('
  );
  content = content.replace(
    /render\(/g,
    'override render('
  );
  return content;
}

// Function to fix property access issues
function fixPropertyAccess(content) {
  // Fix src property access
  content = content.replace(/\.src\b/g, '[\'src\']');
  return content;
}

// Function to fix undefined object access
function fixUndefinedAccess(content) {
  // Add null checks for potentially undefined objects
  content = content.replace(
    /(\w+)\.(\w+)(?=\s*\.)/g,
    '$1?.$2'
  );
  return content;
}

// Function to fix assignment to optional properties
function fixOptionalAssignment(content) {
  // Fix optional property assignments
  content = content.replace(
    /(\w+)\?\.(\w+)\s*=/g,
    'if ($1) { $1.$2 ='
  );
  return content;
}

// Function to fix type issues
function fixTypeIssues(content) {
  // Fix exactOptionalPropertyTypes issues
  content = content.replace(
    /referrer:\s*string\s*\|\s*undefined/g,
    'referrer?: string'
  );
  content = content.replace(
    /action:\s*string\s*\|\s*undefined/g,
    'action?: string'
  );
  content = content.replace(
    /label:\s*string\s*\|\s*undefined/g,
    'label?: string'
  );
  content = content.replace(
    /value:\s*number\s*\|\s*undefined/g,
    'value?: number'
  );
  content = content.replace(
    /properties:\s*Record<string,\s*any>\s*\|\s*undefined/g,
    'properties?: Record<string, any>'
  );
  content = content.replace(
    /userAgent:\s*string\s*\|\s*undefined/g,
    'userAgent?: string'
  );
  return content;
}

// Function to fix missing return statements
function fixMissingReturns(content) {
  // Add return statements for functions that need them
  content = content.replace(
    /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{([^}]*)}/g,
    (match, funcName, body) => {
      if (!body.includes('return') && !body.includes('console.log') && !body.includes('//')) {
        return match.replace('{', '{\n  return null;');
      }
      return match;
    }
  );
  return content;
}

// Function to fix import issues
function fixImportIssues(content) {
  // Fix .tsx extension imports
  content = content.replace(
    /from\s*['"]\.\/src\/main\.tsx['"]/g,
    "from './src/main'"
  );
  
  // Fix missing modules
  content = content.replace(
    /import\s*{\s*SEOOptimizer\s*}\s*from\s*['"]\.\/components\/SEOOptimizer['"];?/g,
    'import SEOOptimizer from \'./components/SEOOptimizer\';'
  );
  content = content.replace(
    /import\s*{\s*AccessibilityEnhancer\s*}\s*from\s*['"]\.\/components\/AccessibilityEnhancer['"];?/g,
    'import AccessibilityEnhancer from \'./components/AccessibilityEnhancer\';'
  );
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const originalContent = content;
    
    // Apply all fixes
    content = fixRemainingTypeImports(content);
    content = fixIconImports(content);
    content = fixDuplicateImports(content);
    content = fixOverrideModifiers(content);
    content = fixPropertyAccess(content);
    content = fixUndefinedAccess(content);
    content = fixOptionalAssignment(content);
    content = fixTypeIssues(content);
    content = fixMissingReturns(content);
    content = fixImportIssues(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
const patterns = [
  'app/**/*.{ts,tsx}',
  'src/**/*.{ts,tsx}',
  'components/**/*.{ts,tsx}',
  '*.{ts,tsx}'
];

let allFiles = [];
patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  allFiles = allFiles.concat(files);
});

// Remove duplicates
allFiles = [...new Set(allFiles)];

console.log(`Found ${allFiles.length} TypeScript files to process...`);

let fixedCount = 0;
allFiles.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);