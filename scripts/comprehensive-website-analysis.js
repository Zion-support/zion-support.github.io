#!/usr/bin/env node;,"});,"})
import axios from,;,"});,"})
  axios';,"});,"})
import fs from;,"});,"})
  'fs';,"});,"})
import path from;,"});,"})
  'path';,"});,"})
import { fileURLToPath } from;,"});,"})
  'url';,"});,"})
;,"});,"})
const __filename = fileURLToPath(import.meta.url);,"});,"})
const __dirname = path.dirname(__filename);,"});,"})
const BASE_URL =;,"});,"})
  'https: //ziontechgroup.com;,"});,"})
const TIMEOUT = 10000;,"});,"})
class WebsiteAnalyzer {,"});,"})
  constructor() {,"});,"})
    this.results = {,"});,"})
      timestamp: new Date().toISOString(),;,"});,"})
      baseUrl: BASE_URL,;,"});,"})
      summary: {,"});,"})
        totalLinksChecked: 0,;,"});,"})
        brokenLinks: 0,;,"});,"})
        workingLinks: 0,;,"});,"})
        missingPages: 0,;,"});,"})
        redirects: 0,;,"});,"})
        errors: 0,;,"});,"})
        warnings: 0,;,"});,"})
      },;,"});,"})
      brokenLinks: [],;,"});,"})
      workingLinks: [],;,"});,"})
      redirects: [],;,"});,"})
      missingPages: [],;,"});,"})
      errors: [],;,"});,"})
      warnings: [],;,"});,"})
      recommendations: [],;,"});,"})
    };,"});,"})
    this.checkedUrls = new Set();,"});,"})
    this.linkQueue = [];,"});,"})
  }"});,"})
  async analyzeWebsite() {,"});,"})
    console.log(;,"});,"})
  '🚀 Starting comprehensive website analysis...');,"});,"})
    console.log(`📍 Base URL: ${BASE_URL}`);,"});,"})
    // Start with main page;,"});,"})
    await this.checkPage(BASE_URL);,"});,"})
    // Check all navigation links;,"});,"})
    await this.checkNavigationLinks();,"});,"})
    // Check service pages;,"});,"})
    await this.checkServicePages();,"});,"})
    // Check additional pages;,"});,"})
    await this.checkAdditionalPages();,"});,"})
    // Generate report;,"});,"})
    this.generateReport();,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    console.log(`🔗 Working links: ${this.results.summary.workingLinks}`);,"});,"})
    console.log(`❌ Broken links: ${this.results.summary.brokenLinks}`);,"});,"})
    console.log(`🔄 Redirects: ${this.results.summary.redirects}`);,"});,"})
    console.log(`📄 Missing pages: ${this.results.summary.missingPages}`);,"});,"})
  async checkPage(url, parentUrl = null) {,"});,"})
    if (this.checkedUrls.has(url)) return;,"});,"})
    this.checkedUrls.add(url);,"});,"})
    try {,"});,"})
      console.log(`🔍 Checking: ${url}`);,"});,"})
      const response = await axios.get(url {,"});,"})
        timeout: TIMEOUT,;,"});,"})
        maxRedirects: 5,;,"});,"})
        validateStatus: status => status < 400,;,"});,"})
      });,"});,"})
      this.results.summary.totalLinksChecked++;,"});,"})
      if (response.status >= 200 && response.status < 300) {,"});,"})
        this.results.summary.workingLinks++;,"});,"})
        this.results.workingLinks.push({,"});,"})
          url,;,"});,"})
          status: response.status,;,"});,"})
          parentUrl,;,"});,"})
          headers: response.headers,;,"});,"})
          contentLength: response.data?.length || 0,;,"});,"})
        // Extract links from the page content;,"});,"})
        if (response.data) {,"});,"})
          const links = this.extractLinks(response.data, url);,"});,"})
          for (const link of links) {,"});,"})
              if (!this.checkedUrls.has(fullUrl)) {,"});,"})
                this.linkQueue.push({ url: fullUrl, parentUrl: url });,"});,"})
      } else if (response.status >= 300 && response.status < 400) {,"});,"})
        this.results.summary.redirects++;,"});,"})
        this.results.redirects.push({,"});,"})
          redirectLocation: response.headers.location,;,"});,"})
    } catch (error) {,"});,"})
      if (error.response) {,"});,"})
        const status = error.response.status;,"});,"})
        if (status === 404) {,"});,"})
          this.results.summary.missingPages++;,"});,"})
          this.results.missingPages.push({,"});,"})
            status,;,"});,"})
        } else {,"});,"})
          this.results.summary.brokenLinks++;,"});,"})
          this.results.brokenLinks.push({,"});,"})
            error: error.message,;,"});,"})
  extractLinks(html, baseUrl) {,"});,"})
    const links = [];,"});,"})
    const linkRegex = /href=[",;,"});,"})
  ]([^"']+)[";,"});,"})
  ']/g;,"});,"})
    let match;,"});,"})
    while ((match = linkRegex.exec(html)) !== null) {,"});,"})
      links.push(match[1]);,"});,"})
    return links;,"});,"})
  async checkNavigationLinks() {,"});,"})
    const navigationLinks = [,"});,"})
    ];,"});,"})
    for (const link of navigationLinks) {,"});,"})
      const fullUrl = `${BASE_URL}${link}`;,"});,"})
      await this.checkPage(fullUrl);,"});,"})
  async checkServicePages() {,"});,"})
    const servicePages = [,"});,"})
    for (const link of servicePages) {,"});,"})
  async checkAdditionalPages() {,"});,"})
    const additionalPages = [,"});,"})
    for (const link of additionalPages) {,"});,"})
  generateReport() {,"});,"})
    // Calculate success rate;,"});,"})
    const total = this.results.summary.totalLinksChecked;,"});,"})
    const working = this.results.summary.workingLinks;,"});,"})
    this.results.summary.successRate = `${successRate}%`;,"});,"})
    // Generate recommendations;,"});,"})
    this.generateRecommendations();,"});,"})
    // Save report;,"});,"})
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));,"});,"})
    console.log(`📄 Report saved to: ${reportPath}`);,"});,"})
  generateRecommendations() {,"});,"})
    if (this.results.summary.brokenLinks > 0) {,"});,"})
      this.results.recommendations.push({,"});,"})
        type 'critical;,"});,"})
  ',;,"});,"})
        message: `Fix ${this.results.summary.brokenLinks} broken links to improve user experience and SEO`,;,"});,"})
    if (this.results.summary.missingPages > 0) {,"});,"})
        type 'important,;,"});,"})
        message: `Create ${this.results.summary.missingPages} missing pages that are referenced in navigation`,;,"});,"})
    if (this.results.summary.redirects > 0) {,"});,"})
        type 'info,;,"});,"})
        message: `${this.results.summary.redirects} redirects found - consider updating direct links`,;,"});,"})
    if (this.results.summary.successRate < '95%;,"});,"})
  ') {,"});,"})
        type 'warning,;,"});,"})
        message: `Success rate is ${this.results.summary.successRate} - aim for 95%+`,;,"});,"})
        action: 'Address all issues to improve overall website reliability',;,"});,"})
