#!/usr/bin/env node

import fs from 'fs';
import https from 'https';
import { URL } from 'url';

// Configuration
const BASE_URL = 'https://ziontechgroup.com';
const MAX_DEPTH = 3;
const TIMEOUT = 10000;
const USER_AGENT = 'Mozilla/5.0 (compatible; WebsiteAudit/1.0)';

// Results storage
const results = {
  workingLinks: new Set(),
  brokenLinks: new Set(),
  missingPages: new Set(),
  redirects: new Set(),
  errors: new Set(),
  analyzedUrls: new Set(),
  sitemap: new Map()
};

// HTTP request helper
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const requestOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        ...options.headers
      },
      timeout: TIMEOUT
    };

    const req = https.request(requestOptions, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data,
          url: url
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.setTimeout(TIMEOUT);
    req.end();
  });
}

// Extract links from HTML content
function extractLinks(html, baseUrl) {
  const links = new Set();
  
  // Extract href attributes
  const hrefRegex = /href\s*=\s*["']([^"']+)["']/gi;
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    const link = match[1];
    if (link && !link.startsWith('#') && !link.startsWith('mailto:') && !link.startsWith('tel:')) {
      try {
        const absoluteUrl = new URL(link, baseUrl).href;
        links.add(absoluteUrl);
      } catch (error) {
        // Skip invalid URLs
      }
    }
  }
  
  // Extract src attributes for images, scripts, etc.
  const srcRegex = /src\s*=\s*["']([^"']+)["']/gi;
  while ((match = srcRegex.exec(html)) !== null) {
    const link = match[1];
    if (link && !link.startsWith('data:')) {
      try {
        const absoluteUrl = new URL(link, baseUrl).href;
        links.add(absoluteUrl);
      } catch (error) {
        // Skip invalid URLs
      }
    }
  }
  
  return Array.from(links);
}

// Check if URL is internal
function isInternalUrl(url, baseUrl) {
  try {
    const urlObj = new URL(url);
    const baseObj = new URL(baseUrl);
    return urlObj.hostname === baseObj.hostname;
  } catch {
    return false;
  }
}

// Analyze a single URL
async function analyzeUrl(url, depth = 0) {
  if (results.analyzedUrls.has(url) || depth > MAX_DEPTH) {
    return;
  }
  
  results.analyzedUrls.add(url);
  console.log(`🔍 Analyzing: ${url} (depth: ${depth})`);
  
  try {
    const response = await makeRequest(url);
    
    if (response.statusCode >= 200 && response.statusCode < 300) {
      results.workingLinks.add(url);
      
      // Extract links from HTML content
      const links = extractLinks(response.data, url);
      
      // Process internal links
      for (const link of links) {
        if (isInternalUrl(link, BASE_URL)) {
          // Normalize URL
          const normalizedUrl = link.replace(/\/$/, '') || link;
          results.sitemap.set(normalizedUrl, {
            url: normalizedUrl,
            title: extractTitle(response.data),
            status: response.statusCode,
            depth: depth,
            lastChecked: new Date().toISOString()
          });
          
          // Recursively analyze internal links
          if (depth < MAX_DEPTH) {
            await analyzeUrl(normalizedUrl, depth + 1);
          }
        }
      }
      
    } else if (response.statusCode >= 300 && response.statusCode < 400) {
      results.redirects.add(url);
      console.log(`🔄 Redirect: ${url} -> ${response.statusCode}`);
      
    } else if (response.statusCode >= 400) {
      results.brokenLinks.add(url);
      console.log(`❌ Broken: ${url} (${response.statusCode})`);
    }
    
  } catch (error) {
    results.errors.add(url);
    console.log(`💥 Error: ${url} - ${error.message}`);
  }
}

// Extract page title from HTML
function extractTitle(html) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : 'No title';
}

// Generate sitemap from local files
function generateLocalSitemap() {
  const sitemap = new Map();
  
  function scanDirectory(dir, basePath = '') {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = `${dir}/${item}`;
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath, `${basePath}/${item}`);
        } else if (item === 'page.tsx' || item === 'page.ts') {
          const route = basePath || '/';
          const url = `${BASE_URL}${route}`;
          sitemap.set(url, {
            url: url,
            title: `Page: ${route}`,
            status: 'local',
            depth: 0,
            lastChecked: new Date().toISOString(),
            localFile: fullPath
          });
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory('./app');
  return sitemap;
}

// Main analysis function
async function analyzeWebsite() {
  console.log('🚀 Starting comprehensive website analysis...');
  console.log(`📊 Target: ${BASE_URL}`);
  console.log(`🔍 Max depth: ${MAX_DEPTH}`);
  console.log(`⏱️  Timeout: ${TIMEOUT}ms`);
  console.log('');
  
  // Generate local sitemap first
  console.log('📋 Generating local sitemap...');
  const localSitemap = generateLocalSitemap();
  console.log(`📄 Found ${localSitemap.size} local pages`);
  
  // Analyze main page first
  await analyzeUrl(BASE_URL);
  
  // Analyze all local pages
  for (const [url, pageInfo] of localSitemap) {
    if (!results.analyzedUrls.has(url)) {
      await analyzeUrl(url);
    }
  }
  
  // Generate report
  console.log('\n📊 Analysis Complete!');
  console.log('='.repeat(50));
  console.log(`✅ Working links: ${results.workingLinks.size}`);
  console.log(`❌ Broken links: ${results.brokenLinks.size}`);
  console.log(`🔄 Redirects: ${results.redirects.size}`);
  console.log(`💥 Errors: ${results.errors.size}`);
  console.log(`📄 Total pages analyzed: ${results.analyzedUrls.size}`);
  
  // Save detailed results
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    summary: {
      workingLinks: results.workingLinks.size,
      brokenLinks: results.brokenLinks.size,
      redirects: results.redirects.size,
      errors: results.errors.size,
      totalAnalyzed: results.analyzedUrls.size
    },
    workingLinks: Array.from(results.workingLinks),
    brokenLinks: Array.from(results.brokenLinks),
    redirects: Array.from(results.redirects),
    errors: Array.from(results.errors),
    sitemap: Object.fromEntries(results.sitemap),
    localSitemap: Object.fromEntries(localSitemap)
  };
  
  fs.writeFileSync('./website-analysis-report.json', JSON.stringify(report, null, 2));
  console.log('\n💾 Detailed report saved to: website-analysis-report.json');
  
  // Identify missing pages
  const missingPages = [];
  for (const [url, pageInfo] of localSitemap) {
    if (!results.workingLinks.has(url) && !results.brokenLinks.has(url)) {
      missingPages.push(url);
    }
  }
  
  if (missingPages.length > 0) {
    console.log('\n📝 Missing pages that need to be created:');
    missingPages.forEach(url => console.log(`  - ${url}`));
  }
  
  return report;
}

// Run the analysis
analyzeWebsite().catch(console.error);