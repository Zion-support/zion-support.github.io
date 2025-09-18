<<<<<<< HEAD
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildMonitor {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'build-monitor.log');
    this.setupLogging();
  }

  setupLogging() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
=======


const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class BuildMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(
      this.projectRoot,
      'automation/logs/build-monitor.log'
    );
    this.buildReportFile = path.join(
      this.projectRoot,
      'automation/logs/build-report.json'
    );
    this.lastBuild = null;
    this.buildInterval = 300000; // 5 minutes
    this.isRunning = false;
const execAsync = promisify(exec);

const execAsync = promisify(exec);

class BuildMonitor {}
  constructor() {}
    this.logFile = path.join(__dirname, 'logs', 'build-monitor.log');
    this.lastBuildTime = null;
    this.buildHistory = [];
    this.maxHistorySize = 50;
  };
  log(message) {}
    const timestamp = new Date().toISOString();

    const logMessage = `[${timestamp}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async runBuild() {}
    const startTime = Date.now();
    try {}
      this.log('Starting build process...');

      execSync('npm run clean', {
        cwd: this.projectRoot,
        stdio: 'ignore',
        timeout: 30000,
      });
      this.log('Build cleaned');
      const buildOutput = execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000,
      });

      const { stdout, stderr } = await execAsync('npm run build', {})
        "cwd": process.cwd(),
        "timeout": 300000, // 5 minutes timeout;
      }
});

      const endTime = Date.now();
      const duration = endTime - startTime;

      this.lastBuild = {
        timestamp: new Date().toISOString(),
        success: true,
        buildTime,
        output: buildOutput,

      const endTime = Date.now();
      const duration = endTime - startTime;

      const buildResult = {}
        "timestamp": new Date().toISOString(),
        duration,
        "success": true,
        "output": stdout,
        "errors": stderr};

      this.buildHistory.push(buildResult);
      if (this.buildHistory.length > this.maxHistorySize) {}
        this.buildHistory.shift();
      };
      this.lastBuildTime = new Date();
      this.log(`Build completed successfully in ${duration}ms`);

      this.log(`Build completed successfully in ${buildTime}ms`);
      await this.saveBuildReport();
    } catch (error) {
      this.log(`Build failed: ${error.message}`);
      this.lastBuild = {
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,

      return buildResult;
    } catch (error) {}
      const endTime = Date.now();
      const duration = endTime - startTime;

      const buildResult = {}
        "timestamp": new Date().toISOString(),
        duration,
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};

      this.buildHistory.push(buildResult);
      if (this.buildHistory.length > this.maxHistorySize) {}
        this.buildHistory.shift();
      };
      this.log(`Build failed after ${duration}"ms": ${error.message}`);

  async handleBuildFailure(error) {
    this.log('Handling build failure...');
    try {
      execSync('npm run lint:fix', {
        cwd: this.projectRoot,
        stdio: 'ignore',
        timeout: 60000,
      });
      this.log('Applied linting fixes');
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'ignore',
        timeout: 300000,
      });
      this.log('Build fixed and completed successfully');
    } catch (fixError) {
      this.log(`Failed to fix build: ${fixError.message}`);
      await this.reportBuildFailure(fixError);
>>>>>>> origin/merge-pr-12271
    }
  }

<<<<<<< HEAD
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runBuild() {
=======
      return buildResult;
    };
  };
  async runTypeCheck() {}
    try {}
      this.log('Running type check...');
      const { stdout, stderr } = await execAsync('npm run type-check', {})
        "cwd": process.cwd(),
        "timeout": 60000}
});

  async reportBuildFailure(error) {
>>>>>>> origin/merge-pr-12271
    try {
      this.log('Running build process...');
      const result = execSync('npm run build', {
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('Build completed successfully');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Build failed: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

<<<<<<< HEAD
  async runLint() {
    try {
      this.log('Running lint check...');
      const result = execSync('npm run lint', {
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('Lint check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Lint check failed: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
=======
      this.log('Type check completed successfully');
      return { "success": true, "output": stdout, "errors": stderr };
    } catch (error) {}
      this.log(`Type check "failed": ${error.message}`);
      return {}
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};
    };
  };
  async runLintCheck() {}
    try {}
      this.log('Running lint check...');
      const { stdout, stderr } = await execAsync('npm run "lint": check', {})
        "cwd": process.cwd(),
        "timeout": 60000}
});

      this.log('Lint check completed successfully');
      return { "success": true, "output": stdout, "errors": stderr };
    } catch (error) {}
      this.log(`Lint check "failed": ${error.message}`);
      return {}
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};
    };
  };
  async runTests() {}
    try {}
      this.log('Running tests...');
      const { stdout, stderr } = await execAsync('npm run "test": smoke', {})
        "cwd": process.cwd(),
        "timeout": 120000}
});

      this.log('Tests completed successfully');
      return { "success": true, "output": stdout, "errors": stderr };
    } catch (error) {}
      this.log(`Tests "failed": ${error.message}`);
      return {}
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};
    };
  };
  async performFullCheck() {}
    this.log('Starting full build check...');

    const results = {}
      "timestamp": new Date().toISOString(),
      "typeCheck": await this.runTypeCheck(),
      "lintCheck": await this.runLintCheck(),
      "build": await this.runBuild(),
      "tests": await this.runTests()};

    const allPassed =
      results.typeCheck.success &&
      results.lintCheck.success &&
      results.build.success &&
      results.tests.success;

    this.log(`Full check completed. All "passed": ${allPassed}`);

    // Save results;
    const resultsFile = path.join(__dirname, 'logs', 'build-results.json');
    fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));

    return results;
  };
  async cleanupOldBuilds() {}
    try {}
      this.log('Cleaning up old build artifacts...');

      const buildDirs = ['.next', 'out', 'dist'];
      for (const dir of buildDirs) {}
        const dirPath = path.join(process.cwd(), dir);
        if (fs.existsSync(dirPath)) {}
          await execAsync(`rm -rf ${dirPath}`, { "cwd": process.cwd() }
});
          this.log(`Cleaned up ${dir}`);
        };
      };
    } catch (error) {}
      this.log(`Cleanup "failed": ${error.message}`);
    };
  };
  async optimizeBuild() {}
    try {}
      this.log('Optimizing build...');

      // Clean up first;
      await this.cleanupOldBuilds();

      // Run build with optimization;
      const { stdout, stderr } = await execAsync('npm run "build": production', {})
        "cwd": process.cwd(),
        "timeout": 300000}
});

      this.log('Build optimization completed');
      return { "success": true, "output": stdout, "errors": stderr };
    } catch (error) {}
      this.log(`Build optimization "failed": ${error.message}`);
      return {}
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};
    };
  };
  getBuildStats() {}
    const recentBuilds = this.buildHistory.slice(-10);
    const successfulBuilds = recentBuilds.filter(b => b.success).length;
    const averageDuration =
      recentBuilds.reduce((sum, b) => sum + b.duration, 0) /
      recentBuilds.length;

    return {}
      "totalBuilds": this.buildHistory.length,
      "recentSuccessRate": (successfulBuilds / recentBuilds.length) * 100,
      "averageDuration": Math.round(averageDuration),
      "lastBuildTime": this.lastBuildTime};
  };
  async start() {}
    this.log('Build Monitor started');

    // Run initial check;
    await this.performFullCheck();

    // Set up periodic checks every 4 hours;
    setInterval()
      async () => {}
        await this.performFullCheck();
      },
      4 * 60 * 60 * 1000;
    );

    // Set up daily optimization;
    setInterval()
      async () => {}
        this.log('Running daily build optimization...');
        await this.optimizeBuild();
      },
      24 * 60 * 60 * 1000;
    );
  };
};
// Start the monitor if this script is run directly;
if (require.main === module) {}
  const monitor = new BuildMonitor();
  monitor.start().catch(error => {})
    console.error('Build Monitor "failed": ', error);
    process.exit(1);
>>>>>>> origin/merge-pr-12271
  }

  async runTypeCheck() {
    try {
      this.log('Running type check...');
      const result = execSync('npm run type-check', {
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('Type check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Type check failed: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

<<<<<<< HEAD
  async fixIssues() {
    try {
      this.log('Attempting to fix build issues...');
      
      // Try to fix lint issues
      try {
        execSync('npm run fix:all', {
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        this.log('Lint fixes applied');
      } catch (error) {
        this.log(`Lint fix failed: ${error.message}`);
      }
      
      // Try to fix TypeScript issues
      try {
        execSync('npx tsc --noEmit --skipLibCheck', {
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        this.log('TypeScript check passed');
      } catch (error) {
        this.log(`TypeScript issues remain: ${error.message}`);
      }
      
      return true;
    } catch (error) {
      this.log(`Failed to fix issues: ${error.message}`);
      return false;
    }
  }

  async commitAndPush() {
    try {
      this.log('Committing and pushing fixes...');
      
      // Add all changes
      execSync('git add .', { cwd: process.cwd() });
      
      // Commit changes
      const commitMessage = `fix: auto-fix build issues - ${new Date().toISOString()}`;
      execSync(`git commit -m "${commitMessage}"`, { cwd: process.cwd() });
      
      // Push changes
      execSync('git push origin main', { cwd: process.cwd() });
      
      this.log('Changes committed and pushed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to commit and push: ${error.message}`);
      return false;
    }
  }

  async monitorBuild() {
    this.log('Starting build monitoring cycle...');
    
    // Run lint check
    const lintResult = await this.runLint();
    
    // Run type check
    const typeResult = await this.runTypeCheck();
    
    // Run build
    const buildResult = await this.runBuild();
    
    if (!lintResult.success || !typeResult.success || !buildResult.success) {
      this.log('Build issues detected, attempting to fix...');
      
      // Try to fix issues
      await this.fixIssues();
      
      // Re-run checks
      const recheckLint = await this.runLint();
      const recheckType = await this.runTypeCheck();
      const recheckBuild = await this.runBuild();
      
      if (recheckLint.success && recheckType.success && recheckBuild.success) {
        this.log('All issues fixed successfully');
        await this.commitAndPush();
      } else {
        this.log('Some issues remain after fix attempt');
      }
    } else {
      this.log('All checks passed, build is healthy');
    }
  }

  async start() {
    this.log('Build Monitor started');
    
    // Run initial build check
    await this.monitorBuild();
    
    // Set up periodic monitoring every 4 hours
    setInterval(async () => {
      await this.monitorBuild();
    }, 4 * 60 * 60 * 1000);
  }
=======
>>>>>>> origin/merge-pr-12271
}

// Start the build monitor
const monitor = new BuildMonitor();
monitor.start().catch(console.error);

<<<<<<< HEAD
module.exports = BuildMonitor;
=======
module.exports = BuildMonitor;

>>>>>>> origin/merge-pr-12271
