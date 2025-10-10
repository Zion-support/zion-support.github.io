#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has JSX syntax issues
    if (!content.includes('  </') && !content.includes('  <')) {
      return false;
    }
    
    console.log(`Fixing JSX syntax in: ${filePath}`);
    
    // Fix incomplete JSX tags
    let fixed = content
      // Fix incomplete button tags
      .replace(/<button([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<button$1>$2</button>')
      // Fix incomplete div tags
      .replace(/<div([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<div$1>$2</div>')
      // Fix incomplete span tags
      .replace(/<span([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<span$1>$2</span>')
      // Fix incomplete p tags
      .replace(/<p([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<p$1>$2</p>')
      // Fix incomplete h1 tags
      .replace(/<h1([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<h1$1>$2</h1>')
      // Fix incomplete h2 tags
      .replace(/<h2([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<h2$1>$2</h2>')
      // Fix incomplete h3 tags
      .replace(/<h3([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<h3$1>$2</h3>')
      // Fix incomplete section tags
      .replace(/<section([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<section$1>$2</section>')
      // Fix incomplete article tags
      .replace(/<article([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<article$1>$2</article>')
      // Fix incomplete header tags
      .replace(/<header([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<header$1>$2</header>')
      // Fix incomplete footer tags
      .replace(/<footer([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<footer$1>$2</footer>')
      // Fix incomplete nav tags
      .replace(/<nav([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<nav$1>$2</nav>')
      // Fix incomplete main tags
      .replace(/<main([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<main$1>$2</main>')
      // Fix incomplete aside tags
      .replace(/<aside([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<aside$1>$2</aside>')
      // Fix incomplete ul tags
      .replace(/<ul([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<ul$1>$2</ul>')
      // Fix incomplete ol tags
      .replace(/<ol([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<ol$1>$2</ol>')
      // Fix incomplete li tags
      .replace(/<li([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<li$1>$2</li>')
      // Fix incomplete a tags
      .replace(/<a([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<a$1>$2</a>')
      // Fix incomplete img tags (self-closing)
      .replace(/<img([^>]*)\s*\/\s*$/gm, '<img$1 />')
      // Fix incomplete input tags (self-closing)
      .replace(/<input([^>]*)\s*\/\s*$/gm, '<input$1 />')
      // Fix incomplete br tags (self-closing)
      .replace(/<br([^>]*)\s*\/\s*$/gm, '<br$1 />')
      // Fix incomplete hr tags (self-closing)
      .replace(/<hr([^>]*)\s*\/\s*$/gm, '<hr$1 />')
      // Fix incomplete meta tags (self-closing)
      .replace(/<meta([^>]*)\s*\/\s*$/gm, '<meta$1 />')
      // Fix incomplete link tags (self-closing)
      .replace(/<link([^>]*)\s*\/\s*$/gm, '<link$1 />')
      // Fix incomplete area tags (self-closing)
      .replace(/<area([^>]*)\s*\/\s*$/gm, '<area$1 />')
      // Fix incomplete base tags (self-closing)
      .replace(/<base([^>]*)\s*\/\s*$/gm, '<base$1 />')
      // Fix incomplete col tags (self-closing)
      .replace(/<col([^>]*)\s*\/\s*$/gm, '<col$1 />')
      // Fix incomplete embed tags (self-closing)
      .replace(/<embed([^>]*)\s*\/\s*$/gm, '<embed$1 />')
      // Fix incomplete param tags (self-closing)
      .replace(/<param([^>]*)\s*\/\s*$/gm, '<param$1 />')
      // Fix incomplete source tags (self-closing)
      .replace(/<source([^>]*)\s*\/\s*$/gm, '<source$1 />')
      // Fix incomplete track tags (self-closing)
      .replace(/<track([^>]*)\s*\/\s*$/gm, '<track$1 />')
      // Fix incomplete wbr tags (self-closing)
      .replace(/<wbr([^>]*)\s*\/\s*$/gm, '<wbr$1 />');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixed, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithJSXIssues(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
console.log(`Scanning for JSX syntax issues in: ${workspaceDir}`);

const files = findFilesWithJSXIssues(workspaceDir);
let fixedCount = 0;
let totalIssues = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('  </') || content.includes('  <')) {
      totalIssues++;
      if (fixJSXSyntax(file)) {
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalIssues} files with JSX syntax issues.`);