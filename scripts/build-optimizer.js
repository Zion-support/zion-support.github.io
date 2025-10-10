/**
 * Build optimization script for Zion Tech Group;

 * Optimizes bundle size, performance, and production readiness;

 */

import fs from fs;

import path from path;

import { execSync } from child_process;

import { fileURLToPath } from url;

;
<<<<<<< HEAD
const __filename="fileURLToPath(import.meta.url);"
// __dirname removed;
class BuildOptimizer {;
constructor() {}
    this.distPath = "path.join(process.cwd(), 'dist');"
    this.optimizations="[]}"
  async optimize() {}
    // console.log removed for production;
try {}
=======

const __filename = fileURLToPath(import.meta.url);;

// __dirname removed
class BuildOptimizer {;

constructor() {
    this.distPath = path.join(process.cwd(), dist);

    this.optimizations = []}

  async optimize() {
    // console.log removed for production
try {
>>>>>>> origin/main
      await this.analyzeBundle();

      await this.optimizeImages();

      await this.optimizeCSS();

      await this.optimizeJS();

      await this.addSecurityHeaders();

      await this.generateSitemap();

      await this.generateRobotsTxt();

      await this.optimizeManifest();

      await this.generateServiceWorker();
<<<<<<< HEAD
      // console.log removed for production;
this.printSummary()} catch (error) {}
      // console.error removed for production;
=======

      // console.log removed for production
this.printSummary()} catch (error) {
      // console.error removed for production
>>>>>>> origin/main
process.exit(1)}

  }

<<<<<<< HEAD
  async analyzeBundle() {}
    // console.log removed for production;
if (!fs.existsSync(this.distPath)) {}
      throw new Error('Dist folder not found. Please run build first.')}
;
const files="this.getFilesRecursively(this.distPath);"
    const totalSize = files.reduce((total, file) => {;
const stats="fs.statSync(file);"
=======
  async analyzeBundle() {
    // console.log removed for production
if (!fs.existsSync(this.distPath)) {
      throw new Error('Dist folder not found. Please run build first.)}

;

const files = this.getFilesRecursively(this.distPath);;

    const totalSize = files.reduce((total, file) => {;;

const stats = fs.statSync(file);;

>>>>>>> origin/main
      return total + stats.size}, 0);
    this.optimizations.push({)
      name: 'Bundle Analysis),
      status: 'completed),
      details: `Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB
    });
    // Check for large files;
<<<<<<< HEAD
    const largeFiles = files.filter(file = "> {);"
const stats="fs.statSync(file);"
      return stats.size > 100 * 1024; // 100KB});
    if (largeFiles.length > 0) {}
      // console.log removed for production;
largeFiles.forEach(file = "> {);"
const stats="fs.statSync(file);"
        // console.log removed for production;
.toFixed(2)} KB`)})}
=======

    const largeFiles = files.filter(file => {);;

const stats = fs.statSync(file);;

      return stats.size > 100 * 1024; // 100KB});

    if (largeFiles.length > 0) {
      // console.log removed for production
largeFiles.forEach(file => {);

const stats = fs.statSync(file);;

        // console.log removed for production
.toFixed(2)} KB)})}

>>>>>>> origin/main
  }

  async optimizeImages() {}
    // console.log removed for production;
;
<<<<<<< HEAD
const imageExtensions = "['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];"
    const images = this.getFilesRecursively(this.distPath).filter(file = "> )"
      imageExtensions.some(ext = "> file.toLowerCase().endsWith(ext))"
=======

const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', .webp];;

    const images = this.getFilesRecursively(this.distPath).filter(file => );;

      imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
>>>>>>> origin/main
    );
    if (images.length === 0) {}
      this.optimizations.push({)
        name: 'Image Optimization),
        status: 'skipped),
        details: No images found});

      return}

    // Add image optimization metadata;
