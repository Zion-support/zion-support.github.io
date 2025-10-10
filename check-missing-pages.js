import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

<<<<<<< HEAD
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
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
=======
class PageChecker {
  constructor() {
    this.appDir = '/workspace/app';
    this.srcDir = '/workspace/src';
    this.missingPages = [];
    this.existingPages = [];
    this.brokenRoutes = [];
  }

  checkAllPages() {
    console.log('🔍 Checking all pages and routes...');
    
    // Get all routes from App.tsx
    const routes = this.extractRoutesFromApp();
    console.log(`📋 Found ${routes.length} routes in App.tsx`);
    
    // Check each route
    routes.forEach(route => {
      this.checkRoute(route);
    });
    
    // Check navigation links
    this.checkNavigationLinks();
    
    // Check footer links
    this.checkFooterLinks();
    
    // Generate report
    this.generateReport();
  }

  extractRoutesFromApp() {
    const appPath = '/workspace/App.tsx';
    const content = fs.readFileSync(appPath, 'utf8');
    
    const routes = [];
    const routeMatches = content.match(/<Route\s+path="([^"]+)"\s+element={<([^>]+)\s*\/>}/g);
    
    if (routeMatches) {
      routeMatches.forEach(match => {
        const pathMatch = match.match(/path="([^"]+)"/);
        const elementMatch = match.match(/element={<([^>]+)\s*\/>}/);
        
        if (pathMatch && elementMatch) {
          routes.push({
            path: pathMatch[1],
            component: elementMatch[1],
            filePath: this.getPageFilePath(pathMatch[1])
          });
        }
      });
    }
    
    return routes;
  }

  getPageFilePath(routePath) {
    if (routePath === '/') {
      return null; // Home page is handled by main App component
    }
    
    const cleanPath = routePath.replace(/^\//, '');
    return path.join(this.appDir, cleanPath, 'page.tsx');
  }

  checkRoute(route) {
    const { path: routePath, component, filePath } = route;
    
    if (routePath === '/') {
      this.existingPages.push({
        path: routePath,
        component,
        status: 'exists',
        type: 'home'
      });
      return;
    }
    
    if (filePath && fs.existsSync(filePath)) {
      this.existingPages.push({
        path: routePath,
        component,
        filePath,
        status: 'exists',
        type: 'page'
      });
    } else {
      this.missingPages.push({
        path: routePath,
        component,
        filePath,
        status: 'missing',
        type: 'page'
      });
    }
  }

  checkNavigationLinks() {
    const navPath = '/workspace/app/components/Navigation.tsx';
    const content = fs.readFileSync(navPath, 'utf8');
    
    // Extract all href attributes from navigation
    const hrefMatches = content.match(/href="([^"]+)"/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.match(/href="([^"]+)"/)[1];
        if (href && !href.startsWith('#') && !href.startsWith('http')) {
          this.checkNavigationLink(href);
        }
      });
    }
  }

  checkFooterLinks() {
    const footerPath = '/workspace/app/components/Footer.tsx';
    const content = fs.readFileSync(footerPath, 'utf8');
    
    // Extract all href attributes from footer
    const hrefMatches = content.match(/href="([^"]+)"/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.match(/href="([^"]+)"/)[1];
        if (href && !href.startsWith('#') && !href.startsWith('http')) {
          this.checkFooterLink(href);
        }
      });
    }
  }

  checkNavigationLink(href) {
    const filePath = this.getPageFilePath(href);
    
    if (filePath && fs.existsSync(filePath)) {
      this.existingPages.push({
        path: href,
        status: 'exists',
        type: 'navigation',
        filePath
      });
    } else if (href !== '/') {
      this.missingPages.push({
        path: href,
        status: 'missing',
        type: 'navigation',
        filePath
      });
    }
  }

  checkFooterLink(href) {
    const filePath = this.getPageFilePath(href);
    
    if (filePath && fs.existsSync(filePath)) {
      this.existingPages.push({
        path: href,
        status: 'exists',
        type: 'footer',
        filePath
      });
    } else if (href !== '/') {
      this.missingPages.push({
        path: href,
        status: 'missing',
        type: 'footer',
        filePath
      });
    }
  }

  generateReport() {
    console.log('\n📊 PAGE CHECK RESULTS');
    console.log('='.repeat(50));
    
    console.log(`✅ Existing pages: ${this.existingPages.length}`);
    console.log(`❌ Missing pages: ${this.missingPages.length}`);
    
    if (this.missingPages.length > 0) {
      console.log('\n❌ MISSING PAGES:');
      this.missingPages.forEach(page => {
        console.log(`  - ${page.path} (${page.type})`);
        console.log(`    Expected file: ${page.filePath}`);
      });
    }
    
    // Group missing pages by type
    const missingByType = this.missingPages.reduce((acc, page) => {
      if (!acc[page.type]) acc[page.type] = [];
      acc[page.type].push(page);
      return acc;
    }, {});
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalExisting: this.existingPages.length,
        totalMissing: this.missingPages.length,
        missingByType
      },
      existingPages: this.existingPages,
      missingPages: this.missingPages,
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync('missing-pages-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to missing-pages-report.json');
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.missingPages.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Create missing pages identified in the audit',
        count: this.missingPages.length,
        pages: this.missingPages.map(p => p.path)
      });
    }
    
    return recommendations;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
  }
  
  const pageDir = path.join(__dirname, 'app', pagePath);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  return fs.existsSync(pageFile);
}

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
=======
// Run the page checker
const checker = new PageChecker();
checker.checkAllPages();
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
