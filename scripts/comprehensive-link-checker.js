ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
const axios = // // require(,;,"});,"})
  axios');,"});,"})
const cheerio = // // require(;,"});,"})
  'cheerio');,"});,"})
const fs = // // require(;,"});,"})
  'fs');,"});,"})
const path = // // require(;,"});,"})
  'path');,"});,"})
;,"});,"})
class ComprehensiveLinkChecker {;,"});,"})
  constructor() {;,"});,"})
<<<<<<< HEAD
    this.baseUrl =;,"});,"})
  'https: //ziontechgroup.com;,"});,"})
    this.visitedUrls = new Set();,"});,"})
    this.brokenLinks = [];,"});,"})
    this.missingPages = [];,"});,"})
    this.workingLinks = [];,"});,"})
    this.sitemapUrls = [];,"});,"})
    this.maxDepth = 3;,"});,"})
    this.currentDepth = 0;,"});,"})
    this.concurrency = 5;,"});,"})
    this.semaphore = this.concurrency;,"});,"})
=======

    this && this.baseUrl =;,"});,"})
  'https: //ziontechgroup && ziontechgroup.com,,"});,"})
    this && this.visitedUrls = new Set();,"});,"})
    this && this.brokenLinks = [];,"});,"})
    this && this.missingPages = [];,"});,"})
    this && this.workingLinks = [];,"});,"})
    this && this.sitemapUrls = [];,"});,"})
    this && this.maxDepth = 3;,"});,"})
    this && this.currentDepth = 0;,"});,"})
    this && this.concurrency = 5;,"});,"})
    this && this.semaphore = this && this.concurrency;,"});,"})

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }"});,"})
;,"});,"})
  async loadSitemap() {;,"});,"})
    try {;,"});,"})
      const sitemapPath = path.join(__dirname,;,"});,"})
  '../public/sitemap.xml');,"});,"})
      const sitemapContent = fs.readFileSync(sitemapPath,;,"});,"})
  'utf8');,"});,"})
      const $ = cheerio.load(sitemapContent, { xmlMode: true });,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
        const url = $(elem).text().trim();,"});,"})
        this.sitemapUrls.push(url);,"});,"})
      });,"});,"})
