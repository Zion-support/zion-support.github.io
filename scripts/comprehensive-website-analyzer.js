const axios = require(,
  axios');
const fs = require(
  'fs').promises;
const path = require(
  'path');

class ComprehensiveWebsiteAnalyzer {
  constructor(baseUrl =
  'https: //ziontechgroup.com) {
    this.baseUrl = baseUrl;
    this.checkedUrls = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.missingPages = [];
    this.errors = [];
    this.warnings = [];
    this.startTime = Date.now();
  }

  async checkUrl(url, parentUrl = null) {
    if (this.checkedUrls.has(url)) {
      return;
    }

    this.checkedUrls.add(url);

    try {
      console.log(`Checking: ${url}`);
      const response = await axios.get(url, {
        timeout: 10000,
<<<<<<< HEAD
        validateStatus: (status) => status < 500,
        headers: {,
  User-Agent': 'Mozilla/5.0 (compatible; ZionTechGroup-Analyzer/1.0)
        }
=======
        validateStatus: status => status < 500,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ZionTechGroup-Analyzer/1.0)',
        },
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      });

      if (response.status === 200) {
        this.workingLinks.push({
          url,
          status: response.status,
          parentUrl,
          headers: response.headers,
<<<<<<< HEAD
          contentLength: response.headers[,
  content-length'],
          contentType: response.headers[
  'content-type]
=======
          contentLength: response.headers['content-length'],
          contentType: response.headers['content-type'],
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
        });

        // Extract links from HTML content if it
  's an HTML page
        if (response.headers['content-type
  ']?.includes('text/html
  ')) {
          const links = this.extractLinks(response.data, url);
          for (const link of links) {
<<<<<<< HEAD
            if (link.startsWith('/
  ') || link.startsWith(this.baseUrl)) {
              const fullUrl = link.startsWith('/
  ') ? `${this.baseUrl}${link}` : link;
=======
            if (link.startsWith('/') || link.startsWith(this.baseUrl)) {
              const fullUrl = link.startsWith('/')
                ? `${this.baseUrl}${link}`
                : link;
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
              await this.checkUrl(fullUrl, url);
            }
          }
        }
      } else {
        this.brokenLinks.push({
          url,
          status: response.status,
          parentUrl,
          error: `HTTP ${response.status}`,
          headers: response.headers,
        });
      }
    } catch (error) {
      this.brokenLinks.push({
        url,
        status: 'ERROR
  ',
        parentUrl,
        error: error.message,
        headers: {},
      });
    }
  }

  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /href=[",
  ]([^"
  ']+)["']/g;
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      const link = match[1];
<<<<<<< HEAD
      if (link && !link.startsWith(
  '#') && !link.startsWith(
  'javascript: ') && !link.startsWith(
  'mailto:)) {
=======
      if (
        link &&
        !link.startsWith('#') &&
        !link.startsWith('javascript:') &&
        !link.startsWith('mailto:')
      ) {
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
        links.push(link);
      }
    }

    return [...new Set(links)];
  }

  async analyzeWebsite() {
<<<<<<< HEAD
    console.log(
  'Starting comprehensive website analysis...');
    
=======
    console.log('Starting comprehensive website analysis...');

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    // Start with the main page
    await this.checkUrl(this.baseUrl);

    // Check common routes
    const commonRoutes = [
<<<<<<< HEAD
  '/about',
  '/services',
  '/solutions',
  '/contact',
  '/pricing',
  '/blog',
  '/careers',
  '/partners',
  '/support',
  '/help',
  '/training',
  '/sitemap',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/api',
  '/docs',
  '/research-development',
  '/case-studies',
  '/white-papers',
  '/events',
  '/webinars',
  '/news',
  '/press',
  '/community',
  '/developer',
  '/request-quote',
  '/login',
  '/signup',
  '/dashboard',
  '/admin',
  '/talent',
  '/marketplace',
  '/micro-saas',
  '/ai-services',
  '/cybersecurity',
  '/cloud-devops',
  '/quantum-computing',
  '/space-technology',
  '/digital-transformation',
  '/data-analytics',
  '/iot-edge-computing',
  '/manufacturing-solutions',
  '/financial-solutions',
  '/industry-solutions',
  '/startup-solutions',
  '/supply-chain',
  '/sustainability',
  '/system-status',
  '/testimonials',
  '/faq',
  '/accessibility',
  '/comprehensive-services',
  '/revolutionary-services',
  '/new-services-2025',
  '/enhanced-new-services-2025',
  '/comprehensive-sitemap',
  '/comprehensive-pricing',
  '/services-overview',
  '/services-catalog',
  '/services-comparison',
  '/services-pricing',
  '/ai-solutions',
  '/quantum-ai-platform',
  '/digital-twin',
  '/zero-trust-security',
  '/enterprise-solutions',
  '/ai-business-intelligence'
=======
      '/about',
      '/services',
      '/solutions',
      '/contact',
      '/pricing',
      '/blog',
      '/careers',
      '/partners',
      '/support',
      '/help',
      '/training',
      '/sitemap',
      '/privacy-policy',
      '/terms-of-service',
      '/cookie-policy',
      '/api',
      '/docs',
      '/research-development',
      '/case-studies',
      '/white-papers',
      '/events',
      '/webinars',
      '/news',
      '/press',
      '/community',
      '/developer',
      '/request-quote',
      '/login',
      '/signup',
      '/dashboard',
      '/admin',
      '/talent',
      '/marketplace',
      '/micro-saas',
      '/ai-services',
      '/cybersecurity',
      '/cloud-devops',
      '/quantum-computing',
      '/space-technology',
      '/digital-transformation',
      '/data-analytics',
      '/iot-edge-computing',
      '/manufacturing-solutions',
      '/financial-solutions',
      '/industry-solutions',
      '/startup-solutions',
      '/supply-chain',
      '/sustainability',
      '/system-status',
      '/testimonials',
      '/faq',
      '/accessibility',
      '/comprehensive-services',
      '/revolutionary-services',
      '/new-services-2025',
      '/enhanced-new-services-2025',
      '/comprehensive-sitemap',
      '/comprehensive-pricing',
      '/services-overview',
      '/services-catalog',
      '/services-comparison',
      '/services-pricing',
      '/ai-solutions',
      '/quantum-ai-platform',
      '/digital-twin',
      '/zero-trust-security',
      '/enterprise-solutions',
      '/ai-business-intelligence',
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    ];

    for (const route of commonRoutes) {
      await this.checkUrl(`${this.baseUrl}${route}`);
    }

    // Check service sub-routes
    const serviceRoutes = [
<<<<<<< HEAD
  '/ai-solutions',
  '/quantum-computing',
  '/cybersecurity',
  '/cloud-devops',
  '/digital-transformation',
  '/data-analytics',
  '/iot-edge-computing',
  '/space-technology',
  '/ai-business-intelligence',
  '/ai-content-creation',
  '/ai-cybersecurity',
  '/ai-financial-analytics',
  '/ai-healthcare-analytics',
  '/ai-hr-platform',
  '/ai-marketing-automation',
  '/ai-supply-chain-optimization',
  '/ai-workflow-orchestrator',
  '/ai-autonomous-research-assistant',
  '/ai-content-marketing-suite',
  '/ai-quantum-hybrid-platform',
  '/it-infrastructure',
  '/digital-twin',
  '/ai-devops-automation-platform'
=======
      '/ai-solutions',
      '/quantum-computing',
      '/cybersecurity',
      '/cloud-devops',
      '/digital-transformation',
      '/data-analytics',
      '/iot-edge-computing',
      '/space-technology',
      '/ai-business-intelligence',
      '/ai-content-creation',
      '/ai-cybersecurity',
      '/ai-financial-analytics',
      '/ai-healthcare-analytics',
      '/ai-hr-platform',
      '/ai-marketing-automation',
      '/ai-supply-chain-optimization',
      '/ai-workflow-orchestrator',
      '/ai-autonomous-research-assistant',
      '/ai-content-marketing-suite',
      '/ai-quantum-hybrid-platform',
      '/it-infrastructure',
      '/digital-twin',
      '/ai-devops-automation-platform',
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    ];

    for (const serviceRoute of serviceRoutes) {
      await this.checkUrl(`${this.baseUrl}/services${serviceRoute}`);
    }

    // Check solution sub-routes
    const solutionRoutes = [
<<<<<<< HEAD
  '/enterprise',
  '/ai-business-intelligence',
  '/quantum-ai-platform',
  '/digital-twin',
  '/zero-trust-security'
=======
      '/enterprise',
      '/ai-business-intelligence',
      '/quantum-ai-platform',
      '/digital-twin',
      '/zero-trust-security',
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    ];

    for (const solutionRoute of solutionRoutes) {
      await this.checkUrl(`${this.baseUrl}/solutions${solutionRoute}`);
    }

    // Check about sub-routes
<<<<<<< HEAD
    const aboutRoutes = [
  '/story',
  '/team'
    ];
=======
    const aboutRoutes = ['/story', '/team'];
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1

    for (const aboutRoute of aboutRoutes) {
      await this.checkUrl(`${this.baseUrl}/about${aboutRoute}`);
    }

    // Check resources sub-routes
    const resourceRoutes = [
<<<<<<< HEAD
  '/blog',
  '/case-studies',
  '/research-development',
  '/docs',
  '/api',
  '/sitemap',
  '/support',
  '/training',
  '/help'
=======
      '/blog',
      '/case-studies',
      '/research-development',
      '/docs',
      '/api',
      '/sitemap',
      '/support',
      '/training',
      '/help',
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    ];

    for (const resourceRoute of resourceRoutes) {
      await this.checkUrl(`${this.baseUrl}/resources${resourceRoute}`);
    }

    console.log(
  'Analysis completed!');
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;

    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalLinksChecked: this.checkedUrls.size,
        brokenLinks: this.brokenLinks.length,
        workingLinks: this.workingLinks.length,
        successRate: `${((this.workingLinks.length / this.checkedUrls.size) * 100).toFixed(2)}%`,
        duration: `${duration}ms`,
        errors: this.errors.length,
        warnings: this.warnings.length,
      },
      brokenLinks: this.brokenLinks,
      workingLinks: this.workingLinks,
      missingPages: this.missingPages,
      errors: this.errors,
      warnings: this.warnings,
      recommendations: this.generateRecommendations(),
    };

    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.brokenLinks.length > 0) {
      recommendations.push({
        type:,
  critical',
        title: 'Fix Broken Links,
        description: `Found ${this.brokenLinks.length} broken links that need immediate attention.`,
        actions: this.brokenLinks.map(link => ({
          url: link.url,
<<<<<<< HEAD
          action:,
  Create missing page or fix redirect',
          priority: 'high
        }))
=======
          action: 'Create missing page or fix redirect',
          priority: 'high',
        })),
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      });
    }

    if (this.workingLinks.length < 50) {
      recommendations.push({
<<<<<<< HEAD
        type:,
  warning',
        title: 'Expand Content,
        description:,
  Website has limited content. Consider adding more pages and services.',
        actions: [
          { action:
  'Add more service pages, priority:,
  medium' },
          { action: 'Create blog section, priority:,
  medium' },
          { action: 'Add case studies, priority:,
  medium' }
        ]
=======
        type: 'warning',
        title: 'Expand Content',
        description:
          'Website has limited content. Consider adding more pages and services.',
        actions: [
          { action: 'Add more service pages', priority: 'medium' },
          { action: 'Create blog section', priority: 'medium' },
          { action: 'Add case studies', priority: 'medium' },
        ],
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      });
    }

    // Check for missing essential pages
    const essentialPages = [
<<<<<<< HEAD
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/sitemap',
  '/contact',
  '/about'
=======
      '/privacy-policy',
      '/terms-of-service',
      '/cookie-policy',
      '/sitemap',
      '/contact',
      '/about',
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    ];

    const missingEssential = essentialPages.filter(
      page => !this.workingLinks.some(link => link.url.endsWith(page))
    );

    if (missingEssential.length > 0) {
      recommendations.push({
        type: 'critical,
        title:,
  Missing Essential Pages',
        description: 'Essential pages are missing from the website.,
        actions: missingEssential.map(page => ({
          url: page,
<<<<<<< HEAD
          action:,
  Create missing page',
          priority: 'high
        }))
=======
          action: 'Create missing page',
          priority: 'high',
        })),
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
      });
    }

    return recommendations;
  }

  async saveReport(filename =,
  comprehensive-website-analysis.json') {
    const report = this.generateReport();
    await fs.writeFile(filename, JSON.stringify(report, null, 2));
    console.log(`Report saved to ${filename}`);
    return report;
  }
}

