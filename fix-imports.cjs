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

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  const seenImports = new Set();
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (!seenImports.has(importKey)) {
        seenImports.add(importKey);
        importLines.push(line);
      }
    } else {
      otherLines.push(line);
    }
  }
  
  return [...importLines, ...otherLines].join('\n');
}

// Function to remove unreachable code after return statements
function removeUnreachableCode(content) {
  const lines = content.split('\n');
  let inFunction = false;
  let foundReturn = false;
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('export default function') || line.includes('function ')) {
      inFunction = true;
      foundReturn = false;
    }
    
    if (inFunction && line.trim().startsWith('return ')) {
      foundReturn = true;
    }
    
    if (inFunction && foundReturn && line.trim() === '}') {
      inFunction = false;
      foundReturn = false;
    }
    
    if (inFunction && foundReturn && !line.trim().startsWith('//') && line.trim() !== '' && !line.trim().startsWith('return')) {
      // Skip unreachable code
      continue;
    }
    
    result.push(line);
  }
  
  return result.join('\n');
}

// Function to fix duplicate variable declarations
function fixDuplicateVariables(content) {
  const lines = content.split('\n');
  const seenVars = new Set();
  const result = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('const ') || trimmed.startsWith('let ') || trimmed.startsWith('var ')) {
      const varName = trimmed.split(' ')[1]?.split('=')[0]?.trim();
      if (varName && seenVars.has(varName)) {
        // Skip duplicate variable declaration
        continue;
      }
      if (varName) {
        seenVars.add(varName);
      }
    }
    result.push(line);
  }
  
  return result.join('\n');
}

// Main function
function main() {
  const files = glob.sync('app/**/*.tsx', { cwd: __dirname });
  
  for (const file of files) {
    try {
      const filePath = path.join(__dirname, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Apply fixes
      content = fixDuplicateImports(content);
      content = removeUnreachableCode(content);
      content = fixDuplicateVariables(content);
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${file}`);
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  }
}

main();
>>>>>>> origin/main
