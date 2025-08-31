#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Deep Link Analysis Script for Zion Tech Group Website
// This script analyzes all routes, components, and navigation to identify issues

console.log('🔍 Starting Deep Link Analysis for Zion Tech Group Website...\n');

// Define the base URL
const BASE_URL = 'https://ziontechgroup.com';

// Get all routes from App.tsx
const appRoutes = [
  // Core pages
  '/',
  '/about',
  '/contact',
  '/services',
  '/solutions',
  '/careers',
  '/news',
  '/events',
  '/partners',
  '/help',
  '/pricing',
  '/blog',
  '/documentation',
  '/white-papers',
  '/webinars',
  '/training',
  '/research-development',
  '/case-studies',
  '/leadership',
  '/request-quote',
  
  // AI Services
  '/services/ai-enterprise-automation-platform',
  '/services/ai-data-analytics-platform',
  '/services/ai-business-intelligence',
  '/services/ai-cybersecurity-platform',
  '/services/ai-autonomous-research-assistant',
  '/services/ai-financial-trading-platform',
  '/services/ai-healthcare-platform',
  '/services/ai-quantum-hybrid-platform',
  '/services/ai-supply-chain-optimization',
  '/services/blockchain-enterprise-solutions',
  '/services/it-infrastructure-management',
  '/services/micro-saas-solutions-comprehensive',
  '/services/ai-quantum-neural-network-platform',
  '/services/ai-autonomous-business-operations-platform',
  '/services/ai-customer-experience-analytics-platform',
  
  // Solutions
  '/solutions/healthcare',
  '/solutions/financial',
  '/solutions/manufacturing',
  '/solutions/government',
  '/solutions/retail',
  '/solutions/quantum-edge-computing',
  '/solutions/ai-autonomous-business',
  '/solutions/blockchain-web3',
  '/solutions/iot-edge-computing',
  '/solutions/space-tech',
  
  // Showcase pages
  '/comprehensive-services-showcase-2025',
  '/innovative-ai-services-showcase-2025',
  
  // Legal and Policy
  '/privacy',
  '/terms',
  '/cookies',
  '/accessibility',
  '/security',
  '/compliance',
  
  // Additional pages
  '/enterprise',
  '/industry-solutions',
  '/digital-transformation',
  '/cloud-solutions',
  '/emerging-tech'
];

