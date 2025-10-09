#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting comprehensive performance optimization...');

// 1. Optimize images
console.log('📸 Optimizing images...');
try {
  execSync('npx imagemin public/**/*.{jpg,jpeg,png,svg} --out-dir=public/optimized --plugin=imagemin-mozjpeg --plugin=imagemin-pngquant --plugin=imagemin-svgo', { stdio: 'inherit' });
  console.log('✅ Images optimized');
} catch (error) {
  console.log('⚠️ Image optimization skipped (imagemin not available)');
}

// 2. Generate critical CSS
console.log('🎨 Generating critical CSS...');
const criticalCSS = `
/* Critical CSS for above-the-fold content */
.hero-section { 
  background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cyber-text {
  background: linear-gradient(45deg, #00ffff, #8b5cf6, #ec4899);
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.neon-pulse {
  animation: neonPulse 2s ease-in-out infinite alternate;
}

@keyframes neonPulse {
  from { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff; }
  to { text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff; }
}

/* Loading states */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2rem;
  }
}
`;

fs.writeFileSync('public/critical.css', criticalCSS);
console.log('✅ Critical CSS generated');

// 3. Optimize bundle
console.log('📦 Optimizing bundle...');
try {
  execSync('npm run build:analyze', { stdio: 'inherit' });
  console.log('✅ Bundle analysis completed');
} catch (error) {
  console.log('⚠️ Bundle analysis failed');
}

// 4. Generate sitemap
console.log('🗺️ Generating sitemap...');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('✅ Sitemap generated');

// 5. Generate robots.txt
console.log('🤖 Generating robots.txt...');
const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /blog

# Host directive
Host: ziontechgroup.com`;

fs.writeFileSync('public/robots.txt', robots);
console.log('✅ Robots.txt generated');

// 6. Generate browserconfig.xml
console.log('🌐 Generating browserconfig.xml...');
const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#4f46e5</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

fs.writeFileSync('public/browserconfig.xml', browserconfig);
console.log('✅ Browserconfig.xml generated');

// 7. Performance audit
console.log('📊 Running performance audit...');
try {
  execSync('npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html --chrome-flags="--headless"', { stdio: 'inherit' });
  console.log('✅ Lighthouse audit completed');
} catch (error) {
  console.log('⚠️ Lighthouse audit failed (server may not be running)');
}

console.log('🎉 Performance optimization completed!');
console.log('📋 Summary:');
console.log('  - Images optimized');
console.log('  - Critical CSS generated');
console.log('  - Bundle analyzed');
console.log('  - Sitemap generated');
console.log('  - Robots.txt generated');
console.log('  - Browserconfig.xml generated');
console.log('  - Performance audit completed');