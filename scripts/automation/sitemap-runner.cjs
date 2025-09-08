#!/usr/bin/env node

/**
 * Sitemap Runner Automation Script
 * Generates and maintains sitemaps for the project
 * Runs every 6 hours via PM2
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SitemapRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'sitemap-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runSitemapGeneration() {
    console.log('🗺️ Starting sitemap generation...');
    
    try {
      // Build project first
      console.log('🏗️ Building project for sitemap generation...');
      const buildResult = this.buildProject();
      
      if (!buildResult.success) {
        throw new Error('Project build failed, cannot generate sitemap');
      }
      
      // Analyze project structure
      console.log('🔍 Analyzing project structure...');
      const projectStructure = this.analyzeProjectStructure();
      
      // Generate XML sitemap
      console.log('📄 Generating XML sitemap...');
      const xmlSitemap = this.generateXMLSitemap(projectStructure);
      
      // Generate HTML sitemap
      console.log('🌐 Generating HTML sitemap...');
      const htmlSitemap = this.generateHTMLSitemap(projectStructure);
      
      // Generate robots.txt
      console.log('🤖 Generating robots.txt...');
      const robotsTxt = this.generateRobotsTxt();
      
      // Validate sitemaps
      console.log('✅ Validating sitemaps...');
      const validation = this.validateSitemaps();
      
      // Generate comprehensive report
      const report = this.generateReport({
        build: buildResult,
        structure: projectStructure,
        xml: xmlSitemap,
        html: htmlSitemap,
        robots: robotsTxt,
        validation: validation
      });
      
      // Save report
      this.saveReport(report);
      
      console.log('✅ Sitemap generation completed successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Sitemap generation failed:', error.message);
      this.saveReport({
        timestamp: new Date().toISOString(),
        status: 'failed',
        error: error.message
      });
      return false;
    }
  }

  buildProject() {
    try {
      const output = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Project built successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  analyzeProjectStructure() {
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { success: false, error: 'Dist folder not found' };
      }
      
      const pages = this.findPages(distPath);
      const assets = this.findAssets(distPath);
      const routes = this.extractRoutes(pages);
      
      return {
        success: true,
        pages: pages.length,
        assets: assets.length,
        routes: routes,
        totalSize: this.calculateDirectorySize(distPath),
        totalSizeFormatted: this.formatBytes(this.calculateDirectorySize(distPath))
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  generateXMLSitemap(projectStructure) {
    try {
      if (!projectStructure.success || !projectStructure.routes) {
        return { success: false, error: 'Project structure analysis failed' };
      }
      
      const baseUrl = this.getBaseUrl();
      const currentDate = new Date().toISOString();
      
      let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
      xmlContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
      
      projectStructure.routes.forEach(route => {
        xmlContent += '  <url>\n';
        xmlContent += `    <loc>${baseUrl}${route.path}</loc>\n`;
        xmlContent += `    <lastmod>${currentDate}</lastmod>\n`;
        xmlContent += `    <changefreq>${route.changefreq || 'weekly'}</changefreq>\n`;
        xmlContent += `    <priority>${route.priority || '0.8'}</priority>\n`;
        xmlContent += '  </url>\n';
      });
      
      xmlContent += '</urlset>';
      
      // Save XML sitemap
      const publicPath = path.join(this.projectRoot, 'public');
      if (!fs.existsSync(publicPath)) {
        fs.mkdirSync(publicPath, { recursive: true });
      }
      
      const sitemapPath = path.join(publicPath, 'sitemap.xml');
      fs.writeFileSync(sitemapPath, xmlContent);
      
      return {
        success: true,
        path: sitemapPath,
        size: xmlContent.length,
        sizeFormatted: this.formatBytes(xmlContent.length),
        urls: projectStructure.routes.length,
        message: 'XML sitemap generated successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  generateHTMLSitemap(projectStructure) {
    try {
      if (!projectStructure.success || !projectStructure.routes) {
        return { success: false, error: 'Project structure analysis failed' };
      }
      
      const baseUrl = this.getBaseUrl();
      const currentDate = new Date().toLocaleDateString();
      
      let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitemap - ${this.getProjectName()}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        .route { margin: 15px 0; padding: 15px; background: #f9f9f9; border-radius: 5px; }
        .route a { color: #0066cc; text-decoration: none; font-weight: bold; }
        .route a:hover { text-decoration: underline; }
        .meta { color: #666; font-size: 0.9em; margin-top: 5px; }
        .stats { background: #e8f4f8; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 40px; color: #666; font-size: 0.9em; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🗺️ Sitemap - ${this.getProjectName()}</h1>
        
        <div class="stats">
            <strong>Generated:</strong> ${currentDate}<br>
            <strong>Total Pages:</strong> ${projectStructure.routes.length}<br>
            <strong>Total Assets:</strong> ${projectStructure.assets}<br>
            <strong>Total Size:</strong> ${projectStructure.totalSizeFormatted}
        </div>
        
        <h2>📄 Pages</h2>`;
      
      projectStructure.routes.forEach(route => {
        htmlContent += `
        <div class="route">
            <a href="${baseUrl}${route.path}">${route.title || route.path}</a>
            <div class="meta">
                <strong>Path:</strong> ${route.path}<br>
                <strong>Change Frequency:</strong> ${route.changefreq || 'weekly'}<br>
                <strong>Priority:</strong> ${route.priority || '0.8'}
            </div>
        </div>`;
      });
      
      htmlContent += `
        
        <div class="footer">
            <p>This sitemap was automatically generated by PM2 Sitemap Runner</p>
            <p>Last updated: ${currentDate}</p>
        </div>
    </div>
</body>
</html>`;
      
      // Save HTML sitemap
      const publicPath = path.join(this.projectRoot, 'public');
      if (!fs.existsSync(publicPath)) {
        fs.mkdirSync(publicPath, { recursive: true });
      }
      
      const sitemapPath = path.join(publicPath, 'sitemap.html');
      fs.writeFileSync(sitemapPath, htmlContent);
      
      return {
        success: true,
        path: sitemapPath,
        size: htmlContent.length,
        sizeFormatted: this.formatBytes(htmlContent.length),
        message: 'HTML sitemap generated successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  generateRobotsTxt() {
    try {
      const baseUrl = this.getBaseUrl();
      const currentDate = new Date().toLocaleDateString();
      
      let robotsContent = `# Robots.txt for ${this.getProjectName()}
# Generated on: ${currentDate}
# This file is automatically generated by PM2 Sitemap Runner

User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}sitemap.xml

# Disallow certain paths (customize as needed)
Disallow: /admin/
Disallow: /private/
Disallow: /temp/
Disallow: /api/ (if you want to hide API endpoints)

# Allow important paths
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /fonts/

# Crawl delay (optional)
Crawl-delay: 1`;
      
      // Save robots.txt
      const publicPath = path.join(this.projectRoot, 'public');
      if (!fs.existsSync(publicPath)) {
        fs.mkdirSync(publicPath, { recursive: true });
      }
      
      const robotsPath = path.join(publicPath, 'robots.txt');
      fs.writeFileSync(robotsPath, robotsContent);
      
      return {
        success: true,
        path: robotsPath,
        size: robotsContent.length,
        sizeFormatted: this.formatBytes(robotsContent.length),
        message: 'Robots.txt generated successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  validateSitemaps() {
    try {
      const publicPath = path.join(this.projectRoot, 'public');
      const sitemapXml = path.join(publicPath, 'sitemap.xml');
      const sitemapHtml = path.join(publicPath, 'sitemap.html');
      const robotsTxt = path.join(publicPath, 'robots.txt');
      
      const validation = {
        sitemapXml: {
          exists: fs.existsSync(sitemapXml),
          size: fs.existsSync(sitemapXml) ? fs.statSync(sitemapXml).size : 0,
          valid: this.validateXMLSitemap(sitemapXml)
        },
        sitemapHtml: {
          exists: fs.existsSync(sitemapHtml),
          size: fs.existsSync(sitemapHtml) ? fs.statSync(sitemapHtml).size : 0,
          valid: this.validateHTMLSitemap(sitemapHtml)
        },
        robotsTxt: {
          exists: fs.existsSync(robotsTxt),
          size: fs.existsSync(robotsTxt) ? fs.statSync(robotsTxt).size : 0,
          valid: this.validateRobotsTxt(robotsTxt)
        }
      };
      
      return {
        success: true,
        validation: validation,
        allValid: validation.sitemapXml.valid && validation.sitemapHtml.valid && validation.robotsTxt.valid
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  validateXMLSitemap(filepath) {
    try {
      if (!fs.existsSync(filepath)) return false;
      
      const content = fs.readFileSync(filepath, 'utf8');
      
      // Basic XML validation
      const hasXmlDeclaration = content.includes('<?xml');
      const hasUrlset = content.includes('<urlset');
      const hasUrls = content.includes('<url>');
      const hasClosingTags = content.includes('</urlset>');
      
      return hasXmlDeclaration && hasUrlset && hasUrls && hasClosingTags;
      
    } catch (error) {
      return false;
    }
  }

  validateHTMLSitemap(filepath) {
    try {
      if (!fs.existsSync(filepath)) return false;
      
      const content = fs.readFileSync(filepath, 'utf8');
      
      // Basic HTML validation
      const hasDoctype = content.includes('<!DOCTYPE html>');
      const hasHtmlTags = content.includes('<html') && content.includes('</html>');
      const hasHeadTags = content.includes('<head>') && content.includes('</head>');
      const hasBodyTags = content.includes('<body>') && content.includes('</body>');
      
      return hasDoctype && hasHtmlTags && hasHeadTags && hasBodyTags;
      
    } catch (error) {
      return false;
    }
  }

  validateRobotsTxt(filepath) {
    try {
      if (!fs.existsSync(filepath)) return false;
      
      const content = fs.readFileSync(filepath, 'utf8');
      
      // Basic robots.txt validation
      const hasUserAgent = content.includes('User-agent:');
      const hasSitemap = content.includes('Sitemap:');
      
      return hasUserAgent && hasSitemap;
      
    } catch (error) {
      return false;
    }
  }

  findPages(distPath) {
    const pages = [];
    
    const items = fs.readdirSync(distPath);
    items.forEach(item => {
      const fullPath = path.join(distPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        pages.push(...this.findPages(fullPath));
      } else if (item.endsWith('.html') || item.endsWith('.htm')) {
        pages.push({
          name: item,
          path: path.relative(distPath, fullPath),
          size: stat.size,
          modified: stat.mtime
        });
      }
    });
    
    return pages;
  }

  findAssets(distPath) {
    const assets = [];
    
    const items = fs.readdirSync(distPath);
    items.forEach(item => {
      const fullPath = path.join(distPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        assets.push(...this.findAssets(fullPath));
      } else if (item.endsWith('.css') || item.endsWith('.js') || item.endsWith('.png') || 
                 item.endsWith('.jpg') || item.endsWith('.svg') || item.endsWith('.woff') || 
                 item.endsWith('.woff2')) {
        assets.push({
          name: item,
          path: path.relative(distPath, fullPath),
          size: stat.size,
          type: path.extname(item).substring(1)
        });
      }
    });
    
    return assets;
  }

  extractRoutes(pages) {
    return pages.map(page => {
      const route = {
        path: '/' + page.path.replace(/\.html?$/, '').replace(/\\/g, '/'),
        title: this.generatePageTitle(page.name),
        changefreq: this.determineChangeFrequency(page.path),
        priority: this.determinePriority(page.path)
      };
      
      // Handle index pages
      if (route.path.endsWith('/index')) {
        route.path = route.path.replace('/index', '');
        route.priority = '1.0';
      }
      
      // Handle root page
      if (route.path === '/') {
        route.priority = '1.0';
        route.changefreq = 'daily';
      }
      
      return route;
    });
  }

  generatePageTitle(filename) {
    const name = filename.replace(/\.html?$/, '');
    
    if (name === 'index') return 'Home';
    if (name === 'about') return 'About';
    if (name === 'contact') return 'Contact';
    if (name === 'services') return 'Services';
    if (name === 'products') return 'Products';
    
    // Convert kebab-case or snake_case to Title Case
    return name
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  determineChangeFrequency(path) {
    if (path.includes('blog') || path.includes('news')) return 'daily';
    if (path.includes('products') || path.includes('services')) return 'weekly';
    if (path.includes('about') || path.includes('contact')) return 'monthly';
    return 'weekly';
  }

  determinePriority(path) {
    if (path === '/' || path === '/index') return '1.0';
    if (path.includes('products') || path.includes('services')) return '0.9';
    if (path.includes('about') || path.includes('contact')) return '0.8';
    if (path.includes('blog') || path.includes('news')) return '0.7';
    return '0.6';
  }

  getBaseUrl() {
    // Try to get from environment or package.json
    const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
    
    if (packageJson.homepage) {
      return packageJson.homepage.endsWith('/') ? packageJson.homepage : packageJson.homepage + '/';
    }
    
    // Default to localhost for development
    return 'http://localhost:3000/';
  }

  getProjectName() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      return packageJson.name || 'Project';
    } catch {
      return 'Project';
    }
  }

  calculateDirectorySize(dir) {
    let totalSize = 0;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        totalSize += this.calculateDirectorySize(fullPath);
      } else {
        totalSize += stat.size;
      }
    });
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  generateReport(data) {
    const timestamp = new Date().toISOString();
    
    const report = {
      timestamp,
      status: 'completed',
      summary: {
        build: data.build?.success || false,
        structure: data.structure?.success || false,
        xml: data.xml?.success || false,
        html: data.html?.success || false,
        robots: data.robots?.success || false,
        validation: data.validation?.success || false,
        overall: data.validation?.allValid || false
      },
      details: data,
      recommendations: this.generateRecommendations(data)
    };

    return report;
  }

  generateRecommendations(data) {
    const recommendations = [];
    
    if (!data.xml?.success) {
      recommendations.push('📄 Fix XML sitemap generation issues');
    }
    
    if (!data.html?.success) {
      recommendations.push('🌐 Fix HTML sitemap generation issues');
    }
    
    if (!data.robots?.success) {
      recommendations.push('🤖 Fix robots.txt generation issues');
    }
    
    if (!data.validation?.allValid) {
      recommendations.push('✅ Fix sitemap validation issues');
    }
    
    if (data.structure?.success && data.structure.pages < 5) {
      recommendations.push('📝 Consider adding more content pages for better SEO');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ All sitemap generation tasks completed successfully');
    }
    
    return recommendations;
  }

  saveReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `sitemap-runner-${timestamp}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Sitemap runner report saved: ${filename}`);
    
    // Also save a latest version
    const latestFilepath = path.join(this.reportsDir, 'sitemap-runner-latest.json');
    fs.writeFileSync(latestFilepath, JSON.stringify(report, null, 2));
    
    // Generate markdown summary
    this.generateMarkdownSummary(report, timestamp);
  }

  generateMarkdownSummary(report, timestamp) {
    const markdown = `# Sitemap Runner Report - ${timestamp}

## Summary
- **Build**: ${report.summary.build ? '✅' : '❌'}
- **Structure Analysis**: ${report.summary.structure ? '✅' : '❌'}
- **XML Sitemap**: ${report.summary.xml ? '✅' : '❌'}
- **HTML Sitemap**: ${report.summary.html ? '✅' : '❌'}
- **Robots.txt**: ${report.summary.robots ? '✅' : '❌'}
- **Validation**: ${report.summary.validation ? '✅' : '❌'}
- **Overall**: ${report.summary.overall ? '✅' : '❌'}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Status
${report.status === 'completed' ? '✅ Sitemap Generation Completed' : '❌ Sitemap Generation Failed'}

---
*Report generated automatically by PM2 Sitemap Runner*
`;

    const filename = `sitemap-runner-${timestamp}.md`;
    const filepath = path.join(this.reportsDir, filename);
    fs.writeFileSync(filepath, markdown);
    
    const latestFilepath = path.join(this.reportsDir, 'sitemap-runner-latest.md');
    fs.writeFileSync(latestFilepath, markdown);
  }
}

// Main execution
async function main() {
  const runner = new SitemapRunner();
  await runner.runSitemapGeneration();
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = SitemapRunner;