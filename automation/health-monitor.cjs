#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏥 Starting health monitoring...');

// Function to check file health
function checkFileHealth() {
  const issues = [];
  
  // Check for syntax errors in key files
  const keyFiles = [
    'pages/index.tsx',
    'pages/about.tsx',
    'pages/contact.tsx',
    'pages/services.tsx',
    'pages/products.tsx',
    'pages/solutions.tsx',
    'components/Layout.tsx',
    'components/Header.tsx',
    'components/Footer.tsx'
  ];

  keyFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for common syntax issues
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          issues.push(`❌ Merge conflict markers found in ${file}`);
        }
        
        if (content.includes('SyntaxError') || content.includes('Unexpected token')) {
          issues.push(`❌ Syntax error found in ${file}`);
        }
        
        if (content.trim() === '' || content.length < 100) {
          issues.push(`⚠️  File appears empty or too short: ${file}`);
        }
        
        // Check for proper React component structure
        if (file.endsWith('.tsx') && !content.includes('export default')) {
          issues.push(`⚠️  Missing default export in ${file}`);
        }
        
      } catch (error) {
        issues.push(`❌ Error reading ${file}: ${error.message}`);
      }
    } else {
      issues.push(`❌ Missing file: ${file}`);
    }
  });

  return issues;
}

// Function to check build health
function checkBuildHealth() {
  try {
    console.log('🔨 Checking build health...');
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Build successful');
    return true;
  } catch (error) {
    console.log('❌ Build failed');
    console.log('Error:', error.message);
    return false;
  }
}

// Function to check dependency health
function checkDependencyHealth() {
  try {
    console.log('📦 Checking dependency health...');
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    console.log(`✅ Found ${dependencies.length} dependencies`);
    console.log(`✅ Found ${devDependencies.length} dev dependencies`);
    
    // Check for critical dependencies
    const criticalDeps = ['next', 'react', 'react-dom'];
    const missingDeps = criticalDeps.filter(dep => !dependencies.includes(dep));
    
    if (missingDeps.length > 0) {
      console.log(`❌ Missing critical dependencies: ${missingDeps.join(', ')}`);
      return false;
    }
    
    return true;
  } catch (error) {
    console.log('❌ Error checking dependencies:', error.message);
    return false;
  }
}

// Function to check file system health
function checkFileSystemHealth() {
  const issues = [];
  
  // Check for required directories
  const requiredDirs = ['pages', 'components', 'public', 'styles'];
  requiredDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      issues.push(`❌ Missing required directory: ${dir}`);
    }
  });
  
  // Check for required files
  const requiredFiles = ['package.json', 'next.config.js', 'tsconfig.json'];
  requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      issues.push(`❌ Missing required file: ${file}`);
    }
  });
  
  return issues;
}

// Function to generate health report
function generateHealthReport() {
  console.log('\n📊 Health Report');
  console.log('================');
  
  const fileIssues = checkFileHealth();
  const buildHealth = checkBuildHealth();
  const dependencyHealth = checkDependencyHealth();
  const fsIssues = checkFileSystemHealth();
  
  const allIssues = [...fileIssues, ...fsIssues];
  
  if (allIssues.length > 0) {
    console.log('\n🚨 Issues Found:');
    allIssues.forEach(issue => console.log(`  ${issue}`));
  } else {
    console.log('\n✅ No issues found!');
  }
  
  console.log(`\n📈 Health Score: ${buildHealth && dependencyHealth && allIssues.length === 0 ? '100%' : 'Needs Attention'}`);
  
  if (buildHealth && dependencyHealth && allIssues.length === 0) {
    console.log('🎉 Application is healthy and ready for production!');
  } else {
    console.log('🔧 Please address the issues above before deploying.');
  }
}

// Main function
function main() {
  console.log('🏥 Starting comprehensive health check...');
  generateHealthReport();
}

// Run health check
main();