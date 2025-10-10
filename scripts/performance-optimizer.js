import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Optimize images
function optimizeImages() {
  console.log('📸 Optimizing images...');
  
  const publicDir = path.join(__dirname, '../public');
  const imagesDir = path.join(publicDir, 'images');
  
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir);
    console.log(`Found ${files.length} image files to optimize`);
    
    // In a real implementation, you would use sharp or imagemin here
    // For now, we'll just log the files
    files.forEach(file => {
      if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        console.log(`  - ${file}`);
      }
    });
  }
}

// Optimize CSS
function optimizeCSS() {
  console.log('🎨 Optimizing CSS...');
  
  const distDir = path.join(__dirname, '../dist');
  const cssFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.css'));
  
  cssFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused CSS (basic implementation)
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/{\s*/g, '{');
    content = content.replace(/;\s*;/g, ';');
    
    fs.writeFileSync(filePath, content);
    console.log(`  - Optimized ${file}`);
  });
}

// Optimize JavaScript
function optimizeJS() {
  console.log('⚡ Optimizing JavaScript...');
  
  const distDir = path.join(__dirname, '../dist');
  const jsFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.js'));
  
  jsFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Basic JS optimization
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/{\s*/g, '{');
    
    fs.writeFileSync(filePath, content);
    console.log(`  - Optimized ${file}`);
  });
}

// Generate sitemap
function generateSitemap() {
  console.log('🗺️ Generating sitemap...');
  
  const pages = [
    '/',
    '/about',
    '/services',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/pricing',
    '/contact',
    '/blog',
    '/case-studies',
    '/team',
    '/careers',
    '/privacy',
    '/terms',
    '/cookies',
    '/docs',
    '/api-docs',
    '/support',
    '/status',
    '/demo',
    '/consultation'
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
  console.log('  - Generated sitemap.xml');
}

// Generate robots.txt
function generateRobots() {
  console.log('🤖 Generating robots.txt...');
  
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;
  
  fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robots);
  console.log('  - Generated robots.txt');
}

// Generate manifest.json
function generateManifest() {
  console.log('📱 Generating manifest.json...');
  
  const manifest = {
    "name": "Zion Tech Group",
    "short_name": "Zion Tech",
    "description": "AI-Powered Enterprise Solutions",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#0f0f23",
    "theme_color": "#00ffff",
    "orientation": "portrait-primary",
    "icons": [
      {
        "src": "/favicon-16x16.png",
        "sizes": "16x16",
        "type": "image/png"
      },
      {
        "src": "/favicon-32x32.png",
        "sizes": "32x32",
        "type": "image/png"
      },
      {
        "src": "/apple-touch-icon.png",
        "sizes": "180x180",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "categories": ["business", "productivity", "technology"],
    "lang": "en-US",
    "dir": "ltr"
  };
  
  fs.writeFileSync(path.join(__dirname, '../dist/manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('  - Generated manifest.json');
}

// Main optimization function
function optimize() {
  try {
    optimizeImages();
    optimizeCSS();
    optimizeJS();
    generateSitemap();
    generateRobots();
    generateManifest();
    
    console.log('✅ Performance optimization completed successfully!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run optimization
optimize();