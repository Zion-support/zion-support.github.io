import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix duplicate properties in interface definitions
function fixDuplicateProps(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate className and children properties in interfaces
    const duplicatePropsPattern = /interface\s+(\w+)Props\s*\{\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*\}/g;
    
    if (duplicatePropsPattern.test(content)) {
      content = content.replace(
        duplicatePropsPattern,
        'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;'
      );
      modified = true;
    }

    // Fix other patterns of duplicate properties
    const patterns = [
      // Multiple className properties
      {
        pattern: /className\?\s*:\s*string;\s*[^}]*className\?\s*:\s*string;/g,
        replacement: 'className?: string;'
      },
      // Multiple children properties
      {
        pattern: /children\?\s*:\s*React\.ReactNode;\s*[^}]*children\?\s*:\s*React\.ReactNode;/g,
        replacement: 'children?: React.ReactNode;'
      }
    ];

    patterns.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    // Fix specific missing type definitions
    const missingTypes = [
      'AccessibilityComponentsProps',
      'ContentNewsletterSignupProps', 
      'ContentStatisticsProps',
      'EnhancedSEOProps',
      'GlobalErrorBoundaryProps',
      'HeaderProps'
    ];

    missingTypes.forEach(typeName => {
      if (content.includes(typeName) && !content.includes(`interface ${typeName}`)) {
        // Add the missing interface definition
        const interfaceDef = `interface ${typeName} {\n  className?: string;\n  children?: React.ReactNode;\n}`;
        content = interfaceDef + '\n\n' + content;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed duplicate props in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function to fix all duplicate property issues
async function fixDuplicatePropertyIssues() {
  const pattern = 'app/components/**/*.tsx';
  const files = await glob(pattern, { cwd: process.cwd() });
  
  console.log(`Found ${files.length} component files to check for duplicate properties...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixDuplicateProps(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
fixDuplicatePropertyIssues().catch(console.error);