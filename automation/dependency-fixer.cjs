 HEAD
#!/usr/bin/env node;


const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class DependencyFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = [];
    this.errors = []}

  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`)}

  async fixPackageJson() {
    this.log("🔧 Fixing package.json dependencies...");
    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      
      // Fix React version conflicts
      if (packageJson.dependencies.react === '^17.0.2') {
        packageJson.dependencies.react = '^18.3.1';
        this.fixes.push('Updated React to v18.3.1')}
      
      if (packageJson.dependencies['react-dom'] === '^17.0.2') {
        packageJson.dependencies['react-dom'] = '^18.3.1';
        this.fixes.push('Updated React DOM to v18.3.1')}
      
      // Fix TypeScript types
      if (packageJson.devDependencies['@types/react'] === '^17.0.87') {
        packageJson.devDependencies['@types/react'] = '^18.3.1';
        this.fixes.push('Updated @types/react to v18.3.1')}
      
      if (packageJson.devDependencies['@types/react-dom'] === '^17.0.26') {
        packageJson.devDependencies['@types/react-dom'] = '^18.3.1';
        this.fixes.push('Updated @types/react-dom to v18.3.1')}
      
      // Update TypeScript
      if (packageJson.devDependencies.typescript === '^4.9.5') {
        packageJson.devDependencies.typescript = '^5.0.0';
        this.fixes.push('Updated TypeScript to v5.0.0')}
      
      // Fix ESLint version
      if (packageJson.devDependencies.eslint === '^9.32.0') {
        packageJson.devDependencies.eslint = '^8.57.0';
        this.fixes.push('Updated ESLint to v8.57.0 for compatibility')}
      
      // Remove problematic dependencies
      if (packageJson.dependencies['@magneticwatermelon/mcp-toolkit']) {
        delete packageJson.dependencies['@magneticwatermelon/mcp-toolkit'];
        this.fixes.push('Removed problematic MCP toolkit dependency')}
      
      // Write back the fixed package.json
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      this.log('✅ Package.json fixed successfully')} catch (error) {
      this.log(`❌ Failed to fix package.json: ${error.message}`, 'ERROR');
      this.errors.push(error.message)}
  }

  async cleanNodeModules() {
    this.log("🧹 Cleaning node_modules...");
    try {
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      if (fs.existsSync(nodeModulesPath)) {
        execSync('rm -rf node_modules' { cwd: this.projectRoot });
        this.fixes.push('Cleaned node_modules directory')}
      
      const packageLockPath = path.join(this.projectRoot, "package-lock.json");
      if (fs.existsSync(packageLockPath)) {
        fs.unlinkSync(packageLockPath);
        this.fixes.push('Removed package-lock.json')}
      
      const yarnLockPath = path.join(this.projectRoot, "yarn.lock");
      if (fs.existsSync(yarnLockPath)) {
        fs.unlinkSync(yarnLockPath);
        this.fixes.push('Removed yarn.lock')}
      
      this.log('✅ Cleanup completed')} catch (error) {
      this.log(`❌ Failed to clean: ${error.message}`, 'ERROR');
      this.errors.push(error.message)}
  }

  async installDependencies() {
    this.log("📦 Installing dependencies...");
    try {
      // Try yarn first (it worked before)
      execSync('yarn install --ignore-engines' { 
        cwd: this.projectRoot,
        stdio: "inherit"
      });
      
      this.fixes.push('Dependencies installed with yarn');
      this.log('✅ Dependencies installed successfully');
      return true} catch (error) {
      this.log(`❌ Yarn install failed: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
      return false}
  }

  async runAuditFix() {
    this.log("🛡️ Running security audit fix...");
    try {
      execSync('yarn audit --fix' { 
        cwd: this.projectRoot,
        stdio: "inherit"
      });
      
      this.fixes.push('Security vulnerabilities fixed');
      this.log('✅ Security audit completed')} catch (error) {
      this.log(`⚠️  Audit fix had issues: ${error.message}`, 'WARN')}
  }

  async testBuild() {
    this.log("🏗️ Testing build...");
    try {
      execSync('yarn build' { 
        cwd: this.projectRoot,
        stdio: "inherit"
      });
      
      this.fixes.push('Build test successful');
      this.log('✅ Build test passed');
      return true} catch (error) {
      this.log(`❌ Build test failed: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
      return false}
  }

  async run() {
    this.log('🚀 Starting Dependency Fixing Process...');
    this.log('==');
    
    try {
      await this.fixPackageJson();
      await this.cleanNodeModules();
      const installSuccess = await this.installDependencies();
      if (installSuccess) {
        await this.runAuditFix();
        await this.testBuild()}
      
      this.log('\\n📊 DEPENDENCY FIXING REPORT');
      this.log('=====');
      this.log(`Fixes Applied: ${this.fixes.length}`);
      this.log(`Errors Found: ${this.errors.length}`);
      
      if (this.fixes.length > 0) {
        this.log("\n✅ Fixes Applied:");
        this.fixes.forEach((fix, index) => {
          this.log(`  ${index + 1}. ${fix}`)})}
      
      if (this.errors.length > 0) {
        this.log("\n❌ Errors:");
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`)})}
      
      this.log('\\n🎉 Dependency fixing completed!')} catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, 'ERROR');
      process.exit(1)}
  }
}

const fixer = new DependencyFixer();
fixer.run().catch(console.error);
 31ef851138fd26c05f3cc955272d6690995f1d05
