#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Starting comprehensive website analysis...\n');

// Define all expected pages based on navigation and routing
const expectedPages = [
  // Main pages
  '/',
  '/about',
  '/contact',
  '/services',
  '/blog',
  '/case-studies',
  '/pricing',
  '/resources',
  '/solutions',
  '/industries',
  
  // AI Services
  '/ai-services',
  '/ai-marketing',
  '/ai-automation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-content-generation',
  '/ai-data-analytics',
  '/ai-cybersecurity',
  '/ai-workflow-automation',
  '/ai-mobile-app-development',
  '/ai-ecommerce-solutions',
  '/ai-customer-support',
  '/ai-sales-automation',
  '/ai-data-visualization',
  
  // IT Services
  '/it-services',
  '/it-infrastructure',
  '/cybersecurity',
  '/cloud-services',
  '/devops',
  '/database',
  '/networking',
  '/system-admin',
  '/it-consulting',
  '/managed-it',
  '/it-training',
  '/it-project-management',
  
  // Micro SAAS
  '/micro-saas',
  '/developer-tools',
  '/business-apps',
  '/marketing-tools',
  '/analytics-tools',
  '/communication-tools',
  '/productivity-tools',
  '/hr-recruitment-tools',
  '/customer-support-tools',
  '/sales-crm-tools',
  '/project-management-tools',
  '/content-creation-tools',
  
  // Specialized Services
  '/quantum-computing',
  '/autonomous-systems',
  '/blockchain-web3',
  '/iot-edge-computing',
  '/business-intelligence',
  '/robotics',
  '/ar-vr-solutions',
  '/smart-cities',
  '/digital-transformation',
  '/innovation-labs',
  '/sustainability-tech',
  '/future-technologies',
  
  // Additional pages
  '/team',
  '/careers',
  '/news',
  '/api-docs',
  '/status',
  '/support',
  '/privacy',
  '/terms',
  '/gdpr',
  '/cookies',
  '/compliance',
  '/sitemap',
  '/offline'
];

// Check if pages exist
function checkPageExists(pagePath) {
  const fullPath = path.join(__dirname, 'app', pagePath === '/' ? 'page.tsx' : `${pagePath}/page.tsx`);
  return fs.existsSync(fullPath);
}

// Analyze navigation links
function analyzeNavigation() {
  console.log('📋 Analyzing navigation structure...');
  
  const navigationFile = path.join(__dirname, 'app/components/Navigation.tsx');
  if (!fs.existsSync(navigationFile)) {
    console.log('❌ Navigation component not found');
    return [];
  }
  
  const navContent = fs.readFileSync(navigationFile, 'utf8');
  const linkMatches = navContent.match(/href="([^"]+)"/g) || [];
  const links = linkMatches.map(match => match.replace('href="', '').replace('"', ''));
  
  console.log(`✅ Found ${links.length} navigation links`);
  return [...new Set(links)]; // Remove duplicates
}

// Check for missing pages
function findMissingPages() {
  console.log('\n🔍 Checking for missing pages...');
  
  const missingPages = [];
  const existingPages = [];
  
  expectedPages.forEach(page => {
    if (checkPageExists(page)) {
      existingPages.push(page);
    } else {
      missingPages.push(page);
    }
  });
  
  console.log(`✅ Found ${existingPages.length} existing pages`);
  console.log(`❌ Found ${missingPages.length} missing pages`);
  
  if (missingPages.length > 0) {
    console.log('\n📝 Missing pages:');
    missingPages.forEach(page => {
      console.log(`  - ${page}`);
    });
  }
  
  return { missingPages, existingPages };
}

