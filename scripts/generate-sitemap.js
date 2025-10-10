import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the pages and their priorities
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-services', priority: '0.8', changefreq: 'weekly' },
  
  // Micro SAAS Services
  { url: '/ai-project-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-analytics-dashboard', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-customer-support-bot', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-email-marketing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-social-media-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-financial-advisor', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-smart-calendar', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-video-generator', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-crm-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-logo-designer', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-invoice-generator', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-expense-tracker', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-lead-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-hr-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-legal-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-inventory-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-fitness-coach', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-ecommerce-optimizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-fraud-detection', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-music-composition', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-image-recognition', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-document-processor', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-load-testing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-manufacturing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-insurance', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-education', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-code-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-design-studio', priority: '0.7', changefreq: 'monthly' },
  
  // AI Services
  { url: '/ai-drug-discovery-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-climate-solutions-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-space-technology-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-financial-crime-detection-pro', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-quantum-computing', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-healthcare', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-computer-vision', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-supply-chain-optimization-pro', priority: '0.6', changefreq: 'monthly' },
  
  // IT Services
  { url: '/cloud-migration', priority: '0.7', changefreq: 'monthly' },
  { url: '/cybersecurity', priority: '0.7', changefreq: 'monthly' },
  { url: '/it-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/it-support', priority: '0.7', changefreq: 'monthly' },
  { url: '/custom-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/devops-cicd', priority: '0.7', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/network-design', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-infrastructure-monitoring', priority: '0.7', changefreq: 'monthly' },
  { url: '/blockchain-integration-services', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-api-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/smart-contract-security-audit', priority: '0.7', changefreq: 'monthly' }
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const sitemap = generateSitemap();

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated successfully at:', sitemapPath);