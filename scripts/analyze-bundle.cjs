
const { execSync } = require('child_process');
const fs = require('fs');

async function analyzeBundle() {
  try {
    console.log('Analyzing bundle size...');
    
    // Run build with analysis
    execSync('npm run build:analyze', { stdio: 'inherit' });
    
    // Check for large dependencies
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    console.log('\nDependency Analysis:');
    console.log('Total dependencies:', Object.keys(dependencies).length);
    
    // Check for potential optimizations
    const largeDeps = ['react', 'next', 'typescript', 'tailwindcss'];
    const foundLargeDeps = largeDeps.filter(dep => dependencies[dep]);
    
    if (foundLargeDeps.length > 0) {
      console.log('Large dependencies found:', foundLargeDeps.join(', '));
    }
    
    console.log('Bundle analysis completed');
  } catch (error) {
    console.error('Bundle analysis failed:', error.message);
  }
}

analyzeBundle();