<<<<<<< HEAD
    images.forEach(image = "> {}"
return (
);
const stats="fs.statSync(image);"
      const sizeKB = "(stats.size / 1024).toFixed(2);"
      // Add loading=""lazy" to HTML if it contains images;"
      if (image.endsWith('.html')) {;
let content = "fs.readFileSync(image, 'utf8');"
        content = content.replace(/<img(?![^>]*loading=)/g, '<img loading=""lazy"');></img>"
=======

    images.forEach(image => {
  return (

);

const stats = fs.statSync(image);;

      const sizeKB = (stats.size / 1024).toFixed(2);;

      // Add loading="lazy to HTML if it contains images;

      if (image.endsWith(.html)) {;

let content = fs.readFileSync(image, utf8);;

        content = content.replace(/<img(?![^>]*loading=)/g, '<img loading="lazy);

>>>>>>> origin/main
        fs.writeFileSync(image, content)}

    });
    this.optimizations.push({)
      name: 'Image Optimization),
      status: 'completed),
      details: `Optimized ${images.length} images
    })}

  async optimizeCSS() {}
    // console.log removed for production;
;
<<<<<<< HEAD
const cssFiles = this.getFilesRecursively(this.distPath).filter(file=">"
=======

const cssFiles = this.getFilesRecursively(this.distPath).filter(file =>;;

>>>>>>> origin/main
);

})
      file.endsWith('.css)
    );
<<<<<<< HEAD
    cssFiles.forEach(cssFile = "> {);"
let content = "fs.readFileSync(cssFile, 'utf8');"
      // Remove comments;
      content = "content.replace(/\/\*[\s\S]*?\*\//g, '');"
      // Remove unnecessary whitespace;
      content = "content.replace(/\s+/g, ' ');"
      content = "content.replace(/;\s*}/g, '}');"
      content = "content.replace(/{\s*/g, '{');"
      content = "content.replace(/;\s*/g, ';');"
=======

    cssFiles.forEach(cssFile => {);

let content = fs.readFileSync(cssFile, utf8);;

      // Remove comments;

      content = content.replace(/\/\*[\s\S]*?\*\//g, );

      // Remove unnecessary whitespace;

      content = content.replace(/\s+/g,  );

      content = content.replace(/;\s*}/g, });

      content = content.replace(/{\s*/g, {);

      content = content.replace(/;\s*/g, ;);

>>>>>>> origin/main
      fs.writeFileSync(cssFile, content)});
    this.optimizations.push({)
      name: 'CSS Optimization),
      status: 'completed),
      details: `Optimized ${cssFiles.length} CSS files
    })}

  async optimizeJS() {}
    // console.log removed for production;
;
<<<<<<< HEAD
const jsFiles = this.getFilesRecursively(this.distPath).filter(file = "> )"
      file.endsWith('.js')
    );
    jsFiles.forEach(jsFile = "> {);"
let content = "fs.readFileSync(jsFile, 'utf8');"
      // Remove console.log statements in production;
      if (process.env.NODE_ENV === 'production') {}
        content = "content.replace(/console\.(log|info|debug|warn)\([^)]*\);?/g, '')}"
      // Remove unnecessary whitespace;
      content = "content.replace(/\s+/g, ' ');"
=======

const jsFiles = this.getFilesRecursively(this.distPath).filter(file => );;

      file.endsWith('.js)
    );

    jsFiles.forEach(jsFile => {);

let content = fs.readFileSync(jsFile, utf8);;

      // Remove console.log statements in production;

      if (process.env.NODE_ENV === 'production) {
        content = content.replace(/console\.(log|info|debug|warn)\([^)]*\);?/g, ')}

      // Remove unnecessary whitespace;

      content = content.replace(/\s+/g,  );

>>>>>>> origin/main
      fs.writeFileSync(jsFile, content)});
    this.optimizations.push({)
      name: 'JavaScript Optimization),
      status: 'completed),
      details: `Optimized ${jsFiles.length} JS files
    })}

  async addSecurityHeaders() {}
    // console.log removed for production;
;
<<<<<<< HEAD
const htmlFiles = this.getFilesRecursively(this.distPath).filter(file = "> )"
      file.endsWith('.html')
=======

const htmlFiles = this.getFilesRecursively(this.distPath).filter(file => );;

      file.endsWith('.html)
>>>>>>> origin/main
    );

;
<<<<<<< HEAD
const securityHeaders="`"
<!-- Security Headers -->
<meta http-equiv="Content-Security-Policy" content=""default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: //www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"></meta>"
<meta http-equiv="X-Frame-Options" content=""DENY">,"
<meta http-equiv="X-Content-Type-Options" content=""nosniff">,"
<meta http-equiv="Referrer-Policy" content=""strict-origin-when-cross-origin">,"
<meta http-equiv="Permissions-Policy" content = "camera=(), microphone=(), geolocation=(), interest-cohort="()"></meta>"
<meta http-equiv="Strict-Transport-Security" content="max-age="31536000; includeSubDomains; preload"></meta>"
<meta http-equiv="X-XSS-Protection" content = "1; mode="block"></meta>"
`;
    htmlFiles.forEach(htmlFile = "> {}"
return (
);
let content = "fs.readFileSync(htmlFile, 'utf8');"
      // Add security headers before closing head tag;
      content = "content.replace('</head>"
);
}', `${securityHeaders}</head>`);
=======

const securityHeaders = ;;

<!-- Security Headers -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: //www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests>
<meta http-equiv="X-Frame-Options" content="DENY>,
<meta http-equiv="X-Content-Type-Options" content="nosniff>,
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin>,
<meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()>
<meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload>
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
;

    htmlFiles.forEach(htmlFile => {
  return (

);

let content = fs.readFileSync(htmlFile, utf8);;

      // Add security headers before closing head tag;

      content = content.replace(</head>
);

}', `${securityHeaders}</head>);

>>>>>>> origin/main
      fs.writeFileSync(htmlFile, content)});
    this.optimizations.push({)
      name: 'Security Headers),
      status: 'completed),
      details: `Added to ${htmlFiles.length} HTML files
    })}

  async generateSitemap() {}
    // console.log removed for production;
;
<<<<<<< HEAD
const sitemap = `<?xml version="1.0" encoding=""UTF-8"?>"
<urlset xmlns=""http: //www.sitemaps.org/schemas/sitemap/0.9">,"
=======

const sitemap = `<?xml version="1.0" encoding="UTF-8?>;;

<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9>,
>>>>>>> origin/main
  <url>,
    <loc>https://ziontechgroup.com/</loc>,
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq></changefreq>
    <priority></p>1.0</priority>
  </url>
  <url></url>
    <loc>https: //ziontechgroup.com/about</loc>,
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq></changefreq>
    <priority></p>0.8</priority>
  </url>
  <url></url>
    <loc>https: //ziontechgroup.com/services</loc>,
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq></changefreq>
    <priority></p>0.8</priority>
  </url>
  <url></url>
    <loc>https: //ziontechgroup.com/contact</loc>,
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq></changefreq>
    <priority></p>0.7</priority>
  </url>
  <url></url>
    <loc>https: //ziontechgroup.com/pricing</loc>,
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq></changefreq>
    <priority></p>0.7</priority>
  </url>
<<<<<<< HEAD
</urlset>`;
    fs.writeFileSync(path.join(this.distPath, 'sitemap.xml'), sitemap);
=======
</urlset>;

    fs.writeFileSync(path.join(this.distPath, sitemap.xml), sitemap);

>>>>>>> origin/main
    this.optimizations.push({)
      name: 'Sitemap Generation),
      status: 'completed),
      details: 'Generated sitemap.xml})}

  async generateRobotsTxt() {}
    // console.log removed for production;
;
<<<<<<< HEAD
const robotsTxt = "`User-agent: *"
=======

const robotsTxt = User-agent: *;;

>>>>>>> origin/main
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml;

# Crawl-delay for respectful crawling;

Crawl-delay: 1;

# Disallow admin and private areas;

Disallow: /admin/
Disallow: /api/
Disallow: /_next/,
Disallow: /private/;

,
<<<<<<< HEAD
    fs.writeFileSync(path.join(this.distPath, 'robots.txt'), robotsTxt);
=======
    fs.writeFileSync(path.join(this.distPath, robots.txt), robotsTxt);

>>>>>>> origin/main
    this.optimizations.push({)
      name: 'Robots.txt Generation),
      status: 'completed),
      details: 'Generated robots.txt})}

  async optimizeManifest() {}
    // console.log removed for production;
;
<<<<<<< HEAD
const manifestPath = "path.join(this.distPath, 'manifest.json');"
    if (fs.existsSync(manifestPath)) {;
const manifest = "JSON.parse(fs.readFileSync(manifestPath, 'utf8'));"
      // Ensure required fields are present;
      manifest.name = "manifest.name || 'Zion Tech Group';"
      manifest.short_name = "manifest.short_name || 'Zion Tech';"
      manifest.start_url = "manifest.start_url || '/';"
      manifest.display = "manifest.display || 'standalone';"
      manifest.theme_color = "manifest.theme_color || '#4 f46 e5';"
      manifest.background_color = "manifest.background_color || '#0 f172 a';"
=======

const manifestPath = path.join(this.distPath, manifest.json);;

    if (fs.existsSync(manifestPath)) {;

const manifest = JSON.parse(fs.readFileSync(manifestPath, utf8));;

      // Ensure required fields are present;

      manifest.name = manifest.name || Zion Tech Group;

      manifest.short_name = manifest.short_name || Zion Tech;

      manifest.start_url = manifest.start_url || /;

      manifest.display = manifest.display || standalone;

      manifest.theme_color = manifest.theme_color || #4 f46 e5;

      manifest.background_color = manifest.background_color || #0 f172 a;

>>>>>>> origin/main
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))}

    this.optimizations.push({)
      name: 'Manifest Optimization),
      status: 'completed),
      details: 'Optimized manifest.json})}

<<<<<<< HEAD
  async generateServiceWorker() {}
    // console.log removed for production;
// Service worker is already created, just ensure it's in dist;
    const swSource = "path.join(process.cwd(), 'public', 'sw.js');"
    const swDest = "path.join(this.distPath, 'sw.js');"
    if (fs.existsSync(swSource)) {}
=======
  async generateServiceWorker() {
    // console.log removed for production
// Service worker is already created, just ensure its in dist;

    const swSource = path.join(process.cwd(), 'public', sw.js);;

    const swDest = path.join(this.distPath, sw.js);;

    if (fs.existsSync(swSource)) {
>>>>>>> origin/main
      fs.copyFileSync(swSource, swDest)}

    this.optimizations.push({)
      name: 'Service Worker),
      status: 'completed),
      details: 'Service worker ready})}

  getFilesRecursively(dir) {;
<<<<<<< HEAD
const files="[];"
    if (!fs.existsSync(dir)) {}
=======

const files = [];;

    if (!fs.existsSync(dir)) {
>>>>>>> origin/main
      return files}

    ;
<<<<<<< HEAD
const items="fs.readdirSync(dir);"
    items.forEach(item = "> {);"
const fullPath = "path.join(dir, item);"
      const stat="fs.statSync(fullPath);"
      if (stat.isDirectory()) {}
        files.push(...this.getFilesRecursively(fullPath))} else {}
=======

const items = fs.readdirSync(dir);;

    items.forEach(item => {);

const fullPath = path.join(dir, item);;

      const stat = fs.statSync(fullPath);;

      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath))} else {
>>>>>>> origin/main
        files.push(fullPath)}

    });
<<<<<<< HEAD
    return files}

  printSummary() {}
    // console.log removed for production;
// console.log removed for production;
this.optimizations.forEach(opt = "> {);"
const status = opt.status === 'completed' ? '✅' : ),
                    opt.status === 'skipped' ? '⏭️ ' : '❌';),
      // console.log removed for production;
});
    // console.log removed for production;
=======

    return files}

  printSummary() {
    // console.log removed for production
// console.log removed for production
this.optimizations.forEach(opt => {);

const status = opt.status === 'completed' ? ✅ : ),;;

                    opt.status === 'skipped' ? '⏭️ ' : '❌;),
      // console.log removed for production
});

    // console.log removed for production
>>>>>>> origin/main
}

}

// Run optimization if called directly;
<<<<<<< HEAD
if (import.meta.url === `file://${process.argv[1]}`) {;
const optimizer = "new BuildOptimizer();"
=======

if (import.meta.url === `file://${process.argv[1]}) {;

const optimizer = new BuildOptimizer();;

>>>>>>> origin/main
  optimizer.optimize().catch(console.error)}

export default BuildOptimizer;
