<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.seoIssues = [];
    this.improvements = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }

  async checkMetaTags() {
    this.log('🏷️ Checking meta tags...');
    
    const pagesDir = path.join(this.projectRoot, 'pages');
    const appDir = path.join(this.projectRoot, 'app');
    const srcDir = path.join(this.projectRoot, 'src');
    
    const directories = [pagesDir, appDir, srcDir].filter(dir => fs.existsSync(dir));
    
    for (const dir of directories) {
      const files = this.getAllFiles(dir, ['.js', '.jsx', '.ts', '.tsx']);
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for essential meta tags
          const metaChecks = [
            { tag: 'title', pattern: /<title[^>]*>.*?<\/title>/i, required: true },
            { tag: 'description', pattern: /<meta[^>]*name=["']description["'][^>]*>/i, required: true },
            { tag: 'keywords', pattern: /<meta[^>]*name=["']keywords["'][^>]*>/i, required: false },
            { tag: 'viewport', pattern: /<meta[^>]*name=["']viewport["'][^>]*>/i, required: true },
            { tag: 'og:title', pattern: /<meta[^>]*property=["']og:title["'][^>]*>/i, required: false },
            { tag: 'og:description', pattern: /<meta[^>]*property=["']og:description["'][^>]*>/i, required: false },
            { tag: 'og:image', pattern: /<meta[^>]*property=["']og:image["'][^>]*>/i, required: false }
          ];
          
          metaChecks.forEach(({ tag, pattern, required }) => {
            if (!pattern.test(content)) {
              this.seoIssues.push({
                type: 'missing-meta',
                file: file,
                tag: tag,
                required: required,
                recommendation: required ? `Add ${tag} meta tag` : `Consider adding ${tag} meta tag`
              });
            }
          });
          
          // Check for duplicate title tags
          const titleMatches = content.match(/<title[^>]*>.*?<\/title>/gi);
          if (titleMatches && titleMatches.length > 1) {
            this.seoIssues.push({
              type: 'duplicate-title',
              file: file,
              count: titleMatches.length,
              recommendation: 'Remove duplicate title tags'
            });
          }
          
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    
    this.log('✅ Meta tags check completed', 'SUCCESS');
  }

  async checkHeadings() {
    this.log('📝 Checking heading structure...');
    
    const pagesDir = path.join(this.projectRoot, 'pages');
    const appDir = path.join(this.projectRoot, 'app');
    const srcDir = path.join(this.projectRoot, 'src');
    
    const directories = [pagesDir, appDir, srcDir].filter(dir => fs.existsSync(dir));
    
    for (const dir of directories) {
      const files = this.getAllFiles(dir, ['.js', '.jsx', '.ts', '.tsx']);
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for heading hierarchy
          const headingPattern = /<h([1-6])[^>]*>.*?<\/h[1-6]>/gi;
          const headings = content.match(headingPattern);
          
          if (headings) {
            const headingLevels = headings.map(h => parseInt(h.match(/<h([1-6])/i)[1]));
            
            // Check for proper hierarchy (h1 should come before h2, etc.)
            let previousLevel = 0;
            let hasH1 = false;
            
            headingLevels.forEach((level, index) => {
              if (level === 1) hasH1 = true;
              
              if (level > previousLevel + 1) {
                this.seoIssues.push({
                  type: 'heading-hierarchy',
                  file: file,
                  issue: `Heading h${level} follows h${previousLevel} - skip in hierarchy`,
                  recommendation: 'Maintain proper heading hierarchy (h1 -> h2 -> h3, etc.)'
                });
              }
              
              previousLevel = level;
            });
            
            if (!hasH1) {
              this.seoIssues.push({
                type: 'missing-h1',
                file: file,
                recommendation: 'Add an h1 heading to the page'
              });
            }
          }
          
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    
    this.log('✅ Heading structure check completed', 'SUCCESS');
  }

  async checkImages() {
    this.log('🖼️ Checking image optimization...');
    
    const publicDir = path.join(this.projectRoot, 'public');
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const appDir = path.join(this.projectRoot, 'app');
    
    const directories = [publicDir, srcDir, pagesDir, appDir].filter(dir => fs.existsSync(dir));
    
    for (const dir of directories) {
      const files = this.getAllFiles(dir, ['.js', '.jsx', '.ts', '.tsx', '.html']);
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for img tags without alt attributes
          const imgPattern = /<img[^>]*>/gi;
          const images = content.match(imgPattern);
          
          if (images) {
            images.forEach((img, index) => {
              if (!img.includes('alt=')) {
                this.seoIssues.push({
                  type: 'missing-alt',
                  file: file,
                  image: index + 1,
                  recommendation: 'Add alt attribute to image for accessibility and SEO'
                });
              }
            });
          }
          
          // Check for images that could be optimized
          const imageExtensions = ['.jpg', '.jpeg', '.png'];
          const imageFiles = this.getAllFiles(dir, imageExtensions);
          
          imageFiles.forEach(imageFile => {
            try {
              const stats = fs.statSync(imageFile);
              if (stats.size > 200000) { // > 200KB
                this.seoIssues.push({
                  type: 'large-image',
                  file: imageFile,
                  size: stats.size,
                  recommendation: 'Optimize image size for better performance'
                });
              }
            } catch (error) {
              // Skip files that can't be read
            }
          });
          
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    
    this.log('✅ Image optimization check completed', 'SUCCESS');
  }

  getAllFiles(dir, extensions) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  async generateSitemap() {
    this.log('🗺️ Generating sitemap...');
    
    try {
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-domain.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://your-domain.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
      
      fs.writeFileSync('public/sitemap.xml', sitemapContent);
      
      this.improvements.push({
        type: 'sitemap',
        name: 'XML Sitemap',
        status: 'created',
        file: 'public/sitemap.xml'
      });
      
      this.log('✅ Sitemap generated', 'SUCCESS');
    } catch (error) {
      this.log('❌ Failed to generate sitemap', 'ERROR');
    }
  }

  async generateRobotsTxt() {
    this.log('🤖 Generating robots.txt...');
    
    try {
      const robotsContent = `User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/`;
      
      fs.writeFileSync('public/robots.txt', robotsContent);
      
      this.improvements.push({
        type: 'robots',
        name: 'robots.txt',
        status: 'created',
        file: 'public/robots.txt'
      });
      
      this.log('✅ robots.txt generated', 'SUCCESS');
    } catch (error) {
      this.log('❌ Failed to generate robots.txt', 'ERROR');
    }
  }

  async generateSEOReport() {
    this.log('📊 Generating SEO report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      seoIssues: this.seoIssues,
      improvements: this.improvements,
      summary: {
        totalIssues: this.seoIssues.length,
        missingMeta: this.seoIssues.filter(i => i.type === 'missing-meta').length,
        headingIssues: this.seoIssues.filter(i => i.type === 'heading-hierarchy' || i.type === 'missing-h1').length,
        imageIssues: this.seoIssues.filter(i => i.type === 'missing-alt' || i.type === 'large-image').length,
        improvements: this.improvements.length
      },
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync('seo-optimization-report.json', JSON.stringify(report, null, 2));
    this.log('✅ SEO report generated', 'SUCCESS');
  }

  generateRecommendations() {
    const recommendations = [];
    
    const missingMeta = this.seoIssues.filter(i => i.type === 'missing-meta' && i.required);
    if (missingMeta.length > 0) {
      recommendations.push(`Add ${missingMeta.length} missing required meta tags`);
    }
    
    const headingIssues = this.seoIssues.filter(i => i.type === 'heading-hierarchy' || i.type === 'missing-h1');
    if (headingIssues.length > 0) {
      recommendations.push(`Fix ${headingIssues.length} heading structure issues`);
    }
    
    const imageIssues = this.seoIssues.filter(i => i.type === 'missing-alt' || i.type === 'large-image');
    if (imageIssues.length > 0) {
      recommendations.push(`Optimize ${imageIssues.length} images`);
    }
    
    recommendations.push('Implement structured data (JSON-LD)');
    recommendations.push('Add Open Graph tags for social sharing');
    recommendations.push('Optimize page loading speed');
    recommendations.push('Use semantic HTML elements');
    recommendations.push('Implement breadcrumbs navigation');
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting SEO Optimizer');
    this.log('='.repeat(50));
    
    await this.checkMetaTags();
    await this.checkHeadings();
    await this.checkImages();
    await this.generateSitemap();
    await this.generateRobotsTxt();
    await this.generateSEOReport();
    
    this.log('\n📊 SEO Optimization Summary');
    this.log(`Total SEO issues: ${this.seoIssues.length}`);
    this.log(`Missing meta tags: ${this.seoIssues.filter(i => i.type === 'missing-meta').length}`);
    this.log(`Heading issues: ${this.seoIssues.filter(i => i.type === 'heading-hierarchy' || i.type === 'missing-h1').length}`);
    this.log(`Image issues: ${this.seoIssues.filter(i => i.type === 'missing-alt' || i.type === 'large-image').length}`);
    this.log(`Improvements made: ${this.improvements.length}`);
    
    this.log('\n✅ SEO optimization completed!');
  }
}
<<<<<<< HEAD
// Run if called directly
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(console.error);
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
module.exports = SEOOptimizer;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
module.exports = SEOOptimizer;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
module.exports = SEOOptimizer;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

const optimizer = new SEOOptimizer();
optimizer.run().catch(console.error);

module.exports = SEOOptimizer;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
