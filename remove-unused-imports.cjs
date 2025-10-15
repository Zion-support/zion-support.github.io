#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function removeUnusedImports(content, filePath) {
  // This is a simplified approach - in a real scenario, you'd use a proper AST parser
  // For now, we'll just remove the most common unused imports based on the linting errors
  
  const lines = content.split('\n');
  const cleanedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip lines that are part of import statements with many unused imports
    if (line.includes('import {') && line.includes('} from "lucide-react"')) {
      // Keep only the commonly used imports
      const commonImports = [
        'ArrowRight', 'CheckCircle', 'Star', 'Brain', 'Zap', 'Shield', 'BarChart3', 
        'Code', 'Database', 'Users', 'DollarSign', 'Settings', 'Target', 'TrendingUp', 
        'Cpu', 'Monitor', 'FileText', 'MessageSquare', 'Eye', 'Heart', 'Award'
      ];
      
      const usedImports = commonImports.filter(imp => 
        content.includes(`<${imp}`) || content.includes(`${imp} `) || content.includes(`${imp},`)
      );
      
      if (usedImports.length > 0) {
        cleanedLines.push(`import { ${usedImports.join(', ')} } from "lucide-react";`);
      } else {
        cleanedLines.push('import { ArrowRight, CheckCircle } from "lucide-react";');
      }
    } else {
      cleanedLines.push(line);
    }
  }
  
  return cleanedLines.join('\n');
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = removeUnusedImports(content, filePath);
    
    if (content !== cleanedContent) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Cleaned unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process specific files that have many unused imports
const filesToProcess = [
  'app/ai-services/page.tsx',
  'app/components/Footer.tsx',
  'app/components/EnhancedNavigation.tsx',
  'app/components/Navigation.tsx',
  'app/consultation/page.tsx',
  'app/custom-development/page.tsx',
  'app/customer-relationship-manager/page.tsx'
];

for (const file of filesToProcess) {
  if (fs.existsSync(file)) {
    processFile(file);
  }
}

console.log('Unused imports cleanup completed!');