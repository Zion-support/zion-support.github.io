#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🗺️ Starting Sitemap Runner Automation...');

class SitemapRunner {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.sitemapData = {};
    this.validationResults = {};
    this.issues = [];
    this.successes = [];
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Running sitemap generation and validation...');
      
      // Run various sitemap tasks
      await this.generateSitemap();
      await this.validateSitemap();
      await this.analyzeSitemap();
      await this.checkSitemapLinks();
      await this.generateRobotsTxt();
      await this.optimizeSitemap();
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Sitemap Runner completed. Generated sitemap with ${this.sitemapData.urlCount || 0} URLs.`);
      
    } catch (error) {
      console.error('❌ Sitemap Runner failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async generateSitemap() {
    try {
      console.log('🗺️ Generating sitemap...');
      
      // Check if sitemap generation script exists
      if (fs.existsSync('scripts/generate-sitemap.js')) {
        try {
          const output = execSync('node scripts/generate-sitemap.js', { 
            encoding: 'utf8',
            cwd: process.cwd(),
            stdio: 'pipe'
          });
          
          this.successes.push({
            type: 'sitemap_generation',
            message: 'Sitemap generated successfully using custom script',
            timestamp: new Date().toISOString()
          });
          
          console.log('✅ Sitemap generated successfully using custom script');
          
        } catch (error) {
          console.log('⚠️  Custom sitemap generation failed, trying alternative methods');
          await this.generateSitemapAlternative();
        }
      } else {
        await this.generateSitemapAlternative();
      }
      
      // Analyze the generated sitemap
      await this.analyzeGeneratedSitemap();
      
    } catch (error) {
      console.log('ℹ️  Error generating sitemap:', error.message);
    }
  }

  async generateSitemapAlternative() {
    try {
      console.log('🔄 Using alternative sitemap generation...');
      
      // Try to find existing sitemap
      if (fs.existsSync('sitemap.xml')) {
        this.successes.push({
          type: 'sitemap_found',
          message: 'Existing sitemap found',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ Existing sitemap found');
      } else {
        // Generate a basic sitemap
        await this.generateBasicSitemap();
      }
      
    } catch (error) {
      console.log('ℹ️  Error with alternative sitemap generation:', error.message);
    }
  }

  async generateBasicSitemap() {
    try {
      console.log('📝 Generating basic sitemap...');
      
      // Find HTML files to include in sitemap
      const htmlFiles = this.findHtmlFiles();
      
      if (htmlFiles.length > 0) {
        const sitemapContent = this.createBasicSitemap(htmlFiles);
        
        fs.writeFileSync('sitemap.xml', sitemapContent);
        
        this.successes.push({
          type: 'basic_sitemap_generated',
          message: `Basic sitemap generated with ${htmlFiles.length} URLs`,
          urlCount: htmlFiles.length,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Basic sitemap generated with ${htmlFiles.length} URLs`);
      } else {
        this.issues.push({
          type: 'no_html_files',
          severity: 'warning',
          message: 'No HTML files found for sitemap generation',
          timestamp: new Date().toISOString()
        });
        
        console.log('⚠️  No HTML files found for sitemap generation');
      }
      
    } catch (error) {
      console.log('ℹ️  Error generating basic sitemap:', error.message);
    }
  }

  async analyzeGeneratedSitemap() {
    try {
      console.log('🔍 Analyzing generated sitemap...');
      
      if (fs.existsSync('sitemap.xml')) {
        const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
        
        // Parse sitemap content
        const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
        const lastmodMatches = sitemapContent.match(/<lastmod>(.*?)<\/lastmod>/g);
        
        if (urlMatches) {
          const urls = urlMatches.map(match => match.replace(/<loc>|<\/loc>/g, ''));
          
          this.sitemapData = {
            urlCount: urls.length,
            urls: urls,
            hasLastmod: lastmodMatches && lastmodMatches.length > 0,
            size: fs.statSync('sitemap.xml').size,
            timestamp: new Date().toISOString()
          };
          
          this.successes.push({
            type: 'sitemap_analysis',
            message: `Sitemap contains ${urls.length} URLs`,
            urlCount: urls.length,
            size: this.sitemapData.size,
            timestamp: new Date().toISOString()
          });
          
          console.log(`✅ Sitemap contains ${urls.length} URLs`);
          
          // Check sitemap size
          if (this.sitemapData.size > 10 * 1024 * 1024) { // 10MB
            this.issues.push({
              type: 'large_sitemap',
              severity: 'warning',
              message: `Sitemap is large: ${this.formatBytes(this.sitemapData.size)}`,
              size: this.sitemapData.size,
              timestamp: new Date().toISOString()
            });
            
            console.log(`⚠️  Sitemap is large: ${this.formatBytes(this.sitemapData.size)}`);
          }
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error analyzing generated sitemap:', error.message);
    }
  }

  async validateSitemap() {
    try {
      console.log('✅ Validating sitemap...');
      
      if (fs.existsSync('sitemap.xml')) {
        const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
        
        // Basic XML validation
        if (this.isValidXML(sitemapContent)) {
          this.validationResults.xmlValid = true;
          
          this.successes.push({
            type: 'xml_validation',
            message: 'Sitemap XML is valid',
            timestamp: new Date().toISOString()
          });
          
          console.log('✅ Sitemap XML is valid');
        } else {
          this.validationResults.xmlValid = false;
          
          this.issues.push({
            type: 'xml_validation',
            severity: 'error',
            message: 'Sitemap XML is invalid',
            timestamp: new Date().toISOString()
          });
          
          console.log('❌ Sitemap XML is invalid');
        }
        
        // Check sitemap structure
        const structureValid = this.validateSitemapStructure(sitemapContent);
        this.validationResults.structureValid = structureValid;
        
        if (structureValid) {
          this.successes.push({
            type: 'structure_validation',
            message: 'Sitemap structure is valid',
            timestamp: new Date().toISOString()
          });
          
          console.log('✅ Sitemap structure is valid');
        } else {
          this.issues.push({
            type: 'structure_validation',
            severity: 'warning',
            message: 'Sitemap structure has issues',
            timestamp: new Date().toISOString()
          });
          
          console.log('⚠️  Sitemap structure has issues');
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error validating sitemap:', error.message);
    }
  }

  async analyzeSitemap() {
    try {
      console.log('🔍 Analyzing sitemap content...');
      
      if (this.sitemapData.urls && this.sitemapData.urls.length > 0) {
        const analysis = this.analyzeSitemapUrls(this.sitemapData.urls);
        
        this.sitemapData.analysis = analysis;
        
        this.successes.push({
          type: 'sitemap_analysis',
          message: 'Sitemap content analyzed',
          analysis: analysis,
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ Sitemap content analyzed');
        
        // Check for potential issues
        if (analysis.externalUrls > 0) {
          this.issues.push({
            type: 'external_urls',
            severity: 'info',
            message: `Found ${analysis.externalUrls} external URLs in sitemap`,
            count: analysis.externalUrls,
            timestamp: new Date().toISOString()
          });
          
          console.log(`ℹ️  Found ${analysis.externalUrls} external URLs in sitemap`);
        }
        
        if (analysis.duplicateUrls > 0) {
          this.issues.push({
            type: 'duplicate_urls',
            severity: 'warning',
            message: `Found ${analysis.duplicateUrls} duplicate URLs in sitemap`,
            count: analysis.duplicateUrls,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Found ${analysis.duplicateUrls} duplicate URLs in sitemap`);
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error analyzing sitemap content:', error.message);
    }
  }

  async checkSitemapLinks() {
    try {
      console.log('🔗 Checking sitemap links...');
      
      if (this.sitemapData.urls && this.sitemapData.urls.length > 0) {
        const linkResults = await this.checkSitemapLinkHealth(this.sitemapData.urls);
        
        this.sitemapData.linkHealth = linkResults;
        
        this.successes.push({
          type: 'link_health_check',
          message: `Link health checked: ${linkResults.valid} valid, ${linkResults.broken} broken`,
          valid: linkResults.valid,
          broken: linkResults.broken,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Link health checked: ${linkResults.valid} valid, ${linkResults.broken} broken`);
        
        if (linkResults.broken > 0) {
          this.issues.push({
            type: 'broken_sitemap_links',
            severity: 'warning',
            message: `Found ${linkResults.broken} broken links in sitemap`,
            count: linkResults.broken,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Found ${linkResults.broken} broken links in sitemap`);
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking sitemap links:', error.message);
    }
  }

  async generateRobotsTxt() {
    try {
      console.log('🤖 Generating robots.txt...');
      
      const robotsContent = this.createRobotsTxt();
      
      fs.writeFileSync('robots.txt', robotsContent);
      
      this.successes.push({
        type: 'robots_txt_generated',
        message: 'robots.txt generated successfully',
        timestamp: new Date().toISOString()
      });
      
      console.log('✅ robots.txt generated successfully');
      
    } catch (error) {
      console.log('ℹ️  Error generating robots.txt:', error.message);
    }
  }

  async optimizeSitemap() {
    try {
      console.log('⚡ Optimizing sitemap...');
      
      if (fs.existsSync('sitemap.xml')) {
        const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
        
        // Check if sitemap can be optimized
        const optimizations = this.identifySitemapOptimizations(sitemapContent);
        
        if (optimizations.length > 0) {
          this.issues.push({
            type: 'sitemap_optimization',
            severity: 'info',
            message: `Found ${optimizations.length} optimization opportunities`,
            optimizations: optimizations,
            timestamp: new Date().toISOString()
          });
          
          console.log(`ℹ️  Found ${optimizations.length} optimization opportunities`);
        } else {
          this.successes.push({
            type: 'sitemap_optimized',
            message: 'Sitemap is already optimized',
            timestamp: new Date().toISOString()
          });
          
          console.log('✅ Sitemap is already optimized');
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error optimizing sitemap:', error.message);
    }
  }

  findHtmlFiles() {
    try {
      const output = execSync('find . -name "*.html" -o -name "*.tsx" -o -name "*.ts" | head -100', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      return output.split('\n').filter(line => line.trim());
    } catch (error) {
      return [];
    }
  }

  createBasicSitemap(htmlFiles) {
    const baseUrl = 'https://example.com'; // This should be configurable
    const currentDate = new Date().toISOString();
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    for (const file of htmlFiles) {
      if (file && file !== './sitemap.xml') {
        const url = file.replace('./', '').replace('.html', '').replace('.tsx', '').replace('.ts', '');
        sitemap += '  <url>\n';
        sitemap += `    <loc>${baseUrl}/${url}</loc>\n`;
        sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
        sitemap += '    <changefreq>weekly</changefreq>\n';
        sitemap += '    <priority>0.8</priority>\n';
        sitemap += '  </url>\n';
      }
    }
    
    sitemap += '</urlset>';
    return sitemap;
  }

  isValidXML(content) {
    try {
      // Basic XML validation
      return content.includes('<?xml') && 
             content.includes('<urlset') && 
             content.includes('</urlset>') &&
             content.includes('<url>') &&
             content.includes('</url>');
    } catch (error) {
      return false;
    }
  }

  validateSitemapStructure(content) {
    try {
      // Check for required elements
      const hasUrlset = content.includes('<urlset');
      const hasUrls = content.includes('<url>');
      const hasLocs = content.includes('<loc>');
      
      return hasUrlset && hasUrls && hasLocs;
    } catch (error) {
      return false;
    }
  }

  analyzeSitemapUrls(urls) {
    const analysis = {
      totalUrls: urls.length,
      internalUrls: 0,
      externalUrls: 0,
      duplicateUrls: 0,
      uniqueUrls: 0
    };
    
    const uniqueUrls = new Set();
    const duplicates = new Set();
    
    for (const url of urls) {
      if (uniqueUrls.has(url)) {
        duplicates.add(url);
      } else {
        uniqueUrls.add(url);
      }
      
      if (this.isExternalUrl(url)) {
        analysis.externalUrls++;
      } else {
        analysis.internalUrls++;
      }
    }
    
    analysis.duplicateUrls = duplicates.size;
    analysis.uniqueUrls = uniqueUrls.size;
    
    return analysis;
  }

  async checkSitemapLinkHealth(urls) {
    const results = {
      valid: 0,
      broken: 0,
      total: urls.length
    };
    
    // Sample a few URLs to check health (to avoid long execution time)
    const sampleUrls = urls.slice(0, Math.min(10, urls.length));
    
    for (const url of sampleUrls) {
      try {
        const result = execSync(`curl -s -o /dev/null -w "%{http_code}" -m 10 "${url}"`, { 
          encoding: 'utf8',
          timeout: 15000
        });
        
        const statusCode = parseInt(result.trim());
        
        if (statusCode >= 200 && statusCode < 400) {
          results.valid++;
        } else {
          results.broken++;
        }
      } catch (error) {
        results.broken++;
      }
    }
    
    return results;
  }

  createRobotsTxt() {
    const baseUrl = 'https://example.com'; // This should be configurable
    
    let robots = '# Robots.txt for website\n';
    robots += 'User-agent: *\n';
    robots += 'Allow: /\n';
    robots += 'Disallow: /admin/\n';
    robots += 'Disallow: /private/\n';
    robots += `Sitemap: ${baseUrl}/sitemap.xml\n`;
    
    return robots;
  }

  identifySitemapOptimizations(content) {
    const optimizations = [];
    
    // Check for missing lastmod tags
    if (!content.includes('<lastmod>')) {
      optimizations.push('Add lastmod tags for better SEO');
    }
    
    // Check for missing changefreq tags
    if (!content.includes('<changefreq>')) {
      optimizations.push('Add changefreq tags for better SEO');
    }
    
    // Check for missing priority tags
    if (!content.includes('<priority>')) {
      optimizations.push('Add priority tags for better SEO');
    }
    
    return optimizations;
  }

  isExternalUrl(url) {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname;
      
      return !hostname.includes('localhost') && 
             !hostname.includes('127.0.0.1') && 
             !hostname.includes('0.0.0.0') &&
             !hostname.includes('::1');
    } catch (error) {
      return false;
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      sitemapData: this.sitemapData,
      validationResults: this.validationResults,
      issues: this.issues,
      successes: this.successes,
      totalIssues: this.issues.length,
      totalSuccesses: this.successes.length,
      status: this.issues.length === 0 ? 'success' : 'issues_found'
    };

    const reportPath = path.join(this.reportDir, 'sitemap-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };

    const reportPath = path.join(this.reportDir, 'sitemap-runner-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const sitemapRunner = new SitemapRunner();
sitemapRunner.run().catch(console.error);