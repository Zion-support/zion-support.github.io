import fs from 'fs';
import path from 'path';

// Extract all paths from navigation
const navigationPaths = [
  // Main navigation
  '/', '/about', '/services', '/pricing', '/case-studies', '/blog', '/contact',
  
  // Micro SAAS Solutions
  '/ai-quantum-financial-oracle', '/ai-neural-memory-assistant', '/ai-holographic-workspace',
  '/ai-project-manager', '/ai-social-media-manager', '/ai-analytics-dashboard',
  '/ai-email-marketing', '/ai-smart-calendar', '/ai-content-writer', '/ai-video-generator',
  '/ai-crm-assistant', '/ai-customer-support-bot', '/ai-content-studio', '/ai-financial-advisor',
  '/ai-workflow-automation', '/ai-3d-generation', '/ai-mobile-app-builder', '/ai-logo-designer',
  '/ai-voice-cloning-studio', '/ai-code-security-auditor', '/ai-mental-health-companion',
  '/ai-smart-home-controller', '/ai-investment-optimizer',
  
  // AI Services
  '/ai-workflow-automation', '/ai-customer-support', '/ai-data-analytics', '/ai-content-generation',
  '/ai-healthcare', '/ai-fintech', '/ai-computer-vision', '/ai-ml-platform', '/ai-quantum-computing',
  '/ai-drug-discovery-pro', '/ai-climate-solutions-pro', '/ai-space-technology-pro',
  '/ai-neural-memory-assistant', '/ai-holographic-workspace', '/ai-fashion-design', '/ai-music-composition',
  
  // IT Services
  '/cloud-migration', '/cybersecurity', '/it-infrastructure', '/it-support', '/custom-development',
  '/devops-cicd', '/database-management', '/network-design', '/ai-infrastructure-monitoring',
  '/blockchain-integration-services', '/ai-api-management', '/smart-contract-security-audit',
  '/ai-ops', '/healthcare-it', '/financial-it', '/edge-computing', '/smart-cities',
  
  // Emerging Technologies
  '/ai-quantum-computing', '/autonomous-systems', '/blockchain-web3', '/iot-edge-computing',
  '/ar-vr-solutions', '/smart-cities', '/ai-autonomous-systems', '/ai-blockchain-solutions',
  '/ai-holographic-workspace', '/ai-energy', '/ai-music-composition', '/digital-transformation',
  '/innovation-labs'
];

// Check if page exists
function checkPageExists(routePath) {
  if (routePath === '/') {
    return fs.existsSync('/workspace/app/page.tsx');
  }
  
  const pagePath = `/workspace/app${routePath}/page.tsx`;
  return fs.existsSync(pagePath);
}

// Find missing pages
const missingPages = [];
const existingPages = [];

navigationPaths.forEach(path => {
  if (checkPageExists(path)) {
    existingPages.push(path);
  } else {
    missingPages.push(path);
  }
});

console.log('=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

console.log('\n=== EXISTING PAGES ===');
existingPages.forEach(page => console.log(page));

console.log(`\nTotal navigation links: ${navigationPaths.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);