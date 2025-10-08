import React from 'react';
/**
 * Sitemap Generation Utility
 * Generates XML sitemaps for better SEO and search engine crawling
 * @module sitemapGenerator
 */

export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface SitemapOptions {
  hostname: string;
  urls: SitemapURL[];
}

/**
 * Generate XML sitemap
 * @param options - Sitemap configuration
 * @returns Complete XML sitemap string
 */
export function generateSitemap(options: SitemapOptions): string {
  const { hostname, urls } = options;
  
  const urlEntries = urls.map((url) => {
    const loc = url.loc.startsWith('http') ? url.loc : `${hostname}${url.loc}`;
    return `  <url>
    <loc>${loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority.toFixed(1)}</priority>` : ''}
  </url>`;
  }).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Generate robots.txt content
 * @param hostname - Base hostname
 * @param sitemapPath - Path to sitemap
 * @returns robots.txt content
 */
export function generateRobotsTxt(hostname: string, sitemapPath = '/sitemap.xml'): string {
  return `User-agent: *
Disallow:

Sitemap: ${hostname}${sitemapPath}`;
}