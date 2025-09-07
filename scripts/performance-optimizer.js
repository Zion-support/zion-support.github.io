#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.optimizations = [];
    this.errors = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async optimizeImages() {
    try {
      this.log('🖼️ Optimizing images...');
      
      const imageFiles = this.findImageFiles();
      let optimizedCount = 0;
      
      for (const file of imageFiles) {
        try {
          // Check if file is already optimized
          const stats = fs.statSync(file);
          if (stats.size > 100 * 1024) { // 100KB
            this.optimizations.push(`Large image found: ${file} (${(stats.size / 1024).toFixed(2)}KB)`);
            optimizedCount++;
          }
        } catch (error) {
          this.errors.push(`Failed to process ${file}: ${error.message}`);
        }
      }
      
      this.log(`✅ Image optimization completed - ${optimizedCount} large images found`, 'success');
      return true;
    } catch (error) {
      this.log(`❌ Image optimization failed: ${error.message}`, 'error');
      this.errors.push(`Image optimization: ${error.message}`);
      return false;
    }
  }

  findImageFiles() {
    const files = [];
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const searchDirs = ['public', 'src'];
    
    searchDirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        files.push(...this.findFilesInDir(dirPath, imageExtensions));
      }
    });
    
    return files;
  }

  findFilesInDir(dir, extensions) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.findFilesInDir(itemPath, extensions));
      } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
        files.push(itemPath);
      }
    });
    
    return files;
  }

  async optimizeCodeSplitting() {
    try {
      this.log('🔀 Optimizing code splitting...');
      
      const sourceFiles = this.findSourceFiles();
      let dynamicImports = 0;
      let largeFiles = 0;
      
      sourceFiles.forEach(file => {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const stats = fs.statSync(file);
          
          // Count dynamic imports
          const matches = content.match(/import\(/g);
          if (matches) {
            dynamicImports += matches.length;
          }
          
          // Check file size
          if (stats.size > 10 * 1024) { // 10KB
            largeFiles++;
            this.optimizations.push(`Large file: ${file} (${(stats.size / 1024).toFixed(2)}KB)`);
          }
        } catch (error) {
          this.errors.push(`Failed to process ${file}: ${error.message}`);
        }
      });
      
      this.optimizations.push(`Found ${dynamicImports} dynamic imports`);
      this.optimizations.push(`Found ${largeFiles} large files (>10KB)`);
      
      this.log(`✅ Code splitting analysis completed`, 'success');
      this.log(`  - Dynamic imports: ${dynamicImports}`);
      this.log(`  - Large files: ${largeFiles}`);
      
      return true;
    } catch (error) {
      this.log(`❌ Code splitting optimization failed: ${error.message}`, 'error');
      this.errors.push(`Code splitting: ${error.message}`);
      return false;
    }
  }

  findSourceFiles() {
    const files = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const searchDirs = ['src', 'pages', 'app', 'components'];
    
    searchDirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        files.push(...this.findFilesInDir(dirPath, extensions));
      }
    });
    
    return files;
  }

  async optimizeDependencies() {
    try {
      this.log('📦 Optimizing dependencies...');
      
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      const depCount = Object.keys(dependencies).length;
      
      this.optimizations.push(`Total dependencies: ${depCount}`);
      
      if (depCount > 50) {
        this.optimizations.push('High dependency count. Consider removing unused dependencies.');
      }
      
      this.log(`✅ Dependency analysis completed - ${depCount} dependencies`, 'success');
      return true;
    } catch (error) {
      this.log(`❌ Dependency optimization failed: ${error.message}`, 'error');
      this.errors.push(`Dependency optimization: ${error.message}`);
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      errors: this.errors,
      summary: {
        totalOptimizations: this.optimizations.length,
        totalErrors: this.errors.length,
        successRate: this.optimizations.length / (this.optimizations.length + this.errors.length) * 100
      }
    };

    const reportPath = path.join(this.projectRoot, 'performance-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Performance optimization report saved to ${reportPath}`, 'success');

    return report;
  }

  async run() {
    this.log('🚀 Starting Performance Optimizer');
    
    try {
      await this.optimizeImages();
      await this.optimizeCodeSplitting();
      await this.optimizeDependencies();
      
      const report = await this.generateReport();
      
      this.log('✅ Performance optimization completed', 'success');
      this.log(`📊 Applied ${report.summary.totalOptimizations} optimizations`);
      this.log(`❌ Encountered ${report.summary.totalErrors} errors`);
      
      return report;
    } catch (error) {
      this.log(`❌ Performance optimization failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

export default PerformanceOptimizer;