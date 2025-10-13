import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of all pages in the application

const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { url: '/demo', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },

// Define all the pages and their priorities
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  
  // AI Solutions
  { url: '/ai-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-analytics', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.6', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.6', changefreq: 'weekly' },
  
  // Micro SaaS Solutions
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.7', changefreq: 'weekly' },
  
  // 5G Solutions

];

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

// Generate robots.txt
const robotsTxt = `User-agent: *

