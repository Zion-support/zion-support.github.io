import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pages referenced in App.tsx routes
const requiredPages = [
  'about', 'contact', 'services', 'pricing', 'blog', 'case-studies', 
  'careers', 'ai-services', 'it-services', 'micro-saas', 'tutorials',
  'consultation', 'demo', 'support', 'privacy', 'terms', 'cookies',
  'sitemap', 'ai-analytics', 'ai-automation', 'ai-chatbot-builder',
  'ai-cybersecurity', 'cloud-infrastructure', 'cybersecurity-solutions',
  'web-development', 'mobile-development', 'team'
];

// Check if pages exist
const missingPages = [];
const existingPages = [];

requiredPages.forEach(page =>
                {
  const pagePath = path.join(__dirname, 'app', page, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    existingPages.push(page);
  } else {
    missingPages.push(page);
  }
});

console.log('✅ Existing pages:', existingPages.length);
console.log('❌ Missing pages:', missingPages.length);

if (missingPages.length > 0) {
  console.log('\nMissing pages:');
  missingPages.forEach(page => console.log(`  - ${page}`));
}

// Check for pages that exist but aren't in routes
const appDir = path.join(__dirname, 'app');
const allPages = [];

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item =>
                {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      const pageFile = path.join(itemPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const relativePath = path.relative(appDir, itemPath);
        allPages.push(relativePath);
      }
      scanDirectory(itemPath);
    }
  });
}

scanDirectory(appDir);

const extraPages = allPages.filter(page => !requiredPages.includes(page));
console.log(`\n📁 Total pages found: ${allPages.length}`);
console.log(`📄 Extra pages (not in routes): ${extraPages.length}`);

if (extraPages.length > 0) {
  console.log('\nExtra pages:');
  extraPages.slice(0, 20).forEach(page => console.log(`  - ${page}`));
  if (extraPages.length > 20) {
    console.log(`  ... and ${extraPages.length - 20} more`);
  }
}