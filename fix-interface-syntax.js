import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix malformed interface definitions
function fixInterfaceSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix interfaces missing closing braces
    const malformedInterfacePattern = /interface\s+(\w+)Props\s*\{\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*\n\nconst/g;
    
    if (malformedInterfacePattern.test(content)) {
      content = content.replace(
        malformedInterfacePattern,
        'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;\n}\n\nconst'
      );
      modified = true;
    }

    // Fix other patterns of malformed interfaces
    const patterns = [
      // Interface with missing closing brace before const
      {
        pattern: /interface\s+(\w+)Props\s*\{\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*\n\nconst/g,
        replacement: 'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;\n}\n\nconst'
      },
      // Interface with missing closing brace before component definition
      {
        pattern: /interface\s+(\w+)Props\s*\{\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*\n\n(\w+):/g,
        replacement: 'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;\n}\n\nconst $2:'
      }
    ];

    patterns.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    // Fix specific syntax errors in ServicePageTemplate and SystemMonitor
    if (filePath.includes('ServicePageTemplate.tsx') || filePath.includes('SystemMonitor.tsx')) {
      // Fix malformed interface with multiple properties
      const complexInterfacePattern = /interface\s+(\w+)Props\s*\{\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*[^}]*\n\nconst/g;
      if (complexInterfacePattern.test(content)) {
        content = content.replace(
          complexInterfacePattern,
          'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;\n}\n\nconst'
        );
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed interface syntax in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function to fix all interface syntax issues
async function fixInterfaceSyntaxIssues() {
  const pattern = 'app/components/**/*.tsx';
  const files = await glob(pattern, { cwd: process.cwd() });
  
  console.log(`Found ${files.length} component files to check for interface syntax issues...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixInterfaceSyntax(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
fixInterfaceSyntaxIssues().catch(console.error);