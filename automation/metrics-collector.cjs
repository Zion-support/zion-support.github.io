#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');

class PerformanceMetricsCollector {
  constructor() {
    this.metrics = new Map();
    this.performanceHistory = [];
    this.systemMetrics = new Map();
    this.logFile = path.join(__dirname, 'logs', 'metrics-collector.log');
    this.ensureLogDirectory();
    this.initializeMetrics();
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
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  initializeMetrics() {
    this.metrics.set('system', {
      cpu: [],
      memory: [],
      disk: [],
      network: []
    });

    this.metrics.set('application', {
      build: [],
      runtime: [],
      errors: [],
      performance: []
    });

    this.metrics.set('development', {
      git: [],
      dependencies: [],
      tests: [],
      quality: []
    });
  }

  async collectSystemMetrics() {
    try {
      this.log('💻 Collecting system metrics...');
      
      const timestamp = new Date().toISOString();
      
      // CPU metrics
      const cpuUsage = os.loadavg();
      const cpuMetrics = {
        timestamp,
        load1: cpuUsage[0],
        load5: cpuUsage[1],
        load15: cpuUsage[2],
        cores: os.cpus().length,
        model: os.cpus()[0]?.model || 'Unknown'
      };

      // Memory metrics
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const usedMem = totalMem - freeMem;
      
      const memoryMetrics = {
        timestamp,
        total: totalMem,
        free: freeMem,
        used: usedMem,
        usagePercent: ((usedMem / totalMem) * 100).toFixed(2),
        totalGB: (totalMem / 1024 / 1024 / 1024).toFixed(2),
        usedGB: (usedMem / 1024 / 1024 / 1024).toFixed(2)
      };

      // Disk metrics
      const diskMetrics = await this.collectDiskMetrics();

      // Network metrics
      const networkMetrics = await this.collectNetworkMetrics();

      // Store metrics
      this.metrics.get('system').cpu.push(cpuMetrics);
      this.metrics.get('system').memory.push(memoryMetrics);
      this.metrics.get('system').disk.push(diskMetrics);
      this.metrics.get('system').network.push(networkMetrics);

      // Keep only last 1000 metrics per category
      this.trimMetricsHistory();

      this.log(`✅ System metrics collected: CPU ${cpuMetrics.load1.toFixed(2)}, Memory ${memoryMetrics.usagePercent}%`);
      
    } catch (error) {
      this.log(`❌ Error collecting system metrics: ${error.message}`);
    }
  }

  async collectDiskMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Get disk usage for current directory
      const diskUsage = execSync('df -h .', { encoding: 'utf8' });
      const lines = diskUsage.split('\n');
      
      if (lines.length > 1) {
        const parts = lines[1].split(/\s+/);
        if (parts.length >= 5) {
          return {
            timestamp,
            total: parts[1],
            used: parts[2],
            available: parts[3],
            usagePercent: parts[4].replace('%', ''),
            mountPoint: parts[5] || '.'
          };
        }
      }
      
      return {
        timestamp,
        error: 'Could not parse disk usage'
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async collectNetworkMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Get network interface information
      const networkInterfaces = os.networkInterfaces();
      const activeInterfaces = [];
      
      for (const [name, interfaces] of Object.entries(networkInterfaces)) {
        for (const interface of interfaces) {
          if (interface.family === 'IPv4' && !interface.internal) {
            activeInterfaces.push({
              name,
              address: interface.address,
              netmask: interface.netmask,
              family: interface.family
            });
          }
        }
      }
      
      return {
        timestamp,
        interfaces: activeInterfaces,
        count: activeInterfaces.length
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async collectApplicationMetrics() {
    try {
      this.log('📱 Collecting application metrics...');
      
      const timestamp = new Date().toISOString();
      
      // Build metrics
      const buildMetrics = await this.collectBuildMetrics();
      
      // Runtime metrics
      const runtimeMetrics = await this.collectRuntimeMetrics();
      
      // Error metrics
      const errorMetrics = await this.collectErrorMetrics();
      
      // Performance metrics
      const performanceMetrics = await this.collectPerformanceMetrics();
      
      // Store metrics
      this.metrics.get('application').build.push(buildMetrics);
      this.metrics.get('application').runtime.push(runtimeMetrics);
      this.metrics.get('application').errors.push(errorMetrics);
      this.metrics.get('application').performance.push(performanceMetrics);
      
      this.log('✅ Application metrics collected');
      
    } catch (error) {
      this.log(`❌ Error collecting application metrics: ${error.message}`);
    }
  }

  async collectBuildMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Check if build directory exists and get size
      let buildSize = 0;
      let buildFiles = 0;
      
      if (fs.existsSync('dist')) {
        buildFiles = this.countFilesRecursively('dist');
        buildSize = this.getDirectorySize('dist');
      }
      
      // Check build configuration files
      const hasViteConfig = fs.existsSync('vite.config.ts') || fs.existsSync('vite.config.js');
      const hasWebpackConfig = fs.existsSync('webpack.config.js');
      const hasRollupConfig = fs.existsSync('rollup.config.js');
      
      return {
        timestamp,
        buildSize,
        buildSizeMB: (buildSize / 1024 / 1024).toFixed(2),
        buildFiles,
        hasViteConfig,
        hasWebpackConfig,
        hasRollupConfig,
        buildSystem: hasViteConfig ? 'vite' : hasWebpackConfig ? 'webpack' : hasRollupConfig ? 'rollup' : 'unknown'
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async collectRuntimeMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Get Node.js process information
      const processInfo = {
        pid: process.pid,
        version: process.version,
        platform: process.platform,
        arch: process.arch,
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage()
      };
      
      // Check if development server is running
      const devServerRunning = await this.checkDevServerStatus();
      
      return {
        timestamp,
        process: processInfo,
        devServerRunning,
        environment: process.env.NODE_ENV || 'development'
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async collectErrorMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Check for error logs
      const errorLogs = [];
      const logDir = path.join(__dirname, 'logs');
      
      if (fs.existsSync(logDir)) {
        const logFiles = fs.readdirSync(logDir);
        for (const file of logFiles) {
          if (file.endsWith('.log')) {
            const logPath = path.join(logDir, file);
            const content = fs.readFileSync(logPath, 'utf8');
            const errorLines = content.split('\n').filter(line => 
              line.includes('ERROR') || line.includes('❌') || line.includes('error')
            );
            
            if (errorLines.length > 0) {
              errorLogs.push({
                file,
                errorCount: errorLines.length,
                lastError: errorLines[errorLines.length - 1]
              });
            }
          }
        }
      }
      
      return {
        timestamp,
        totalErrors: errorLogs.reduce((sum, log) => sum + log.errorCount, 0),
        errorLogs,
        errorFiles: errorLogs.length
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async collectPerformanceMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Measure file system performance
      const fsPerformance = await this.measureFileSystemPerformance();
      
      // Measure process performance
      const processPerformance = {
        cpuUsage: process.cpuUsage(),
        memoryUsage: process.memoryUsage(),
        resourceUsage: process.resourceUsage()
      };
      
      return {
        timestamp,
        fileSystem: fsPerformance,
        process: processPerformance
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async collectDevelopmentMetrics() {
    try {
      this.log('🛠️ Collecting development metrics...');
      
      const timestamp = new Date().toISOString();
      
      // Git metrics
      const gitMetrics = await this.collectGitMetrics();
      
      // Dependency metrics
      const dependencyMetrics = await this.collectDependencyMetrics();
      
      // Test metrics
      const testMetrics = await this.collectTestMetrics();
      
      // Quality metrics
      const qualityMetrics = await this.collectQualityMetrics();
      
      // Store metrics
      this.metrics.get('development').git.push(gitMetrics);
      this.metrics.get('development').dependencies.push(dependencyMetrics);
      this.metrics.get('development').tests.push(testMetrics);
      this.metrics.get('development').quality.push(qualityMetrics);
      
      this.log('✅ Development metrics collected');
      
    } catch (error) {
      this.log(`❌ Error collecting development metrics: ${error.message}`);
    }
  }

  async collectGitMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Check if git repository exists
      if (!fs.existsSync('.git')) {
        return {
          timestamp,
          isGitRepo: false
        };
      }
      
      // Get git status
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      const statusLines = gitStatus.split('\n').filter(line => line.trim());
      
      // Get git log
      const gitLog = execSync('git log --oneline -10', { encoding: 'utf8' });
      const commitCount = gitLog.split('\n').filter(line => line.trim()).length;
      
      // Get branch information
      const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      
      return {
        timestamp,
        isGitRepo: true,
        currentBranch,
        modifiedFiles: statusLines.length,
        recentCommits: commitCount,
        hasUncommittedChanges: statusLines.length > 0
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async collectDependencyMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Check package.json files
      const packageFiles = ['package.json', 'server/package.json'];
      const dependencyInfo = [];
      
      for (const packageFile of packageFiles) {
        if (fs.existsSync(packageFile)) {
          const packageContent = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
          const deps = packageContent.dependencies || {};
          const devDeps = packageContent.devDependencies || {};
          
          dependencyInfo.push({
            file: packageFile,
            dependencies: Object.keys(deps).length,
            devDependencies: Object.keys(devDeps).length,
            total: Object.keys(deps).length + Object.keys(devDeps).length
          });
        }
      }
      
      // Check for lock files
      const hasPackageLock = fs.existsSync('package-lock.json');
      const hasYarnLock = fs.existsSync('yarn.lock');
      
      return {
        timestamp,
        packages: dependencyInfo,
        totalDependencies: dependencyInfo.reduce((sum, pkg) => sum + pkg.total, 0),
        hasPackageLock,
        hasYarnLock,
        lockFileType: hasPackageLock ? 'npm' : hasYarnLock ? 'yarn' : 'none'
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async collectTestMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Check for test files
      const testFiles = this.findTestFiles();
      
      // Check for test configuration
      const hasJestConfig = fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs');
      const hasVitestConfig = fs.existsSync('vitest.config.ts') || fs.existsSync('vitest.config.js');
      
      return {
        timestamp,
        testFiles: testFiles.length,
        testFileTypes: [...new Set(testFiles.map(f => path.extname(f)))],
        hasJestConfig,
        hasVitestConfig,
        testFramework: hasJestConfig ? 'jest' : hasVitestConfig ? 'vitest' : 'unknown'
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async collectQualityMetrics() {
    try {
      const timestamp = new Date().toISOString();
      
      // Check for linting configuration
      const hasEslintConfig = fs.existsSync('.eslintrc.js') || fs.existsSync('.eslintrc.json') || fs.existsSync('eslint.config.js');
      const hasPrettierConfig = fs.existsSync('.prettierrc') || fs.existsSync('.prettierrc.js') || fs.existsSync('prettier.config.js');
      
      // Check for TypeScript configuration
      const hasTsConfig = fs.existsSync('tsconfig.json');
      
      // Count source files
      const sourceFiles = this.countSourceFiles();
      
      return {
        timestamp,
        hasEslintConfig,
        hasPrettierConfig,
        hasTsConfig,
        sourceFiles,
        qualityTools: {
          linting: hasEslintConfig,
          formatting: hasPrettierConfig,
          typeChecking: hasTsConfig
        }
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async measureFileSystemPerformance() {
    try {
      const timestamp = Date.now();
      
      // Measure file read performance
      const testFile = path.join(__dirname, 'logs', 'test-performance.txt');
      fs.writeFileSync(testFile, 'Performance test content');
      
      const readStart = Date.now();
      fs.readFileSync(testFile, 'utf8');
      const readTime = Date.now() - readStart;
      
      // Clean up test file
      fs.unlinkSync(testFile);
      
      return {
        timestamp: new Date().toISOString(),
        fileReadTime: readTime,
        performance: readTime < 10 ? 'excellent' : readTime < 50 ? 'good' : 'poor'
      };
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async checkDevServerStatus() {
    try {
      // Check if any process is using common dev ports
      const ports = [3000, 5000, 8080, 5173];
      
      for (const port of ports) {
        try {
          execSync(`lsof -i :${port}`, { stdio: 'pipe' });
          return { running: true, port };
        } catch (error) {
          // Port not in use
        }
      }
      
      return { running: false, port: null };
    } catch (error) {
      return { running: false, port: null, error: error.message };
    }
  }

  findTestFiles() {
    const testFiles = [];
    const testDirs = ['tests', 'test', '__tests__', 'src'];
    
    for (const dir of testDirs) {
      if (fs.existsSync(dir)) {
        testFiles.push(...this.findFilesRecursively(dir, /\.(test|spec)\.(js|jsx|ts|tsx)$/));
      }
    }
    
    return testFiles;
  }

  countSourceFiles() {
    const sourceDirs = ['src', 'server', 'components'];
    let count = 0;
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        count += this.countFilesRecursively(dir, /\.(js|jsx|ts|tsx)$/).length;
      }
    }
    
    return count;
  }

  findFilesRecursively(dir, pattern) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findFilesRecursively(fullPath, pattern));
      } else if (pattern.test(fullPath)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  countFilesRecursively(dir, pattern) {
    return this.findFilesRecursively(dir, pattern).length;
  }

  getDirectorySize(dir) {
    let size = 0;
    
    if (!fs.existsSync(dir)) return size;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath);
      } else {
        size += stat.size;
      }
    }
    
    return size;
  }

  trimMetricsHistory() {
    const maxMetrics = 1000;
    
    for (const category of this.metrics.values()) {
      for (const metricType in category) {
        if (Array.isArray(category[metricType]) && category[metricType].length > maxMetrics) {
          category[metricType] = category[metricType].slice(-maxMetrics);
        }
      }
    }
  }

  async generateMetricsReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        systemMetrics: this.metrics.get('system'),
        applicationMetrics: this.metrics.get('application'),
        developmentMetrics: this.metrics.get('development')
      },
      currentStatus: await this.getCurrentStatus()
    };

    const reportPath = path.join(__dirname, 'logs', 'performance-metrics-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Performance metrics report saved: ${reportPath}`);
    return report;
  }

  async getCurrentStatus() {
    const latestSystem = {};
    const latestApp = {};
    const latestDev = {};
    
    // Get latest metrics for each category
    for (const [category, metrics] of this.metrics) {
      for (const [type, values] of Object.entries(metrics)) {
        if (Array.isArray(values) && values.length > 0) {
          if (category === 'system') {
            latestSystem[type] = values[values.length - 1];
          } else if (category === 'application') {
            latestApp[type] = values[values.length - 1];
          } else if (category === 'development') {
            latestDev[type] = values[values.length - 1];
          }
        }
      }
    }
    
    return {
      system: latestSystem,
      application: latestApp,
      development: latestDev
    };
  }

  async startContinuousCollection() {
    this.log('🚀 Starting continuous performance metrics collection...');
    
    // Initial collection
    await this.collectSystemMetrics();
    await this.collectApplicationMetrics();
    await this.collectDevelopmentMetrics();
    
    // Schedule periodic collection
    setInterval(async () => {
      await this.collectSystemMetrics();
    }, 30000); // Every 30 seconds
    
    setInterval(async () => {
      await this.collectApplicationMetrics();
    }, 60000); // Every minute
    
    setInterval(async () => {
      await this.collectDevelopmentMetrics();
    }, 300000); // Every 5 minutes
    
    // Generate reports periodically
    setInterval(async () => {
      await this.generateMetricsReport();
    }, 900000); // Every 15 minutes
    
    this.log('✅ Continuous metrics collection started');
  }

  getStatus() {
    return {
      running: true,
      metricsCollected: {
        system: this.metrics.get('system'),
        application: this.metrics.get('application'),
        development: this.metrics.get('development')
      },
      lastCollection: new Date().toISOString()
    };
  }
}

// CLI handling
const collector = new PerformanceMetricsCollector();
const command = process.argv[2];

switch (command) {
  case 'start':
    collector.startContinuousCollection();
    break;
  case 'collect':
    collector.collectSystemMetrics();
    collector.collectApplicationMetrics();
    collector.collectDevelopmentMetrics();
    break;
  case 'report':
    collector.generateMetricsReport();
    break;
  case 'status':
    console.log(JSON.stringify(collector.getStatus(), null, 2));
    break;
  default:
    collector.startContinuousCollection();
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Performance Metrics Collector...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Performance Metrics Collector...');
  process.exit(0);
});