import { generateRobotsTxt } from '../utils/sitemapGenerator';

export async function GET() {
  const robotsTxt = generateRobotsTxt('https://ziontechgroup.com');

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}