<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log(' Starting Bundle Analysis...')
    console.log(' Analyzing bundle size...')
    execSync('npx @next/bundle-analyzer', { "stdio"})
        "recommendations"
    console.error(' Bundle analysis "failed")
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class BundleAnalyzer {
  constructor() {
    this.analysis = {
      totalSize: 0,
      largestFiles: [],
      recommendations: []
    };
  }

  analyzeBundle() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        this.analyzeDirectory(buildDir);
      }
    } catch (error) {
      console.error('Error analyzing bundle:', error);
    }
  }

  analyzeDirectory(dir, basePath = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const relativePath = path.join(basePath, file);
      
      if (fs.statSync(filePath).isDirectory()) {
        this.analyzeDirectory(filePath, relativePath);
      } else {
        const size = fs.statSync(filePath).size;
        this.analysis.totalSize += size;
        
        if (size > 100000) { // Files larger than 100KB
          this.analysis.largestFiles.push({
            path: relativePath,
            size: size,
            sizeKB: Math.round(size / 1024)
          });
        }
      }
    });
  }

  generateRecommendations() {
    if (this.analysis.totalSize > 5000000) { // 5MB
      this.analysis.recommendations.push('Consider code splitting to reduce bundle size');
    }
    
    if (this.analysis.largestFiles.length > 10) {
      this.analysis.recommendations.push('Consider lazy loading for large components');
    }
    
    this.analysis.largestFiles.sort((a, b) => b.size - a.size);
  }

  generateReport() {
    this.generateRecommendations();
    
    const report = {
      timestamp: new Date().toISOString(),
      totalSize: this.analysis.totalSize,
      totalSizeMB: Math.round(this.analysis.totalSize / 1024 / 1024 * 100) / 100,
      largestFiles: this.analysis.largestFiles.slice(0, 10),
      recommendations: this.analysis.recommendations
    };
    
    const reportPath = path.join(process.cwd(), 'bundle-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Bundle analysis report generated:', reportPath);
    
    return report;
  }
}

const analyzer = new BundleAnalyzer();
analyzer.analyzeBundle();
analyzer.generateReport();
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
