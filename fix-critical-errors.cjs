#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const seenImports = new Set();
  const filteredLines = [];
  
  for (const line of lines) {
    if (line.includes('import') && line.includes('from')) {
      const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const uniqueImports = [...new Set(imports)];
        if (uniqueImports.length !== imports.length) {
          const newLine = line.replace(importMatch[1], uniqueImports.join(', '));
          filteredLines.push(newLine);
          continue;
        }
      }
    }
    filteredLines.push(line);
  }
  
  return filteredLines.join('\n');
}

// Function to fix missing icon imports
function fixMissingIcons(content) {
  const iconMap = {
    'Cogs': 'Cog',
    'Shield': 'Shield',
    'Link': 'Link',
    'Cpu': 'Cpu',
    'Sparkles': 'Sparkles',
    'Zap': 'Zap',
    'ArrowRight': 'ArrowRight',
    'ArrowLeft': 'ArrowLeft',
    'Target': 'Target',
    'CheckCircle': 'CheckCircle',
    'Lock': 'Lock'
  };
  
  const missingIcons = [];
  Object.entries(iconMap).forEach(([icon, importName]) => {
    if (content.includes(icon) && !content.includes(`import { ${importName}`) && !content.includes(`import ${importName}`)) {
      missingIcons.push(importName);
    }
  });
  
  if (missingIcons.length > 0) {
    const importStatement = `import { ${missingIcons.join(', ')} } from 'lucide-react';\n`;
    content = importStatement + content;
  }
  
  // Fix Cogs -> Cog
  content = content.replace(/\bCogs\b/g, 'Cog');
  
  return content;
}

// Function to fix unreachable code
function fixUnreachableCode(content) {
  // Remove unreachable code after return statements
  content = content.replace(/return[^;]*;\s*[^}]*}/g, (match) => {
    const returnIndex = match.indexOf('return');
    const returnEnd = match.indexOf(';', returnIndex);
    return match.substring(0, returnEnd + 1) + '\n  }';
  });
  
  return content;
}

// Function to fix type imports
function fixTypeImports(content) {
  content = content.replace(
    /import\s*{\s*ErrorInfo\s*}\s*from\s*['"]react['"];?/g,
    'import type { ErrorInfo } from \'react\';'
  );
  content = content.replace(
    /import\s*{\s*ReactNode\s*}\s*from\s*['"]react['"];?/g,
    'import type { ReactNode } from \'react\';'
  );
  content = content.replace(
    /import\s*{\s*WebVitalsMetrics\s*}\s*from\s*['"]web-vitals['"];?/g,
    'import type { WebVitalsMetrics } from \'web-vitals\';'
  );
  return content;
}

// Function to fix override modifiers
function fixOverrideModifiers(content) {
  // Remove duplicate override modifiers
  content = content.replace(/override\s+override\s+/g, 'override ');
  return content;
}

// Function to fix optional property assignments
function fixOptionalAssignments(content) {
  // Fix optional property assignments
  content = content.replace(
    /(\w+)\?\.(\w+)\s*=/g,
    'if ($1) { $1.$2 ='
  );
  return content;
}

// Function to fix missing return statements
function fixMissingReturns(content) {
  // Add return null for functions that need it
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

// Function to fix import extensions
function fixImportExtensions(content) {
  // Fix .tsx extension imports
  content = content.replace(
    /from\s*['"]\.\/App\.tsx['"]/g,
    "from './App'"
  );
  return content;
}

// Function to fix exactOptionalPropertyTypes
function fixExactOptionalPropertyTypes(content) {
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

// Function to fix undefined object access
function fixUndefinedAccess(content) {
  // Add null checks for potentially undefined objects
  content = content.replace(
    /(\w+)\.(\w+)(?=\s*\.)/g,
    '$1?.$2'
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
    content = fixDuplicateImports(content);
    content = fixMissingIcons(content);
    content = fixUnreachableCode(content);
    content = fixTypeImports(content);
    content = fixOverrideModifiers(content);
    content = fixOptionalAssignments(content);
    content = fixMissingReturns(content);
    content = fixImportExtensions(content);
    content = fixExactOptionalPropertyTypes(content);
    content = fixUndefinedAccess(content);
    
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