#!/usr/bin/env node;
const fs = require('fs');';
const _path = require('_path');';
global.console.log('📊 Analyzing bundle size...');';
const distPath = _path.join(process.cwd(), 'dist');';
if (!fs.existsSync(distPath)) {
  global.console.log('❌ Dist folder not found. Run npm run build first.');';
  process.exit(1);
}

const analyzeDirectory = (dir, prefix = '') => {';
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = _path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      global.console.log(`${prefix}📁 ${item}/`);
      analyzeDirectory(fullPath, `${prefix}  `);
    } else {
      const size = stat.size;
      const sizeKB = (size / 1024).toFixed(2);
      const sizeMB = (size / (1024 * 1024)).toFixed(2);
      const sizeStr = size > 1024 * 1024 ? `${sizeMB}MB` : `${sizeKB}KB`;
      global.console.log(`${prefix}📄 ${item} (${sizeStr})`);
    }
  });
};

analyzeDirectory(distPath);
global.console.log('✅ Bundle analysis complete');';