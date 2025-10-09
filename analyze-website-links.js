#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'https://ziontechgroup.com';
const MAX_CONCURRENT_REQUESTS = 10;
const REQUEST_TIMEOUT = 10000;
const RETRY_ATTEMPTS = 3;

// Track results
const results = {
  working: [],
  broken: [],
  redirects: [],
  timeouts: [],
  errors: [],
  missing: []
};

// Track visited URLs to avoid duplicates
const visitedUrls = new Set();
const requestQueue = [];
let activeRequests = 0;

// Get all routes from sitemap
function getRoutesFromSitemap() {
  try {
    const sitemapPath = path.join(__dirname, 'app', 'sitemap.ts');
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    
    // Extract routes from sitemap.ts
    const routeMatches = sitemapContent.match(/['"`](\/[^'"`]*?)['"`]/g);
    const routes = routeMatches ? routeMatches.map(route => route.replace(/['"`]/g, '')) : [];
    
    // Add common routes that might not be in sitemap
    const additionalRoutes = [
      '/',
      '/about',
      '/services',
      '/contact',
      '/blog',
      '/case-studies',
      '/team',
      '/careers',
      '/news',
      '/docs',
      '/api-docs',
      '/support',
      '/status',
      '/privacy',
      '/terms',
      '/cookies',
      '/gdpr',
      '/security',
      '/compliance',
      '/pricing',
      '/demo',
      '/consultation'
    ];
    
    return [...new Set([...routes, ...additionalRoutes])];
  } catch (error) {
    console.error('Error reading sitemap:', error.message);
    return ['/'];
  }
}

// Get all AI service routes
function getAIServiceRoutes() {
  return [
    '/ai-services',
    '/ai-marketing',
    '/ai-automation',
    '/ai-healthcare',
    '/ai-fintech',
    '/ai-content-generation',
    '/ai-data-analytics',
    '/ai-cybersecurity',
    '/ai-workflow-automation',
    '/ai-cloud-infrastructure',
    '/ai-ecommerce-solutions',
    '/ai-mobile-app-development',
    '/ai-sales-automation',
    '/ai-data-visualization',
    '/ai-customer-support',
    '/ai-lead-generation',
    '/ai-document-processing',
    '/ai-predictive-analytics',
    '/ai-image-recognition',
    '/ai-voice-processing',
    '/ai-recommendation-engine',
    '/ai-sentiment-analysis',
    '/ai-research-assistant'
  ];
}

// Get all IT service routes
function getITServiceRoutes() {
  return [
    '/it-services',
    '/it-infrastructure',
    '/cybersecurity',
    '/cloud-services',
    '/devops',
    '/database',
    '/networking',
    '/it-consulting',
    '/managed-it',
    '/it-training',
    '/it-project-management',
    '/performance-optimization',
    '/backup-recovery',
    '/enterprise-solutions',
    '/it-infrastructure-design'
  ];
}

// Get all Micro SAAS routes
function getMicroSaasRoutes() {
  return [
    '/micro-saas',
    '/business-apps',
    '/productivity',
    '/marketing-tools',
    '/analytics-tools',
    '/developer-tools',
    '/communication-tools',
    '/hr-recruitment-tools',
    '/customer-support-tools',
    '/sales-crm-tools',
    '/project-management-tools',
    '/content-creation-tools',
    '/ai-writing-assistant',
    '/smart-analytics',
    '/ai-scheduler',
    '/expense-tracker',
    '/task-manager-pro',
    '/crm-lite',
    '/email-optimizer',
    '/social-media-manager',
    '/ai-design-studio',
    '/landing-page-builder',
    '/seo-optimizer',
    '/ad-campaign-manager',
    '/code-assistant',
    '/api-builder',
    '/bug-tracker-pro'
  ];
}

// Get all specialized service routes
function getSpecializedRoutes() {
  return [
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
    '/future-technologies'
  ];
}

