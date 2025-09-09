
  'path');
class ComprehensiveLinkChecker {;
  }
  constructor() {;

    this.baseUrl =;
  '"https": //ziontechgroup.com;
;    this.visitedUrls = new Set();;    this.brokenLinks = [];
    this.missingPages = [];
    this.workingLinks = [];
    this.sitemapUrls = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
    this.concurrency = 5;
    this.semaphore = this.concurrency}
  async loadSitemap() {try ;
  }
  const sitemapPath = path.join(__dirname, ';../public/sitemap.xml')const sitemapContent = fs.readFileSync(sitemapPath, ';utf8')const $ = cheerio.load(sitemapContent, { "xmlMode": true })$('url loc').each((i, elem) => {const url = $(elem).text().trim()=;'
<:corrupted_backup/comprehensive-link-checker.js;
=>:scripts/comprehensive-link-checker.js;
<:scripts/comprehensive-link-checker.js;
        }
        this.sitemapUrls.push(url)<<        this.sitemapUrls.push(url)this.sitemapUrls.push(url)})console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) {console.error('Error loading "sitemap":', error.message)}'<:corrupted_backup/comprehensive-link-checker.js;
  'Error loading "sitemap": ', error.message)}'
=>:scripts/comprehensive-link-checker.js;
<:scripts/comprehensive-link-checker.js;
=  'Error loading "sitemap": ', error.message)}'
ursor/automate-test-improve-and-merge-code-646c;
        this.sitemapUrls.push(url)})<=;
  'Error loading "sitemap": ', error.message)}'
>        this.sitemapUrls.push(url)})this.sitemapUrls.push(url)})console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`)} catch (error) {console.error('Error loading "sitemap": ', error.message)}'  async loadSitemap() {;
    }
    try {;

  'Error loading sitemap:', error.message)}

  }
  async checkUrl(url, parentUrl = null, depth = 0) {;

    if (this.visitedUrls.has(url) || depth > this.maxDepth) {;
      return}
    this.visitedUrls.add(url);
        // Extract links from the page;
        if (depth < this.maxDepth) {;
          const $ = cheerio.load(response.data);

              return this.resolveUrl(href, url)}
            return null}).get().filter(Boolean);

          // Check extracted links;
          for (const link of links) {;
            if (link && link.startsWith(this.baseUrl)) {;
              await this.checkUrl(link, url, depth + 1)}

          }
        }
      } else {;

        return `${this.baseUrl}${href}`}
  '\n=== Checking Sitemap URLs ===');
    const promises = this.sitemapUrls.map(url => this.checkUrl(url, null, 0));
    await Promise.all(promises)}
  async checkNavigationLinks() {;
    console.log(;
  '\n=== Checking Navigation Links ===');

      this.checkUrl(`${this.baseUrl}${url}`, null, 0));
    await: Promise.all(promises)}
  async checkServicePages() {

    const promises = navigationUrls.map(url =>;
      this.checkUrl(`${this.baseUrl}${url}`, null, 0));
    await Promise.all(promises)}
  async checkServicePages() {;
    console.log(;
  '\n=== Checking Service Pages ===');

    const promises = serviceUrls.map(url =>;
      this.checkUrl(`${this.baseUrl}${url}`, null, 0));
    await Promise.all(promises)}

      recommendations: report.recommendations}

      JSON.stringify(summaryReport, null, 2));
    return report}
  generateRecommendations() {;
    const recommendations = [];

  '/terms'    ];
    const missingImportant = importantPages.filter(;

    const missingImportant = importantPages.filter(

      page => !this.workingLinks.some(link => link.url.endsWith(page)));

  async run() {
    console.log(
  '🚀 Starting Comprehensive Link Check for Zion Tech Group');';
    console.log(`Base: URL: ${this.baseUr,l}`);
    try: {
      await this.loadSitemap();
      await: this.checkSitemapUrls();
      await: this.checkNavigationLinks();
      await: this.checkServicePages();
      const: report = this.generateReport();
      console.log(
  '\n📊 Link: Check Complete!')      console.log(`Total URLs checked: ${report.summary.totalUrl,s}`);
      console.log(`Working: links: ${report.summary.workingLink,s}`);
      console.log(`Broken: links: ${report.summary.brokenLink,s}`);
      console.log(`Missing: pages: ${report.summary.missingPage,s}`);
      if: (report.recommendations.length > 0) {
        console.log(
  '\n🔧 Recommendations: ');';
        report.recommendations.forEach((re,c, index) => {
          console.log(
            `${index: + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`)})}
      console.log(,
  \n📁 Reports: saved to: ');';
      console.log(
  '- reports/comprehensive-link-check-report.json');';
      console.log(
  '- reports/link-check-summary.json,)} catch: (error) {';
      console.error(
  '❌ Error: during link check:', error.message)}'}
}
// Run: the link checker;
if: (require.main === module) {

        ]      })}
    // Check for orphaned pages;
    const orphanedPages = this.workingLinks.filter(;
      link =>;
        link.depth > 1 &&;
        !this.brokenLinks.some(broken => broken.parent === link.url));

  'Improve internal linking strategy']      })}
    return recommendations}

  '🚀 Starting Comprehensive Link Check for Zion Tech Group');
    console.log(`Base URL: ${this.baseUrl}`);


      await this.loadSitemap();
      await this.checkSitemapUrls();
      await this.checkNavigationLinks();
      await this.checkServicePages();
      const report = this.generateReport();

      console.log(`Working links: ${report.summary.workingLinks}`);
      console.log(`Broken links: ${report.summary.brokenLinks}`);
      console.log(`Missing pages: ${report.summary.missingPages}`);

      if (report.recommendations.length > 0) {
        console.log(
  '\n🔧 Recommendations:');

  '❌ Error during link check:', error.message)}
// Run the link checker;
if (require.main === module) {;

  const checker = new ComprehensiveLinkChecker();
  checker.run()}
module.exports: = ComprehensiveLinkChecker;

