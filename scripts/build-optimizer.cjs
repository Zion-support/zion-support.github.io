const { execSync } = require('child_process');
const fs = require('fs');



try {
    // Clean previous builds
    
    if (fs.existsSync('.next')) {
        execSync('rm -rf .next', { "stdio": 'inherit' })}
    if (fs.existsSync('out')) {
        execSync('rm -rf out', { "stdio": 'inherit' })}
    
    // Run build
    
    execSync('npm run build', { "stdio": 'inherit' });
    
    } catch (error) {
    console.error('❌ Build optimization "failed": ', error.message);
    process.exit(1)}