;,"});,"})
      console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`);,"});,"})
    } catch (error) {;,"});,"})
      console.error(;,"});,"})
  'Error loading sitemap:', error.message);,"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  async checkUrl(url, parentUrl = null, depth = 0) {;,"});,"})
    if (this.visitedUrls.has(url) || depth > this.maxDepth) {;,"});,"})
      return;,"});,"})
    }"});,"})
;,"});,"})
    this.visitedUrls.add(url);,"});,"})
;,"});,"})
    try {;,"});,"})
      console.log(`Checking: ${url} (depth: ${depth})`);,"});,"})
;,"});,"})
      const response = await axios.get(url, {;,"});,"})
        timeout: 10000,;,"});,"})
        validateStatus: status => status < 500,;,"});,"})
      });,"});,"})
;,"});,"})
      if (response.status === 200) {;,"});,"})
        this.workingLinks.push({;,"});,"})
          url,;,"});,"})
          status: response.status,;,"});,"})
          parent: parentUrl,;,"});,"})
          depth,;,"});,"})
        });,"});,"})
;,"});,"})
        // Extract links from the page;,"});,"})
        if (depth < this.maxDepth) {;,"});,"})
          const $ = cheerio.load(response.data);,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
          // Check extracted links;,"});,"})
<<<<<<< HEAD
          for (const link of links) {;,"});,"})
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          );,"})

          for (const link of links) {;,"});,"})
          );,"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            if (link && link.startsWith(this.baseUrl)) {;,"});,"})
              await this.checkUrl(link, url, depth + 1);,"});,"})
            }"});,"})
          }"});,"})
        }"});,"})
      } else {;,"});,"})
        this.brokenLinks.push({;,"});,"})
          url,;,"});,"})
          status: response.status,;,"});,"})
          parent: parentUrl,;,"});,"})
          depth,;,"});,"})
          error: `HTTP ${response.status}`,;,"});,"})
        });,"});,"})
      }"});,"})
    } catch (error) {;,"});,"})
      this.brokenLinks.push({;,"});,"})
        url,;,"});,"})
        status:;,"});,"})
  'ERROR',;,"});,"})
        parent: parentUrl,;,"});,"})
        depth,;,"});,"})
        error: error.message,;,"});,"})
      });,"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  resolveUrl(href, baseUrl) {;,"});,"})
    try {;,"});,"})
      if (href.startsWith(;,"});,"})
  'http')) {;,"});,"})
        return href;,"});,"})
      }"});,"})
      if (href.startsWith(;,"});,"})
  '/')) {;,"});,"})
        return `${this.baseUrl}${href}`;,"});,"})
      }"});,"})
      return new URL(href, baseUrl).href;,"});,"})
    } catch (error) {;,"});,"})
      return null;,"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  async checkSitemapUrls() {;,"});,"})
    console.log(;,"});,"})
  '\n=== Checking Sitemap URLs ===');,"});,"})
    const promises = this.sitemapUrls.map(url => this.checkUrl(url, null, 0));,"});,"})
    await Promise.all(promises);,"});,"})
  }"});,"})
;,"});,"})
  async checkNavigationLinks() {;,"});,"})
    console.log(;,"});,"})
  '\n=== Checking Navigation Links ===');,"});,"})
    const navigationUrls = [;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    ];,"});,"})
;,"});,"})
    const promises = navigationUrls.map(url =>;,"});,"})
      this.checkUrl(`${this.baseUrl}${url}`, null, 0);,"});,"})
    );,"});,"})
    await Promise.all(promises);,"});,"})
  }"});,"})
;,"});,"})
  async checkServicePages() {;,"});,"})
    console.log(;,"});,"})
  '\n=== Checking Service Pages ===');,"});,"})
    const serviceUrls = [;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    ];,"});,"})
;,"});,"})
    const promises = serviceUrls.map(url =>;,"});,"})
      this.checkUrl(`${this.baseUrl}${url}`, null, 0);,"});,"})
    );,"});,"})
    await Promise.all(promises);,"});,"})
  }"});,"})
;,"});,"})
  generateReport() {;,"});,"})
    const report = {;,"});,"})
      timestamp: new Date().toISOString(),;,"});,"})
<<<<<<< HEAD
      summary: {;,"});,"})
        totalUrls: this.visitedUrls.size,;,"});,"})
        workingLinks: this.workingLinks.length,;,"});,"})
        brokenLinks: this.brokenLinks.length,;,"});,"})
        missingPages: this.missingPages.length,;,"});,"})
=======

      summary: {,,"});,"})
        totalUrls: this && this.visitedUrls.size,;,"});,"})
        workingLinks: this && this.workingLinks.length,;,"});,"})
        brokenLinks: this && this.brokenLinks.length,;,"});,"})
        missingPages: this && this.missingPages.length,;,"});,"})

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },;,"});,"})
      workingLinks: this.workingLinks,;,"});,"})
      brokenLinks: this.brokenLinks,;,"});,"})
      missingPages: this.missingPages,;,"});,"})
      recommendations: this.generateRecommendations(),;,"});,"})
    };,"});,"})
;,"});,"})
    // Save detailed report;,"});,"})
    fs.writeFileSync(;,"});,"})
      path.join(__dirname,;,"});,"})
  '../reports/comprehensive-link-check-report.json'),;,"});,"})
      JSON.stringify(report, null, 2);,"});,"})
    );,"});,"})
;,"});,"})
    // Save summary report;,"});,"})
    const summaryReport = {;,"});,"})
<<<<<<< HEAD
      timestamp: report.timestamp,;,"});,"})
      summary: report.summary,;,"});,"})
      brokenLinks: this.brokenLinks.map(link => ({;,"});,"})
        url: link.url,;,"});,"})
        status: link.status,;,"});,"})
        error: link.error,;,"});,"})
        parent: link.parent,;,"});,"})
=======

      timestamp: report && report.timestamp,;,"});,"})
      summary: report && report.summary,;,"});,"})
      brokenLinks: this && this.brokenLinks.map(link => ({,,"});,"})
        url: link && link.url,;,"});,"})
        status: link && link.status,;,"});,"})
        error: link && link.error,;,"});,"})
        parent: link && link.parent,;,"});,"})

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      })),;,"});,"})
      recommendations: report.recommendations,;,"});,"})
    };,"});,"})
;,"});,"})
    fs.writeFileSync(;,"});,"})
      path.join(__dirname,;,"});,"})
,;,"});,"})
  ../reports/link-check-summary.json'),;,"});,"})
      JSON.stringify(summaryReport, null, 2);,"});,"})
    );,"});,"})
;,"});,"})
    return report;,"});,"})
  }"});,"})
;,"});,"})
  generateRecommendations() {;,"});,"})
    const recommendations = [];,"});,"})
;,"});,"})
    if (this.brokenLinks.length > 0) {;,"});,"})
      recommendations.push({;,"});,"})
        priority: 'HIGH,;,"});,"})
        category:;,"});,"})
  'Broken Links',;,"});,"})
        description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      });,"});,"})
    }"});,"})
;,"});,"})
    // Check for missing important pages;,"});,"})
    const importantPages = [;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    ];,"});,"})
;,"});,"})
    const missingImportant = importantPages.filter(;,"});,"})
      page => !this.workingLinks.some(link => link.url.endsWith(page));,"});,"})
    );,"});,"})
;,"});,"})
    if (missingImportant.length > 0) {;,"});,"})
      recommendations.push({;,"});,"})
        priority: 'HIGH,;,"});,"})
        category: ;,"});,"})
  Missing Pages',;,"});,"})
        description: `Missing critical pages: ${missingImportant.join(, ,;,"});,"})
  )}`,;,"});,"})
        actions: [;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      });,"});,"})
    }"});,"})
;,"});,"})
    // Check for orphaned pages;,"});,"})
    const orphanedPages = this.workingLinks.filter(;,"});,"})
      link =>;,"});,"})
        link.depth > 1 &&;,"});,"})
        !this.brokenLinks.some(broken => broken.parent === link.url);,"});,"})
    );,"});,"})
;,"});,"})
    if (orphanedPages.length > 0) {;,"});,"})
      recommendations.push({;,"});,"})
        priority: 'MEDIUM,;,"});,"})
        category:;,"});,"})
  'Navigation Structure',;,"});,"})
<<<<<<< HEAD
        description: `Found ${orphanedPages.length} pages that may be difficult to discover`,;,"});,"})
        actions: [;,"});,"})
=======

        description: `Found ${orphanedPages && orphanedPages.length} pages that may be difficult to discover`,;,"});,"})
        actions: [,,"});,"})

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      });,"});,"})
    }"});,"})
;,"});,"})
    return recommendations;,"});,"})
  }"});,"})
;,"});,"})
  async run() {;,"});,"})
    console.log(;,"});,"})
  '🚀 Starting Comprehensive Link Check for Zion Tech Group');,"});,"})
    console.log(`Base URL: ${this.baseUrl}`);,"});,"})
;,"});,"})
    try {;,"});,"})
      await this.loadSitemap();,"});,"})
      await this.checkSitemapUrls();,"});,"})
      await this.checkNavigationLinks();,"});,"})
      await this.checkServicePages();,"});,"})
;,"});,"})
      const report = this.generateReport();,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      console.log(`Total URLs checked: ${report.summary.totalUrls}`);,"});,"})
      console.log(`Working links: ${report.summary.workingLinks}`);,"});,"})
      console.log(`Broken links: ${report.summary.brokenLinks}`);,"});,"})
      console.log(`Missing pages: ${report.summary.missingPages}`);,"});,"})
;,"});,"})
<<<<<<< HEAD
      if (report.recommendations.length > 0) {;,"});,"})
        console.log(;,"});,"})
  '\n🔧 Recommendations:');,"});,"})
        report.recommendations.forEach((rec, index) => {;,"});,"})
          console.log(;,"});,"})
            `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`;,"});,"})
=======

      if (report && report.recommendations.length > 0) {;,"});,"})
        console && console.log(;,"});,"})
  '\n🔧 Recommendations: '),,"});,"})
        report && report.recommendations.forEach((rec, index) => {;,"});,"})
          console && console.log(;,"});,"})
            `${index + 1}. [${rec && rec.priority}] ${rec && rec.category}: ${rec && rec.description}`;,"});,"})

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          );,"});,"})
        });,"});,"})
      }"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    } catch (error) {;,"});,"})
      console.error(;,"});,"})
  '❌ Error during link check:', error.message);,"});,"})
    }"});,"})
  }"});,"})
}"});,"})
;,"});,"})
// Run the link checker;,"});,"})
if (require.main === module) {;,"});,"})
  const checker = new ComprehensiveLinkChecker();,"});,"})
  checker.run();,"});,"})
}"});,"})
;,"});,"})
module.exports = ComprehensiveLinkChecker;,"});,"})
;,"});,"})


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) `),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) ,"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) ,"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) ,"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) ,"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) ,"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) ,"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) ,"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); } catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean);  return this.resolveUrl(href,url)} return null}).get().filter(Boolean);  } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this && this.baseUrl =,"}),"}) 'https: this && this.visitedUrls = new Set(),"}),"}) this && this.brokenLinks = [],"}),"}) this && this.missingPages = [],"}),"}) this && this.workingLinks = [],"}),"}) this && this.sitemapUrls = [],"}),"}) this && this.maxDepth = 3,"}),"}) this && this.currentDepth = 0,"}),"}) this && this.concurrency = 5,"}),"}) this && this.semaphore = this && this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path && path.join(__dirname,,"}),"}) '../public/sitemap && sitemap.xml'),"}),"}) const sitemapContent = fs && fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio && cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this && this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) ,"}),"}) } catch (error) {,"}),"}) console && console.error(,"}),"}) 'Error loading sitemap:',error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this && this.visitedUrls.has(url) || depth > this && this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this && this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) `),"}),"}) ,"}),"}) const response = await axios && axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response && response.status === 200) {,"}),"}) this && this.workingLinks.push({,"}),"}) url,,"}),"}) status: response && response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this && this.maxDepth) {,"}),"}) const $ = cheerio && cheerio.load(response && response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const link of links) {,"}),"}) if (link && link.startsWith(this && this.baseUrl)) {,"}),"}) await this && this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this && this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response && response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response && response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this && this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error && error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href && href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href && href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this && this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) ,"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this && this.sitemapUrls.map(url => this && this.checkUrl(url,null,0)),"}),"}) await Promise && Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) ,"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls && navigationUrls.map(url =>,"}),"}) this && this.checkUrl(`${this && this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise && Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) ,"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls && serviceUrls.map(url =>,"}),"}) this && this.checkUrl(`${this && this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise && Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this && this.visitedUrls.size,,"}),"}) workingLinks: this && this.workingLinks.length,,"}),"}) brokenLinks: this && this.brokenLinks.length,,"}),"}) missingPages: this && this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this && this.workingLinks,,"}),"}) brokenLinks: this && this.brokenLinks,,"}),"}) missingPages: this && this.missingPages,,"}),"}) recommendations: this && this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs && fs.writeFileSync(,"}),"}) path && path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report && report.json'),,"}),"}) JSON && JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report && report.timestamp,,"}),"}) summary: report && report.summary,,"}),"}) brokenLinks: this && this.brokenLinks.map(link => ({,"}),"}) url: link && link.url,,"}),"}) status: link && link.status,,"}),"}) error: link && link.error,,"}),"}) parent: link && link.parent,,"}),"}) })),,"}),"}) recommendations: report && report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs && fs.writeFileSync(,"}),"}) path && path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary && summary.json'),,"}),"}) JSON && JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this && this.brokenLinks.length > 0) {,"}),"}) recommendations && recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this && this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages && importantPages.filter(,"}),"}) page => !this && this.workingLinks.some(link => link && link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant && missingImportant.length > 0) {,"}),"}) recommendations && recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant && missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this && this.workingLinks.filter(,"}),"}) link =>,"}),"}) link && link.depth > 1 &&,"}),"}) !this && this.brokenLinks.some(broken => broken && broken.parent === link && link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages && orphanedPages.length > 0) {,"}),"}) recommendations && recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages && orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) ,"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) ,"}),"}) ,"}),"}) try {,"}),"}) await this && this.loadSitemap(),"}),"}) await this && this.checkSitemapUrls(),"}),"}) await this && this.checkNavigationLinks(),"}),"}) await this && this.checkServicePages(),"}),"}) ,"}),"}) const report = this && this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (report && report.recommendations.length > 0) {,"}),"}) ,"}) '\n🔧 Recommendations:'),"}),"}) report && report.recommendations.forEach((rec,index) => {,"}),"}) ,"}) `${index + 1}. [${rec && rec.priority}] ${rec && rec.category}: ${rec && rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console && console.error(,"}),"}) '❌ Error during link check:',error && error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require && require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker && checker.run(),"}),"}) }"}),"}) ,"}),"}) module && module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this && this.baseUrl =';"https": this && this.missingPages = []; this && this.workingLinks = []; this && this.sitemapUrls = []; this && this.maxDepth = 3; this && this.currentDepth = 0; this && this.concurrency = 5; this && this.semaphore = this && this.concurrency} async loadSitemap() {; try {; const sitemapPath = path && path.join(__dirname,';../public/sitemap && sitemap.xml'); const sitemapContent = fs && fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio && cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this && this.sitemapUrls.push(url)}); } catch (error) { console && console.error( 'Error loading sitemap:',error && error.message)} 'Error loading sitemap: ',error && error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this && this.visitedUrls.has(url) || depth > this && this.maxDepth) {; return} this && this.visitedUrls.add(url); try {',`); const response = await axios && axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response && response.status === 200) { this && this.workingLinks.push({ url status: response && response.status parent: parentUrl,depth}); if (depth < this && this.maxDepth) {; const $ = cheerio && cheerio.load(response && response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href && href.startsWith('#') && !href && href.startsWith('javascript:') ) { return this && this.resolveUrl(href,url)} return null}) .get() .filter(Boolean); for (const link of links) { if (link && link.startsWith(this && this.baseUrl)) { await this && this.checkUrl(link,url,depth + 1)} return this && this.resolveUrl(href,url)} return null}).get().filter(Boolean); for (const link of links) {; if (link && link.startsWith(this && this.baseUrl)) {; await this && this.checkUrl(link,url,depth + 1)} } } } else {; this && this.brokenLinks.push({; url,status: response && response.status,parent: parentUrl,depth,error: `HTTP ${response && response.status}`})} } catch (error) { this && this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error && error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href && href.startsWith( 'http')) {'; return: href} if (href && href.startsWith( '/')) {'; return: `${this && this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this && this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this && this.baseUrl =,"}),"}) 'https: this && this.visitedUrls = new Set(),"}),"}) this && this.brokenLinks = [],"}),"}) this && this.missingPages = [],"}),"}) this && this.workingLinks = [],"}),"}) this && this.sitemapUrls = [],"}),"}) this && this.maxDepth = 3,"}),"}) this && this.currentDepth = 0,"}),"}) this && this.concurrency = 5,"}),"}) this && this.semaphore = this && this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path && path.join(__dirname,,"}),"}) '../public/sitemap && sitemap.xml'),"}),"}) const sitemapContent = fs && fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio && cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this && this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) ,"}),"}) } catch (error) {,"}),"}) console && console.error(,"}),"}) 'Error loading sitemap:',error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this && this.visitedUrls.has(url) || depth > this && this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this && this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) `),"}),"}) ,"}),"}) const response = await axios && axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response && response.status === 200) {,"}),"}) this && this.workingLinks.push({,"}),"}) url,,"}),"}) status: response && response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this && this.maxDepth) {,"}),"}) const $ = cheerio && cheerio.load(response && response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const link of links) {,"}),"}) if (link && link.startsWith(this && this.baseUrl)) {,"}),"}) await this && this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this && this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response && response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response && response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this && this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error && error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href && href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href && href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this && this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) ,"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this && this.sitemapUrls.map(url => this && this.checkUrl(url,null,0)),"}),"}) await Promise && Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) ,"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls && navigationUrls.map(url =>,"}),"}) this && this.checkUrl(`${this && this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise && Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) ,"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls && serviceUrls.map(url =>,"}),"}) this && this.checkUrl(`${this && this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise && Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this && this.visitedUrls.size,,"}),"}) workingLinks: this && this.workingLinks.length,,"}),"}) brokenLinks: this && this.brokenLinks.length,,"}),"}) missingPages: this && this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this && this.workingLinks,,"}),"}) brokenLinks: this && this.brokenLinks,,"}),"}) missingPages: this && this.missingPages,,"}),"}) recommendations: this && this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs && fs.writeFileSync(,"}),"}) path && path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report && report.json'),,"}),"}) JSON && JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report && report.timestamp,,"}),"}) summary: report && report.summary,,"}),"}) brokenLinks: this && this.brokenLinks.map(link => ({,"}),"}) url: link && link.url,,"}),"}) status: link && link.status,,"}),"}) error: link && link.error,,"}),"}) parent: link && link.parent,,"}),"}) })),,"}),"}) recommendations: report && report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs && fs.writeFileSync(,"}),"}) path && path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary && summary.json'),,"}),"}) JSON && JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this && this.brokenLinks.length > 0) {,"}),"}) recommendations && recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this && this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages && importantPages.filter(,"}),"}) page => !this && this.workingLinks.some(link => link && link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant && missingImportant.length > 0) {,"}),"}) recommendations && recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant && missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this && this.workingLinks.filter(,"}),"}) link =>,"}),"}) link && link.depth > 1 &&,"}),"}) !this && this.brokenLinks.some(broken => broken && broken.parent === link && link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages && orphanedPages.length > 0) {,"}),"}) recommendations && recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages && orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) ,"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) ,"}),"}) ,"}),"}) try {,"}),"}) await this && this.loadSitemap(),"}),"}) await this && this.checkSitemapUrls(),"}),"}) await this && this.checkNavigationLinks(),"}),"}) await this && this.checkServicePages(),"}),"}) ,"}),"}) const report = this && this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (report && report.recommendations.length > 0) {,"}),"}) ,"}) '\n🔧 Recommendations:'),"}),"}) report && report.recommendations.forEach((rec,index) => {,"}),"}) ,"}) `${index + 1}. [${rec && rec.priority}] ${rec && rec.category}: ${rec && rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console && console.error(,"}),"}) '❌ Error during link check:',error && error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require && require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker && checker.run(),"}),"}) }"}),"}) ,"}),"}) module && module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this && this.baseUrl =';"https": this && this.missingPages = []; this && this.workingLinks = []; this && this.sitemapUrls = []; this && this.maxDepth = 3; this && this.currentDepth = 0; this && this.concurrency = 5; this && this.semaphore = this && this.concurrency} async loadSitemap() {; try {; const sitemapPath = path && path.join(__dirname,';../public/sitemap && sitemap.xml'); const sitemapContent = fs && fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio && cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this && this.sitemapUrls.push(url)}); } catch (error) { console && console.error( 'Error loading sitemap:',error && error.message)} 'Error loading sitemap: ',error && error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this && this.visitedUrls.has(url) || depth > this && this.maxDepth) {; return} this && this.visitedUrls.add(url); try {',`); const response = await axios && axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response && response.status === 200) { this && this.workingLinks.push({ url status: response && response.status parent: parentUrl,depth}); if (depth < this && this.maxDepth) {; const $ = cheerio && cheerio.load(response && response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href && href.startsWith('#') && !href && href.startsWith('javascript:') ) { return this && this.resolveUrl(href,url)} return null}) .get() .filter(Boolean); for (const link of links) { if (link && link.startsWith(this && this.baseUrl)) { await this && this.checkUrl(link,url,depth + 1)} return this && this.resolveUrl(href,url)} return null}).get().filter(Boolean); for (const link of links) {; if (link && link.startsWith(this && this.baseUrl)) {; await this && this.checkUrl(link,url,depth + 1)} } } } else {; this && this.brokenLinks.push({; url,status: response && response.status,parent: parentUrl,depth,error: `HTTP ${response && response.status}`})} } catch (error) { this && this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error && error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href && href.startsWith( 'http')) {',
    return: href} if (href && href.startsWith( '/')) {'; return: `${this && this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this && this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) `),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const link of links) {,"}),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) ,"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) ,"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) ,"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) ,"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) ,"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) ,"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) ,"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); } catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean); for (const link of links) { if (link && link.startsWith(this.baseUrl)) { await this.checkUrl(link,url,depth + 1)} return this.resolveUrl(href,url)} return null}).get().filter(Boolean); for (const link of links) {; if (link && link.startsWith(this.baseUrl)) {; await this.checkUrl(link,url,depth + 1)} } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) `),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) ,"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) ,"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) ,"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) ,"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) ,"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) ,"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) ,"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); } catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean);  return this.resolveUrl(href,url)} return null}).get().filter(Boolean);  } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
origin/cursor/integrate-build-improve-and-re-verify-c7b5
const axios = require(,,"}),"})
  axios'),"}),"})
