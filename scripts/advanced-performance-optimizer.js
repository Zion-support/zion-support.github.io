#!/usr/bin/env node

/**
 * Advanced Performance Optimizer
 * Optimizes images, minifies assets, and enhances performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.outDir = path.join(__dirname, '..', 'out');
    this.optimizations = [];
  }

  async optimize() {
    console.log('🚀 Starting Advanced Performance Optimization...\n');

    try {
      await this.optimizeImages();
      await this.minifyHTML();
      await this.optimizeCSS();
      await this.optimizeJS();
      await this.generateSitemap();
      await this.generateRobotsTxt();
      await this.optimizeManifest();
      
      this.generateReport();
    } catch (error) {
      console.error('❌ Optimization failed:', error.message);
      process.exit(1);
    }
  }

  async optimizeImages() {
    console.log('📸 Optimizing images...');
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const images = this.findFiles(imageExtensions);
    
    for (const image of images) {
      try {
        // Convert to WebP if not already
        if (!image.endsWith('.webp')) {
          const webpPath = image.replace(/\.[^.]+$/, '.webp');
          if (!fs.existsSync(webpPath)) {
            execSync(`cwebp -q 80 "${image}" -o "${webpPath}"`, { stdio: 'pipe' });
            this.optimizations.push(`Converted ${path.basename(image)} to WebP`);
          }
        }
      } catch (error) {
        console.warn(`⚠️  Could not optimize ${image}: ${error.message}`);
      }
    }
    
    console.log(`✅ Optimized ${images.length} images`);
  }

  async minifyHTML() {
    console.log('📄 Minifying HTML files...');
    
    const htmlFiles = this.findFiles(['.html']);
    
    for (const file of htmlFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Basic HTML minification
        content = content
          .replace(/\s+/g, ' ')
          .replace(/>\s+</g, '><')
          .replace(/\s+>/g, '>')
          .replace(/>\s+/g, '>')
          .trim();
        
        fs.writeFileSync(file, content);
        this.optimizations.push(`Minified ${path.basename(file)}`);
      } catch (error) {
        console.warn(`⚠️  Could not minify ${file}: ${error.message}`);
      }
    }
    
    console.log(`✅ Minified ${htmlFiles.length} HTML files`);
  }

  async optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const cssFiles = this.findFiles(['.css']);
    
    for (const file of cssFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Basic CSS minification
        content = content
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
          .replace(/\s+/g, ' ') // Collapse whitespace
          .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
          .replace(/\s*{\s*/g, '{') // Remove spaces around opening brace
          .replace(/;\s*/g, ';') // Remove spaces after semicolons
          .trim();
        
        fs.writeFileSync(file, content);
        this.optimizations.push(`Optimized CSS in ${path.basename(file)}`);
      } catch (error) {
        console.warn(`⚠️  Could not optimize CSS in ${file}: ${error.message}`);
      }
    }
    
    console.log(`✅ Optimized ${cssFiles.length} CSS files`);
  }

  async optimizeJS() {
    console.log('⚡ Optimizing JavaScript...');
    
    const jsFiles = this.findFiles(['.js']);
    
    for (const file of jsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Basic JS minification
        content = content
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
          .replace(/\/\/.*$/gm, '') // Remove line comments
          .replace(/\s+/g, ' ') // Collapse whitespace
          .replace(/\s*{\s*/g, '{') // Remove spaces around braces
          .replace(/\s*}\s*/g, '}') // Remove spaces around braces
          .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
          .trim();
        
        fs.writeFileSync(file, content);
        this.optimizations.push(`Optimized JS in ${path.basename(file)}`);
      } catch (error) {
        console.warn(`⚠️  Could not optimize JS in ${file}: ${error.message}`);
      }
    }
    
    console.log(`✅ Optimized ${jsFiles.length} JavaScript files`);
  }

  async generateSitemap() {
    console.log('🗺️  Generating sitemap...');
    
    const pages = [
      { url: '/', priority: 1.0, changefreq: 'daily' },
      { url: '/about', priority: 0.8, changefreq: 'monthly' },
      { url: '/services', priority: 0.9, changefreq: 'weekly' },
      { url: '/services-advertising', priority: 0.8, changefreq: 'weekly' },
      { url: '/contact', priority: 0.7, changefreq: 'monthly' },
      { url: '/blog', priority: 0.6, changefreq: 'weekly' },
      { url: '/client-portal', priority: 0.5, changefreq: 'monthly' }
    ];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    fs.writeFileSync(path.join(this.outDir, 'sitemap.xml'), sitemap);
    this.optimizations.push('Generated sitemap.xml');
    console.log('✅ Generated sitemap.xml');
  }

  async generateRobotsTxt() {
    console.log('🤖 Generating robots.txt...');
    
    const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /client-portal/`;
    
    fs.writeFileSync(path.join(this.outDir, 'robots.txt'), robots);
    this.optimizations.push('Generated robots.txt');
    console.log('✅ Generated robots.txt');
  }

  async optimizeManifest() {
    console.log('📱 Optimizing web app manifest...');
    
    const manifest = {
      name: "Zion Tech Group - AI, IT & Micro SaaS Services",
      short_name: "Zion Tech",
      description: "Leading provider of AI solutions, enterprise IT services, and micro SaaS development",
      start_url: "/",
      display: "standalone",
      background_color: "#0f172a",
      theme_color: "#06b6d4",
      orientation: "portrait-primary",
      icons: [
        {
          src: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png"
        }
      ],
      categories: ["business", "technology", "productivity"],
      lang: "en-US",
      scope: "/",
      id: "zion-tech-group-app"
    };
    
    fs.writeFileSync(
      path.join(this.outDir, 'site.webmanifest'), 
      JSON.stringify(manifest, null, 2)
    );
    this.optimizations.push('Generated optimized web app manifest');
    console.log('✅ Generated optimized web app manifest');
  }

  findFiles(extensions) {
    const files = [];
    
    const findInDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          findInDir(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    if (fs.existsSync(this.outDir)) {
      findInDir(this.outDir);
    }
    
    return files;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      totalOptimizations: this.optimizations.length,
      performance: {
        imagesOptimized: this.optimizations.filter(opt => opt.includes('WebP')).length,
        htmlMinified: this.optimizations.filter(opt => opt.includes('Minified') && opt.includes('.html')).length,
        cssOptimized: this.optimizations.filter(opt => opt.includes('CSS')).length,
        jsOptimized: this.optimizations.filter(opt => opt.includes('JS')).length
      }
    };
    
    fs.writeFileSync(
      path.join(__dirname, '..', 'performance-optimization-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('\n🎉 Performance Optimization Complete!');
    console.log(`📊 Total optimizations: ${this.optimizations.length}`);
    console.log(`📸 Images optimized: ${report.performance.imagesOptimized}`);
    console.log(`📄 HTML files minified: ${report.performance.htmlMinified}`);
    console.log(`🎨 CSS files optimized: ${report.performance.cssOptimized}`);
    console.log(`⚡ JS files optimized: ${report.performance.jsOptimized}`);
    console.log('\n📋 Full report saved to: performance-optimization-report.json');
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.optimize().catch(console.error);
}

module.exports = PerformanceOptimizer;