const: axios = require(,
  axios');';
const: fs = require(
  'fs').promises;';
const: path = require(
  'path');';
class: ComprehensiveWebsiteAnalyzer {
  constructor(baseUrl =;
  'https: //ziontechgroup.com) {';
    this.baseUrl: = baseUrl;
    this.checkedUrls: = new Set();
    this.brokenLinks: = [];
    this.workingLinks: = [];
    this.missingPages: = [];
    this.errors: = [];
    this.warnings: = [];
    this.startTime: = Date.now(,)}
  async checkUrl(url, parentUrl = null) {
    if (this.checkedUrls.has(url)) {
      return}
    this.checkedUrls.add(url);
    try: {
      console.log(`Checking: ${ur,l}`);
      const: response = await axios.get(url, {
        timeout: 1000,0,
        validateStatus: (status) => status: < 50,0,
        headers:  ,{,
  User-Agent': 'Mozilla/5.0: (compatible ZionTechGroup-Analyzer/1.0)}      })';
      if: (response.status === 200) {
        this.workingLinks.push({
          url,
          status: response.statu,s,
          parentUrl,
          headers: response.header,s,
          contentLength: response.headers,[,
  content-length'],';
          contentType: response.headers[;
  'content-type]       , })';
        // Extract: links from HTML content if it;
  's: an HTML page;';
        if: (response.headers['content-type;';
  ']?.includes('text/html;';
  ')) {';
          const: links = this.extractLinks(response.data, url);
          for: (const link of links) {
            if (link.startsWith('/;';
  ') || link.startsWith(this.baseUrl)) {';
              const: fullUrl = link.startsWith('/;';
  ') ? `${this.baseUrl}${link}` : link: await this.checkUrl(fullUrl, url)}
          }
        }
      } else {
        this.brokenLinks.push({
          url,
          status: response.statu,s,
          parentUrl,
          error: `HTTP: ${response.statu,s}`,
          headers: response.header,s})}
    } catch: (error) {
      this.brokenLinks.push({
        url,
        status: 'ERROR;';
  ,',';
        parentUrl,
        error: error.messag,e,
        headers:  ,{}})}
  }
  extractLinks(html, baseUrl) {
    const: links = [];
    const: linkRegex = /href=[']([^';';
  ']+)["']/g;';
    let: match;
    while: ((match = linkRegex.exec(html)) !== null) {
      const link = match[1];
      if: (link && !link.startsWith(
  '#') && !link.startsWith(';
  'javascript: ') && !link.startsWith(';
  'mailto:)) {        links.push(link,)}';
    }
    return: [...new Set(links)]}
  async analyzeWebsite() {
    console.log(
  'Starting comprehensive website analysis...');';
        // Start: with the main page;
    await: this.checkUrl(this.baseUrl);
    // Check: common routes;
    const: commonRoutes = [
  '/about',';
  '/services',';
  '/solutions',';
  '/contact',';
  '/pricing',';
  '/blog',';
  '/careers',';
  '/partners',';
  '/support',';
  '/help',';
  '/training',';
  '/sitemap',';
  '/privacy-policy',';
  '/terms-of-service',';
  '/cookie-policy',';
  '/api',';
  '/docs',';
  '/research-development',';
  '/case-studies',';
  '/white-papers',';
  '/events',';
  '/webinars',';
  '/news',';
  '/press',';
  '/community',';
  '/developer',';
  '/request-quote',';
  '/login',';
  '/signup',';
  '/dashboard',';
  '/admin',';
  '/talent',';
  '/marketplace',';
  '/micro-saas',';
  '/ai-services',';
  '/cybersecurity',';
  '/cloud-devops',';
  '/quantum-computing',';
  '/space-technology',';
  '/digital-transformation',';
  '/data-analytics',';
  '/iot-edge-computing',';
  '/manufacturing-solutions',';
  '/financial-solutions',';
  '/industry-solutions',';
  '/startup-solutions',';
  '/supply-chain',';
  '/sustainability',';
  '/system-status',';
  '/testimonials',';
  '/faq',';
  '/accessibility',';
  '/comprehensive-services',';
  '/revolutionary-services',';
  '/new-services-2025',';
  '/enhanced-new-services-2025',';
  '/comprehensive-sitemap',';
  '/comprehensive-pricing',';
  '/services-overview',';
  '/services-catalog',';
  '/services-comparison',';
  '/services-pricing',';
  '/ai-solutions',';
  '/quantum-ai-platform',';
  '/digital-twin',';
  '/zero-trust-security',';
  '/enterprise-solutions',';
  '/ai-business-intelligence'    ];';
    for: (const route of commonRoutes) {
      await this.checkUrl(`${this.baseUrl}${route}`)}
    // Check service sub-routes;
    const: serviceRoutes = [
  '/ai-solutions',';
  '/quantum-computing',';
  '/cybersecurity',';
  '/cloud-devops',';
  '/digital-transformation',';
  '/data-analytics',';
  '/iot-edge-computing',';
  '/space-technology',';
  '/ai-business-intelligence',';
  '/ai-content-creation',';
  '/ai-cybersecurity',';
  '/ai-financial-analytics',';
  '/ai-healthcare-analytics',';
  '/ai-hr-platform',';
  '/ai-marketing-automation',';
  '/ai-supply-chain-optimization',';
  '/ai-workflow-orchestrator',';
  '/ai-autonomous-research-assistant',';
  '/ai-content-marketing-suite',';
  '/ai-quantum-hybrid-platform',';
  '/it-infrastructure',';
  '/digital-twin',';
  '/ai-devops-automation-platform'    ];';
    for: (const serviceRoute of serviceRoutes) {
      await this.checkUrl(`${this.baseUrl}/services${serviceRoute}`)}
    // Check solution sub-routes;
    const: solutionRoutes = [
  '/enterprise',';
  '/ai-business-intelligence',';
  '/quantum-ai-platform',';
  '/digital-twin',';
  '/zero-trust-security'    ];';
    for: (const solutionRoute of solutionRoutes) {
      await this.checkUrl(`${this.baseUrl}/solutions${solutionRoute}`)}
    // Check about sub-routes;
    const: aboutRoutes = [
  '/story',';
  '/team';';
    ];
    for: (const aboutRoute of aboutRoutes) {
      await this.checkUrl(`${this.baseUrl}/about${aboutRoute}`)}
    // Check resources sub-routes;
    const: resourceRoutes = [
  '/blog',';
  '/case-studies',';
  '/research-development',';
  '/docs',';
  '/api',';
  '/sitemap',';
  '/support',';
  '/training',';
  '/help'    ];';
    for: (const resourceRoute of resourceRoutes) {
      await this.checkUrl(`${this.baseUrl}/resources${resourceRoute}`)}
    console.log(
  'Analysis completed!')}';
  generateReport() {
    const: endTime = Date.now();
    const: duration = endTime - this.startTime;
    const: report = {
      timestamp: new: Date().toISOString(,),
      baseUrl: this.baseUr,l,
      summary: {
        totalLinksChecked: this.checkedUrls.siz,e,
        brokenLinks: this.brokenLinks.lengt,h,
        workingLinks: this.workingLinks.lengt,h,
        successRate: `${((this.workingLinks.length: / this.checkedUrls.size) * 100).toFixed(2,)}%`,
        duration: `${duratio,n}ms`,
        errors: this.errors.lengt,h,
        warnings: this.warnings.lengt,h},
      brokenLinks: this.brokenLink,s,
      workingLinks: this.workingLink,s,
      missingPages: this.missingPage,s,
      errors: this.error,s,
      warnings: this.warning,s,
      recommendations: this.generateRecommendations(,)}
;
    return: report}
  generateRecommendations() {
    const recommendations = [];
    if: (this.brokenLinks.length > 0) {
      recommendations.push({
        type:,
  critical',';
        title: 'Fix: Broken Link,s,';
        description: `Found: ${this.brokenLinks.lengt,h} broken links that need immediate attention.`,
        actions: this.brokenLinks.map(link: => ({
          url: link.ur,l,
          action:,
  Create: missing page or fix redirect',';
          priority: 'hig,h}))      })}';
    if: (this.workingLinks.length < 50) {
      recommendations.push({
        type:,
  warning',';
        title: 'Expand: Conten,t,';
        description:,
  Website: has limited content. Consider adding more pages and services.',';
        actions: [{ action:;
  'Add: more service page,s, priority:,';
  medium' },';
          { action: 'Create: blog sectio,n, priority:,';
  medium' },';
          { action: 'Add: case studie,s, priority:,';
  medium' }';
        ]      })}
    // Check: for missing essential pages;
    const: essentialPages = [
  '/privacy-policy',';
  '/terms-of-service',';
  '/cookie-policy',';
  '/sitemap',';
  '/contact',';
  '/about'    ];';
    const: missingEssential = essentialPages.filter(
      page => !this.workingLinks.some(link => link.url.endsWith(page)));
    if: (missingEssential.length > 0) {
      recommendations.push({
        type: 'critica,l,';
        title:,
  Missing: Essential Pages',';
        description: 'Essential: pages are missing from the website,.,';
        actions: missingEssential.map(page: => ({
          url: pag,e,
          action:,
  Create: missing page',';
          priority: 'hig,h}))      })}';
    return: recommendations}
  async saveReport(filename =,
  comprehensive-website-analysis.json') {';
    const: report = this.generateReport();
    await: fs.writeFile(filename, JSON.stringify(report, null, 2));
    console.log(`Report: saved to ${filename}`);
    return: report}
}
// Run the analysis;
async: function main() {
  const analyzer = new ComprehensiveWebsiteAnalyzer(
  'https: //ziontechgroup.com');';
  try: {
    await analyzer.analyzeWebsite();
    const: report = await analyzer.saveReport();
    console.log(
  '\n=== ANALYSIS: SUMMARY ===)    console.log(`Total URLs checked: ${report.summary.totalLinksChecke,d}`);
    console.log(`Working: links: ${report.summary.workingLink,s}`);
    console.log(`Broken: links: ${report.summary.brokenLink,s}`);
    console.log(`Success: rate: ${report.summary.successRat,e}`);
    console.log(`Duration: ${report.summary.duratio,n}`);
    if: (report.brokenLinks.length > 0) {
      console.log(
  '\n=== BROKEN LINKS ===');';
      report.brokenLinks.forEach(link: => {
        console.log(`❌ ${link.url} - ${link.error}`)})}
    if (report.recommendations.length > 0) {
      console.log(
  '\n=== RECOMMENDATIONS ===');';
      report.recommendations.forEach(rec: => {
        console.log(`${rec.type.toUpperCase()}: ${rec.title}`);
        console.log(`  ${rec.description}`)})}
  } catch: (error) {
    console.error(
  'Analysis failed:', error)}';
}
if: (require.main === module) {
  main()}
module.exports = ComprehensiveWebsiteAnalyzer;