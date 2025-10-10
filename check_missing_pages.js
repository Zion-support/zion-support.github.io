import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all navigation links from the navigation component
const navigationLinks = [
  // Main navigation
  '/', '/about', '/team', '/careers', '/services', '/specialized-services', '/pricing', '/case-studies', '/blog', '/enterprise', '/contact',
  
  // Micro SAAS Services
  '/ai-project-manager', '/ai-task-manager', '/ai-workflow-automation', '/ai-scheduler', '/ai-time-tracker',
  '/ai-content-writer', '/ai-social-media-manager', '/ai-email-marketing', '/ai-seo-optimizer', '/ai-lead-generation', '/ai-website-builder',
  '/ai-crm', '/ai-financial-analyzer', '/ai-invoice-generator', '/ai-expense-tracker', '/ai-stock-portfolio-manager',
  '/ai-customer-support-bot', '/ai-chatbot-builder', '/ai-email-assistant',
  '/ai-code-generation', '/ai-mobile-app-development', '/ai-cybersecurity', '/ai-document-processing', '/ai-password-manager',
  '/ai-data-analytics', '/ai-data-visualization',
  '/ai-video-generation', '/ai-voice-cloning', '/ai-music-composition', '/ai-fashion-design', '/ai-3d-generation', '/ai-logo-designer',
  '/ai-healthcare', '/ai-fitness-coach',
  '/ai-sales-automation',
  
  // AI Services
  '/machine-learning', '/ai-business-intelligence', '/ai-supply-chain', '/ai-quality-assurance', '/ai-hr', '/ai-legal', '/ai-real-estate',
  '/ai-manufacturing', '/ai-transportation', '/ai-education', '/ai-energy', '/ai-insurance', '/nlp', '/computer-vision', '/ai-automation',
  '/ai-quantum-computing', '/ai-robotics', '/ai-blockchain-solutions', '/ai-autonomous-systems', '/ai-fintech',
  
  // IT Services
  '/cloud-migration', '/cybersecurity', '/devops', '/database-services', '/enterprise', '/cloud-services', '/enterprise-security',
  '/it-infrastructure', '/data-center', '/network-security', '/it-consulting', '/managed-it', '/cloud-security', '/it-asset-management',
  '/backup-recovery', '/it-training', '/it-performance', '/network-infrastructure', '/it-support', '/compliance', '/developer-tools',
  '/marketing-tools', '/productivity',
  
  // Specialized Services
  '/quantum-computing', '/autonomous-systems', '/blockchain', '/iot-edge', '/business-intelligence', '/robotics', '/analytics-tools',
  '/business-apps', '/smart-analytics', '/advanced-robotics-systems', '/digital-twin-development',
  
  // Footer links
  '/privacy', '/terms', '/sitemap'
];

// Get all existing pages
const appDir = path.join(__dirname, 'app');
const existingPages = [];

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const relativePath = path.relative(appDir, fullPath);
        existingPages.push('/' + relativePath);
      }
      scanDirectory(fullPath);
    }
  }
}

scanDirectory(appDir);

// Find missing pages
const missingPages = navigationLinks.filter(link => !existingPages.includes(link));

console.log('=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

console.log('\n=== EXISTING PAGES ===');
existingPages.sort().forEach(page => console.log(page));

console.log(`\nTotal navigation links: ${navigationLinks.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);