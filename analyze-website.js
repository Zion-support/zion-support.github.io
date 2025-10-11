#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { URL } from 'url';

const baseUrl = 'https://ziontechgroup.com';
const visitedUrls = new Set();
const brokenLinks = [];
const missingPages = [];
const allLinks = new Set();

// Function to make HTTP requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
      }
    };

    const client = urlObj.protocol === 'https:' ? https : http;
    const req = client.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    });

    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.end();
  });
}

// Function to extract links from HTML
function extractLinks(html, baseUrl) {
  const links = [];
  const linkRegex = /href=["']([^"']+)["']/g;
  const srcRegex = /src=["']([^"']+)["']/g;
  
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    links.push(match[1]);
  }
  while ((match = srcRegex.exec(html)) !== null) {
    links.push(match[1]);
  }
  
  return links.map(link => {
    if (link.startsWith('http')) return link;
    if (link.startsWith('//')) return 'https:' + link;
    if (link.startsWith('/')) return baseUrl + link;
    return baseUrl + '/' + link;
  });
}

// Function to check if a URL is valid
async function checkUrl(url) {
  try {
    const response = await makeRequest(url);
    return {
      url,
      status: response.status,
      valid: response.status >= 200 && response.status < 400
    };
  } catch (error) {
    return {
      url,
      status: 'ERROR',
      valid: false,
      error: error.message
    };
  }
}

// Function to crawl website
async function crawlWebsite(startUrl, maxDepth = 3, currentDepth = 0) {
  if (currentDepth >= maxDepth || visitedUrls.has(startUrl)) {
    return;
  }

  visitedUrls.add(startUrl);
  console.log(`Crawling: ${startUrl} (depth: ${currentDepth})`);

  try {
    const response = await makeRequest(startUrl);
    
    if (response.status >= 200 && response.status < 400) {
      const links = extractLinks(response.data, baseUrl);
      
      for (const link of links) {
        allLinks.add(link);
        
        // Only crawl internal links
        if (link.startsWith(baseUrl)) {
          await crawlWebsite(link, maxDepth, currentDepth + 1);
        }
      }
    } else {
      brokenLinks.push({
        url: startUrl,
        status: response.status,
        depth: currentDepth
      });
    }
  } catch (error) {
    brokenLinks.push({
      url: startUrl,
      status: 'ERROR',
      error: error.message,
      depth: currentDepth
    });
  }
}

// Main analysis function
async function analyzeWebsite() {
  console.log('Starting website analysis...');
  console.log(`Base URL: ${baseUrl}`);
  
  // Start crawling
  await crawlWebsite(baseUrl);
  
  console.log('\n=== ANALYSIS RESULTS ===');
  console.log(`Total URLs found: ${allLinks.size}`);
  console.log(`URLs crawled: ${visitedUrls.size}`);
  console.log(`Broken links found: ${brokenLinks.length}`);
  
  if (brokenLinks.length > 0) {
    console.log('\n=== BROKEN LINKS ===');
    brokenLinks.forEach(link => {
      console.log(`❌ ${link.url} - Status: ${link.status}${link.error ? ` - Error: ${link.error}` : ''}`);
    });
  }
  
  // Check for common missing pages
  const commonPages = [
    '/about',
    '/contact',
    '/services',
    '/pricing',
    '/blog',
    '/careers',
    '/privacy',
    '/terms',
    '/cookies',
    '/sitemap',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/tutorials',
    '/consultation',
    '/demo',
    '/support',
    '/case-studies'
  ];
  
  console.log('\n=== CHECKING COMMON PAGES ===');
  for (const page of commonPages) {
    const fullUrl = baseUrl + page;
    const result = await checkUrl(fullUrl);
    if (!result.valid) {
      missingPages.push({
        page,
        url: fullUrl,
        status: result.status
      });
      console.log(`❌ Missing: ${page} - Status: ${result.status}`);
    } else {
      console.log(`✅ Found: ${page} - Status: ${result.status}`);
    }
  }
  
  // Check navigation links from the codebase
  const navigationLinks = [
    '/ai-analytics',
    '/ai-automation', 
    '/ai-chatbot-builder',
    '/ai-cybersecurity',
    '/cloud-infrastructure',
    '/cybersecurity-solutions',
    '/web-development',
    '/mobile-development',
    '/team'
  ];
  
  console.log('\n=== CHECKING NAVIGATION LINKS ===');
  for (const link of navigationLinks) {
    const fullUrl = baseUrl + link;
    const result = await checkUrl(fullUrl);
    if (!result.valid) {
      missingPages.push({
        page: link,
        url: fullUrl,
        status: result.status
      });
      console.log(`❌ Missing: ${link} - Status: ${result.status}`);
    } else {
      console.log(`✅ Found: ${link} - Status: ${result.status}`);
    }
  }
  
  console.log('\n=== SUMMARY ===');
  console.log(`Total broken links: ${brokenLinks.length}`);
  console.log(`Total missing pages: ${missingPages.length}`);
  
  return {
    brokenLinks,
    missingPages,
    allLinks: Array.from(allLinks),
    visitedUrls: Array.from(visitedUrls)
  };
}

// Run the analysis
analyzeWebsite().catch(console.error);