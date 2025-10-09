import SitemapGenerator from '../app/utils/sitemapGenerator.ts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  console.log('Generating sitemap...');
  
  const generator = new SitemapGenerator('https://ziontechgroup.com');
  
  // Generate all pages
  generator.generateAllPages();
  
  // Create public directory if it doesn't exist
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Save sitemap
  await generator.saveSitemap(path.join(publicDir, 'sitemap.xml'));
  console.log('Sitemap saved to public/sitemap.xml');
  
  // Save robots.txt
  await generator.saveRobotsTxt(path.join(publicDir, 'robots.txt'));
  console.log('Robots.txt saved to public/robots.txt');
  
  console.log('Sitemap generation completed!');
}

generateSitemap().catch(console.error);