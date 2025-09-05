#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AppEnhancementSuite {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'app-enhancement.log');
    this.reportFile = path.join(__dirname, 'reports', 'enhancement-report.json');
    this.ensureDirectories();
    this.enhancements = [];
  }

  ensureDirectories() {
    const dirs = [
      path.dirname(this.logFile),
      path.dirname(this.reportFile),
      path.join(__dirname, 'logs'),
      path.join(__dirname, 'reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async optimizeImages() {
    this.log('Starting image optimization...');
    try {
      // Create image optimization script
      const optimizerScript = `
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const imageDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(imageDir)) {
    console.log('No images directory found');
    return;
  }

  const files = fs.readdirSync(imageDir);
  let optimized = 0;

  for (const file of files) {
    if (file.match(/\\.(jpg|jpeg|png|gif)$/i)) {
      const inputPath = path.join(imageDir, file);
      const outputPath = path.join(imageDir, file.replace(/\\.(jpg|jpeg|png|gif)$/i, '.webp'));
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        optimized++;
        console.log(\`Optimized: \${file}\`);
      } catch (error) {
        console.log(\`Error optimizing \${file}: \${error.message}\`);
      }
    }
  }

  console.log(\`Optimized \${optimized} images\`);
}

optimizeImages().catch(console.error);
`;

      const scriptPath = path.join(__dirname, 'temp-image-optimizer.js');
      fs.writeFileSync(scriptPath, optimizerScript);
      
      const result = execSync(`node ${scriptPath}`, { 
        stdio: 'pipe', 
        cwd: path.join(__dirname, '..'),
        encoding: 'utf8'
      });
      
      this.enhancements.push({
        type: 'image-optimization',
        description: 'Optimized images to WebP format',
        result: result
      });
      
      this.log('Image optimization completed');
      
      // Clean up
      if (fs.existsSync(scriptPath)) {
        fs.unlinkSync(scriptPath);
      }
    } catch (error) {
      this.log(`Image optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async generateSitemap() {
    this.log('Generating sitemap...');
    try {
      const sitemapScript = `
const fs = require('fs');
const path = require('path');

const pages = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/faq',
  '/terms',
  '/pricing',
  '/ai-services',
  '/micro-saas',
  '/blockchain',
  '/cybersecurity'
];

const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${pages.map(page => \`
  <url>
    <loc>https://ziontechgroup.com\${page}</loc>
    <lastmod>\${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\`).join('')}
</urlset>\`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully');
`;

      const scriptPath = path.join(__dirname, 'temp-sitemap-generator.js');
      fs.writeFileSync(scriptPath, sitemapScript);
      
      execSync(`node ${scriptPath}`, { 
        stdio: 'pipe', 
        cwd: path.join(__dirname, '..')
      });
      
      this.enhancements.push({
        type: 'sitemap-generation',
        description: 'Generated XML sitemap for SEO',
        result: 'Sitemap created at /public/sitemap.xml'
      });
      
      this.log('Sitemap generation completed');
      
      // Clean up
      if (fs.existsSync(scriptPath)) {
        fs.unlinkSync(scriptPath);
      }
    } catch (error) {
      this.log(`Sitemap generation failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeBundle() {
    this.log('Analyzing bundle size...');
    try {
      const result = execSync('npm run build:analyze', { 
        stdio: 'pipe', 
        cwd: path.join(__dirname, '..'),
        encoding: 'utf8'
      });
      
      this.enhancements.push({
        type: 'bundle-analysis',
        description: 'Analyzed bundle size and performance',
        result: 'Bundle analysis completed'
      });
      
      this.log('Bundle analysis completed');
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'WARN');
    }
  }

  async generateRobotsTxt() {
    this.log('Generating robots.txt...');
    try {
      const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /faq
Allow: /terms
Allow: /pricing
Allow: /ai-services
Allow: /micro-saas
Allow: /blockchain
Allow: /cybersecurity
`;

      fs.writeFileSync(path.join(__dirname, '..', 'public', 'robots.txt'), robotsContent);
      
      this.enhancements.push({
        type: 'robots-txt',
        description: 'Generated robots.txt for SEO',
        result: 'Robots.txt created at /public/robots.txt'
      });
      
      this.log('Robots.txt generation completed');
    } catch (error) {
      this.log(`Robots.txt generation failed: ${error.message}`, 'ERROR');
    }
  }

  async generateManifest() {
    this.log('Generating web app manifest...');
    try {
      const manifest = {
        name: "Zion Tech Group",
        short_name: "Zion Tech",
        description: "Leading provider of micro SaaS products, AI services, and IT solutions",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#3b82f6",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "any",
            type: "image/x-icon"
          }
        ]
      };

      fs.writeFileSync(
        path.join(__dirname, '..', 'public', 'manifest.json'), 
        JSON.stringify(manifest, null, 2)
      );
      
      this.enhancements.push({
        type: 'web-manifest',
        description: 'Generated web app manifest for PWA support',
        result: 'Manifest created at /public/manifest.json'
      });
      
      this.log('Web app manifest generation completed');
    } catch (error) {
      this.log(`Web app manifest generation failed: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      enhancements: this.enhancements,
      summary: {
        totalEnhancements: this.enhancements.length,
        types: [...new Set(this.enhancements.map(e => e.type))]
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Enhancement report generated: ${this.reportFile}`);
    return report;
  }

  async run() {
    this.log('Starting App Enhancement Suite...');
    
    try {
      await this.generateSitemap();
      await this.generateRobotsTxt();
      await this.generateManifest();
      await this.optimizeBundle();
      // await this.optimizeImages(); // Commented out as sharp might not be installed
      
      const report = await this.generateReport();
      
      this.log(`App Enhancement Suite completed. Applied ${report.summary.totalEnhancements} enhancements.`);
      
      return report;
    } catch (error) {
      this.log(`App Enhancement Suite failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const suite = new AppEnhancementSuite();
  suite.run().catch(console.error);
}

module.exports = AppEnhancementSuite;