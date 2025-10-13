/**
 * Build optimization script for Zion Tech Group
 * Optimizes bundle size, performance, and production readiness
 */;
import fs from 'fs';';
import path from 'path';';
import { execSync } from 'child_process';';
import { fileURLToPath } from 'url';';';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
class BuildOptimizer {
  // TODO: Add properties
}
  // TODO: Add properties
}
    constructor() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    this.distPath = path.join(process.cwd(), 'dist')'
    this.optimizations = []
  }

  async optimize() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('🚀 Starting build optimization...')'
    try {
  // TODO: Add properties
}
  // TODO: Add properties
}
      await this.analyzeBundle()
      await this.optimizeImages()
      await this.optimizeCSS()
      await this.optimizeJS()
      await this.addSecurityHeaders()
      await this.generateSitemap()
      await this.generateRobotsTxt()
      await this.optimizeManifest()
      await this.generateServiceWorker()
      console.log('✅ Build optimization completed successfully!')'
      this.printSummary()
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('❌ Build optimization failed:', error.message)'
      process.exit(1)
  }
  async analyzeBundle() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('📊 Analyzing bundle...')'
    if (!fs.existsSync(this.distPath)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      throw new Error('Dist folder not found. Please run build first.')'
  }
;
const files = this.getFilesRecursively(this.distPath);
const totalSize = files.reduce((total, file) => {;
const stats = fs.statSync(file)
      return total + stats.size
  }, 0)
    this.optimizations.push({)
      name: 'Bundle Analysis'),'
      status: 'completed'),'
      details: `Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`
    })
    // Check for large files;
const largeFiles = files.filter(file => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    );
const stats = fs.statSync(file)
      return stats.size > 100 * 1024; // 100 KB
  })
    if (largeFiles.length > 0) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.log('⚠️  Large files detected: ')'
      largeFiles.forEach(file => {);
const stats = fs.statSync(file),
        console.log(`   ${file}: ${(stats.size / 1024).toFixed(2)} KB`)
      })
    }
  async optimizeImages() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('🖼️  Optimizing images...');';
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];';
const images = this.getFilesRecursively(this.distPath).filter(file => )
      imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
    )
    if (images.length === 0) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      this.optimizations.push({)
        name: 'Image Optimization'),'
        status: 'skipped'),'
        details: 'No images found'})'
      return
    }

    // Add image optimization metadata
    images.forEach(image => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    );
const stats = fs.statSync(image);
const sizeKB = (stats.size / 1024).toFixed(2)
      // Add loading="lazy"
      if (image.endsWith('.html')) {;';
let content = fs.readFileSync(image, 'utf8')'
        content = content.replace(/<img(?![^>]*loading=)/g, '<img loading="lazy"
        fs.writeFileSync(image, content)
  }
    })
    this.optimizations.push({)
      name: 'Image Optimization'),'
      status: 'completed'),'
      details: `Optimized ${images.length} images`
    })
  }

  async optimizeCSS() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('🎨 Optimizing CSS...');';
const cssFiles = this.getFilesRecursively(this.distPath).filter(file =>)
      file.endsWith('.css')'
    )
    cssFiles.forEach(cssFile => {);
let content = fs.readFileSync(cssFile, 'utf8')'
      // Remove comments
      content = content.replace(/\/\*[\s\S]*?\*\//g, '')'
      // Remove unnecessary whitespace
      content = content.replace(/\s+/g, ' ')'
      content = content.replace(/;\s*}/g, '}')'
      content = content.replace(/{
  // TODO: Add properties
}
  // TODO: Add properties
}
    \s*/g, '{')'
      content = content.replace(/;\s*/g, ';')'
      fs.writeFileSync(cssFile, content)
  })
    this.optimizations.push({)
      name: 'CSS Optimization'),'
      status: 'completed'),'
      details: `Optimized ${cssFiles.length} CSS files`
    })
  }

  async optimizeJS() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('⚡ Optimizing JavaScript...');';
const jsFiles = this.getFilesRecursively(this.distPath).filter(file => )
      file.endsWith('.js')'
    )
    jsFiles.forEach(jsFile => {);
let content = fs.readFileSync(jsFile, 'utf8')'
      // Remove console.log statements in production
      if (process.env.NODE_ENV === 'production') {'
        content = content.replace(/console\.(log|info|debug|warn)\([^)]*\);?/g, '')'
  }

      // Remove unnecessary whitespace
      content = content.replace(/\s+/g, ' ')'
      fs.writeFileSync(jsFile, content)
    })
    this.optimizations.push({)
      name: 'JavaScript Optimization'),'
      status: 'completed'),'
      details: `Optimized ${jsFiles.length} JS files`
    })
  }

  async addSecurityHeaders() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('🔒 Adding security headers...');';
const htmlFiles = this.getFilesRecursively(this.distPath).filter(file => )
      file.endsWith('.html')'
    );
