import fs from 'fs';''
import path from 'path';''
import { fileURLToPath } from 'url';'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Service data structure;
const services = {
  microSaaS: ['
    'cloud-cost-guard', 'llm-evaluation-suite', 'customer-feedback-nps',''
    'api-rate-limiter', 'smart-document-processing', 'social-media-scheduler',''
    'email-deliverability-monitor', 'website-performance-optimizer'']
  ],
  aiServices: ['
    'ai-customer-support', 'predictive-analytics', 'ai-content-generation',''
    'ai-cybersecurity', 'ai-healthcare', 'ai-financial-analytics',''
    'ai-supply-chain', 'ai-hr-platform'']
  ],
  itServices: ['
    'cloud-migration', 'devops-automation', 'cybersecurity-audit',''
    'data-analytics', 'blockchain-solutions', 'iot-implementation',''
    'quantum-computing', 'edge-computing'']
  ]
};

// Static pages;
const staticPages = ['
  { url: '/', priority: '1.0', changefreq: 'weekly' },''
  { url: '/about', priority: '0.8', changefreq: 'monthly' },''
  { url: '/services', priority: '0.9', changefreq: 'weekly' },''
  { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },''
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },''
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },''
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },''
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },''
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },''
  { url: '/privacy', priority: '0.4', changefreq: 'yearly' },''
  { url: '/terms', priority: '0.4', changefreq: 'yearly' }']
];

function generateSitemap() {'
  const baseUrl = 'https://ziontechgroup.com';''
  const currentDate = new Date().toISOString().split('T')[0];''
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>""
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;"
</urlset>
  <url>
</url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  <url>
</url>
    <loc>${baseUrl}/${category}/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
</urlset>`;"