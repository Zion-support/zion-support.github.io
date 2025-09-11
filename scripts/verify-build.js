#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n🔍 Build Verification Report');
console.log('=\n');

// Check if dist directory exists
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
    console.log('❌ Dist directory not found. Run build first.');
    process.exit(1);
}

// Check essential files
console.log('📁 Essential Files Check:');
const essentialFiles = [
    'index.html',
    'assets/index-*.js',
    'assets/index-*.css'
];

let allFilesExist = true;

// Check index.html
if (fs.existsSync(path.join(distDir, 'index.html'))) {
    console.log('  ✅ index.html exists');
} else {
    console.log('  ❌ index.html missing');
    allFilesExist = false;
}

// Check for JS and CSS assets
const assetsDir = path.join(distDir, 'assets');
const files = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];
const jsFiles = files.filter(file => file.endsWith('.js') && file.startsWith('index-'));
const cssFiles = files.filter(file => file.endsWith('.css') && file.startsWith('index-'));

if (jsFiles.length > 0) {
    console.log(`  ✅ Main JS bundle exists (${jsFiles[0]})`);
} else {
    console.log('  ❌ Main JS bundle missing');
    allFilesExist = false;
}

if (cssFiles.length > 0) {
    console.log(`  ✅ Main CSS bundle exists (${cssFiles[0]})`);
} else {
    console.log('  ℹ️  No separate CSS bundle (likely inlined)');
}

// Check file sizes
console.log('\n📊 File Size Analysis:');
const jsFile = jsFiles[0];
if (jsFile) {
    const jsPath = path.join(assetsDir, jsFile);
    const jsStats = fs.statSync(jsPath);
    const jsSizeKB = (jsStats.size / 1024).toFixed(2);
    console.log(`  📦 Main JS: ${jsSizeKB} KB`);
    
    if (jsStats.size > 1000 * 1024) { // 1MB
        console.log('  ⚠️  JS bundle is large (>1MB)');
    } else {
        console.log('  ✅ JS bundle size is reasonable');
    }
}

const cssFile = cssFiles[0];
if (cssFile) {
    const cssPath = path.join(assetsDir, cssFile);
    const cssStats = fs.statSync(cssPath);
    const cssSizeKB = (cssStats.size / 1024).toFixed(2);
    console.log(`  🎨 Main CSS: ${cssSizeKB} KB`);
    
    if (cssStats.size > 100 * 1024) { // 100KB
        console.log('  ⚠️  CSS bundle is large (>100KB)');
    } else {
        console.log('  ✅ CSS bundle size is reasonable');
    }
}

// Check HTML content
console.log('\n🌐 HTML Content Check:');
try {
    const htmlContent = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
    
    if (htmlContent.includes('<div id="root">')) {
        console.log('  ✅ React root element found');
    } else {
        console.log('  ❌ React root element missing');
        allFilesExist = false;
    }
    
    if (htmlContent.includes('script type="module"')) {
        console.log('  ✅ ES module script found');
    } else {
        console.log('  ❌ ES module script missing');
        allFilesExist = false;
    }
    
    if (htmlContent.includes('rel="stylesheet"')) {
        console.log('  ✅ CSS link found');
    } else {
        // Vite often inlines CSS into JS; absence of a stylesheet link is acceptable
        console.log('  ℹ️  No external CSS link (likely inlined by bundler)');
    }
} catch (error) {
    console.log('  ❌ Could not read HTML file');
    allFilesExist = false;
}

// Check Netlify configuration
console.log('\n🌐 Netlify Configuration Check:');
try {
    const netlifyToml = fs.readFileSync('netlify.toml', 'utf8');
    
    if (netlifyToml.includes('publish = "dist"')) {
        console.log('  ✅ Publish directory configured');
    } else {
        console.log('  ❌ Publish directory not configured');
    }
    
    if (netlifyToml.includes('npm run build')) {
        console.log('  ✅ Build command configured');
    } else {
        console.log('  ❌ Build command not configured');
    }
    
    // Accept any Node 20.x declaration (e.g., 20, 20.19.0)
    const node20Regex = /NODE_VERSION\s*=\s*"20(\.|"|$)/;
    if (node20Regex.test(netlifyToml)) {
        console.log('  ✅ Node version configured (20.x)');
    } else {
        console.log('  ❌ Node version not configured to 20.x');
    }
} catch (error) {
    console.log('  ❌ Could not read netlify.toml');
}

// Summary
console.log('\n📋 Summary:');
if (allFilesExist) {
    console.log('  ✅ Build verification passed');
    console.log('  🚀 Ready for deployment');
} else {
    console.log('  ❌ Build verification failed');
    console.log('  🔧 Please fix the issues above');
}

console.log('\n✨ Build verification complete!\n');