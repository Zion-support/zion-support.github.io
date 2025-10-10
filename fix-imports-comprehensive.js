#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix import statements comprehensively
function fixImportStatements(content) {
  // Fix double braces in imports: }} from -> } from
  content = content.replace(/\}\} from/g, '} from');
  
  // Fix }from -> } from
  content = content.replace(/}from/g, '} from');
  
  // Fix ,from -> , from
  content = content.replace(/,from/g, ', from');
  
  // Fix const Component: React.FC = () => {, -> const Component: React.FC = () => {
  content = content.replace(/= \(\) => \{,/g, '= () => {');
  
  // Fix extra semicolons after imports
  content = content.replace(/from 'react-helmet-async';\s*;/g, "from 'react-helmet-async';");
  content = content.replace(/from 'lucide-react';\s*;/g, "from 'lucide-react';");
  content = content.replace(/from 'react';\s*;/g, "from 'react';");
  
  // Fix missing spaces in import statements
  content = content.replace(/import\s*\{([^}]+)\}\s*from/g, 'import { $1 } from');
  
  return content;
}

// Function to remove merge conflict markers
function removeMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  return content;
}

// Function to fix JSX syntax issues
function fixJSXSyntax(content) {
  // Fix missing closing tags - basic patterns
  // This is a simplified fix, more complex cases need manual review
  
  // Fix common JSX issues
  content = content.replace(/\{\s*,\s*\}/g, '{}');
  content = content.replace(/\{\s*,\s*$/gm, '{');
  
  // Fix extra commas in JSX
  content = content.replace(/,(\s*[}\]])/g, '$1');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixImportStatements(content);
    content = removeMergeConflicts(content);
    content = fixJSXSyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '**/*.tsx',
    '**/*.ts'
  ];

  let totalFiles = 0;
  let fixedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'build/**'] 
    });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }

  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

main().catch(console.error);