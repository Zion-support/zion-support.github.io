#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildAutomation {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/build-automation.log');
    this.ensureLogDirectory();
    this.buildMetrics = {};
    this.buildHistory = [];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`🔄 Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      this.log(`✅ Success: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      return null;
    }
  }

  async checkBuildEnvironment() {
    this.log('🔍 Checking build environment...');
    
    try {
      // Check Node.js version
      const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
      this.log(`📦 Node.js version: ${nodeVersion}`);
      
      // Check npm version
      const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
      this.log(`📦 NPM version: ${npmVersion}`);
      
      // Check available disk space
      const diskSpace = execSync('df -h . | tail -1', { encoding: 'utf8' }).trim();
      this.log(`💾 Disk space: ${diskSpace}`);
      
      // Check available memory
      const memory = execSync('free -h | grep Mem', { encoding: 'utf8' }).trim();
      this.log(`🧠 Memory: ${memory}`);
      
      this.buildMetrics.environment = {
        nodeVersion,
        npmVersion,
        diskSpace,
        memory
      };
      
      this.log('✅ Build environment check completed');
      
    } catch (error) {
      this.log(`❌ Build environment check failed: ${error.message}`);
      this.buildMetrics.environment = { error: error.message };
    }
  }

  async installDependencies() {
    this.log('📦 Installing dependencies...');
    
    try {
      const startTime = Date.now();
      
      // Clean install
      const installResult = await this.runCommand('npm ci', 'Install dependencies');
      const endTime = Date.now();
      
      if (installResult) {
        const installTime = endTime - startTime;
        const installTimeSeconds = Math.round(installTime / 1000 * 100) / 100;
        
        this.buildMetrics.dependencies = {
          status: 'success',
          installTime: installTimeSeconds,
          installTimeMs: installTime
        };
        
        this.log(`✅ Dependencies installed in ${installTimeSeconds} seconds`);
        
        if (installTime > 120000) { // 2 minutes
          this.log('⚠️ Dependency installation is slow, consider optimization');
        }
      } else {
        this.buildMetrics.dependencies = {
          status: 'failed'
        };
        this.log('❌ Dependency installation failed');
        return false;
      }
      
      return true;
      
    } catch (error) {
      this.log(`❌ Dependency installation failed: ${error.message}`);
      this.buildMetrics.dependencies = {
        status: 'failed',
        error: error.message
      };
      return false;
    }
  }

  async runPreBuildChecks() {
    this.log('🔍 Running pre-build checks...');
    
    try {
      // Run linting
      const lintResult = await this.runCommand('npm run lint', 'ESLint check');
      
      if (lintResult) {
        this.buildMetrics.preBuild = {
          linting: 'passed'
        };
        this.log('✅ Linting passed');
      } else {
        this.buildMetrics.preBuild = {
          linting: 'failed'
        };
        this.log('❌ Linting failed');
        return false;
      }
      
      // Run type checking
      const typeCheckResult = await this.runCommand('npm run type-check', 'TypeScript type checking');
      
      if (typeCheckResult) {
        this.buildMetrics.preBuild.typeChecking = 'passed';
        this.log('✅ Type checking passed');
      } else {
        this.buildMetrics.preBuild.typeChecking = 'failed';
        this.log('❌ Type checking failed');
        return false;
      }
      
      this.log('✅ Pre-build checks completed');
      return true;
      
    } catch (error) {
      this.log(`❌ Pre-build checks failed: ${error.message}`);
      this.buildMetrics.preBuild = { error: error.message };
      return false;
    }
  }

  async buildApplication() {
    this.log('🏗️ Building application...');
    
    try {
      const startTime = Date.now();
      
      // Clean previous build
      const distPath = path.join(__dirname, '../../dist');
      if (fs.existsSync(distPath)) {
        fs.rmSync(distPath, { recursive: true, force: true });
        this.log('🧹 Cleaned previous build');
      }
      
      // Run build
      const buildResult = await this.runCommand('npm run build', 'Build application');
      const endTime = Date.now();
      
      if (buildResult) {
        const buildTime = endTime - startTime;
        const buildTimeSeconds = Math.round(buildTime / 1000 * 100) / 100;
        
        this.buildMetrics.build = {
          status: 'success',
          buildTime: buildTimeSeconds,
          buildTimeMs: buildTime
        };
        
        this.log(`✅ Build completed in ${buildTimeSeconds} seconds`);
        
        if (buildTime > 60000) { // 1 minute
          this.log('⚠️ Build time is slow, consider optimization');
        }
        
        return true;
      } else {
        this.buildMetrics.build = {
          status: 'failed'
        };
        this.log('❌ Build failed');
        return false;
      }
      
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      this.buildMetrics.build = {
        status: 'failed',
        error: error.message
      };
      return false;
    }
  }

  async analyzeBuildOutput() {
    this.log('📊 Analyzing build output...');
    
    try {
      const distPath = path.join(__dirname, '../../dist');
      if (!fs.existsSync(distPath)) {
        this.log('❌ Build output not found');
        return false;
      }
      
      // Analyze build files
      const files = fs.readdirSync(distPath, { recursive: true });
      const jsFiles = files.filter(file => file.endsWith('.js'));
      const cssFiles = files.filter(file => file.endsWith('.css'));
      const htmlFiles = files.filter(file => file.endsWith('.html'));
      const otherFiles = files.filter(file => !file.endsWith('.js') && !file.endsWith('.css') && !file.endsWith('.html'));
      
      let totalSize = 0;
      const fileSizes = {};
      
      for (const file of files) {
        try {
          const filePath = path.join(distPath, file);
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
          
          const extension = path.extname(file);
          if (!fileSizes[extension]) {
            fileSizes[extension] = { count: 0, totalSize: 0 };
          }
          fileSizes[extension].count++;
          fileSizes[extension].totalSize += stats.size;
          
        } catch (error) {
          // Skip files we can't access
        }
      }
      
      const totalSizeMB = Math.round(totalSize / (1024 * 1024) * 100) / 100;
      
      this.buildMetrics.output = {
        totalFiles: files.length,
        totalSize: totalSizeMB,
        breakdown: {
          js: { count: jsFiles.length, size: Math.round(fileSizes['.js']?.totalSize / (1024 * 1024) * 100) / 100 || 0 },
          css: { count: cssFiles.length, size: Math.round(fileSizes['.css']?.totalSize / (1024 * 1024) * 100) / 100 || 0 },
          html: { count: htmlFiles.length, size: Math.round(fileSizes['.html']?.totalSize / (1024 * 1024) * 100) / 100 || 0 },
          other: { count: otherFiles.length, size: Math.round(fileSizes['']?.totalSize / (1024 * 1024) * 100) / 100 || 0 }
        },
        fileSizes
      };
      
      this.log(`📊 Build output analysis:`);
      this.log(`  - Total files: ${files.length}`);
      this.log(`  - Total size: ${totalSizeMB} MB`);
      this.log(`  - JavaScript: ${jsFiles.length} files, ${this.buildMetrics.output.breakdown.js.size} MB`);
      this.log(`  - CSS: ${cssFiles.length} files, ${this.buildMetrics.output.breakdown.css.size} MB`);
      this.log(`  - HTML: ${htmlFiles.length} files, ${this.buildMetrics.output.breakdown.html.size} MB`);
      this.log(`  - Other: ${otherFiles.length} files, ${this.buildMetrics.output.breakdown.other.size} MB`);
      
      // Check for performance issues
      if (totalSize > 10 * 1024 * 1024) { // 10MB
        this.log('⚠️ Build size is large, consider optimization');
      }
      
      // Check for large individual files
      const largeFiles = [];
      for (const file of files) {
        try {
          const filePath = path.join(distPath, file);
          const stats = fs.statSync(filePath);
          if (stats.size > 1 * 1024 * 1024) { // 1MB
            largeFiles.push({
              name: file,
              size: Math.round(stats.size / (1024 * 1024) * 100) / 100
            });
          }
        } catch (error) {
          // Skip files we can't access
        }
      }
      
      if (largeFiles.length > 0) {
        this.log('⚠️ Large files detected:');
        for (const file of largeFiles) {
          this.log(`  - ${file.name}: ${file.size} MB`);
        }
      }
      
      return true;
      
    } catch (error) {
      this.log(`❌ Build output analysis failed: ${error.message}`);
      this.buildMetrics.output = { error: error.message };
      return false;
    }
  }

  async runPostBuildTests() {
    this.log('🧪 Running post-build tests...');
    
    try {
      // Start the application
      const startResult = await this.runCommand('npm start', 'Start application for testing');
      
      if (startResult) {
        this.log('🚀 Application started, waiting for it to be ready...');
        await new Promise(resolve => setTimeout(resolve, 30000));
        
        // Basic connectivity test
        try {
          const response = await this.testEndpoint('http://localhost:4173');
          if (response) {
            this.buildMetrics.postBuild = {
              status: 'success',
              connectivity: 'passed'
            };
            this.log('✅ Basic connectivity test passed');
          } else {
            this.buildMetrics.postBuild = {
              status: 'failed',
              connectivity: 'failed'
            };
            this.log('❌ Basic connectivity test failed');
          }
        } catch (error) {
          this.log(`⚠️ Connectivity test failed: ${error.message}`);
          this.buildMetrics.postBuild = {
            status: 'partial',
            connectivity: 'failed'
          };
        }
        
        // Stop the application
        try {
          execSync('pkill -f "vite preview"', { stdio: 'ignore' });
        } catch (error) {
          // Ignore errors if process is already stopped
        }
        
        return true;
      } else {
        this.buildMetrics.postBuild = {
          status: 'failed',
          error: 'Could not start application'
        };
        this.log('❌ Could not start application for testing');
        return false;
      }
      
    } catch (error) {
      this.log(`❌ Post-build tests failed: ${error.message}`);
      this.buildMetrics.postBuild = {
        status: 'failed',
        error: error.message
      };
      return false;
    }
  }

  async testEndpoint(url) {
    return new Promise((resolve) => {
      const http = require('http');
      const https = require('https');
      
      const client = url.startsWith('https') ? https : http;
      const req = client.get(url, { timeout: 10000 }, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
      
      req.on('error', () => resolve(false));
      req.on('timeout', () => {
        req.destroy();
        resolve(false);
      });
      
      req.setTimeout(10000);
    });
  }

  async generateBuildReport() {
    this.log('📊 Generating build report...');
    
    try {
      const reportPath = path.join(__dirname, '../../logs/build-report.md');
      const timestamp = new Date().toISOString();
      
      let report = `# Build Automation Report - ${timestamp}

## Summary
This report was generated automatically by the PM2 Build Automation.

## Build Metrics
`;

      // Environment
      if (this.buildMetrics.environment) {
        report += `### Environment
- **Node.js**: ${this.buildMetrics.environment.nodeVersion || 'N/A'}
- **NPM**: ${this.buildMetrics.environment.npmVersion || 'N/A'}
- **Disk Space**: ${this.buildMetrics.environment.diskSpace || 'N/A'}
- **Memory**: ${this.buildMetrics.environment.memory || 'N/A'}

`;
      }
      
      // Dependencies
      if (this.buildMetrics.dependencies) {
        report += `### Dependencies
- **Status**: ${this.buildMetrics.dependencies.status}
`;
        if (this.buildMetrics.dependencies.installTime) {
          report += `- **Install Time**: ${this.buildMetrics.dependencies.installTime} seconds
`;
        }
        report += '\n';
      }
      
      // Pre-build
      if (this.buildMetrics.preBuild) {
        report += `### Pre-build Checks
- **Linting**: ${this.buildMetrics.preBuild.linting || 'N/A'}
- **Type Checking**: ${this.buildMetrics.preBuild.typeChecking || 'N/A'}

`;
      }
      
      // Build
      if (this.buildMetrics.build) {
        report += `### Build Process
- **Status**: ${this.buildMetrics.build.status}
`;
        if (this.buildMetrics.build.buildTime) {
          report += `- **Build Time**: ${this.buildMetrics.build.buildTime} seconds
`;
        }
        report += '\n';
      }
      
      // Output
      if (this.buildMetrics.output) {
        report += `### Build Output
- **Total Files**: ${this.buildMetrics.output.totalFiles}
- **Total Size**: ${this.buildMetrics.output.totalSize} MB
- **JavaScript**: ${this.buildMetrics.output.breakdown.js.count} files, ${this.buildMetrics.output.breakdown.js.size} MB
- **CSS**: ${this.buildMetrics.output.breakdown.css.count} files, ${this.buildMetrics.output.breakdown.css.size} MB
- **HTML**: ${this.buildMetrics.output.breakdown.html.count} files, ${this.buildMetrics.output.breakdown.html.size} MB
- **Other**: ${this.buildMetrics.output.breakdown.other.count} files, ${this.buildMetrics.output.breakdown.other.size} MB

`;
      }
      
      // Post-build
      if (this.buildMetrics.postBuild) {
        report += `### Post-build Tests
- **Status**: ${this.buildMetrics.postBuild.status}
- **Connectivity**: ${this.buildMetrics.postBuild.connectivity || 'N/A'}

`;
      }

      report += `## Build Status
`;

      const allChecks = [
        this.buildMetrics.dependencies?.status === 'success',
        this.buildMetrics.preBuild?.linting === 'passed',
        this.buildMetrics.preBuild?.typeChecking === 'passed',
        this.buildMetrics.build?.status === 'success',
        this.buildMetrics.output && !this.buildMetrics.output.error,
        this.buildMetrics.postBuild?.status === 'success'
      ];
      
      const passedChecks = allChecks.filter(Boolean).length;
      const totalChecks = allChecks.length;
      
      if (passedChecks === totalChecks) {
        report += `✅ **BUILD SUCCESSFUL** - All ${totalChecks} checks passed\n`;
      } else {
        report += `❌ **BUILD FAILED** - ${passedChecks}/${totalChecks} checks passed\n`;
      }

      report += `
## Recommendations
`;

      if (passedChecks === totalChecks) {
        report += `1. Build completed successfully
2. All quality checks passed
3. Application is ready for deployment
4. Monitor build performance over time
`;
      } else {
        report += `1. Review failed build steps
2. Fix any linting or type checking issues
3. Check build environment configuration
4. Verify all dependencies are properly installed
`;
      }

      report += `
## Next Steps
- Run this automation every 8 hours
- Monitor build performance trends
- Optimize slow build steps if needed
- Update automation scripts as needed

---
Generated by PM2 Build Automation
`;

      fs.writeFileSync(reportPath, report);
      this.log(`📄 Report generated: ${reportPath}`);
      
      // Also generate JSON report
      const jsonReportPath = path.join(__dirname, '../../logs/build-report.json');
      const jsonReport = {
        timestamp,
        metrics: this.buildMetrics,
        summary: {
          totalChecks,
          passedChecks,
          buildSuccessful: passedChecks === totalChecks
        }
      };
      
      fs.writeFileSync(jsonReportPath, JSON.stringify(jsonReport, null, 2));
      this.log(`📄 JSON report generated: ${jsonReportPath}`);
      
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`);
    }
    
    this.log('✅ Report Generation completed');
  }

  async run() {
    this.log('🚀 Starting Build Automation Process');
    
    try {
      // Run all build stages
      await this.checkBuildEnvironment();
      
      const depsSuccess = await this.installDependencies();
      if (!depsSuccess) {
        throw new Error('Dependency installation failed');
      }
      
      const preBuildSuccess = await this.runPreBuildChecks();
      if (!preBuildSuccess) {
        throw new Error('Pre-build checks failed');
      }
      
      const buildSuccess = await this.buildApplication();
      if (!buildSuccess) {
        throw new Error('Build failed');
      }
      
      await this.analyzeBuildOutput();
      await this.runPostBuildTests();
      
      // Generate report
      await this.generateBuildReport();
      
      // Summary
      this.log(`🎉 Build Automation Process completed`);
      
      const allChecks = [
        this.buildMetrics.dependencies?.status === 'success',
        this.buildMetrics.preBuild?.linting === 'passed',
        this.buildMetrics.preBuild?.typeChecking === 'passed',
        this.buildMetrics.build?.status === 'success',
        this.buildMetrics.output && !this.buildMetrics.output.error,
        this.buildMetrics.postBuild?.status === 'success'
      ];
      
      const passedChecks = allChecks.filter(Boolean).length;
      const totalChecks = allChecks.length;
      
      if (passedChecks === totalChecks) {
        this.log(`✅ Build successful! All ${totalChecks} checks passed.`);
      } else {
        this.log(`⚠️ Build completed with issues. ${passedChecks}/${totalChecks} checks passed.`);
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`💥 Build Automation Process failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the process if this script is executed directly
if (require.main === module) {
  const automation = new BuildAutomation();
  automation.run();
}

module.exports = BuildAutomation;