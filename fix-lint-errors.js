#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/TSX files
const getAllFiles = (dir, extensions = ['.tsx', '.ts']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused React imports
const fixUnusedReactImports = (content) => {
  // Remove unused React import if it's not used in JSX
  if (content.includes("import React from 'react';") && !content.includes('<') && !content.includes('React.')) {
    return content.replace(/import React from 'react';\n?/g, '');
  }
  return content;
};

// Fix unused Helmet imports
const fixUnusedHelmetImports = (content) => {
  if (content.includes("import { Helmet } from 'react-helmet';") && !content.includes('<Helmet')) {
    return content.replace(/import { Helmet } from 'react-helmet';\n?/g, '');
  }
  return content;
};

// Fix unused page variables
const fixUnusedPageVariables = (content) => {
  // Remove unused page parameter in function signatures
  const pageParamRegex = /\(page: any\) => \{/g;
  if (content.match(pageParamRegex) && !content.includes('page.')) {
    return content.replace(pageParamRegex, '() => {');
  }
  
  // Remove unused page variable assignments
  const pageVarRegex = /const page = .*;\n/g;
  if (content.match(pageVarRegex) && !content.includes('page.')) {
    return content.replace(pageVarRegex, '');
  }
  
  return content;
};

// Fix unused icon imports
const fixUnusedIconImports = (content) => {
  const iconImports = [
    'ArrowRight', 'CheckCircle', 'Target', 'Zap', 'Clock', 'AlertTriangle',
    'Shield', 'Users', 'Menu', 'useEffect'
  ];
  
  let newContent = content;
  
  iconImports.forEach(icon => {
    // Handle single icon imports
    const singleRegex = new RegExp(`import { ${icon} } from '[^']+';\\n?`, 'g');
    if (newContent.includes(`import { ${icon}`) && !newContent.includes(`<${icon}`) && !newContent.includes(`${icon}`)) {
      newContent = newContent.replace(singleRegex, '');
    }
    
    // Handle multiple icon imports in one line
    const multiRegex = new RegExp(`import { [^}]*${icon}[^}]* } from '[^']+';\\n?`, 'g');
    const matches = newContent.match(multiRegex);
    if (matches) {
      matches.forEach(match => {
        const icons = match.match(/{ ([^}]+) }/)[1].split(',').map(i => i.trim());
        const usedIcons = icons.filter(iconName => 
          newContent.includes(`<${iconName}`) || newContent.includes(`${iconName}`)
        );
        
        if (usedIcons.length === 0) {
          newContent = newContent.replace(match, '');
        } else if (usedIcons.length < icons.length) {
          const newImport = `import { ${usedIcons.join(', ')} } from '${match.match(/from '([^']+)'/)[1]}';\n`;
          newContent = newContent.replace(match, newImport);
        }
      });
    }
  });
  
  return newContent;
};

// Fix any types in AnalyticsContext
const fixAnyTypes = (content) => {
  if (content.includes('AnalyticsContext')) {
    return content
      .replace(/trackEvent: \(event: any\) => void/g, 'trackEvent: (event: string) => void')
      .replace(/trackPageView: \(page: any\) => void/g, 'trackPageView: (page: string) => void')
      .replace(/trackConversion: \(conversion: any\) => void/g, 'trackConversion: (conversion: string) => void')
      .replace(/setUserProperties: \(properties: any\) => void/g, 'setUserProperties: (properties: Record<string, unknown>) => void')
      .replace(/setUserId: \(id: any\) => void/g, 'setUserId: (id: string) => void')
      .replace(/setUserAttributes: \(attributes: any\) => void/g, 'setUserAttributes: (attributes: Record<string, unknown>) => void');
  }
  return content;
};

// Process a single file
const processFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply all fixes
    content = fixUnusedReactImports(content);
    content = fixUnusedHelmetImports(content);
    content = fixUnusedPageVariables(content);
    content = fixUnusedIconImports(content);
    content = fixAnyTypes(content);
    
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
};

// Main execution
const main = () => {
  console.log('Starting lint error fixes...');
  
  const files = getAllFiles('./app');
  let fixedCount = 0;
  
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run lint again to see remaining issues
  console.log('\nRunning lint check...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
  } catch (error) {
    console.log('Lint completed with warnings');
  }
};

main();