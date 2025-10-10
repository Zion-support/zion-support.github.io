import https from 'https';
import http from 'http';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

// Configuration
const BASE_URL = 'https://ziontechgroup.com';
const MAX_DEPTH = 3;
const TIMEOUT = 10000;
const USER_AGENT = 'Mozilla/5.0 (compatible; ZionTechBot/1.0)';

// Track visited URLs and results
const visitedUrls = new Set();
const brokenLinks = [];
const missingPages = [];
const workingLinks = [];
const analysisResults = {
  totalLinks: 0,
  workingLinks: 0,
  brokenLinks: 0,
  missingPages: 0,
  errors: []
};

// Helper function to make HTTP requests
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const isHttps = urlObj.protocol === 'https:';
    const client = isHttps ? https : http;
    
    const requestOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
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

    const req = client.request(requestOptions, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
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
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const links = [];

  // Extract all anchor tags
  const anchorTags = document.querySelectorAll('a[href]');
  anchorTags.forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href) {
      try {
        const absoluteUrl = new URL(href, baseUrl).href;
        const linkText = anchor.textContent.trim();
        links.push({
          url: absoluteUrl,
          text: linkText,
          element: anchor.outerHTML
        });
      } catch (error) {
        console.log(`Invalid URL: ${href}`);
      }
    }
  });

  // Extract form actions
  const forms = document.querySelectorAll('form[action]');
  forms.forEach(form => {
    const action = form.getAttribute('action');
    if (action) {
      try {
        const absoluteUrl = new URL(action, baseUrl).href;
        links.push({
          url: absoluteUrl,
          text: 'Form Action',
          element: form.outerHTML
        });
      } catch (error) {
        console.log(`Invalid form action: ${action}`);
      }
    }
  });

  return links;
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
  if (visitedUrls.has(url) || depth>MAX_DEPTH</depth>) {
    return;
  }

  visitedUrls.add(url);
  console.log(`Analyzing: ${url} (depth: ${depth})`);

  try {
    const response = await makeRequest(url);
    analysisResults.totalLinks++;

    if (response.statusCode >= 200 && response.statusCode < 300) {
      workingLinks.push({
        url: url,
        statusCode: response.statusCode,
        depth: depth
      });
      analysisResults.workingLinks++;

      // Extract and analyze links from this page
      if (response.headers['content-type'] && response.headers['content-type'].includes('text/html')) {
        const links = extractLinks(response.body, url);
        
        for (const link of links) {
          if (isInternalUrl(link.url, BASE_URL)) {
            await analyzeUrl(link.url, depth + 1);
          }
        }
      }
    } else if (response.statusCode === 404) {
      brokenLinks.push({
        url: url,
        statusCode: response.statusCode,
        depth: depth,
        reason: 'Page not found'
      });
      analysisResults.brokenLinks++;
    } else {
      brokenLinks.push({
        url: url,
        statusCode: response.statusCode,
        depth: depth,
        reason: 'HTTP error'
      });
      analysisResults.brokenLinks++;
    }
  } catch (error) {
    console.log(`Error analyzing ${url}: ${error.message}`);
    brokenLinks.push({
      url: url,
      statusCode: 0,
      depth: depth,
      reason: error.message
    });
    analysisResults.brokenLinks++;
    analysisResults.errors.push({
      url: url,
      error: error.message
    });
  }
}

// Main analysis function
async function analyzeWebsite() {
  console.log('Starting comprehensive website analysis...');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Max Depth: ${MAX_DEPTH}`);
  console.log('---');

  try {
    // Start analysis from the homepage
    await analyzeUrl(BASE_URL);

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: BASE_URL,
      summary: analysisResults,
      workingLinks: workingLinks,
      brokenLinks: brokenLinks,
      missingPages: missingPages,
      errors: analysisResults.errors
    };

    // Save detailed report
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    
    // Generate summary report
    console.log('\n=== ANALYSIS SUMMARY ===');
    console.log(`Total Links Analyzed: ${analysisResults.totalLinks}`);
    console.log(`Working Links: ${analysisResults.workingLinks}`);
    console.log(`Broken Links: ${analysisResults.brokenLinks}`);
    console.log(`Errors: ${analysisResults.errors.length}`);
    
    if (brokenLinks.length > 0) {
      console.log('\n=== BROKEN LINKS ===');
      brokenLinks.forEach(link => {
        console.log(`❌ ${link.url} (${link.statusCode}) - ${link.reason}`);
      });
    }

    if (analysisResults.errors.length > 0) {
      console.log('\n=== ERRORS ===');
      analysisResults.errors.forEach(error => {
        console.log(`⚠️  ${error.url}: ${error.error}`);
      });
    }

    // Generate recommendations
    const recommendations = [];
    
    if (brokenLinks.length > 0) {
      recommendations.push('Fix broken links by updating URLs or creating missing pages');
    }
    
    if (analysisResults.errors.length > 0) {
      recommendations.push('Investigate and fix connection errors');
    }

    if (recommendations.length > 0) {
      console.log('\n=== RECOMMENDATIONS ===');
      recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    }

    console.log('\nDetailed report saved to: website-analysis-report.json');
    
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}

// Run the analysis
analyzeWebsite();