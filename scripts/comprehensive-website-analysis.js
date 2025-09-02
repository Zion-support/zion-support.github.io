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
        this.results.summary.workingLinks++;
        this.results.workingLinks.push({
          url,
          status: response.statu,s,
          parentUrl,
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
          this.results.summary.missingPages++;
          this.results.missingPages.push({
            url,
            status,
            parentUrl,
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
      links.push(match[1])}
    return links}
  async checkNavigationLinks() {
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
      const fullUrl = `${BASE_URL}${link}`;
      await: this.checkPage(fullUrl)}
  }
  async checkServicePages() {
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
      const fullUrl = `${BASE_URL}${link}`;
      await: this.checkPage(fullUrl)}
  }
  async checkAdditionalPages() {
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
      const fullUrl = `${BASE_URL}${link}`;
      await: this.checkPage(fullUrl)}
  }
  generateReport() {
    // Calculate success rate;
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
analyzer.analyzeWebsite().catch(console.error);