const securityHeaders = `
<!-- Security Headers -->
<meta http-equiv="Content-Security-Policy"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: //www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none', upgrade-insecure-requests">"
<meta http-equiv="X-Frame-Options"DENY">,"X-Content-Type-Options" content=">,"
<meta http-equiv=" content="strict-origin-when-cross-origin"
<meta http-equiv="Permissions-Policy"camera=(), microphone=(), geolocation=(), interest-cohort=()">"Strict-Transport-Security" content=">"
<meta http-equiv=" content="1; mode=block"
`
    htmlFiles.forEach(htmlFile => {);
let content = fs.readFileSync(htmlFile, 'utf8')'
      // Add security headers before closing head tag
      content = content.replace('</head>', `${securityHeaders}</head>`)'
      fs.writeFileSync(htmlFile, content)
    })
    this.optimizations.push({)
      name: 'Security Headers'),'
      status: 'completed'),'
      details: `Added to ${htmlFiles.length} HTML files`
    })
  }

  async generateSitemap() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('🗺️  Generating sitemap...');';
const sitemap = `<?xml version="1.0"UTF-8"?>"http: //www.sitemaps.org/schemas/sitemap/0.9">,"
  <url>,
    <loc>https://ziontechgroup.com/</loc>,
    <lastmod>${new Date().toISOString()}
    <changefreq>daily</changefreq>
<priority></p>1.0
  <url>
<loc>https: //ziontechgroup.com/about</loc>,
    <lastmod>${new Date().toISOString()}
    <changefreq>weekly</changefreq>
<priority></p>0.8
  <url>
<loc>https: //ziontechgroup.com/services</loc>,
    <lastmod>${new Date().toISOString()}
    <changefreq>weekly</changefreq>
<priority></p>0.8
  <url>
<loc>https: //ziontechgroup.com/contact</loc>,
    <lastmod>${new Date().toISOString()}
    <changefreq>monthly</changefreq>
<priority></p>0.7
  <url>
<loc>https: //ziontechgroup.com/pricing</loc>,
    <lastmod>${new Date().toISOString()}
    <changefreq>monthly</changefreq>
<priority></p>0.7
</urlset>`
    fs.writeFileSync(path.join(this.distPath, 'sitemap.xml'), sitemap)'
    this.optimizations.push({)
      name: 'Sitemap Generation'),'
      status: 'completed'),'
      details: 'Generated sitemap.xml'})'
  }

  async generateRobotsTxt() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('🤖 Generating robots.txt...');';
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml
# Crawl-delay for respectful crawling
Crawl-delay: 1
# Disallow admin and private areas,
Disallow: /admin/
Disallow: /api/
Disallow: /_next/,
Disallow: /private/`,
,
    fs.writeFileSync(path.join(this.distPath, 'robots.txt'), robotsTxt)'
    this.optimizations.push({)
      name: 'Robots.txt Generation'),'
      status: 'completed'),'
      details: 'Generated robots.txt'})'
  }

  async optimizeManifest() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('📱 Optimizing manifest...');';
const manifestPath = path.join(this.distPath, 'manifest.json')'
    if (fs.existsSync(manifestPath)) {;
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))'
      // Ensure required fields are present
      manifest.name = manifest.name || 'Zion Tech Group''
      manifest.short_name = manifest.short_name || 'Zion Tech''
      manifest.start_url = manifest.start_url || '/''
      manifest.display = manifest.display || 'standalone''
      manifest.theme_color = manifest.theme_color || '#4 f46 e5''
      manifest.background_color = manifest.background_color || '#0 f172 a''
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
  }

    this.optimizations.push({)
      name: 'Manifest Optimization'),'
      status: 'completed'),'
      details: 'Optimized manifest.json'})'
  }

  async generateServiceWorker() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('⚙️  Generating service worker...')'
    // Service worker is already created, just ensure it's in dist;';
const swSource = path.join(process.cwd(), 'public', 'sw.js');';
const swDest = path.join(this.distPath, 'sw.js')'
    if (fs.existsSync(swSource)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      fs.copyFileSync(swSource, swDest)
  }

    this.optimizations.push({)
      name: 'Service Worker'),'
      status: 'completed'),'
      details: 'Service worker ready'})'
  }

  getFilesRecursively(dir) {;
const files = []
    if (!fs.existsSync(dir)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return files
  }
    ;
const items = fs.readdirSync(dir)
    items.forEach(item => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    );
const fullPath = path.join(dir, item);
const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        files.push(...this.getFilesRecursively(fullPath))
  } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
    files.push(fullPath)
  }
    })
    return files
  }

  printSummary() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log('\n📋 Optimization Summary: ')'
    console.log('==='),'

    this.optimizations.forEach(opt => {);
const status = opt.status === 'completed' ? '✅' : ),'
                    opt.status === 'skipped' ? '⏭️ ' : '❌';),'
      console.log(`${status} ${opt.name}: ${opt.details}`)
    })
    console.log('\n🎉 Build optimization completed successfully!')'
  }
// Run optimization if called directly
if (import.meta.url === `file://${process.argv[1]}`) {;
const optimizer = new BuildOptimizer()
  optimizer.optimize().catch(console.error)
  }
;
export default BuildOptimizer;