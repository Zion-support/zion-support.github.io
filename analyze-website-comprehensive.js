#!/usr/bin/env node

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

class WebsiteAnalyzer {
  constructor(baseUrl = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.allLinks = new Set();
    this.pageStructure = {};
    this.maxDepth = 3;
    this.currentDepth = 0;
  }

  async analyzeWebsite() {
    console.log('🔍 Starting comprehensive website analysis...');
    console.log(`📊 Target: ${this.baseUrl}`);
    
    try {
      await this.crawlWebsite(this.baseUrl, 0);
      await this.generateReport();
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
    }
  }

  async crawlWebsite(url, depth) {
    if (depth > this.maxDepth || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`📄 Analyzing: ${url} (depth: ${depth})`);

    try {
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)'
        }
      });

      const $ = cheerio.load(response.data);
      const links = this.extractLinks($, url);
      
      this.pageStructure[url] = {
        title: $('title').text(),
        status: response.status,
        links: links,
        hasContent: this.hasSubstantialContent($),
        lastModified: response.headers['last-modified'] || 'unknown'
      };

      // Check for broken links and missing content
      for (const link of links) {
        this.allLinks.add(link.href);
        
        if (link.isInternal && !this.visitedUrls.has(link.href)) {
          try {
            await this.crawlWebsite(link.href, depth + 1);
          } catch (error) {
            this.brokenLinks.push({
              url: link.href,
              source: url,
              error: error.message,
              text: link.text
            });
          }
        }
      }

    } catch (error) {
      this.brokenLinks.push({
        url: url,
        source: 'direct',
        error: error.message,
        text: 'Page load failed'
      });
    }
  }

  extractLinks($, currentUrl) {
    const links = [];
    
    $('a[href]').each((i, element) => {
      const $el = $(element);
      const href = $el.attr('href');
      const text = $el.text().trim();
      
      if (!href) return;

      const absoluteUrl = this.resolveUrl(href, currentUrl);
      const isInternal = absoluteUrl.startsWith(this.baseUrl);
      
      links.push({
        href: absoluteUrl,
        text: text,
        isInternal: isInternal,
        element: $el.prop('tagName')
      });
    });

    return links;
  }

  resolveUrl(href, baseUrl) {
    try {
      return new URL(href, baseUrl).href;
    } catch {
      return href;
    }
  }

  hasSubstantialContent($) {
    const textContent = $('body').text().replace(/\s+/g, ' ').trim();
    const hasImages = $('img').length > 0;
    const hasHeadings = $('h1, h2, h3, h4, h5, h6').length > 0;
    
    return textContent.length > 100 || hasImages || hasHeadings;
  }

  async generateReport() {
    console.log('\n📊 Generating comprehensive analysis report...');
    
    const report = {
      analysisDate: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalPagesAnalyzed: this.visitedUrls.size,
        totalLinksFound: this.allLinks.size,
        brokenLinksCount: this.brokenLinks.length,
        missingPagesCount: this.missingPages.length
      },
      pageStructure: this.pageStructure,
      brokenLinks: this.brokenLinks,
      missingPages: this.missingPages,
      recommendations: this.generateRecommendations()
    };

    // Save detailed report
    fs.writeFileSync(
      '/workspace/comprehensive-website-analysis.json',
      JSON.stringify(report, null, 2)
    );

    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync(
      '/workspace/website-analysis-report.md',
      markdownReport
    );

    console.log('\n✅ Analysis complete!');
    console.log(`📄 Pages analyzed: ${this.visitedUrls.size}`);
    console.log(`🔗 Total links found: ${this.allLinks.size}`);
    console.log(`❌ Broken links: ${this.brokenLinks.length}`);
    console.log(`📝 Missing pages: ${this.missingPages.length}`);
    console.log('\n📋 Reports generated:');
    console.log('  - comprehensive-website-analysis.json');
    console.log('  - website-analysis-report.md');
  }

  generateMarkdownReport(report) {
    return `# Website Analysis Report

## Summary
- **Analysis Date**: ${new Date(report.analysisDate).toLocaleString()}
- **Target Website**: ${report.baseUrl}
- **Pages Analyzed**: ${report.summary.totalPagesAnalyzed}
- **Total Links Found**: ${report.summary.totalLinksFound}
- **Broken Links**: ${report.summary.brokenLinksCount}
- **Missing Pages**: ${report.summary.missingPagesCount}

## Page Structure
${Object.entries(report.pageStructure).map(([url, data]) => 
  `### ${data.title || 'Untitled'}
- **URL**: ${url}
- **Status**: ${data.status}
- **Links**: ${data.links.length}
- **Has Content**: ${data.hasContent ? 'Yes' : 'No'}
- **Last Modified**: ${data.lastModified}
`).join('\n')}

## Broken Links
${report.brokenLinks.length > 0 ? report.brokenLinks.map(link => 
  `- **URL**: ${link.url}
  - **Source**: ${link.source}
  - **Error**: ${link.error}
  - **Link Text**: ${link.text}
`).join('\n') : 'No broken links found!'}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}
`;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.brokenLinks.length > 0) {
      recommendations.push(`Fix ${this.brokenLinks.length} broken links identified in the analysis`);
    }
    
    if (this.missingPages.length > 0) {
      recommendations.push(`Create ${this.missingPages.length} missing pages identified in the analysis`);
    }

    recommendations.push('Implement proper error handling for 404 pages');
    recommendations.push('Add sitemap.xml for better SEO');
    recommendations.push('Implement proper meta tags for all pages');
    recommendations.push('Add structured data markup');
    recommendations.push('Optimize page loading speeds');
    recommendations.push('Implement proper internal linking strategy');
    recommendations.push('Add breadcrumb navigation');
    recommendations.push('Implement proper mobile responsiveness');

    return recommendations;
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
analyzer.analyzeWebsite().catch(console.error);

export default WebsiteAnalyzer;