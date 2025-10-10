import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Navigation links from the Navigation component
const navigationLinks = [
  // Main navigation
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  
  // Company links from Footer
  { name: 'Our Team', path: '/team' },
  { name: 'Careers', path: '/careers' },
  
  // Support links from Footer
  { name: 'Support Center', path: '/support' },
  { name: 'Documentation', path: '/docs' },
  { name: 'API Reference', path: '/api-docs' },
  { name: 'Status Page', path: '/status' },
  { name: 'System Health', path: '/health' },
  
  // Legal links from Footer
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
  { name: 'Cookie Policy', path: '/cookies' },
  { name: 'GDPR Compliance', path: '/gdpr' },
  { name: 'Security', path: '/security' },
  { name: 'Compliance', path: '/compliance' },
  
  // Micro SAAS Services
  { name: 'AI Project Manager Pro', path: '/ai-project-manager' },
  { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
  { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
  { name: 'AI Email Marketing Suite', path: '/ai-email-marketing' },
  { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
  { name: 'AI Content Studio', path: '/ai-content-studio' },
  { name: 'AI Financial Advisor', path: '/ai-financial-advisor' },
  { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
  { name: 'AI Smart Calendar', path: '/ai-smart-calendar' },
  { name: 'AI Content Writer', path: '/ai-content-writer' },
  { name: 'AI Video Generator', path: '/ai-video-generator' },
  { name: 'AI CRM Assistant', path: '/ai-crm-assistant' },
  
  // AI Services
  { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation' },
  { name: 'AI Customer Support Suite', path: '/ai-customer-support' },
  { name: 'AI Data Analytics Platform', path: '/ai-data-analytics' },
  { name: 'AI Content Generation Studio', path: '/ai-content-generation' },
  { name: 'AI Healthcare Solutions', path: '/ai-healthcare' },
  { name: 'AI Fintech Platform', path: '/ai-fintech' },
  { name: 'AI Computer Vision Platform', path: '/ai-computer-vision' },
  { name: 'AI Machine Learning Platform', path: '/ai-ml-platform' },
  { name: 'AI Quantum Computing', path: '/ai-quantum-computing' },
  { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' },
  { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro' },
  { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro' },
  
  // IT Services
  { name: 'Cloud Migration & Setup', path: '/cloud-migration' },
  { name: 'Enterprise Cybersecurity Suite', path: '/cybersecurity' },
  { name: 'IT Infrastructure Design', path: '/it-infrastructure' },
  { name: '24/7 IT Support & Monitoring', path: '/it-support' },
  { name: 'Custom Software Development', path: '/custom-development' },
  { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd' },
  { name: 'Database Management & Optimization', path: '/database-management' },
  { name: 'Network Design & Implementation', path: '/network-design' },
  { name: 'AI Infrastructure Monitoring', path: '/ai-infrastructure-monitoring' },
  { name: 'Blockchain Integration Services', path: '/blockchain-integration-services' },
  { name: 'AI API Management', path: '/ai-api-management' },
  { name: 'Smart Contract Security Audit', path: '/smart-contract-security-audit' },
  
  // Emerging Technologies
  { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing' },
  { name: 'Autonomous Systems', path: '/autonomous-systems' },
  { name: 'Blockchain & Web3', path: '/blockchain-web3' },
  { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
  { name: 'AR/VR Solutions', path: '/ar-vr-solutions' },
  { name: 'Smart Cities', path: '/smart-cities' },
  { name: 'Digital Transformation', path: '/digital-transformation' },
  { name: 'Innovation Labs', path: '/innovation-labs' },
  { name: 'AI Financial Crime Detection Pro', path: '/ai-financial-crime-detection-pro' },
  { name: 'AI Supply Chain Optimization Pro', path: '/ai-supply-chain-optimization-pro' },
  { name: 'AI Energy Grid Management Pro', path: '/ai-energy-grid-management-pro' },
  { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro' }
];

function checkPageExists(pagePath) {
  if (pagePath === '/') {
    return fs.existsSync(path.join(__dirname, 'app', 'page.tsx'));
  }
  
  const pageDir = path.join(__dirname, 'app', pagePath);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  return fs.existsSync(pageFile);
}

function findMissingPages() {
  const missingPages = [];
  
  for (const link of navigationLinks) {
    if (!checkPageExists(link.path)) {
      missingPages.push(link);
    }
  }
  
  return missingPages;
}

const missingPages = findMissingPages();

console.log('Missing Pages Analysis:');
console.log('======================');

if (missingPages.length === 0) {
  console.log('✅ All navigation pages exist!');
} else {
  console.log(`❌ Found ${missingPages.length} missing pages:`);
  console.log('');
  
  missingPages.forEach((page, index) => {
    console.log(`${index + 1}. ${page.name}`);
    console.log(`   Path: ${page.path}`);
    console.log(`   Expected file: app${page.path}/page.tsx`);
    console.log('');
  });
}

// Also check for pages that exist but might not be linked
function findUnlinkedPages() {
  const appDir = path.join(__dirname, 'app');
  const unlinkedPages = [];
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        const pageFile = path.join(itemPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          const fullPath = basePath + '/' + item;
          const isLinked = navigationLinks.some(link => link.path === fullPath);
          if (!isLinked && fullPath !== '/page') {
            unlinkedPages.push(fullPath);
          }
        }
        scanDirectory(itemPath, basePath + '/' + item);
      }
    }
  }
  
  scanDirectory(appDir);
  return unlinkedPages;
}

const unlinkedPages = findUnlinkedPages();

if (unlinkedPages.length > 0) {
  console.log('📄 Unlinked pages (exist but not in navigation):');
  console.log('================================================');
  unlinkedPages.forEach((page, index) => {
    console.log(`${index + 1}. ${page}`);
  });
}