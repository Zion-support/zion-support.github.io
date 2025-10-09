import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pages referenced in navigation
const navigationPages = [
  '/', '/about', '/case-studies', '/blog', '/contact', '/team',
  '/ai-services', '/ai-marketing', '/ai-automation', '/ai-healthcare', 
  '/ai-fintech', '/ai-content-generation', '/ai-data-analytics', 
  '/ai-cybersecurity', '/ai-workflow-automation', '/ai-mobile-app-development',
  '/ai-ecommerce-solutions', '/ai-customer-support', '/ai-sales-automation',
  '/ai-data-visualization', '/ai-lead-generation', '/ai-document-processing',
  '/ai-predictive-analytics', '/ai-image-recognition', '/ai-voice-processing',
  '/ai-recommendation-engine', '/ai-sentiment-analysis', '/ai-research-assistant',
  '/it-services', '/it-infrastructure', '/cybersecurity', '/cloud-services',
  '/devops', '/database', '/networking', '/system-admin', '/it-consulting',
  '/managed-it', '/it-training', '/it-project-management', '/performance-optimization',
  '/backup-recovery', '/enterprise-solutions', '/it-infrastructure-design',
  '/micro-saas', '/developer-tools', '/business-apps', '/marketing-tools',
  '/analytics-tools', '/communication-tools', '/productivity', '/hr-recruitment-tools',
  '/customer-support-tools', '/sales-crm-tools', '/project-management-tools',
  '/content-creation-tools', '/quantum-computing', '/autonomous-systems',
  '/blockchain-web3', '/iot-edge-computing', '/business-intelligence',
  '/robotics', '/ar-vr-solutions', '/smart-cities', '/digital-transformation',
  '/innovation-labs', '/sustainability-tech', '/future-technologies'
];

// Get existing pages
const appDir = path.join(__dirname, 'app');
const existingPages = [];

function scanDirectory(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Check if directory has a page.tsx file
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        existingPages.push('/' + relativePath);
      }
      // Recursively scan subdirectories
      scanDirectory(fullPath, relativePath);
    }
  }
}

scanDirectory(appDir);

// Find missing pages
const missingPages = navigationPages.filter(page => !existingPages.includes(page));

console.log('=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

console.log('\n=== EXISTING PAGES ===');
existingPages.forEach(page => console.log(page));

console.log(`\nTotal navigation pages: ${navigationPages.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);