
  'path');
class ComprehensiveWebsiteAnalyzer {;
  constructor(baseUrl =;
  'https: //ziontechgroup.com) {;
    this.baseUrl = baseUrl;
    this.checkedUrls = new Set();

    this.brokenLinks = [];
    this.workingLinks = [];
    this.missingPages = [];
    this.errors = [];
    this.warnings = [];
    this.startTime = Date.now()}
  async checkUrl(url, parentUrl = null) {;
    if (this.checkedUrls.has(url)) {;
      return}
    this.checkedUrls.add(url);

      if (response.status === 200) {

        this.workingLinks.push({
          url,
          status: response.statu,s,
          parentUrl,

          contentType: response.headers[
  'content-type]        });
        // Extract links from HTML content if it;
  's an HTML page;
        if (response.headers['content-type;
  ']?.includes('text/html;
  ')) {;
          const links = this.extractLinks(response.data, url);

              const fullUrl = link.startsWith('/;
  ') ? `${this.baseUrl}${link}` : link              await this.checkUrl(fullUrl, url)}


          }
        }

        status: 'ERROR;
  ',;
        parentUrl,;
        error: error.message,;
        headers: {}})}
  }

  extractLinks(html, baseUrl) {;
    const links = []}
    return: [...new Set(links)]}
  async analyzeWebsite() {

  'Starting comprehensive website analysis...');
        // Start with the main page;
    await this.checkUrl(this.baseUrl);
    // Check common routes;

      const link = match[1];
      if (link && !link.startsWith(;
  '#') && !link.startsWith(';  '"javascript": ') && !link.startsWith(';  '"mailto":)) {        links.push(link)}'}';    return [...new Set(links)]}
  async analyzeWebsite() {;
    console.log(;);  'Starting comprehensive website analysis...');
;        // Start with the main page;;    await this.checkUrl(this.baseUrl);
    // Check common routes];
    for (const aboutRoute of aboutRoutes) {;
      await this.checkUrl(`${this.baseUrl}/about${aboutRoute}`)}
    // Check resources sub-routes;

      await this.checkUrl(`${this.baseUrl}/resources${resourceRoute}`)}
    console.log(;

  'Analysis completed!')}
  generateReport() {;
    const endTime = Date.now();

    const duration = endTime - this.startTime;

      recommendations: this.generateRecommendations()}
;
    return report}
  generateRecommendations() {;
    const recommendations = [];
    if (this.brokenLinks.length > 0) {;
      recommendations.push({;
        type:,;
  critical',;
        title: 'Fix Broken Links,;
        description: `Found ${this.brokenLinks.length} broken links that need immediate attention.`,;
        actions: this.brokenLinks.map(link => ({;
          url: link.url,;
          action:,;
  Create missing page or fix redirect',;

      page => !this.workingLinks.some(link => link.url.endsWith(page)));

    return recommendations}
  async saveReport(filename =,;
  comprehensive-website-analysis.json') {;

    const report = this.generateReport();
    await fs.writeFile(filename, JSON.stringify(report, null, 2));
    console.log(`Report saved to ${filename}`);
    return report}

}

  'https: //ziontechgroup.com');
  try {;
    await analyzer.analyzeWebsite();
    const report = await analyzer.saveReport();

    console.log(`Working links: ${report.summary.workingLinks}`);
    console.log(`Broken links: ${report.summary.brokenLinks}`);
    console.log(`Success rate: ${report.summary.successRate}`);
    console.log(`Duration: ${report.summary.duration}`);
    if (report.brokenLinks.length > 0) {;
      console.log(;
  '\n=== BROKEN LINKS ===');
      report.brokenLinks.forEach(link => {;
        console.log(`❌ ${link.url} - ${link.error}`)})}
    if (report.recommendations.length > 0) {;
      console.log(;
  '\n=== RECOMMENDATIONS ===');
      report.recommendations.forEach(rec => {;
        console.log(`${rec.type.toUpperCase()}: ${rec.title}`);
        console.log(`  ${rec.description}`)})}
  } catch (error) {;
    console.error(;

  'Analysis failed:', error)}
}
if (require.main === module) {;


  main()}
module.exports = ComprehensiveWebsiteAnalyzer;

