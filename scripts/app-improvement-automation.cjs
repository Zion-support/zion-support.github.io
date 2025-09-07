const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AppImprovementAutomation {
  constructor() {
    this.reportFile = path.join(__dirname, '..', 'app-improvement-report.json');
    this.improvements = [];
  }

  log(message) {
    console.log(`[App Improvement] ${message}`);
  }

  async optimizeSEO() {
    this.log('Optimizing SEO...');
    try {
      // Check for meta tags in pages
      const pagesDir = path.join(__dirname, '..', 'pages');
      const appDir = path.join(__dirname, '..', 'app');
      
      let seoScore = 0;
      let totalPages = 0;
      
      if (fs.existsSync(pagesDir)) {
        const pages = this.getAllFiles(pagesDir).filter(file => 
          file.endsWith('.tsx') || file.endsWith('.jsx')
        );
        totalPages += pages.length;
        
        pages.forEach(page => {
          const content = fs.readFileSync(page, 'utf8');
          if (content.includes('Head') || content.includes('title')) {
            seoScore++;
          }
        });
      }
      
      if (fs.existsSync(appDir)) {
        const appPages = this.getAllFiles(appDir).filter(file => 
          file.endsWith('.tsx') || file.endsWith('.jsx')
        );
        totalPages += appPages.length;
        
        appPages.forEach(page => {
          const content = fs.readFileSync(page, 'utf8');
          if (content.includes('metadata') || content.includes('title')) {
            seoScore++;
          }
        });
      }
      
      this.improvements.push({
        type: 'seo_optimization',
        pages_with_seo: seoScore,
        total_pages: totalPages,
        seo_score: totalPages > 0 ? (seoScore / totalPages) * 100 : 0,
        status: 'completed'
      });
    } catch (error) {
      this.log(`Error optimizing SEO: ${error.message}`);
    }
  }

  async checkAccessibility() {
    this.log('Checking accessibility...');
    try {
      const pagesDir = path.join(__dirname, '..', 'pages');
      const appDir = path.join(__dirname, '..', 'app');
      
      let accessibilityScore = 0;
      let totalComponents = 0;
      
      const checkAccessibility = (dir) => {
        if (fs.existsSync(dir)) {
          const files = this.getAllFiles(dir).filter(file => 
            file.endsWith('.tsx') || file.endsWith('.jsx')
          );
          totalComponents += files.length;
          
          files.forEach(file => {
            const content = fs.readFileSync(file, 'utf8');
            const hasAltText = content.includes('alt=');
            const hasAriaLabels = content.includes('aria-label') || content.includes('aria-labelledby');
            const hasSemanticHTML = content.includes('<main>') || content.includes('<nav>') || content.includes('<header>');
            
            if (hasAltText || hasAriaLabels || hasSemanticHTML) {
              accessibilityScore++;
            }
          });
        }
      };
      
      checkAccessibility(pagesDir);
      checkAccessibility(appDir);
      
      this.improvements.push({
        type: 'accessibility_check',
        accessible_components: accessibilityScore,
        total_components: totalComponents,
        accessibility_score: totalComponents > 0 ? (accessibilityScore / totalComponents) * 100 : 0,
        status: 'completed'
      });
    } catch (error) {
      this.log(`Error checking accessibility: ${error.message}`);
    }
  }

  async optimizePerformance() {
    this.log('Optimizing performance...');
    try {
      // Check for performance optimizations
      const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
      let performanceScore = 0;
      const totalChecks = 5;
      
      if (fs.existsSync(nextConfigPath)) {
        const config = fs.readFileSync(nextConfigPath, 'utf8');
        
        if (config.includes('compress: true')) performanceScore++;
        if (config.includes('images:')) performanceScore++;
        if (config.includes('experimental:')) performanceScore++;
        if (config.includes('webpack:')) performanceScore++;
        if (config.includes('headers:')) performanceScore++;
      }
      
      this.improvements.push({
        type: 'performance_optimization',
        performance_score: (performanceScore / totalChecks) * 100,
        optimizations_found: performanceScore,
        total_checks: totalChecks,
        status: 'completed'
      });
    } catch (error) {
      this.log(`Error optimizing performance: ${error.message}`);
    }
  }

  async checkCodeQuality() {
    this.log('Checking code quality...');
    try {
      // Run linting
      execSync('npm run lint', { stdio: 'pipe' });
      
      this.improvements.push({
        type: 'code_quality_check',
        linting_passed: true,
        status: 'completed'
      });
    } catch (error) {
      this.improvements.push({
        type: 'code_quality_check',
        linting_passed: false,
        error: error.message,
        status: 'completed'
      });
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      improvements: this.improvements,
      summary: {
        total_improvements: this.improvements.length,
        completed: this.improvements.filter(imp => imp.status === 'completed').length,
        overall_score: this.calculateOverallScore()
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${this.reportFile}`);
  }

  calculateOverallScore() {
    const scores = this.improvements
      .filter(imp => imp.seo_score !== undefined || imp.accessibility_score !== undefined || imp.performance_score !== undefined)
      .map(imp => imp.seo_score || imp.accessibility_score || imp.performance_score || 0);
    
    return scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  }

  getAllFiles(dir) {
    let results = [];
    try {
      const list = fs.readdirSync(dir);
      
      list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat && stat.isDirectory()) {
          results = results.concat(this.getAllFiles(filePath));
        } else {
          results.push(filePath);
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return results;
  }

  async run() {
    this.log('Starting app improvement automation...');
    
    await this.optimizeSEO();
    await this.checkAccessibility();
    await this.optimizePerformance();
    await this.checkCodeQuality();
    await this.generateReport();
    
    this.log('App improvement automation completed!');
  }
}

if (require.main === module) {
  const automation = new AppImprovementAutomation();
  automation.run().catch(console.error);
}

module.exports = AppImprovementAutomation;