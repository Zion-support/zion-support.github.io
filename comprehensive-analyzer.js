import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

class ComprehensiveWebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visited = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.missingPages = [];
    this.externalLinks = [];
    this.images = [];
    this.scripts = [];
    this.stylesheets = [];
    this.navigationLinks = [];
    this.footerLinks = [];
    this.sidebarLinks = [];
    this.contentAnalysis = {};
  }

  async analyze() {
    console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`);
    console.log('=' .repeat(60));
    
    try {
      // First, get the main page
      const mainPage = await this.getPage(this.baseUrl);
      if (mainPage) {
        this.analyzeMainPage(mainPage);
        await this.analyzeNavigationStructure(mainPage);
        await this.checkCommonRoutes();
        await this.analyzeExternalResources();
      }
      
      this.generateComprehensiveReport();
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
    }
  }

  async getPage(url) {
    try {
      const response = await axios.get(url, {
        timeout: 15000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ZionTechGroup-Bot/1.0)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1'
        }
      });
      
      if (response.status === 200) {
        this.workingLinks.push(url);
        return response.data;
      } else {
        this.brokenLinks.push({
          url,
          status: response.status,
          error: `HTTP ${response.status}`
        });
      }
    } catch (error) {
      this.brokenLinks.push({
        url,
        status: 'ERROR',
        error: error.message
      });
    }
    return null;
  }

  analyzeMainPage(html) {
    const $ = cheerio.load(html);
    
    // Extract all links
    const allLinks = $('a[href]');
    allLinks.each((i, element) => {
      const href = $(element).attr('href');
      const text = $(element).text().trim();
      const classes = $(element).attr('class') || '';
      
      if (href) {
        const fullUrl = this.resolveUrl(href, this.baseUrl);
        
        if (fullUrl.startsWith(this.baseUrl)) {
          // Internal link
          if (!this.visited.has(fullUrl)) {
            this.navigationLinks.push({
              url: fullUrl,
              text: text,
              classes: classes,
              type: this.categorizeLink(element, $)
            });
          }
        } else if (fullUrl.startsWith('http')) {
          // External link
          this.externalLinks.push({
            url: fullUrl,
            text: text,
            source: this.baseUrl
          });
        }
      }
    });

    // Extract images
    const images = $('img[src]');
    images.each((i, element) => {
      const src = $(element).attr('src');
      const alt = $(element).attr('alt') || '';
      if (src) {
        this.images.push({
          url: this.resolveUrl(src, this.baseUrl),
          alt: alt,
          page: this.baseUrl
        });
      }
    });

    // Extract scripts
    const scripts = $('script[src]');
    scripts.each((i, element) => {
      const src = $(element).attr('src');
      if (src) {
        this.scripts.push({
          url: this.resolveUrl(src, this.baseUrl),
          page: this.baseUrl
        });
      }
    });

    // Extract stylesheets
    const stylesheets = $('link[rel="stylesheet"], link[href*=".css"]');
    stylesheets.each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        this.stylesheets.push({
          url: this.resolveUrl(href, this.baseUrl),
          page: this.baseUrl
        });
      }
    });

    // Analyze content structure
    this.analyzeContentStructure($);
  }

  categorizeLink(element, $) {
    const classes = $(element).attr('class') || '';
    const parent = $(element).parent();
    const parentClasses = parent.attr('class') || '';
    
    if (classes.includes('nav') || classes.includes('menu') || parentClasses.includes('nav') || parentClasses.includes('menu')) {
      return 'navigation';
    } else if (classes.includes('footer') || parentClasses.includes('footer')) {
      return 'footer';
    } else if (classes.includes('sidebar') || parentClasses.includes('sidebar')) {
      return 'sidebar';
    } else {
      return 'content';
    }
  }

  analyzeContentStructure($) {
    // Check for common content sections
    const sections = {
      header: $('header, .header, #header').length,
      nav: $('nav, .nav, .navigation, .navbar').length,
      main: $('main, .main, #main').length,
      footer: $('footer, .footer, #footer').length,
      sidebar: $('.sidebar, .side-bar, #sidebar').length,
      content: $('.content, .main-content, #content').length
    };

    // Check for common missing content indicators
    const content = $.text();
    const wordCount = content.split(/\s+/).length;
    
    this.contentAnalysis = {
      sections: sections,
      wordCount: wordCount,
      hasNavigation: sections.nav > 0,
      hasSidebar: sections.sidebar > 0,
      hasFooter: sections.footer > 0,
      contentDensity: wordCount / 100 // words per 100 characters
    };

    // Check for missing content
    if (wordCount < 200) {
      this.missingPages.push({
        url: this.baseUrl,
        type: 'Low Content Density',
        details: `Only ${wordCount} words found`
      });
    }

    if (sections.nav === 0) {
      this.missingPages.push({
        url: this.baseUrl,
        type: 'Missing Navigation',
        details: 'No navigation structure detected'
      });
    }

    if (sections.footer === 0) {
      this.missingPages.push({
        url: this.baseUrl,
        type: 'Missing Footer',
        details: 'No footer section detected'
      });
    }
  }

  async analyzeNavigationStructure(html) {
    const $ = cheerio.load(html);
    
    // Look for navigation patterns
    const navElements = $('nav, .nav, .navigation, .navbar, .menu');
    
    navElements.each((i, element) => {
      const links = $(element).find('a[href]');
      links.each((j, link) => {
        const href = $(link).attr('href');
        const text = $(link).text().trim();
        
        if (href && text) {
          const fullUrl = this.resolveUrl(href, this.baseUrl);
          this.navigationLinks.push({
            url: fullUrl,
            text: text,
            type: 'navigation',
            source: 'nav-element'
          });
        }
      });
    });
  }

  async checkCommonRoutes() {
    const commonRoutes = [
      '/about', '/about-us', '/company', '/team',
      '/services', '/solutions', '/products',
      '/contact', '/contact-us', '/get-in-touch',
      '/blog', '/news', '/articles',
      '/careers', '/jobs', '/join-us',
      '/privacy', '/privacy-policy', '/terms', '/terms-of-service',
      '/faq', '/help', '/support'
    ];

    console.log('🔍 Checking common routes...');
    
    for (const route of commonRoutes) {
      const fullUrl = this.baseUrl + route;
      const page = await this.getPage(fullUrl);
      
      if (page) {
        const $ = cheerio.load(page);
        const content = $.text();
        
        if (content.includes('404') || content.includes('Page Not Found')) {
          this.missingPages.push({
            url: fullUrl,
            type: '404 Error',
            details: 'Common route returns 404'
          });
        } else if (content.length < 100) {
          this.missingPages.push({
            url: fullUrl,
            type: 'Minimal Content',
            details: `Route exists but has minimal content (${content.length} chars)`
          });
        }
      }
    }
  }

  async analyzeExternalResources() {
    console.log('🔗 Analyzing external resources...');
    
    // Check external links
    for (const link of this.externalLinks.slice(0, 10)) {
      try {
        const response = await axios.head(link.url, { timeout: 5000 });
        if (response.status >= 400) {
          this.brokenLinks.push({
            url: link.url,
            status: response.status,
            error: `External link broken`,
            source: link.source
          });
        }
      } catch (error) {
        this.brokenLinks.push({
          url: link.url,
          status: 'ERROR',
          error: `External link error: ${error.message}`,
          source: link.source
        });
      }
    }
  }

  resolveUrl(href, baseUrl) {
    if (href.startsWith('http')) {
      return href;
    }
    
    try {
      return new URL(href, baseUrl).href;
    } catch {
      return href;
    }
  }

  generateComprehensiveReport() {
    console.log('\n📊 Generating comprehensive analysis report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalPages: this.workingLinks.length,
        brokenLinks: this.brokenLinks.length,
        missingPages: this.missingPages.length,
        externalLinks: this.externalLinks.length,
        images: this.images.length,
        scripts: this.scripts.length,
        stylesheets: this.stylesheets.length,
        navigationLinks: this.navigationLinks.length
      },
      workingLinks: this.workingLinks,
      brokenLinks: this.brokenLinks,
      missingPages: this.missingPages,
      externalLinks: this.externalLinks,
      images: this.images,
      scripts: this.scripts,
      stylesheets: this.stylesheets,
      navigationLinks: this.navigationLinks,
      contentAnalysis: this.contentAnalysis
    };

    // Save detailed report
    fs.writeFileSync('zion-website-analysis.json', JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync('zion-website-analysis-report.md', markdownReport);
    
    console.log('\n✅ Analysis complete! Reports generated:');
    console.log('   - zion-website-analysis.json (detailed data)');
    console.log('   - zion-website-analysis-report.md (readable report)');
    
    this.printSummary(report);
  }

  generateMarkdownReport(report) {
    return `# Zion Tech Group Website Comprehensive Analysis Report

**Generated:** ${new Date().toLocaleString()}
**Base URL:** ${report.baseUrl}

## 📊 Executive Summary

- **Total Pages Analyzed:** ${report.summary.totalPages}
- **Broken Links Found:** ${report.summary.brokenLinks}
- **Missing/Incomplete Pages:** ${report.summary.missingPages}
- **External Links:** ${report.summary.externalLinks}
- **Images:** ${report.summary.images}
- **Scripts:** ${report.summary.scripts}
- **Stylesheets:** ${report.summary.stylesheets}
- **Navigation Links:** ${report.summary.navigationLinks}

## 🚨 Critical Issues

### Broken Links (${report.brokenLinks.length})
${report.brokenLinks.map(link => `- **${link.url}** - ${link.error}${link.source ? ` (from ${link.source})` : ''}`).join('\n')}

### Missing/Incomplete Pages (${report.missingPages.length})
${report.missingPages.map(page => `- **${page.url}** - ${page.type}${page.details ? ` (${page.details})` : ''}`).join('\n')}

## ✅ Working Pages (${report.workingLinks.length})
${report.workingLinks.map(url => `- ${url}`).join('\n')}

## 🧭 Navigation Structure (${report.navigationLinks.length})
${report.navigationLinks.map(link => `- **${link.text || 'No text'}** - ${link.url} (${link.type})`).join('\n')}

## 🔗 External Links (${report.externalLinks.length})
${report.externalLinks.map(link => `- **${link.text || 'No text'}** - ${link.url} (from ${link.source})`).join('\n')}

## 🖼️ Images (${report.images.length})
${report.images.map(img => `- ${img.url}${img.alt ? ` (alt: ${img.alt})` : ''}`).join('\n')}

## 📜 Scripts (${report.scripts.length})
${report.scripts.map(script => `- ${script.url}`).join('\n')}

## 🎨 Stylesheets (${report.stylesheets.length})
${report.stylesheets.map(css => `- ${css.url}`).join('\n')}

## 📝 Content Analysis

- **Word Count:** ${report.contentAnalysis.wordCount}
- **Content Density:** ${report.contentAnalysis.contentDensity.toFixed(2)} words per 100 chars
- **Has Navigation:** ${report.contentAnalysis.hasNavigation ? '✅ Yes' : '❌ No'}
- **Has Sidebar:** ${report.contentAnalysis.hasSidebar ? '✅ Yes' : '❌ No'}
- **Has Footer:** ${report.contentAnalysis.hasFooter ? '✅ Yes' : '❌ No'}

### Section Analysis
${Object.entries(report.contentAnalysis.sections).map(([section, count]) => `- **${section}:** ${count}`).join('\n')}

## 🎯 Recommendations

1. **Fix all broken links immediately**
2. **Complete missing page content**
3. **Verify external link validity**
4. **Optimize image loading**
5. **Review and optimize scripts and stylesheets**
6. **Improve navigation structure**
7. **Add missing footer and sidebar sections**
8. **Increase content density and quality**

---
*Report generated by Zion Tech Group Comprehensive Website Analyzer*
`;
  }

  printSummary(report) {
    console.log('\n📋 COMPREHENSIVE SUMMARY:');
    console.log('=' .repeat(50));
    console.log(`✅ Working Pages: ${report.summary.totalPages}`);
    console.log(`❌ Broken Links: ${report.summary.brokenLinks}`);
    console.log(`⚠️  Missing Pages: ${report.summary.missingPages}`);
    console.log(`🔗 External Links: ${report.summary.externalLinks}`);
    console.log(`🖼️  Images: ${report.summary.images}`);
    console.log(`📜 Scripts: ${report.summary.scripts}`);
    console.log(`🎨 Stylesheets: ${report.summary.stylesheets}`);
    console.log(`🧭 Navigation Links: ${report.summary.navigationLinks}`);
    
    if (report.summary.brokenLinks > 0) {
      console.log('\n🚨 CRITICAL: Broken links detected!');
      console.log('Top broken links:');
      report.brokenLinks.slice(0, 5).forEach(link => {
        console.log(`   - ${link.url}: ${link.error}`);
      });
    }
    
    if (report.summary.missingPages > 0) {
      console.log('\n⚠️  WARNING: Missing/incomplete pages detected!');
      console.log('Pages needing attention:');
      report.missingPages.slice(0, 5).forEach(page => {
        console.log(`   - ${page.url}: ${page.type}${page.details ? ` (${page.details})` : ''}`);
      });
    }

    console.log('\n📝 Content Analysis:');
    console.log(`   - Word Count: ${report.contentAnalysis.wordCount}`);
    console.log(`   - Has Navigation: ${report.contentAnalysis.hasNavigation ? '✅' : '❌'}`);
    console.log(`   - Has Sidebar: ${report.contentAnalysis.hasSidebar ? '✅' : '❌'}`);
    console.log(`   - Has Footer: ${report.contentAnalysis.hasFooter ? '✅' : '❌'}`);
  }
}

// Run the analysis
async function main() {
  const analyzer = new ComprehensiveWebsiteAnalyzer('https://ziontechgroup.com');
  await analyzer.analyze();
}

// Check if this is the main module
const isMainModule = process.argv[1] === new URL(import.meta.url).pathname;
if (isMainModule) {
  main().catch(console.error);
}

export default ComprehensiveWebsiteAnalyzer;