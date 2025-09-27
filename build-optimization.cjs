#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting build optimization...');

// Function to run build
function runBuild() {
    try {
        console.log('📋 Running build...');
        execSync('npm run build', { stdio: 'inherit' });
        console.log('✅ Build completed successfully');
        return true;
    } catch (error) {
        console.log('❌ Build failed');
        return false;
    }
}

// Function to analyze bundle
function analyzeBundle() {
    try {
        console.log('📋 Analyzing bundle...');
        execSync('npx webpack-bundle-analyzer dist/', { stdio: 'inherit' });
        return true;
    } catch (error) {
        console.log('⚠️  Bundle analysis not available');
        return false;
    }
}

// Main function
async function main() {
    console.log('🚀 Starting build optimization process...');
    
    const buildResult = runBuild();
    
    if (buildResult) {
        console.log('\n✅ Build completed successfully!');
        analyzeBundle();
    } else {
        console.log('\n❌ Build failed. Please check the errors above.');
    }
}

main().catch(console.error);
