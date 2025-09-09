#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'https://ziontechgroup.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'link-reports');

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Load sitemap data
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.json');
let sitemapData = { urls: [] };

if (fs.existsSync(sitemapPath)) {
  try {
    sitemapData = JSON.parse(fs.readFileSync(sitemapPath, 'utf8'));
  } catch (error) {
    console.warn('⚠️  Could not load sitemap data:', error.message);
  }
}

// Function to check if a URL is accessible
async function checkUrl(url, timeout = 10000) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      headers: {
        'User-Agent': 'ZionTechGroup-LinkChecker/1.0',
        'Accept': '*/*'
      }
    });
    
    clearTimeout(timeoutId);
    
    return {
      url,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      accessible: response.ok,
      redirected: response.redirected,
      redirectUrl: response.url !== url ? response.url : null,
      responseTime: Date.now()
    };
  } catch (error) {
    return {
      url,
      status: 0,
      statusText: error.message,
      headers: {},
      accessible: false,
      redirected: false,
      redirectUrl: null,
      error: error.message,
      responseTime: Date.now()
    };
  }
}

// Function to check internal navigation consistency
function checkInternalNavigation() {
  console.log('🔍 Checking internal navigation consistency...');
  
  const results = {
    totalRoutes: sitemapData.urls.length,
    categories: {},
    brokenRoutes: [],
    warnings: [],
    recommendations: []
  };

  // Check each route category
  sitemapData.urls.forEach(({ route, category }) => {
    if (!results.categories[category]) {
      results.categories[category] = [];
    }
    results.categories[category].push(route);
  });

  // Check for common navigation issues
  const corePages = ['/about', '/contact', '/services', '/solutions', '/pricing'];
  corePages.forEach(page => {
    const exists = sitemapData.urls.some(({ route }) => route === page);
    if (!exists) {
      results.brokenRoutes.push({
        route: page,
        issue: 'Missing core page',
        severity: 'high'
      });
    }
  });

  // Check for orphaned showcase pages
  const showcasePages = sitemapData.urls.filter(({ category }) => category === 'showcase');
  if (showcasePages.length > 10) {
    results.warnings.push({
      issue: 'Too many showcase pages may dilute SEO',
      count: showcasePages.length,
      severity: 'medium'
    });
  }

  return results;
}

// Function to analyze website structure
function analyzeWebsiteStructure() {
  console.log('📊 Analyzing website structure...');
  
  const analysis = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalPages: sitemapData.urls.length,
    categories: {},
    urlDepthAnalysis: {
      level1: 0, // e.g., /about
      level2: 0, // e.g., /services/ai
      level3: 0, // e.g., /services/ai/automation
      deeper: 0
    },
    seoAnalysis: {
      goodUrls: [],
      longUrls: [],
      duplicateKeywords: [],
      missingCategories: []
    }
  };

  // Analyze URL structure and categorize
  sitemapData.urls.forEach(({ route, category, priority }) => {
    // Category analysis
    if (!analysis.categories[category]) {
      analysis.categories[category] = {
        count: 0,
        routes: [],
        averagePriority: 0
      };
    }
    analysis.categories[category].count++;
    analysis.categories[category].routes.push(route);
    analysis.categories[category].averagePriority += parseFloat(priority);

    // URL depth analysis
    const segments = route.split('/').filter(Boolean);
    const depth = segments.length;
    
    if (depth === 0) analysis.urlDepthAnalysis.level1++;
    else if (depth === 1) analysis.urlDepthAnalysis.level1++;
    else if (depth === 2) analysis.urlDepthAnalysis.level2++;
    else if (depth === 3) analysis.urlDepthAnalysis.level3++;
    else analysis.urlDepthAnalysis.deeper++;

    // SEO analysis
    if (route.length > 60) {
      analysis.seoAnalysis.longUrls.push({
        route,
        length: route.length,
        recommendation: 'Consider shortening URL for better SEO'
      });
    }

    if (route.length < 100 && segments.length <= 3 && !route.includes('_')) {
      analysis.seoAnalysis.goodUrls.push(route);
    }
  });

  // Calculate average priorities
  Object.keys(analysis.categories).forEach(category => {
    const cat = analysis.categories[category];
    cat.averagePriority = (cat.averagePriority / cat.count).toFixed(2);
  });

  // Check for missing important categories
  const expectedCategories = ['home', 'services', 'solutions', 'company', 'content'];
  expectedCategories.forEach(expected => {
    if (!analysis.categories[expected]) {
      analysis.seoAnalysis.missingCategories.push(expected);
    }
  });

  return analysis;
}

