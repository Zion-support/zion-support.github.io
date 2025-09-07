<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
=======
<<<<<<< HEAD

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const { execSync } = require('child_process')
<<<<<<< HEAD
// console.log(' Starting Bundle Analysis...')
    console.log(' Analyzing bundle size...')
    execSync('npx @next/bundle-analyzer', { "stdio"})
        "recommendations"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    console.error(' Bundle analysis "failed")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
    console.error(' Bundle analysis "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
    console.error(' Bundle analysis "failed")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

<<<<<<< HEAD
    console.error(' Bundle analysis "failed")

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
=======
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
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
