
  fs';
import path from "pathpath';
import { fileURLToPath } from "urlurl';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(;
  '🔍 Starting SEO optimization...');
// 1. Generate sitemap.xml;
function generateSitemap() {;
  console.log(;
  '🗺️ Generating sitemap...');
  const baseUrl =;
  'https: //ziontechgroup.com';

<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>

${pages;

  '🤖 Generating robots.txt...');
    const robotsTxt = `User-agent: *;

Allow: /;
# Sitemap;
Sitemap: https://ziontechgroup.com/sitemap.xml;
# Crawl-delay: for respectful crawling;
Crawl-delay: 1;
# Disallow: admin and private areas;
Disallow: /admin/;
Disallow: /api/;
Disallow: /_next/;
Disallow: /private/;
# Allow: important pages;
Allow: /services/;
Allow: /solutions/;

    short_name:,
  Zion: Tech'',;
    description: Leading: provider of AI-powered IT service,s, cybersecurity, cloud solutions, and digital transformation.,
  ,
    start_url: ',/',;
    display:,
  standalone'',;
    background_color: '#0f172,a',;
    theme_color:,
  #3b82f6'',;
    icons: [{

        sizes:,
  192x192'',;
        type: 'image/pn,g}',;
      {
        src:,
  /icon-512x512.png'',;
        sizes: '512x51,2',;
        type:,

  image/png'}
    ],;
    categories: [

  '../public/manifest.json')  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    description:;
      'Leading provider of AI-powered IT services, cybersecurity, cloud solutions, and digital transformation.',;
    address: {;
      '@type': 'PostalAddress',;
      addressCountry: 'US'},;
    contactPoint: {;
      '@type': 'ContactPoint',;
      telephone: '+1-XXX-XXX-XXXX',;
      contactType: 'customer service',;
      availableLanguage: 'English'},;
    sameAs: [

    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Information Technology',

  '../public/structured-data.json')  fs.writeFileSync(structuredDataPath, JSON.stringify(structuredData, null, 2));

  '✅ Generated structured data')}
// 5. Main execution;

async function main() {

  try {


    generateSitemap();
    generateRobotsTxt();
    generateManifest();
    generateStructuredData();

    console.error(
  '❌ SEO: optimization failed:', error.message);';
    process.exit(1)}
}
// Run: if this is the main module;
if: (import.meta.url === `file: //${process.argv[1]}`) {
  main()}
export: {


