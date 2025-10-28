#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Performance Analysis Report');
console.log('==============================\n');

// Check bundle size
const buildDir = path.join(__dirname, '..', '.next');
if (fs.existsSync(buildDir)) {
  console.log('✅ Build directory exists');
  
  // Check for large files
  const staticDir = path.join(buildDir, 'static');
  if (fs.existsSync(staticDir)) {
    console.log('📦 Analyzing static assets...');
    
    const walkDir = (dir) => {
      let totalSize = 0;
      const files = [];
      
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          const subResult = walkDir(fullPath);
          totalSize += subResult.totalSize;
          files.push(...subResult.files);
        } else {
          totalSize += stat.size;
          files.push({
            path: fullPath,
            size: stat.size,
            relativePath: path.relative(buildDir, fullPath)
          });
        }
      });
      
      return { totalSize, files };
    };
    
    const result = walkDir(staticDir);
    const largeFiles = result.files
      .filter(file => file.size > 100000) // > 100KB
      .sort((a, b) => b.size - a.size);
    
    console.log(`📊 Total static assets size: ${(result.totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📁 Total files: ${result.files.length}`);
    
    if (largeFiles.length > 0) {
      console.log('\n⚠️  Large files (>100KB):');
      largeFiles.slice(0, 10).forEach(file => {
        console.log(`   ${file.relativePath}: ${(file.size / 1024).toFixed(2)} KB`);
      });
    }
  }
} else {
  console.log('❌ Build directory not found. Run "npm run build" first.');
}

// Check for performance anti-patterns
console.log('\n🔍 Checking for performance issues...');

const appTsxPath = path.join(__dirname, '..', 'App.tsx');
if (fs.existsSync(appTsxPath)) {
  const content = fs.readFileSync(appTsxPath, 'utf8');
  
  // Check for unused imports
  const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
  const usedImports = content.match(/[A-Z][a-zA-Z0-9]*/g) || [];
  
  console.log(`📝 Total imports: ${importLines.length}`);
  
  // Check for large component files
  const componentsDir = path.join(__dirname, '..', 'app', 'components');
  if (fs.existsSync(componentsDir)) {
    const componentFiles = fs.readdirSync(componentsDir)
      .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'))
      .map(file => {
        const filePath = path.join(componentsDir, file);
        const size = fs.statSync(filePath).size;
        return { file, size };
      })
      .sort((a, b) => b.size - a.size);
    
    console.log('\n📁 Component file sizes:');
    componentFiles.slice(0, 5).forEach(comp => {
      console.log(`   ${comp.file}: ${(comp.size / 1024).toFixed(2)} KB`);
    });
  }
}

console.log('\n✅ Performance analysis complete!');
console.log('\n💡 Recommendations:');
console.log('   - Use dynamic imports for large components');
console.log('   - Implement code splitting for better performance');
console.log('   - Optimize images and assets');
console.log('   - Use React.memo for expensive components');
console.log('   - Consider lazy loading for below-the-fold content');