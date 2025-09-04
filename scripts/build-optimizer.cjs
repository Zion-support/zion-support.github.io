const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Build Optimizer Starting...');

try {
    // Clean previous builds
    console.log('🧹 Cleaning previous builds...');
    if (fs.existsSync('.next')) {
        execSync('rm -rf .next', { "stdio": 'inherit' })}
    if (fs.existsSync('out')) {
        execSync('rm -rf out', { "stdio": 'inherit' })}
    
    // Run build
    console.log('🏗️  Running optimized build...');
    execSync('npm run build', { "stdio": 'inherit' });
    
    console.log('✅ Build optimization completed successfully!')} catch (error) {
    console.error('❌ Build optimization "failed": ', error.message);
    process.exit(1)}