// Make HTTP request with retry logic
function makeRequest(url, retryCount = 0) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'HEAD',
      timeout: REQUEST_TIMEOUT,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    };

    const client = urlObj.protocol === 'https:' ? https : http;
    const req = client.request(options, (res) => {
      const result = {
        url,
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        redirects: []
      };

      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400) {
        const location = res.headers.location;
        if (location) {
          const redirectUrl = new URL(location, url).href;
          result.redirects.push(redirectUrl);
          results.redirects.push(result);
        }
      } else if (res.statusCode >= 200 && res.statusCode < 300) {
        results.working.push(result);
      } else if (res.statusCode >= 400) {
        results.broken.push(result);
      }

      resolve(result);
    });

    req.on('error', (error) => {
      if (retryCount < RETRY_ATTEMPTS) {
        console.log(`Retrying ${url} (attempt ${retryCount + 1})`);
        setTimeout(() => {
          makeRequest(url, retryCount + 1).then(resolve);
        }, 1000 * (retryCount + 1));
      } else {
        results.errors.push({ url, error: error.message });
        resolve({ url, error: error.message });
      }
    });

    req.on('timeout', () => {
      req.destroy();
      if (retryCount < RETRY_ATTEMPTS) {
        console.log(`Timeout for ${url}, retrying...`);
        setTimeout(() => {
          makeRequest(url, retryCount + 1).then(resolve);
        }, 1000 * (retryCount + 1));
      } else {
        results.timeouts.push({ url });
        resolve({ url, timeout: true });
      }
    });

    req.setTimeout(REQUEST_TIMEOUT);
    req.end();
  });
}