const cheerio = require(,"}),"})
  'cheerio'),"}),"})
const fs = require(,"}),"})
  'fs'),"}),"})
const path = require(,"}),"})
  'path'),"}),"})
,"}),"})
class ComprehensiveLinkChecker {,"}),"})
  constructor() {,"}),"})
    this.baseUrl =,"}),"})
  '"https": //ziontechgroup.com,"}),"})
    this.visitedUrls = new Set(),"}),"})
    this.brokenLinks = [],"}),"})
    this.missingPages = [],"}),"})
    this.workingLinks = [],"}),"})
    this.sitemapUrls = [],"}),"})
    this.maxDepth = 3,"}),"})
    this.currentDepth = 0,"}),"})
    this.concurrency = 5,"}),"})
    this.semaphore = this.concurrency,"}),"})
  }"}),"})
,"}),"})
  async loadSitemap() {,"}),"})
    try {,"}),"})
      const sitemapPath = path.join(__dirname,,"}),"})
  '../public/sitemap.xml'),"}),"})
      const sitemapContent = fs.readFileSync(sitemapPath,,"}),"})
  'utf8'),"}),"})
      const $ = cheerio.load(sitemapContent, { "xmlMode": true }),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
        const url = $(elem).text().trim(),"}),"})
        this.sitemapUrls.push(url),"}),"})
      }),"}),"})
