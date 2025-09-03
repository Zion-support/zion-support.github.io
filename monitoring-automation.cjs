#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MonitoringAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'monitoring.log');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n')}

  async createPerformanceMonitor() {
    this.log('📊 Creating performance monitoring script...');

    const monitorPath = path.join(
      this.projectRoot,
      'scripts',
      'performance-monitor-enhanced.cjs'
    );
    const scriptsDir = path.dirname(monitorPath);

    if (!fs.existsSync(scriptsDir)) {
      fs.mkdirSync(scriptsDir { recursive: true })}

    const monitorScript = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'monitoring-reports');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`)}

  async checkBuildPerformance() {
    this.log('🔨 Checking build performance...');
    
    const startTime = Date.now();
    try {
      execSync('npm run build' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });
      const buildTime = Date.now() - startTime;
      
      this.log(\`✅ Build completed in \${buildTime}ms\`);
      return { success: true, buildTime }} catch (error) {
      this.log(\`❌ Build failed: \${error.message}\`);
      return { success: false, error: error.message }}
  }

  async checkBundleSize() {
    this.log('📦 Analyzing bundle size...');
    
    const nextDir = path.join(this.projectRoot, '.next');
    if (!fs.existsSync(nextDir)) {
      return { error: 'Build directory not found' }}

    try {
      const staticDir = path.join(nextDir, 'static');
      if (fs.existsSync(staticDir)) {
        const files = this.getAllFiles(staticDir);
        let totalSize = 0;
        const fileSizes = {};

        files.forEach(file => {
          const stats = fs.statSync(file);
          const size = stats.size;
          totalSize += size;
          const relativePath = path.relative(staticDir, file);
          fileSizes[relativePath] = size});

        const result = {
          totalSize: totalSize,
          totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
          fileCount: files.length,
          fileSizes: fileSizes
        };

        this.log(\`📊 Bundle size: \${result.totalSizeMB}MB (\${result.fileCount} files)\`);
        return result}
    } catch (error) {
      this.log(\`❌ Bundle analysis failed: \${error.message}\`);
      return { error: error.message }}

    return { error: 'Could not analyze bundle size' }}

  getAllFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath))} else {
        files.push(fullPath)}
    }
    
    return files}

  async checkDependencies() {
    this.log('📋 Checking dependencies...');
    
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      
      // Check for outdated packages
      let outdatedPackages = [];
      try {
        const outdatedOutput = execSync('npm outdated --json' { 
          cwd: this.projectRoot, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        outdatedPackages = JSON.parse(outdatedOutput)} catch (error) {
        // npm outdated returns non-zero exit code when packages are outdated
        if (error.stdout) {
          outdatedPackages = JSON.parse(error.stdout)}
      }

      const result = {
        dependencies: dependencies,
        devDependencies: devDependencies,
        totalDeps: dependencies.length + devDependencies.length,
        outdatedPackages: Object.keys(outdatedPackages)
      };

      this.log(\`📊 Dependencies: \${result.totalDeps} total, \${result.outdatedPackages.length} outdated\`);
      return result} catch (error) {
      this.log(\`❌ Dependency check failed: \${error.message}\`);
      return { error: error.message }}
  }

  async checkSecurity() {
    this.log('🔒 Running security audit...');
    
    try {
      const auditOutput = execSync('npm audit --json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(auditOutput);
      const vulnerabilities = audit.vulnerabilities || {};
      const vulnerabilityCount = Object.keys(vulnerabilities).length;
      
      this.log(\`🔒 Security audit: \${vulnerabilityCount} vulnerabilities found\`);
      return { 
        success: true, 
        vulnerabilityCount,
        vulnerabilities: vulnerabilities
      }} catch (error) {
      this.log(\`❌ Security audit failed: \${error.message}\`);
      return { success: false, error: error.message }}
  }

  async generateReport() {
    this.log('📊 Generating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      buildPerformance: await this.checkBuildPerformance(),
      bundleSize: await this.checkBundleSize(),
      dependencies: await this.checkDependencies(),
      security: await this.checkSecurity()
    };

    const reportPath = path.join(this.reportsDir, \`performance-report-\${Date.now()}.json\`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(\`📊 Report saved: \${reportPath}\`);
    return report}

  async run() {
    this.log('🚀 Starting Performance Monitor');
    const report = await this.generateReport();
    this.log('🎉 Performance monitoring completed');
    return report}
}

// Run the monitor
const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);
`;

    try {
      fs.writeFileSync(monitorPath, monitorScript);
      fs.chmodSync(monitorPath, '755');
      this.log('✅ Performance monitor created');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to create performance monitor: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async createMaintenanceScript() {
    this.log('🔧 Creating maintenance script...');

    const maintenancePath = path.join(
      this.projectRoot,
      'scripts',
      'maintenance.cjs'
    );
    const scriptsDir = path.dirname(maintenancePath);

    if (!fs.existsSync(scriptsDir)) {
      fs.mkdirSync(scriptsDir { recursive: true })}

    const maintenanceScript = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MaintenanceScript {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'maintenance-reports');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`)}

  async cleanCache() {
    this.log('🧹 Cleaning cache...');
    
    const cacheDirs = [
      '.next',
      'node_modules/.cache',
      '.npm',
      '.yarn'
    ];

    let cleaned = 0;
    for (const dir of cacheDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        try {
          execSync(\`rm -rf "\${dirPath}"\` { cwd: this.projectRoot });
          this.log(\`✅ Cleaned \${dir}\`);
          cleaned++} catch (error) {
          this.log(\`❌ Failed to clean \${dir}: \${error.message}\`)}
      }
    }

    return { cleaned }}

  async updateDependencies() {
    this.log('📦 Updating dependencies...');
    
    try {
      // Check for updates
      execSync('npm outdated' { 
        cwd: this.projectRoot, 
        stdio: 'pipe'
      });
      
      // Update dependencies
      execSync('npm update' { 
        cwd: this.projectRoot, 
        stdio: 'inherit'
      });
      
      this.log('✅ Dependencies updated');
      return { success: true }} catch (error) {
      this.log(\`❌ Dependency update failed: \${error.message}\`);
      return { success: false, error: error.message }}
  }

  async optimizeImages() {
    this.log('🖼️ Optimizing images...');
    
    const publicDir = path.join(this.projectRoot, 'public');
    if (!fs.existsSync(publicDir)) {
      return { error: 'Public directory not found' }}

    try {
      const images = this.findImages(publicDir);
      let optimized = 0;

      for (const image of images) {
        try {
          // Use ImageMagick or similar tool to optimize images
          // This is a placeholder - you would need to install imagemagick
          this.log(\`📸 Found image: \${path.relative(publicDir, image)}\`);
          optimized++} catch (error) {
          this.log(\`❌ Failed to optimize \${image}: \${error.message}\`)}
      }

      return { optimized, total: images.length }} catch (error) {
      this.log(\`❌ Image optimization failed: \${error.message}\`);
      return { error: error.message }}
  }

  findImages(dir) {
    let images = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        images = images.concat(this.findImages(fullPath))} else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(item)) {
        images.push(fullPath)}
    }
    
    return images}

  async generateReport() {
    this.log('📊 Running maintenance tasks...');
    
    const report = {
      timestamp: new Date().toISOString(),
      cacheCleanup: await this.cleanCache(),
      dependencyUpdate: await this.updateDependencies(),
      imageOptimization: await this.optimizeImages()
    };

    const reportPath = path.join(this.reportsDir, \`maintenance-report-\${Date.now()}.json\`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(\`📊 Report saved: \${reportPath}\`);
    return report}

  async run() {
    this.log('🚀 Starting Maintenance Script');
    const report = await this.generateReport();
    this.log('🎉 Maintenance completed');
    return report}
}

// Run the maintenance script
const maintenance = new MaintenanceScript();
maintenance.run().catch(console.error);
`;

    try {
      fs.writeFileSync(maintenancePath, maintenanceScript);
      fs.chmodSync(maintenancePath, '755');
      this.log('✅ Maintenance script created');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to create maintenance script: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async createCronJob() {
    this.log('⏰ Creating cron job configuration...');

    const cronPath = path.join(this.projectRoot, 'scripts', 'setup-cron.sh');
    const scriptsDir = path.dirname(cronPath);

    if (!fs.existsSync(scriptsDir)) {
      fs.mkdirSync(scriptsDir { recursive: true })}

    const cronScript = `#!/bin/bash

# Setup cron jobs for automation
echo "⏰ Setting up cron jobs..."

# Get the current directory
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# Create cron job for performance monitoring (daily at 2 AM)
(crontab -l 2>/dev/null; echo "0 2 * * * cd $PROJECT_DIR && node scripts/performance-monitor-enhanced.cjs") | crontab -

# Create cron job for maintenance (weekly on Sunday at 3 AM)
(crontab -l 2>/dev/null; echo "0 3 * * 0 cd $PROJECT_DIR && node scripts/maintenance.cjs") | crontab -

# Create cron job for security audit (daily at 4 AM)
(crontab -l 2>/dev/null; echo "0 4 * * * cd $PROJECT_DIR && npm audit --audit-level=moderate") | crontab -

echo "✅ Cron jobs setup completed"
echo "📋 Current cron jobs:"
crontab -l
`;

    try {
      fs.writeFileSync(cronPath, cronScript);
      fs.chmodSync(cronPath, '755');
      this.log('✅ Cron job configuration created');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to create cron configuration: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async run() {
    this.log('🚀 Starting Monitoring Automation');

    const results = {
      timestamp: new Date().toISOString(),
      scripts: {} };

    // Create monitoring scripts
    results.scripts.performanceMonitor = await this.createPerformanceMonitor();
    results.scripts.maintenance = await this.createMaintenanceScript();
    results.scripts.cronJob = await this.createCronJob();

    // Generate report
    const reportPath = path.join(
      this.reportsDir,
      'monitoring-setup-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

    this.log('📊 Report generated: ' + reportPath);
    this.log('🎉 Monitoring Automation Completed');

    return results}
}

// Run the automation
const automation = new MonitoringAutomation();
automation.run().catch(console.error);
