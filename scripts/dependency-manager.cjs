#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DependencyManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'dependency-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async checkOutdatedDependencies() {
    this.log('📦 Checking outdated dependencies...');
    try {
      const result = execSync('npm outdated --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      });
      
      const outdated = JSON.parse(result);
      const outdatedCount = Object.keys(outdated).length;
      
      this.log(`📦 Found ${outdatedCount} outdated dependencies`);
      
      return {
        outdated,
        count: outdatedCount,
        status: outdatedCount === 0 ? 'up_to_date' : 'needs_update'
      };
    } catch (error) {
      this.log(`❌ Outdated dependencies check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  async checkVulnerableDependencies() {
    this.log('🔍 Checking vulnerable dependencies...');
    try {
      const result = execSync('npm audit --audit-level=moderate --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      });
      
      const auditData = JSON.parse(result);
      const vulnerabilities = auditData.vulnerabilities || {};
      const vulnerabilityCount = Object.keys(vulnerabilities).length;
      
      this.log(`🔍 Found ${vulnerabilityCount} vulnerable dependencies`);
      
      return {
        vulnerabilities,
        count: vulnerabilityCount,
        status: vulnerabilityCount === 0 ? 'secure' : 'vulnerable'
      };
    } catch (error) {
      this.log(`❌ Vulnerable dependencies check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  async checkUnusedDependencies() {
    this.log('🔍 Checking unused dependencies...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found');
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const sourceFiles = this.findSourceFiles();
      const usedDependencies = new Set();

      // Check for import/require statements
      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Match import statements
          const importMatches = content.match(/import\s+.*?\s+from\s+['"`]([^'"`]+)['"`]/g);
          if (importMatches) {
            importMatches.forEach(match => {
              const dep = match.match(/from\s+['"`]([^'"`]+)['"`]/)[1];
              if (dep && !dep.startsWith('.')) {
                usedDependencies.add(dep);
              }
            });
          }

          // Match require statements
          const requireMatches = content.match(/require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)/g);
          if (requireMatches) {
            requireMatches.forEach(match => {
              const dep = match.match(/require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)/)[1];
              if (dep && !dep.startsWith('.')) {
                usedDependencies.add(dep);
              }
            });
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }

      const unusedDependencies = Object.keys(dependencies).filter(dep => 
        !usedDependencies.has(dep) && !this.isFrameworkDependency(dep)
      );

      this.log(`🔍 Found ${unusedDependencies.length} unused dependencies`);

      return {
        unused: unusedDependencies,
        count: unusedDependencies.length,
        status: unusedDependencies.length === 0 ? 'clean' : 'has_unused'
      };
    } catch (error) {
      this.log(`❌ Unused dependencies check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  isFrameworkDependency(dep) {
    // Framework dependencies that might not be directly imported
    const frameworkDeps = [
      'next',
      'react',
      'react-dom',
      'typescript',
      'eslint',
      'prettier',
      'jest',
      'tailwindcss',
      'postcss',
      'autoprefixer'
    ];
    
    return frameworkDeps.some(framework => dep.includes(framework));
  }

  async checkDuplicateDependencies() {
    this.log('🔍 Checking duplicate dependencies...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found');
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const duplicates = [];
      const seen = new Map();

      Object.entries(dependencies).forEach(([name, version]) => {
        if (seen.has(name)) {
          duplicates.push({
            name,
            versions: [seen.get(name), version],
            type: 'duplicate'
          });
        } else {
          seen.set(name, version);
        }
      });

      this.log(`🔍 Found ${duplicates.length} duplicate dependencies`);

      return {
        duplicates,
        count: duplicates.length,
        status: duplicates.length === 0 ? 'clean' : 'has_duplicates'
      };
    } catch (error) {
      this.log(`❌ Duplicate dependencies check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  async checkDependencySize() {
    this.log('📊 Checking dependency size...');
    try {
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        throw new Error('node_modules not found. Run npm install first.');
      }

      const stats = this.getDirectorySize(nodeModulesPath);
      const sizeInMB = stats.size / (1024 * 1024);
      
      this.log(`📊 Total dependency size: ${this.formatBytes(stats.size)}`);

      return {
        size: stats.size,
        sizeInMB,
        files: stats.files,
        status: sizeInMB < 100 ? 'good' : sizeInMB < 500 ? 'fair' : 'large'
      };
    } catch (error) {
      this.log(`❌ Dependency size check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    let fileCount = 0;

    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.isDirectory()) {
            scanDirectory(filePath);
          } else {
            totalSize += stats.size;
            fileCount++;
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    };

    scanDirectory(dirPath);
    return { size: totalSize, files: fileCount };
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  findSourceFiles() {
    const sourceFiles = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath);
          } else if (stats.isFile()) {
            const ext = path.extname(file);
            if (extensions.includes(ext)) {
              sourceFiles.push(filePath);
            }
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    };

    scanDirectory(this.projectRoot);
    return sourceFiles;
  }

  async generateDependencyReport() {
    this.log('📊 Generating dependency report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      analysis: {
        outdated: await this.checkOutdatedDependencies(),
        vulnerable: await this.checkVulnerableDependencies(),
        unused: await this.checkUnusedDependencies(),
        duplicates: await this.checkDuplicateDependencies(),
        size: await this.checkDependencySize()
      }
    };

    // Generate recommendations
    report.recommendations = this.generateRecommendations(report.analysis);

    const reportFile = path.join(this.reportsDir, `dependency-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Dependency report generated: ${reportFile}`);
    
    return report;
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    if (analysis.outdated && analysis.outdated.count > 0) {
      recommendations.push({
        type: 'outdated_dependencies',
        priority: 'medium',
        message: `Found ${analysis.outdated.count} outdated dependencies. Consider updating them.`,
        impact: 'Improves security and performance'
      });
    }

    if (analysis.vulnerable && analysis.vulnerable.count > 0) {
      recommendations.push({
        type: 'vulnerable_dependencies',
        priority: 'high',
        message: `Found ${analysis.vulnerable.count} vulnerable dependencies. Run 'npm audit fix' to resolve.`,
        impact: 'Reduces security risks'
      });
    }

    if (analysis.unused && analysis.unused.count > 0) {
      recommendations.push({
        type: 'unused_dependencies',
        priority: 'low',
        message: `Found ${analysis.unused.count} unused dependencies. Consider removing them.`,
        impact: 'Reduces bundle size and maintenance overhead'
      });
    }

    if (analysis.duplicates && analysis.duplicates.count > 0) {
      recommendations.push({
        type: 'duplicate_dependencies',
        priority: 'medium',
        message: `Found ${analysis.duplicates.count} duplicate dependencies. Consolidate them.`,
        impact: 'Reduces bundle size and potential conflicts'
      });
    }

    if (analysis.size && analysis.size.sizeInMB > 500) {
      recommendations.push({
        type: 'large_dependencies',
        priority: 'low',
        message: `Dependencies are large (${analysis.size.sizeInMB.toFixed(1)}MB). Consider optimizing.`,
        impact: 'Reduces installation time and disk usage'
      });
    }

    return recommendations;
  }

  async run() {
    this.log('📦 Starting Dependency Manager...');
    
    try {
      const report = await this.generateDependencyReport();
      
      this.log('🎉 Dependency analysis completed!');
      this.log(`📦 Outdated: ${report.analysis.outdated.count || 0}`);
      this.log(`🔍 Vulnerable: ${report.analysis.vulnerable.count || 0}`);
      this.log(`🔍 Unused: ${report.analysis.unused.count || 0}`);
      this.log(`🔍 Duplicates: ${report.analysis.duplicates.count || 0}`);
      this.log(`📊 Size: ${this.formatBytes(report.analysis.size.size || 0)}`);
      this.log(`💡 Recommendations: ${report.recommendations.length}`);
      
      return report;
    } catch (error) {
      this.log(`💥 Dependency analysis failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the manager if this file is executed directly
if (require.main === module) {
  const manager = new DependencyManager();
  manager.run()
    .then((report) => {
      console.log('\n🎉 Dependency Manager completed successfully!');
      console.log(`📦 Outdated: ${report.analysis.outdated.count || 0}`);
      console.log(`💡 Recommendations: ${report.recommendations.length}`);
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Dependency Manager failed:', error.message);
      process.exit(1);
    });
}

module.exports = DependencyManager;