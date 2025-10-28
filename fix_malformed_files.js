#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript files in app directory
const getAllTsxFiles = () => {
  try {
    const result = execSync('find app -name "*.tsx" -type f', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
};

// Check if a file has malformed structure
const isMalformed = (content) => {
  // Check for common malformed patterns
  const malformedPatterns = [
    /^}\s*import\s+/m,  // } followed by import
    /^}\s*export\s+/m,  // } followed by export
    /^}\s*function\s+/m, // } followed by function
    /^}\s*const\s+/m,   // } followed by const
    /^}\s*let\s+/m,     // } followed by let
    /^}\s*var\s+/m,     // } followed by var
    /^}\s*type\s+/m,    // } followed by type
    /^}\s*interface\s+/m, // } followed by interface
    /^}\s*enum\s+/m,    // } followed by enum
    /^}\s*class\s+/m,   // } followed by class
    /^}\s*export\s+const\s+metadata/m, // } followed by export const metadata
    /^}\s*export\s+default/m, // } followed by export default
  ];
  
  return malformedPatterns.some(pattern => pattern.test(content));
};

// Fix malformed file structure
const fixMalformedFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inComponent = false;
    let braceCount = 0;
    let lastImportLine = -1;
    let lastExportLine = -1;
    let componentStartLine = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track imports and exports
      if (trimmedLine.startsWith('import ')) {
        lastImportLine = i;
      }
      if (trimmedLine.startsWith('export ')) {
        lastExportLine = i;
      }
      
      // Track component start
      if (trimmedLine.startsWith('function ') || trimmedLine.startsWith('const ') && trimmedLine.includes('= () =>')) {
        componentStartLine = i;
        inComponent = true;
      }
      
      // Track braces
      if (inComponent) {
        braceCount += (line.match(/{/g) || []).length;
        braceCount -= (line.match(/}/g) || []).length;
        
        // If we hit a closing brace and brace count is 0, component ended
        if (braceCount === 0 && line.includes('}')) {
          inComponent = false;
        }
      }
      
      // Skip lines that are orphaned closing braces or malformed
      if (trimmedLine === '}' && !inComponent && braceCount <= 0) {
        continue;
      }
      
      // Skip lines that start with } followed by import/export
      if (trimmedLine.startsWith('}') && i + 1 < lines.length) {
        const nextLine = lines[i + 1].trim();
        if (nextLine.startsWith('import ') || nextLine.startsWith('export ')) {
          continue;
        }
      }
      
      fixedLines.push(line);
    }
    
    // Reorganize the file structure
    const imports = [];
    const exports = [];
    const component = [];
    const other = [];
    
    let currentSection = 'other';
    
    for (const line of fixedLines) {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('import ')) {
        currentSection = 'imports';
        imports.push(line);
      } else if (trimmed.startsWith('export ')) {
        if (trimmed.includes('metadata') || trimmed.includes('const metadata')) {
          currentSection = 'exports';
          exports.push(line);
        } else {
          currentSection = 'component';
          component.push(line);
        }
      } else if (trimmed.startsWith('function ') || (trimmed.startsWith('const ') && trimmed.includes('= () =>'))) {
        currentSection = 'component';
        component.push(line);
      } else {
        if (currentSection === 'imports') {
          imports.push(line);
        } else if (currentSection === 'exports') {
          exports.push(line);
        } else if (currentSection === 'component') {
          component.push(line);
        } else {
          other.push(line);
        }
      }
    }
    
    // Rebuild the file
    const newContent = [
      ...imports,
      ...(imports.length > 0 ? [''] : []),
      ...exports,
      ...(exports.length > 0 ? [''] : []),
      ...component,
      ...(component.length > 0 ? [''] : []),
      ...other
    ].join('\n');
    
    // Clean up extra newlines
    const cleanedContent = newContent.replace(/\n\n\n+/g, '\n\n');
    
    if (cleanedContent !== originalContent) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const allFiles = getAllTsxFiles();
console.log(`Found ${allFiles.length} TypeScript files`);

let fixedCount = 0;
let errorCount = 0;

allFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (isMalformed(content)) {
      console.log(`Fixing malformed file: ${filePath}`);
      if (fixMalformedFile(filePath)) {
        fixedCount++;
        console.log(`✓ Fixed: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${allFiles.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);