// Check if pages exist in the file system
function checkPageExistence(route) {
  const routePath = route === '/' ? 'Home' : route.slice(1);
  
  // Handle different naming conventions
  const routeVariations = [
    routePath, // original
    routePath.charAt(0).toUpperCase() + routePath.slice(1), // Capitalized
    routePath.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(''), // PascalCase
    routePath.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(''), // CamelCase
    // Special case for AI services in any context - handle "ai" -> "AI"
    routePath.split('-').map(word => word === 'ai' ? 'AI' : word.charAt(0).toUpperCase() + word.slice(1)).join('-'), // AI with hyphens
    routePath.split('-').map(word => word === 'ai' ? 'AI' : word.charAt(0).toUpperCase() + word.slice(1)).join('') // AI PascalCase
  ];
  
  const possibleFiles = [];
  routeVariations.forEach(variation => {
    possibleFiles.push(
      `src/pages/${variation}.tsx`,
      `src/pages/${variation}.jsx`,
      `src/pages/${variation}.ts`,
      `src/pages/${variation}.js`
    );
  });
  
  // Check for nested directory structures (e.g., /solutions/healthcare -> src/pages/solutions/Healthcare.tsx)
  if (routePath.includes('/')) {
    const parts = routePath.split('/');
    const dir = parts[0];
    const file = parts[1];
    
    // Handle different naming conventions for nested files
    const nestedVariations = [
      file, // original
      file.charAt(0).toUpperCase() + file.slice(1), // Capitalized
      file.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(''), // PascalCase
      file.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(''), // CamelCase
      file.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-'), // PascalCase with hyphens
      file.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-'), // Capitalized with hyphens
      // Special case for AI services - handle "ai" -> "AI"
      file.split('-').map(word => word === 'ai' ? 'AI' : word.charAt(0).toUpperCase() + word.slice(1)).join('-'), // AI with hyphens
      file.split('-').map(word => word === 'ai' ? 'AI' : word.charAt(0).toUpperCase() + word.slice(1)).join(''), // AI PascalCase
      // Special case for IoT services - handle "iot" -> "IoT"
      file.split('-').map(word => word === 'iot' ? 'IoT' : word.charAt(0).toUpperCase() + word.slice(1)).join('-'), // IoT with hyphens
      file.split('-').map(word => word === 'iot' ? 'IoT' : word.charAt(0).toUpperCase() + word.slice(1)).join(''), // IoT PascalCase
      // Special case for AI services in any context - handle "ai" -> "AI"
      file.split('-').map(word => word === 'ai' ? 'AI' : word.charAt(0).toUpperCase() + word.slice(1)).join('-'), // AI with hyphens
      file.split('-').map(word => word === 'ai' ? 'AI' : word.charAt(0).toUpperCase() + word.slice(1)).join(''), // AI PascalCase
      // Handle compound words with "Solutions" appended (common in solutions directory)
      file.charAt(0).toUpperCase() + file.slice(1) + 'Solutions', // Capitalized + Solutions
      file.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Solutions', // PascalCase + Solutions
      file.split('-').map(word => word === 'ai' ? 'AI' : word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Solutions', // AI PascalCase + Solutions
      file.split('-').map(word => word === 'iot' ? 'IoT' : word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Solutions' // IoT PascalCase + Solutions
    ];
    

    

    
    nestedVariations.forEach(variation => {
      possibleFiles.push(
        `src/pages/${dir}/${variation}.tsx`,
        `src/pages/${dir}/${variation}.jsx`,
        `src/pages/${dir}/${variation}.ts`,
        `src/pages/${dir}/${variation}.js`
      );
    });
  }
  
  for (const file of possibleFiles) {
    if (fs.existsSync(file)) {
      return { exists: true, file };
    }
  }
  
  // Check for kebab-case files
  const kebabFiles = [
    `src/pages/${routePath.replace(/-/g, '').toLowerCase()}.tsx`,
    `src/pages/${routePath.replace(/-/g, '').toLowerCase()}.jsx`
  ];
  
  for (const file of kebabFiles) {
    if (fs.existsSync(file)) {
      return { exists: true, file };
    }
  }
  
  return { exists: false, file: null };
}

// Check navigation consistency
function checkNavigationConsistency() {
  console.log('📋 Checking Navigation Consistency...\n');
  
  const headerFile = 'src/components/Header.tsx';
  const mainNavFile = 'src/components/header/MainNavigation.tsx';
  const footerFile = 'src/components/Footer.tsx';
  
  const headerExists = fs.existsSync(headerFile);
  const mainNavExists = fs.existsSync(mainNavFile);
  const footerExists = fs.existsSync(footerFile);
  
  console.log(`Header Component: ${headerExists ? '✅' : '❌'} ${headerFile}`);
  console.log(`Main Navigation: ${mainNavExists ? '✅' : '❌'} ${mainNavFile}`);
  console.log(`Footer Component: ${footerExists ? '✅' : '❌'} ${footerFile}`);
  
  return { headerExists, mainNavExists, footerExists };
}

// Check for missing pages
function checkMissingPages() {
  console.log('\n📄 Checking Page Existence...\n');
  
  const missingPages = [];
  const existingPages = [];
  
  for (const route of appRoutes) {
    const result = checkPageExistence(route);
    if (result.exists) {
      existingPages.push({ route, file: result.file });
      console.log(`✅ ${route} -> ${result.file}`);
    } else {
      missingPages.push(route);
      console.log(`❌ ${route} -> MISSING`);
    }
  }
  
  return { missingPages, existingPages };
}

// Check for broken internal links
function checkInternalLinks() {
  console.log('\n🔗 Checking Internal Links...\n');
  
  const brokenLinks = [];
  const workingLinks = [];
  
  // Check links in existing pages
  const existingPages = appRoutes.filter(route => checkPageExistence(route).exists);
  
  for (const route of existingPages) {
    const result = checkPageExistence(route);
    if (result.exists && result.file) {
      try {
        const content = fs.readFileSync(result.file, 'utf8');
        const linkMatches = content.match(/href=["']([^"']+)["']/g) || [];
        
        for (const match of linkMatches) {
          const href = match.match(/href=["']([^"']+)["']/)[1];
          if (href.startsWith('/') && !href.startsWith('//')) {
            const targetRoute = href.split('?')[0].split('#')[0];
            if (!appRoutes.includes(targetRoute)) {
              brokenLinks.push({
                source: route,
                target: targetRoute,
                sourceFile: result.file
              });
            } else {
              workingLinks.push({
                source: route,
                target: targetRoute
              });
            }
          }
        }
      } catch (error) {
        console.log(`⚠️  Could not read ${result.file}: ${error.message}`);
      }
    }
  }
  
  return { brokenLinks, workingLinks };
}

// Check for duplicate routes
function checkDuplicateRoutes() {
  console.log('\n🔄 Checking for Duplicate Routes...\n');
  
  const routeCounts = {};
  const duplicates = [];
  
  for (const route of appRoutes) {
    routeCounts[route] = (routeCounts[route] || 0) + 1;
  }
  
  for (const [route, count] of Object.entries(routeCounts)) {
    if (count > 1) {
      duplicates.push({ route, count });
      console.log(`⚠️  Duplicate route: ${route} -> ${count} times`);
    }
  }
  
  if (duplicates.length === 0) {
    console.log('✅ No duplicate routes found');
  }
  
  return duplicates;
}

// Generate comprehensive report
function generateReport(missingPages, brokenLinks, duplicates, navStatus) {
  console.log('\n📊 COMPREHENSIVE ANALYSIS REPORT\n');
  console.log('=' .repeat(50));
  
  console.log(`\n📈 SUMMARY:`);
  console.log(`Total Routes: ${appRoutes.length}`);
  console.log(`Existing Pages: ${appRoutes.length - missingPages.length}`);
  console.log(`Missing Pages: ${missingPages.length}`);
  console.log(`Broken Links: ${brokenLinks.length}`);
  console.log(`Duplicate Routes: ${duplicates.length}`);
  
  if (missingPages.length > 0) {
    console.log(`\n❌ MISSING PAGES (${missingPages.length}):`);
    missingPages.forEach(page => console.log(`  - ${page}`));
  }
  
  if (brokenLinks.length > 0) {
    console.log(`\n🔗 BROKEN INTERNAL LINKS (${brokenLinks.length}):`);
    brokenLinks.forEach(link => {
      console.log(`  - ${link.source} -> ${link.target} (in ${link.sourceFile})`);
    });
  }
  
  if (duplicates.length > 0) {
    console.log(`\n🔄 DUPLICATE ROUTES (${duplicates.length}):`);
    duplicates.forEach(dup => {
      console.log(`  - ${dup.route} (${dup.count} times)`);
    });
  }
  
  console.log(`\n🧭 NAVIGATION COMPONENTS:`);
  console.log(`  Header: ${navStatus.headerExists ? '✅' : '❌'}`);
  console.log(`  Header: ${navStatus.mainNavExists ? '✅' : '❌'}`);
  console.log(`  Footer: ${navStatus.footerExists ? '✅' : '❌'}`);
  
  // Generate recommendations
  console.log(`\n💡 RECOMMENDATIONS:`);
  
  if (missingPages.length > 0) {
    console.log(`  1. Create missing pages for: ${missingPages.slice(0, 3).join(', ')}${missingPages.length > 3 ? '...' : ''}`);
  }
  
  if (brokenLinks.length > 0) {
    console.log(`  2. Fix broken internal links (${brokenLinks.length} found)`);
  }
  
  if (duplicates.length > 0) {
    console.log(`  3. Remove duplicate route definitions`);
  }
  
  if (!navStatus.headerExists || !navStatus.mainNavExists || !navStatus.footerExists) {
    console.log(`  4. Ensure all navigation components exist and are properly configured`);
  }
  
  console.log(`  5. Verify all routes in App.tsx have corresponding page components`);
  console.log(`  6. Test all navigation links in the browser`);
  
  // Save report to file
  const reportData = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    summary: {
      totalRoutes: appRoutes.length,
      existingPages: appRoutes.length - missingPages.length,
      missingPages: missingPages.length,
      brokenLinks: brokenLinks.length,
      duplicateRoutes: duplicates.length
    },
    missingPages,
    brokenLinks,
    duplicates,
    navigationStatus: navStatus,
    allRoutes: appRoutes
  };
  
  fs.writeFileSync('zion-deep-analysis-report.json', JSON.stringify(reportData, null, 2));
  console.log(`\n📄 Detailed report saved to: zion-deep-analysis-report.json`);
}

// Main execution
function main() {
  try {
    const navStatus = checkNavigationConsistency();
    const { missingPages, existingPages } = checkMissingPages();
    const { brokenLinks, workingLinks } = checkInternalLinks();
    const duplicates = checkDuplicateRoutes();
    
    generateReport(missingPages, brokenLinks, duplicates, navStatus);
    
    console.log('\n✅ Deep Link Analysis Complete!');
    
  } catch (error) {
    console.error('❌ Error during analysis:', error);
    process.exit(1);
  }
}

// Run the analysis
main();