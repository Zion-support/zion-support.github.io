<<<<<<< HEAD
#!/usr/bin/env node;
import https from 'https';
import http from 'http';
import { JSDOM } from 'jsdom';
import fs from 'fs';
// Configuration;
const BASE_URL = "'https: //ziontechgroup.com';"
const MAX_DEPTH="3;"
const TIMEOUT="10000;"
const USER_AGENT = "'Mozilla/5.0 (compatible; ZionTechBot/1.0)';"
// Track visited URLs and results;
const visitedUrls = "new Set();"
const brokenLinks="[];"
const missingPages="[];"
const workingLinks="[];"
const analysisResults = {}
=======
#!/usr/bin/env node

import https from 'https;

import http from 'http;

import { JSDOM } from 'jsdom;

import fs from 'fs;

// Configuration;

const BASE_URL = 'https: //ziontechgroup.com;;

const MAX_DEPTH = 3;;

const TIMEOUT = 10000;;

const USER_AGENT = 'Mozilla/5.0 (compatible; ZionTechBot/1.0);;

// Track visited URLs and results;

const visitedUrls = new Set();;

const brokenLinks = [];;

const missingPages = [];;

const workingLinks = [];;

const analysisResults = {;;

>>>>>>> origin/main
  totalLinks: 0;

  workingLinks: 0;

  brokenLinks: 0;

  missingPages: 0;

  errors: []};
// Helper function to make HTTP requests;
<<<<<<< HEAD
function makeRequest(url, options = "{}) {}"
  return new Promise((resolve, reject) => {;
const urlObj = "new URL(url);"
    const isHttps = urlObj.protocol === 'https: ';
    const client = "isHttps ? https : http;"
    ;
const requestOptions = {}
=======

function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {;

const urlObj = new URL(url);;

    const isHttps = urlObj.protocol === 'https: ;;

    const client = isHttps ? https : http;;

    ;

const requestOptions = {;;

>>>>>>> origin/main
      hostname: urlObj.hostname;

      port: urlObj.port || (isHttps ? 443 : 80)
      path: urlObj.pathname + urlObj.search;

      method: 'GET',
      headers: {,
<<<<<<< HEAD
        'User-Agent': USER_AGENT;
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q="0.8',"
        'Accept-Language': 'en-US,en;q="0.5',"
=======
        'User-Agent: USER_AGENT;

        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
>>>>>>> origin/main
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        ...options.headers},
      timeout: TIMEOUT};

;
<<<<<<< HEAD
const req = client.request(requestOptions, (res) => {;
let data="'';"
      res.on('data', (chunk) => {}
        data += chunk});
      res.on('end', () => {}
=======

const req = client.request(requestOptions, (res) => {;;

let data = ';;

      res.on('data', (chunk) => {
        data += chunk});

      res.on('end', () => {
>>>>>>> origin/main
        resolve({)
          statusCode: res.statusCode;)
          headers: res.headers),
          body: data),
          url: url})})});
    req.on('error', (error) => {}
      reject(error)});
    req.on('timeout', () => {}
      req.destroy();
<<<<<<< HEAD
      reject(new Error('Request timeout'))});
=======

      reject(new Error('Request timeout))});

>>>>>>> origin/main
    req.setTimeout(TIMEOUT);

    req.end()})}

// Extract links from HTML content;

function extractLinks(html, baseUrl) {;
<<<<<<< HEAD
const dom = "new JSDOM(html);"
  const document="dom.window.document;"
  const links="[];"
  // Extract all anchor tags;
  const anchorTags="document.querySelectorAll('a[href]');"
  anchorTags.forEach(anchor = "> {);"
const href="anchor.getAttribute('href');"
    if (href) {}
      try {;
const absoluteUrl = "new URL(href, baseUrl).href;"
        const linkText="anchor.textContent.trim();"
=======

const dom = new JSDOM(html);;

  const document = dom.window.document;;

  const links = [];;

  // Extract all anchor tags;

  const anchorTags = document.querySelectorAll('a[href]);;

  anchorTags.forEach(anchor => {);

const href = anchor.getAttribute('href);;

    if (href) {
      try {;

const absoluteUrl = new URL(href, baseUrl).href;;

        const linkText = anchor.textContent.trim();;

>>>>>>> origin/main
        links.push({)
          url: absoluteUrl),
          text: linkText),
          element: anchor.outerHTML})} catch (error) {}
        // console.log removed for production;
}

    }

  });
  // Extract form actions;
