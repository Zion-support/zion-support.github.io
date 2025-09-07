#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')

#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')



const { execSync } = require('child_process')
    console.error(' Bundle analysis "failed")
    console.error(' Bundle analysis "failed")

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BundleAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.analysis = {
      totalSize: 0,
      files: [],
      chunks: [],
      recommendations: []
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async analyzeBundle() {
    this.log('Starting bundle analysis...', 'PROGRESS');
    
    try {
      await this.analyzeBuildOutput();
      await this.analyzeSourceFiles();
      await this.generateRecommendations();
      await this.generateReport();
      
      this.log('Bundle analysis completed', 'SUCCESS');
      return this.analysis;
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async analyzeBuildOutput() {
    this.log('Analyzing build output...', 'PROGRESS');
    
    const buildDir = path.join(this.projectRoot, '.next');
    if (!fs.existsSync(buildDir)) {
      this.log('Build directory not found. Running build first...', 'WARNING');
      try {
        execSync('npm run build', {
          stdio: 'pipe',
          encoding: 'utf8',
          timeout: 300000 // 5 minutes
        });
      } catch (error) {
        this.log(`Build failed: ${error.message}`, 'ERROR');
        return;
      }
    }

    // Analyze static files
    const staticDir = path.join(buildDir, 'static');
    if (fs.existsSync(staticDir)) {
      this.analyzeDirectory(staticDir, 'static');
    }

    // Analyze pages
    const pagesDir = path.join(buildDir, 'server', 'pages');
    if (fs.existsSync(pagesDir)) {
      this.analyzeDirectory(pagesDir, 'pages');
    }
  }

  analyzeDirectory(dir, type) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.analyzeDirectory(filePath, type);
      } else {
        const size = stat.size;
        this.analysis.totalSize += size;
        
        this.analysis.files.push({
          path: filePath.replace(this.projectRoot, ''),
          size: size,
          type: type,
          sizeKB: Math.round(size / 1024)
        });
      }
    }
  }

  async analyzeSourceFiles() {
    this.log('Analyzing source files...', 'PROGRESS');
    
    const sourceDirs = ['src', 'pages', 'app', 'components'];
    let totalSourceSize = 0;
    let fileCount = 0;

    for (const dir of sourceDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        const stats = this.analyzeSourceDirectory(dirPath);
        totalSourceSize += stats.size;
        fileCount += stats.count;
      }
    }

    this.analysis.sourceStats = {
      totalSize: totalSourceSize,
      fileCount: fileCount,
      averageFileSize: fileCount > 0 ? Math.round(totalSourceSize / fileCount) : 0
    };
  }

  analyzeSourceDirectory(dir) {
    let totalSize = 0;
    let fileCount = 0;

    const scanDirectory = (currentDir) => {
      const files = fs.readdirSync(currentDir);
      
      for (const file of files) {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          const subStats = scanDirectory(filePath);
          totalSize += subStats.size;
          fileCount += subStats.count;
        } else if (this.isSourceFile(file)) {
          totalSize += stat.size;
          fileCount++;
        }
      }
    };

    scanDirectory(dir);
    return { size: totalSize, count: fileCount };
  }

  isSourceFile(filename) {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass'];
    return extensions.some(ext => filename.endsWith(ext));
  }

  async generateRecommendations() {
    this.log('Generating recommendations...', 'PROGRESS');
    
    const recommendations = [];

    // Check for large files
    const largeFiles = this.analysis.files.filter(f => f.sizeKB > 500);
    if (largeFiles.length > 0) {
      recommendations.push({
        type: 'large_files',
        priority: 'high',
        message: `Found ${largeFiles.length} files larger than 500KB`,
        files: largeFiles.map(f => ({ path: f.path, size: f.sizeKB + 'KB' }))
      });
    }

    // Check total bundle size
    const totalSizeMB = Math.round(this.analysis.totalSize / (1024 * 1024));
    if (totalSizeMB > 10) {
      recommendations.push({
        type: 'bundle_size',
        priority: 'high',
        message: `Total bundle size is ${totalSizeMB}MB, consider code splitting`
      });
    }

    // Check for duplicate dependencies
    const duplicateCheck = this.checkForDuplicates();
    if (duplicateCheck.length > 0) {
      recommendations.push({
        type: 'duplicates',
        priority: 'medium',
        message: 'Potential duplicate dependencies detected',
        details: duplicateCheck
      });
    }

    this.analysis.recommendations = recommendations;
  }

  checkForDuplicates() {
    // Simple duplicate check based on file names
    const fileNames = this.analysis.files.map(f => path.basename(f.path));
    const duplicates = [];
    
    const nameCounts = {};
    fileNames.forEach(name => {
      nameCounts[name] = (nameCounts[name] || 0) + 1;
    });

    Object.entries(nameCounts).forEach(([name, count]) => {
      if (count > 1) {
        duplicates.push({ name, count });
      }
    });

    return duplicates;
  }

  async generateReport() {
    this.log('Generating bundle analysis report...', 'PROGRESS');
    
    const report = {
      timestamp: new Date().toISOString(),
      analysis: this.analysis,
      summary: {
        totalFiles: this.analysis.files.length,
        totalSizeKB: Math.round(this.analysis.totalSize / 1024),
        totalSizeMB: Math.round(this.analysis.totalSize / (1024 * 1024)),
        recommendations: this.analysis.recommendations.length
      }
    };

    const reportFile = path.join(this.projectRoot, 'bundle-analysis-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Bundle analysis report saved to ${reportFile}`, 'SUCCESS');
    
    // Print summary
    this.log('=== BUNDLE ANALYSIS SUMMARY ===', 'INFO');
    this.log(`Total files: ${report.summary.totalFiles}`, 'INFO');
    this.log(`Total size: ${report.summary.totalSizeMB}MB (${report.summary.totalSizeKB}KB)`, 'INFO');
    this.log(`Recommendations: ${report.summary.recommendations}`, 'INFO');
  }
}

// Run the bundle analyzer
if (require.main === module) {
  const analyzer = new BundleAnalyzer();
  analyzer.analyzeBundle().catch(console.error);
}

module.exports = BundleAnalyzer;


