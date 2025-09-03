

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');
;
class SmartDependencyOptimizer {;
  constructor() {;
    this.projectRoot = process.cwd();

    );
    this.ensureLogsDirectory();
    this.loadOptimizationHistory()}
;
  ensureLogsDirectory() {;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir { recursive: true })}
  }

      }
    } else {;
      this.optimizationHistory = {;
        optimizations: [],;
        lastRun: null,;
        totalSavings: 0,}}
  }
;
  saveOptimizationHistory() {;
    fs.writeFileSync(;
      this.optimizationLog,;
      JSON.stringify(this.optimizationHistory, null, 2);
    )}

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
;
    fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}

      );
;
      return { optimizations: appliedOpts, results, recommendations };

      );
      throw error}
  }

      );
      const dependencies = {;
        ...packageJson.dependencies,;
        ...packageJson.devDependencies,};

        const usage = this.findDependencyUsage(depName, importAnalysis);
;
        if (usage.count > 0) {;
          usage.direct[dep] = {;
            name: depName,;
            version: dependencies[dep],;
            usageCount: usage.count,;
            files: usage.files,;
            lastUsed: usage.lastUsed,}} else {;
          usage.unused.push(dep)}
      })}
;
    return usage}

    const files = [];
;
    sourceDirs.forEach(dir => {;
      const fullPath = path.join(this.projectRoot, 'dir);

          files;
        )}
    });
;
    return files}
;
  findFilesRecursively(dir, extensions, files) {;
    const items = fs.readdirSync(dir);
;
    items.forEach(item => {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
;
      if (;
        stat.isDirectory() &&;
        !item.startsWith('.') &&;
        item !== 'node_modules';
      ) {;
        this.findFilesRecursively(fullPath, extensions, files)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath)}
    })}
;
  analyzeImports(sourceFiles) {;
    const imports = {};
;
    sourceFiles.forEach(file => {;
      try {;
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
;
        lines.forEach((line, index) => {;
          if (line.includes('import') && line.includes('from')) {;
            const importMatch = line.match(/from\s+['"]([^'"]+)['"]/);
            if (importMatch) {;
              const importPath = importMatch[1];
              const packageName = this.extractPackageName(importPath);
;
              if (packageName && !packageName.startsWith('.')) {;
                if (!imports[packageName]) {;
                  imports[packageName] = {;
                    count: 0,;
                    files: [],;
                    lastUsed: new Date().toISOString(),}}
;
                imports[packageName].count++;
                if (!imports[packageName].files.includes(file)) {;
                  imports[packageName].files.push(file)}
                imports[packageName].lastUsed = new Date().toISOString()}
            }
          }
        })});
;
    return imports}

    }
  }
;
  findDependencyUsage(depName, importAnalysis) {;
    const usage = { count: 0, files: [], lastUsed: null };

        usage.count += importAnalysis[pkg].count;
        usage.files.push(...importAnalysis[pkg].files);
        if (!usage.lastUsed || importAnalysis[pkg].lastUsed > usage.lastUsed) {;
          usage.lastUsed = importAnalysis[pkg].lastUsed}
      }
    });
;
    return usage}
;
  analyzeUsagePatterns(importAnalysis) {;
    const patterns = {;
      mostUsed: [],;
      recentlyUsed: [],;
      rarelyUsed: [],};

    );
;
    patterns.mostUsed = sortedByUsage.slice(0, 10).map((['pkg', 'data']) => ({;
      package: pkg,;
      usageCount: data.count,;
      files: data.files.length,}));
;
    const sortedByDate = Object.entries(importAnalysis).sort(;
      ([', 'a'], [', 'b']) => new Date(b.lastUsed) - new Date(a.lastUsed);
    );
;
    patterns.recentlyUsed = sortedByDate.slice(0, 10).map((['pkg', 'data']) => ({;
      package: pkg,;
      lastUsed: data.lastUsed,;
      usageCount: data.count,}));
;
    return patterns}
;
  async identifyUnusedDependencies(usageAnalysis) {;
    this.log('🔍 Identifying unused dependencies...');
;
    const unused = [];

      );
      const allDeps = {;
        ...packageJson.dependencies,;
        ...packageJson.devDependencies,};
;
      Object.keys(allDeps).forEach(dep => {;
        const depName = dep.split('@')[0];

      )}
;
    return unused}

        );
        return Object.keys(packageLock.dependencies).some(;
          pkg =>;
            packageLock.dependencies[pkg].requires &&;
            packageLock.dependencies[pkg].requires[depName];
        )}

    return false}
;
  async analyzeDependencyConflicts() {;
    this.log('⚡ Analyzing dependency conflicts...');
;
    const conflicts = [];

      // Check for duplicate packages;
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {;
        const packageLock = JSON.parse(;
          fs.readFileSync(packageLockPath, 'utf8');
        );
        const duplicates = this.findDuplicatePackages(packageLock.dependencies);

      )}
;
    return conflicts}
;
  findDuplicatePackages(dependencies) {;
    const packageVersions = {};
    const duplicates = [];

      Object.keys(deps).forEach(pkg => {const fullPath = path ? `${path}.${pkg}` : pkg;
        const version = deps[pkg].version;
;
        if (!packageVersions[pkg]) {;
          packageVersions[pkg] = []}
;
        packageVersions[pkg].push({;
          version,;
          path: fullPath,});
;
        if (deps[pkg].dependencies) {;
          traverse(deps[pkg].dependencies, fullPath)}
      })};
