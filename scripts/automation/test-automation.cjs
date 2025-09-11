#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class TestAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '../../');
    this.logFile = path.join(this.projectRoot, 'test-reports', 'test-automation.log');
    this.reportFile = path.join(this.projectRoot, 'test-reports', 'test-report.json');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      path.join(this.projectRoot, 'test-reports'),
      path.join(this.projectRoot, 'test-results')
    ];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logEntry + '\n');
  }

  async runCommand(command, cwd = this.projectRoot) {
    return new Promise((resolve, reject) => {
      this.log(`Running command: ${command}`);
      
      const child = spawn(command, [], {
        shell: true,
        cwd,
        stdio: ['pipe', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
        this.log(`STDOUT: ${data.toString().trim()}`);
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
        this.log(`STDERR: ${data.toString().trim()}`);
      });

      child.on('close', (code) => {
        if (code === 0) {
          this.log(`Command completed successfully with code ${code}`);
          resolve({ code, stdout, stderr });
        } else {
          this.log(`Command failed with code ${code}`, 'ERROR');
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });

      child.on('error', (error) => {
        this.log(`Command error: ${error.message}`, 'ERROR');
        reject(error);
      });
    });
  }

  async installDependencies() {
    this.log('Installing dependencies...');
    try {
      await this.runCommand('npm ci');
      this.log('Dependencies installed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to install dependencies: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runBuild() {
    this.log('Building project for testing...');
    try {
      await this.runCommand('npm run build');
      this.log('Build completed successfully');
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async verifyBuildOutput() {
    this.log('Verifying build output...');
    const distPath = path.join(this.projectRoot, 'dist');
    
    if (!fs.existsSync(distPath)) {
      this.log('Build output directory not found', 'ERROR');
      return false;
    }

    const files = fs.readdirSync(distPath);
    this.log(`Build output contains ${files.length} files/directories`);
    
    // Check for critical files
    const criticalFiles = ['index.html'];
    const missingFiles = criticalFiles.filter(file => !fs.existsSync(path.join(distPath, file)));
    
    if (missingFiles.length > 0) {
      this.log(`Missing critical files: ${missingFiles.join(', ')}`, 'ERROR');
      return false;
    }

    // Check file sizes
    const indexHtmlPath = path.join(distPath, 'index.html');
    const indexHtmlStats = fs.statSync(indexHtmlPath);
    if (indexHtmlStats.size === 0) {
      this.log('index.html is empty', 'ERROR');
      return false;
    }

    this.log('Build output verification passed');
    return true;
  }

  async verifyAssetPaths() {
    this.log('Verifying asset paths...');
    try {
      // Start a simple HTTP server to test the build
      const httpServer = require('http-server');
      const serverPath = path.join(this.projectRoot, 'dist');
      
      // Check if http-server is available
      try {
        await this.runCommand('npx http-server --version');
      } catch (error) {
        this.log('Installing http-server...');
        await this.runCommand('npm install -g http-server');
      }
      
      // Start server in background
      const serverProcess = spawn('npx', ['http-server', serverPath, '-p', '5000', '-s'], {
        shell: true,
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Wait a bit for server to start
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Test if server is responding
      try {
        const testResult = await this.runCommand('curl -s -o /dev/null -w "%{http_code}" http://localhost:5000');
        if (testResult.stdout.includes('200')) {
          this.log('Asset paths verification passed');
          serverProcess.kill();
          return true;
        } else {
          this.log(`Asset paths verification failed: HTTP ${testResult.stdout}`, 'ERROR');
          serverProcess.kill();
          return false;
        }
      } catch (error) {
        this.log('Asset paths verification failed: Could not connect to test server', 'ERROR');
        serverProcess.kill();
        return false;
      }
    } catch (error) {
      this.log(`Asset paths verification failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runTests() {
    this.log('Running tests...');
    try {
      // Check if test script exists
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      
      if (!packageJson.scripts.test) {
        this.log('No test script found in package.json', 'WARN');
        return {
          success: true,
          message: 'No tests configured',
          testCount: 0
        };
      }
      
      const result = await this.runCommand('npm test');
      
      // Try to parse test results if available
      let testCount = 0;
      try {
        // Look for test result files
        const testResultFiles = ['test-results.xml', 'junit.xml', 'test-report.json'];
        for (const file of testResultFiles) {
          const filePath = path.join(this.projectRoot, file);
          if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            // Simple parsing for common test result formats
            if (file.endsWith('.xml')) {
              const testMatches = content.match(/tests="(\d+)"/);
              if (testMatches) testCount = parseInt(testMatches[1]);
            } else if (file.endsWith('.json')) {
              const testData = JSON.parse(content);
              testCount = testData.total || testData.testCount || 0;
            }
            break;
          }
        }
      } catch (parseError) {
        this.log('Could not parse test results', 'WARN');
      }
      
      this.log(`Tests completed successfully. Test count: ${testCount}`);
      return {
        success: true,
        message: 'Tests passed',
        testCount: testCount
      };
    } catch (error) {
      this.log(`Tests failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  async generateTestReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      status: results.every(r => r.success) ? 'PASSED' : 'FAILED',
      results: results,
      summary: {
        total: results.length,
        passed: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length
      },
      buildInfo: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Test report generated: ${this.reportFile}`);
    
    return report;
  }

  async run() {
    this.log('Starting test automation...');
    
    const results = [];
    
    // Install dependencies
    const depsResult = await this.installDependencies();
    results.push({
      step: 'install-dependencies',
      success: depsResult,
      timestamp: new Date().toISOString()
    });

    if (!depsResult) {
      this.log('Skipping remaining steps due to dependency installation failure', 'ERROR');
      await this.generateTestReport(results);
      return;
    }

    // Run build
    const buildResult = await this.runBuild();
    results.push({
      step: 'build',
      success: buildResult,
      timestamp: new Date().toISOString()
    });

    if (buildResult) {
      // Verify build output
      const verifyResult = await this.verifyBuildOutput();
      results.push({
        step: 'verify-build',
        success: verifyResult,
        timestamp: new Date().toISOString()
      });

      if (verifyResult) {
        // Verify asset paths
        const assetResult = await this.verifyAssetPaths();
        results.push({
          step: 'verify-assets',
          success: assetResult,
          timestamp: new Date().toISOString()
        });
      }

      // Run tests
      const testResult = await this.runTests();
      results.push({
        step: 'tests',
        success: testResult.success,
        details: testResult,
        timestamp: new Date().toISOString()
      });
    }

    // Generate final report
    const report = await this.generateTestReport(results);
    
    this.log(`Test automation completed. Status: ${report.status}`);
    this.log(`Passed: ${report.summary.passed}/${report.summary.total}`);
    
    if (report.status === 'FAILED') {
      this.log('Test automation failed. Check the report for details.', 'ERROR');
      process.exit(1);
    } else {
      this.log('All tests passed successfully!', 'INFO');
    }
  }
}

// Run the automation if this script is executed directly
if (require.main === module) {
  const test = new TestAutomation();
  test.run().catch(error => {
    console.error('Test automation failed:', error);
    process.exit(1);
    });
}

module.exports = TestAutomation;