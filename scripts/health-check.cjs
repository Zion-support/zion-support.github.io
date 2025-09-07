<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node

const { execSync } = require('child_process');
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Comprehensive Health Check Starting...');

const checks = [
  {
    name: 'Package.json exists',
    check: () => fs.existsSync('package.json')
  },
  {
    name: 'Node modules installed',
    check: () => fs.existsSync('node_modules')
  },
  {
    name: 'Next.js config exists',
    check: () => fs.existsSync('next.config.ts') || fs.existsSync('next.config.js')
  },
  {
    name: 'TypeScript config exists',
    check: () => fs.existsSync('tsconfig.json')
  },
  {
    name: 'ESLint config exists',
    check: () => fs.existsSync('eslint.config.js')
  },
  {
    name: 'Jest config exists',
    check: () => fs.existsSync('jest.config.smoke.cjs')
  },
  {
    name: 'App component exists',
    check: () => fs.existsSync('App.tsx')
  },
  {
    name: 'Components directory exists',
    check: () => fs.existsSync('components') || fs.existsSync('src/components')
  }
];

let passed = 0;
let failed = 0;

checks.forEach(check => {
  try {
    if (check.check()) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${check.name} - Error: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Health Check Results: ${passed} passed, ${failed} failed`);

<<<<<<< HEAD
function checkBuildOutput() {
  log(`\n${colors.blue}🏗️  Checking build output...${colors.reset}`);
  
  const buildDir = 'dist';
  if (!fs.existsSync(buildDir)) {
    log(`${colors.yellow}⚠️  Build directory not found. Running build...${colors.reset}`);
    try {
      execSync('npm run build', { stdio: 'pipe' });
      log(`${colors.green}✅ Build completed${colors.reset}`);
    } catch (error) {
      log(`${colors.red}❌ Build failed: ${error.message}${colors.reset}`, 'red');
      return false;
    }
  }
  
  // Check for essential build files
  const essentialFiles = [
    'index.html',
    'assets/index.js',
    'assets/index.css'
  ];
  
  let allFilesExist = true;
  essentialFiles.forEach(file => {
    const filePath = path.join(buildDir, file);
    if (!checkFileExists(filePath, `Build file`)) {
      allFilesExist = false;
    }
  });
  
  // Check build directory size
  checkFileSize(buildDir, 50); // 50MB limit
  
  return allFilesExist;
}

function checkDependencies() {
  log(`\n${colors.blue}📚 Checking dependencies...${colors.reset}`);
  
  try {
    // Check if node_modules exists
    if (!fs.existsSync('node_modules')) {
      log(`${colors.yellow}⚠️  node_modules not found. Installing dependencies...${colors.reset}`);
      execSync('npm install', { stdio: 'pipe' });
      log(`${colors.green}✅ Dependencies installed${colors.reset}`);
    }
    
    // Check for critical dependencies
    const criticalDeps = ['react', 'react-dom', 'vite'];
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    const missingDeps = criticalDeps.filter(dep => !allDeps[dep]);
    
    if (missingDeps.length > 0) {
      log(`${colors.red}❌ Missing critical dependencies: ${missingDeps.join(', ')}${colors.reset}`, 'red');
      return false;
    }
    
    log(`${colors.green}✅ Critical dependencies found${colors.reset}`);
    return true;
  } catch (error) {
    log(`${colors.red}❌ Error checking dependencies: ${error.message}${colors.reset}`, 'red');
    return false;
  }
}

function checkGitStatus() {
  log(`\n${colors.blue}🔍 Checking Git status...${colors.reset}`);
  
  try {
    // Check if we're in a Git repository
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'pipe' });
    log(`${colors.green}✅ Git repository detected${colors.reset}`);
    
    // Check for uncommitted changes
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      log(`${colors.yellow}⚠️  Uncommitted changes detected${colors.reset}`);
      console.log(status);
    } else {
      log(`${colors.green}✅ Working directory is clean${colors.reset}`);
    }
    
    // Check current branch
    const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    log(`${colors.blue}Current branch: ${branch}${colors.reset}`);
    
    return true;
  } catch (error) {
    log(`${colors.red}❌ Error checking Git status: ${error.message}${colors.reset}`, 'red');
    return false;
  }
}

function checkEnvironmentVariables() {
  log(`\n${colors.blue}🌍 Checking environment variables...${colors.reset}`);
  
  const requiredEnvVars = ['NODE_ENV'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    log(`${colors.yellow}⚠️  Missing environment variables: ${missingVars.join(', ')}${colors.reset}`);
    log(`${colors.blue}Setting NODE_ENV to production...${colors.reset}`);
    process.env.NODE_ENV = 'production';
  }
  
  log(`${colors.green}✅ Environment variables configured${colors.reset}`);
  return true;
}

function runHealthChecks() {
  log(`\n${colors.blue}🧪 Running health checks...${colors.reset}`);
  
  const checks = [
    { name: 'Build', fn: () => runCommand('npm run build', 'Building application') },
    { name: 'Smoke Tests', fn: () => runCommand('npm run test:smoke', 'Running smoke tests') },
    { name: 'Type Check', fn: () => runCommand('npm run type-check', 'Type checking') }
  ];
  
  const results = {};
  
  checks.forEach(check => {
    log(`\n${colors.cyan}🔄 Running ${check.name}...${colors.reset}`);
    const result = check.fn();
    results[check.name] = result.success;
  });
  
  return results;
}

function runCommand(command, description) {
  try {
    const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    return { success: true, output };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function main() {
  log(`${colors.bright}${colors.magenta}🏥 Starting Health Check${colors.reset}`);
  
  const startTime = Date.now();
  const results = {
    packageJson: false,
    dependencies: false,
    buildOutput: false,
    gitStatus: false,
    environment: false,
    healthChecks: {}
  };
  
  // Run all checks
  results.packageJson = checkPackageJson();
  results.dependencies = checkDependencies();
  results.buildOutput = checkBuildOutput();
  results.gitStatus = checkGitStatus();
  results.environment = checkEnvironmentVariables();
  results.healthChecks = runHealthChecks();
  
  // Summary
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  log(`\n${colors.bright}${colors.blue}📊 Health Check Summary${colors.reset}`);
  log(`${colors.blue}Duration: ${duration}s${colors.reset}`);
  log(`${colors.blue}Package.json: ${results.packageJson ? '✅' : '❌'}${colors.reset}`);
  log(`${colors.blue}Dependencies: ${results.dependencies ? '✅' : '❌'}${colors.reset}`);
  log(`${colors.blue}Build Output: ${results.buildOutput ? '✅' : '❌'}${colors.reset}`);
  log(`${colors.blue}Git Status: ${results.gitStatus ? '✅' : '❌'}${colors.reset}`);
  log(`${colors.blue}Environment: ${results.environment ? '✅' : '❌'}${colors.reset}`);
  
  // Health check results
  Object.entries(results.healthChecks).forEach(([name, success]) => {
    log(`${colors.blue}${name}: ${success ? '✅' : '❌'}${colors.reset}`);
  });
  
  const criticalChecks = [results.packageJson, results.dependencies, results.buildOutput];
  const allCritical = criticalChecks.every(check => check);
  
  if (allCritical) {
    log(`\n${colors.green}🎉 Health check passed! System is healthy.${colors.reset}`);
    process.exit(0);
  } else {
    log(`\n${colors.red}💥 Health check failed! System needs attention.${colors.reset}`, 'red');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkPackageJson, checkDependencies, checkBuildOutput };
=======
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log('� Running Health Check...')
  "status"
      "status"
      "status"
    execSync('npm run build', { "stdio"})
    execSync('npm run lint', { "stdio"})
    execSync('npm run type-check', { "stdio"})
<<<<<<< HEAD
console.log('� Overall "status")
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======
if (failed === 0) {
  console.log('🎉 All health checks passed!');
  process.exit(0);
} else {
  console.log('⚠️  Some health checks failed. Please review the issues.');
  process.exit(1);
}
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
