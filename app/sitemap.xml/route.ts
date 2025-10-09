import { generateSitemap, defaultSitemapUrls } from '../utils/sitemapGenerator';

export async function GET() {
  const sitemap = generateSitemap({
    baseUrl: 'https://ziontechgroup.com',
    urls: defaultSitemapUrls
  });

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}