<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");class AppMonitor { constructor() { this.projectRoot = process.cwd(); } log(message) {" console.log("[" + new Date().toISOString() + "] " + message); } async monitorAppHealth() {" this.log(" Monitoring App Health"); const healthChecks = { timestamp: new Date().toISOString(),"" status: "healthy"," checks: { filesystem: this.checkFilesystem()," dependencies: this.checkDependencies()," build: this.checkBuild()," tests: this.checkTests()}}; fs.writeFileSync(" path.join(this.projectRoot, "health-check.json"), JSON.stringify(healthChecks, null, 2) );" this.log(" Health check completed"); } checkFilesystem() {" const srcDir = path.join(this.projectRoot, "src"); return {"" status: fs.existsSync(srcDir) ? "ok" : "error"," message: fs.existsSync(srcDir)" ? "Source directory exists"" : "Source directory missing"}; } checkDependencies() {" const packageJson = path.join(this.projectRoot, "package.json"); return {"" status: fs.existsSync(packageJson) ? "ok" : "error"," message: fs.existsSync(packageJson)" ? "Package.json exists"" : "Package.json missing"}; } checkBuild() {" const buildDir = path.join(this.projectRoot, ".next"); return {"" status: fs.existsSync(buildDir) ? "ok" : "warning"," message: fs.existsSync(buildDir)" ? "Build directory exists"" : "Build directory not found"}; } checkTests() {" const testDir = path.join(this.projectRoot, "__tests__"); return {"" status: fs.existsSync(testDir) ? "ok" : "warning"," message: fs.existsSync(testDir)" ? "Test directory exists"" : "Test directory not found"}; }}const monitor = new AppMonitor();monitor.monitorAppHealth().catch(console.error);'"'"
=======
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

class AppMonitor {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.monitoringData = [];
    this.logFile = path.join(this.projectRoot, 'app-monitor.log');
  };
  log(message) {}
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;`
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  };
  checkFileSystem() {}
    try {}
      const stats = fs.statSync(this.projectRoot);
      return {}
        status: 'healthy',
        message: 'File system accessible',
        timestamp: new Date().toISOString();
      };
    } catch (error) {}
      return {}
        status: 'unhealthy',
        message: `File system error: ${error.message}`,`
        timestamp: new Date().toISOString();
      };
    };
  };
  checkDependencies() {}
    try {}
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {}
        return {}
          status: 'healthy',
          message: 'Dependencies available',
          timestamp: new Date().toISOString();
        };
      } else {}
        return {}
          status: 'unhealthy',
          message: 'package.json not found',
          timestamp: new Date().toISOString();
        };
      };
    } catch (error) {}
      return {}
        status: 'unhealthy',
        message: `Dependency check error: ${error.message}`,`
        timestamp: new Date().toISOString();
      };
    };
  };
  checkBuild() {}
    try {}
      const nextDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(nextDir)) {}
        return {}
          status: 'healthy',
          message: 'Build directory exists',
          timestamp: new Date().toISOString();
        };
      } else {}
        return {}
          status: 'warning',
          message: 'Build directory not found - run npm run build',
          timestamp: new Date().toISOString();
        };
      };
    } catch (error) {}
      return {}
        status: 'unhealthy',
        message: `Build check error: ${error.message}`,`
        timestamp: new Date().toISOString();
      };
    };
  };
  checkTests() {}
    try {}
      const testDir = path.join(this.projectRoot, '__tests__');
      if (fs.existsSync(testDir)) {}
        return {}
          status: 'healthy',
          message: 'Test directory exists',
          timestamp: new Date().toISOString();
        };
      } else {}
        return {}
          status: 'warning',
          message: 'No test directory found',
          timestamp: new Date().toISOString();
        };
      };
    } catch (error) {}
      return {}
        status: 'unhealthy',
        message: `Test check error: ${error.message}`,`
        timestamp: new Date().toISOString();
      };
    };
  };
  monitorAppHealth() {}
    this.log('🏥 Monitoring App Health');
    
    const healthChecks = {}
      filesystem: this.checkFileSystem(),
      dependencies: this.checkDependencies(),
      build: this.checkBuild(),
      tests: this.checkTests();
    };

<<<<<<< HEAD
  log(message) {
    .toISOString() + '] ' + message);
  }
=======
    this.monitoringData.push({})
      timestamp: new Date().toISOString(),
<<<<<<< HEAD
      status: 'healthy',
      checks: {
        filesystem: this.checkFilesystem(),
        dependencies: this.checkDependencies(),
        build: this.checkBuild(),
        tests: this.checkTests(),
      },
    };
    fs.writeFileSync(
      path.join(this.projectRoot, 'health-check.json'),
      JSON.stringify(healthChecks, null, 2)
    );
    this.log('✅ Health check completed');
  }

  checkFilesystem() {
    const srcDir = path.join(this.projectRoot, 'src');
    return {
      status: fs.existsSync(srcDir) ? 'ok' : 'error',
      message: fs.existsSync(srcDir)
        ? 'Source directory exists'
        : 'Source directory missing',
    };
  }

  checkDependencies() {
    const packageJson = path.join(this.projectRoot, 'package.json');
    return {
      status: fs.existsSync(packageJson) ? 'ok' : 'error',
      message: fs.existsSync(packageJson)
        ? 'Package.json exists'
        : 'Package.json missing',
=======
      checks: healthChecks;
    }
});
>>>>>>> main

    // Log results;
    Object.entries(healthChecks).forEach(([check, result]) => {}
      this.log(`${check}: ${result.status} - ${result.message}`);
    }
});

    return healthChecks;
  };
  generateReport() {}
    const report = {}
      timestamp: new Date().toISOString(),
      monitoringData: this.monitoringData,
      summary: {}
        totalChecks: this.monitoringData.length,
        lastCheck: this.monitoringData[this.monitoringData.length - 1];
      };
>>>>>>> main
    };

<<<<<<< HEAD
  checkBuild() {
    const buildDir = path.join(this.projectRoot, '.next');
    return {
      status: fs.existsSync(buildDir) ? 'ok' : 'warning',
      message: fs.existsSync(buildDir)
        ? 'Build directory exists'
        : 'Build directory not found',
    };
  }

  checkTests() {
    const testDir = path.join(this.projectRoot, '__tests__');
    return {
      status: fs.existsSync(testDir) ? 'ok' : 'warning',
      message: fs.existsSync(testDir)
        ? 'Test directory exists'
        : 'Test directory not found',
    };
  }
}

const monitor = new AppMonitor();
monitor.monitorAppHealth().catch(console.error);
=======
    const reportPath = path.join(this.projectRoot, 'monitoring-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Monitoring report generated: ${reportPath}`);
  };
  async run() {}
    this.log('🚀 Starting App Monitor...');
    
    try {}
      this.monitorAppHealth();
      this.generateReport();
      this.log('✅ App Monitor completed successfully!');
    } catch (error) {}
      this.log(`❌ App Monitor failed: ${error.message}`);
    };
  };
};
// Run the monitor if this file is executed directly;
if (require.main === module) {}
  const monitor = new AppMonitor();
  monitor.run();
};
module.exports = AppMonitor;
>>>>>>> main
>>>>>>> main