// Process queue
async function processQueue() {
  while (requestQueue.length > 0 || activeRequests > 0) {
    if (activeRequests < MAX_CONCURRENT_REQUESTS && requestQueue.length > 0) {
      const url = requestQueue.shift();
      activeRequests++;
      
      makeRequest(url).then(() => {
        activeRequests--;
        processQueue();
      });
    } else {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}

// Check if page exists in file system
function checkPageExists(route) {
  const routePath = route === '/' ? '/page.tsx' : `${route}/page.tsx`;
  const fullPath = path.join(__dirname, 'app', routePath);
  return fs.existsSync(fullPath);
}

// Main analysis function
async function analyzeWebsite() {
  console.log('🔍 Starting comprehensive website analysis...\n');
  
  // Get all routes
  const sitemapRoutes = getRoutesFromSitemap();
  const aiRoutes = getAIServiceRoutes();
  const itRoutes = getITServiceRoutes();
  const microSaasRoutes = getMicroSaasRoutes();
  const specializedRoutes = getSpecializedRoutes();
  
  const allRoutes = [
    ...sitemapRoutes,
    ...aiRoutes,
    ...itRoutes,
    ...microSaasRoutes,
    ...specializedRoutes
  ];
  
  // Remove duplicates
  const uniqueRoutes = [...new Set(allRoutes)];
  
  console.log(`📊 Found ${uniqueRoutes.length} routes to analyze\n`);
  
  // Check which pages exist in file system
  console.log('📁 Checking file system for missing pages...\n');
  
  uniqueRoutes.forEach(route => {
    if (!checkPageExists(route)) {
      results.missing.push({
        route,
        filePath: route === '/' ? '/app/page.tsx' : `/app${route}/page.tsx`,
        exists: false
      });
    }
  });
  
  // Add URLs to queue
  uniqueRoutes.forEach(route => {
    const fullUrl = `${BASE_URL}${route}`;
    if (!visitedUrls.has(fullUrl)) {
      visitedUrls.add(fullUrl);
      requestQueue.push(fullUrl);
    }
  });
  
  console.log(`🌐 Testing ${requestQueue.length} URLs...\n`);
  
  // Process all requests
  await processQueue();
  
  // Generate report
  generateReport();
}

// Generate comprehensive report
function generateReport() {
  console.log('\n' + '='.repeat(80));
  console.log('📋 COMPREHENSIVE WEBSITE ANALYSIS REPORT');
  console.log('='.repeat(80));
  
  console.log(`\n✅ Working Links: ${results.working.length}`);
  if (results.working.length > 0) {
    results.working.forEach(result => {
      console.log(`   ✓ ${result.url} (${result.status})`);
    });
  }
  
  console.log(`\n❌ Broken Links: ${results.broken.length}`);
  if (results.broken.length > 0) {
    results.broken.forEach(result => {
      console.log(`   ✗ ${result.url} (${result.status} ${result.statusText})`);
    });
  }
  
  console.log(`\n🔄 Redirects: ${results.redirects.length}`);
  if (results.redirects.length > 0) {
    results.redirects.forEach(result => {
      console.log(`   → ${result.url} (${result.status})`);
      result.redirects.forEach(redirect => {
        console.log(`     → ${redirect}`);
      });
    });
  }
  
  console.log(`\n⏱️  Timeouts: ${results.timeouts.length}`);
  if (results.timeouts.length > 0) {
    results.timeouts.forEach(result => {
      console.log(`   ⏰ ${result.url}`);
    });
  }
  
  console.log(`\n💥 Errors: ${results.errors.length}`);
  if (results.errors.length > 0) {
    results.errors.forEach(result => {
      console.log(`   💥 ${result.url}: ${result.error}`);
    });
  }
  
  console.log(`\n📄 Missing Pages: ${results.missing.length}`);
  if (results.missing.length > 0) {
    results.missing.forEach(result => {
      console.log(`   📄 ${result.route} → ${result.filePath}`);
    });
  }
  
  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total URLs tested: ${results.working.length + results.broken.length + results.redirects.length + results.timeouts.length + results.errors.length}`);
  console.log(`Working: ${results.working.length} (${Math.round((results.working.length / (results.working.length + results.broken.length + results.redirects.length + results.timeouts.length + results.errors.length)) * 100)}%)`);
  console.log(`Broken: ${results.broken.length}`);
  console.log(`Redirects: ${results.redirects.length}`);
  console.log(`Timeouts: ${results.timeouts.length}`);
  console.log(`Errors: ${results.errors.length}`);
  console.log(`Missing pages: ${results.missing.length}`);
  
  // Save detailed report
  const reportData = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    summary: {
      total: results.working.length + results.broken.length + results.redirects.length + results.timeouts.length + results.errors.length,
      working: results.working.length,
      broken: results.broken.length,
      redirects: results.redirects.length,
      timeouts: results.timeouts.length,
      errors: results.errors.length,
      missing: results.missing.length
    },
    details: {
      working: results.working,
      broken: results.broken,
      redirects: results.redirects,
      timeouts: results.timeouts,
      errors: results.errors,
      missing: results.missing
    }
  };
  
  fs.writeFileSync('website-analysis-report.json', JSON.stringify(reportData, null, 2));
  console.log('\n💾 Detailed report saved to: website-analysis-report.json');
  
  // Generate action items
  generateActionItems();
}

// Generate action items for fixing issues
function generateActionItems() {
  console.log('\n' + '='.repeat(80));
  console.log('🎯 ACTION ITEMS');
  console.log('='.repeat(80));
  
  if (results.missing.length > 0) {
    console.log('\n📄 CREATE MISSING PAGES:');
    results.missing.forEach(result => {
      console.log(`   • Create ${result.filePath} for route ${result.route}`);
    });
  }
  
  if (results.broken.length > 0) {
    console.log('\n🔧 FIX BROKEN LINKS:');
    results.broken.forEach(result => {
      console.log(`   • Fix ${result.url} (${result.status} ${result.statusText})`);
    });
  }
  
  if (results.redirects.length > 0) {
    console.log('\n🔄 HANDLE REDIRECTS:');
    results.redirects.forEach(result => {
      console.log(`   • Review redirect: ${result.url} → ${result.redirects.join(' → ')}`);
    });
  }
  
  console.log('\n✨ RECOMMENDATIONS:');
  console.log('   • Implement proper error pages (404, 500)');
  console.log('   • Add loading states for dynamic content');
  console.log('   • Implement proper SEO meta tags for all pages');
  console.log('   • Add breadcrumb navigation');
  console.log('   • Implement search functionality');
  console.log('   • Add sitemap.xml generation');
  console.log('   • Implement proper caching headers');
  console.log('   • Add performance monitoring');
}

// Run the analysis
if (import.meta.url === `file://${process.argv[1]}`) {
  analyzeWebsite().catch(console.error);
}

export { analyzeWebsite, getRoutesFromSitemap, getAIServiceRoutes, getITServiceRoutes, getMicroSaasRoutes, getSpecializedRoutes };