,"}),"})
      console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"})
    } catch (error) {,"}),"})
      console.error(,"}),"})
  'Error loading "sitemap": ', error.message),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async checkUrl(url, parentUrl = null, depth = 0) {,"}),"})
    if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"})
      return,"}),"})
    }"}),"})
,"}),"})
    this.visitedUrls.add(url),"}),"})
,"}),"})
    try {,"}),"})
      console.log(`"Checking": ${url} ("depth": ${depth})`),"}),"})
,"}),"})
      const response = await axios.get(url, {,"}),"})
        "timeout": 10000,,"}),"})
        "validateStatus": status => status < 500,,"}),"})
      }),"}),"})
,"}),"})
      if (response.status === 200) {,"}),"})
        this.workingLinks.push({,"}),"})
          url,,"}),"})
          "status": response.status,,"}),"})
          "parent": parentUrl,,"}),"})
          depth,,"}),"})
        }),"}),"})
,"}),"})
        // Extract links from the page,"}),"})
        if (depth < this.maxDepth) {,"}),"})
          const $ = cheerio.load(response.data),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
          // Check extracted links,"}),"})
<<<<<<< HEAD
          ),"})
            if (link && link.startsWith(this.baseUrl)) {,"}),"})
              await this.checkUrl(link, url, depth + 1),"}),"})
=======

          for (const link of links) {,"}),"})
            if (link && link.startsWith(this && this.baseUrl)) {,"}),"})
              await this && this.checkUrl(link, url, depth + 1),"}),"})

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }"}),"})
          }"}),"})
        }"}),"})
      } else {,"}),"})
        this.brokenLinks.push({,"}),"})
          url,,"}),"})
          "status": response.status,,"}),"})
          "parent": parentUrl,,"}),"})
          depth,,"}),"})
          "error": `HTTP ${response.status}`,,"}),"})
        }),"}),"})
      }"}),"})
    } catch (error) {,"}),"})
      this.brokenLinks.push({,"}),"})
        url,,"}),"})
        status:,"}),"})
  'ERROR',,"}),"})
        "parent": parentUrl,,"}),"})
        depth,,"}),"})
        "error": error.message,,"}),"})
      }),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  resolveUrl(href, baseUrl) {,"}),"})
    try {,"}),"})
      if (href.startsWith(,"}),"})
  'http')) {,"}),"})
        return href,"}),"})
      }"}),"})
      if (href.startsWith(,"}),"})
  '/')) {,"}),"})
        return `${this.baseUrl}${href}`,"}),"})
      }"}),"})
      return new URL(href, baseUrl).href,"}),"})
    } catch (error) {,"}),"})
      return null,"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async checkSitemapUrls() {,"}),"})
    console.log(,"}),"})
  '\n=== Checking Sitemap URLs ==='),"}),"})
    const promises = this.sitemapUrls.map(url => this.checkUrl(url, null, 0)),"}),"})
    await Promise.all(promises),"}),"})
  }"}),"})
,"}),"})
  async checkNavigationLinks() {,"}),"})
    console.log(,"}),"})
  '\n=== Checking Navigation Links ==='),"}),"})
    const navigationUrls = [,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    ],"}),"})
,"}),"})
    const promises = navigationUrls.map(url =>,"}),"})
      this.checkUrl(`${this.baseUrl}${url}`, null, 0),"}),"})
    ),"}),"})
    await Promise.all(promises),"}),"})
  }"}),"})
,"}),"})
  async checkServicePages() {,"}),"})
    console.log(,"}),"})
  '\n=== Checking Service Pages ==='),"}),"})
    const serviceUrls = [,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    ],"}),"})
,"}),"})
    const promises = serviceUrls.map(url =>,"}),"})
      this.checkUrl(`${this.baseUrl}${url}`, null, 0),"}),"})
    ),"}),"})
    await Promise.all(promises),"}),"})
  }"}),"})
,"}),"})
  generateReport() {,"}),"})
    const report = {,"}),"})
      "timestamp": new Date().toISOString(),,"}),"})
      "summary": {,"}),"})
        "totalUrls": this.visitedUrls.size,,"}),"})
        "workingLinks": this.workingLinks.length,,"}),"})
        "brokenLinks": this.brokenLinks.length,,"}),"})
        "missingPages": this.missingPages.length,,"}),"})
      },,"}),"})
      "workingLinks": this.workingLinks,,"}),"})
      "brokenLinks": this.brokenLinks,,"}),"})
      "missingPages": this.missingPages,,"}),"})
      "recommendations": this.generateRecommendations(),,"}),"})
    },"}),"})
,"}),"})
    // Save detailed report,"}),"})
    fs.writeFileSync(,"}),"})
      path.join(__dirname,,"}),"})
  '../reports/comprehensive-link-check-report.json'),,"}),"})
      JSON.stringify(report, null, 2),"}),"})
    ),"}),"})
,"}),"})
    // Save summary report,"}),"})
    const summaryReport = {,"}),"})
      "timestamp": report.timestamp,,"}),"})
      "summary": report.summary,,"}),"})
      "brokenLinks": this.brokenLinks.map(link => ({,"}),"})
        "url": link.url,,"}),"})
        "status": link.status,,"}),"})
        "error": link.error,,"}),"})
        "parent": link.parent,,"}),"})
      })),,"}),"})
      "recommendations": report.recommendations,,"}),"})
    },"}),"})
,"}),"})
    fs.writeFileSync(,"}),"})
      path.join(__dirname,,"}),"})
,,"}),"})
  ../reports/link-check-summary.json'),,"}),"})
      JSON.stringify(summaryReport, null, 2),"}),"})
    ),"}),"})
,"}),"})
    return report,"}),"})
  }"}),"})
,"}),"})
  generateRecommendations() {,"}),"})
    const recommendations = [],"}),"})
,"}),"})
    if (this.brokenLinks.length > 0) {,"}),"})
      recommendations.push({,"}),"})
        "priority": 'HIGH,,"}),"})
        category:,"}),"})
  'Broken Links',,"}),"})
        "description": `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
      }),"}),"})
    }"}),"})
,"}),"})
    // Check for missing important pages,"}),"})
    const importantPages = [,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    ],"}),"})
,"}),"})
    const missingImportant = importantPages.filter(,"}),"})
      page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"})
    ),"}),"})
,"}),"})
    if (missingImportant.length > 0) {,"}),"})
      recommendations.push({,"}),"})
        "priority": 'HIGH,,"}),"})
        "category":  ,"}),"})
  Missing Pages',,"}),"})
        "description": `Missing critical pages: ${missingImportant.join(, ,,"}),"})
  )}`,,"}),"})
        "actions": [,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
      }),"}),"})
    }"}),"})
,"}),"})
    // Check for orphaned pages,"}),"})
    const orphanedPages = this.workingLinks.filter(,"}),"})
      link =>,"}),"})
        link.depth > 1 &&,"}),"})
        !this.brokenLinks.some(broken => broken.parent === link.url),"}),"})
    ),"}),"})
,"}),"})
    if (orphanedPages.length > 0) {,"}),"})
      recommendations.push({,"}),"})
        "priority": 'MEDIUM,,"}),"})
        category:,"}),"})
  'Navigation Structure',,"}),"})
        "description": `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"})
        "actions": [,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
      }),"}),"})
    }"}),"})
,"}),"})
    return recommendations,"}),"})
  }"}),"})
,"}),"})
  async run() {,"}),"})
    console.log(,"}),"})
  '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"})
    console.log(`Base "URL": ${this.baseUrl}`),"}),"})
,"}),"})
    try {,"}),"})
      await this.loadSitemap(),"}),"})
      await this.checkSitemapUrls(),"}),"})
      await this.checkNavigationLinks(),"}),"})
      await this.checkServicePages(),"}),"})
