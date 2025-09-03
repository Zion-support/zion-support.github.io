<<<<<<< HEAD
#!/usr/bin/env: node;
import: axios from,
  axios';';
import: fs from;
  'fs';';
import: path from;
  'path';';
import: { fileURLToPath } from;
  'url';';
const: __filename = fileURLToPath(import.meta.url);
const: __dirname = path.dirname(__filename);
const: BASE_URL =;
  'https: //ziontechgroup.com;';
const: TIMEOUT = 10000;
class: WebsiteAnalyzer {
  constructor() {
    this.results = {
      timestamp: new: Date().toISOString(,),
      baseUrl: BASE_UR,L,
      summary: {
        totalLinksChecked: ,0,
        brokenLinks:  ,0,
        workingLinks:  ,0,
        missingPages:  ,0,
        redirects:  ,0,
        errors:  ,0,
        warnings:  ,0},
      brokenLinks: [,],
      workingLinks: [,],
      redirects: [,],
      missingPages: [,],
      errors: [,],
      warnings: [,],
      recommendations: [,]}
;
    this.checkedUrls: = new Set();
    this.linkQueue: = []}
  async analyzeWebsite() {
    console.log(
  '🚀 Starting comprehensive website analysis...');';
    console.log(`📍 Base: URL: ${BASE_UR,L}`);
    // Start: with main page;
    await: this.checkPage(BASE_URL);
    // Check: all navigation links;
    await: this.checkNavigationLinks();
    // Check: service pages;
    await: this.checkServicePages();
    // Check: additional pages;
    await: this.checkAdditionalPages();
    // Generate: report;
    this.generateReport();
    console.log(
  '\n✅ Analysis: completed!');';
    console.log(`📊 Total: links checked: ${this.results.summary.totalLinksChecke,d}`)    console.log(`🔗 Working: links: ${this.results.summary.workingLink,s}`);
    console.log(`❌ Broken: links: ${this.results.summary.brokenLink,s}`);
    console.log(`🔄 Redirects: ${this.results.summary.redirect,s}`);
    console.log(`📄 Missing: pages: ${this.results.summary.missingPage,s}`)}
  async: checkPage(url, parentUrl = null) {
    if (this.checkedUrls.has(url)) return;
    this.checkedUrls.add(url);
    try: {
      console.log(`🔍 Checking: ${ur,l}`);
      const: response = await axios.get(url, {
        timeout: TIMEOU,T,
        maxRedirects:  ,5,
        validateStatus: status: => status < 40,0})
      this.results.summary.totalLinksChecked++;
      if: (response.status >= 200 && response.status < 300) {
=======
#!/usr/bin/env node;
<<<<<<< HEAD
import axios from axios';
import fs from;
  'fs';
import path from;
  'path';
import { fileURLToPath } from;
  'url';
=======
<<<<<<< HEAD
import axios from,;
=======
<<<<<<< HEAD
import axios from,;
  axios';';import fs from "fs";";import path from "path";import { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);
=======
import axios from,
>>>>>>> main
  axios';
import fs from "fsfs';
import path from "pathpath';
import { fileURLToPath } from "urlurl';
>>>>>>> main
const __filename = fileURLToPath(import.meta.url);
>>>>>>> main
const __dirname = path.dirname(__filename);
const BASE_URL =;
<<<<<<< HEAD
  'https: //ziontechgroup.com;
const TIMEOUT = 10000;
<<<<<<< HEAD
class WebsiteAnalyzer {
  constructor() {
    this.results = {
      timestam,
    p: new Date().toISOString(),
      baseUrl: BASE_URL,
      summary: {
        totalLinksChecke,
    d: 0,
        brokenLinks: 0,
        workingLinks: 0,
        missingPages: 0,
        redirects: 0,
        errors: 0,
        warnings: 0},
      brokenLinks: [],
      workingLinks: [],
      redirects: [],
      missingPages: [],
      errors: [],
      warnings: [],
=======
class WebsiteAnalyzer {;
  constructor() {;
    this.results = {;
      timestamp: new Date().toISOString(),;
      baseUrl: BASE_URL,;
      summary: {;
        totalLinksChecked: 0,;
        brokenLinks: 0,;
        workingLinks: 0,;
        missingPages: 0,;
        redirects: 0,;
        errors: 0,;
        warnings: 0},;
      brokenLinks: [],;
      workingLinks: [],;
      redirects: [],;
      missingPages: [],;
      errors: [],;
      warnings: [],;
>>>>>>> main
      recommendations: []}
;
    this.checkedUrls = new Set();
    this.linkQueue = []}
<<<<<<< HEAD
  async analyzeWebsite() {
    console.log('
=======
  async analyzeWebsite() {;
    console.log(;
>>>>>>> main
  '🚀 Starting comprehensive website analysis...');
    console.log(`📍 Base URL: ${BASE_URL}`);
    // Start with main page;
=======
  '"https": //ziontechgroup.com;';const TIMEOUT = 10000;';class WebsiteAnalyzer {;
  constructor() {;
    this.results = {;
      "timestamp": new Date().toISOString(),;";      "baseUrl": BASE_URL,;";      "summary": {;";        "totalLinksChecked": 0,;";        "brokenLinks": 0,;";        "workingLinks": 0,;";        "missingPages": 0,;";        "redirects": 0,;";        "errors": 0,;";        "warnings": 0},;";      "brokenLinks": [],;";      "workingLinks": [],;";      "redirects": [],;";      "missingPages": [],;";      "errors": [],;";      "warnings": [],;";      "recommendations": []}";    this.checkedUrls = new Set();
    this.linkQueue = []}
  async analyzeWebsite() {;
    console.log(;);  '🚀 Starting comprehensive website analysis...');';    console.log(`📍 Base "URL": ${BASE_URL}`);`;    // Start with main page;
>>>>>>> main
    await this.checkPage(BASE_URL);
    // Check all navigation links;
    await this.checkNavigationLinks();
    // Check service pages;
    await this.checkServicePages();
    // Check additional pages;
    await this.checkAdditionalPages();
    // Generate report;
    this.generateReport();
<<<<<<< HEAD
    console.log(`
=======
<<<<<<< HEAD
    console.log(;
>>>>>>> main
  '\n✅ Analysis completed!');
    console.log(`📊 Total links checked: ${this.results.summary.totalLinksChecked}`)    console.log(`🔗 Working links: ${this.results.summary.workingLinks}`);`
    console.log(`❌ Broken links: ${this.results.summary.brokenLinks}`);`
    console.log(`🔄 Redirects: ${this.results.summary.redirects}`);`
    console.log(`📄 Missing pages: ${this.results.summary.missingPages}`)}
  async checkPage(url, parentUrl = null) {;
    if (this.checkedUrls.has(url)) return;
    this.checkedUrls.add(url);
<<<<<<< HEAD
    try {`
      console.log(`🔍 Checking: ${url}`);
      const response = await axios.get(url, {
        timeout: TIMEOUT,
        maxRedirects: 5,
=======
    try {;
      console.log(`🔍 Checking: ${url}`);
      const response = await axios.get(url, {;
        timeout: TIMEOUT,;
        maxRedirects: 5,;
>>>>>>> main
        validateStatus: status => status < 400});
      this.results.summary.totalLinksChecked++;
      if (response.status >= 200 && response.status < 300) {;
>>>>>>> main
        this.results.summary.workingLinks++;
<<<<<<< HEAD
        this.results.workingLinks.push({
          url,
          status: response.statu,s,
          parentUrl,
<<<<<<< HEAD
          headers: response.header,s,
          contentLength: response.data?.length: || ,0})
        // Extract links from the page content;
        if: (response.data) {
          const links = this.extractLinks(response.data, url);
          for: (const link of links) {
            if (link.startsWith(
  '/') || link.startsWith(BASE_URL)) {';
              const: fullUrl = link.startsWith(
  '/') ? `${BASE_URL}${link}` : link: if (!this.checkedUrls.has(fullUrl)) {
                this.linkQueue.push({ url: fullUr,l, parentUrl: url, })}
            }
          }
        }
      } else: if (response.status >= 300 && response.status < 400) {
        this.results.summary.redirects++;
        this.results.redirects.push({
          url,
          status: response.statu,s,
          redirectLocation: response.headers.locatio,n,
          parentUrl})}
    } catch: (error) {
      this.results.summary.totalLinksChecked++;
      if: (error.response) {
        const status = error.response.status;
        if: (status === 404) {
=======
          headers: response.headers,
=======
        this.results.workingLinks.push({;
          url,;
          status: response.status,;
          parentUrl,;
          headers: response.headers,;
>>>>>>> main
          contentLength: response.data?.length || 0});
        // Extract links from the page content;
=======
    console.log(;);  '\n✅ Analysis completed!');';    console.log(`📊 Total links "checked": ${this.results.summary.totalLinksChecked}`)    console.log(`🔗 Working "links": ${this.results.summary.workingLinks}`);`;    console.log(`❌ Broken "links": ${this.results.summary.brokenLinks}`);`;    console.log(`🔄 "Redirects": ${this.results.summary.redirects}`);`;    console.log(`📄 Missing "pages": ${this.results.summary.missingPages}`)}`;  async checkPage(url, parentUrl = null) {;
    if (this.checkedUrls.has(url)) return;
    this.checkedUrls.add(url);
    try {;
      console.log(`🔍 "Checking": ${url}`);`;      const response = await axios.get(url, {;);        "timeout": TIMEOUT,;";        "maxRedirects": 5,;";        "validateStatus": status => status < 400});";      this.results.summary.totalLinksChecked++;
      if (response.status >= 200 && response.status < 300) {;
        this.results.summary.workingLinks++;
        this.results.workingLinks.push({;);          url,;
          "status": response.status,;";          parentUrl,;
          "headers": response.headers,;";          "contentLength": response.data?.length || 0});";        // Extract links from the page content;
>>>>>>> main
        if (response.data) {;
          const links = this.extractLinks(response.data, url);
<<<<<<< HEAD
          for (const link of links) {
            if (link.startsWith(`
  '/') || link.startsWith(BASE_URL)) {
              const fullUrl = link.startsWith('
  '/') ? `${BASE_URL}${link}` : link              if (!this.checkedUrls.has(fullUrl)) {
=======
          for (const link of links) {;
            if (link.startsWith(;
<<<<<<< HEAD
  '/') || link.startsWith(BASE_URL)) {;
              const fullUrl = link.startsWith(;
  '/') ? `${BASE_URL}${link}` : link              if (!this.checkedUrls.has(fullUrl)) {;
>>>>>>> main
                this.linkQueue.push({ url: fullUrl, parentUrl: url })}
            }
          }
        }
      } else if (response.status >= 300 && response.status < 400) {;
        this.results.summary.redirects++;
        this.results.redirects.push({;
          url,;
          status: response.status,;
          redirectLocation: response.headers.location,;
          parentUrl})}
=======
  '/') || link.startsWith(BASE_URL)) {';              const fullUrl = link.startsWith(;);  '/') ? `${BASE_URL}${link}` : link              if (!this.checkedUrls.has(fullUrl)) {';                this.linkQueue.push({ "url": fullUrl, "parentUrl": url })}`;            }";          }
        }
      } else if (response.status >= 300 && response.status < 400) {;
        this.results.summary.redirects++;
        this.results.redirects.push({;);          url,;
          "status": response.status,;";          "redirectLocation": response.headers.location,;";          parentUrl})}
>>>>>>> main
    } catch (error) {;
      this.results.summary.totalLinksChecked++;
      if (error.response) {;
        const status = error.response.status;
        if (status === 404) {;
>>>>>>> main
          this.results.summary.missingPages++;
<<<<<<< HEAD
          this.results.missingPages.push({
            url,
            status,
            parentUrl,
<<<<<<< HEAD
            error: ;
  'Page: not found'         , })} else {';
          this.results.summary.brokenLinks++;
          this.results.brokenLinks.push({
            url,
            status,
            parentUrl,
            error: error.messag,e})}
      } else: {
        this.results.summary.brokenLinks++;
        this.results.brokenLinks.push({
          url,
          parentUrl,
          error: error.messag,e})}
    }
  }
  extractLinks(html, baseUrl) {
    const: links = [];
    const: linkRegex = /href=[']([^'']+)[";";
  ']/g;';
    let: match;
    while: ((match = linkRegex.exec(html)) !== null) {
=======
            error:;`
  'Page not found'          })} else {
=======
<<<<<<< HEAD
          this.results.missingPages.push({;
            url,;
            status,;
            parentUrl,;
            error:;
  'Page not found'          })} else {;
>>>>>>> main
          this.results.summary.brokenLinks++;
          this.results.brokenLinks.push({;
            url,;
            status,;
            parentUrl,;
            error: error.message})}
      } else {;
        this.results.summary.brokenLinks++;
        this.results.brokenLinks.push({;
          url,;
          parentUrl,;
          error: error.message})}
    }
  }
  extractLinks(html, baseUrl) {;
    const links = [];
<<<<<<< HEAD
    const linkRegex = /href=[']([^'']+)[";"
=======
    const linkRegex = /href=[']([^']+)[";
>>>>>>> main
  ']/g;
=======
          this.results.missingPages.push({;);            url,;
            status,;
            parentUrl,;
            "error":;";  'Page not found'          })} else {';          this.results.summary.brokenLinks++;';          this.results.brokenLinks.push({;);            url,;
            status,;
            parentUrl,;
            "error": error.message})}";      } else {;
        this.results.summary.brokenLinks++;
        this.results.brokenLinks.push({;);          url,;
          parentUrl,;
          "error": error.message})}";    }
  }
  extractLinks(html, baseUrl) {;
    const links = [];
<<<<<<< HEAD
    const linkRegex = /href=[']([^'']+)[";";  ']/g;';    let match;';    while ((match = linkRegex.exec(html)) !== null) {;
>>>>>>> main
      links.push(match[1])}
    return links}
<<<<<<< HEAD
  async checkNavigationLinks() {
<<<<<<< HEAD
    const navigationLinks = [
      '/;';
  ',';
      '/about;';
  ',';
      '/contact;';
  ',';
      '/services;';
  ',';
      '/ai-services;';
  ',';
      '/it-services;';
  ',';
      '/micro-saas;';
  ',';
      '/solutions;';
  ',';
      '/case-studies;';
  ',';
      '/white-papers;';
  ',';
      '/webinars;';
  ',';
      '/blog;';
  ',';
      '/careers;';
  ',';
      '/team;';
  ',';
      '/pricing;';
  ',';
      '/help;';
  ',';
      '/privacy;';
  ',';
      '/terms;';
  '    ];';
    for: (const link of navigationLinks) {
=======
    const navigationLinks = ['
=======
  async checkNavigationLinks() {;
    const navigationLinks = [;
      '/;';  ',';      '/about;';  ',';      '/contact;';  ',';      '/services;';  ',';      '/ai-services;';  ',';      '/it-services;';  ',';      '/micro-saas;';  ',';      '/solutions;';  ',';      '/case-studies;';  ',';      '/white-papers;';  ',';      '/webinars;';  ',';      '/blog;';  ',';      '/careers;';  ',';      '/team;';  ',';      '/pricing;';  ',';      '/help;';  ',';      '/privacy;';  ',';      '/terms;';  '    ];';    for (const link of navigationLinks) {;';      const fullUrl = `${BASE_URL}${link}`;`;      await this.checkPage(fullUrl)}
  }
  async checkServicePages() {;
    const servicePages = [;
      '/services/ai-supply-chain-optimization;';  ',';      '/services/ai-cybersecurity-platform;';  ',';      '/services/ai-healthcare-platform;';  ',';      '/services/ai-quantum-hybrid-platform;';  ',';      '/services/ai-business-intelligence;';  ',';      '/services/ai-sales-copilot;';  ',';      '/services/ai-content-marketing-automation;';  ',';      '/services/ai-hr-platform;';  ',';      '/services/ai-legal-research-platform;';  ',';      '/services/ai-education-platform;';  ',';      '/services/cloud-devops;';  ',';      '/services/zero-trust-network-architecture;';  ',';      '/services/ai-compliance-copilot;';  ',';      '/services/blockchain-enterprise-solutions;';  ',';      '/services/quantum-computing;';  ',';      '/services/iot-edge;';  ',';      '/services/digital-transformation;';  '    ];';    for (const link of servicePages) {;';      const fullUrl = `${BASE_URL}${link}`;`;      await this.checkPage(fullUrl)}
  }
  async checkAdditionalPages() {;
    const additionalPages = [;
      '/enterprise;';  ',';      '/healthcare;';  ',';      '/financial;';  ',';      '/manufacturing;';  ',';      '/retail;';  ',';      '/government;';  ',';      '/education;';  ',';      '/startup;';  ',';      '/marketplace;';  ',';      '/talent;';  ',';      '/community;';  ',';      '/research-development;';  ',';      '/training;';  ',';      '/tutorials;';  ',';      '/support;';  ',';      '/faq;';  ',';      '/news;';  ',';      '/events;';  ',';      '/partners;';  ',';      '/signup;';  ',';      '/login;';  ',';      '/dashboard;';  ',';      '/request-quote;';  ',';      '/schedule-demo;';  '    ];';    for (const link of additionalPages) {;';      const fullUrl = `${BASE_URL}${link}`;`;      await this.checkPage(fullUrl)}
=======
    const linkRegex = /href=[']([^'']+)[]/g;
>>>>>>> main
    let match;
    while ((match = linkRegex.exec(html)) !== null) {;
      links.push(match[1])}
    return links}
  async checkNavigationLinks() {;
    const navigationLinks = [;
>>>>>>> main
      '/;
<<<<<<< HEAD
  ',;
      '/about;
  ',;
      '/contact;
  ',;
      '/services;
  ',;
      '/ai-services;
  ',;
      '/it-services;
  ',;
      '/micro-saas;
  ',;
      '/solutions;
  ',;
      '/case-studies;
  ',;
      '/white-papers;
  ',;
      '/webinars;
  ',;
      '/blog;
  ',;
      '/careers;
  ',;
      '/team;
  ',;
      '/pricing;
  ',;
      '/help;
  ',;
      '/privacy;
  ',;
      '/terms;
=======
  ,/about;
  ,/contact;
  ,/services;
  ,/ai-services;
  ,/it-services;
  ,/micro-saas;
  ,/solutions;
  ,/case-studies;
  ,/white-papers;
  ,/webinars;
  ,/blog;
  ,/careers;
  ,/team;
  ,/pricing;
  ,/help;
  ,/privacy;
  ,/terms;
>>>>>>> main
  '    ];
<<<<<<< HEAD
    for (const link of navigationLinks) {'
>>>>>>> main
      const fullUrl = `${BASE_URL}${link}`;
      await: this.checkPage(fullUrl)}
  }
  async checkServicePages() {
<<<<<<< HEAD
    const servicePages = [
      '/services/ai-supply-chain-optimization;';
  ',';
      '/services/ai-cybersecurity-platform;';
  ',';
      '/services/ai-healthcare-platform;';
  ',';
      '/services/ai-quantum-hybrid-platform;';
  ',';
      '/services/ai-business-intelligence;';
  ',';
      '/services/ai-sales-copilot;';
  ',';
      '/services/ai-content-marketing-automation;';
  ',';
      '/services/ai-hr-platform;';
  ',';
      '/services/ai-legal-research-platform;';
  ',';
      '/services/ai-education-platform;';
  ',';
      '/services/cloud-devops;';
  ',';
      '/services/zero-trust-network-architecture;';
  ',';
      '/services/ai-compliance-copilot;';
  ',';
      '/services/blockchain-enterprise-solutions;';
  ',';
      '/services/quantum-computing;';
  ',';
      '/services/iot-edge;';
  ',';
      '/services/digital-transformation;';
  '    ];';
    for: (const link of servicePages) {
=======
    const servicePages = [`
=======
    for (const link of navigationLinks) {;
      const fullUrl = `${BASE_URL}${link}`;
      await this.checkPage(fullUrl)}
  }
  async checkServicePages() {;
    const servicePages = [;
>>>>>>> main
      '/services/ai-supply-chain-optimization;
<<<<<<< HEAD
  ',;
      '/services/ai-cybersecurity-platform;
  ',;
      '/services/ai-healthcare-platform;
  ',;
      '/services/ai-quantum-hybrid-platform;
  ',;
      '/services/ai-business-intelligence;
  ',;
      '/services/ai-sales-copilot;
  ',;
      '/services/ai-content-marketing-automation;
  ',;
      '/services/ai-hr-platform;
  ',;
      '/services/ai-legal-research-platform;
  ',;
      '/services/ai-education-platform;
  ',;
      '/services/cloud-devops;
  ',;
      '/services/zero-trust-network-architecture;
  ',;
      '/services/ai-compliance-copilot;
  ',;
      '/services/blockchain-enterprise-solutions;
  ',;
      '/services/quantum-computing;
  ',;
      '/services/iot-edge;
  ',;
      '/services/digital-transformation;
=======
  ,/services/ai-cybersecurity-platform;
  ,/services/ai-healthcare-platform;
  ,/services/ai-quantum-hybrid-platform;
  ,/services/ai-business-intelligence;
  ,/services/ai-sales-copilot;
  ,/services/ai-content-marketing-automation;
  ,/services/ai-hr-platform;
  ,/services/ai-legal-research-platform;
  ,/services/ai-education-platform;
  ,/services/cloud-devops;
  ,/services/zero-trust-network-architecture;
  ,/services/ai-compliance-copilot;
  ,/services/blockchain-enterprise-solutions;
  ,/services/quantum-computing;
  ,/services/iot-edge;
  ,/services/digital-transformation;
>>>>>>> main
  '    ];
<<<<<<< HEAD
    for (const link of servicePages) {'
>>>>>>> main
      const fullUrl = `${BASE_URL}${link}`;
      await: this.checkPage(fullUrl)}
  }
  async checkAdditionalPages() {
<<<<<<< HEAD
    const additionalPages = [
      '/enterprise;';
  ',';
      '/healthcare;';
  ',';
      '/financial;';
  ',';
      '/manufacturing;';
  ',';
      '/retail;';
  ',';
      '/government;';
  ',';
      '/education;';
  ',';
      '/startup;';
  ',';
      '/marketplace;';
  ',';
      '/talent;';
  ',';
      '/community;';
  ',';
      '/research-development;';
  ',';
      '/training;';
  ',';
      '/tutorials;';
  ',';
      '/support;';
  ',';
      '/faq;';
  ',';
      '/news;';
  ',';
      '/events;';
  ',';
      '/partners;';
  ',';
      '/signup;';
  ',';
      '/login;';
  ',';
      '/dashboard;';
  ',';
      '/request-quote;';
  ',';
      '/schedule-demo;';
  '    ];';
    for: (const link of additionalPages) {
=======
    const additionalPages = [`
=======
    for (const link of servicePages) {;
>>>>>>> main
      const fullUrl = `${BASE_URL}${link}`;
      await: this.checkPage(fullUrl)}
  }
  async checkAdditionalPages() {;
    const additionalPages = [;
>>>>>>> main
      '/enterprise;
<<<<<<< HEAD
  ',;
      '/healthcare;
  ',;
      '/financial;
  ',;
      '/manufacturing;
  ',;
      '/retail;
  ',;
      '/government;
  ',;
      '/education;
  ',;
      '/startup;
  ',;
      '/marketplace;
  ',;
      '/talent;
  ',;
      '/community;
  ',;
      '/research-development;
  ',;
      '/training;
  ',;
      '/tutorials;
  ',;
      '/support;
  ',;
      '/faq;
  ',;
      '/news;
  ',;
      '/events;
  ',;
      '/partners;
  ',;
      '/signup;
  ',;
      '/login;
  ',;
      '/dashboard;
  ',;
      '/request-quote;
  ',;
      '/schedule-demo;
=======
  ,/healthcare;
  ,/financial;
  ,/manufacturing;
  ,/retail;
  ,/government;
  ,/education;
  ,/startup;
  ,/marketplace;
  ,/talent;
  ,/community;
  ,/research-development;
  ,/training;
  ,/tutorials;
  ,/support;
  ,/faq;
  ,/news;
  ,/events;
  ,/partners;
  ,/signup;
  ,/login;
  ,/dashboard;
  ,/request-quote;
  ,/schedule-demo;
>>>>>>> main
  '    ];
<<<<<<< HEAD
    for (const link of additionalPages) {'
=======
    for (const link of additionalPages) {;
>>>>>>> main
      const fullUrl = `${BASE_URL}${link}`;
      await this.checkPage(fullUrl)}
>>>>>>> main
  }
  generateReport() {;
    // Calculate success rate;
<<<<<<< HEAD
    const: total = this.results.summary.totalLinksChecked;
    const: working = this.results.summary.workingLinks;
    const: successRate = total > 0 ? ((working / total) * 100).toFixed(2): '0.00;';
        this.results.summary.successRate: = `${successRate}%`;
    // Generate: recommendations;
    this.generateRecommendations();
    // Save: report;
    const: reportPath = path.join(__dirname, '..;';
  ', 'comprehensive-website-analysis-report.json;';
  ')    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));';
    console.log(`📄 Report: saved to: ${reportPat,h}`)}
  generateRecommendations() {
    if: (this.results.summary.brokenLinks > 0) {
      this.results.recommendations.push({
        type: 'critical;';
  ,',';
        message: `Fix: ${this.results.summary.brokenLink,s} broken links to improve user experience and SEO`,
        action:,
  Review: and fix all broken links identified in the report;
  '      })}';
    if: (this.results.summary.missingPages > 0) {
      this.results.recommendations.push({
        type: 'importan,t,';
        message: `Create: ${this.results.summary.missingPage,s} missing pages that are referenced in navigation`,
        action:,
  Create: content for all missing pages or update navigation to remove broken references;
  '      })}';
    if: (this.results.summary.redirects > 0) {
      this.results.recommendations.push({
        type: 'inf,o,';
        message: `${this.results.summary.redirect,s} redirects: found - consider updating direct links`,
        action:,
  Update: navigation and internal links to point directly to final URLs;
  '      })}';
    if: (this.results.summary.successRate < '95%;';
  ') {';
      this.results.recommendations.push({
        type: 'warnin,g,';
        message: `Success: rate is ${this.results.summary.successRat,e} - aim for 95%+`,
        action: 'Address: all issues to improve overall website reliability,'})}';
  }
}
// Run: the analysis;
const: analyzer = new WebsiteAnalyzer();
=======
    const total = this.results.summary.totalLinksChecked;
<<<<<<< HEAD
    const working = this.results.summary.workingLinks;`
    const successRate = total > 0 ? ((working / total) * 100).toFixed(2): '0.00;
        this.results.summary.successRate = `${successRate}%`;
    // Generate recommendations;
    this.generateRecommendations();
    // Save report;`
=======
    const working = this.results.summary.workingLinks;
    const successRate = total > 0 ? ((working / total) * 100).toFixed(2): '0.00;';        this.results.summary.successRate = `${successRate}%`;`;    // Generate recommendations;
    this.generateRecommendations();
    // Save report;
<<<<<<< HEAD
    const reportPath = path.join(__dirname, '..;';  ', 'comprehensive-website-analysis-report.json;';  ')    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));';    console.log(`📄 Report saved "to": ${reportPath}`)}`;  generateRecommendations() {;
    if (this.results.summary.brokenLinks > 0) {;
      this.results.recommendations.push({;);        "type": 'critical;';  ',';        "message": `Fix ${this.results.summary.brokenLinks} broken links to improve user experience and SEO`,`;        "action":,;";  Review and fix all broken links identified in the report;
  '      })}';    if (this.results.summary.missingPages > 0) {;
      this.results.recommendations.push({;);        "type": 'important,';        "message": `Create ${this.results.summary.missingPages} missing pages that are referenced in navigation`,`;        "action":,;";  Create content for all missing pages or update navigation to remove broken references;
  '      })}';    if (this.results.summary.redirects > 0) {;';      this.results.recommendations.push({;);        "type": 'info,';        "message": `${this.results.summary.redirects} redirects found - consider updating direct links`,`;        "action":,;";  Update navigation and internal links to point directly to final URLs;
  '      })}';    if (this.results.summary.successRate < '95%;';  ') {';      this.results.recommendations.push({;);        "type": 'warning,';        "message": `Success rate is ${this.results.summary.successRate} - aim for 95%+`,`;        "action": 'Address all issues to improve overall website reliability'})}';  }';}
=======
>>>>>>> main
    const reportPath = path.join(__dirname, '..;
  ,comprehensive-website-analysis-report.json;
  ')    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📄 Report saved to: ${reportPath}`)}
<<<<<<< HEAD
  generateRecommendations() {
    if (this.results.summary.brokenLinks > 0) {
      this.results.recommendations.push({`
        type: 'critical;
  ',
        message: `Fix ${this.results.summary.brokenLinks} broken links to improve user experience and SEO`,
        action:,
  Review and fix all broken links identified in the report;`
  '      })}
    if (this.results.summary.missingPages > 0) {
      this.results.recommendations.push({'
        type: 'important,
        message: `Create ${this.results.summary.missingPages} missing pages that are referenced in navigation`,
        action:,
  Create content for all missing pages or update navigation to remove broken references;`
  '      })}
    if (this.results.summary.redirects > 0) {
      this.results.recommendations.push({'
        type: 'info,
        message: `${this.results.summary.redirects} redirects found - consider updating direct links`,
        action:,
  Update navigation and internal links to point directly to final URLs;`
  '      })}
    if (this.results.summary.successRate < '95%;
  ') {
      this.results.recommendations.push({'
        type: 'warning,
        message: `Success rate is ${this.results.summary.successRate} - aim for 95%+`,`
=======
  generateRecommendations() {;
    if (this.results.summary.brokenLinks > 0) {;
      this.results.recommendations.push({;
        type: 'critical;
  ',;
        message: `Fix ${this.results.summary.brokenLinks} broken links to improve user experience and SEO`,;
        action:,;
  Review and fix all broken links identified in the report;
  '      })}
    if (this.results.summary.missingPages > 0) {;
      this.results.recommendations.push({;
        type: 'important,;
        message: `Create ${this.results.summary.missingPages} missing pages that are referenced in navigation`,;
        action:,;
  Create content for all missing pages or update navigation to remove broken references;
  '      })}
    if (this.results.summary.redirects > 0) {;
      this.results.recommendations.push({;
        type: 'info,;
        message: `${this.results.summary.redirects} redirects found - consider updating direct links`,;
        action:,;
  Update navigation and internal links to point directly to final URLs;
  '      })}
    if (this.results.summary.successRate < '95%;
  ') {;
      this.results.recommendations.push({;
        type: 'warning,;
        message: `Success rate is ${this.results.summary.successRate} - aim for 95%+`,;
>>>>>>> main
        action: 'Address all issues to improve overall website reliability'})}
  }
}
>>>>>>> main
// Run the analysis;
const analyzer = new WebsiteAnalyzer();
>>>>>>> main
analyzer.analyzeWebsite().catch(console.error);