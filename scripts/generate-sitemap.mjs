<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
;
const baseUrl = 'https://ziontechgroup.com';
;
const pages = [;
  '',
  '/about',
  '/services',
  '/services/ai-development',
  '/services/cloud-architecture',
  '/services/cybersecurity',
  '/services/data-analytics',
  '/services/devops',
  '/services/mobile-development',
  '/blockchain-solutions',
  '/iot-platforms',
  '/solutions/digital-transformation',
  '/solutions/enterprise-solutions',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies'];
;
const generateSitemap = () => {;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>;
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">;
${pages.map(page => {;
  const url = `${baseUrl}${page}`;
  const priority = page === '' ? '1.0' : page.startsWith('/services') ? '0.9' : '0.8';
  const changefreq = page === '' ? 'daily' : 'weekly';
  ;
  return `  <url>;
    <loc>${url}</loc>;
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>;
    <changefreq>${changefreq}</changefreq>;
    <priority>${priority}</priority>;
  </url>`,
}).join('\n')}
</urlset>`;
;
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {;
    fs.mkdirSync(publicDir, { recursive: true }),
}
;
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  ,
};
;
generateSitemap();
=======
<<<<<<< HEAD
const fs from "fs";"const path from "path";"const baseUrl = "https:/ziontechgroup.com";const pages = [;" ""," "/about"," "/services"," "/services/ai-development"," "/services/cloud-architecture"," "/services/cybersecurity"," "/services/data-analytics"," "/services/devops"," "/services/mobile-development"," "/blockchain-solutions"," "/iot-platforms"," "/solutions/digital-transformation"," "/solutions/enterprise-solutions"," "/contact"," "/privacy"," "/terms"," "/cookies"];const generateSitemap = () => {; const sitemap = `<?xml version="1.0" encoding="UTF-8"?>;"<urlset xmlns="http:/www.sitemaps.org/schemas/sitemap/0.9">;${pages.map(page => {;` const url = `${baseUrl}${page}`;" const priority = page === "" ? "1.0" : page.startsWith("/services") ? "0.9" : "0.8";" const changefreq = page === "" ? "daily" : "weekly"; ;` return ` <url>; <loc>${url}</loc>;" <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>; <changefreq>${changefreq}</changefreq>; <priority>${priority}</priority>;` </url>`,"}).join("\n")}`</urlset>`;" const publicDir = path.join(process.cwd(), "public"); if (!fs.existsSync(publicDir)) {; fs.mkdirSync(publicDir, { recursive: true }),};" fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);" console.log(" Sitemap generated successfully at public/sitemap.xml"),};generateSitemap();'"`'"`
=======
import fs from 'fs'
import path from 'path'
const baseUrl = 'https://ziontechgroup.com'
  ''
  '/about'
  '/services'
  '/services/ai-development'
  '/services/cloud-architecture'
  '/services/cybersecurity'
  '/services/data-analytics'
  '/services/devops'
  '/services/mobile-development'
  '/blockchain-solutions'
  '/iot-platforms'
  '/solutions/digital-transformation'
  '/solutions/enterprise-solutions'
  '/contact'
  '/privacy'
  '/terms'
  '/cookies'
  const priority = page === '' ? '1.0' : page.startsWith('/services') ? '0.9' : '0.8'
  const changefreq = page === '' ? 'daily' : 'weekly'
    <lastmod>${new Date().toISOString().split('T'})
}).join('\n')
  const publicDir = path.join(process.cwd(), 'public'
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml')
  console.log(' Sitemap generated successfully at public/sitemap.xml')
>>>>>>> main
>>>>>>> main
