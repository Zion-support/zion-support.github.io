#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const BASE_DIR = './src';
const OUTPUT_DIR = './link-reports';

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Analysis results
const analysis = {
  timestamp: new Date().toISOString(),
  summary: {
    totalRoutes: 0,
    existingPages: 0,
    missingPages: 0,
    brokenLinks: 0,
    duplicateRoutes: 0
  },
  routes: [],
  existingPages: [],
  missingPages: [],
  brokenLinks: [],
  duplicateRoutes: [],
  recommendations: []
};

// Function to scan directory recursively
function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDirectory(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to extract routes from App.tsx
function extractRoutesFromApp() {
  const appPath = path.join(BASE_DIR, 'App.tsx');
  
  if (!fs.existsSync(appPath)) {
    console.error('App.tsx not found!');
    return [];
  }
  
  const content = fs.readFileSync(appPath, 'utf8');
  const routes = [];
  
  // Extract route patterns
  const routeRegex = /path:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  
  while ((match = routeRegex.exec(content)) !== null) {
    routes.push(match[1]);
  }
  
  return [...new Set(routes)]; // Remove duplicates
}

// Function to check if page exists
function checkPageExists(route) {
  // Remove leading slash
  const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
  
  if (cleanRoute === '') {
    return path.join(BASE_DIR, 'pages', 'Home.tsx');
  }
  
  // Check for kebab-case first (e.g., white-papers.tsx)
  const kebabPath = path.join(BASE_DIR, 'pages', `${cleanRoute}.tsx`);
  if (fs.existsSync(kebabPath)) {
    return kebabPath;
  }
  
  // Check for PascalCase (e.g., WhitePapers.tsx)
  const pascalCase = cleanRoute.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const pascalPath = path.join(BASE_DIR, 'pages', `${pascalCase}.tsx`);
  if (fs.existsSync(pascalPath)) {
    return pascalPath;
  }
  
  // Check for special cases
  const specialCases = {
    'faq': 'FAQ.tsx',
    'services-comparison': 'ServicesComparisonPage.tsx'
  };
  
  if (specialCases[cleanRoute]) {
    const specialPath = path.join(BASE_DIR, 'pages', specialCases[cleanRoute]);
    if (fs.existsSync(specialPath)) {
      return specialPath;
    }
  }
  
  // Check for exact page match (e.g., services.tsx)
  const pagePath = path.join(BASE_DIR, 'pages', `${cleanRoute.charAt(0).toUpperCase() + cleanRoute.slice(1)}.tsx`);
  if (fs.existsSync(pagePath)) {
    return pagePath;
  }
  
  // Check for services subdirectory
  if (cleanRoute.startsWith('services/')) {
    const serviceName = cleanRoute.split('/')[1];
    const servicePath = path.join(BASE_DIR, 'pages', 'services', `${serviceName}.tsx`);
    if (fs.existsSync(servicePath)) {
      return servicePath;
    }
  }
  
  return null;
}

// Function to analyze header navigation
function analyzeHeaderNavigation() {
  const headerPath = path.join(BASE_DIR, 'layout', 'AppHeader.tsx');
  
  if (!fs.existsSync(headerPath)) {
    return [];
  }
  
  const content = fs.readFileSync(headerPath, 'utf8');
  const navigation = [];
  
  // Extract navigation items
  const navRegex = /href:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  
  while ((match = navRegex.exec(content)) !== null) {
    navigation.push(match[1]);
  }
  
  return [...new Set(navigation)];
}

// Function to analyze footer links
function analyzeFooterLinks() {
  const footerPath = path.join(BASE_DIR, 'components', 'EnhancedFuturisticFooter.tsx');
  
  if (!fs.existsSync(footerPath)) {
    return [];
  }
  
  const content = fs.readFileSync(footerPath, 'utf8');
  const links = [];
  
  // Extract footer links
  const linkRegex = /href:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  
  return [...new Set(links)];
}

// Function to check for broken internal links
function checkBrokenInternalLinks() {
  const allFiles = scanDirectory(BASE_DIR);
  const brokenLinks = [];
  
  allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const linkRegex = /href:\s*['"`]([^'"`]+)['"`]/g;
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      const link = match[1];
      
      // Skip external links and special protocols
      if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:')) {
        continue;
      }
      
      // Check if internal link exists
      if (!checkPageExists(link)) {
        brokenLinks.push({
          file,
          link,
          type: 'internal'
        });
      }
    }
  });
  
  return brokenLinks;
}

// Function to generate comprehensive report
function generateComprehensiveReport() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.join(OUTPUT_DIR, `comprehensive-analysis-${timestamp}.json`);
  const markdownPath = path.join(OUTPUT_DIR, `comprehensive-analysis-${timestamp}.md`);
  
  // Save JSON report
  fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
  
  // Generate markdown report
  const markdown = generateMarkdownReport();
  fs.writeFileSync(markdownPath, markdown);
  
  console.log(`\n📊 Reports generated:`);
  console.log(`JSON: ${reportPath}`);
  console.log(`Markdown: ${markdownPath}`);
  
  return { reportPath, markdownPath };
}

// Function to generate markdown report
function generateMarkdownReport() {
  return `# Zion Tech Group Comprehensive Website Analysis

**Generated:** ${new Date().toLocaleString()}
**Analysis Type:** Comprehensive Code & Route Analysis

## 📊 Executive Summary

- **Total Routes Defined:** ${analysis.summary.totalRoutes}
- **Existing Pages:** ${analysis.summary.existingPages}
- **Missing Pages:** ${analysis.summary.missingPages}
- **Broken Internal Links:** ${analysis.summary.brokenLinks}
- **Duplicate Routes:** ${analysis.summary.duplicateRoutes}

## 🚨 Critical Issues

### Missing Pages (${analysis.summary.missingPages})
${analysis.missingPages.map(page => `- \`${page.route}\` - Expected: \`${page.expectedPath}\``).join('\n')}

### Broken Internal Links (${analysis.summary.brokenLinks})
${analysis.brokenLinks.map(link => `- \`${link.link}\` in \`${path.relative(BASE_DIR, link.file)}\``).join('\n')}

### Duplicate Routes (${analysis.summary.duplicateRoutes})
${analysis.duplicateRoutes.map(route => `- \`${route}\``).join('\n')}

## ✅ Working Routes (${analysis.summary.existingPages})
${analysis.existingPages.map(page => `- \`${page.route}\` → \`${path.relative(BASE_DIR, page.path)}\``).join('\n')}

## 🎯 Recommendations

${analysis.recommendations.map(rec => `1. **${rec.priority}**: ${rec.description}`).join('\n')}

## 🔧 Next Steps

1. **Create missing pages** for all identified routes
2. **Fix broken internal links** throughout the application
3. **Resolve duplicate routes** to prevent conflicts
4. **Update navigation components** to reflect actual page availability
5. **Implement proper 404 handling** for missing routes

---
*Report generated by Zion Tech Group Comprehensive Analyzer*
`;
}

// Main analysis function
function runComprehensiveAnalysis() {
  console.log('🚀 Starting Comprehensive Zion Tech Group Website Analysis...');
  console.log('=' .repeat(60));
  
  // Extract routes from App.tsx
  console.log('📋 Extracting routes from App.tsx...');
  const routes = extractRoutesFromApp();
  analysis.summary.totalRoutes = routes.length;
  analysis.routes = routes;
  
  console.log(`Found ${routes.length} routes`);
  
  // Check each route for existing pages
  console.log('\n🔍 Checking page existence...');
  routes.forEach(route => {
    const pagePath = checkPageExists(route);
    
    if (pagePath) {
      analysis.existingPages.push({
        route,
        path: pagePath
      });
      analysis.summary.existingPages++;
    } else {
      analysis.missingPages.push({
        route,
        expectedPath: path.join(BASE_DIR, 'pages', `${route.charAt(0).toUpperCase() + route.slice(1)}.tsx`)
      });
      analysis.summary.missingPages++;
    }
  });
  
  // Check for broken internal links
  console.log('\n🔗 Checking for broken internal links...');
  const brokenLinks = checkBrokenInternalLinks();
  analysis.brokenLinks = brokenLinks;
  analysis.summary.brokenLinks = brokenLinks.length;
  
  // Check for duplicate routes
  console.log('\n🔄 Checking for duplicate routes...');
  const routeCounts = {};
  routes.forEach(route => {
    routeCounts[route] = (routeCounts[route] || 0) + 1;
  });
  
  const duplicates = Object.entries(routeCounts)
    .filter(([route, count]) => count > 1)
    .map(([route]) => route);
  
  analysis.duplicateRoutes = duplicates;
  analysis.summary.duplicateRoutes = duplicates.length;
  
  // Generate recommendations
  console.log('\n💡 Generating recommendations...');
  if (analysis.summary.missingPages > 0) {
    analysis.recommendations.push({
      priority: 'HIGH',
      description: `Create ${analysis.summary.missingPages} missing page(s) to ensure all routes are functional`
    });
  }
  
  if (analysis.summary.brokenLinks > 0) {
    analysis.recommendations.push({
      priority: 'HIGH',
      description: `Fix ${analysis.summary.brokenLinks} broken internal link(s) to maintain site integrity`
    });
  }
  
  if (analysis.summary.duplicateRoutes > 0) {
    analysis.recommendations.push({
      priority: 'MEDIUM',
      description: `Resolve ${analysis.summary.duplicateRoutes} duplicate route(s) to prevent conflicts`
    });
  }
  
  if (analysis.summary.missingPages === 0 && analysis.summary.brokenLinks === 0) {
    analysis.recommendations.push({
      priority: 'LOW',
      description: 'All routes and links are working correctly - consider performance optimizations'
    });
  }
  
  // Generate reports
  console.log('\n📊 Generating comprehensive reports...');
  const reportPaths = generateComprehensiveReport();
  
  // Display summary
  console.log('\n🎯 Analysis Complete!');
  console.log('=' .repeat(60));
  console.log(`Total Routes: ${analysis.summary.totalRoutes}`);
  console.log(`✅ Working: ${analysis.summary.existingPages}`);
  console.log(`❌ Missing: ${analysis.summary.missingPages}`);
  console.log(`🔗 Broken Links: ${analysis.summary.brokenLinks}`);
  console.log(`🔄 Duplicates: ${analysis.summary.duplicateRoutes}`);
  
  if (analysis.summary.missingPages > 0 || analysis.summary.brokenLinks > 0) {
    console.log('\n⚠️  Issues found! Please review the detailed reports.');
  } else {
    console.log('\n🎉 All routes and links are working correctly!');
  }
  
  return analysis;
}

// Run analysis if called directly
if (require.main === module) {
  runComprehensiveAnalysis();
}

module.exports = { runComprehensiveAnalysis, checkPageExists, extractRoutesFromApp };