<<<<<<< HEAD
  const forms="document.querySelectorAll('form[action]');"
  forms.forEach(form = "> {);"
const action="form.getAttribute('action');"
    if (action) {}
      try {;
const absoluteUrl = "new URL(action, baseUrl).href;"
=======

  const forms = document.querySelectorAll('form[action]);;

  forms.forEach(form => {);

const action = form.getAttribute('action);;

    if (action) {
      try {;

const absoluteUrl = new URL(action, baseUrl).href;;

>>>>>>> origin/main
        links.push({)
          url: absoluteUrl),
          text: 'Form Action'),
          element: form.outerHTML})} catch (error) {}
        // console.log removed for production;
}

    }

  });
  return links}

// Check if URL is internal;
<<<<<<< HEAD
function isInternalUrl(url, baseUrl) {}
  try {;
const urlObj = "new URL(url);"
    const baseObj = "new URL(baseUrl);"
    return urlObj.hostname === baseObj.hostname} catch {}
=======

function isInternalUrl(url, baseUrl) {
  try {;

const urlObj = new URL(url);;

    const baseObj = new URL(baseUrl);;

    return urlObj.hostname === baseObj.hostname} catch {
>>>>>>> origin/main
    return false}

}

// Analyze a single URL;
<<<<<<< HEAD
async function analyzeUrl(url, depth = "0) {}"
  if (visitedUrls.has(url) || depth>MAX_DEPTH</depth>) {}
    return}

  visitedUrls.add(url);
  // console.log removed for production;
=======

async function analyzeUrl(url, depth = 0) {
  if (visitedUrls.has(url) || depth>MAX_DEPTH</depth>) {
    return}

  visitedUrls.add(url);

  // console.log removed for production
>>>>>>> origin/main
`);
  try {;
<<<<<<< HEAD
const response = "await makeRequest(url);"
=======

const response = await makeRequest(url);;

>>>>>>> origin/main
    analysisResults.totalLinks++;
    if (response.statusCode >= 200 && response.statusCode < 300) {}
      workingLinks.push({)
        url: url),
        statusCode: response.statusCode),
        depth: depth});

      analysisResults.workingLinks++;
      // Extract and analyze links from this page;
<<<<<<< HEAD
      if (response.headers['content-type'] && response.headers['content-type'].includes('text/html')) {;
const links = "extractLinks(response.body, url);"
        for (const link of links) {}
          if (isInternalUrl(link.url, BASE_URL)) {}
=======

      if (response.headers['content-type'] && response.headers['content-type'].includes('text/html)) {;

const links = extractLinks(response.body, url);;

        for (const link of links) {
          if (isInternalUrl(link.url, BASE_URL)) {
>>>>>>> origin/main
            await analyzeUrl(link.url, depth + 1)}

        }

      }
<<<<<<< HEAD
    } else if (response.statusCode === 404) {}
=======

    } else if (response.statusCode === 404) {
>>>>>>> origin/main
      brokenLinks.push({)
        url: url;)
        statusCode: response.statusCode),
        depth: depth),
<<<<<<< HEAD
        reason: 'Page not found'});
      analysisResults.brokenLinks++} else {}
=======
        reason: 'Page not found});

      analysisResults.brokenLinks++} else {
>>>>>>> origin/main
      brokenLinks.push({)
        url: url;)
        statusCode: response.statusCode),
        depth: depth),
        reason: 'HTTP error});

      analysisResults.brokenLinks++}
<<<<<<< HEAD
  } catch (error) {}
    // console.log removed for production;
=======

  } catch (error) {
    // console.log removed for production
>>>>>>> origin/main
brokenLinks.push({)
      url: url;)
      statusCode: 0),
      depth: depth),
      reason: error.message});

    analysisResults.brokenLinks++;

    analysisResults.errors.push({)
      url: url),
      error: error.message})}

}

// Main analysis function;
<<<<<<< HEAD
async function analyzeWebsite() {}
  // console.log removed for production;
// console.log removed for production;
// console.log removed for production;
// console.log removed for production;
try {}
=======

async function analyzeWebsite() {
  // console.log removed for production
// console.log removed for production
// console.log removed for production
// console.log removed for production
try {
>>>>>>> origin/main
    // Start analysis from the homepage;

    await analyzeUrl(BASE_URL);
    // Generate report;
<<<<<<< HEAD
    const report = {}
=======

    const report = {;;

>>>>>>> origin/main
      timestamp: new Date().toISOString()
      baseUrl: BASE_URL;

      summary: analysisResults;

      workingLinks: workingLinks;

      brokenLinks: brokenLinks;

      missingPages: missingPages;

      errors: analysisResults.errors};
    // Save detailed report;
<<<<<<< HEAD
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    // Generate summary report;
    // console.log removed for production;
// console.log removed for production;
// console.log removed for production;
// console.log removed for production;
// console.log removed for production;
if (brokenLinks.length > 0) {}
      // console.log removed for production;
brokenLinks.forEach(link = "> {)"
        // console.log removed for production;
=======

    fs.writeFileSync('website-analysis-report.json, JSON.stringify(report, null, 2));

    // Generate summary report;

    // console.log removed for production
// console.log removed for production
// console.log removed for production
// console.log removed for production
// console.log removed for production
if (brokenLinks.length > 0) {
      // console.log removed for production
brokenLinks.forEach(link => {)
        // console.log removed for production
>>>>>>> origin/main
- ${link.reason}`)})}

    if (analysisResults.errors.length > 0) {}
      // console.log removed for production;