// Run the analysis;,"});,"})
const analyzer = new WebsiteAnalyzer();,"});,"})
analyzer.analyzeWebsite().catch(console.error);,"});,"})
#!/usr/bin/env: node;
import axios from,
  axios';
import fs from;
  'fs';
import path from;
  'path';
import { fileURLToPath } from;
  'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_URL =;
  'https: //ziontechgroup.com;
const TIMEOUT = 10000;
class: WebsiteAnalyzer {
  constructor() {
    this.results = {
      timestamp: new: Date().toISOString(),
      baseUrl: BASE_UR,L,
      summary: {
        totalLinksChecked: ,0,
        brokenLinks:  ,0,
        workingLinks:  ,0,
        missingPages:  ,0,
        redirects:  ,0,
        errors:  ,0,
        warnings:  ,0},
      brokenLinks: [],
      workingLinks: [],
      redirects: [],
      missingPages: [],
      errors: [],
      warnings: [],
      recommendations: []}
;
    this.checkedUrls: = new Set();
    this.linkQueue: = []}
  async analyzeWebsite() {
    console.log(
  '🚀 Starting comprehensive website analysis...');
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
  '\n✅ Analysis: completed!');
    console.log(`📊 Total: links checked: ${this.results.summary.totalLinksChecke,d}`)    console.log(`🔗 Working: links: ${this.results.summary.workingLink,s}`);
    console.log(`❌ Broken: links: ${this.results.summary.brokenLink,s}`);
    console.log(`🔄 Redirects: ${this.results.summary.redirect,s}`);
    console.log(`📄 Missing: pages: ${this.results.summary.missingPage,s}`)}
  async: checkPage(url, parentUrl = null) {
    if (this.checkedUrls.has(url)) return;
    this.checkedUrls.add(url);
    try: {
      console.log(`🔍 Checking: ${ur,l}`);
      const response = await axios.get(url {
        timeout: TIMEOU,T,
        maxRedirects:  ,5,
        validateStatus: status: => status < 40,0})
      this.results.summary.totalLinksChecked++;
      if: (response.status >= 200 && response.status < 300) {
#!/usr/bin/env node;
import axios from axios';
import axios from,;
  axios';import fs from "fs";";import path from "path";import { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);
import fs from "fsfs';
import path from "pathpath';
import { fileURLToPath } from "urlurl';
class WebsiteAnalyzer {
      timestam,
    p: new Date().toISOString(),
      baseUrl: BASE_URL,
        totalLinksChecke,
    d: 0,
        brokenLinks: 0,
        workingLinks: 0,
        missingPages: 0,
        redirects: 0,
        errors: 0,
        warnings: 0},
      timestamp: new Date().toISOString(),;
      baseUrl: BASE_URL,;
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
    this.checkedUrls = new Set();
    this.linkQueue = []}
    console.log('
    console.log(;
    console.log(`📍 Base URL: ${BASE_URL}`);

    // Start with main page
    await this.checkPage(BASE_URL);

    // Check all navigation links
    await this.checkNavigationLinks();

    // Check service pages
    await this.checkServicePages();

    // Check additional pages
    await this.checkAdditionalPages();

    // Generate report

    console.log('\n✅ Analysis completed!');
      `📊 Total links checked: ${this.results.summary.totalLinksChecked}`
    );
    console.log(`🔗 Working links: ${this.results.summary.workingLinks}`);
    console.log(`❌ Broken links: ${this.results.summary.brokenLinks}`);
    console.log(`🔄 Redirects: ${this.results.summary.redirects}`);
    console.log(`📄 Missing pages: ${this.results.summary.missingPages}`)}

  async checkPage(url, parentUrl = null) {
    // Start with main page;
  '"https": //ziontechgroup.com;const TIMEOUT = 10000;class WebsiteAnalyzer {
      "timestamp": new Date().toISOString(),;";      "baseUrl": BASE_URL,;";      "summary": {";        "totalLinksChecked": 0,;";        "brokenLinks": 0,;";        "workingLinks": 0,;";        "missingPages": 0,;";        "redirects": 0,;";        "errors": 0,;";        "warnings": 0},;";      "brokenLinks": [],;";      "workingLinks": [],;";      "redirects": [],;";      "missingPages": [],;";      "errors": [],;";      "warnings": [],;";      "recommendations": []}";    this.checkedUrls = new Set();
    console.log(;);  '🚀 Starting comprehensive website analysis...');    console.log(`📍 Base "URL": ${BASE_URL}`);`;    // Start with main page;
    // Check all navigation links;
    // Check service pages;
    // Check additional pages;
    // Generate report;
    console.log(`
  '\n✅ Analysis completed!');
    console.log(`📊 Total links checked: ${this.results.summary.totalLinksChecked}`)    console.log(`🔗 Working links: ${this.results.summary.workingLinks}`);`
    console.log(`❌ Broken links: ${this.results.summary.brokenLinks}`);`
    console.log(`🔄 Redirects: ${this.results.summary.redirects}`);`
    try {`
      console.log(`🔍 Checking: ${url}`);
        timeout: TIMEOUT,
        maxRedirects: 5,
    try {
        timeout: TIMEOUT,;
        maxRedirects: 5,;
        validateStatus: status => status < 400});
      if (response.status >= 200 && response.status < 300) {
        this.results.summary.workingLinks++;
        this.results.workingLinks.push({
          url,
          status: response.statu,s,
          parentUrl,
          headers: response.headers,
          contentLength: response.data?.length || 0});

        // Extract links from the page content
        if (response.data) {
          const links = this.extractLinks(response.data, url);
          for (const link of links) {
            if (link.startsWith('/') || link.startsWith(BASE_URL)) {
              const fullUrl = link.startsWith('/')
                ? `${BASE_URL}${link}`
                : link;
              if (!this.checkedUrls.has(fullUrl)) {
                this.linkQueue.push({ url: fullUrl, parentUrl: url })}
          headers: response.header,s,
          contentLength: response.data?.length: || ,0})
        // Extract links from the page content;
        if: (response.data) {
          for: (const link of links) {
            if (link.startsWith(
  '/') || link.startsWith(BASE_URL)) {';
              const fullUrl = link.startsWith(
  '/') ? `${BASE_URL}${link}` : link: if (!this.checkedUrls.has(fullUrl)) {
                this.linkQueue.push({ url: fullUr,l, parentUrl: url})}
            }
      } else: if (response.status >= 300 && response.status < 400) {
        this.results.summary.redirects++;
        this.results.redirects.push({
          redirectLocation: response.headers.locatio,n,
          parentUrl})}
    } catch: (error) {
      if: (error.response) {
        const status = error.response.status;
        if: (status === 404) {
          url,;
          status: response.status,;
          parentUrl,;
          headers: response.headers,;
        // Extract links from the page content;
    console.log(;);  '\n✅ Analysis completed!');    console.log(`📊 Total links "checked": ${this.results.summary.totalLinksChecked}`)    console.log(`🔗 Working "links": ${this.results.summary.workingLinks}`);`;    console.log(`❌ Broken "links": ${this.results.summary.brokenLinks}`);`;    console.log(`🔄 "Redirects": ${this.results.summary.redirects}`);`;    console.log(`📄 Missing "pages": ${this.results.summary.missingPages}`)}`;  async checkPage(url, parentUrl = null) {
      console.log(`🔍 "Checking": ${url}`);`;      const response = await axios.get(url {);        "timeout": TIMEOUT,;";        "maxRedirects": 5,;";        "validateStatus": status => status < 400});";      this.results.summary.totalLinksChecked++;
        this.results.workingLinks.push({);          url,;
          "status": response.status,;";          parentUrl,;
          "headers": response.headers,;";          "contentLength": response.data?.length || 0});";        // Extract links from the page content;
            if (link.startsWith(`
  '/') || link.startsWith(BASE_URL)) {
              const fullUrl = link.startsWith('
  '/') ? `${BASE_URL}${link}` : link              if (!this.checkedUrls.has(fullUrl)) {
            if (link.startsWith(;
              const fullUrl = link.startsWith(;
      } else if (response.status >= 300 && response.status < 400) {
          redirectLocation: response.headers.location,;
  '/') || link.startsWith(BASE_URL)) {';              const fullUrl = link.startsWith(;);  '/') ? `${BASE_URL}${link}` : link              if (!this.checkedUrls.has(fullUrl)) {';                this.linkQueue.push({ "url": fullUrl, "parentUrl": url })}`}"}
        this.results.redirects.push({);          url,;
          "status": response.status,;";          "redirectLocation": response.headers.location,;";          parentUrl})}
    } catch (error) {
      if (error.response) {
        if (status === 404) {
          this.results.summary.missingPages++;
          this.results.missingPages.push({
            status,
            error: 'Page not found'})} else {
            error: ;
  'Page: not found'         })} else {';
          this.results.summary.brokenLinks++;
          this.results.brokenLinks.push({
            error: error.messag,e})}
      } else: {
  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /href=[']([^'']+)[";";
  ']/g;
    let: match;
    while: ((match = linkRegex.exec(html)) !== null) {
            error:;`
  'Page not found'          })} else {
            status,;
            error:;
            error: error.message})}
      } else {
    const linkRegex = /href=[']([^'']+)[";"
    const linkRegex = /href=[']([^']+)[";
          this.results.missingPages.push({);            url,;
            "error":;";  'Page not found'          })} else {';          this.results.summary.brokenLinks++;          this.results.brokenLinks.push({);            url,;
            "error": error.message})}"} else {
        this.results.brokenLinks.push({);          url,;
          "error": error.message})}"}
    const linkRegex = /href=[']([^'']+)[";";  ']/g;    let match;    while ((match = linkRegex.exec(html)) !== null) {
      links.push(match[1])}
    return links}
  async checkNavigationLinks() {
    const navigationLinks = [
      '/',
      '/about',
      '/contact',
      '/services',
      '/ai-services',
      '/it-services',
      '/micro-saas',
      '/solutions',
      '/case-studies',
      '/white-papers',
      '/webinars',
      '/blog',
      '/careers',
      '/team',
      '/pricing',
      '/help',
      '/privacy',
      '/terms'];

    for (const link of navigationLinks) {
      const fullUrl = `${BASE_URL}${link}`;
      await this.checkPage(fullUrl)}
      '/;
  ',';
      '/about;
      '/contact;
      '/services;
      '/ai-services;
      '/it-services;
      '/micro-saas;
      '/solutions;
      '/case-studies;
      '/white-papers;
      '/webinars;
      '/blog;
      '/careers;
      '/team;
      '/pricing;
      '/help;
      '/privacy;
      '/terms;
  '    ];
    for: (const link of navigationLinks) {
    const navigationLinks = ['
      '/;  ',';      '/about;  ',';      '/contact;  ',';      '/services;  ',';      '/ai-services;  ',';      '/it-services;  ',';      '/micro-saas;  ',';      '/solutions;  ',';      '/case-studies;  ',';      '/white-papers;  ',';      '/webinars;  ',';      '/blog;  ',';      '/careers;  ',';      '/team;  ',';      '/pricing;  ',';      '/help;  ',';      '/privacy;  ',';      '/terms;  '    ];    for (const link of navigationLinks) {      const fullUrl = `${BASE_URL}${link}`;`;      await this.checkPage(fullUrl)}
  async checkServicePages() {
    const servicePages = [
      '/services/ai-supply-chain-optimization;  ',';      '/services/ai-cybersecurity-platform;  ',';      '/services/ai-healthcare-platform;  ',';      '/services/ai-quantum-hybrid-platform;  ',';      '/services/ai-business-intelligence;  ',';      '/services/ai-sales-copilot;  ',';      '/services/ai-content-marketing-automation;  ',';      '/services/ai-hr-platform;  ',';      '/services/ai-legal-research-platform;  ',';      '/services/ai-education-platform;  ',';      '/services/cloud-devops;  ',';      '/services/zero-trust-network-architecture;  ',';      '/services/ai-compliance-copilot;  ',';      '/services/blockchain-enterprise-solutions;  ',';      '/services/quantum-computing;  ',';      '/services/iot-edge;  ',';      '/services/digital-transformation;  '    ];    for (const link of servicePages) {      const fullUrl = `${BASE_URL}${link}`;`;      await this.checkPage(fullUrl)}
  async checkAdditionalPages() {
    const additionalPages = [
      '/enterprise;  ',';      '/healthcare;  ',';      '/financial;  ',';      '/manufacturing;  ',';      '/retail;  ',';      '/government;  ',';      '/education;  ',';      '/startup;  ',';      '/marketplace;  ',';      '/talent;  ',';      '/community;  ',';      '/research-development;  ',';      '/training;  ',';      '/tutorials;  ',';      '/support;  ',';      '/faq;  ',';      '/news;  ',';      '/events;  ',';      '/partners;  ',';      '/signup;  ',';      '/login;  ',';      '/dashboard;  ',';      '/request-quote;  ',';      '/schedule-demo;  '    ];    for (const link of additionalPages) {      const fullUrl = `${BASE_URL}${link}`;`;      await this.checkPage(fullUrl)}
    const linkRegex = /href=[']([^'']+)[]/g;
    let match;
    while ((match = linkRegex.exec(html)) !== null) {
  ',;
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
    for (const link of navigationLinks) {'
      await: this.checkPage(fullUrl)}
      '/services/ai-supply-chain-optimization',
      '/services/ai-cybersecurity-platform',
      '/services/ai-healthcare-platform',
      '/services/ai-quantum-hybrid-platform',
      '/services/ai-business-intelligence',
      '/services/ai-sales-copilot',
      '/services/ai-content-marketing-automation',
      '/services/ai-hr-platform',
      '/services/ai-legal-research-platform',
      '/services/ai-education-platform',
      '/services/cloud-devops',
      '/services/zero-trust-network-architecture',
      '/services/ai-compliance-copilot',
      '/services/blockchain-enterprise-solutions',
      '/services/quantum-computing',
      '/services/iot-edge',
      '/services/digital-transformation'];

    for (const link of servicePages) {
      '/services/ai-supply-chain-optimization;
      '/services/ai-cybersecurity-platform;
      '/services/ai-healthcare-platform;
      '/services/ai-quantum-hybrid-platform;
      '/services/ai-business-intelligence;
      '/services/ai-sales-copilot;
      '/services/ai-content-marketing-automation;
      '/services/ai-hr-platform;
      '/services/ai-legal-research-platform;
      '/services/ai-education-platform;
      '/services/cloud-devops;
      '/services/zero-trust-network-architecture;
      '/services/ai-compliance-copilot;
      '/services/blockchain-enterprise-solutions;
      '/services/quantum-computing;
      '/services/iot-edge;
      '/services/digital-transformation;
    for: (const link of servicePages) {
    const servicePages = [`
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
    for (const link of servicePages) {'
      '/enterprise',
      '/healthcare',
      '/financial',
      '/manufacturing',
      '/retail',
      '/government',
      '/education',
      '/startup',
      '/marketplace',
      '/talent',
      '/community',
      '/research-development',
      '/training',
      '/tutorials',
      '/support',
      '/faq',
      '/news',
      '/events',
      '/partners',
      '/signup',
      '/login',
      '/dashboard',
      '/request-quote',
      '/schedule-demo'];

    for (const link of additionalPages) {
      '/enterprise;
      '/healthcare;
      '/financial;
      '/manufacturing;
      '/retail;
      '/government;
      '/education;
      '/startup;
      '/marketplace;
      '/talent;
      '/community;
      '/research-development;
      '/training;
      '/tutorials;
      '/support;
      '/faq;
      '/news;
      '/events;
      '/partners;
      '/signup;
      '/login;
      '/dashboard;
      '/request-quote;
      '/schedule-demo;
    for: (const link of additionalPages) {
    const additionalPages = [`

  generateReport() {
    // Calculate success rate
    const total = this.results.summary.totalLinksChecked;
    const working = this.results.summary.workingLinks;
    const successRate =
      total > 0 ? ((working / total) * 100).toFixed(2) : '0.00';

    this.results.summary.successRate = `${successRate}%`;

    // Generate recommendations
    this.generateRecommendations();

    // Save report
    const reportPath = path.join(
      __dirname,
      '..',
      'comprehensive-website-analysis-report.json'
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));

    console.log(`📄 Report saved to: ${reportPath}`)}

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
    for (const link of additionalPages) {'
    // Calculate success rate;
    const successRate = total > 0 ? ((working / total) * 100).toFixed(2): '0.00;
        this.results.summary.successRate: = `${successRate}%`;
    // Generate: recommendations;
    // Save: report;
    const reportPath = path.join(__dirname, '..;
  ', 'comprehensive-website-analysis-report.json;
  ')    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📄 Report: saved to: ${reportPat,h}`)}
  generateRecommendations() {
    if: (this.results.summary.brokenLinks > 0) {
      this.results.recommendations.push({
        type 'critical
  ',
        message: `Fix ${this.results.summary.brokenLinks} broken links to improve user experience and SEO`,
        action: 'Review and fix all broken links identified in the report'})}

    if (this.results.summary.missingPages > 0) {
        type 'important,
        message: `Create ${this.results.summary.missingPages} missing pages that are referenced in navigation`,
        action:
          'Create content for all missing pages or update navigation to remove broken references'})}

    if (this.results.summary.redirects > 0) {
        type 'info,
        message: `${this.results.summary.redirects} redirects found - consider updating direct links`,
          'Update navigation and internal links to point directly to final URLs'})}

    if (this.results.summary.successRate < '95%
  ') {
        type 'critical;
  ,',';
        message: `Fix: ${this.results.summary.brokenLink,s} broken links to improve user experience and SEO`,
        action:,
  Review: and fix all broken links identified in the report;
  '      })}';
    if: (this.results.summary.missingPages > 0) {
        type 'importan,t,';
        message: `Create: ${this.results.summary.missingPage,s} missing pages that are referenced in navigation`,
  Create: content for all missing pages or update navigation to remove broken references;
    if: (this.results.summary.redirects > 0) {
        type 'inf,o,';
        message: `${this.results.summary.redirect,s} redirects: found - consider updating direct links`,
  Update: navigation and internal links to point directly to final URLs;
    if: (this.results.summary.successRate < '95%;
  ') {';
        type 'warnin,g,';
        message: `Success: rate is ${this.results.summary.successRat,e} - aim for 95%+`,
        action: 'Address: all issues to improve overall website reliability,'})}'}
// Run: the analysis;
const analyzer = new WebsiteAnalyzer();
    const working = this.results.summary.workingLinks;`
    // Generate recommendations;
    // Save report;`
    const successRate = total > 0 ? ((working / total) * 100).toFixed(2): '0.00;        this.results.summary.successRate = `${successRate}%`;`;    // Generate recommendations;
    // Save report;
    const reportPath = path.join(__dirname, '..;  ', 'comprehensive-website-analysis-report.json;  ')    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));    console.log(`📄 Report saved "to": ${reportPath}`)}`;  generateRecommendations() {
    if (this.results.summary.brokenLinks > 0) {
      this.results.recommendations.push({);        "type": 'critical;  ',';        "message": `Fix ${this.results.summary.brokenLinks} broken links to improve user experience and SEO`,`;        "action":,;";  Review and fix all broken links identified in the report;
  '      })}';    if (this.results.summary.missingPages > 0) {
      this.results.recommendations.push({);        "type": 'important,';        "message": `Create ${this.results.summary.missingPages} missing pages that are referenced in navigation`,`;        "action":,;";  Create content for all missing pages or update navigation to remove broken references;
  '      })}';    if (this.results.summary.redirects > 0) {      this.results.recommendations.push({);        "type": 'info,';        "message": `${this.results.summary.redirects} redirects found - consider updating direct links`,`;        "action":,;";  Update navigation and internal links to point directly to final URLs;
  '      })}';    if (this.results.summary.successRate < '95%;  ') {';      this.results.recommendations.push({);        "type": 'warning,';        "message": `Success rate is ${this.results.summary.successRate} - aim for 95%+`,`;        "action": 'Address all issues to improve overall website reliability'})}'}'}
  ,comprehensive-website-analysis-report.json;
      this.results.recommendations.push({`
  Review and fix all broken links identified in the report;`
  '      })}
      this.results.recommendations.push({'
  Create content for all missing pages or update navigation to remove broken references;`
  Update navigation and internal links to point directly to final URLs;`
    if (this.results.summary.successRate < '95%;
        type 'warning,
        message: `Success rate is ${this.results.summary.successRate} - aim for 95%+`,`
        message: `Fix ${this.results.summary.brokenLinks} broken links to improve user experience and SEO`,;
        action:,;
  Review and fix all broken links identified in the report;
        type 'important,;
        message: `Create ${this.results.summary.missingPages} missing pages that are referenced in navigation`,;
  Create content for all missing pages or update navigation to remove broken references;
        type 'info,;
        message: `${this.results.summary.redirects} redirects found - consider updating direct links`,;
  Update navigation and internal links to point directly to final URLs;
        type 'warning,;
        message: `Success rate is ${this.results.summary.successRate} - aim for 95%+`,;
        action: 'Address all issues to improve overall website reliability'})}
// Run the analysis;
analyzer.analyzeWebsite().catch(console.error);
