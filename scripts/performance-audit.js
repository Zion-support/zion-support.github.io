#!/usr/bin/env node

/**
 * Performance Audit Script
 * Analyzes the built application for performance optimizations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Running performance audit...');

// Check if dist directory exists
const distPath = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distPath)) {
    console.log('❌ No dist/ directory found. Please run build first.');
    process.exit(1);
}

// Analyze bundle sizes
const assetsPath = path.join(distPath, 'assets');
if (fs.existsSync(assetsPath)) {
    const files = fs.readdirSync(assetsPath);
    let totalSize = 0;
    
    console.log('\n📊 Bundle Analysis:');
    console.log('==================');
    
    files.forEach(file => {
        const filePath = path.join(assetsPath, file);
        const stats = fs.statSync(filePath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        totalSize += stats.size;
        
        console.log(`${file}: ${sizeKB} KB`);
    });
    
    console.log(`\nTotal bundle size: ${(totalSize / 1024).toFixed(2)} KB`);
    
    // Performance recommendations
    console.log('\n💡 Performance Recommendations:');
    console.log('===============================');
    
    if (totalSize > 500 * 1024) { // 500KB
        console.log('⚠️  Bundle size is large (>500KB). Consider:');
        console.log('   - Code splitting');
        console.log('   - Tree shaking');
        console.log('   - Lazy loading');
    } else {
        console.log('✅ Bundle size is reasonable');
    }
    
    // Check for large individual files
    files.forEach(file => {
        const filePath = path.join(assetsPath, file);
        const stats = fs.statSync(filePath);
        if (stats.size > 200 * 1024) { // 200KB
            console.log(`⚠️  Large file detected: ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
        }
    });
}

// Check for critical files
console.log('\n🔍 Critical Files Check:');
console.log('========================');

const criticalFiles = ['index.html', 'robots.txt', 'sitemap.xml'];
criticalFiles.forEach(file => {
    const filePath = path.join(distPath, file);
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${file} found`);
    } else {
        console.log(`❌ ${file} missing`);
    }
});

console.log('\n🎉 Performance audit complete!');