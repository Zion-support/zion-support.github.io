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
    console.log('==================');
    console.log(`Total Pages: ${report.metadata.totalPages}`);
    console.log(`Overall Health: ${report.summary.overallHealth.toUpperCase()}`);
    console.log(`Critical Issues: ${report.summary.criticalIssues}`);
    console.log(`Warnings: ${report.summary.warnings}`);
    console.log(`Suggestions: ${report.summary.suggestions}`);
    console.log(`External Links: ${report.externalLinks.working}/${report.externalLinks.total} working`);

    // Show top recommendations
    if (recommendations.length > 0) {
      console.log('\n🎯 TOP RECOMMENDATIONS:');
      recommendations.slice(0, 3).forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.type.toUpperCase()}] ${rec.issue}`);
        console.log(`   ${rec.description}`);
        console.log(`   Action: ${rec.action}\n`);
      });
    }

    console.log('🎉 Link analysis completed successfully!');

  } catch (error) {
    console.error('❌ Error during analysis:', error.message);
    process.exit(1);
  }
}

// Function to generate HTML report
function generateHtmlReport(report) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - Website Analysis Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f8f9fa; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 15px; margin-bottom: 30px; }
        h2 { color: #34495e; margin-top: 40px; margin-bottom: 20px; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
        .stat-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
        .stat-value { font-size: 2.5em; font-weight: bold; display: block; }
        .stat-label { font-size: 0.9em; opacity: 0.9; }
        .health-good { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); }
        .health-warning { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .health-critical { background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%); }
        .recommendation { margin: 15px 0; padding: 15px; border-left: 4px solid #3498db; background: #ecf8ff; border-radius: 4px; }
        .rec-critical { border-left-color: #e74c3c; background: #fdf2f2; }
        .rec-warning { border-left-color: #f39c12; background: #fefbf3; }
        .category-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .category-card { background: #f8f9fa; padding: 15px; border-radius: 6px; border: 1px solid #dee2e6; }
        .external-link { display: flex; justify-content: space-between; align-items: center; padding: 10px; margin: 5px 0; background: #f8f9fa; border-radius: 4px; }
        .status-good { color: #27ae60; font-weight: bold; }
        .status-bad { color: #e74c3c; font-weight: bold; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f8f9fa; font-weight: 600; }
        .timestamp { color: #6c757d; font-size: 0.9em; margin-bottom: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Zion Tech Group - Website Analysis Report</h1>
        <div class="timestamp">Generated: ${new Date(report.metadata.generatedAt).toLocaleString()}</div>
        
        <div class="summary">
            <div class="stat-card ${report.summary.overallHealth === 'good' ? 'health-good' : report.summary.overallHealth === 'critical' ? 'health-critical' : 'health-warning'}">
                <span class="stat-value">${report.summary.overallHealth.toUpperCase()}</span>
                <span class="stat-label">Overall Health</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${report.metadata.totalPages}</span>
                <span class="stat-label">Total Pages</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${report.summary.criticalIssues + report.summary.warnings}</span>
                <span class="stat-label">Issues Found</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${report.externalLinks.working}/${report.externalLinks.total}</span>
                <span class="stat-label">External Links OK</span>
            </div>
        </div>

        <h2>🎯 Recommendations</h2>
        ${report.recommendations.map(rec => `
            <div class="recommendation rec-${rec.type}">
                <strong>[${rec.type.toUpperCase()}] ${rec.issue}</strong><br>
                ${rec.description}<br>
                <em>Action: ${rec.action}</em>
            </div>
        `).join('')}

        <h2>📊 Website Structure</h2>
        <div class="category-grid">
            ${Object.entries(report.websiteStructure.categories).map(([category, data]) => `
                <div class="category-card">
                    <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <p><strong>${data.count}</strong> pages</p>
                    <p>Avg Priority: <strong>${data.averagePriority}</strong></p>
                </div>
            `).join('')}
        </div>

        <h2>🌐 External Links Status</h2>
        ${report.externalLinks.results.map(link => `
            <div class="external-link">
                <span>${link.url}</span>
                <span class="${link.accessible ? 'status-good' : 'status-bad'}">
                    ${link.accessible ? '✅ OK' : '❌ ' + link.statusText}
                </span>
            </div>
        `).join('')}

        <h2>📈 URL Depth Analysis</h2>
        <table>
            <tr><th>Depth Level</th><th>Count</th><th>Percentage</th></tr>
            <tr><td>Level 1 (/page)</td><td>${report.websiteStructure.urlDepthAnalysis.level1}</td><td>${((report.websiteStructure.urlDepthAnalysis.level1 / report.metadata.totalPages) * 100).toFixed(1)}%</td></tr>
            <tr><td>Level 2 (/category/page)</td><td>${report.websiteStructure.urlDepthAnalysis.level2}</td><td>${((report.websiteStructure.urlDepthAnalysis.level2 / report.metadata.totalPages) * 100).toFixed(1)}%</td></tr>
            <tr><td>Level 3 (/category/sub/page)</td><td>${report.websiteStructure.urlDepthAnalysis.level3}</td><td>${((report.websiteStructure.urlDepthAnalysis.level3 / report.metadata.totalPages) * 100).toFixed(1)}%</td></tr>
            <tr><td>Deeper (4+ levels)</td><td>${report.websiteStructure.urlDepthAnalysis.deeper}</td><td>${((report.websiteStructure.urlDepthAnalysis.deeper / report.metadata.totalPages) * 100).toFixed(1)}%</td></tr>
        </table>
    </div>
</body>
</html>`;
}

// Run the analysis
main();