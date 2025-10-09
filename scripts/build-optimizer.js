#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting build optimization...');

// 1. Clean previous builds
console.log('🧹 Cleaning previous builds...');
try {
  execSync('rm -rf .next out dist', { stdio: 'inherit' });
  console.log('✅ Cleanup completed');
} catch (error) {
  console.warn('⚠️ Cleanup warning:', error.message);
}

// 2. Type checking
console.log('🔍 Running type checking...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ Type checking passed');
} catch (error) {
  console.error('❌ Type checking failed:', error.message);
  process.exit(1);
}

// 3. Linting
console.log('🔍 Running linting...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed');
} catch (error) {
  console.warn('⚠️ Linting warnings:', error.message);
}

// 4. Build the application
console.log('🏗️ Building application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// 5. Analyze bundle size
console.log('📊 Analyzing bundle size...');
try {
  const buildDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(buildDir)) {
    const analyzeBundle = () => {
      const staticDir = path.join(buildDir, 'static');
      if (fs.existsSync(staticDir)) {
        const getDirSize = (dir) => {
          let size = 0;
          const files = fs.readdirSync(dir);
          files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
              size += getDirSize(filePath);
            } else {
              size += stat.size;
            }
          });
          return size;
        };
        
        const totalSize = getDirSize(staticDir);
        const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
        console.log(`📦 Bundle size: ${sizeInMB} MB`);
        
        if (totalSize > 5 * 1024 * 1024) { // 5MB
          console.warn('⚠️ Bundle size is large. Consider code splitting optimization.');
        } else {
          console.log('✅ Bundle size is optimized');
        }
      }
    };
    
    analyzeBundle();
  }
} catch (error) {
  console.warn('⚠️ Bundle analysis failed:', error.message);
}

// 6. Generate build report
console.log('📋 Generating build report...');
const buildReport = {
  timestamp: new Date().toISOString(),
  buildStatus: 'success',
  nodeVersion: process.version,
  platform: process.platform,
  arch: process.arch,
  environment: process.env.NODE_ENV || 'development'
};

const reportPath = path.join(process.cwd(), 'build-report.json');
fs.writeFileSync(reportPath, JSON.stringify(buildReport, null, 2));
console.log('✅ Build report generated:', reportPath);

// 7. Performance recommendations
console.log('💡 Performance recommendations:');
console.log('  - Enable gzip compression on your server');
console.log('  - Set up CDN for static assets');
console.log('  - Configure proper cache headers');
console.log('  - Monitor Core Web Vitals in production');
console.log('  - Consider implementing service worker for offline support');

console.log('🎉 Build optimization completed successfully!');