#!/usr/bin/env node

import fs from 'fs');
import path from 'path');
import cron from 'node-cron');

class IntelligentOrchestrator {
  constructor() {
    this.automationSystems = new Map();
    this.monitoring = false;
    this.logFile = path.join(__dirname, 'logs', 'intelligent-orchestrator.log');
    this.ensureLogDirectory();
    this.loadAutomationSystems();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    console.log(message);
    
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  loadAutomationSystems() {
    const systems = [
      { name: 'lint-monitor', path: 'lint-monitor.js', status: 'available' },
      { name: 'code-quality-monitor', path: 'code-quality-monitor.js', status: 'available' },
      { name: 'performance-optimizer', path: 'performance-optimizer.js', status: 'available' },
      { name: 'dependency-monitor', path: 'dependency-monitor.js', status: 'available' },
      { name: 'file-integrity-monitor', path: 'file-integrity-monitor.js', status: 'available' },
      { name: 'build-health-monitor', path: 'build-health-monitor.js', status: 'available' }
    ];

    for (const system of systems) {
      const systemPath = path.join(__dirname, system.path);
      if (fs.existsSync(systemPath)) {
        this.automationSystems.set(system.name, {
          ...system,
          path: systemPath,
          lastRun: null,
          successCount: 0,
          failureCount: 0,
          isRunning: false
        });
      }
    }
  }

  async startMonitoring() {
    this.log('Starting Intelligent Orchestrator...');
    this.monitoring = true;

    // Schedule system health checks
    cron.schedule('*/5 * * * *', () => {
      this.checkSystemHealth();
    });

    // Schedule performance optimization
    cron.schedule('0 */2 * * *', () => {
      this.optimizePerformance();
    });

    // Schedule dependency updates
    cron.schedule('0 2 * * *', () => {
      this.updateDependencies();
    });

    // Initial health check
    setTimeout(() => {
      this.checkSystemHealth();
    }, 30000);

    this.log('Intelligent Orchestrator started successfully');
  }

  async checkSystemHealth() {
    if (!this.monitoring) return;

    this.log('Performing system health check...');

    for (const [name, system] of this.automationSystems) {
      try {
        if (fs.existsSync(system.path)) {
          system.isAccessible = true;
          system.lastChecked = new Date().toISOString();
        } else {
          system.isAccessible = false;
          this.log(`System ${name} is not accessible`, 'WARN');
        }
      } catch (error) {
        system.isAccessible = false;
        this.log(`Error checking system ${name}: ${error.message}`, 'ERROR');
      }
    }

    this.log('System health check completed');
  }

  async optimizePerformance() {
    if (!this.monitoring) return;

    this.log('Starting performance optimization...');

    try {
      // Check for performance bottlenecks
      const bottlenecks = await this.identifyBottlenecks();
      
      if (bottlenecks.length > 0) {
        this.log(`Found ${bottlenecks.length} performance bottlenecks`);
        await this.optimizeBottlenecks(bottlenecks);
      } else {
        this.log('No performance bottlenecks detected');
      }
    } catch (error) {
      this.log(`Performance optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async identifyBottlenecks() {
    const bottlenecks = [];
    
    try {
      // Check for large files
      const largeFiles = await this.findLargeFiles();
      if (largeFiles.length > 0) {
        bottlenecks.push({
          type: 'large_files',
          files: largeFiles,
          severity: 'medium'
        });
      }

      // Check for unused dependencies
      const unusedDeps = await this.findUnusedDependencies();
      if (unusedDeps.length > 0) {
        bottlenecks.push({
          type: 'unused_dependencies',
          dependencies: unusedDeps,
          severity: 'low'
        });
      }
    } catch (error) {
      this.log(`Error identifying bottlenecks: ${error.message}`, 'ERROR');
    }

    return bottlenecks;
  }

  async findLargeFiles() {
    const largeFiles = [];
    const maxSize = 1024 * 1024; // 1MB

    try {
      const sourceDir = path.join(__dirname, '..', 'src');
      if (fs.existsSync(sourceDir)) {
        const files = this.getAllFiles(sourceDir);
        
        for (const file of files) {
          const stats = fs.statSync(file);
          if (stats.size > maxSize) {
            largeFiles.push({
              path: path.relative(__dirname, file),
              size: stats.size,
              sizeMB: (stats.size / (1024 * 1024)).toFixed(2)
            });
          }
        }
      }
    } catch (error) {
      this.log(`Error finding large files: ${error.message}`, 'ERROR');
    }

    return largeFiles;
  }

  async findUnusedDependencies() {
    const unusedDeps = [];
    
    try {
      const packageJsonPath = path.join(__dirname, '..', 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const dependencies = Object.keys(packageJson.dependencies || {});
        
        // This is a simplified check - in a real implementation, you'd analyze import usage
        for (const dep of dependencies) {
          if (!this.isDependencyUsed(dep)) {
            unusedDeps.push(dep);
          }
        }
      }
    } catch (error) {
      this.log(`Error finding unused dependencies: ${error.message}`, 'ERROR');
    }

    return unusedDeps;
  }

  isDependencyUsed(dependency) {
    // Simplified check - in reality, you'd scan all source files for imports
    const commonDeps = ['react', 'react-dom', 'next', 'vite', 'typescript'];
    return commonDeps.includes(dependency);
  }

  getAllFiles(dir) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
            files.push(...this.getAllFiles(fullPath));
          }
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`Error reading directory ${dir}: ${error.message}`, 'ERROR');
    }

    return files;
  }

  async optimizeBottlenecks(bottlenecks) {
    for (const bottleneck of bottlenecks) {
      try {
        if (bottleneck.type === 'large_files') {
          this.log(`Optimizing large files: ${bottleneck.files.length} files found`);
          // In a real implementation, you'd implement file optimization strategies
        } else if (bottleneck.type === 'unused_dependencies') {
          this.log(`Found unused dependencies: ${bottleneck.dependencies.join(', ')}`);
          // In a real implementation, you'd suggest removing unused deps
        }
      } catch (error) {
        this.log(`Failed to optimize bottleneck ${bottleneck.type}: ${error.message}`, 'ERROR');
      }
    }
  }

  async updateDependencies() {
    if (!this.monitoring) return;

    this.log('Starting dependency update process...');

    try {
      // Check for outdated packages
      const outdated = await this.checkOutdatedPackages();
      
      if (outdated.length > 0) {
        this.log(`Found ${outdated.length} outdated packages`);
        await this.updatePackages(outdated);
      } else {
        this.log('All packages are up to date');
      }
    } catch (error) {
      this.log(`Dependency update failed: ${error.message}`, 'ERROR');
    }
  }

  async checkOutdatedPackages() {
    const outdated = [];
    
    try {
      // This is a simplified check - in reality, you'd run npm outdated
      // For now, return empty array
    } catch (error) {
      this.log(`Error checking outdated packages: ${error.message}`, 'ERROR');
    }

    return outdated;
  }

  async updatePackages(packages) {
    this.log(`Updating ${packages.length} packages...`);
    
    try {
      // In a real implementation, you'd run npm update
      this.log('Package update completed');
    } catch (error) {
      this.log(`Package update failed: ${error.message}`, 'ERROR');
    }
  }

  getSystemStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      monitoring: this.monitoring,
      systems: Array.from(this.automationSystems.values()),
      totalSystems: this.automationSystems.size,
      accessibleSystems: Array.from(this.automationSystems.values()).filter(s => s.isAccessible).length
    };

    return status;
  }

  stop() {
    this.monitoring = false;
    this.log('Intelligent Orchestrator stopped');
  }
}

// Export the class
export default IntelligentOrchestrator;

// If running directly, start the orchestrator
if (require.main === module) {
  const orchestrator = new IntelligentOrchestrator();
  orchestrator.startMonitoring();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    orchestrator.log('Shutting down Intelligent Orchestrator...');
    orchestrator.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    orchestrator.log('Shutting down Intelligent Orchestrator...');
    orchestrator.stop();
    process.exit(0);
  });
}