// Function to generate recommendations
function generateRecommendations(analysis, navigationCheck) {
  const recommendations = [];

  // Navigation recommendations
  if (navigationCheck.brokenRoutes.length > 0) {
    recommendations.push({
      type: 'critical',
      category: 'navigation',
      issue: 'Missing core pages',
      description: `${navigationCheck.brokenRoutes.length} core pages are missing from the site`,
      action: 'Create the missing pages or update routing',
      pages: navigationCheck.brokenRoutes.map(r => r.route)
    });
  }

  // URL structure recommendations
  if (analysis.urlDepthAnalysis.deeper > 5) {
    recommendations.push({
      type: 'warning',
      category: 'seo',
      issue: 'Deep URL structure',
      description: `${analysis.urlDepthAnalysis.deeper} URLs are more than 3 levels deep`,
      action: 'Consider flattening URL structure for better SEO'
    });
  }

  // Content organization
  if (analysis.categories.services && analysis.categories.services.count > 30) {
    recommendations.push({
      type: 'suggestion',
      category: 'organization',
      issue: 'Too many service pages',
      description: `${analysis.categories.services.count} service pages may be overwhelming`,
      action: 'Consider grouping services into subcategories'
    });
  }

  // SEO recommendations
  if (analysis.seoAnalysis.longUrls.length > 0) {
    recommendations.push({
      type: 'warning',
      category: 'seo',
      issue: 'Long URLs detected',
      description: `${analysis.seoAnalysis.longUrls.length} URLs are longer than recommended`,
      action: 'Shorten URLs for better SEO performance',
      urls: analysis.seoAnalysis.longUrls.slice(0, 5)
    });
  }

  return recommendations;
}

// Function to check external links
async function checkExternalLinks() {
  console.log('🌐 Checking external links...');
  
  const externalLinks = [
    'https://linkedin.com/company/ziontechgroup',
    'https://twitter.com/ziontechgroup',
    'https://github.com/ziontechgroup',
    'https://facebook.com/ziontechgroup',
    'https://instagram.com/ziontechgroup',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
  ];

  const results = [];
  
  for (const url of externalLinks) {
    console.log(`  Checking: ${url}`);
    const result = await checkUrl(url);
    results.push(result);
    
    // Add delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return results;
}

// Function to generate comprehensive report
function generateComprehensiveReport(analysis, navigationCheck, externalResults, recommendations) {
  const report = {
    metadata: {
      generatedAt: new Date().toISOString(),
      baseUrl: BASE_URL,
      totalPages: analysis.totalPages,
      generator: 'ZionTechGroup-LinkChecker/1.0'
    },
    websiteStructure: analysis,
    navigationAnalysis: navigationCheck,
    externalLinks: {
      total: externalResults.length,
      working: externalResults.filter(r => r.accessible).length,
      broken: externalResults.filter(r => !r.accessible).length,
      results: externalResults
    },
    recommendations,
    summary: {
      overallHealth: 'good', // Will be calculated based on issues
      criticalIssues: recommendations.filter(r => r.type === 'critical').length,
      warnings: recommendations.filter(r => r.type === 'warning').length,
      suggestions: recommendations.filter(r => r.type === 'suggestion').length
    }
  };

  // Calculate overall health
  if (report.summary.criticalIssues > 0) {
    report.summary.overallHealth = 'critical';
  } else if (report.summary.warnings > 2) {
    report.summary.overallHealth = 'warning';
  } else if (report.summary.suggestions > 5) {
    report.summary.overallHealth = 'fair';
  }

  return report;
}

// Main execution function
async function main() {
  console.log('🚀 Starting comprehensive link analysis for Zion Tech Group...\n');

  try {
    // Step 1: Analyze website structure
    const analysis = analyzeWebsiteStructure();
    
    // Step 2: Check internal navigation
    const navigationCheck = checkInternalNavigation();
    
    // Step 3: Check external links
    const externalResults = await checkExternalLinks();
    
    // Step 4: Generate recommendations
    const recommendations = generateRecommendations(analysis, navigationCheck);
    
    // Step 5: Create comprehensive report
    const report = generateComprehensiveReport(analysis, navigationCheck, externalResults, recommendations);

    // Save detailed JSON report
    const jsonReportPath = path.join(OUTPUT_DIR, 'comprehensive-analysis.json');
    fs.writeFileSync(jsonReportPath, JSON.stringify(report, null, 2));
    console.log(`\n✅ Comprehensive analysis saved: ${jsonReportPath}`);

    // Save human-readable report
    const htmlReport = generateHtmlReport(report);
    const htmlReportPath = path.join(OUTPUT_DIR, 'analysis-report.html');
    fs.writeFileSync(htmlReportPath, htmlReport);
    console.log(`✅ HTML report saved: ${htmlReportPath}`);

    // Print summary to console
    console.log('\n📊 ANALYSIS SUMMARY');
