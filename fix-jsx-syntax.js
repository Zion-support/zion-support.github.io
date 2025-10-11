#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JSX syntax issues in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax issues
    
    // 1. Fix unclosed JSX tags - add closing tags for common elements
    const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'];
    
    // Fix self-closing tags that aren't properly closed
    selfClosingTags.forEach(tag => {
      const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
      content = content.replace(regex, (match, attributes) => {
        if (!attributes.includes('/>')) {
          modified = true;
          return `<${tag}${attributes} />`;
        }
        return match;
      });
    });
    
    // 2. Fix missing closing tags for common elements
    const commonTags = ['div', 'section', 'main', 'article', 'header', 'footer', 'nav', 'aside', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'button', 'a', 'ul', 'ol', 'li'];
    
    commonTags.forEach(tag => {
      // Find unclosed opening tags
      const openTagRegex = new RegExp(`<${tag}([^>]*)>`, 'g');
      const closeTagRegex = new RegExp(`</${tag}>`, 'g');
      
      const openMatches = [...content.matchAll(openTagRegex)];
      const closeMatches = [...content.matchAll(closeTagRegex)];
      
      if (openMatches.length > closeMatches.length) {
        // Add missing closing tags at the end of the file or before the next major tag
        const missingCount = openMatches.length - closeMatches.length;
        for (let i = 0; i < missingCount; i++) {
          content += `</${tag}>`;
          modified = true;
        }
      }
    });
    
    // 3. Fix JSX fragments that are not properly closed
    content = content.replace(/<>/g, '<React.Fragment>');
    content = content.replace(/<\/>/g, '</React.Fragment>');
    
    // 4. Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]*?)\s*\}/g, (match, expr) => {
      // Fix common issues in JSX expressions
      let fixedExpr = expr.trim();
      
      // Fix missing quotes around strings
      if (fixedExpr && !fixedExpr.startsWith('"') && !fixedExpr.startsWith("'") && !fixedExpr.startsWith('`') && 
          !fixedExpr.includes('(') && !fixedExpr.includes('[') && !fixedExpr.includes('{') && 
          !fixedExpr.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
        fixedExpr = `"${fixedExpr}"`;
        modified = true;
      }
      
      return `{${fixedExpr}}`;
    });
    
    // 5. Fix missing closing parentheses in JSX
    content = content.replace(/\(\s*$/gm, '()');
    
    // 6. Fix malformed component props
    content = content.replace(/<(\w+)([^>]*?)\s+([^>]*?)>/g, (match, tagName, props1, props2) => {
      if (props2 && !props2.includes('=') && !props2.includes('>')) {
        // This looks like a malformed prop, try to fix it
        const cleanProps = props1 + ' ' + props2.replace(/\s+/g, ' ').trim();
        return `<${tagName}${cleanProps}>`;
      }
      return match;
    });
    
    // 7. Fix missing semicolons in JSX expressions
    content = content.replace(/;\s*$/gm, ';');
    
    // 8. Fix unclosed strings in JSX
    content = content.replace(/"([^"]*?)\s*$/gm, (match, str) => {
      if (str && !str.endsWith('"')) {
        return `"${str}"`;
      }
      return match;
    });
    
    // 9. Fix missing closing braces in object literals
    content = content.replace(/\{\s*([^}]*?)\s*$/gm, (match, content) => {
      if (content && !content.includes('}')) {
        return `{${content}}`;
      }
      return match;
    });
    
    // 10. Fix malformed arrow functions in JSX
    content = content.replace(/=>\s*$/gm, '=> {}');
    
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
console.log('Starting JSX syntax fixes...');

const workspaceDir = process.cwd();
const tsxFiles = findTSXFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TypeScript/JSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXSyntax(file)) {
    fixedCount++;
    console.log(`Fixed syntax in: ${file}`);
  }
}

console.log(`Fixed syntax in ${fixedCount} files`);

// Also try to fix some specific problematic files
const problematicFiles = [
  '/workspace/EnhancedFooter.tsx',
  '/workspace/app/about/page.tsx',
  '/workspace/app/ai-3d-generation/page.tsx',
  '/workspace/app/ai-accounting-assistant/page.tsx',
  '/workspace/app/ai-analytics/page.tsx',
  '/workspace/app/ai-api-management/page.tsx'
];

console.log('Fixing specific problematic files...');

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // More aggressive fixes for these specific files
      
      // Fix missing closing tags by adding them at the end
      const openDivs = (content.match(/<div/g) || []).length;
      const closeDivs = (content.match(/<\/div>/g) || []).length;
      if (openDivs > closeDivs) {
        for (let i = 0; i < openDivs - closeDivs; i++) {
          content += '\n        </div>';
        }
      }
      
      const openSections = (content.match(/<section/g) || []).length;
      const closeSections = (content.match(/<\/section>/g) || []).length;
      if (openSections > closeSections) {
        for (let i = 0; i < openSections - closeSections; i++) {
          content += '\n      </section>';
        }
      }
      
      const openMains = (content.match(/<main/g) || []).length;
      const closeMains = (content.match(/<\/main>/g) || []).length;
      if (openMains > closeMains) {
        for (let i = 0; i < openMains - closeMains; i++) {
          content += '\n    </main>';
        }
      }
      
      // Fix malformed JSX by ensuring proper structure
      content = content.replace(/<(\w+)([^>]*?)\s*$/gm, (match, tagName, attributes) => {
        if (attributes && !attributes.includes('/>') && !attributes.includes('>')) {
          return `<${tagName}${attributes}>`;
        }
        return match;
      });
      
      // Ensure the file ends with proper closing tags
      if (!content.trim().endsWith('>')) {
        content += '\n  </div>\n</div>';
      }
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed specific issues in: ${file}`);
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  }
}

console.log('JSX syntax fixes completed!');