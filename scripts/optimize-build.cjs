#!/usr/bin/env node

/**
 * Build Optimization Script
 * Analyzes and optimizes the Next.js build for better performance
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build optimization...');

// Function to analyze bundle size
function analyzeBundleSize() {
    const outDir = path.join(__dirname, '..', 'out');
    const nextDir = path.join(outDir, '_next', 'static', 'chunks');
    
    if (!fs.existsSync(nextDir)) {
        console.log('❌ Build output not found. Run "npm run build" first.');
        return;
    }
    
    console.log('📊 Analyzing bundle sizes...');
    
    const files = fs.readdirSync(nextDir);
    let totalSize = 0;
    const fileSizes = [];
    
    files.forEach(file => {
        const filePath = path.join(nextDir, file);
        const stats = fs.statSync(filePath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        totalSize += stats.size;
        fileSizes.push({ file, size: sizeKB, sizeBytes: stats.size });
    });
    
    // Sort by size
    fileSizes.sort((a, b) => b.sizeBytes - a.sizeBytes);
    
    console.log('\n📋 Bundle Analysis:');
    console.log('=' .repeat(50));
    
    fileSizes.forEach(({ file, size }) => {
        console.log(`${file.padEnd(30)} ${size.padStart(8)} KB`);
    });
    
    console.log('=' .repeat(50));
    console.log(`Total bundle size: ${(totalSize / 1024).toFixed(2)} KB`);
    
    // Performance recommendations
    console.log('\n💡 Performance Recommendations:');
    
    if (totalSize > 500 * 1024) { // 500KB
        console.log('⚠️  Bundle size is large (>500KB). Consider:');
        console.log('   - Code splitting');
        console.log('   - Lazy loading components');
        console.log('   - Removing unused dependencies');
    }
    
    const largeFiles = fileSizes.filter(f => f.sizeBytes > 100 * 1024); // 100KB
    if (largeFiles.length > 0) {
        console.log('⚠️  Large files detected:');
        largeFiles.forEach(({ file, size }) => {
            console.log(`   - ${file}: ${size} KB`);
        });
    }
    
    console.log('\n✅ Bundle analysis complete!');
}

// Function to optimize images
function optimizeImages() {
    const publicDir = path.join(__dirname, '..', 'public');
    const imagesDir = path.join(publicDir, 'images');
    
    if (!fs.existsSync(imagesDir)) {
        console.log('📁 No images directory found in public folder.');
        return;
    }
    
    console.log('🖼️  Checking for unoptimized images...');
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const files = fs.readdirSync(imagesDir, { recursive: true });
    
    const unoptimizedImages = files.filter(file => {
        if (typeof file === 'string') {
            return imageExtensions.some(ext => file.toLowerCase().endsWith(ext));
        }
        return false;
    });
    
    if (unoptimizedImages.length > 0) {
        console.log(`📋 Found ${unoptimizedImages.length} images:`);
        unoptimizedImages.slice(0, 10).forEach(file => {
            console.log(`   - ${file}`);
        });
        
        if (unoptimizedImages.length > 10) {
            console.log(`   ... and ${unoptimizedImages.length - 10} more`);
        }
        
        console.log('\n💡 Consider optimizing images:');
        console.log('   - Convert to WebP format');
        console.log('   - Compress JPEG/PNG files');
        console.log('   - Use Next.js Image component');
    } else {
        console.log('✅ No images found in public/images directory.');
    }
}

// Function to check for unused dependencies
function checkUnusedDeps() {
    console.log('📦 Checking for potential unused dependencies...');
    
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    console.log(`📋 Total dependencies: ${Object.keys(deps).length}`);
    
    // Check for common unused packages
    const potentiallyUnused = [
        'react-scripts',
        'webpack',
        'babel-loader',
        'css-loader',
        'style-loader'
    ];
    
    const foundUnused = potentiallyUnused.filter(dep => deps[dep]);
    
    if (foundUnused.length > 0) {
        console.log('⚠️  Potentially unused dependencies found:');
        foundUnused.forEach(dep => {
            console.log(`   - ${dep}: ${deps[dep]}`);
        });
        console.log('\n💡 Consider removing if not needed:');
        console.log('   npm uninstall <package-name>');
    } else {
        console.log('✅ No obviously unused dependencies found.');
    }
}

// Main execution
function main() {
    console.log('🔍 Build Optimization Analysis\n');
    
    try {
        analyzeBundleSize();
        console.log('\n' + '='.repeat(50) + '\n');
        
        optimizeImages();
        console.log('\n' + '='.repeat(50) + '\n');
        
        checkUnusedDeps();
        
        console.log('\n🎉 Optimization analysis complete!');
        console.log('\n📝 Next steps:');
        console.log('   1. Review bundle analysis results');
        console.log('   2. Optimize large files');
        console.log('   3. Remove unused dependencies');
        console.log('   4. Implement lazy loading where appropriate');
        console.log('   5. Run "npm run build" to see improvements');
        
    } catch (error) {
        console.error('❌ Error during optimization analysis:', error.message);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { analyzeBundleSize, optimizeImages, checkUnusedDeps };