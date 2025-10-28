#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function addErrorBoundary(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Add error boundary wrapper for page components
    if (content.includes('export default function') && filePath.includes('/page.tsx')) {
      if (!content.includes('ErrorBoundary')) {
        content = `\n${content}`;
        
        // Wrap the component with ErrorBoundary
        content = content.replace(
          /export default function (\w+)/g,
          'function $1'
        );
        content = content.replace(
          /^(\s*)(function \w+\([^)]*\)\s*\{[\s\S]*?\})\s*$/gm,
          `$1$2\n\nexport default function Wrapped$1(props) {\n  return (\n    <ErrorBoundary>\n      <$1 {...props} />\n    </ErrorBoundary>\n  );\n}`
        );
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
            return true;
    }
    
    return false;
  } catch (error) {
        return false;
  }
}

function addAccessibilityImprovements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Add aria-labels to interactive elements
    if (content.includes('<button') && !content.includes('aria-label')) {
      content = content.replace(
        /<button([^>]*)>/g,
        '<button$1 aria-label="Button">'
      );
      modified = true;
    }
    
    // Add alt attributes to images
    if (content.includes('<img') && !content.includes('alt=')) {
      content = content.replace(
        /<img([^>]*)>/g,
        '<img$1 alt="Image">'
      );
      modified = true;
    }
    
    // Add role attributes
    if (content.includes('<div') && content.includes('onClick') && !content.includes('role=')) {
      content = content.replace(
        /<div([^>]*onClick[^>]*)>/g,
        '<div$1 role="button" tabIndex={0}>'
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
            return true;
    }
    
    return false;
  } catch (error) {
        return false;
  }
}

function addSEOImprovements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Add metadata for page components
    if (filePath.includes('/page.tsx') && !content.includes('export const metadata')) {
      const pageName = path.basename(filePath, '.tsx');
      \n`;
      
      content = content.replace(
        /import.*from.*['"]/g,
        (match) => match + '\n' + metadata
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
            return true;
    }
    
    return false;
  } catch (error) {
        return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let improvedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      improvedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let fileImproved = false;
      
      if (addErrorBoundary(filePath)) fileImproved = true;
      if (addAccessibilityImprovements(filePath)) fileImproved = true;
      if (addSEOImprovements(filePath)) fileImproved = true;
      
      if (fileImproved) improvedCount++;
    }
  }
  
  return improvedCount;
}

const improvedCount = processDirectory('./app');
