import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pages referenced in Footer component
const footerPages = [
  // AI Services
  '/ai-workflow-automation', '/ai-customer-support', '/ai-data-analytics', '/ai-content-generation',
  '/ai-healthcare', '/ai-fintech', '/ai-computer-vision', '/ai-ml-platform', '/ai-quantum-computing',
  '/ai-drug-discovery-pro', '/ai-climate-solutions-pro', '/ai-space-technology-pro', '/ai-autonomous-systems',
  '/ai-blockchain-solutions', '/ai-edge-computing', '/ai-cybersecurity',
  
  // IT Services
  '/cloud-migration', '/cybersecurity', '/it-infrastructure', '/it-support', '/custom-development',
  '/devops-cicd', '/database-management', '/network-design', '/ai-infrastructure-monitoring',
  '/blockchain-integration-services', '/ai-api-management', '/smart-contract-security-audit',
  '/healthcare-it', '/financial-it', '/edge-computing', '/5g-implementation',
  
  // Micro SAAS
  '/ai-project-manager', '/ai-social-media-manager', '/ai-analytics-dashboard', '/ai-email-marketing',
  '/ai-customer-support-bot', '/ai-content-studio', '/ai-financial-advisor', '/ai-workflow-automation',
  '/ai-smart-calendar', '/ai-content-writer', '/ai-video-generator', '/ai-crm-assistant',
  '/ai-quantum-financial-oracle', '/ai-neural-memory-assistant', '/ai-holographic-workspace', '/ai-3d-generation',
  
  // Emerging Technologies
  '/ai-quantum-computing', '/ai-autonomous-systems', '/ai-blockchain-solutions', '/ai-edge-computing',
  '/ar-vr-platform', '/smart-city-infrastructure', '/digital-transformation', '/innovation-labs',
  '/ai-business-intelligence', '/robotics-integration', '/digital-twin-platform', '/ai-space-technology-pro',
  
  // Company
  '/about', '/team', '/careers', '/case-studies', '/blog', '/pricing', '/news', '/partners', '/investors',
  
  // Support
  '/contact', '/support', '/docs', '/api-docs', '/status', '/health', '/help', '/community', '/training',
  
  // Legal
  '/privacy', '/terms', '/cookies', '/gdpr', '/security', '/compliance', '/data-protection', '/accessibility', '/sitemap'
];

// Get all existing pages
const appDir = '/workspace/app';
const existingPages = [];

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if this directory has a page.tsx file
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const relativePath = fullPath.replace(appDir, '');
        existingPages.push(relativePath);
      }
      // Recursively scan subdirectories
      scanDirectory(fullPath);
    }
  }
}

scanDirectory(appDir);

// Find missing pages
const missingPages = footerPages.filter(page => !existingPages.includes(page));

console.log('=== MISSING PAGES ===');
missingPages.forEach(page => {
  console.log(`❌ ${page}`);
});

console.log(`\nTotal missing pages: ${missingPages.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Total referenced pages: ${footerPages.length}`);

// Check for pages that exist but might have broken links
console.log('\n=== POTENTIAL BROKEN LINKS ===');
const existingPagePaths = existingPages.map(p => p.replace(/\\/g, '/'));
const brokenLinks = footerPages.filter(page => {
  // Check for exact match or similar patterns
  const exactMatch = existingPagePaths.includes(page);
  if (exactMatch) return false;
  
  // Check for similar patterns (e.g., /ai-ml-platform vs /ai-ml)
  const similarMatch = existingPagePaths.some(existing => {
    const pageBase = page.replace(/^\/+/, '').replace(/\/+$/, '');
    const existingBase = existing.replace(/^\/+/, '').replace(/\/+$/, '');
    return pageBase === existingBase || existingBase.includes(pageBase) || pageBase.includes(existingBase);
  });
  
  return !similarMatch;
});

brokenLinks.forEach(link => {
  console.log(`⚠️  ${link} - might be broken or needs redirect`);
});