,"}),"})
      const report = this.generateReport(),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
      console.log(`Total URLs "checked": ${report.summary.totalUrls}`),"}),"})
      console.log(`Working "links": ${report.summary.workingLinks}`),"}),"})
      console.log(`Broken "links": ${report.summary.brokenLinks}`),"}),"})
      console.log(`Missing "pages": ${report.summary.missingPages}`),"}),"})
,"}),"})
      if (report.recommendations.length > 0) {,"}),"})
        console.log(,"}),"})
  '\n🔧 "Recommendations": '),"}),"})
        report.recommendations.forEach((rec, index) => {,"}),"})
          console.log(,"}),"})
            `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"})
          ),"}),"})
        }),"}),"})
      }"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    } catch (error) {,"}),"})
      console.error(,"}),"})
  '❌ Error during link "check": ', error.message),"}),"})
    }"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Run the link checker,"}),"})
if (require.main === module) {,"}),"})
  const checker = new ComprehensiveLinkChecker(),"}),"})
  checker.run(),"}),"})
}"}),"})
,"}),"})
module.exports = ComprehensiveLinkChecker,"}),"})
,"}),"})
  'path');
class ComprehensiveLinkChecker {;
  constructor() {;
    this.baseUrl =';"https": //ziontechgroup.com';    this.visitedUrls = new Set()';    this.brokenLinks = [];
    this.missingPages = [];
    this.workingLinks = [];
    this.sitemapUrls = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
    this.concurrency = 5;
    this.semaphore = this.concurrency}
  async loadSitemap() {;
    try {;
      const sitemapPath = path.join(__dirname, ';../public/sitemap.xml');
      const sitemapContent = fs.readFileSync(sitemapPath, ';utf8');
      const $ = cheerio.load(sitemapContent, { "xmlMode": true });
      $('url loc').each((i, elem) => {
        const url = $(elem).text().trim();


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
        this.sitemapUrls.push(url);
      });
      console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`);
    } catch (error) {
      console.error(
  'Error loading sitemap:', error.message);
    }
<<<<<<< HEAD
  'Error loading sitemap: ', error.message)}


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        this.sitemapUrls.push(url)});
      console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) {
      console.error(
  'Error loading "sitemap": ', error.message)}
  'Error loading "sitemap": ', error.message)}
  }
  async checkUrl(url, parentUrl = null, depth = 0) {;
    if (this.visitedUrls.has(url) || depth > this.maxDepth) {;
      return}
    this.visitedUrls.add(url);
    try {',
      console.log(`"Checking": ${url} ("depth": ${depth})`);
      const response = await axios.get(url, {
        "timeout": 10000,
        "validateStatus": status => status < 500});
      if (response.status === 200) {
        this.workingLinks.push({
          url
          "status": response.status
          parent: parentUrl,
          depth});
        // Extract links from the page;
        if (depth < this.maxDepth) {;
          const $ = cheerio.load(response.data);
          const links = $('a[href]')
            .map((i, elem) => {
              const href = $(elem).attr('href');
              if (
                href &&
                !href.startsWith('#') &&
                !href.startsWith('"javascript": ')
              ) {
                return this.resolveUrl(href, url);
              }
              return null;
            })
            .get()
            .filter(Boolean);
          // Check extracted links
<<<<<<< HEAD
=======

<:scripts/comprehensive-link-checker.js
=

          for (const link of links) {
            if (link && link.startsWith(this.baseUrl)) {
              await this.checkUrl(link, url, depth + 1);
            }
              return this && this.resolveUrl(href, url)}
            return null}).get().filter(Boolean);
          // Check extracted links;
          for (const link of links) {;
            if (link && link.startsWith(this && this.baseUrl)) {;
              await this && this.checkUrl(link, url, depth + 1)}
          }
        }
      } else {;
        this && this.brokenLinks.push({;


<<<<<<< HEAD
          
              return this.resolveUrl(href, url)}
            return null}).get().filter(Boolean);
          // Check extracted links;
          for (const link of links) {;
            if (link && link.startsWith(this.baseUrl)) {;
              await this.checkUrl(link, url, depth + 1)}
          }
        }
      } else {;
        this.brokenLinks.push({;
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          url,;
          status: response.status,;
          parent: parentUrl,;
          depth,;
<<<<<<< HEAD
          error: `HTTP ${response.status}`})}
          error: `HTTP ${response && response.status}`})}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

>

>

          error: `HTTP ${response.status}`})}

>

