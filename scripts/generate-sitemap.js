import fs from 'fs';
import path from 'path';

const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/pricing',
    '/blog',
    '/case-studies',
    '/careers',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/tutorials',
    '/consultation',
    '/demo',
    '/support',
    '/privacy',
    '/terms',
    '/cookies',
    '/sitemap',
    '/ai-analytics',
    '/ai-automation',
    '/ai-chatbot-builder',
    '/ai-content-generation',
    '/ai-data-analytics',
    '/ai-computer-vision',
    '/ai-voice-solutions',
    '/ai-automation',
    '/ai-healthcare',
    '/ai-financial-services',
    '/ai-document-processing',
    '/ai-predictive-analytics',
    '/ai-hr-solutions',
    '/ai-edge-computing',
    '/cloud-infrastructure',
    '/devops-cicd',
    '/cybersecurity-solutions',
    '/web-development',
    '/mobile-development',
    '/api-development',
    '/it-support',
    '/data-analytics-bi',
    '/custom-software',
    '/database-management',
    '/network-infrastructure',
    '/it-asset-management',
    '/zion-analytics-pro',
    '/zion-chat-ai',
    '/zion-security-shield',
    '/zion-cloud-vault',
    '/zion-content-studio',
    '/zion-crm-intelligence',
    '/5g-implementation',
    '/ai-3d-generation',
    '/quantum-computing',
    '/blockchain-solutions',
    '/iot-integration',
    '/ar-vr-development',
    '/edge-ai-computing',
    '/robotic-process-automation',
    '/team',
    '/partners',
    '/status',
    '/faq',
    '/docs',
    '/api-docs',
    '/community',
    '/compliance'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'dist', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();
