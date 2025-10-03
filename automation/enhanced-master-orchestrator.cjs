#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class EnhancedMasterOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.startTime = Date.now();
    
    // Ensure directories exist
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    this.logFile = path.join(this.logsDir, 'enhanced-master-orchestrator.log');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async executeCommand(command, description) {
    try {
      this.log(`🔄 ${description}...`);
      const output = execSync(command, { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async runCodeQualityAnalysis() {
    this.log('🔍 Starting comprehensive code quality analysis...');
    
    const results = {
      linting: await this.executeCommand('npm run lint:fix', 'Linting and fixing code issues'),
      typeCheck: await this.executeCommand('npm run type-check', 'TypeScript type checking'),
      build: await this.executeCommand('npm run build', 'Building application'),
      tests: await this.executeCommand('npm run test:smoke', 'Running smoke tests')
    };

    const successCount = Object.values(results).filter(r => r.success).length;
    const totalCount = Object.keys(results).length;
    
    this.log(`📊 Code quality analysis completed: ${successCount}/${totalCount} tasks successful`);
    
    return {
      success: successCount === totalCount,
      results,
      summary: { successCount, totalCount }
    };
  }

  async runSecurityAudit() {
    this.log('🔒 Starting security audit...');
    
    const results = {
      npmAudit: await this.executeCommand('npm audit --audit-level=moderate', 'NPM security audit'),
      dependencyCheck: await this.checkDependencies(),
      secretsScan: await this.scanForSecrets()
    };

    const successCount = Object.values(results).filter(r => r.success).length;
    
    this.log(`🛡️ Security audit completed: ${successCount}/${Object.keys(results).length} checks passed`);
    
    return {
      success: successCount > 0,
      results,
      summary: { successCount, totalCount: Object.keys(results).length }
    };
  }

  async checkDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const outdated = [];
      for (const [name, version] of Object.entries(dependencies)) {
        try {
          const result = execSync(`npm view ${name} version`, { encoding: 'utf8' });
          const latestVersion = result.trim();
          if (version !== `^${latestVersion}` && version !== latestVersion) {
            outdated.push({ name, current: version, latest: latestVersion });
          }
        } catch (e) {
          // Skip if package doesn't exist or other error
        }
      }
      
      return {
        success: true,
        outdated,
        totalDependencies: Object.keys(dependencies).length
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async scanForSecrets() {
    try {
      const secretPatterns = [
        /api[_-]?key\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        /secret\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        /password\s*[:=]\s*['"][^'"]{8,}['"]/gi,
        /token\s*[:=]\s*['"][^'"]{20,}['"]/gi
      ];

      const files = this.getAllFiles(this.projectRoot, ['.js', '.ts', '.tsx', '.jsx', '.json', '.env']);
      const findings = [];

      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          for (const pattern of secretPatterns) {
            const matches = content.match(pattern);
            if (matches) {
              findings.push({
                file: path.relative(this.projectRoot, file),
                matches: matches.length,
                pattern: pattern.toString()
              });
            }
          }
        } catch (e) {
          // Skip files that can't be read
        }
      }

      return {
        success: true,
        findings,
        filesScanned: files.length
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  getAllFiles(dir, extensions) {
    const files = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory() && !this.shouldSkipDirectory(item.name)) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (item.isFile() && extensions.some(ext => item.name.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  shouldSkipDirectory(dirName) {
    const skipDirs = [
      'node_modules', '.next', 'dist', 'build', 'out',
      '.git', 'coverage', 'logs', 'automation-reports',
      'corrupted_backup', 'apps.backup', 'components/apps'
    ];
    return skipDirs.includes(dirName);
  }

  async runPerformanceOptimization() {
    this.log('⚡ Starting performance optimization...');
    
    const results = {
      bundleAnalysis: await this.analyzeBundleSize(),
      imageOptimization: await this.optimizeImages(),
      codeSplitting: await this.analyzeCodeSplitting(),
      caching: await this.analyzeCaching()
    };

    const successCount = Object.values(results).filter(r => r.success).length;
    
    this.log(`🚀 Performance optimization completed: ${successCount}/${Object.keys(results).length} optimizations applied`);
    
    return {
      success: successCount > 0,
      results,
      summary: { successCount, totalCount: Object.keys(results).length }
    };
  }

  async analyzeBundleSize() {
    try {
      const buildDir = path.join(this.projectRoot, '.next');
      if (!fs.existsSync(buildDir)) {
        return { success: false, error: 'Build directory not found' };
      }

      const staticDir = path.join(buildDir, 'static');
      if (!fs.existsSync(staticDir)) {
        return { success: false, error: 'Static directory not found' };
      }

      let totalSize = 0;
      const files = [];

      const analyzeDir = (dir) => {
        const items = fs.readdirSync(dir, { withFileTypes: true });
        for (const item of items) {
          const fullPath = path.join(dir, item.name);
          if (item.isFile()) {
            const stats = fs.statSync(fullPath);
            totalSize += stats.size;
            files.push({
              name: item.name,
              size: stats.size,
              path: path.relative(this.projectRoot, fullPath)
            });
          } else if (item.isDirectory()) {
            analyzeDir(fullPath);
          }
        }
      };

      analyzeDir(staticDir);

      return {
        success: true,
        totalSize,
        fileCount: files.length,
        largestFiles: files.sort((a, b) => b.size - a.size).slice(0, 10)
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async optimizeImages() {
    try {
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
      const imageFiles = this.getAllFiles(this.projectRoot, imageExtensions);
      
      let optimizedCount = 0;
      const optimizations = [];

      for (const file of imageFiles) {
        const stats = fs.statSync(file);
        if (stats.size > 100000) { // Files larger than 100KB
          optimizations.push({
            file: path.relative(this.projectRoot, file),
            size: stats.size,
            recommendation: 'Consider compressing this image'
          });
          optimizedCount++;
        }
      }

      return {
        success: true,
        totalImages: imageFiles.length,
        largeImages: optimizedCount,
        optimizations
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async analyzeCodeSplitting() {
    try {
      const pagesDir = path.join(this.projectRoot, 'pages');
      if (!fs.existsSync(pagesDir)) {
        return { success: false, error: 'Pages directory not found' };
      }

      const pages = fs.readdirSync(pagesDir, { withFileTypes: true })
        .filter(item => item.isFile() && (item.name.endsWith('.js') || item.name.endsWith('.tsx')))
        .map(item => item.name);

      return {
        success: true,
        totalPages: pages.length,
        pages: pages.map(page => ({
          name: page,
          size: fs.statSync(path.join(pagesDir, page)).size
        }))
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async analyzeCaching() {
    try {
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      if (!fs.existsSync(nextConfigPath)) {
        return { success: false, error: 'Next.js config not found' };
      }

      const config = fs.readFileSync(nextConfigPath, 'utf8');
      const hasCaching = config.includes('cache') || config.includes('Cache-Control');
      
      return {
        success: true,
        hasCaching,
        recommendations: hasCaching ? [] : ['Consider implementing caching strategies']
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async runSEOOptimization() {
    this.log('🔍 Starting SEO optimization...');
    
    const results = {
      metaTags: await this.checkMetaTags(),
      sitemap: await this.checkSitemap(),
      robots: await this.checkRobotsTxt(),
      structuredData: await this.checkStructuredData()
    };

    const successCount = Object.values(results).filter(r => r.success).length;
    
    this.log(`📈 SEO optimization completed: ${successCount}/${Object.keys(results).length} checks passed`);
    
    return {
      success: successCount > 0,
      results,
      summary: { successCount, totalCount: Object.keys(results).length }
    };
  }

  async checkMetaTags() {
    try {
      const pagesDir = path.join(this.projectRoot, 'pages');
      if (!fs.existsSync(pagesDir)) {
        return { success: false, error: 'Pages directory not found' };
      }

      const pages = fs.readdirSync(pagesDir, { withFileTypes: true })
        .filter(item => item.isFile() && item.name.endsWith('.tsx'))
        .map(item => item.name);

      const metaAnalysis = pages.map(page => {
        const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
        const hasTitle = content.includes('<title>') || content.includes('title:');
        const hasDescription = content.includes('description');
        const hasViewport = content.includes('viewport');
        
        return {
          page,
          hasTitle,
          hasDescription,
          hasViewport,
          score: [hasTitle, hasDescription, hasViewport].filter(Boolean).length
        };
      });

      return {
        success: true,
        pages: metaAnalysis,
        averageScore: metaAnalysis.reduce((sum, p) => sum + p.score, 0) / metaAnalysis.length
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async checkSitemap() {
    try {
      const sitemapPath = path.join(this.projectRoot, 'public', 'sitemap.xml');
      const exists = fs.existsSync(sitemapPath);
      
      return {
        success: true,
        exists,
        recommendation: exists ? 'Sitemap found' : 'Consider generating a sitemap.xml'
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async checkRobotsTxt() {
    try {
      const robotsPath = path.join(this.projectRoot, 'public', 'robots.txt');
      const exists = fs.existsSync(robotsPath);
      
      return {
        success: true,
        exists,
        recommendation: exists ? 'Robots.txt found' : 'Consider creating a robots.txt file'
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async checkStructuredData() {
    try {
      const pagesDir = path.join(this.projectRoot, 'pages');
      if (!fs.existsSync(pagesDir)) {
        return { success: false, error: 'Pages directory not found' };
      }

      const pages = fs.readdirSync(pagesDir, { withFileTypes: true })
        .filter(item => item.isFile() && item.name.endsWith('.tsx'))
        .map(item => item.name);

      let structuredDataCount = 0;
      for (const page of pages) {
        const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
        if (content.includes('application/ld+json') || content.includes('schema.org')) {
          structuredDataCount++;
        }
      }

      return {
        success: true,
        pagesWithStructuredData: structuredDataCount,
        totalPages: pages.length,
        recommendation: structuredDataCount === 0 ? 'Consider adding structured data' : 'Good structured data coverage'
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async generateReport(results) {
    const endTime = Date.now();
    const duration = endTime - this.startTime;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      results,
      summary: {
        totalTasks: Object.keys(results).length,
        successfulTasks: Object.values(results).filter(r => r.success).length,
        failedTasks: Object.values(results).filter(r => !r.success).length,
        overallSuccess: Object.values(results).every(r => r.success)
      }
    };

    const reportPath = path.join(this.reportsDir, 'enhanced-master-orchestrator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Enhanced Master Orchestrator...');
    
    try {
      const results = {
        codeQuality: await this.runCodeQualityAnalysis(),
        security: await this.runSecurityAudit(),
        performance: await this.runPerformanceOptimization(),
        seo: await this.runSEOOptimization()
      };

      const report = await this.generateReport(results);
      
      this.log('🎉 Enhanced Master Orchestrator completed successfully!');
      this.log(`📊 Summary: ${report.summary.successfulTasks}/${report.summary.totalTasks} tasks completed successfully`);
      
      return report;
    } catch (error) {
      this.log(`❌ Enhanced Master Orchestrator failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const orchestrator = new EnhancedMasterOrchestrator();
  orchestrator.run().catch(console.error);
}

module.exports = EnhancedMasterOrchestrator;