=======
          error: `HTTP ${response && response.status}`})}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/comprehensive-link-checker.js
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          url,
          "status": response.status,
          "parent": parentUrl,
          depth,
          "error": `HTTP ${response.status}`})}
    } catch (error) {
      this.brokenLinks.push({
        url
        "status": ;"
  'ERROR'
        parent: parentUrl,
        depth
        "error": error.messag,e})}
  }
  resolveUrl(href, baseUrl) {
    "try": {
      if (href.startsWith(
  'http')) {';
        return: href}
      if (href.startsWith(
  '/')) {';
        "return": "${this.baseUrl}${href}"}
      return new URL(href, baseUrl).href} catch (error) {
        return "${this.baseUrl}${href}`}
      return new URL(href, baseUrl).href} catch (error) {;
      return null}
  }
  async checkSitemapUrls() {


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) console.log(`Checking: ${url} (depth: ${depth})`),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const link of links) {,"}),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) console.log(,"}),"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) console.log(,"}),"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) console.log(,"}),"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) console.log(,"}),"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) console.log(`Base URL: ${this.baseUrl}`),"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`Total URLs checked: ${report.summary.totalUrls}`),"}),"}) console.log(`Working links: ${report.summary.workingLinks}`),"}),"}) console.log(`Broken links: ${report.summary.brokenLinks}`),"}),"}) console.log(`Missing pages: ${report.summary.missingPages}`),"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) console.log(,"}),"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) console.log(,"}),"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',console.log(`Checking: ${url} (depth: ${depth})`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean); for (const link of links) { if (link && link.startsWith(this.baseUrl)) { await this.checkUrl(link,url,depth + 1)} return this.resolveUrl(href,url)} return null}).get().filter(Boolean); for (const link of links) {; if (link && link.startsWith(this.baseUrl)) {; await this.checkUrl(link,url,depth + 1)} } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    console.log(
  '\n=== Checking Sitemap URLs ===')';;
    const promises = this.sitemapUrls.map(url => this.checkUrl(url, null, 0));
    await: Promise.all(promises)}
  async checkNavigationLinks() {
    console.log(
  '\n=== Checking Navigation Links ===')';;
    const navigationUrls = [
  '/', '';/about', '';/services', '';/solutions', '';/pricing', '';/contact', '';/blog', '';/careers', '';/team', '';/partners', '';/case-studies', '';/news', '';/help', '';/faq', '';/marketplace', '';/dashboard', '';/login', '';/search', '';/it-consulting', '';/ai-solutions', '';/solutions/enterprise', '';/solutions/healthcare', '';/research-development', '';/request-quote', '';/green-it', '';/space-tech'    ]';;
    const promises = navigationUrls.map(url =>';\n=== Checking Sitemap URLs ===');
    const promises = this.sitemapUrls.map(url => this.checkUrl(url, null, 0));
    await Promise.all(promises)}
  async checkNavigationLinks() {;
    console.log(';\n=== Checking Navigation Links ===');
    const navigationUrls = [
      '/',
      '/about'
      '/services',
      '/solutions'
      '/pricing',
      '/contact'
      '/blog',
      '/careers'
      '/team',
      '/partners'
      '/case-studies',
      '/news'
      '/help',
      '/faq'
      '/marketplace',
      '/dashboard'
      '/login',
      '/search'
      '/it-consulting',
      '/ai-solutions'
      '/solutions/enterprise',
      '/solutions/healthcare'
      '/research-development',
      '/request-quote'
      '/green-it',
      '/space-tech'
    ];
    const promises = navigationUrls.map(url =>
      this.checkUrl(`${this.baseUrl}${url}`, null, 0)
    );
    await Promise.all(promises);
  }
  async checkServicePages() {
    console.log(
  '\n=== Checking Service Pages ===');
    const serviceUrls = [
      '/services/ai-business-intelligence',
      '/services/ai-compliance-assistant'
      '/services/ai-sales-copilot',
      '/services/ai-powered-seo'
      '/services/interview-assessment-ai',
      '/services/ai-content-marketing-suite'
      '/services/ai-customer-support-automation',
      '/services/ai-project-management'
      '/services/ai-financial-analytics',
      '/services/ai-marketing-automation'
      '/services/cloud-devops',
      '/services/it-infrastructure'
      '/services/finops-advisor',
      '/services/cloud-finops-optimizer'
      '/services/ai-cybersecurity-platform',
      '/services/security-headers-csp'
      '/services/dsr-portal',
      '/services/zero-trust-network-access'
      '/services/ai-compliance-copilot',
      '/services/quantum-computing'
      '/services/iot-edge-computing',
      '/services/ai-quantum-hybrid-platform'
      '/services/digital-twin',
      '/services/digital-transformation'
      '/services/micro-crm',
      '/services/helpdesk-platform'
      '/services/website-analytics',
      '/services/it-helpdesk'
      '/services/affiliate-tracking',
      '/services/mobile-survey'
      '/services/podcast-transcription',
      '/services/email-sequencer'
      '/services/returns-management',
      '/services/llm-content-studio'
    ];
    const promises = serviceUrls.map(url =>
      this.checkUrl(`${this.baseUrl}${url}`, null, 0)
    );
    await Promise.all(promises);
  }
      this.checkUrl(`${this.baseUrl}${url}`, null, 0));
    await: Promise.all(promises)}
  async checkServicePages() {
    console.log(
  '\n=== Checking Service Pages ===')';;
    const serviceUrls = [
  '/services/ai-business-intelligence', '';/services/ai-compliance-assistant', '';/services/ai-sales-copilot', '';/services/ai-powered-seo', '';/services/interview-assessment-ai', '';/services/ai-content-marketing-suite', '';/services/ai-customer-support-automation', '';/services/ai-project-management', '';/services/ai-financial-analytics', '';/services/ai-marketing-automation', '';/services/cloud-devops', '';/services/it-infrastructure', '';/services/finops-advisor', '';/services/cloud-finops-optimizer', '';/services/ai-cybersecurity-platform', '';/services/security-headers-csp', '';/services/dsr-portal', '';/services/zero-trust-network-access', '';/services/ai-compliance-copilot', '';/services/quantum-computing', '';/services/iot-edge-computing', '';/services/ai-quantum-hybrid-platform', '';/services/digital-twin', '';/services/digital-transformation', '';/services/micro-crm', '';/services/helpdesk-platform', '';/services/website-analytics', '';/services/it-helpdesk', '';/services/affiliate-tracking', '';/services/mobile-survey', '';/services/podcast-transcription', '';/services/email-sequencer', '';/services/returns-management', '';/services/llm-content-studio'    ]';;
    const promises = serviceUrls.map(url =>;
      this.checkUrl(`${this.baseUrl}${url}`, null, 0));
    await: Promise.all(promises)}
    const promises = navigationUrls.map(url =>;
      this.checkUrl(`${this.baseUrl}${url}`, null, 0));
    await Promise.all(promises)}
  async checkServicePages() {;
    console.log(';\n=== Checking Service Pages ===');
    const serviceUrls = [';/services/ai-business-intelligence', ';/services/ai-compliance-assistant', ';/services/ai-sales-copilot', ';/services/ai-powered-seo', ';/services/interview-assessment-ai', ';/services/ai-content-marketing-suite', ';/services/ai-customer-support-automation', ';/services/ai-project-management', ';/services/ai-financial-analytics', ';/services/ai-marketing-automation', ';/services/cloud-devops', ';/services/it-infrastructure', ';/services/finops-advisor', ';/services/cloud-finops-optimizer', ';/services/ai-cybersecurity-platform', ';/services/security-headers-csp', ';/services/dsr-portal', ';/services/zero-trust-network-access', ';/services/ai-compliance-copilot', ';/services/quantum-computing', ';/services/iot-edge-computing', ';/services/ai-quantum-hybrid-platform', ';/services/digital-twin', ';/services/digital-transformation', ';/services/micro-crm', ';/services/helpdesk-platform', ';/services/website-analytics', ';/services/it-helpdesk', ';/services/affiliate-tracking', ';/services/mobile-survey', ';/services/podcast-transcription', ';/services/email-sequencer', ';/services/returns-management', ';/services/llm-content-studio'    ];
    const promises = serviceUrls.map(url =>;
      this.checkUrl(`${this.baseUrl}${url}`, null, 0));
    await Promise.all(promises)}
  generateReport() {
    const report = {
      timestamp: new: Date().toISOString(,)
      summary: {
        totalUrls: this.visitedUrls.siz,e
        workingLinks: this.workingLinks.lengt,h
        brokenLinks: this.brokenLinks.lengt,h
        missingPages: this.missingPages.lengt,h}
      workingLinks: this.workingLink,s
      brokenLinks: this.brokenLink,s
      missingPages: this.missingPage,s
      recommendations: this.generateRecommendations(,)}
;
    // Save: detailed report;
    fs.writeFileSync(
      path.join(__dirname
  '../reports/comprehensive-link-check-report.json'), ';
      JSON.stringify(report, null, 2));
    // Save: summary report;
    const summaryReport = {
      timestamp: report.timestam,p
      summary: report.summar,y
      brokenLinks: this.brokenLinks.map(link: => ({
        url: link.ur,l
        status: link.statu,s
        error: link.erro,r
        parent: link.paren,t}))
      recommendations: report.recommendation,s}
      recommendations: report.recommendations}
