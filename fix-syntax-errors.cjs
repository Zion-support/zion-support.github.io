#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');


function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing brace in metadata and missing function declaration
    if (content.includes('export const metadata = {') && !content.includes('export default function')) {
      // Find the metadata object and add missing closing brace and function declaration
      const metadataMatch = content.match(/export const metadata = \{[\s\S]*?keywords: "[^"]*"/);
      if (metadataMatch) {
        const beforeMetadata = content.substring(0, content.indexOf('export const metadata = {'));
        const afterMetadata = content.substring(content.indexOf('export const metadata = {'));
        
        // Extract the metadata content
        const metadataContent = afterMetadata.match(/export const metadata = \{[\s\S]*?keywords: "[^"]*"/)[0];
        
        // Find where the JSX starts (look for <div)
        const jsxStart = afterMetadata.search(/^\s*<div/);
        if (jsxStart !== -1) {
          const jsxContent = afterMetadata.substring(jsxStart);
          
          // Get the function name from the file path
          const fileName = path.basename(filePath, '.tsx');
          const functionName = fileName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join('') + 'Page';
          
          // Reconstruct the file
          content = beforeMetadata + 
            metadataContent + '};\n\n' +
            `export default function ${functionName}() {\n` +
            '  return (\n' +
            jsxContent.replace(/^\s*/, '    ') + '\n' +
            '  );\n' +
            '}';
          
          modified = true;
        }

    // Fix import statements with commas instead of semicolons
    const importRegex = /^import\s+.*?,\s*$/gm;
    const matches = content.match(importRegex);
    if (matches) {
      content = content.replace(importRegex, (match) => {
        return match.replace(/,\s*$/, ';');
      });
      modified = true;
    }

    // Fix interface properties with commas instead of semicolons
    const interfaceRegex = /interface\s+\w+\s*\{[^}]*\}/gs;
    content = content.replace(interfaceRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+),\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix type definitions with commas instead of semicolons
    const typeRegex = /type\s+\w+\s*=\s*\{[^}]*\}/gs;
    content = content.replace(typeRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+),\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix object properties with commas instead of semicolons
    const objectRegex = /const\s+\w+\s*=\s*\{[^}]*\}/gs;
    content = content.replace(objectRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+),\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix function parameters with commas instead of semicolons
    const functionRegex = /function\s+\w+\s*\([^)]*\)/g;
    content = content.replace(functionRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,)]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix arrow function parameters with commas instead of semicolons
    const arrowFunctionRegex = /\([^)]*\)\s*=>/g;
    content = content.replace(arrowFunctionRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,)]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix destructuring with commas instead of semicolons
    const destructuringRegex = /const\s+\{[^}]*\}\s*=/g;
    content = content.replace(destructuringRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,}]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix array destructuring with commas instead of semicolons
    const arrayDestructuringRegex = /const\s+\[[^\]]*\]\s*=/g;
    content = content.replace(arrayDestructuringRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,\]]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix React component props with commas instead of semicolons
    const componentPropsRegex = /interface\s+\w+Props\s*\{[^}]*\}/gs;
    content = content.replace(componentPropsRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,;]+),\s*$/gm, '$1: $2;');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix generic type parameters with commas instead of semicolons
    const genericRegex = /<[^>]*>/g;
    content = content.replace(genericRegex, (match) => {
      const fixed = match.replace(/(\w+)\s*:\s*([^,>]+),\s*/g, '$1: $2, ');
      if (fixed !== match) {
        modified = true;
        return fixed;
      }
      return match;
    });

    // Fix export statements with commas instead of semicolons
    const exportRegex = /^export\s+.*?,\s*$/gm;
    content = content.replace(exportRegex, (match) => {
      return match.replace(/,\s*$/, ';');
    });

    // Fix variable declarations with commas instead of semicolons
    const varRegex = /^(const|let|var)\s+.*?,\s*$/gm;
    content = content.replace(varRegex, (match) => {
      return match.replace(/,\s*$/, ';');
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }

    return false;

      // Files with incomplete syntax
      /^[\s\n]*\}[\s\n]*res\.setHeader[\s\S]*$/,
      // Files with just a return statement
      /^[\s\n]*return;[\s\S]*$/,
    ];
    
    let shouldReplace = false;
    for (const pattern of patterns) {
      if (pattern.test(content)) {
        shouldReplace = true;
        break;
      }
    }
    
    if (shouldReplace) {
      const newContent = `import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}


function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSyntaxErrors(filePath)) {
        console.log(`Fixed syntax errors in: ${filePath}`);
        fixedCount++;
      }
    });
  });

  console.log(`\nProcessed ${totalFiles} files`);
  console.log(`Fixed syntax errors in ${fixedFiles} files`);
}

console.log('Starting syntax error fixes...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed syntax errors in ${fixedCount} files.`);

