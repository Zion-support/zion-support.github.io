#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n🚀 Build Optimization Report');
console.log('==================================================\n');

// Check if dist directory exists
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
    console.log('❌ Dist directory not found. Run build first.');
    process.exit(1);
}

// Analyze bundle sizes
console.log('📊 Bundle Size Analysis');
console.log('==================================================\n');

const files = fs.readdirSync(distDir);
const jsFiles = files.filter(file => file.endsWith('.js'));
const cssFiles = files.filter(file => file.endsWith('.css'));

let totalSize = 0;

console.log('📁 File Sizes:');
jsFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;
    console.log(`  ${file}: ${sizeKB} KB`);
});

cssFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;
    console.log(`  ${file}: ${sizeKB} KB`);
});

console.log(`\n📈 Total Bundle Size: ${(totalSize / 1024).toFixed(2)} KB (${(totalSize / (1024 * 1024)).toFixed(2)} MB)`);

// Optimization recommendations
console.log('\n💡 Optimization Recommendations:');
if (totalSize > 500 * 1024) { // 500KB
    console.log('  ⚠️  Bundle is large. Consider:');
    console.log('     - Splitting large chunks');
    console.log('     - Lazy loading components');
    console.log('     - Optimizing images and assets');
} else {
    console.log('  ✅ Bundle size is good');
}

// Check dependencies
console.log('\n🔍 Dependency Analysis:');
try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const deps = packageJson.dependencies || {};
    
    const importantDeps = ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query', 'framer-motion', 'lucide-react'];
    importantDeps.forEach(dep => {
        if (deps[dep]) {
            console.log(`  ✓ ${dep}: ${deps[dep]}`);
        }
    });
} catch (error) {
    console.log('  ⚠️  Could not analyze dependencies');
}

// Build configuration check
console.log('\n🔧 Build Configuration Check');
console.log('==================================================');
try {
    const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
    
    const checks = [
        { name: 'Minification enabled', check: viteConfig.includes('minify:') },
        { name: 'Source maps disabled in production', check: viteConfig.includes('sourcemap: false') },
        { name: 'CSS code splitting enabled', check: viteConfig.includes('cssCodeSplit: true') },
        { name: 'Manual chunk splitting configured', check: viteConfig.includes('manualChunks') },
        { name: 'Bundle analyzer configured', check: viteConfig.includes('visualizer') }
    ];
    
    checks.forEach(({ name, check }) => {
        console.log(`  ${check ? '✓' : '⚠️ '} ${name}`);
    });
} catch (error) {
    console.log('  ⚠️  Could not analyze Vite configuration');
}

console.log('\n📋 Summary:');
if (totalSize < 500 * 1024) {
    console.log('  ✅ Bundle size is good');
} else {
    console.log('  ⚠️  Bundle could be optimized');
}

console.log('\n🎯 Next Steps:');
console.log('  1. Run npm run build:analyze for detailed bundle analysis');
console.log('  2. Consider implementing code splitting for large components');
console.log('  3. Use dynamic imports for route-based code splitting');
console.log('  4. Optimize images and assets');
console.log('  5. Remove unused dependencies');

console.log('\n✨ Build optimization complete!\n');