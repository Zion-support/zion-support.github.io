<<<<<<< HEAD
=======
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// Common imports that are frequently missing
const commonImports = {
  'Helmet': "import { Helmet } from 'react-helmet-async';",
  'Link': "import { Link } from 'react-router-dom';",
  'ArrowRight': "import { ArrowRight } from 'lucide-react';",
  'Users': "import { Users } from 'lucide-react';",
  'Star': "import { Star } from 'lucide-react';",
  'Monitor': "import { Monitor } from 'lucide-react';",
  'Cloud': "import { Cloud } from 'lucide-react';",
  'Code': "import { Code } from 'lucide-react';",
  'Network': "import { Network } from 'lucide-react';",
  'Phone': "import { Phone } from 'lucide-react';",
  'Mic': "import { Mic } from 'lucide-react';",
  'Hand': "import { Hand } from 'lucide-react';",
  'Search': "import { Search } from 'lucide-react';",
  'Database': "import { Database } from 'lucide-react';",
  'Home': "import { Home } from 'lucide-react';",
  'Calendar': "import { Calendar } from 'lucide-react';",
  'Edit': "import { Edit } from 'lucide-react';",
  'Pause': "import { Pause } from 'lucide-react';",
  'Download': "import { Download } from 'lucide-react';",
  'Upload': "import { Upload } from 'lucide-react';",
  'Shield': "import { Shield } from 'lucide-react';",
  'Clock': "import { Clock } from 'lucide-react';",
  'Activity': "import { Activity } from 'lucide-react';",
  'Plus': "import { Plus } from 'lucide-react';",
  'Award': "import { Award } from 'lucide-react';",
  'Cpu': "import { Cpu } from 'lucide-react';",
  'PieChart': "import { PieChart } from 'lucide-react';",
  'MapPin': "import { MapPin } from 'lucide-react';",
  'Box': "import { Box } from 'lucide-react';",
  'Brain': "import { Brain } from 'lucide-react';",
  'CheckCircle': "import { CheckCircle } from 'lucide-react';",
  'TrendingUp': "import { TrendingUp } from 'lucide-react';",
  'Sparkles': "import { Sparkles } from 'lucide-react';",
  'Zap': "import { Zap } from 'lucide-react';",
  'Settings': "import { Settings } from 'lucide-react';",
  'Target': "import { Target } from 'lucide-react';",
  'Workflow': "import { Workflow } from 'lucide-react';",
  'BarChart3': "import { BarChart3 } from 'lucide-react';",
  'AlertCircle': "import { AlertCircle } from 'lucide-react';",
  'Heart': "import { Heart } from 'lucide-react';",
  'Globe': "import { Globe } from 'lucide-react';",
  'Mail': "import { Mail } from 'lucide-react';",
  'Smartphone': "import { Smartphone } from 'lucide-react';",
  'Lightbulb': "import { Lightbulb } from 'lucide-react';",
  'TrendingDown': "import { TrendingDown } from 'lucide-react';",
  'PenTool': "import { PenTool } from 'lucide-react';",
  'Video': "import { Video } from 'lucide-react';",
  'Bot': "import { Bot } from 'lucide-react';",
  'motion': "import { motion } from 'framer-motion';"
};

// Function to get all TypeScript/JavaScript files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Function to fix imports in a file
function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check for missing imports
    const missingImports = [];
    
    for (const [component, importStatement] of Object.entries(commonImports)) {
      // Check if component is used but not imported
      const isUsed = new RegExp(`\\b${component}\\b`).test(content);
      const isImported = content.includes(`import { ${component}`) || content.includes(`import ${component}`);
      
      if (isUsed && !isImported) {
        missingImports.push(importStatement);
        modified = true;
      }
    }
    
    // Add missing imports at the top
    if (missingImports.length > 0) {
      // Find the last import statement
      const importLines = content.split('\n');
      let lastImportIndex = -1;
      
      for (let i = 0; i < importLines.length; i++) {
        if (importLines[i].trim().startsWith('import ')) {
          lastImportIndex = i;
        }
      }
      
      if (lastImportIndex >= 0) {
        // Insert after the last import
        importLines.splice(lastImportIndex + 1, 0, '', ...missingImports);
      } else {
        // Insert at the beginning
        importLines.unshift('', ...missingImports);
      }
      
      content = importLines.join('\n');
    }
    
    // Remove unused imports
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import ')) {
        // Extract imported components
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
        if (importMatch) {
          const importedComponents = importMatch[1].split(',').map(c => c.trim());
          const usedComponents = [];
          
          for (const component of importedComponents) {
            // Check if component is used in the file
            const isUsed = new RegExp(`\\b${component}\\b`).test(content);
            if (isUsed) {
              usedComponents.push(component);
            }
          }
          
          if (usedComponents.length > 0) {
            newLines.push(`import { ${usedComponents.join(', ')} } from '${line.match(/from\s*['"]([^'"]+)['"]/)?.[1] || ''}';`);
          }
          // Skip the line if no components are used
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (modified || newLines.length !== lines.length) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting import fixes...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  fixImportsInFile(file);
  fixedCount++;
});

console.log(`Processed ${fixedCount} files`);
console.log('Import fixes completed!');
=======
#!/usr/bin/env node

>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
const fs = require('fs');

// Files to fix
const files = [
  'app/about/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-customer-sentiment-tracker/page.tsx',
  'app/contact/page.tsx',
  'app/pricing/page.tsx'
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused lucide-react imports
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?\s*\n/g, '');
    
    // Remove unused react-router-dom imports
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]react-router-dom['"];?\s*\n/g, '');
    
    // Remove unused component imports
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]\.\.\/components\/[^'"]*['"];?\s*\n/g, '');
    
    // Remove unused variable declarations (simple cases)
    const lines = content.split('\n');
    const filteredLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that declare unused variables
      if (line.includes('const ') && line.includes(' = [')) {
        const varName = line.match(/const\s+(\w+)\s*=/)?.[1];
        if (varName) {
          // Check if this variable is used elsewhere in the file
          const restOfFile = lines.slice(i + 1).join('\n');
          if (!restOfFile.includes(varName + '[') && !restOfFile.includes(varName + '.')) {
            // Skip this variable declaration
            continue;
          }
        }
      }
      
      filteredLines.push(line);
    }
    
    content = filteredLines.join('\n');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

<<<<<<< HEAD
// Fix all files
files.forEach(fixUnusedImports);
console.log('All files fixed!');
=======
main();
>>>>>>> origin/main
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
