#!/usr/bin/env node

/**
 * PM2 Build Optimizer Script
 * Optimizes build processes and bundle sizes
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

class BuildOptimizer {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer';
    this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true';
    this.treeShaking = process.env.TREE_SHAKING === 'true';
    this.codeSplitting = process.env.CODE_SPLITTING === 'true';
    this.minification = process.env.MINIFICATION === 'true';
    this.logFile = `logs/pm2/build-optimizer.log`;
    this.errorFile = `logs/pm2/build-optimizer-error.log`;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [${this.processName}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  error(message) {
    this.log(message, 'ERROR');
    fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);
  }

  async analyzeBundleSize() {
    this.log('Analyzing bundle sizes...');
    
    try {
      const distPath = 'dist';
      if (!fs.existsSync(distPath)) {
        this.log('No dist directory found, running build first...');
        execSync('npm run build', { stdio: 'pipe' });
      }
      
      const bundleSizes = {};
      
      function analyzeDirectory(dir, prefix = '') {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            analyzeDirectory(fullPath, `${prefix}${item}/`);
          } else {
            const size = stat.size;
            const sizeKB = (size / 1024).toFixed(2);
            bundleSizes[`${prefix}${item}`] = {
              size,
              sizeKB: parseFloat(sizeKB),
              sizeMB: (size / (1024 * 1024)).toFixed(2)
            };
          }
        }
      }
      
      analyzeDirectory(distPath);
      
      // Find largest files
      const sortedSizes = Object.entries(bundleSizes)
        .sort(([,a], [,b]) => b.size - a.size)
        .slice(0, 10);
      
      this.log('Top 10 largest files:');
      sortedSizes.forEach(([file, info]) => {
        this.log(`  ${file}: ${info.sizeKB}KB (${info.sizeMB}MB)`);
      });
      
      return {
        success: true,
        bundleSizes,
        totalSize: Object.values(bundleSizes).reduce((sum, info) => sum + info.size, 0),
        largestFiles: sortedSizes
      };
      
    } catch (error) {
      this.error(`Bundle analysis failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async optimizeBuild() {
    this.log('Starting build optimization...');
    
    try {
      const optimizations = [];
      
      // Check if we can run build with optimizations
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const buildScript = packageJson.scripts?.build;
      
      if (!buildScript) {
        this.log('No build script found in package.json', 'WARNING');
        return { success: false, message: 'No build script configured' };
      }
      
      // Run build
      this.log(`Running build: ${buildScript}`);
      execSync(buildScript, { stdio: 'pipe' });
      
      // Analyze bundle after build
      const bundleAnalysis = await this.analyzeBundleSize();
      
      if (bundleAnalysis.success) {
        optimizations.push('Build completed successfully');
        
        // Check for optimization opportunities
        const largeFiles = bundleAnalysis.largestFiles.filter(([, info]) => info.sizeKB > 500);
        if (largeFiles.length > 0) {
          optimizations.push(`Found ${largeFiles.length} files larger than 500KB`);
        }
        
        // Check total bundle size
        const totalSizeMB = bundleAnalysis.totalSize / (1024 * 1024);
        if (totalSizeMB > 5) {
          optimizations.push(`Total bundle size ${totalSizeMB.toFixed(2)}MB is large`);
        }
      }
      
      return {
        success: true,
        optimizations,
        bundleAnalysis
      };
      
    } catch (error) {
      this.error(`Build optimization failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkTreeShaking() {
    this.log('Checking tree shaking effectiveness...');
    
    try {
      // Look for unused imports in source files
      const sourceFiles = this.getSourceFiles();
      const unusedImports = [];
      
      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            // Simple check for unused imports (this is basic)
            if (line.includes('import') && line.includes('from')) {
              const importMatch = line.match(/import\s+.*\s+from\s+['"]([^'"]+)['"]/);
              if (importMatch) {
                const importPath = importMatch[1];
                // Check if the imported module is used in the file
                const restOfFile = content.substring(content.indexOf(line) + line.length);
                if (!restOfFile.includes(importPath.split('/').pop().split('.')[0])) {
                  unusedImports.push({
                    file,
                    line: index + 1,
                    import: line.trim()
                  });
                }
              }
            }
          });
        } catch (err) {
          // Skip files that can't be read
        }
      }
      
      this.log(`Found ${unusedImports.length} potentially unused imports`);
      
      return {
        success: true,
        unusedImports,
        totalUnused: unusedImports.length
      };
      
    } catch (error) {
      this.error(`Tree shaking check failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  getSourceFiles() {
    const files = [];
    const extensions = ['.js', '.ts', '.jsx', '.tsx'];
    
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
            scanDirectory(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (err) {
        // Skip directories that can't be read
      }
    }
    
    scanDirectory('src');
    return files;
  }

  async generateOptimizationReport() {
    this.log('Generating build optimization report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      optimizations: {},
      summary: {}
    };
    
    try {
      // Run optimizations
      report.optimizations.build = await this.optimizeBuild();
      report.optimizations.treeShaking = await this.checkTreeShaking();
      
      // Generate summary
      const buildSuccess = report.optimizations.build?.success || false;
      const treeShakingIssues = report.optimizations.treeShaking?.totalUnused || 0;
      
      report.summary = {
        buildOptimized: buildSuccess,
        treeShakingIssues,
        overallStatus: buildSuccess && treeShakingIssues < 10 ? 'OPTIMIZED' : 'NEEDS_ATTENTION'
      };
      
      // Save report
      const reportFile = `reports/build-optimization-report-${Date.now()}.json`;
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Build optimization report saved to ${reportFile}`);
      
      return report;
      
    } catch (error) {
      this.error(`Failed to generate optimization report: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async start() {
    this.log('Build optimizer service started');
    
    // Ensure directories exist
    fs.mkdirSync('logs/pm2', { recursive: true });
    fs.mkdirSync('reports', { recursive: true });
    
    // Run initial optimization
    await this.generateOptimizationReport();
    
    // Set up periodic optimization
    setInterval(async () => {
      this.log('Running scheduled build optimization...');
      await this.generateOptimizationReport();
    }, 24 * 60 * 60 * 1000); // Every 24 hours
    
    this.log('Build optimizer service is running');
  }
}

// Start the service
if (require.main === module) {
  const buildOptimizer = new BuildOptimizer();
  buildOptimizer.start().catch(error => {
    console.error('Build optimizer failed to start:', error);
    process.exit(1);
  });
}

export default BuildOptimizer;