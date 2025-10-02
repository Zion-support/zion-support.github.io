#!/usr/bin/env node

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

// Configuration
const BASE_URL = 'http://localhost:3000';
const OUTPUT_FILE = 'website-analysis-report.json';

// Track visited URLs to avoid infinite loops
const visitedUrls = new Set();
const brokenLinks = [];
const missingPages = [];
const allLinks = new Set();

// Pages that should exist based on router.tsx
const expectedPages = [
  '/',
  '/about',
  '/services',
  '/solutions',
  '/resources',
  '/ai-solutions',
  '/pricing',
  '/demo',
  '/support',
  '/contact',
  '/case-studies',
  '/blog',
  '/services/ai-workflow-automation',
  '/services/ai-virtual-assistant',
  '/services/ai-data-analytics',
  '/services/ai-intelligent-document-processing',
  '/services/real-time-cognitive-automation',
  '/services/advanced-cybersecurity-ai',
  '/services/ai-content-generator',
  '/services/smart-appointment-scheduler',
  '/case-studies/global-retail-ai-transformation-2025',
  '/case-studies/healthcare-ai-transformation-2025',
  '/case-studies/global-fintech-ai-transformation-2025',
  '/case-studies/global-telecom-cognitive-transformation-4-7-billion',
  '/blog/ai-2025-oct-multimodal-enterprise-intelligence',
  '/blog/ai-2025-oct-adaptive-learning-platforms',
  '/blog/ai-2025-oct-cognitive-automation-enterprise-revolution',
  '/blog/ai-2025-oct-enterprise-ai-transformation-success-strategies',
  '/blog/ai-2025-oct-next-gen-intelligent-automation-breakthrough',
  '/blog/ai-2025-multiagent-enterprise-orchestration-revolution',
  '/blog/ai-2025-cognitive-computing-enterprise-transformation'
];

async function checkUrl(url) {
  try {
    console.log(`Checking: ${url}`);
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Website-Analyzer/1.0)'
      }
    });
    
    if (response.status === 200) {
      return { status: response.status, content: response.data };
    } else {
      return { status: response.status, content: null };
    }
  } catch (error) {
    console.log(`Error checking ${url}: ${error.message}`);
    return { status: error.response?.status || 'ERROR', content: null };
  }
}

function extractLinks(html, baseUrl) {
  const $ = cheerio.load(html);
  const links = [];
  
  // Extract all links
  $('a[href]').each((i, element) => {
    const href = $(element).attr('href');
    if (href) {
      let fullUrl;
      
      // Handle different types of URLs
      if (href.startsWith('http://') || href.startsWith('https://')) {
        // External links - skip for now
        return;
      } else if (href.startsWith('/')) {
        // Absolute internal links
        fullUrl = `${BASE_URL}${href}`;
      } else if (href.startsWith('#')) {
        // Anchor links - skip
        return;
      } else {
        // Relative links
        const basePath = new URL(baseUrl).pathname;
        const baseDir = basePath.substring(0, basePath.lastIndexOf('/'));
        fullUrl = `${BASE_URL}${baseDir}/${href}`;
      }
      
      links.push({
        href: href,
        fullUrl: fullUrl,
        text: $(element).text().trim()
      });
    }
  });
  
  return links;
}

async function analyzePage(url) {
  if (visitedUrls.has(url)) {
    return;
  }
  
  visitedUrls.add(url);
  
  const result = await checkUrl(url);
  
  if (result.status === 200 && result.content) {
    // Extract links from this page
    const links = extractLinks(result.content, url);
    
    for (const link of links) {
      allLinks.add(link.fullUrl);
      
      // Check if the linked page exists
      if (!visitedUrls.has(link.fullUrl)) {
        const linkResult = await checkUrl(link.fullUrl);
        if (linkResult.status !== 200) {
          brokenLinks.push({
            from: url,
            to: link.fullUrl,
            text: link.text,
            status: linkResult.status
          });
        } else {
          // Recursively analyze the linked page
          await analyzePage(link.fullUrl);
        }
      }
    }
  } else {
    // This page is broken or missing
    const pathname = new URL(url).pathname;
    if (expectedPages.includes(pathname)) {
      missingPages.push({
        url: url,
        pathname: pathname,
        status: result.status
      });
    }
  }
}

async function generateReport() {
  console.log('Starting website analysis...');
  console.log(`Base URL: ${BASE_URL}`);
  
  // Start analysis from the home page
  await analyzePage(BASE_URL);
  
  // Check all expected pages
  console.log('\nChecking expected pages...');
  for (const page of expectedPages) {
    const url = `${BASE_URL}${page}`;
    if (!visitedUrls.has(url)) {
      const result = await checkUrl(url);
      if (result.status !== 200) {
        missingPages.push({
          url: url,
          pathname: page,
          status: result.status
        });
      }
    }
  }
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    summary: {
      totalPagesChecked: visitedUrls.size,
      brokenLinksFound: brokenLinks.length,
      missingPagesFound: missingPages.length,
      totalLinksFound: allLinks.size
    },
    brokenLinks: brokenLinks,
    missingPages: missingPages,
    visitedUrls: Array.from(visitedUrls),
    allLinks: Array.from(allLinks)
  };
  
  // Save report to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n=== WEBSITE ANALYSIS REPORT ===');
  console.log(`Total pages checked: ${report.summary.totalPagesChecked}`);
  console.log(`Broken links found: ${report.summary.brokenLinksFound}`);
  console.log(`Missing pages found: ${report.summary.missingPagesFound}`);
  console.log(`Total links found: ${report.summary.totalLinksFound}`);
  
  if (brokenLinks.length > 0) {
    console.log('\n=== BROKEN LINKS ===');
    brokenLinks.forEach(link => {
      console.log(`❌ ${link.from} -> ${link.to} (${link.status})`);
    });
  }
  
  if (missingPages.length > 0) {
    console.log('\n=== MISSING PAGES ===');
    missingPages.forEach(page => {
      console.log(`❌ ${page.pathname} (${page.status})`);
    });
  }
  
  console.log(`\nDetailed report saved to: ${OUTPUT_FILE}`);
}

// Run the analysis
generateReport().catch(console.error);