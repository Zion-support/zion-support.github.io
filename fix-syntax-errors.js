#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with critical syntax errors that need manual fixing
const criticalFiles = [
  'src/pages/AIMicroSAAS.tsx',
  'components/Header.tsx'
];

criticalFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;

    // Fix import statements with trailing quotes
    fixedContent = fixedContent.replace(/import ([^;]+);"/g, 'import $1;');
    
    // Fix array declarations with trailing comma
    fixedContent = fixedContent.replace(/\[,/g, '[');
    
    // Fix object properties with = instead of :
    fixedContent = fixedContent.replace(/id="([^"]+)"/g, 'id: "$1"');
    
    // Fix duplicate properties
    fixedContent = fixedContent.replace(/icon: undefined,,/g, '');
    fixedContent = fixedContent.replace(/icon: FileText,,/g, 'icon: FileText,');
    
    // Fix array items with trailing commas and semicolons
    fixedContent = fixedContent.replace(/,,\s*$/gm, ',');
    fixedContent = fixedContent.replace(/",;"$/gm, '",');
    
    // Fix function return type
    fixedContent = fixedContent.replace(/React\.JSX\.element/g, 'React.JSX.Element');
    
    // Fix missing imports
    if (filePath.includes('AIMicroSAAS.tsx')) {
      fixedContent = fixedContent.replace(
        /from "lucide-react"/,
        'from "lucide-react"'
      );
    }

    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Syntax error fixes completed');