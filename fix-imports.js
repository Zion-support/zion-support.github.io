#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix import statements in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed import statements
    // Pattern: import {"...", "...", "..."} from 'module'"
    const malformedImportRegex = /import\s*\{\s*"([^"]+)"\s*,\s*"([^"]+)"\s*(?:,\s*"([^"]+)")*\s*\}\s*from\s*'([^']+)'"/g;
    
    content = content.replace(malformedImportRegex, (match, first, second, third, module) => {
      modified = true;
      let imports = [first, second];
      if (third) {
        imports.push(third);
      }
      return `import { ${imports.join(', ')} } from '${module}'`;
    });
    
    // Fix other malformed import patterns
    // Pattern: import {"...", "...", "..."} from 'module'"
    const malformedImportRegex2 = /import\s*\{\s*"([^"]+)"\s*\}\s*from\s*'([^']+)'"/g;
    content = content.replace(malformedImportRegex2, (match, imports, module) => {
      modified = true;
      return `import { ${imports} } from '${module}'`;
    });
    
    // Fix malformed function declarations
    // Pattern: const Component: React.FC = () => {return ()}
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*return\s*\(\)\s*\}/g, (match, componentName) => {
      modified = true;
      return `const ${componentName}: React.FC = () => {`;
    });
    
    // Fix malformed object declarations
    // Pattern: const features = [}
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\}/g, (match, varName) => {
      modified = true;
      return `const ${varName} = [`;
    });
    
    // Fix malformed object properties
    // Pattern: {icon: Wifi,}
    content = content.replace(/\{\s*(\w+):\s*(\w+),\s*\}/g, (match, key, value) => {
      modified = true;
      return `{${key}: ${value}}`;
    });
    
    // Fix malformed JSX return statements
    // Pattern: return ()}
    content = content.replace(/return\s*\(\)\s*\}/g, 'return (');
    
    // Fix malformed JSX fragments
    // Pattern: <React.Fragment>
    content = content.replace(/<React\.Fragment>/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTSXFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out', 'coverage'].includes(item)) {
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {
          // Check for TypeScript/JSX files
          if (/\.(tsx|jsx)$/.test(item)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting import statement fixes...');

const workspaceDir = process.cwd();
const tsxFiles = findTSXFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TypeScript/JSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixImports(file)) {
    fixedCount++;
    console.log(`Fixed imports in: ${file}`);
  }
}

console.log(`Fixed imports in ${fixedCount} files`);

// Also fix some specific problematic files manually
const problematicFiles = [
  '/workspace/App.tsx',
  '/workspace/app/5g-implementation/page.tsx',
  '/workspace/app/about/page.tsx'
];

console.log('Fixing specific problematic files...');

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // More specific fixes for these files
      
      // Fix App.tsx
      if (file.includes('App.tsx')) {
        content = content.replace(
          /import\s*\{\s*"HashRouter as Router, Routes, Route"\s*\}\s*from\s*'react-router-dom'"/g,
          "import { HashRouter as Router, Routes, Route } from 'react-router-dom'"
        );
        content = content.replace(
          /const App: React\.FC = \(\) => \{return \(\)\}/g,
          'const App: React.FC = () => {'
        );
        content = content.replace(
          /return \(\)\s*<React\.Fragment>/g,
          'return (\n    <React.Fragment>'
        );
      }
      
      // Fix 5g-implementation page
      if (file.includes('5g-implementation')) {
        content = content.replace(
          /import\s*\{\s*"Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart"\s*\}\s*from\s*'lucide-react'"/g,
          "import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart } from 'lucide-react'"
        );
        content = content.replace(
          /const FiveGImplementationPage: React\.FC = \(\) => \{const features = \[\}/g,
          'const FiveGImplementationPage: React.FC = () => {\n  const features = ['
        );
      }
      
      // Fix about page
      if (file.includes('about')) {
        content = content.replace(
          /import\s*\{\s*"Target, Users, Award, ArrowRight, CheckCircle, Zap, Shield, Brain, Lightbulb, Globe"\s*\}\s*from\s*'lucide-react'"/g,
          "import { Target, Users, Award, ArrowRight, CheckCircle, Zap, Shield, Brain, Lightbulb, Globe } from 'lucide-react'"
        );
      }
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed specific issues in: ${file}`);
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  }
}

console.log('Import statement fixes completed!');