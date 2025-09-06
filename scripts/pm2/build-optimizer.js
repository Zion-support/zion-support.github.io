ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class BuildOptimizer { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer'; this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true'; this.treeShaking = process.env.TREE_SHAKING === 'true'; this.codeSplitting = process.env.CODE_SPLITTING === 'true'; this.minification = process.env.MINIFICATION === 'true'; this.logFile = 'logs/pm2/build-optimizer.log'; this.errorFile = 'logs/pm2/build-optimizer-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; ); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async analyzeBundleSize() { this.log('Analyzing bundle size...'); try { const buildDir = this.findBuildDirectory(); if (!buildDir) { this.log('No build directory found','WARNING'); return { success: false,message: 'No build directory found' }} const bundleInfo = this.getBundleInfo(buildDir); this.log(`Bundle analysis completed:`); this.log(` - Total files: ${bundleInfo.totalFiles}`); this.log(` - Total size: ${(bundleInfo.totalSize / 1024 / 1024).toFixed(2)} MB`); this.log(` - Largest files: ${bundleInfo.largestFiles.length}`); return { success: true,buildDir,...bundleInfo }} catch (error) { this.error(`Bundle analysis failed: ${error.message}`); return { success: false,error: error.message }} } findBuildDirectory() { const possibleDirs = ['dist','build','out','.next','public']; for (const dir of possibleDirs) { if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) { return dir} } return null} getBundleInfo(buildDir) { const files = []; const largestFiles = []; function scanDirectory(dir,basePath = '') { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const relativePath = path.join(basePath,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { scanDirectory(fullPath,relativePath)} else if (stat.isFile()) { const fileInfo = { path: relativePath,size: stat.size,extension: path.extname(item) }; files.push(fileInfo); if (largestFiles.length < 10) { largestFiles.push(fileInfo); largestFiles.sort((a,b) => b.size - a.size)} else if (fileInfo.size > largestFiles[largestFiles.length - 1].size) { largestFiles[largestFiles.length - 1] = fileInfo; largestFiles.sort((a,b) => b.size - a.size)} } } } catch (error) { } } scanDirectory(buildDir); const totalSize = files.reduce((sum,file) => sum + file.size,0); const jsFiles = files.filter(f => f.extension === '.js'); const cssFiles = files.filter(f => f.extension === '.css'); return { totalFiles: files.length,totalSize,jsFiles: jsFiles.length,cssFiles: cssFiles.length,largestFiles: largestFiles.slice(0,5) }} async optimizeBundle() { this.log('Optimizing bundle...'); try { const optimizations = []; if (this.optimizeBundles) { const unusedDeps = await this.findUnusedDependencies(); if (unusedDeps.length > 0) { optimizations.push({ type: 'unused_dependencies',count: unusedDeps.length,dependencies: unusedDeps })} } const bundleAnalysis = await this.analyzeBundleSize(); if (bundleAnalysis.success) { const largeFiles = bundleAnalysis.largestFiles.filter(f => f.size > 100 * 1024); if (largeFiles.length > 0) { optimizations.push({ type: 'large_files',count: largeFiles.length,files: largeFiles })} } const duplicates = await this.findDuplicateDependencies(); if (duplicates.length > 0) { optimizations.push({ type: 'duplicate_dependencies',count: duplicates.length,duplicates })} this.log(`Found ${optimizations.length} optimization opportunities`); return { success: true,optimizations }} catch (error) { this.error(`Bundle optimization failed: ${error.message}`); return { success: false,error: error.message }} } async findUnusedDependencies() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); const dependencies = Object.keys(packageJson.dependencies || {}); const devDependencies = Object.keys(packageJson.devDependencies || {}); const allDeps = [...dependencies,...devDependencies]; const unusedDeps = []; for (const dep of allDeps) { if (!this.isDependencyUsed(dep)) { unusedDeps.push(dep)} } return unusedDeps} catch (error) { this.log(`Failed to check unused dependencies: ${error.message}`,'WARNING'); return []} } isDependencyUsed(dependency) { try { const files = this.getFilesToScan(['.js','.ts','.jsx','.tsx','.vue','.svelte']); for (const file of files) { try { const content = fs.readFileSync(file,'utf8'); const importPatterns = [ new RegExp(`import.*['"]${dependency}['"]`,'g'),new RegExp(`require\\(['"]${dependency}['"]\\)`,'g'),new RegExp(`from\\s+['"]${dependency}['"]`,'g'),new RegExp(`import\\s+['"]${dependency}/`,'g') ]; for (const pattern of importPatterns) { if (pattern.test(content)) { return true} } } catch (error) { } } return false} catch (error) { return false} } async findDuplicateDependencies() { try { const packageLockPath = 'package-lock.json'; if (!fs.existsSync(packageLockPath)) { return []} const packageLock = JSON.parse(fs.readFileSync(packageLockPath,'utf8')); const duplicates = []; const dependencyVersions = new Map(); function analyzeDependencies(deps,path = '') { if (!deps) return; for (const [name,version] of Object.entries(deps)) { const fullPath = path ? `${path}.${name}` : name; if (dependencyVersions.has(name)) { const existing = dependencyVersions.get(name); if (existing.version !== version) { duplicates.push({ name,versions: [existing.version,version],paths: [existing.path,fullPath] })} } else { dependencyVersions.set(name,{ version,path: fullPath })} if (typeof version === 'object' && version.dependencies) { analyzeDependencies(version.dependencies,fullPath)} } } analyzeDependencies(packageLock.dependencies); return duplicates} catch (error) { this.log(`Failed to check duplicate dependencies: ${error.message}`,'WARNING'); return []} } getFilesToScan(extensions) { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } } } catch (error) { } } scanDirectory(process.cwd()); return files} async generateOptimizationReport() { this.log('Generating optimization report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,bundleAnalysis: await this.analyzeBundleSize(),optimizationResults: await this.optimizeBundle(),environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `optimization-reports/build-optimization-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Optimization report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate optimization report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateOptimizationReport(); const interval = 24 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled build optimization...'); await this.generateOptimizationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const optimizer = new BuildOptimizer(); optimizer.start().catch(error => { console.error('Build optimizer failed to start:',error); process.exit(1)})} module.exports = BuildOptimizer;
#!/usr/bin/env node
/**
 * PM2 Build Optimizer Script
 * Optimizes build process and bundle size
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class BuildOptimizer {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer';
    this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true';
    this.treeShaking = process.env.TREE_SHAKING === 'true';
    this.codeSplitting = process.env.CODE_SPLITTING === 'true';
    this.minification = process.env.MINIFICATION === 'true';
    this.logFile = 'logs/pm2/build-optimizer.log';
    this.errorFile = 'logs/pm2/build-optimizer-error.log';
    this.ensureLogDirectory();
  }
  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { "recursive": true });
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
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class BuildOptimizer { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer'; this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true'; this.treeShaking = process.env.TREE_SHAKING === 'true'; this.codeSplitting = process.env.CODE_SPLITTING === 'true'; this.minification = process.env.MINIFICATION === 'true'; this.logFile = 'logs/pm2/build-optimizer.log'; this.errorFile = 'logs/pm2/build-optimizer-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async analyzeBundleSize() { this.log('Analyzing bundle size...'); try { const buildDir = this.findBuildDirectory(); if (!buildDir) { this.log('No build directory found','WARNING'); return { success: false,message: 'No build directory found' }} const bundleInfo = this.getBundleInfo(buildDir); this.log(`Bundle analysis completed:`); this.log(` - Total files: ${bundleInfo.totalFiles}`); this.log(` - Total size: ${(bundleInfo.totalSize / 1024 / 1024).toFixed(2)} MB`); this.log(` - Largest files: ${bundleInfo.largestFiles.length}`); return { success: true,buildDir,...bundleInfo }} catch (error) { this.error(`Bundle analysis failed: ${error.message}`); return { success: false,error: error.message }} } findBuildDirectory() { const possibleDirs = ['dist','build','out','.next','public']; for (const dir of possibleDirs) { if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) { return dir} } return null} getBundleInfo(buildDir) { const files = []; const largestFiles = []; function scanDirectory(dir,basePath = '') { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const relativePath = path.join(basePath,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { scanDirectory(fullPath,relativePath)} else if (stat.isFile()) { const fileInfo = { path: relativePath,size: stat.size,extension: path.extname(item) }; files.push(fileInfo); if (largestFiles.length < 10) { largestFiles.push(fileInfo); largestFiles.sort((a,b) => b.size - a.size)} else if (fileInfo.size > largestFiles[largestFiles.length - 1].size) { largestFiles[largestFiles.length - 1] = fileInfo; largestFiles.sort((a,b) => b.size - a.size)} } } } catch (error) { } } scanDirectory(buildDir); const totalSize = files.reduce((sum,file) => sum + file.size,0); const jsFiles = files.filter(f => f.extension === '.js'); const cssFiles = files.filter(f => f.extension === '.css'); return { totalFiles: files.length,totalSize,jsFiles: jsFiles.length,cssFiles: cssFiles.length,largestFiles: largestFiles.slice(0,5) }} async optimizeBundle() { this.log('Optimizing bundle...'); try { const optimizations = []; if (this.optimizeBundles) { const unusedDeps = await this.findUnusedDependencies(); if (unusedDeps.length > 0) { optimizations.push({ type: 'unused_dependencies',count: unusedDeps.length,dependencies: unusedDeps })} } const bundleAnalysis = await this.analyzeBundleSize(); if (bundleAnalysis.success) { const largeFiles = bundleAnalysis.largestFiles.filter(f => f.size > 100 * 1024); if (largeFiles.length > 0) { optimizations.push({ type: 'large_files',count: largeFiles.length,files: largeFiles })} } const duplicates = await this.findDuplicateDependencies(); if (duplicates.length > 0) { optimizations.push({ type: 'duplicate_dependencies',count: duplicates.length,duplicates })} this.log(`Found ${optimizations.length} optimization opportunities`); return { success: true,optimizations }} catch (error) { this.error(`Bundle optimization failed: ${error.message}`); return { success: false,error: error.message }} } async findUnusedDependencies() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); const dependencies = Object.keys(packageJson.dependencies || {}); const devDependencies = Object.keys(packageJson.devDependencies || {}); const allDeps = [...dependencies,...devDependencies]; const unusedDeps = []; for (const dep of allDeps) { if (!this.isDependencyUsed(dep)) { unusedDeps.push(dep)} } return unusedDeps} catch (error) { this.log(`Failed to check unused dependencies: ${error.message}`,'WARNING'); return []} } isDependencyUsed(dependency) { try { const files = this.getFilesToScan(['.js','.ts','.jsx','.tsx','.vue','.svelte']); for (const file of files) { try { const content = fs.readFileSync(file,'utf8'); const importPatterns = [ new RegExp(`import.*['"]${dependency}['"]`,'g'),new RegExp(`require\\(['"]${dependency}['"]\\)`,'g'),new RegExp(`from\\s+['"]${dependency}['"]`,'g'),new RegExp(`import\\s+['"]${dependency}/`,'g') ]; for (const pattern of importPatterns) { if (pattern.test(content)) { return true} } } catch (error) { } } return false} catch (error) { return false} } async findDuplicateDependencies() { try { const packageLockPath = 'package-lock.json'; if (!fs.existsSync(packageLockPath)) { return []} const packageLock = JSON.parse(fs.readFileSync(packageLockPath,'utf8')); const duplicates = []; const dependencyVersions = new Map(); function analyzeDependencies(deps,path = '') { if (!deps) return; for (const [name,version] of Object.entries(deps)) { const fullPath = path ? `${path}.${name}` : name; if (dependencyVersions.has(name)) { const existing = dependencyVersions.get(name); if (existing.version !== version) { duplicates.push({ name,versions: [existing.version,version],paths: [existing.path,fullPath] })} } else { dependencyVersions.set(name,{ version,path: fullPath })} if (typeof version === 'object' && version.dependencies) { analyzeDependencies(version.dependencies,fullPath)} } } analyzeDependencies(packageLock.dependencies); return duplicates} catch (error) { this.log(`Failed to check duplicate dependencies: ${error.message}`,'WARNING'); return []} } getFilesToScan(extensions) { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } } } catch (error) { } } scanDirectory(process.cwd()); return files} async generateOptimizationReport() { this.log('Generating optimization report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,bundleAnalysis: await this.analyzeBundleSize(),optimizationResults: await this.optimizeBundle(),environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `optimization-reports/build-optimization-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Optimization report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate optimization report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateOptimizationReport(); const interval = 24 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled build optimization...'); await this.generateOptimizationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const optimizer = new BuildOptimizer(); optimizer.start().catch(error => { console.error('Build optimizer failed to start:',error); process.exit(1)})} module.exports = BuildOptimizer;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
}};
; async analyzeBuild() {; try {; this && this.log('🏗️ Analyzing current build...');
; if (!fs && fs.existsSync('dist')) {; this && this.log('📦 Building project first...'); execSync('npm run build', {; cwd: this && this.projectRoot,
    stdio: 'pipe'})};
; const buildStats = {; totalSize: 0, fileCount: 0, largestFiles: [], jsFiles: [], cssFiles: [],
    assetFiles: []};
; const analyzeDirectory = (dir) = > {; const items = fs && fs.readdirSync(dir); items && items.forEach(item = > {; const fullPath = path && path.join(dir, item); const stat = fs && fs.statSync(fullPath);
; if (stat && stat.isDirectory()) {; analyzeDirectory(fullPath)} else {; const fileInfo = {; path: fullPath && fullPath.replace(this && this.projectRoot + '/dist/', ''); size: stat && stat.size,
    sizeKB: Math && Math.round(stat && stat.size / 1024 * 100) / 100};
; buildStats && buildStats.totalSize + = stat && stat.size; buildStats && buildStats.fileCount++;
; if (item && item.endsWith('.js')) {; buildStats && buildStats.jsFiles.push(fileInfo)} else if (item && item.endsWith('.css')) {; buildStats && buildStats.cssFiles.push(fileInfo)} else {; buildStats && buildStats.assetFiles.push(fileInfo)}}})};
; analyzeDirectory('dist');

=======
; // Sort files by size; const allFiles = [...buildStats.jsFiles, ...buildStats.cssFiles, ...buildStats.assetFiles]; buildStats.largestFiles = allFiles; .sort((a, b) = > b.size - a.size); .slice(0, 10);
; buildStats.totalSizeMB = Math.round(buildStats.totalSize / (1024 * 1024) * 100) / 100;
; return {; success: true; stats: buildStats}} catch (error) {; return {; success: false; error: error.message; stats: null}}};
; async checkBundleAnalyzer() {; try {; this.log('📊 Checking bundle analyzer availability...');
; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const hasAnalyzer = packageJson.devDependencies &&; (packageJson.devDependencies['webpack-bundle-analyzer'] ||; packageJson.devDependencies['@next/bundle-analyzer']);
; return {; available: hasAnalyzer; package: hasAnalyzer ?; (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer': '@next/bundle-analyzer'): ; null}} catch (error) {; return {; available: false; error: error.message}}};
; async checkOptimizationSettings() {; try {; this.log('⚙️ Checking optimization settings...');
; const settings = {; treeShaking: false; minification: false; codeSplitting: false; compression: false};
; // Check Next.js config; if (fs.existsSync('next.config.js')) {; const nextConfig = fs.readFileSync('next.config.js', 'utf8'); settings.minification = nextConfig.includes('swcMinify: true') || nextConfig.includes('swcMinify: true'); settings.compression = nextConfig.includes('compress: true') || nextConfig.includes('compress: true')};
; // Check package.json for optimization scripts; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const scripts = packageJson.scripts || {};
; settings.treeShaking = scripts.build && scripts.build.includes('--tree-shaking'); settings.codeSplitting = scripts.build && scripts.build.includes('--experimental-build-mode');
; return {; success: true,
    settings: settings}} catch (error) {; return {; success: false, error: error.message, settings: null}}};
; async generateOptimizationReport(buildStats, analyzerInfo, settingsInfo) {; const report = {; timestamp: new Date().toISOString(), summary: {
      , buildSize: buildStats?.stats?.totalSizeMB || 0, fileCount: buildStats?.stats?.fileCount || 0, optimizationScore: 0,
}}; async analyzeBuild() {try {; this.log('🏗️ Analyzing current build...'); if (!fs.existsSync('dist')) {; this.log('📦 Building project first...'); execSync('npm run build', {; cwd: this.projectRoot
    stdio: 'pipe'})}; const buildStats = {totalSize: 0, fileCount: 0, largestFiles: [], jsFiles: [], cssFiles: []
    assetFiles: []}; const analyzeDirectory = (dir) = > {const items = fs.readdirSync(dir); items.forEach(item = > {; const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; analyzeDirectory(fullPath)} else {const fileInfo = {; path: fullPath.replace(this.projectRoot + '/dist/', ''); size: stat.size
    sizeKB: Math.round(stat.size / 1024 * 100) / 100}; buildStats.totalSize + = stat.size; buildStats.fileCount++; if (item.endsWith('.js')) {buildStats.jsFiles.push(fileInfo)} else if (item.endsWith('.css')) {buildStats.cssFiles.push(fileInfo)} else {buildStats.assetFiles.push(fileInfo)}}})}; analyzeDirectory('dist'); // Sort files by size; const allFiles = [...buildStats.jsFiles, ...buildStats.cssFiles, ...buildStats.assetFiles]; buildStats.largestFiles = allFiles; .sort((a, b) = > b.size - a.size); .slice(0, 10); buildStats.totalSizeMB = Math.round(buildStats.totalSize / (1024 * 1024) * 100) / 100; return {success: true
    stats: buildStats}} catch (error) {return {; success: false, error: error.message, stats: null}}}; async checkBundleAnalyzer() {try {; this.log('📊 Checking bundle analyzer availability...'); const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const hasAnalyzer = packageJson.devDependencies &&; (packageJson.devDependencies['webpack-bundle-analyzer'] |; packageJson.devDependencies['@next/bundle-analyzer']); return {; available: hasAnalyzer, package: hasAnalyzer ?, (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer': '@next/bundle-analyzer'): ; null}} catch (error) {return {; available: false
    error: error.message}}}; async checkOptimizationSettings() {try {; this.log('⚙️ Checking optimization settings...'); const settings = {; treeShaking: false, minification: false, codeSplitting: false
    compression: false}; // Check Next.js config; if (fs.existsSync('next.config.js')) {const nextConfig = fs.readFileSync('next.config.js', 'utf8'); settings.minification = nextConfig.includes('swcMinify: true') |nextConfig.includes('swcMinify: true'); settings.compression = nextConfig.includes('compress: true') |nextConfig.includes('compress: true')}; // Check package.json for optimization scripts; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); const scripts = packageJson.scripts |{}; settings.treeShaking = scripts.build && scripts.build.includes('--tree-shaking'); settings.codeSplitting = scripts.build && scripts.build.includes('--experimental-build-mode'); return {success: true
    settings: settings}} catch (error) {return {; success: false, error: error.message, settings: null}}}; async generateOptimizationReport(buildStats, analyzerInfo, settingsInfo) {const report = {; timestamp: new Date().toISOString(), summary: {
      , buildSize: buildStats?.stats?.totalSizeMB |0, fileCount: buildStats?.stats?.fileCount |0, optimizationScore: 0
origin/main
    recommendations: []


    };
  };
,
  async analyzeBuild() {,
    try {,
      this.log('🏗️  Analyzing current build...'),
,
      if (!fs.existsSync('dist')) {,
        this.log('📦 Building project first...'),
        execSync('npm run build', {,
          cwd: this.projectRoot,
          stdio: 'pipe',
        }),
      };
,
      const buildStats = {,
        totalSize: 0,
        fileCount: 0,
        largestFiles: [],
        jsFiles: [],
        cssFiles: [],
        assetFiles: [],
      };
,
      const analyzeDirectory = (dir) => {,
        const items = fs.readdirSync(dir),
        items.forEach(item => {,
          const fullPath = path.join(dir, item),
          const stat = fs.statSync(fullPath),
,
          if (stat.isDirectory()) {,
            analyzeDirectory(fullPath),
          } else {,
            const fileInfo = {,
              path: fullPath.replace(this.projectRoot + '/dist/', ''),
              size: stat.size,
              sizeKB: Math.round(stat.size / 1024 * 100) / 100,
            };
,
            buildStats.totalSize += stat.size,
            buildStats.fileCount++,
,
            if (item.endsWith('.js')) {,
              buildStats.jsFiles.push(fileInfo),
            } else if (item.endsWith('.css')) {,
              buildStats.cssFiles.push(fileInfo),
            } else {,
              buildStats.assetFiles.push(fileInfo),
            };
          };
        }),
      };
,
      analyzeDirectory('dist'),
,
      // Sort files by size,
      const allFiles = [...buildStats.jsFiles, ...buildStats.cssFiles, ...buildStats.assetFiles],
      buildStats.largestFiles = allFiles,
        .sort((a, b) => b.size - a.size),
        .slice(0, 10),
,
      buildStats.totalSizeMB = Math.round(buildStats.totalSize / (1024 * 1024) * 100) / 100,
,
      return {,
        success: true,
        stats: buildStats,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        stats: null,
      };
    };
  };
,
  async checkBundleAnalyzer() {,
    try {,
      this.log('📊 Checking bundle analyzer availability...'),
,
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
      const hasAnalyzer = packageJson.devDependencies &&,
        (packageJson.devDependencies['webpack-bundle-analyzer'] ||,
         packageJson.devDependencies['@next/bundle-analyzer']),
,
      return {,
        available: hasAnalyzer,
        package: hasAnalyzer ?,
          (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer' : '@next/bundle-analyzer') :,
          null,
      };
    } catch (error) {,
      return {,
        available: false,
        error: error.message,
      };
    };
  };
,
  async checkOptimizationSettings() {,
    try {,
      this.log('⚙️  Checking optimization settings...'),
,
      const settings = {,
        treeShaking: false,
        minification: false,
        codeSplitting: false,
        compression: false,
      };
,
      // Check Next.js config,
      if (fs.existsSync('next.config.js')) {,
        const nextConfig = fs.readFileSync('next.config.jsutf8'),
        settings.minification = nextConfig.includes('swcMinify: true') || nextConfig.includes('swcMinify:true'),
        settings.compression = nextConfig.includes('compress: true') || nextConfig.includes('compress:true'),
      };
,
      // Check package.json for optimization scripts,
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
      const scripts = packageJson.scripts || {};
,
      settings.treeShaking = scripts.build && scripts.build.includes('--tree-shaking'),
      settings.codeSplitting = scripts.build && scripts.build.includes('--experimental-build-mode'),
,
      return {,
        success: true,
        settings: settings,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        settings: null,
      };
    };
  };
,
  async generateOptimizationReport(buildStats, analyzerInfo, settingsInfo) {,
    const report = {,
      timestamp: new Date().toISOString(),
      summary: {,
        buildSize: buildStats?.stats?.totalSizeMB || 0,
        fileCount: buildStats?.stats?.fileCount || 0,
        optimizationScore: 0,
        recommendations: [],
      },
      details: {,
        build: buildStats,
        analyzer: analyzerInfo,
        settings: settingsInfo,
      },
      optimizations: [],
    };
,
    // Calculate optimization score,
    let score = 0,
    const maxScore = 100,
,
    if (buildStats?.stats?.totalSizeMB < 2) score += 30,
    else if (buildStats?.stats?.totalSizeMB < 5) score += 20,
    else if (buildStats?.stats?.totalSizeMB < 10) score += 10,
,
    if (settingsInfo?.settings?.minification) score += 20,
    if (settingsInfo?.settings?.compression) score += 15,
    if (settingsInfo?.settings?.treeShaking) score += 15,
    if (settingsInfo?.settings?.codeSplitting) score += 10,
    if (analyzerInfo?.available) score += 10,
,
    report.summary.optimizationScore = Math.min(score, maxScore),
,
    // Generate optimization recommendations,
    if (buildStats?.stats?.totalSizeMB > 5) {,
      report.optimizations.push({,
        priority: 'high',
        type: 'bundle-size',
        message: 'Bundle size is large',
        action: 'Implement code splitting and tree shaking',
        impact: 'high',
      }),
    };
,
    if (!settingsInfo?.settings?.minification) {,
      report.optimizations.push({,
        priority: 'high',
        type: 'minification',
        message: 'Minification not enabled',
        action: 'Enable SWC minification in Next.js config',
        impact: 'high',
      }),
    };
,
    if (!settingsInfo?.settings?.compression) {,
      report.optimizations.push({,
        priority: 'medium',
        type: 'compression',
        message: 'Compression not enabled',
        action: 'Enable gzip compression',
        impact: 'medium',
      }),
    };
,
    if (!analyzerInfo?.available) {,
      report.optimizations.push({,
        priority: 'low',
        type: 'analysis',
        message: 'Bundle analyzer not available',
        action: 'Install webpack-bundle-analyzer for detailed analysis',
        impact: 'low',
      }),
    };
,
    return report,
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursive: true }),
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`),
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`),
    };
  };
,
  async run() {,
    this.log('🚀 Starting Build Optimizer...'),
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursive: true }),
      };
,
      // Run all optimization checks,
      const buildStats = await this.analyzeBuild(),
      const analyzerInfo = await this.checkBundleAnalyzer(),
      const settingsInfo = await this.checkOptimizationSettings(),
,
      // Generate report,
      this.log('📊 Generating optimization report...'),
      const report = await this.generateOptimizationReport(buildStats, analyzerInfo, settingsInfo),
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
      this.log('\n📊 Build Optimizer Summary: '),
      this.log(`Build size: ${report.summary.buildSize} MB`),
      this.log(`File count: ${report.summary.fileCount}`),
      this.log(`Optimization score: ${report.summary.optimizationScore}/100`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.optimizations.length > 0) {,
        this.log('\n💡 Optimization Recommendations: '),
        report.optimizations.forEach(opt => {,
          this.log(`  [${opt.priority.toUpperCase()}] ${opt.message}`),
          this.log(`    Action: ${opt.action}`),
          this.log(`    Impact: ${opt.impact}`),
        }),
      } else {,
        this.log('\n✨ Build is well optimized!'),
      };
,
    } catch (error) {,
      this.log(`❌ Error running build optimizer: ${error.message}`),
      process.exit(1),
    };
  };
};
,
// Run the build optimizer,
const optimizer = new BuildOptimizer(),
optimizer.run().catch(error => {,
  process.exit(1),
}),
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class BuildOptimizer { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer'; this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true'; this.treeShaking = process.env.TREE_SHAKING === 'true'; this.codeSplitting = process.env.CODE_SPLITTING === 'true'; this.minification = process.env.MINIFICATION === 'true'; this.logFile = 'logs/pm2/build-optimizer.log'; this.errorFile = 'logs/pm2/build-optimizer-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; ); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async analyzeBundleSize() { this.log('Analyzing bundle size...'); try { const buildDir = this.findBuildDirectory(); if (!buildDir) { this.log('No build directory found','WARNING'); return { success: false,message: 'No build directory found' }} const bundleInfo = this.getBundleInfo(buildDir); this.log(`Bundle analysis completed:`); this.log(` - Total files: ${bundleInfo.totalFiles}`); this.log(` - Total size: ${(bundleInfo.totalSize / 1024 / 1024).toFixed(2)} MB`); this.log(` - Largest files: ${bundleInfo.largestFiles.length}`); return { success: true,buildDir,...bundleInfo }} catch (error) { this.error(`Bundle analysis failed: ${error.message}`); return { success: false,error: error.message }} } findBuildDirectory() { const possibleDirs = ['dist','build','out','.next','public']; for (const dir of possibleDirs) { if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) { return dir} } return null} getBundleInfo(buildDir) { const files = []; const largestFiles = []; function scanDirectory(dir,basePath = '') { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const relativePath = path.join(basePath,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { scanDirectory(fullPath,relativePath)} else if (stat.isFile()) { const fileInfo = { path: relativePath,size: stat.size,extension: path.extname(item) }; files.push(fileInfo); if (largestFiles.length < 10) { largestFiles.push(fileInfo); largestFiles.sort((a,b) => b.size - a.size)} else if (fileInfo.size > largestFiles[largestFiles.length - 1].size) { largestFiles[largestFiles.length - 1] = fileInfo; largestFiles.sort((a,b) => b.size - a.size)} } } } catch (error) { } } scanDirectory(buildDir); const totalSize = files.reduce((sum,file) => sum + file.size,0); const jsFiles = files.filter(f => f.extension === '.js'); const cssFiles = files.filter(f => f.extension === '.css'); return { totalFiles: files.length,totalSize,jsFiles: jsFiles.length,cssFiles: cssFiles.length,largestFiles: largestFiles.slice(0,5) }} async optimizeBundle() { this.log('Optimizing bundle...'); try { const optimizations = []; if (this.optimizeBundles) { const unusedDeps = await this.findUnusedDependencies(); if (unusedDeps.length > 0) { optimizations.push({ type: 'unused_dependencies',count: unusedDeps.length,dependencies: unusedDeps })} } const bundleAnalysis = await this.analyzeBundleSize(); if (bundleAnalysis.success) { const largeFiles = bundleAnalysis.largestFiles.filter(f => f.size > 100 * 1024); if (largeFiles.length > 0) { optimizations.push({ type: 'large_files',count: largeFiles.length,files: largeFiles })} } const duplicates = await this.findDuplicateDependencies(); if (duplicates.length > 0) { optimizations.push({ type: 'duplicate_dependencies',count: duplicates.length,duplicates })} this.log(`Found ${optimizations.length} optimization opportunities`); return { success: true,optimizations }} catch (error) { this.error(`Bundle optimization failed: ${error.message}`); return { success: false,error: error.message }} } async findUnusedDependencies() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); const dependencies = Object.keys(packageJson.dependencies || {}); const devDependencies = Object.keys(packageJson.devDependencies || {}); const allDeps = [...dependencies,...devDependencies]; const unusedDeps = []; for (const dep of allDeps) { if (!this.isDependencyUsed(dep)) { unusedDeps.push(dep)} } return unusedDeps} catch (error) { this.log(`Failed to check unused dependencies: ${error.message}`,'WARNING'); return []} } isDependencyUsed(dependency) { try { const files = this.getFilesToScan(['.js','.ts','.jsx','.tsx','.vue','.svelte']); for (const file of files) { try { const content = fs.readFileSync(file,'utf8'); const importPatterns = [ new RegExp(`import.*['"]${dependency}['"]`,'g'),new RegExp(`require\\(['"]${dependency}['"]\\)`,'g'),new RegExp(`from\\s+['"]${dependency}['"]`,'g'),new RegExp(`import\\s+['"]${dependency}/`,'g') ]; for (const pattern of importPatterns) { if (pattern.test(content)) { return true} } } catch (error) { } } return false} catch (error) { return false} } async findDuplicateDependencies() { try { const packageLockPath = 'package-lock.json'; if (!fs.existsSync(packageLockPath)) { return []} const packageLock = JSON.parse(fs.readFileSync(packageLockPath,'utf8')); const duplicates = []; const dependencyVersions = new Map(); function analyzeDependencies(deps,path = '') { if (!deps) return; for (const [name,version] of Object.entries(deps)) { const fullPath = path ? `${path}.${name}` : name; if (dependencyVersions.has(name)) { const existing = dependencyVersions.get(name); if (existing.version !== version) { duplicates.push({ name,versions: [existing.version,version],paths: [existing.path,fullPath] })} } else { dependencyVersions.set(name,{ version,path: fullPath })} if (typeof version === 'object' && version.dependencies) { analyzeDependencies(version.dependencies,fullPath)} } } analyzeDependencies(packageLock.dependencies); return duplicates} catch (error) { this.log(`Failed to check duplicate dependencies: ${error.message}`,'WARNING'); return []} } getFilesToScan(extensions) { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } } } catch (error) { } } scanDirectory(process.cwd()); return files} async generateOptimizationReport() { this.log('Generating optimization report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,bundleAnalysis: await this.analyzeBundleSize(),optimizationResults: await this.optimizeBundle(),environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `optimization-reports/build-optimization-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Optimization report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate optimization report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateOptimizationReport(); const interval = 24 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled build optimization...'); await this.generateOptimizationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const optimizer = new BuildOptimizer(); optimizer.start().catch(error => { console.error('Build optimizer failed to start:',error); process.exit(1)})} module.exports = BuildOptimizer;
#!/usr/bin/env node
/**
 * PM2 Build Optimizer Script
 * Optimizes build process and bundle size
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class BuildOptimizer {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer';
    this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true';
    this.treeShaking = process.env.TREE_SHAKING === 'true';
    this.codeSplitting = process.env.CODE_SPLITTING === 'true';
    this.minification = process.env.MINIFICATION === 'true';
    this.logFile = 'logs/pm2/build-optimizer.log';
    this.errorFile = 'logs/pm2/build-optimizer-error.log';
    this.ensureLogDirectory();
  }
  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { "recursive": true });
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
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); const path = require('path'); class BuildOptimizer { constructor() { this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer'; this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true'; this.treeShaking = process.env.TREE_SHAKING === 'true'; this.codeSplitting = process.env.CODE_SPLITTING === 'true'; this.minification = process.env.MINIFICATION === 'true'; this.logFile = 'logs/pm2/build-optimizer.log'; this.errorFile = 'logs/pm2/build-optimizer-error.log'; this.ensureLogDirectory()} ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message,level = 'INFO') { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile,logMessage)} catch (error) { console.error('Failed to write to log file:',error.message)} } error(message) { this.log(message,'ERROR'); try { fs.appendFileSync(this.errorFile,`[${new Date().toISOString()}] ERROR: ${message}\n`)} catch (err) { console.error('Failed to write to error file:',err.message)} } async analyzeBundleSize() { this.log('Analyzing bundle size...'); try { const buildDir = this.findBuildDirectory(); if (!buildDir) { this.log('No build directory found','WARNING'); return { success: false,message: 'No build directory found' }} const bundleInfo = this.getBundleInfo(buildDir); this.log(`Bundle analysis completed:`); this.log(` - Total files: ${bundleInfo.totalFiles}`); this.log(` - Total size: ${(bundleInfo.totalSize / 1024 / 1024).toFixed(2)} MB`); this.log(` - Largest files: ${bundleInfo.largestFiles.length}`); return { success: true,buildDir,...bundleInfo }} catch (error) { this.error(`Bundle analysis failed: ${error.message}`); return { success: false,error: error.message }} } findBuildDirectory() { const possibleDirs = ['dist','build','out','.next','public']; for (const dir of possibleDirs) { if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) { return dir} } return null} getBundleInfo(buildDir) { const files = []; const largestFiles = []; function scanDirectory(dir,basePath = '') { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const relativePath = path.join(basePath,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { scanDirectory(fullPath,relativePath)} else if (stat.isFile()) { const fileInfo = { path: relativePath,size: stat.size,extension: path.extname(item) }; files.push(fileInfo); if (largestFiles.length < 10) { largestFiles.push(fileInfo); largestFiles.sort((a,b) => b.size - a.size)} else if (fileInfo.size > largestFiles[largestFiles.length - 1].size) { largestFiles[largestFiles.length - 1] = fileInfo; largestFiles.sort((a,b) => b.size - a.size)} } } } catch (error) { } } scanDirectory(buildDir); const totalSize = files.reduce((sum,file) => sum + file.size,0); const jsFiles = files.filter(f => f.extension === '.js'); const cssFiles = files.filter(f => f.extension === '.css'); return { totalFiles: files.length,totalSize,jsFiles: jsFiles.length,cssFiles: cssFiles.length,largestFiles: largestFiles.slice(0,5) }} async optimizeBundle() { this.log('Optimizing bundle...'); try { const optimizations = []; if (this.optimizeBundles) { const unusedDeps = await this.findUnusedDependencies(); if (unusedDeps.length > 0) { optimizations.push({ type: 'unused_dependencies',count: unusedDeps.length,dependencies: unusedDeps })} } const bundleAnalysis = await this.analyzeBundleSize(); if (bundleAnalysis.success) { const largeFiles = bundleAnalysis.largestFiles.filter(f => f.size > 100 * 1024); if (largeFiles.length > 0) { optimizations.push({ type: 'large_files',count: largeFiles.length,files: largeFiles })} } const duplicates = await this.findDuplicateDependencies(); if (duplicates.length > 0) { optimizations.push({ type: 'duplicate_dependencies',count: duplicates.length,duplicates })} this.log(`Found ${optimizations.length} optimization opportunities`); return { success: true,optimizations }} catch (error) { this.error(`Bundle optimization failed: ${error.message}`); return { success: false,error: error.message }} } async findUnusedDependencies() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); const dependencies = Object.keys(packageJson.dependencies || {}); const devDependencies = Object.keys(packageJson.devDependencies || {}); const allDeps = [...dependencies,...devDependencies]; const unusedDeps = []; for (const dep of allDeps) { if (!this.isDependencyUsed(dep)) { unusedDeps.push(dep)} } return unusedDeps} catch (error) { this.log(`Failed to check unused dependencies: ${error.message}`,'WARNING'); return []} } isDependencyUsed(dependency) { try { const files = this.getFilesToScan(['.js','.ts','.jsx','.tsx','.vue','.svelte']); for (const file of files) { try { const content = fs.readFileSync(file,'utf8'); const importPatterns = [ new RegExp(`import.*['"]${dependency}['"]`,'g'),new RegExp(`require\\(['"]${dependency}['"]\\)`,'g'),new RegExp(`from\\s+['"]${dependency}['"]`,'g'),new RegExp(`import\\s+['"]${dependency}/`,'g') ]; for (const pattern of importPatterns) { if (pattern.test(content)) { return true} } } catch (error) { } } return false} catch (error) { return false} } async findDuplicateDependencies() { try { const packageLockPath = 'package-lock.json'; if (!fs.existsSync(packageLockPath)) { return []} const packageLock = JSON.parse(fs.readFileSync(packageLockPath,'utf8')); const duplicates = []; const dependencyVersions = new Map(); function analyzeDependencies(deps,path = '') { if (!deps) return; for (const [name,version] of Object.entries(deps)) { const fullPath = path ? `${path}.${name}` : name; if (dependencyVersions.has(name)) { const existing = dependencyVersions.get(name); if (existing.version !== version) { duplicates.push({ name,versions: [existing.version,version],paths: [existing.path,fullPath] })} } else { dependencyVersions.set(name,{ version,path: fullPath })} if (typeof version === 'object' && version.dependencies) { analyzeDependencies(version.dependencies,fullPath)} } } analyzeDependencies(packageLock.dependencies); return duplicates} catch (error) { this.log(`Failed to check duplicate dependencies: ${error.message}`,'WARNING'); return []} } getFilesToScan(extensions) { const files = []; function scanDirectory(dir) { try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { if (!['node_modules','.git','dist','build','coverage','logs'].includes(item)) { scanDirectory(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item); if (extensions.includes(ext)) { files.push(fullPath)} } } } catch (error) { } } scanDirectory(process.cwd()); return files} async generateOptimizationReport() { this.log('Generating optimization report...'); try { const report = { timestamp: new Date().toISOString(),processName: this.processName,bundleAnalysis: await this.analyzeBundleSize(),optimizationResults: await this.optimizeBundle(),environment: { nodeVersion: process.version,platform: process.platform,cwd: process.cwd() } }; const reportFile = `optimization-reports/build-optimization-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(`Optimization report saved to: ${reportFile}`); return report} catch (error) { this.error(`Failed to generate optimization report: ${error.message}`); return null} } async start() { this.log(`Starting ${this.processName}...`); await this.generateOptimizationReport(); const interval = 24 * 60 * 60 * 1000; setInterval(async () => { this.log('Running scheduled build optimization...'); await this.generateOptimizationReport()},interval); this.log(`${this.processName} started successfully`)} } if (require.main === module) { const optimizer = new BuildOptimizer(); optimizer.start().catch(error => { console.error('Build optimizer failed to start:',error); process.exit(1)})} module.exports = BuildOptimizer;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/automate-test-improve-and-merge-code-8ee2
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
optimizer.run().catch(error = > {process.exit(1)});
origin/main
origin/automation-improvements-final
optimizer.run().catch(error = > {process.exit(1)});
=======
    },
    details: {, build: buildStats, analyzer: analyzerInfo,
    settings: settingsInfo}; optimizations: []};
; // Calculate optimization score; let score = 0; const maxScore = 100;
; if (buildStats?.stats?.totalSizeMB < 2) score + = 30; else if (buildStats?.stats?.totalSizeMB < 5) score + = 20; else if (buildStats?.stats?.totalSizeMB < 10) score + = 10;
; if (settingsInfo?.settings?.minification) score + = 20; if (settingsInfo?.settings?.compression) score + = 15; if (settingsInfo?.settings?.treeShaking) score + = 15; if (settingsInfo?.settings?.codeSplitting) score + = 10; if (analyzerInfo?.available) score + = 10;
; report && report.summary.optimizationScore = Math && Math.min(score, maxScore);
; // Generate optimization recommendations; if (buildStats?.stats?.totalSizeMB > 5) {; report && report.optimizations.push({; priority: 'high', type: 'bundle-size', message: 'Bundle size is large', action: 'Implement code splitting and tree shaking', impact: 'high'})};
; if (!settingsInfo?.settings?.minification) {; report && report.optimizations.push({; priority: 'high', type: 'minification', message: 'Minification not enabled', action: 'Enable SWC minification in Next && Next.js config', impact: 'high'})};
; if (!settingsInfo?.settings?.compression) {; report && report.optimizations.push({; priority: 'medium', type: 'compression', message: 'Compression not enabled', action: 'Enable gzip compression', impact: 'medium'})};
; if (!analyzerInfo?.available) {; report && report.optimizations.push({; priority: 'low', type: 'analysis', message: 'Bundle analyzer not available', action: 'Install webpack-bundle-analyzer for detailed analysis', impact: 'low'})};
; return report};
; async saveReport(report) {; try {; const reportDir = path && path.dirname(this && this.reportFile); if (!fs && fs.existsSync(reportDir)) {; fs && fs.mkdirSync(reportDir, { recursive: true })};
; fs && fs.writeFileSync(this && this.reportFile, JSON && JSON.stringify(report, null, 2)); this && this.log(`Report saved to: ${this && this.reportFile}`)} catch (error) {; this && this.log(`Error saving report: ${error && error.message}`)}};
; async run() {; this && this.log('🚀 Starting Build Optimizer...'); this && this.log(`Project root: ${this && this.projectRoot}`);
; try {; // Create logs directory if it doesn't exist; const logsDir = path && path.dirname(this && this.logFile); if (!fs && fs.existsSync(logsDir)) {; fs && fs.mkdirSync(logsDir, { recursive: true })};
; // Run all optimization checks; const buildStats = await this && this.analyzeBuild(); const analyzerInfo = await this && this.checkBundleAnalyzer(); const settingsInfo = await this && this.checkOptimizationSettings();
; // Generate report; this && this.log('📊 Generating optimization report...'); const report = await this && this.generateOptimizationReport(buildStats, analyzerInfo, settingsInfo);
; // Save report; await this && this.saveReport(report);
; const duration = Date && Date.now() - this && this.startTime;
; // Log summary; this && this.log('\n📊 Build Optimizer Summary: '); this && this.log(`Build size: ${report && report.summary.buildSize} MB`); this && this.log(`File count: ${report && report.summary.fileCount}`); this && this.log(`Optimization score: ${report && report.summary.optimizationScore}/100`); this && this.log(`Duration: ${duration}ms`);
; if (report && report.optimizations.length > 0) {; this && this.log('\n💡 Optimization Recommendations: '), report && report.optimizations.forEach(opt = > {, this && this.log(` [${opt && opt.priority.toUpperCase()}] ${opt && opt.message}`); this && this.log(` Action: ${opt && opt.action}`); this && this.log(` Impact: ${opt && opt.impact}`)})} else {; this && this.log('\n✨ Build is well optimized!')};
} catch (error) {; this && this.log(`❌ Error running build optimizer: ${error && error.message}`); process && process.exit(1)}}};

// Run the build optimizer;
const optimizer = new BuildOptimizer();
optimizer && optimizer.run().catch(error = > {; process && process.exit(1)});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}}
; async analyze_build () { try { this.log ('🏗️ Analyzing current build...');
; if () {) {
  $2
} this.log ('📦 Building project first...'); exec_sync ('npm run build', { cwd: this.project_root,
    stdio: 'pipe'})}
; const build_stats = { total_size: 0, file_count: 0, largest_files: [], js_files: [], css_files: [],
    asset_files: []}
; const analyze_directory = (dir) = > { const items = fs.readdir_sync (dir); items.for_each (item = > { const full_path = path.join (dir, item); const stat = fs.stat_sync (full_path);
; if () {) {
  $2
} analyze_directory (full_path)} else { const file_info = { path: full_path.replace (this.project_root + '/dist/', ''); size: stat.size,
    sizeKB: Math.round (stat.size / 1024 * 100) / 100}
; build_stats.total_size + = stat.size; build_stats.file_count++;
; if () {) {
  $2
} build_stats.js_files.push (file_info)} else if () {) {
  $2
} build_stats.css_files.push (file_info)} else { build_stats.asset_files.push (file_info)}}})}
; analyze_directory ('dist');
; // Sort files by size; const all_files = [...build_stats.js_files, ...build_stats.css_files, ...build_stats.asset_files]; build_stats.largest_files = all_files; .sort ((a, b) = > b.size - a.size); .slice (0, 10);
; build_stats.totalSizeMB = Math.round (build_stats.total_size / (1024 * 1024) * 100) / 100;
; return { success: true,
    stats: build_stats}} catch (error) { return { success: false, error: error.message, stats: null}}}
; async checkBundleAnalyzer () { try { this.log ('📊 Checking bundle analyzer availability...');
; const package_json = JSON.parse (fs.readFileSync ('package.json', 'utf8')); const has_analyzer = package_json.dev_dependencies &&; (package_json.dev_dependencies['webpack - bundle - analyzer'] ||; package_json.dev_dependencies['@next / bundle - analyzer']);
; return { available: has_analyzer, package: has_analyzer ?, (package_json.dev_dependencies['webpack - bundle - analyzer'] ? 'webpack - bundle - analyzer': '@next / bundle - analyzer'): ; null}} catch (error) { return { available: false,
    error: error.message}}}
; async checkOptimizationSettings () { try { this.log ('⚙️ Checking optimization settings...');
; const settings = { tree_shaking: false, minification: false, code_splitting: false,
    compression: false}
; // Check Next.js config; if () {) {
  $2
} const next_config = fs.readFileSync ('next.config.js', 'utf8'); settings.minification = next_config.includes ('swc_minify: true') || next_config.includes ('swc_minify: true'); settings.compression = next_config.includes ('compress: true') || next_config.includes ('compress: true')}
; // Check package.json for optimization scripts; const package_json = JSON.parse (fs.readFileSync ('package.json', 'utf8')); const scripts = package_json.scripts || {}
; settings.tree_shaking = scripts.build && scripts.build.includes ('--tree - shaking'); settings.code_splitting = scripts.build && scripts.build.includes ('--experimental - build - mode');
; return { success: true,
    settings: settings}} catch (error) { return { success: false, error: error.message, settings: null}}}
; async generateOptimizationReport (build_stats, analyzer_info, settings_info) { const report = { timestamp: new Date ().toISOString (), summary: {
      , build_size: build_stats?.stats?.totalSizeMB || 0, file_count: build_stats?.stats?.file_count || 0, optimization_score: 0,
    recommendations: [];
    },
    details: {, build: build_stats, analyzer: analyzer_info,
    settings: settings_info} optimizations: []}
; // Calculate optimization score; let score = 0; const max_score = 100;
; // Check condition
if (score + = 30) {
  $2
} else // Check condition
if (score + = 20) {
  $2
} else // Check condition
if (score + = 10) {
  $2
} // Check condition
if (score + = 20) {
  $2
} // Check condition
if (score + = 15) {
  $2
} // Check condition
if (score + = 15) {
  $2
} // Check condition
if (score + = 10) {
  $2
} // Check condition
if (score + = 10) {
  $2
} report.summary.optimization_score = Math.min (score, max_score);
; // Generate optimization recommendations; // Check condition
if ( {) {
  $2
} report.optimizations.push ({ priority: 'high', type: 'bundle - size', message: 'Bundle size is large', action: 'Implement code splitting and tree shaking', impact: 'high'})}
; // Check condition
if ( {) {
  $2
} report.optimizations.push ({ priority: 'high', type: 'minification', message: 'Minification not enabled', action: 'Enable SWC minification in Next.js config', impact: 'high'})}
; // Check condition
if ( {) {
  $2
} report.optimizations.push ({ priority: 'medium', type: 'compression', message: 'Compression not enabled', action: 'Enable gzip compression', impact: 'medium'})}
; // Check condition
if ( {) {
  $2
} report.optimizations.push ({ priority: 'low', type: 'analysis', message: 'Bundle analyzer not available', action: 'Install webpack - bundle - analyzer for detailed analysis', impact: 'low'})}
; return report}
; async save_report (report) { try { const report_dir = path.dirname (this.report_file); if () {) {
  $2
} fs.mkdir_sync (report_dir, { recursive: true })}
; fs.writeFileSync (this.report_file, JSON.stringify (report, null, 2)); this.log (`Report saved to: ${this.report_file}`)} catch (error) { this.log (`Error saving report: ${error.message}`)}}
; async run () { this.log ('🚀 Starting Build Optimizer...'); this.log (`Project root: ${this.project_root}`);
; try { // Create logs directory if it doesn't exist; const logs_dir = path.dirname (this.log_file); if () {) {
  $2
} fs.mkdir_sync (logs_dir, { recursive: true })}
; // Run all optimization checks; const build_stats = await this.analyze_build (); const analyzer_info = await this.checkBundleAnalyzer (); const settings_info = await this.checkOptimizationSettings ();
; // Generate report; this.log ('📊 Generating optimization report...'); const report = await this.generateOptimizationReport (build_stats, analyzer_info, settings_info);
; // Save report; await this.save_report (report);
; const duration = Date.now () - this.start_time;
; // Log summary; this.log ('\n📊 Build Optimizer Summary: '); this.log (`Build size: ${report.summary.build_size} MB`); this.log (`File count: ${report.summary.file_count}`); this.log (`Optimization score: ${report.summary.optimization_score}/100`); this.log (`Duration: ${duration}ms`);
; // Check condition
if ( {) {
  $2
} this.log ('\n💡 Optimization Recommendations: '), report.optimizations.for_each (opt = > {, this.log (` [${opt.priority.toUpperCase ()}] ${opt.message}`); this.log (` Action: ${opt.action}`); this.log (` Impact: ${opt.impact}`)})} else { this.log ('\n✨ Build is well optimized!')}
} catch (error) { this.log (`❌ Error running build optimizer: ${error.message}`); process.exit (1)}}}
;

    } catch (error) {,;
      this.log(`❌ Error running build: optimizer: ${error.message}`),;
      process.exit(1);
    }
  }
},;
,;
// Run the build optimizer,;
const optimizer = new BuildOptimizer(),;
optimizer.run().catch(error => {,;
  process.exit(1);
}),;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