;
    traverse(dependencies);
;
    Object.keys(packageVersions).forEach(pkg => {;
      if (packageVersions[pkg].length > 1) {;
        const uniqueVersions = [
          ...new Set(packageVersions[pkg].map(p => p.version))];
        if (uniqueVersions.length > 1) {;
          duplicates.push({;
            package: pkg,;
            versions: uniqueVersions,;
            paths: packageVersions[pkg].map(p => p.path),})}
      }
    });
;
    return duplicates}
;
  async checkPeerDependencies() {;
    const issues = [];

      );
;
      if (packageJson.peerDependencies) {;
        Object.keys(packageJson.peerDependencies).forEach(peerDep => {;
          const requiredVersion = packageJson.peerDependencies[peerDep];
          const installedVersion = this.getInstalledVersion(peerDep)})}
        })}

      );
      if (fs.existsSync(packageJsonPath)) {;
        const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        return pkg.version}

    return null}
;
  async checkOutdatedDependencies() {;
    this.log('📅 Checking for outdated dependencies...');
;
    const outdated = [];

      );
      const dependencies = {;
        ...packageJson.dependencies,;
        ...packageJson.devDependencies,}}
;
    return outdated}

    const major = parseInt(versionParts[0]);
    const minor = parseInt(versionParts[1]);
    const patch = parseInt(versionParts[2]);
return `${major}.${minor + 1}.${patch}`}

          })}
      }
    } catch (error) {  this.log(`Bundle impact analysis failed: ${error.message  }`, `ERROR`)}
;
    return impact}
;
  analyzeBundleSize() {;
    const stats = {;
      totalSize: 0,;
      largestPackages: [],};

        const files = this.getAllFiles(distPath);
        let totalSize = 0;
;
        files.forEach(file => {;
          const fileStats = fs.statSync(file);
          totalSize += fileStats.size});
;
        stats.totalSize = totalSize;
        stats.totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2)}
    } catch (error) {  this.log(`Bundle size analysis failed: ${error.message  }`, `ERROR`)}
;
    return stats}
;
  getAllFiles(dir) {;
    const files = [];
;
    const findFiles = directory => {;
      const items = fs.readdirSync(directory);

        const stat = fs.statSync(fullPath);
;
        if (stat.isDirectory()) {;
          findFiles(fullPath)} else if (stat.isFile()) {;
          files.push(fullPath)}
      }
    };
;
    findFiles(dir);
    return files}

    this.log('💡 Generating optimization recommendations...');
;
    const recommendations = []})}
;
    return recommendations}
;
  async applySafeOptimizations(recommendations) {;
    this.log('🔧 Applying safe optimizations...');
;
    const applied = [];
;
    try {;
      for (const rec of recommendations) {;
        if (rec.type === 'REMOVE_UNUSED' && rec.priority === 'HIGH') {;
          const removed = await this.removeUnusedDependencies(rec.dependencies)})}
        }
      }

      )}
;
    return applied}
;
  async removeUnusedDependencies(unusedDeps) {;
    const removed = []});
            removed.push(dep.name);this.log(`✅ Removed unused dev dependency: ${dep.name}`)} catch (error) {  this.log(`Failed to remove ${dep.name  }: ${error.message}`, `WARN`)}
        }
      }
    } catch (error) {  this.log(`Dependency removal failed: ${error.message  }`, `ERROR`)}
;
    return removed}

        .reduce((total, opt) => total + opt.dependencies.length, 0)} catch (error) {  this.log(`Results measurement failed: ${error.message  }`, `ERROR`)}
;
    return results}
;
  async updateOptimizationHistory(optimizations, results) {;
    const optimization = {;
      timestamp: new Date().toISOString(),;
      optimizations: optimizations,;
      results: results,;
      totalSavings:;
        this.optimizationHistory.totalSavings + results.bundleSizeReduction,};
;
    this.optimizationHistory.optimizations.push(optimization);
    this.optimizationHistory.lastRun = new Date().toISOString();
    this.optimizationHistory.totalSavings = optimization.totalSavings;

        this.optimizationHistory.optimizations.slice(-10)}
;
    this.saveOptimizationHistory()}
;
  async generateOptimizationReport(optimizations, results, recommendations) {;
    const report = {;
      timestamp: new Date().toISOString(),;
      summary: {;
        totalOptimizations: optimizations.length,;
        bundleSizeReduction: results.bundleSizeReduction,;
        dependencyCountReduction: results.dependencyCountReduction,;
        totalSavings: this.optimizationHistory.totalSavings,},;
      optimizations: optimizations,;
      results: results,;
      recommendations: recommendations,;
      history: this.optimizationHistory,};


    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
this.log(`📊 Optimization Report generated: ${reportPath}`);
    return report}

      );
;
      return result;

      );
      throw error}
  }
}

  const optimizer = new SmartDependencyOptimizer();
  optimizer.run().catch(console.error)}
;
module.exports = SmartDependencyOptimizer;