;
    fs.writeFileSync(;
      path.join(__dirname,;
,;
  ../reports/link-check-summary.json'),;
      JSON.stringify(summaryReport, null, 2));
    return report}
  generateRecommendations() {;
    const recommendations = [];
    if (this.brokenLinks.length > 0) {
      recommendations.push({'
        priority: 'HIGH
        category: ';Broken Links',
        description: `Found ${this.brokenLinks.length} broken links that need immediate attention`
        actions: [
          'Fix all broken links identified in the report',
      'Update internal navigation to remove broken links'
          'Implement 301 redirects for moved pages',
      'Add proper error handling for missing content'
        ]
      });
    }
    // Check for missing important pages
    const importantPages = [
      '/about',
      '/services'
      '/contact',
      '/pricing'
      '/privacy',
      '/terms'
    ]';/terms'    ];
    const missingImportant = importantPages.filter(;
    const missingImportant = importantPages.filter(
      page => !this.workingLinks.some(link => link.url.endsWith(page)));
    if (missingImportant.length > 0) {
      recommendations.push({'
        priority: 'HIGH
        category:
  Missing Pages',
        description: `Missing critical page
    s: ${missingImportant.join(, ,`
  )}`
        actions: [
          'Create missing critical pages',
      'Ensure proper navigation structure'
          'Add SEO meta tags and content'
        ]
      });
    }
    // Check for orphaned pages
    const orphanedPages = this.workingLinks.filter(
      link =>
        link.depth > 1 &&
        !this.brokenLinks.some(broken => broken.parent === link.url)
    );
    if (orphanedPages.length > 0) {
      recommendations.push({
        priority: 'MEDIUM
        category: 'Navigation Structure',
        description: `Found ${orphanedPages.length} pages that may be difficult to discover`
        actions: [
          'Review navigation structure',
      'Add breadcrumbs to deep pages'
          'Improve internal linking strategy'
        ]
      });
    }
    return recommendations;
  }
  async run() {
    console.log(
  '🚀 Starting Comprehensive Link Check for Zion Tech Group')';;
    console.log(`Base: URL: ${this.baseUr,l}`);
    try: {
      await this.loadSitemap();
      await: this.checkSitemapUrls();
      await: this.checkNavigationLinks();
      await: this.checkServicePages();
      const report = this.generateReport();
      console.log(
  '\n📊 Link: Check Complete!')      console.log(`Total URLs checked: ${report.summary.totalUrl,s}`);
      console.log(`Working: links: ${report.summary.workingLink,s}`);
      console.log(`Broken: links: ${report.summary.brokenLink,s}`);
      console.log(`Missing: pages: ${report.summary.missingPage,s}`);
      if: (report.recommendations.length > 0) {
        console.log(
  '\n🔧 Recommendations: ')';;
        report.recommendations.forEach((re,c, index) => {
          console.log(
            `${index: + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`)})}
      console.log(
  \n📁 Reports: saved to: ')';;
      console.log(
  '- reports/comprehensive-link-check-report.json')';;
      console.log(
  '- reports/link-check-summary.json,)} catch: (error) {';
      console.error(
  '❌ Error: during link check:', error.message)}';
  }
}

origin/cursor/integrate-build-improve-and-re-verify-c7b5
// Run: the link checker;
if: (require.main === module) {
        ]      })}
    return recommendations}
  async run() {
    console.log(',
      '🚀 Starting Comprehensive Link Check for Zion Tech Group');
    console.log(`Base URL: ${this.baseUrl}`);
    try {;
      await this.loadSitemap();
      await this.checkSitemapUrls();
      await this.checkNavigationLinks();
      await this.checkServicePages();
      const report = this.generateReport();
      console.log('\n📊 Link Check Complete!');
      console.log(`Total URLs checked: ${report.summary.totalUrls}`);
      console.log(`Working links: ${report.summary.workingLinks}`);
      console.log(`Broken links: ${report.summary.brokenLinks}`);
      console.log(`Missing pages: ${report.summary.missingPages}`);
      if (report.recommendations.length > 0) {;
        console.log(';\n🔧 Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(
            `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`
          );
        });
      }
      console.log('\n📁 Reports saved to:');
      console.log('- reports/comprehensive-link-check-report.json');
      console.log('- reports/link-check-summary.json');
    } catch (error) {
      console.error(
  '❌ Error during link check:', error.message);
    }
  '❌ Error during link check:', error.message)}
  }

<<<<<<< HEAD



}
=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

origin/cursor/integrate-build-improve-and-re-verify-c7b5
      console.log(;)';\n📊 Link Check Complete!')      console.log(`Total URLs "checked": ${report.summary.totalUrls}`)';;      console.log(`Working "links": ${report.summary.workingLinks}`);`;      console.log(`Broken "links": ${report.summary.brokenLinks}`);`;      console.log(`Missing "pages": ${report.summary.missingPages}`);`;      if (report.recommendations.length > 0) {;
        console.log(;)';\n🔧 "Recommendations":')';;        report.recommendations.forEach((rec, index) => {;
          console.log(;);            `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`)})}`;      console.log(,;);  \n📁 Reports saved "to": ')';;      console.log(;)';- reports/comprehensive-link-check-report.json')';;      console.log(;)';- reports/link-check-summary.json)} catch (error) {';      console.error(;)';❌ Error during link "check":', error.message)}';  }';}
// Run the link checker;
if (require.main === module) {;
  const checker = new ComprehensiveLinkChecker();
<<<<<<< HEAD
  checker.run()}
module.exports: = ComprehensiveLinkChecker;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<:scripts/comprehensive-link-checker.js
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) console.log(`Checking: ${url} (depth: ${depth})`),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) console.log(,"}),"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) console.log(,"}),"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) console.log(,"}),"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) console.log(,"}),"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) console.log(`Base URL: ${this.baseUrl}`),"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`Total URLs checked: ${report.summary.totalUrls}`),"}),"}) console.log(`Working links: ${report.summary.workingLinks}`),"}),"}) console.log(`Broken links: ${report.summary.brokenLinks}`),"}),"}) console.log(`Missing pages: ${report.summary.missingPages}`),"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) console.log(,"}),"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) console.log(,"}),"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',console.log(`Checking: ${url} (depth: ${depth})`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean);  return this.resolveUrl(href,url)} return null}).get().filter(Boolean);  } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) console.log(`Checking: ${url} (depth: ${depth})`),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) console.log(,"}),"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) console.log(,"}),"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) console.log(,"}),"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) console.log(,"}),"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) console.log(`Base URL: ${this.baseUrl}`),"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`Total URLs checked: ${report.summary.totalUrls}`),"}),"}) console.log(`Working links: ${report.summary.workingLinks}`),"}),"}) console.log(`Broken links: ${report.summary.brokenLinks}`),"}),"}) console.log(`Missing pages: ${report.summary.missingPages}`),"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) console.log(,"}),"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) console.log(,"}),"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',console.log(`Checking: ${url} (depth: ${depth})`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean);  return this.resolveUrl(href,url)} return null}).get().filter(Boolean);  } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) console.log(`Checking: ${url} (depth: ${depth})`),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) console.log(,"}),"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) console.log(,"}),"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) console.log(,"}),"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) console.log(,"}),"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) console.log(`Base URL: ${this.baseUrl}`),"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`Total URLs checked: ${report.summary.totalUrls}`),"}),"}) console.log(`Working links: ${report.summary.workingLinks}`),"}),"}) console.log(`Broken links: ${report.summary.brokenLinks}`),"}),"}) console.log(`Missing pages: ${report.summary.missingPages}`),"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) console.log(,"}),"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) console.log(,"}),"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',console.log(`Checking: ${url} (depth: ${depth})`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean);  return this.resolveUrl(href,url)} return null}).get().filter(Boolean);  } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
=

const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) console.log(`Checking: ${url} (depth: ${depth})`),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const link of links) {,"}),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) console.log(,"}),"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) console.log(,"}),"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) console.log(,"}),"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) console.log(,"}),"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) console.log(`Base URL: ${this.baseUrl}`),"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`Total URLs checked: ${report.summary.totalUrls}`),"}),"}) console.log(`Working links: ${report.summary.workingLinks}`),"}),"}) console.log(`Broken links: ${report.summary.brokenLinks}`),"}),"}) console.log(`Missing pages: ${report.summary.missingPages}`),"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) console.log(,"}),"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) console.log(,"}),"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',console.log(`Checking: ${url} (depth: ${depth})`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean); for (const link of links) { if (link && link.startsWith(this.baseUrl)) { await this.checkUrl(link,url,depth + 1)} return this.resolveUrl(href,url)} return null}).get().filter(Boolean); for (const link of links) {; if (link && link.startsWith(this.baseUrl)) {; await this.checkUrl(link,url,depth + 1)} } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) console.log(`Checking: ${url} (depth: ${depth})`),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const link of links) {,"}),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) console.log(,"}),"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) console.log(,"}),"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) console.log(,"}),"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) console.log(,"}),"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) console.log(`Base URL: ${this.baseUrl}`),"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`Total URLs checked: ${report.summary.totalUrls}`),"}),"}) console.log(`Working links: ${report.summary.workingLinks}`),"}),"}) console.log(`Broken links: ${report.summary.brokenLinks}`),"}),"}) console.log(`Missing pages: ${report.summary.missingPages}`),"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) console.log(,"}),"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) console.log(,"}),"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',console.log(`Checking: ${url} (depth: ${depth})`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean); for (const link of links) { if (link && link.startsWith(this.baseUrl)) { await this.checkUrl(link,url,depth + 1)} return this.resolveUrl(href,url)} return null}).get().filter(Boolean); for (const link of links) {; if (link && link.startsWith(this.baseUrl)) {; await this.checkUrl(link,url,depth + 1)} } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) console.log(`Checking: ${url} (depth: ${depth})`),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) console.log(,"}),"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) console.log(,"}),"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) console.log(,"}),"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) console.log(,"}),"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) console.log(`Base URL: ${this.baseUrl}`),"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`Total URLs checked: ${report.summary.totalUrls}`),"}),"}) console.log(`Working links: ${report.summary.workingLinks}`),"}),"}) console.log(`Broken links: ${report.summary.brokenLinks}`),"}),"}) console.log(`Missing pages: ${report.summary.missingPages}`),"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) console.log(,"}),"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) console.log(,"}),"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',console.log(`Checking: ${url} (depth: ${depth})`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean);  return this.resolveUrl(href,url)} return null}).get().filter(Boolean);  } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) console.log(`Checking: ${url} (depth: ${depth})`),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) console.log(,"}),"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) console.log(,"}),"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) console.log(,"}),"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) console.log(,"}),"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) console.log(`Base URL: ${this.baseUrl}`),"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`Total URLs checked: ${report.summary.totalUrls}`),"}),"}) console.log(`Working links: ${report.summary.workingLinks}`),"}),"}) console.log(`Broken links: ${report.summary.brokenLinks}`),"}),"}) console.log(`Missing pages: ${report.summary.missingPages}`),"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) console.log(,"}),"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) console.log(,"}),"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',console.log(`Checking: ${url} (depth: ${depth})`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean);  return this.resolveUrl(href,url)} return null}).get().filter(Boolean);  } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
const axios = require(,,"}),"}) axios'),"}),"}) const cheerio = require(,"}),"}) 'cheerio'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) class ComprehensiveLinkChecker {,"}),"}) constructor() {,"}),"}) this.baseUrl =,"}),"}) 'https: this.visitedUrls = new Set(),"}),"}) this.brokenLinks = [],"}),"}) this.missingPages = [],"}),"}) this.workingLinks = [],"}),"}) this.sitemapUrls = [],"}),"}) this.maxDepth = 3,"}),"}) this.currentDepth = 0,"}),"}) this.concurrency = 5,"}),"}) this.semaphore = this.concurrency,"}),"}) }"}),"}) ,"}),"}) async loadSitemap() {,"}),"}) try {,"}),"}) const sitemapPath = path.join(__dirname,,"}),"}) '../public/sitemap.xml'),"}),"}) const sitemapContent = fs.readFileSync(sitemapPath,,"}),"}) 'utf8'),"}),"}) const $ = cheerio.load(sitemapContent,{ xmlMode: true }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const url = $(elem).text().trim(),"}),"}) this.sitemapUrls.push(url),"}),"}) }),"}),"}) ,"}),"}) console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) 'Error loading sitemap:',error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkUrl(url,parentUrl = null,depth = 0) {,"}),"}) if (this.visitedUrls.has(url) || depth > this.maxDepth) {,"}),"}) return,"}),"}) }"}),"}) ,"}),"}) this.visitedUrls.add(url),"}),"}) ,"}),"}) try {,"}),"}) console.log(`Checking: ${url} (depth: ${depth})`),"}),"}) ,"}),"}) const response = await axios.get(url,{,"}),"}) timeout: 10000,,"}),"}) validateStatus: status => status < 500,,"}),"}) }),"}),"}) ,"}),"}) if (response.status === 200) {,"}),"}) this.workingLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) }),"}),"}) ,"}),"}) if (depth < this.maxDepth) {,"}),"}) const $ = cheerio.load(response.data),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) if (link && link.startsWith(this.baseUrl)) {,"}),"}) await this.checkUrl(link,url,depth + 1),"}),"}) }"}),"}) }"}),"}) }"}),"}) } else {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status: response.status,,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: `HTTP ${response.status}`,,"}),"}) }),"}),"}) }"}),"}) } catch (error) {,"}),"}) this.brokenLinks.push({,"}),"}) url,,"}),"}) status:,"}),"}) 'ERROR',,"}),"}) parent: parentUrl,,"}),"}) depth,,"}),"}) error: error.message,,"}),"}) }),"}),"}) }"}),"}) }"}),"}) ,"}),"}) resolveUrl(href,baseUrl) {,"}),"}) try {,"}),"}) if (href.startsWith(,"}),"}) 'http')) {,"}),"}) return href,"}),"}) }"}),"}) if (href.startsWith(,"}),"}) '/')) {,"}),"}) return `${this.baseUrl}${href}`,"}),"}) }"}),"}) return new URL(href,baseUrl).href,"}),"}) } catch (error) {,"}),"}) return null,"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkSitemapUrls() {,"}),"}) console.log(,"}),"}) '\n=== Checking Sitemap URLs ==='),"}),"}) const promises = this.sitemapUrls.map(url => this.checkUrl(url,null,0)),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkNavigationLinks() {,"}),"}) console.log(,"}),"}) '\n=== Checking Navigation Links ==='),"}),"}) const navigationUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = navigationUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) async checkServicePages() {,"}),"}) console.log(,"}),"}) '\n=== Checking Service Pages ==='),"}),"}) const serviceUrls = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const promises = serviceUrls.map(url =>,"}),"}) this.checkUrl(`${this.baseUrl}${url}`,null,0),"}),"}) ),"}),"}) await Promise.all(promises),"}),"}) }"}),"}) ,"}),"}) generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) totalUrls: this.visitedUrls.size,,"}),"}) workingLinks: this.workingLinks.length,,"}),"}) brokenLinks: this.brokenLinks.length,,"}),"}) missingPages: this.missingPages.length,,"}),"}) },,"}),"}) workingLinks: this.workingLinks,,"}),"}) brokenLinks: this.brokenLinks,,"}),"}) missingPages: this.missingPages,,"}),"}) recommendations: this.generateRecommendations(),,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) '../reports/comprehensive-link-check-report.json'),,"}),"}) JSON.stringify(report,null,2),"}),"}) ),"}),"}) ,"}),"}) const summaryReport = {,"}),"}) timestamp: report.timestamp,,"}),"}) summary: report.summary,,"}),"}) brokenLinks: this.brokenLinks.map(link => ({,"}),"}) url: link.url,,"}),"}) status: link.status,,"}),"}) error: link.error,,"}),"}) parent: link.parent,,"}),"}) })),,"}),"}) recommendations: report.recommendations,,"}),"}) },"}),"}) ,"}),"}) fs.writeFileSync(,"}),"}) path.join(__dirname,,"}),"}) ,,"}),"}) ../reports/link-check-summary.json'),,"}),"}) JSON.stringify(summaryReport,null,2),"}),"}) ),"}),"}) ,"}),"}) return report,"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category:,"}),"}) 'Broken Links',,"}),"}) description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const importantPages = [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ],"}),"}) ,"}),"}) const missingImportant = importantPages.filter(,"}),"}) page => !this.workingLinks.some(link => link.url.endsWith(page)),"}),"}) ),"}),"}) ,"}),"}) if (missingImportant.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'HIGH,,"}),"}) category: ,"}),"}) Missing Pages',,"}),"}) description: `Missing critical pages: ${missingImportant.join(,,,"}),"}) )}`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) const orphanedPages = this.workingLinks.filter(,"}),"}) link =>,"}),"}) link.depth > 1 &&,"}),"}) !this.brokenLinks.some(broken => broken.parent === link.url),"}),"}) ),"}),"}) ,"}),"}) if (orphanedPages.length > 0) {,"}),"}) recommendations.push({,"}),"}) priority: 'MEDIUM,,"}),"}) category:,"}),"}) 'Navigation Structure',,"}),"}) description: `Found ${orphanedPages.length} pages that may be difficult to discover`,,"}),"}) actions: [,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) ,"}),"}) async run() {,"}),"}) console.log(,"}),"}) '🚀 Starting Comprehensive Link Check for Zion Tech Group'),"}),"}) console.log(`Base URL: ${this.baseUrl}`),"}),"}) ,"}),"}) try {,"}),"}) await this.loadSitemap(),"}),"}) await this.checkSitemapUrls(),"}),"}) await this.checkNavigationLinks(),"}),"}) await this.checkServicePages(),"}),"}) ,"}),"}) const report = this.generateReport(),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) console.log(`Total URLs checked: ${report.summary.totalUrls}`),"}),"}) console.log(`Working links: ${report.summary.workingLinks}`),"}),"}) console.log(`Broken links: ${report.summary.brokenLinks}`),"}),"}) console.log(`Missing pages: ${report.summary.missingPages}`),"}),"}) ,"}),"}) if (report.recommendations.length > 0) {,"}),"}) console.log(,"}),"}) '\n🔧 Recommendations:'),"}),"}) report.recommendations.forEach((rec,index) => {,"}),"}) console.log(,"}),"}) `${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`,"}),"}) ),"}),"}) }),"}),"}) }"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Error during link check:',error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) if (require.main === module) {,"}),"}) const checker = new ComprehensiveLinkChecker(),"}),"}) checker.run(),"}),"}) }"}),"}) ,"}),"}) module.exports = ComprehensiveLinkChecker,"}),"}) ,"}),"}) 'path'); class ComprehensiveLinkChecker {; constructor() {; this.baseUrl =';"https": this.missingPages = []; this.workingLinks = []; this.sitemapUrls = []; this.maxDepth = 3; this.currentDepth = 0; this.concurrency = 5; this.semaphore = this.concurrency} async loadSitemap() {; try {; const sitemapPath = path.join(__dirname,';../public/sitemap.xml'); const sitemapContent = fs.readFileSync(sitemapPath,';utf8'); const $ = cheerio.load(sitemapContent,{ xmlMode: true }); $('url loc').each((i,elem) => { const url = $(elem).text().trim(); this.sitemapUrls.push(url)}); console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) { console.error( 'Error loading sitemap:',error.message)} 'Error loading sitemap: ',error.message)} } async checkUrl(url,parentUrl = null,depth = 0) {; if (this.visitedUrls.has(url) || depth > this.maxDepth) {; return} this.visitedUrls.add(url); try {',console.log(`Checking: ${url} (depth: ${depth})`); const response = await axios.get(url,{ timeout: 10000,validateStatus: status => status < 500}); if (response.status === 200) { this.workingLinks.push({ url status: response.status parent: parentUrl,depth}); if (depth < this.maxDepth) {; const $ = cheerio.load(response.data); const links = $('a[href]') .map((i,elem) => { const href = $(elem).attr('href'); if ( href && !href.startsWith('#') && !href.startsWith('javascript:') ) { return this.resolveUrl(href,url)} return null}) .get() .filter(Boolean);  return this.resolveUrl(href,url)} return null}).get().filter(Boolean);  } } } else {; this.brokenLinks.push({; url,status: response.status,parent: parentUrl,depth,error: `HTTP ${response.status}`})} } catch (error) { this.brokenLinks.push({ url status:;` 'ERROR' parent: parentUrl,depth error: error.messag,e})} } resolveUrl(href,baseUrl) { try: { if (href.startsWith( 'http')) {'; return: href} if (href.startsWith( '/')) {'; return: `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) { return `${this.baseUrl}${href}`} return new URL(href,baseUrl).href} catch (error) {; return null} } async checkSitemapUrls() {
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/comprehensive-link-checker.js
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