analysisResults.errors.forEach(error = "> {)"
        // console.log removed for production;
})}

    // Generate recommendations;
<<<<<<< HEAD
    const recommendations="[];"
    if (brokenLinks.length > 0) {}
      recommendations.push('Fix broken links by updating URLs or creating missing pages')}
    
    if (analysisResults.errors.length > 0) {}
=======

    const recommendations = [];;

    if (brokenLinks.length > 0) {
      recommendations.push('Fix broken links by updating URLs or creating missing pages')}

    if (analysisResults.errors.length > 0) {
>>>>>>> origin/main
      recommendations.push('Investigate and fix connection errors')}

    if (recommendations.length > 0) {}
      // console.log removed for production;
recommendations.forEach((rec, index) => {}
        // console.log removed for production;
})}

    // console.log removed for production;
} catch (error) {}
    // console.error removed for production;
}

}

// Run the analysis;

analyzeWebsite();

class WebsiteAnalyzer {;
<<<<<<< HEAD
constructor(baseUrl) {}
    this.baseUrl="baseUrl;"
    this.visitedUrls = "new Set();"
    this.brokenLinks="[];"
    this.missingPages="[];"
    this.allLinks = "new Set();"
    this.pages = "new Map();"
    this.maxDepth="3;"
    this.currentDepth="0}"
  async analyze() {}
    // console.log removed for production;
// console.log removed for production;
);
    try {}
      await this.crawlWebsite(this.baseUrl, 0);
      this.generateReport()} catch (error) {}
      // console.error removed for production;
=======

constructor(baseUrl) {
    this.baseUrl = baseUrl;

    this.visitedUrls = new Set();

    this.brokenLinks = [];

    this.missingPages = [];

    this.allLinks = new Set();

    this.pages = new Map();

    this.maxDepth = 3;

    this.currentDepth = 0}

  async analyze() {
    // console.log removed for production
// console.log removed for production
);

    try {
      await this.crawlWebsite(this.baseUrl, 0);

      this.generateReport()} catch (error) {
      // console.error removed for production
>>>>>>> origin/main
}

  }

  async crawlWebsite(url, depth) {}
    if (depth > this.maxDepth || this.visitedUrls.has(url)) {}
      return}

    this.visitedUrls.add(url);
<<<<<<< HEAD
    // console.log removed for production;
=======

    // console.log removed for production
