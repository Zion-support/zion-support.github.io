const fs = require('fs');
const path = require('path');

// Import the sitemap generator
const { generateZionTechSitemap } = require('../src/utils/sitemapGenerator.ts');

// Generate sitemap
const sitemap = generateZionTechSitemap();

// Write sitemap to public directory
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!');
console.log(`Sitemap saved to: ${path.join(publicDir, 'sitemap.xml')}`);