// Run the analysis
async function main() {
  const analyzer = new ComprehensiveWebsiteAnalyzer(
<<<<<<< HEAD
  'https: //ziontechgroup.com');
  
  try {
    await analyzer.analyzeWebsite();
    const report = await analyzer.saveReport();
    
    console.log(
  '\n=== ANALYSIS SUMMARY ===);
=======
    'https://ziontechgroup.com'
  );

  try {
    await analyzer.analyzeWebsite();
    const report = await analyzer.saveReport();

    console.log('\n=== ANALYSIS SUMMARY ===');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
    console.log(`Total URLs checked: ${report.summary.totalLinksChecked}`);
    console.log(`Working links: ${report.summary.workingLinks}`);
    console.log(`Broken links: ${report.summary.brokenLinks}`);
    console.log(`Success rate: ${report.summary.successRate}`);
    console.log(`Duration: ${report.summary.duration}`);

    if (report.brokenLinks.length > 0) {
      console.log(
  '\n=== BROKEN LINKS ===');
      report.brokenLinks.forEach(link => {
        console.log(`❌ ${link.url} - ${link.error}`);
      });
    }

    if (report.recommendations.length > 0) {
      console.log(
  '\n=== RECOMMENDATIONS ===');
      report.recommendations.forEach(rec => {
        console.log(`${rec.type.toUpperCase()}: ${rec.title}`);
        console.log(`  ${rec.description}`);
      });
    }
  } catch (error) {
    console.error(
  'Analysis failed:', error);
  }
}

if (require.main === module) {
  main();
}

module.exports = ComprehensiveWebsiteAnalyzer;
