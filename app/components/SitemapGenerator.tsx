'use client';
import React, { useEffect } from 'react';

const SitemapGenerator: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Generate sitemap dynamically
      const generateSitemap = () => {
        const baseUrl = 'https://ziontechgroup.com';
        const pages = [
          { url: '/', priority: '1.0', changefreq: 'daily' },
          { url: '/services', priority: '0.9', changefreq: 'weekly' },
          { url: '/contact', priority: '0.8', changefreq: 'monthly' },
          { url: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
          { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
          { url: '/ai-project-manager', priority: '0.7', changefreq: 'monthly' },
          { url: '/ai-social-media-manager', priority: '0.7', changefreq: 'monthly' },
          { url: '/ai-analytics', priority: '0.7', changefreq: 'monthly' },
          { url: '/ai-email-marketing', priority: '0.7', changefreq: 'monthly' },
          { url: '/ai-customer-support-bot', priority: '0.7', changefreq: 'monthly' },
          { url: '/ai-code-generation', priority: '0.7', changefreq: 'monthly' },
          { url: '/ai-video-generation', priority: '0.7', changefreq: 'monthly' },
          { url: '/ai-voice-cloning', priority: '0.7', changefreq: 'monthly' },
          { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
          { url: '/ai-ml', priority: '0.8', changefreq: 'monthly' },
          { url: '/ai-nlp', priority: '0.8', changefreq: 'monthly' },
          { url: '/ai-vision', priority: '0.8', changefreq: 'monthly' },
          { url: '/ai-automation', priority: '0.8', changefreq: 'monthly' },
          { url: '/ai-data-visualization', priority: '0.8', changefreq: 'monthly' },
          { url: '/ai-fashion-design', priority: '0.8', changefreq: 'monthly' },
          { url: '/ai-music-composition', priority: '0.8', changefreq: 'monthly' },
          { url: '/ai-fitness-coach', priority: '0.8', changefreq: 'monthly' },
          { url: '/cloud-migration', priority: '0.8', changefreq: 'monthly' },
          { url: '/it-consulting', priority: '0.8', changefreq: 'monthly' },
          { url: '/cybersecurity', priority: '0.8', changefreq: 'monthly' },
          { url: '/devops', priority: '0.8', changefreq: 'monthly' },
          { url: '/database', priority: '0.8', changefreq: 'monthly' },
        ];

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

        // Create a blob and download it
        const blob = new Blob([sitemap], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'sitemap.xml';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      };

      // Generate sitemap on page load (only in development)
      if (process.env.NODE_ENV === 'development') {
        generateSitemap();
      }
    }
  }, []);

  return null;
};

export default SitemapGenerator;