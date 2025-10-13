import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page routes from the app directory
function getAllRoutes() {
  const appDir = path.join(__dirname, '../app');
  const routes = ['/']; // Home page
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Skip components and other non-page directories
        if (!['components', 'styles', 'utils', 'hooks', 'types', 'data', 'content'].includes(item)) {
          const route = basePath + '/' + item;
          routes.push(route);
          scanDirectory(itemPath, route);
        }
      }
    });
  }
  
  scanDirectory(appDir);
  return routes;
}

// Generate sitemap.xml
function generateSitemap() {
  const routes = getAllRoutes();
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  routes.forEach(route => {
    const url = baseUrl + route;
    const priority = route === '/' ? '1.0' : 
                   route.includes('/ai-') ? '0.9' :
                   route.includes('/zion-') ? '0.9' :
                   route.includes('/5g-') ? '0.9' :
                   route.includes('/about') || route.includes('/contact') || route.includes('/services') ? '0.8' :
                   '0.7';
    
    const changefreq = route === '/' ? 'daily' :
                      route.includes('/blog') ? 'weekly' :
                      'monthly';
    
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;
  
  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log(`Generated sitemap.xml with ${routes.length} URLs`);
}

// Generate robots.txt
function generateRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /ai-services
Allow: /5g-solutions
Allow: /micro-saas
Allow: /blog
Allow: /pricing
Allow: /support
Allow: /privacy
Allow: /terms
Allow: /cookies
Allow: /sitemap

# Crawl delay
Crawl-delay: 1
`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('Generated robots.txt');
}

// Generate manifest.json for PWA
function generateManifest() {
  const manifest = {
    "name": "Zion Tech Group - Advanced AI and IT Solutions",
    "short_name": "Zion Tech Group",
    "description": "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#0f172a",
    "theme_color": "#8b5cf6",
    "orientation": "portrait-primary",
    "scope": "/",
    "lang": "en-US",
    "categories": ["business", "productivity", "technology"],
    "icons": [
      {
        "src": "/favicon.svg",
        "sizes": "any",
        "type": "image/svg+xml",
        "purpose": "any maskable"
      },
      {
        "src": "/logo192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/logo512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "screenshots": [
      {
        "src": "/screenshot-desktop.png",
        "sizes": "1280x720",
        "type": "image/png",
        "form_factor": "wide"
      },
      {
        "src": "/screenshot-mobile.png",
        "sizes": "390x844",
        "type": "image/png",
        "form_factor": "narrow"
      }
    ],
    "shortcuts": [
      {
        "name": "AI Services",
        "short_name": "AI Services",
        "description": "Explore our AI solutions",
        "url": "/ai-services",
        "icons": [{ "src": "/favicon.svg", "sizes": "any" }]
      },
      {
        "name": "Contact",
        "short_name": "Contact",
        "description": "Get in touch with us",
        "url": "/contact",
        "icons": [{ "src": "/favicon.svg", "sizes": "any" }]
      },
      {
        "name": "Services",
        "short_name": "Services",
        "description": "View our services",
        "url": "/services",
        "icons": [{ "src": "/favicon.svg", "sizes": "any" }]
      }
    ]
  };

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Generated manifest.json');
}

// Run all generators
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
  generateRobots();
  generateManifest();
}

export {
  generateSitemap,
  generateRobots,
  generateManifest
};