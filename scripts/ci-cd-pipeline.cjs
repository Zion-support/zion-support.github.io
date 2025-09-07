<<<<<<< HEAD

#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log(' Starting CI/CD Pipeline...')
  "branch"
  "environment"
  "status"
    "status"
        "status"
        "status"
// console.log(`   - "Successful"`)
  console.log(`   - "Failed"`)
    "name"
      const gitStatus = execSync('git status --porcelain', { "encoding"})
    "name"
      const currentBranch = execSync('git branch --show-current', { "encoding"})
    "name"
        execSync('git pull origin main', { "stdio"})
        return { "pullSuccessful": false, "message"}
    "name"
      execSync('npm install', { "stdio"})
    "name"
      execSync('node scripts/comprehensive-automation-suite.cjs', { "stdio"})
    "name"
        execSync('npm audit --audit-level=high', { "stdio"})
        return { "securityAuditPassed": false, "message"}
    "name"
      execSync('npm run build', { "stdio"})
    "name"
        execSync('npm test', { "stdio"})
        return { "testsPassed": false, "message"}
    "name"
      "name"
        execSync('node scripts/smart-deployment-automation.cjs', { "stdio"})
      "name"
        execSync('node scripts/smart-deployment-automation.cjs', { "stdio"})
      "name"
          execSync('pm2 stop all', { "stdio"})
          execSync('pm2 delete all', { "stdio"})
            execSync('pm2 start ecosystem.config.cjs', { "stdio"})
                "script"
                "args"
                "instances"
                "exec_mode"
            execSync('pm2 start ecosystem.config.cjs', { "stdio"})
                "script"
                "args"
                "instances"
                "exec_mode"
            execSync('pm2 start ecosystem.pipeline.cjs', { "stdio"})
      "name"
          const healthCheck = execSync('curl -f "http": //localhost:3000 || echo "Health check failed")
            "encoding"
      "name"
          execSync('pm2 status', { "stdio"})
      "name"
          execSync('pm2 status', { "stdio"})
          return { "monitoringActive": false, "message"}
      "name"
        execSync('node scripts/performance-monitor.cjs', { "stdio"})
      "name"
            "successfulStages"
            "failedStages"
// console.log(`   - Successful "Stages"`)
console.log(`   - Failed "Stages"`)

  console.log('� Application "URL")
=======
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  log(`\n${colors.cyan}🔄 ${description}...${colors.reset}`);
  try {
    const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    log(`${colors.green}✅ ${description} completed successfully${colors.reset}`);
    return { success: true, output };
  } catch (error) {
    log(`${colors.red}❌ ${description} failed:${colors.reset}`, 'red');
    log(error.message, 'red');
    return { success: false, error: error.message };
  }
}

function checkGitStatus() {
  log(`\n${colors.blue}📋 Checking Git status...${colors.reset}`);
  
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      log(`${colors.yellow}⚠️  Uncommitted changes detected:${colors.reset}`);
      console.log(status);
      return false;
    } else {
      log(`${colors.green}✅ Working directory is clean${colors.reset}`);
      return true;
    }
  } catch (error) {
    log(`${colors.red}❌ Error checking Git status:${colors.reset}`, 'red');
    log(error.message, 'red');
    return false;
  }
}

function getCurrentBranch() {
  try {
    return execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  } catch (error) {
    return 'unknown';
  }
}

function main() {
  log(`${colors.bright}${colors.magenta}🚀 Starting CI/CD Pipeline${colors.reset}`);
  log(`${colors.blue}Branch: ${getCurrentBranch()}${colors.reset}`);
  
  const startTime = Date.now();
  const results = {
    gitStatus: false,
    install: false,
    build: false,
    test: false,
    lint: false,
    typeCheck: false
  };
  
  // Step 1: Check Git status
  results.gitStatus = checkGitStatus();
  
  // Step 2: Install dependencies
  const installResult = runCommand('npm ci', 'Installing dependencies');
  results.install = installResult.success;
  
  if (!results.install) {
    log(`${colors.red}❌ Pipeline failed at dependency installation${colors.reset}`, 'red');
    process.exit(1);
  }
  
  // Step 3: Build
  const buildResult = runCommand('npm run build', 'Building application');
  results.build = buildResult.success;
  
  if (!results.build) {
    log(`${colors.red}❌ Pipeline failed at build step${colors.reset}`, 'red');
    process.exit(1);
  }
  
  // Step 4: Run tests
  const testResult = runCommand('npm run test:smoke', 'Running smoke tests');
  results.test = testResult.success;
  
  // Step 5: Type checking
  const typeCheckResult = runCommand('npm run type-check', 'Type checking');
  results.typeCheck = typeCheckResult.success;
  
  // Step 6: Linting (optional - may have issues)
  const lintResult = runCommand('npm run lint:fix', 'Linting and fixing');
  results.lint = lintResult.success;
  
  // Summary
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  log(`\n${colors.bright}${colors.blue}📊 Pipeline Summary${colors.reset}`);
  log(`${colors.blue}Duration: ${duration}s${colors.reset}`);
  log(`${colors.blue}Git Status: ${results.gitStatus ? '✅' : '❌'}${colors.reset}`);
  log(`${colors.blue}Install: ${results.install ? '✅' : '❌'}${colors.reset}`);
  log(`${colors.blue}Build: ${results.build ? '✅' : '❌'}${colors.reset}`);
  log(`${colors.blue}Tests: ${results.test ? '✅' : '❌'}${colors.reset}`);
  log(`${colors.blue}Type Check: ${results.typeCheck ? '✅' : '❌'}${colors.reset}`);
  log(`${colors.blue}Lint: ${results.lint ? '✅' : '❌'}${colors.reset}`);
  
  const criticalSteps = [results.install, results.build, results.test];
  const allCritical = criticalSteps.every(step => step);
  
  if (allCritical) {
    log(`\n${colors.green}🎉 Pipeline completed successfully!${colors.reset}`);
    process.exit(0);
  } else {
    log(`\n${colors.red}💥 Pipeline failed on critical steps${colors.reset}`, 'red');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, runCommand, checkGitStatus };
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