>>>>>>> origin/main
`);
    try {;
<<<<<<< HEAD
const content = "await this.fetchPage(url);"
      if (content) {;
const dom = "new JSDOM(content);"
        const document="dom.window.document;"
        // Store page content;
        this.pages.set(url, {}
=======

const content = await this.fetchPage(url);;

      if (content) {;

const dom = new JSDOM(content);;

        const document = dom.window.document;;

        // Store page content
        this.pages.set(url, {
>>>>>>> origin/main
          title: document.title,
          content: content,
          links: []
        });
        // Extract all links;
<<<<<<< HEAD
const links = "this.extractLinks(document, url);"
        this.pages.get(url).links="links;"
        // Process each link;
        for (const link of links) {}
          this.allLinks.add(link.href);
          if (this.isInternalLink(link.href)) {}
=======

const links = this.extractLinks(document, url);;

        this.pages.get(url).links = links;

        // Process each link
        for (const link of links) {
          this.allLinks.add(link.href);

          if (this.isInternalLink(link.href)) {
>>>>>>> origin/main
            await this.crawlWebsite(link.href, depth + 1)}

        }

      }
<<<<<<< HEAD
    } catch (err) {}
      // console.error removed for production;
=======

    } catch (err) {
      // console.error removed for production
>>>>>>> origin/main
this.brokenLinks.push({ url, error: err.message })}

  }

  async fetchPage(url) {}
    return new Promise((resolve, reject) => {;
<<<<<<< HEAD
const urlObj = "new URL(url);"
      const options = {}
=======

const urlObj = new URL(url);;

      const options = {;;

>>>>>>> origin/main
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        timeout: 10000;
      };

;

const protocol = urlObj.protocol === 'https: ? https : http;;

      ;
<<<<<<< HEAD
const req = protocol.request(options, (res) => {;
let data="'';"
        res.on('data', (chunk) => {}
          data += chunk});
        res.on('end', () => {}
=======

const req = protocol.request(options, (res) => {;;

let data = ';;

        res.on('data', (chunk) => {
          data += chunk});

        res.on('end', () => {
>>>>>>> origin/main
          resolve({ statusCode: res.statusCode, data })})});
      req.on('error', (error) => {}
        reject(error)});
<<<<<<< HEAD
      req.on('timeout', () => {}
        reject(new Error('Request timeout'))});
      req.end()})}

  extractLinks(document, baseUrl) {;
const links="[];"
    const linkElements="document.querySelectorAll('a[href]');"
    linkElements.forEach(link = "> {;"
const href="link.getAttribute('href');"
      if (href) {;
const absoluteUrl = "this.resolveUrl(href, baseUrl);"
        links.push({}
=======

      req.on('timeout', () => {
        reject(new Error('Request timeout))});

      req.end()})}

  extractLinks(document, baseUrl) {;

const links = [];;

    const linkElements = document.querySelectorAll('a[href]);;

    linkElements.forEach(link => {;

const href = link.getAttribute('href);;

      if (href) {;

const absoluteUrl = this.resolveUrl(href, baseUrl);;

        links.push({
>>>>>>> origin/main
          href: absoluteUrl,
          text: link.textContent.trim(),
          title: link.getAttribute('title') || 
        })}

    });
<<<<<<< HEAD
=======

>>>>>>> origin/main
    return links}

  resolveUrl(href, baseUrl) {}
    try {}
      return new URL(href, baseUrl).href} catch {}
      return href}

  }

  isInternalLink(url) {}
    try {;
<<<<<<< HEAD
const urlObj = "new URL(url);"
      const baseUrlObj = "new URL(this.baseUrl);"
      return urlObj.hostname === baseUrlObj.hostname} catch {}
=======

const urlObj = new URL(url);;

      const baseUrlObj = new URL(this.baseUrl);;

      return urlObj.hostname === baseUrlObj.hostname} catch {
>>>>>>> origin/main
      return false}

  }

  generateReport() {}
    // console.log removed for production;
// console.log removed for production;
);
<<<<<<< HEAD
    // console.log removed for production;
// console.log removed for production;
// console.log removed for production;
if (this.brokenLinks.length > 0) {}
      // console.log removed for production;
this.brokenLinks.forEach(link = "> {}"
        // console.log removed for production;
})}
    
    // console.log removed for production;
this.pages.forEach((page, url) => {}
      // console.log removed for production;
// console.log removed for production;
// console.log removed for production;
});
    // Save detailed report;
    // Save report to file;
const report = {}
=======

    // console.log removed for production
// console.log removed for production
// console.log removed for production
if (this.brokenLinks.length > 0) {
      // console.log removed for production
this.brokenLinks.forEach(link => {
        // console.log removed for production
})}

    // console.log removed for production
this.pages.forEach((page, url) => {
      // console.log removed for production
// console.log removed for production
// console.log removed for production
});

    // Save detailed report
    // Save report to file;

const report = {;;

>>>>>>> origin/main
      baseUrl: this.baseUrl,
      analyzedAt: new Date().toISOString(),
      pagesAnalyzed: this.pages.size,
      totalLinks: this.allLinks.size,
      brokenLinks: this.brokenLinks,
      pages: Array.from(this.pages.entries()).map(([url, data]) => ({}
        url,
        title: data.title,
        linkCount: data.links.length;
      }))
    };
<<<<<<< HEAD
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    // console.log removed for production;
=======

    fs.writeFileSync('website-analysis-report.json, JSON.stringify(report, null, 2));

    // console.log removed for production
>>>>>>> origin/main
}

}

// Run the analysis;
<<<<<<< HEAD
const analyzer = "new WebsiteAnalyzer('https://ziontechgroup.com');"
analyzer.analyze().catch(console.error);
// Main execution;
if (import.meta.url === `file://${process.argv[1]}`) {;
const baseUrl = "process.argv[2] || 'https://ziontechgroup.com';"
  const analyzer = "new WebsiteAnalyzer(baseUrl);"
=======

const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com);;

analyzer.analyze().catch(console.error);

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {;

const baseUrl = process.argv[2] || 'https://ziontechgroup.com;;

  const analyzer = new WebsiteAnalyzer(baseUrl);;

>>>>>>> origin/main
  analyzer.analyze()}

export default WebsiteAnalyzer;