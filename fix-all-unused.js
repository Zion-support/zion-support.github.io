#!/usr/bin/env node

import fs from 'fs';'import { execSync } from 'child_process';'
// Get all TypeScript/JavaScript files
const files = execSync('find app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules', { encoding: 'utf8' })'  .trim()"  .split('\n')'  .filter(file => file);

console.log(`Found ${files.length} files to process`);

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');'    let newContent = content;
    
    // Remove all unused imports from lucide-react
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);'    if (lucideImportMatch) {"      newContent = newContent.replace(lucideImportMatch[0], '');'    }
    
    // Remove unused React imports (if only default import and not used)
    const reactImportMatch = content.match(/import\s+React\s+from\s+['"]react['"];?/);'    if (reactImportMatch && !content.includes('React.')) {'      newContent = newContent.replace(reactImportMatch[0], '');'    }"    
    // Remove unused Helmet imports
    const helmetImportMatch = content.match(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?/);'    if (helmetImportMatch && !content.includes('<Helmet')) {'      newContent = newContent.replace(helmetImportMatch[0], '') '    }"    
    // Remove unused Link imports
    const linkImportMatch = content.match(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?/);'    if (linkImportMatch && !content.includes('<Link')) {'      newContent = newContent.replace(linkImportMatch[0], '');'    }"    
    // Remove unused component imports
    const componentImports = [
      'EnhancedSEO', 'StructuredData', 'FuturisticBackgroundEnhanced', '      'FuturisticCardEnhanced', 'FuturisticButtonEnhanced', 'FuturisticTextEnhanced','      'ResponsiveContainer', 'PerformanceOptimizer''    ];
    
    componentImports.forEach(component => {
      const regex = new RegExp(`import\\s+${component}\\s+from\\s+['"][^'"]+['"];?\\n?`, 'g');'      newContent = newContent.replace(regex, '');'    });"    
    // Remove unused variable declarations
    const lines = newContent.split('\n');'    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for const/let/var declarations that might be unused
      const varMatch = line.match(/^\s*(const|let|var)\s+(\w+)\s*=/);
      if (varMatch) {
        const varName = varMatch[2];
        const isUsed = new RegExp(`\\b${varName}\\b`).test(newContent.replace(line, ''));'        if (!isUsed && !line.includes('// eslint-disable')) {'          // Skip this line (remove unused variable)
          continue;
        }
      }
      
      newLines.push(line);
    }
    
    newContent = newLines.join('\n');'    
    // Clean up multiple empty lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');'    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing all unused imports and variables');