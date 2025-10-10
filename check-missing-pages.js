import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Service paths from navigation and footer
const servicePaths = [
  // Micro SAAS
  '/ai-project-manager',
  '/ai-social-media-manager', 
  '/ai-analytics-dashboard',
  '/ai-email-marketing',
  '/ai-customer-support-bot',
  '/ai-content-studio',
  '/ai-financial-advisor',
  '/ai-workflow-automation',
  '/ai-quantum-financial-oracle',
  '/ai-3d-generation',
  '/ai-mobile-app-builder',
  '/ai-logo-designer',
  '/ai-smart-calendar',
  '/ai-content-writer',
  '/ai-video-generator',
  '/ai-crm-assistant',
  
  // AI Services
  '/ai-customer-support',
  '/ai-data-analytics',
  '/ai-content-generation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-quantum-computing',
  '/ai-neural-memory-assistant',
  '/ai-holographic-workspace',
  '/ai-climate-solutions-pro',
  '/ai-drug-discovery-pro',
  '/ai-fashion-design',
  '/ai-computer-vision',
  '/ai-ml-platform',
  '/ai-space-technology-pro',
  
  // IT Services
  '/cloud-migration',
  '/cybersecurity',
  '/it-infrastructure',
  '/it-support',
  '/custom-development',
  '/ai-ops',
  '/healthcare-it',
  '/financial-it',
  '/edge-computing',
  '/5g-implementation',
  '/iot-platform',
  '/devops-cicd',
  '/database-management',
  '/network-design',
  '/ai-infrastructure-monitoring',
  '/blockchain-integration-services',
  '/ai-api-management',
  '/smart-contract-security-audit',
  
  // Emerging Technologies
  '/ai-autonomous-systems',
  '/ai-blockchain-solutions',
  '/ai-energy',
  '/ai-music-composition',
  '/autonomous-systems',
  '/blockchain-web3',
  '/iot-edge-computing',
  '/ar-vr-solutions',
  '/smart-cities',
  '/digital-transformation',
  '/innovation-labs',
  '/ai-financial-crime-detection-pro',
  '/ai-supply-chain-optimization-pro',
  '/ai-energy-grid-management-pro',
  '/ai-agricultural-intelligence-pro',
  
  // Other pages
  '/business-intelligence',
  '/robotics'
];

// Check which pages exist
const missingPages = [];
const existingPages = [];

servicePaths.forEach(servicePath => {
  const pagePath = path.join(__dirname, 'app', servicePath, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    existingPages.push(servicePath);
  } else {
    missingPages.push(servicePath);
  }
});

console.log('=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

console.log('\n=== EXISTING PAGES ===');
existingPages.forEach(page => console.log(page));

console.log(`\nTotal service paths: ${servicePaths.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);

// Write missing pages to file
fs.writeFileSync(path.join(__dirname, 'missing-pages.json'), JSON.stringify({
  missing: missingPages,
  existing: existingPages,
  total: servicePaths.length
}, null, 2));