import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific files with known issues
function fixSpecificFiles() {
  
  filesToFix.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unused imports
      content = content.replace("import React from 'react'\n", '');
      content = content.replace("import Link from 'next/link'\n", '');
      content = content.replace("import { ArrowRight } from 'lucide-react'\n", '');
      
      // Clean up extra empty lines
      content = content.replace(/\n\n\n+/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
          } catch (error) {
    // Empty block
  }
  });
}

// Function to fix files with multiple unused icon imports
function fixIconImportFiles() {
  
  filesToFix.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove the entire unused icon import line
      const iconImportRegex = /import \{ Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Check \} from 'lucide-react';\n/g;
      content = content.replace(iconImportRegex, '');
      
      // Clean up extra empty lines
      content = content.replace(/\n\n\n+/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
          } catch (error) {
    // Empty block
  }
  });
}

// Function to fix component files with unused imports
function fixComponentFiles() {
  const filesToFix = [
    'app/components/Footer.tsx',
    'app/components/Navigation.tsx'
  ];

  filesToFix.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unused imports
      content = content.replace(/, ArrowRight/g, '');
      content = content.replace(/, Cloud/g, '');
      content = content.replace(/, Search/g, '');
      content = content.replace(/, ArrowLeft/g, '');
      content = content.replace(/, RefreshCw/g, '');
      
      // Clean up extra empty lines
      content = content.replace(/\n\n\n+/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
          } catch (error) {
    // Empty block
  }
  });
}

// Main function
async function main() {
    fixSpecificFiles();
  
    fixIconImportFiles();
  
    fixComponentFiles();
  
  }

main().catch(console.error);