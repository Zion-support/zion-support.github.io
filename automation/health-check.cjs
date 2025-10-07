 HEAD
  "timestamp": new Date().toISOString(),
  "checks": {},
  "status": 'healthy'};

// package.json
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  healthCheck.checks.packageJson = {
    "status": 'ok',
    "version": pkg.version || null};
} catch {
  healthCheck.checks.packageJson = {
    "status": 'error',
    "message": 'package.json not readable'};
  healthCheck.status = 'unhealthy';
}

// dependencies
try {
  const hasNodeModules = fs.existsSync('node_modules');
  healthCheck.checks.dependencies = {
    "status": hasNodeModules ? 'ok' : 'warning',
    "message": hasNodeModules ? 'Dependencies installed' : 'node_modules missing'};
} catch {
  healthCheck.checks.dependencies = {
    "status": 'error',
    "message": 'Failed to check dependencies'};
}

// disk
try {
  const stats = execSync('df -h .', { "encoding": 'utf8' });
  healthCheck.checks.disk = { "status": 'ok', "details": stats.split('\n')[1] };
} catch {
  healthCheck.checks.disk = {
    "status": 'warning',
    "message": 'Unable to get disk info'};
}

// memory
try {
  const mem = execSync('free -h', { "encoding": 'utf8' });
  healthCheck.checks.memory = { "status": 'ok', "details": mem.split('\n')[1] };
} catch {
  healthCheck.checks.memory = {
    "status": 'warning',
    "message": 'Unable to get memory info'};
}

// build dir
try {
  const hasBuild =
    fs.existsSync('.next') || fs.existsSync('dist') || fs.existsSync('build');
  healthCheck.checks.build = { "status": hasBuild ? 'ok' : 'info' };
} catch {
  healthCheck.checks.build = {
    "status": 'warning',
    "message": 'Unable to check build dir'};
}

const reportPath = `health-check-report-${Date.now()}.json`;
fs.writeFileSync(reportPath, JSON.stringify(healthCheck, null, 2));

// Print summary
const totalChecks = Object.keys(healthCheck.checks).length;
const okChecks = Object.values(healthCheck.checks).filter(
  check => check.status === 'ok'
).length;
const errorChecks = Object.values(healthCheck.checks).filter(
  check => check.status === 'error'
).length;

const fs = require("fs");
const path = require("path");
class HealthChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.checks = [];
    this.errors = [];
  }

 HEAD
 cursor/fix-syntax-push-and-merge-to-main-0308

class HealthChecker {
  // TODO: Implement
  constructor() {
    this.projectRoot = process.cwd();
 HEAD
    this.checks = [];
    this.errors = [];
  }

#!/usr/bin/env node

/**
 * Health Check Monitor;
 * Monitors application health and provides alerts;
 */
  constructor() {
    this.projectRoot = process.cwd();
    this.issues = [];
    this.fixes = []}

  async checkDependencies() {
    this.log("📚 Checking dependencies installation...");
    try {
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      if (fs.existsSync(nodeModulesPath)) {
        this.checks.push("Dependencies are installed");
        this.log("✅ Dependencies are installed");
      } else {
        this.errors.push("Dependencies not installed");
        this.log("❌ Dependencies not installed", "ERROR");
      }
    } catch (error) {
      this.log(`❌ Failed to check dependencies: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkBuildCapability() {
    this.log("🏗️ Checking build capability...");
    try {
      execSync("npm run build", {
        cwd: this.projectRoot,
        stdio: "pipe",
        timeout: 60000
      });
      this.checks.push("Build test successful");
      this.log("✅ Build test successful");
    } catch (error) {
      this.errors.push(`Build failed: ${error.message}`);
      this.log(`❌ Build failed: ${error.message}`, "ERROR");
    }
  }

  async run() {
    this.log("🎯 Starting Health Check Process...");
    this.log("    try {
      await this.checkNodeVersion();
      await this.checkPackageJson();
      await this.checkTypeScriptConfig();
      await this.checkNextConfig();
      await this.checkDependencies();
      await this.checkBuildCapability();
      
      if (!nodeModulesExists) {
        this.issues.push('node_modules directory missing');
        this.fixes.push('Run npm install')}
      
      console.log('✅ Dependencies check completed')} catch (error) {
      this.issues.push(`Dependencies check failed: ${error.message}`)}
  }

  async checkConfiguration() {
    const configFiles = ['package.json', 'tsconfig.json', 'next.config.js', 'eslint.config.js'];
    
    for (const file of configFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (!fs.existsSync(filePath)) {
        this.issues.push(`Missing configuration file: ${file}`);
        this.fixes.push(`Create ${file}`)}
    }
    
    console.log('✅ Configuration check completed')}

  async checkTypeScript() {
    try {
      execSync('npx tsc --noEmit' { stdio: 'pipe' });
      console.log('✅ TypeScript check passed')} catch (error) {
      this.issues.push('TypeScript compilation errors found');
      this.fixes.push('Fix TypeScript errors')}
  }

  async checkLinting() {
    try {
      execSync('npx eslint . --ext .js,.jsx,.ts,.tsx' { stdio: 'pipe' });
      console.log('✅ Linting check passed')} catch (error) {
      this.issues.push('ESLint errors found');
      this.fixes.push('Run npx eslint . --ext .js,.jsx,.ts,.tsx --fix')}
  }

  async runAllChecks() {
    console.log('🔍 Running comprehensive health check...\n');
    
    await this.checkDependencies();
    await this.checkConfiguration();
    await this.checkTypeScript();
    await this.checkLinting();
    
    console.log('\n📊 Health Check Summary:');
    console.log(`Issues found: ${this.issues.length}`);
    console.log(`Suggested fixes: ${this.fixes.length}`);
    
    if (this.issues.length > 0) {
      console.log('\n❌ Issues:');
      this.issues.forEach((issue, index) => console.log(`${index + 1}. ${issue}`))}
    
    if (this.fixes.length > 0) {
      console.log('\n🔧 Suggested fixes:');
      this.fixes.forEach((fix, index) => console.log(`${index + 1}. ${fix}`))}
    
    if (this.issues.length === 0) {
      console.log('\n🎉 All checks passed! Your app is healthy.')}
  }
}

// Run the health checker
const healthChecker = new HealthChecker();
healthChecker.run().catch(console.error);
