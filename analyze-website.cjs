#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Starting Website Analysis for ziontechgroup.com...\n');

const analysisResults = {
  missingPages: [],
  brokenLinks: [],
  routingIssues: [],
  recommendations: []
};

// Expected routes from navigation
const expectedRoutes = [
  '/', '/about', '/contact', '/services', '/solutions', '/case-studies', 
  '/blog', '/resources', '/guides', '/content-hub', '/enhanced-services-catalog',
  '/privacy', '/terms', '/security', '/pricing', '/support', '/partners', 
  '/portfolio', '/sitemap', '/enterprise', '/innovative-it-solutions', 
  '/advanced-ai-solutions'
];

function checkPageExists(route) {
  const appDir = path.join(__dirname, 'app');
  const routePath = route === '/' ? 'page.tsx' : route.replace('/', '') + '/page.tsx';
  const fullPath = path.join(appDir, routePath);
  return fs.existsSync(fullPath);
}

function analyzeMissingPages() {
  console.log('🔍 Checking for Missing Pages...');
  
  expectedRoutes.forEach(route => {
    if (!checkPageExists(route)) {
      analysisResults.missingPages.push(route);
    }
  });
  
  console.log(`📊 Found ${analysisResults.missingPages.length} missing pages`);
}

function checkRoutingIssues() {
  console.log('🔗 Checking Routing Issues...');
  
  const headerFile = path.join(__dirname, 'components', 'Header.tsx');
  const sidebarFile = path.join(__dirname, 'components', 'Sidebar.tsx');
  
  if (fs.existsSync(headerFile)) {
    const content = fs.readFileSync(headerFile, 'utf8');
    if (content.includes('from "react-router-dom"') && content.includes('href=')) {
      analysisResults.routingIssues.push('Header.tsx has mixed routing imports');
    }
  }
  
  if (fs.existsSync(sidebarFile)) {
    const content = fs.readFileSync(sidebarFile, 'utf8');
    if (content.includes('from "react-router-dom"') && content.includes('href=')) {
      analysisResults.routingIssues.push('Sidebar.tsx has mixed routing imports');
    }
  }
  
  console.log(`📊 Found ${analysisResults.routingIssues.length} routing issues`);
}

function generateRecommendations() {
  analysisResults.recommendations = [
    'Create missing pages for better user experience',
    'Fix routing inconsistencies in components',
    'Implement proper error handling for 404 pages',
    'Add breadcrumb navigation for better UX',
    'Implement proper loading states',
    'Add proper meta descriptions and Open Graph tags',
    'Implement proper sitemap generation'
  ];
}

function runAnalysis() {
  analyzeMissingPages();
  checkRoutingIssues();
  generateRecommendations();
  
  console.log('\n📊 ANALYSIS SUMMARY');
  console.log('  console.log(`Missing Pages: ${analysisResults.missingPages.length}`);
  console.log(`Routing Issues: ${analysisResults.routingIssues.length}`);
  console.log(`Recommendations: ${analysisResults.recommendations.length}`);
  
  if (analysisResults.missingPages.length > 0) {
    console.log('\n❌ Missing Pages:');
    analysisResults.missingPages.forEach(page => {
      console.log(`  - ${page}`);
    });
  }
  
  if (analysisResults.routingIssues.length > 0) {
    console.log('\n🔄 Routing Issues:');
    analysisResults.routingIssues.forEach(issue => {
      console.log(`  - ${issue}`);
    });
  }
  
  console.log('\n💡 RECOMMENDATIONS');
  console.log('  analysisResults.recommendations.forEach((rec, index) => {
    console.log(`${index + 1}. ${rec}`);
  });
  
  console.log('\n✅ Analysis complete!');
}

runAnalysis();