// Check for broken internal links
function findBrokenInternalLinks() {
  console.log('\n🔗 Checking for broken internal links...');
  
  const brokenLinks = [];
  const allFiles = getAllTsxFiles();
  
  allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const linkMatches = content.match(/href="([^"]+)"/g) || [];
    
    linkMatches.forEach(match => {
      const link = match.replace('href="', '').replace('"', '');
      
      // Skip external links
      if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:')) {
        return;
      }
      
      // Skip anchor links
      if (link.startsWith('#')) {
        return;
      }
      
      // Check if internal page exists
      if (!checkPageExists(link)) {
        brokenLinks.push({
          file: path.relative(__dirname, file),
          link: link
        });
      }
    });
  });
  
  console.log(`❌ Found ${brokenLinks.length} broken internal links`);
  
  if (brokenLinks.length > 0) {
    console.log('\n📝 Broken links:');
    brokenLinks.forEach(({ file, link }) => {
      console.log(`  - ${file}: ${link}`);
    });
  }
  
  return brokenLinks;
}

// Get all TSX files
function getAllTsxFiles() {
  const files = [];
  
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    });
  }
  
  walkDir(path.join(__dirname, 'app'));
  return files;
}

// Check for missing components
function findMissingComponents() {
  console.log('\n🧩 Checking for missing components...');
  
  const missingComponents = [];
  const allFiles = getAllTsxFiles();
  
  allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const importMatches = content.match(/import.*from\s+['"]([^'"]+)['"]/g) || [];
    
    importMatches.forEach(match => {
      const importPath = match.match(/from\s+['"]([^'"]+)['"]/)[1];
      
      // Skip external imports
      if (importPath.startsWith('react') || importPath.startsWith('next') || 
          importPath.startsWith('lucide') || importPath.startsWith('framer') ||
          importPath.startsWith('@')) {
        return;
      }
      
      // Check if component file exists
      const componentPath = path.join(__dirname, 'app', importPath + '.tsx');
      if (!fs.existsSync(componentPath)) {
        missingComponents.push({
          file: path.relative(__dirname, file),
          component: importPath
        });
      }
    });
  });
  
  console.log(`❌ Found ${missingComponents.length} missing components`);
  
  if (missingComponents.length > 0) {
    console.log('\n📝 Missing components:');
    missingComponents.forEach(({ file, component }) => {
      console.log(`  - ${file}: ${component}`);
    });
  }
  
  return missingComponents;
}

// Generate comprehensive report
function generateReport() {
  console.log('\n📊 Generating comprehensive analysis report...\n');
  
  const navLinks = analyzeNavigation();
  const { missingPages, existingPages } = findMissingPages();
  const brokenLinks = findBrokenInternalLinks();
  const missingComponents = findMissingComponents();
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalExpectedPages: expectedPages.length,
      existingPages: existingPages.length,
      missingPages: missingPages.length,
      brokenInternalLinks: brokenLinks.length,
      missingComponents: missingComponents.length
    },
    navigation: {
      totalLinks: navLinks.length,
      links: navLinks
    },
    pages: {
      existing: existingPages,
      missing: missingPages
    },
    brokenLinks: brokenLinks,
    missingComponents: missingComponents,
    recommendations: []
  };
  
  // Add recommendations
  if (missingPages.length > 0) {
    report.recommendations.push('Create missing pages to complete the website structure');
  }
  
  if (brokenLinks.length > 0) {
    report.recommendations.push('Fix broken internal links to improve user experience');
  }
  
  if (missingComponents.length > 0) {
    report.recommendations.push('Create missing components to resolve import errors');
  }
  
  // Save report
  fs.writeFileSync(
    path.join(__dirname, 'website-analysis-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('✅ Analysis complete! Report saved to website-analysis-report.json');
  
  return report;
}

// Main execution
try {
  const report = generateReport();
  
  console.log('\n🎯 SUMMARY:');
  console.log(`📄 Pages: ${report.summary.existingPages}/${report.summary.totalExpectedPages} exist`);
  console.log(`🔗 Broken links: ${report.summary.brokenInternalLinks}`);
  console.log(`🧩 Missing components: ${report.summary.missingComponents}`);
  
  if (report.recommendations.length > 0) {
    console.log('\n💡 RECOMMENDATIONS:');
    report.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });
  }
  
} catch (error) {
  console.error('❌ Analysis failed:', error.message);
  process.exit(1);
}