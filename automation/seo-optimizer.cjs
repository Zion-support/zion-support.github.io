#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 SEO Optimizer Starting...\n');

// SEO optimization tasks
const seoChecks = [
  {
    name: 'Meta Tags Check',
    action: () => {
      console.log('🏷️ Checking meta tags...');
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx'));
        let metaTagCount = 0;
        
        pages.forEach(page => {
          const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
          if (content.includes('<Head>') || content.includes('<title>') || content.includes('meta')) {
            metaTagCount++;
          }
        });
        
        console.log(`Found meta tags in ${metaTagCount}/${pages.length} pages`);
      }
    }
  },
  {
    name: 'Sitemap Check',
    action: () => {
      console.log('🗺️ Checking sitemap...');
      const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
      if (fs.existsSync(sitemapPath)) {
        console.log('✅ Sitemap found');
      } else {
        console.log('⚠️ Sitemap not found - consider creating one');
      }
    }
  },
  {
    name: 'Robots.txt Check',
    action: () => {
      console.log('🤖 Checking robots.txt...');
      const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
      if (fs.existsSync(robotsPath)) {
        console.log('✅ Robots.txt found');
      } else {
        console.log('⚠️ Robots.txt not found - consider creating one');
      }
    }
  },
  {
    name: 'Structured Data Check',
    action: () => {
      console.log('📊 Checking structured data...');
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx'));
        let structuredDataCount = 0;
        
        pages.forEach(page => {
          const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
          if (content.includes('application/ld+json') || content.includes('schema.org')) {
            structuredDataCount++;
          }
        });
        
        console.log(`Found structured data in ${structuredDataCount}/${pages.length} pages`);
      }
    }
  },
  {
    name: 'Alt Text Check',
    action: () => {
      console.log('🖼️ Checking image alt text...');
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx'));
        let imagesWithAlt = 0;
        let totalImages = 0;
        
        pages.forEach(page => {
          const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
          const imgTags = content.match(/<img[^>]*>/g) || [];
          totalImages += imgTags.length;
          
          imgTags.forEach(img => {
            if (img.includes('alt=')) {
              imagesWithAlt++;
            }
          });
        });
        
        console.log(`Images with alt text: ${imagesWithAlt}/${totalImages}`);
      }
    }
  },
  {
    name: 'Heading Structure Check',
    action: () => {
      console.log('📝 Checking heading structure...');
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx'));
        let h1Count = 0;
        let h2Count = 0;
        
        pages.forEach(page => {
          const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
          h1Count += (content.match(/<h1[^>]*>/g) || []).length;
          h2Count += (content.match(/<h2[^>]*>/g) || []).length;
        });
        
        console.log(`H1 tags: ${h1Count}, H2 tags: ${h2Count}`);
      }
    }
  }
];

// Run SEO checks
let successCount = 0;
let totalCount = seoChecks.length;

for (const check of seoChecks) {
  try {
    console.log(`\n🔄 ${check.name}...`);
    check.action();
    console.log(`✅ ${check.name} completed`);
    successCount++;
  } catch (error) {
    console.log(`❌ ${check.name} failed: ${error.message}`);
  }
}

console.log(`\n🎉 SEO Optimization Complete!`);
console.log(`✅ Successfully completed: ${successCount}/${totalCount} checks`);

// Generate SEO report
const report = {
  timestamp: new Date().toISOString(),
  checks: seoChecks.map(check => ({
    name: check.name,
    status: 'completed'
  })),
  summary: {
    total: totalCount,
    successful: successCount,
    failed: totalCount - successCount
  }
};

const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const reportFile = path.join(reportsDir, `seo-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
console.log(`📄 SEO report saved to: ${reportFile}`);