import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the routes in your application
const routes = [
  '/',
  '/services',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/team',
  '/docs',
  '/consultation',
  '/contact',
  '/ai-voice-cloning-studio',
  '/ai-code-security-auditor',
  '/ai-mental-health-companion',
  '/ai-smart-home-controller',
  '/ai-investment-optimizer',
  '/cloud-infrastructure-management',
  '/cybersecurity-solutions',
  '/ai-3d-generation',
  '/ai-agricultural-intelligence-pro',
  '/ai-climate-solutions-pro',
  '/ai-crm-assistant',
  '/ai-api-management',
  '/ai-drug-discovery-pro',
  '/ai-energy-grid-management-pro',
  '/ai-financial-crime-detection-pro',
  '/ai-infrastructure-monitoring',
  '/ai-ops',
  '/ai-quantum-financial-oracle',
  '/ai-supply-chain-optimization-pro',
  '/ai-energy',
  '/ai-smart-calendar',
  '/ai-video-generator',
  '/ai-space-technology-pro',
  '/blockchain-integration-services',
  '/edge-computing',
  '/health',
  '/financial-it',
  '/healthcare-it',
  '/robotics',
  '/iot-platform',
  '/5g-implementation',
  '/ai-holographic-workspace'
];

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://ziontechgroup.com${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to dist directory
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');