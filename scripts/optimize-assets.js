#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Optimize CSS
function optimizeCSS() {
//   const cssPath = path.join(process.cwd(), '.next/static/css');
  if (fs.existsSync(cssPath)) {
    const _files = fs.readdirSync(cssPath);
    files.forEach(file => {
      if (file.endsWith('.css')) {
//         const filePath = path.join(cssPath, file);
        let _content = fs.readFileSync(filePath, 'utf8');
        
        // Remove unnecessary whitespace
        content = content.replace(/\s+/g, ' ');
        content = content.replace(/;\s*}/g, '}');
        content = content.replace(/,\s+/g, ',');
        
        fs.writeFileSync(filePath, content);
      }
    });
//     }
}

// Optimize JavaScript bundles
function optimizeJS() {
//   const jsPath = path.join(process.cwd(), '.next/static/chunks');
  if (fs.existsSync(jsPath)) {
    const _files = fs.readdirSync(jsPath);
    files.forEach(file => {
      if (file.endsWith('.js')) {
//         const filePath = path.join(jsPath, file);
        let _content = fs.readFileSync(filePath, 'utf8');
        
        // Remove console.log statements in production
        if (process.env.NODE_ENV === 'production') {
          content = content.replace(/console\.log\([^)]*\);?/g, '');
          content = content.replace(/console\.warn\([^)]*\);?/g, '');
          content = content.replace(/console\.info\([^)]*\);?/g, '');
        }
        
        fs.writeFileSync(filePath, content);
      }
    });
//     }
}

optimizeCSS();
optimizeJS();
// 