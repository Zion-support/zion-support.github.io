#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the base URL for your website
const BASE_URL = 'https://ziontechgroup.com';

// Define all the routes/pages on your website
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/contact',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/innovative-services-2025',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/advanced-services-2025',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/advanced-services-showcase-2025',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/comprehensive-pricing-2025',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/blog',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Generate the sitemap XML content
function generateSitemapXML() {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urls = routes.map(route => {
    return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');
  
  return `${xmlHeader}
${urlsetOpen}
${urls}
${urlsetClose}`;
}

function normalizeDataRoute(p) {
	// Ensure trailing slash
	if (!p.endsWith('/')) p += '/';
	// If data link points to a root page that actually exists under /services/*, prefer the services route
	// Known mappings for legacy links
	const map = new Map([
		['/ai-customer-success-platform/', '/services/ai-customer-success-platform/'],
		['/intelligent-supply-chain-optimization/', '/services/intelligent-supply-chain-optimization/'],
		['/ai-financial-planning-platform/', '/services/ai-financial-planning-platform/'],
		['/ai-sales-intelligence-platform/', '/services/ai-sales-intelligence-platform/'],
		['/ai-powered-decision-engine/', '/services/ai-powered-decision-engine/'],
		['/intelligent-content-automation-platform/', '/services/intelligent-content-automation-platform/'],
		['/smart-crm-intelligence-suite/', '/services/smart-crm-intelligence-suite/']
	]);
	return map.get(p) || p;
}

function listServiceLinksFromData() {
	const dataDir = path.join(process.cwd(), 'data');
	if (!fs.existsSync(dataDir)) return [];
	const links = new Set();

	const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.ts') || f.endsWith('.tsx'));
	for (const file of files) {
		const full = path.join(dataDir, file);
		try {
			const content = fs.readFileSync(full, 'utf8');
			// Find link: 'https://ziontechgroup.com/...' or "..."
			const re = /link\s*:\s*['\"](https?:\/\/[^'\"\s]+)['\"]/g;
			let match;
			while ((match = re.exec(content))) {
				try {
					const url = new URL(match[1]);
					if (url.hostname.endsWith('ziontechgroup.com')) {
						let p = url.pathname;
						p = normalizeDataRoute(p);
						links.add(p);
					}
				} catch {}
			}
		} catch {}
	}
	return Array.from(links);
}

// Generate the sitemap
function generateSitemap() {
  try {
    // Create the public directory if it doesn't exist
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Generate and write sitemap.xml
    const sitemapContent = generateSitemapXML();
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    
    // Generate and write robots.txt
    const robotsContent = generateRobotsTxt();
    const robotsPath = path.join(publicDir, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    console.log('✅ Robots.txt generated successfully at:', robotsPath);
    
    // Generate a JSON version for programmatic use
    const sitemapJson = {
      baseUrl: BASE_URL,
      generatedAt: new Date().toISOString(),
      routes: routes.map(route => ({
        ...route,
        fullUrl: `${BASE_URL}${route.path}`
      }))
    };
    
    const sitemapJsonPath = path.join(publicDir, 'sitemap.json');
    fs.writeFileSync(sitemapJsonPath, JSON.stringify(sitemapJson, null, 2), 'utf8');
    console.log('✅ Sitemap JSON generated successfully at:', sitemapJsonPath);
    
    // Generate a text sitemap for simple crawlers
    const textSitemap = routes.map(route => `${BASE_URL}${route.path}`).join('\n');
    const textSitemapPath = path.join(publicDir, 'sitemap.txt');
    fs.writeFileSync(textSitemapPath, textSitemap, 'utf8');
    console.log('✅ Text sitemap generated successfully at:', textSitemapPath);
    
    console.log('\n🎉 All sitemap files generated successfully!');
    console.log(`📊 Total routes: ${routes.length}`);
    console.log(`🌐 Base URL: ${BASE_URL}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Run the sitemap generation
generateSitemap();
