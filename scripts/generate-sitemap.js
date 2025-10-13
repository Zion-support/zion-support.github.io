<<<<<<< HEAD
<<<<<<< HEAD
=======
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
<<<<<<< HEAD
=======
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
// Get all page routes
function getAllRoutes() {
  const routes = [];
  const appDir = path.join(__dirname, '../app');
=======
// Get all page routes from the app directory
function getAllRoutes() {
  const appDir = path.join(__dirname, '../app');
  const routes = ['/']; // Home page
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
<<<<<<< HEAD
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other non-page directories
        if (!['node_modules', '.git', 'components', 'utils', 'types'].includes(item)) {
          scanDirectory(fullPath, basePath + '/' + item);
        }
      } else if (item === 'page.tsx' || item === 'page.ts') {
        // This is a page
        const route = basePath || '/';
        routes.push(route);
      }
    }
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
  }
  
  scanDirectory(appDir);
  return routes;
}

<<<<<<< HEAD
// Generate sitemap XML
function generateSitemap() {
  const routes = getAllRoutes();
  const baseUrl = 'https://ziontechgroup.com';
<<<<<<< HEAD
=======
// Generate sitemap.xml
function generateSitemap() {
  const routes = getAllRoutes();
  const baseUrl = 'https://ziontechgroup.com';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

<<<<<<< HEAD
  // Add main pages with higher priority
  const mainPages = ['/', '/about', '/contact', '/services', '/ai-services', '/it-services'];
  
  for (const route of routes) {
    const url = baseUrl + route;
    const priority = mainPages.includes(route) ? '1.0' : '0.8';
    const changefreq = mainPages.includes(route) ? 'weekly' : 'monthly';
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
    
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
<<<<<<< HEAD
  }
  
  sitemap += `</urlset>`;
  
  // Write to public directory
=======
  });

  sitemap += `</urlset>`;
  
  // Write sitemap to public directory
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
<<<<<<< HEAD
  console.log(`Generated sitemap with ${routes.length} routes`);
=======
  console.log(`Generated sitemap.xml with ${routes.length} URLs`);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
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
<<<<<<< HEAD
`;
  
=======
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

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('Generated robots.txt');
}

<<<<<<< HEAD
// Run the generators
generateSitemap();
generateRobots();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
=======
// Generate sitemap for the website;
const generateSitemap = () => {
};
return (
;
const baseUrl = 'https://ziontechgroup.com';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const pages = [
];
    '',
    '/about',
    '/services',
    '/pricing',
    '/blog',
    '/case-studies',
    '/careers',
    '/partners',
    '/support',
    '/faq',
    '/demo',
    '/consultation',
    '/contact',
    '/micro-saas'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')};
</urlset>`;

  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully');
};
generateSitemap();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
