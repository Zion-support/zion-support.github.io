const http = require('http');
const https = require('https');
const { URL } = require('url');

const baseUrl = 'http://localhost:3000';
const visitedUrls = new Set();
const brokenLinks = [];
const workingLinks = [];

// List of all expected pages based on the navigation
const expectedPages = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/pricing',
  '/blog',
  '/case-studies',
  '/careers',
  '/partners',
  '/support',
  '/faq',
  '/demo',
  '/consultation',
  '/micro-saas',
  '/ai-services',
  '/it-services',
  // AI Services subpages
  '/ai-analytics',
  '/ai-automation',
  '/ai-customer-support',
  '/ai-content-generation',
  '/ai-cybersecurity',
  '/ai-healthcare',
  '/ai-ecommerce-solutions',
  '/ai-mobile-app-development',
  // IT Services subpages
  '/cloud-services',
  '/devops',
  '/cybersecurity',
  '/it-consulting',
  '/database-services',
  '/network-solutions',
  // Micro SaaS subpages
  '/micro-saas/analytics-dashboard',
  '/micro-saas/content-generator',
  '/micro-saas/email-marketing',
  '/micro-saas/social-manager',
  '/micro-saas/expense-tracker',
  '/micro-saas/appointment-scheduler',
  // Emerging Tech subpages
  '/5g-implementation',
  '/ai-3d-generation',
  '/ai-blockchain-solutions',
  '/ai-edge-computing',
  '/quantum-computing'
];

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;
    
    const req = client.request(url, { method: 'HEAD' }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers
      });
    });
    
    req.on('error', (err) => {
      reject({ url, error: err.message });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      reject({ url, error: 'Request timeout' });
    });
    
    req.end();
  });
}

async function checkPage(url) {
  if (visitedUrls.has(url)) return;
  visitedUrls.add(url);
  
  try {
    const response = await makeRequest(url);
    if (response.status >= 200 && response.status < 400) {
      workingLinks.push({ url, status: response.status });
      console.log(`✅ ${url} - ${response.status}`);
    } else {
      brokenLinks.push({ url, status: response.status, statusText: response.statusText });
      console.log(`❌ ${url} - ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    brokenLinks.push({ url, error: error.error || error.message });
    console.log(`❌ ${url} - Error: ${error.error || error.message}`);
  }
}

async function analyzeWebsite() {
  console.log('🔍 Starting website analysis...\n');
  
  // Check all expected pages
  for (const page of expectedPages) {
    const fullUrl = `${baseUrl}${page}`;
    await checkPage(fullUrl);
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('\n📊 Analysis Summary:');
  console.log(`✅ Working links: ${workingLinks.length}`);
  console.log(`❌ Broken links: ${brokenLinks.length}`);
  
  if (brokenLinks.length > 0) {
    console.log('\n❌ Broken Links:');
    brokenLinks.forEach(link => {
      console.log(`  - ${link.url}: ${link.status || link.error}`);
    });
  }
  
  // Check for missing pages
  const missingPages = expectedPages.filter(page => 
    !workingLinks.some(link => link.url.endsWith(page))
  );
  
  if (missingPages.length > 0) {
    console.log('\n⚠️  Missing Pages:');
    missingPages.forEach(page => {
      console.log(`  - ${page}`);
    });
  }
  
  console.log('\n🎯 Recommendations:');
  if (brokenLinks.length === 0 && missingPages.length === 0) {
    console.log('✅ All pages are working correctly!');
  } else {
    console.log('1. Fix broken links by creating missing pages');
    console.log('2. Ensure all navigation links point to existing pages');
    console.log('3. Add proper error handling for 404 pages');
  }
}

analyzeWebsite().catch(console.error);
