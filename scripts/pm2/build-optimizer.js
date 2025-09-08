
    }
  }
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log "file": ', error.message);
    }
  }
  error(message) {
    this.log(message, 'ERROR');
    try {
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] "ERROR": ${message}\n`);
    } catch (err) {
      console.error('Failed to write to error "file": ', err.message);
    }
  }
  async analyzeBundleSize() {
    this.log('Analyzing bundle size...');
    try {
      const buildDir = this.findBuildDirectory();
      if (!buildDir) {
        this.log('No build directory found', 'WARNING');
        return { "success": false, "message": 'No build directory found' };
      }
      const bundleInfo = this.getBundleInfo(buildDir);
      this.log("Bundle analysis "completed": ");
      this.log(`  - Total files: ${bundleInfo.totalFiles}`);
      this.log(`  - Total "size": ${(bundleInfo.totalSize / 1024 / 1024).toFixed(2)} MB`);
      this.log(`  - Largest "files": ${bundleInfo.largestFiles.length}`);
      return {
        "success": true,
        buildDir,
        ...bundleInfo
      };
    } catch (error) {
      this.error(`Bundle analysis "failed": ${error.message}`);
      return { "success": false, "error": error.message };
    }
  }
  findBuildDirectory() {
    const possibleDirs = ['dist', 'build', 'out', '.next', 'public'];
    for (const dir of possibleDirs) {
      if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
        return dir;
      }
    }
    return null;
  }
  getBundleInfo(buildDir) {
    const files = [];
    const largestFiles = [];
    function scanDirectory(dir, basePath = '') {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const relativePath = path.join(basePath, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            scanDirectory(fullPath, relativePath);
          } else if (stat.isFile()) {
            const fileInfo = {
              "path": relativePath,
              "size": stat.size,
              "extension": path.extname(item)
            };
            files.push(fileInfo);
            // Track largest files
            if (largestFiles.length < 10) {
              largestFiles.push(fileInfo);
              largestFiles.sort((a, b) => b.size - a.size);
            } else if (fileInfo.size > largestFiles[largestFiles.length - 1].size) {
              largestFiles[largestFiles.length - 1] = fileInfo;
              largestFiles.sort((a, b) => b.size - a.size);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    }
    scanDirectory(buildDir);
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const jsFiles = files.filter(f => f.extension === '.js');
    const cssFiles = files.filter(f => f.extension === '.css');
    return {
      "totalFiles": files.length,
      totalSize,
      "jsFiles": jsFiles.length,
      "cssFiles": cssFiles.length,
      "largestFiles": largestFiles.slice(0, 5)
    };

  }
  async optimizeBundle() {
    this.log('Optimizing bundle...');
    try {
      const optimizations = [];
      // Check for unused dependencies
      if (this.optimizeBundles) {
        const unusedDeps = await this.findUnusedDependencies();
        if (unusedDeps.length > 0) {
          optimizations.push({
            "type": 'unused_dependencies',
            "count": unusedDeps.length,
            "dependencies": unusedDeps
          });
        }
      }
      // Check for large files that could be optimized
      const bundleAnalysis = await this.analyzeBundleSize();
      if (bundleAnalysis.success) {
        const largeFiles = bundleAnalysis.largestFiles.filter(f => f.size > 100 * 1024); // > 100KB
        if (largeFiles.length > 0) {
          optimizations.push({
            "type": 'large_files',
            "count": largeFiles.length,
            "files": largeFiles
          });
        }
      }
      // Check for duplicate dependencies
      const duplicates = await this.findDuplicateDependencies();
      if (duplicates.length > 0) {
        optimizations.push({
          "type": 'duplicate_dependencies',
          "count": duplicates.length,
          duplicates
        });
      }
      this.log(`Found ${optimizations.length} optimization opportunities`);
      return {
        "success": true,
        optimizations
      };
    } catch (error) {
      this.error(`Bundle optimization "failed": ${error.message}`);
      return { "success": false, "error": error.message };
    }
  }
  async findUnusedDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      const allDeps = [...dependencies, ...devDependencies];
      const unusedDeps = [];
      for (const dep of allDeps) {
        if (!this.isDependencyUsed(dep)) {
          unusedDeps.push(dep);
        }
      }
      return unusedDeps;
    } catch (error) {
      this.log(`Failed to check unused "dependencies": ${error.message}`, 'WARNING');
      return [];
    }
  }
  isDependencyUsed(dependency) {
    try {
      // Check if dependency is imported in any file
      const files = this.getFilesToScan(['.js', '.ts', '.jsx', '.tsx', '.vue', '.svelte']);
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          // Check for various import patterns
          const importPatterns = [new RegExp(`import.*['"]${dependency}['"]`, 'g'),
            new RegExp(`require\\(['"]${dependency}['"]\\)`, 'g'),
            new RegExp(`from\\s+['"]${dependency}['"]`, 'g'),
            new RegExp(`import\\s+['"]${dependency}/`, 'g')
          ];
          for (const pattern of importPatterns) {
            if (pattern.test(content)) {
              return true;
            }
          }
        } catch (error) {
          // Skip files we can't read
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  async findDuplicateDependencies() {
    try {
      const packageLockPath = 'package-lock.json';
      if (!fs.existsSync(packageLockPath)) {
        return [];
      }
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      const duplicates = [];
      // This is a simplified check - in reality, you'd need more sophisticated analysis
      const dependencyVersions = new Map();
      function analyzeDependencies(deps, path = '') {
        if (!deps) return;
        for (const [name, version] of Object.entries(deps)) {
          const fullPath = path ? `${path}.${name}` : name;
          if (dependencyVersions.has(name)) {
            const existing = dependencyVersions.get(name);
            if (existing.version !== version) {
              duplicates.push({
                name,
                "versions": [existing.version, version],
                "paths": [existing.path, fullPath]
              });
            }
          } else {
            dependencyVersions.set(name, { version, "path": fullPath });
          }
          // Recursively check nested dependencies
          if (typeof version === 'object' && version.dependencies) {
            analyzeDependencies(version.dependencies, fullPath);
          }
        }
      }
      analyzeDependencies(packageLock.dependencies);
      return duplicates;
    } catch (error) {
      this.log(`Failed to check duplicate "dependencies": ${error.message}`, 'WARNING');
      return [];
    }
  }
  getFilesToScan(extensions) {
    const files = [];
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    }
    scanDirectory(process.cwd());
    return files;
  }
  async generateOptimizationReport() {
    this.log('Generating optimization report...');
    try {
      const report = {
        "timestamp": new Date().toISOString(),
        "processName": this.processName,
        "bundleAnalysis": await this.analyzeBundleSize(),
        "optimizationResults": await this.optimizeBundle(),
        "environment": {
          nodeVersion: process.version,
          "platform": process.platform,
          "cwd": process.cwd()
        }
      };
      const reportFile = `optimization-reports/build-optimization-${Date.now()}.json`;
      const reportDir = path.dirname(reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { "recursive": true });
      }
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Optimization report saved "to": ${reportFile}`);
      return report;
    } catch (error) {
      this.error(`Failed to generate optimization "report": ${error.message}`);
      return null;
    }
  }
  async start() {
    this.log(`Starting ${this.processName}...`);
    // Run initial optimization analysis
    await this.generateOptimizationReport();
    // Set up periodic optimization
    const interval = 24 * 60 * 60 * 1000; // 24 hours
    setInterval(async () => {
      this.log('Running scheduled build optimization...');
      await this.generateOptimizationReport();
    }, interval);
    this.log(`${this.processName} started successfully`);
  }
}
// Start the automation if this script is run directly
if (require.main === module) {
  const optimizer = new BuildOptimizer();
  optimizer.start().catch(error => {
    console.error('Build optimizer failed to "start": ', error);
    process.exit(1);
  });
}
module.exports = BuildOptimizer;
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class BuildOptimizer { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer'; this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true'; this.treeShaking = process.env.TREE_SHAKING === 'true'; this.codeSplitting = process.env.CODE_SPLITTING === 'true'; this.minification = process.env.MINIFICATION === 'true'; this.logFile = 'logs/pm2/build-optimizer.log'; this.errorFile = 'logs/pm2/build-optimizer-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async analyzeBundleSize() { this.log('Analyzing bundle size...'); try { const buildDir = this.findBuildDirectory(); if (!buildDir) { this.log('No build directory found','WARNING'); return { success: false,message: 'No build directory found' }} const bundleInfo = this.getBundleInfo(buildDir); this.log(`Bundle analysis completed:`); this.log(` - Total files: ${bundleInfo.totalFiles}`); this.log(` - Total size: ${(bundleInfo.totalSize / 1024 / 1024).toFixed(2)} MB`); this.log(` - Largest files: ${bundleInfo.largestFiles.length}`); return { success: true,buildDir,...bundleInfo }} catch (error) { this.error(`Bundle analysis failed: ${error.message}`); return { success: false,error: error.message }} } findBuildDirectory() { const possibleDirs = ['dist','build','out','.next','public']; for (const dir of possibleDirs) { if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) { return dir} } return null} getBundleInfo(buildDir) { const files = []; const largestFiles = []; function scanDirectory(dir,basePath = '') { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const relativePath = path.join(basePath,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { scanDirectory(fullPath,relativePath)} else if (stat.isFile()) { const fileInfo = { path: relativePath,size: stat.size,extension: path.extname(item) }; files.push(fileInfo); if (largestFiles.length < 10) { largestFiles.push(fileInfo); largestFiles.sort((a,b) => b.size - a.size)} else if (fileInfo.size > largestFiles[largestFiles.length - 1].size) { largestFiles[largestFiles.length - 1] = fileInfo; largestFiles.sort((a,b) => b.size - a.size)} } } } catch (error) { } } scanDirectory(buildDir); const totalSize = files.reduce((sum,file) => sum + file.size,0); const jsFiles = files.filter(f => f.extension === '.js'); const cssFiles = files.filter(f => f.extension === '.css'); return { totalFiles: files.length,totalSize,jsFiles: jsFiles.length,cssFiles: cssFiles.length,largestFiles: largestFiles.slice(0,5) }} async optimizeBundle() { this.log('Optimizing bundle...'); try { const optimizations = []; if (this.optimizeBundles) { const unusedDeps = await this.findUnusedDependencies(); if (unusedDeps.length > 0) { optimizations.push({ type: 'unused_dependencies',count: unusedDeps.length,dependencies: unusedDeps })} } const bundleAnalysis = await this.analyzeBundleSize(); if (bundleAnalysis.success) { const largeFiles = bundleAnalysis.largestFiles.filter(f => f.size > 100 * 1024); if (largeFiles.length > 0) { optimizations.push({ type: 'large_files',count: largeFiles.length,files: largeFiles })} } const duplicates = await this.findDuplicateDependencies(); if (duplicates.length > 0) { optimizations.push({ type: 'duplicate_dependencies',count: duplicates.length,duplicates })} this.log(`Found ${optimizations.length} optimization opportunities`); return { success: true,optimizations }} catch (error) { this.error(`Bundle optimization failed: ${error.message}`); return { success: false,error: error.message }} } async findUnusedDependencies() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); const dependencies = Object.keys(packageJson.dependencies || {}); const devDependencies = Object.keys(packageJson.devDependencies || {}); const allDeps = [...dependencies,...devDependencies]; const unusedDeps = []; for (const dep of allDeps) { if (!this.isDependencyUsed(dep)) { unusedDeps.push(dep)} } return unusedDeps} catch (error) { this.log(`Failed to check unused dependencies: ${error.message}`,'WARNING'); return []} } isDependencyUsed(dependency) { try { const files = this.getFilesToScan(['.js','.ts','.jsx','.tsx','.vue','.svelte']); for (const file of files) { try { const content = fs.readFileSync(file,'utf8'); const importPatterns = [ new RegExp(`import.*['"]${dependency}['"]`,'g'),new RegExp(`require\\(['"]${dependency}['"]\\)`,'g'),new RegExp(`from\\s+['"]${dependency}['"]`,'g'),new RegExp(`import\\s+['"]${dependency}/`,'g') ]; for (const pattern of importPatterns) { if (pattern.test(content)) { return true} } } catch (error) { } } return false} catch (error) { return false} } async findDuplicateDependencies() { try { const packageLockPath = 'package-lock.json'; if (!fs.existsSync(packageLockPath)) { return []} const packageLock = JSON.parse(fs.readFileSync(packageLockPath,'utf8')); const duplicates = []; const dependencyVersions = new Map(); function analyzeDependencies(deps,path = '') { if (!deps) return; for (const [name,version] of Object.entries(deps)) { const fullPath = path ? `${path}.${name}` : name; if (dependencyVersions.has(name)) { const existing = dependencyVersions.get(name); if (existing.version !== version) { duplicates.push({ name,versions: [existing.version,version],paths: [existing.path,fullPath] })} } else { dependencyVersions.set(name,{ version,path: fullPath })} if (typeof version === 'object' && version.dependencies) { analyzeDependencies(version.dependencies,fullPath)} } } analyzeDependencies(packageLock.dependencies); return duplicates} catch (error) { this.log(`Failed to check duplicate dependencies: ${error.message}`,'WARNING'); return []} } getFilesToScan(extensions) { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } } } catch (error) { } } scanDirectory(process.cwd()); return files} async generateOptimizationReport() { this.log('Generating optimization report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,bundleAnalysis: await this.analyzeBundleSize(),optimizationResults: await this.optimizeBundle(),environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `optimization-reports/build-optimization-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Optimization report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate optimization report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateOptimizationReport(); const interval = 24 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled build optimization...'); await this.generateOptimizationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const optimizer = new BuildOptimizer(); optimizer.start().catch(error => { console.error('Build optimizer failed to start:',error); process.exit(1)})} module.exports = BuildOptimizer;



