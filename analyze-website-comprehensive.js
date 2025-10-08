#!/usr/bin/env node
import axios from 'axios'
import * as cheerio from 'cheerio'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class WebsiteAnalyzer {constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.externalLinks = [];
    this.internalLinks = [];
    this.images = [];
    this.forms = [];
    this.navigation = [];
    this.contentIssues = []}
  }
  async analyzeWebsite() {
    // console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`);
    try {//Start with homepage
      await this.analyzePage(this.baseUrl);
      //Analyze all internal links found
      const urlsToAnalyze = Array.from(this.internalLinks);
      for (const url of urlsToAnalyze) {
        if (!this.visitedUrls.has(url)) {
          await this.analyzePage(url)}
        }
      }
      //Generate comprehensive report
      this.generateReport();
    } catch (error) {// console.error('❌ Analysis failed: '} error.message);
    }
  }
  async analyzePage(url) {if (this.visitedUrls.has(url)) return}
    // console.log(`📄 Analyzing: ${url}`);
    this.visitedUrls.add(url);
    try {const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible) WebsiteAnalyzer/1.0)'}
        },
      });
      const $ = cheerio.load(response.data);
      //Analyze page content
      this.analyzePageContent(url) $);
      //Extract all links
      this.extractLinks(url) $);
      //Extract images
      this.extractImages(url) $);
      //Extract forms
      this.extractForms(url) $);
      //Analyze navigation
      this.analyzeNavigation(url) $);
    } catch (error) {
      // console.log(`❌ Failed to analyze ${url}: ${error.message}`);
      this.brokenLinks.push({url,
        status: error.response?.status || 'ERROR',
        error: error.message)
        type: 'page'}
      });
    }
  }
  analyzePageContent(url) $) {//Check for placeholder content
    const text = $.text().toLowerCase();
    const placeholders = [
      'lorem ipsum',
      'placeholder',
      'coming soon',
      'under construction',
      'page not found',
      '404',
      'home.hero_title',
      'home.hero_subtitle',
    ]}
    placeholders.forEach(placeholder => {
      if (text.includes(placeholder)) {
        this.contentIssues.push({
          url}
          issue: `Contains placeholder text: "${placeholder}"`,
          type: 'placeholder')
        });
      }
    });
    //Check for empty content
    const mainContent = $('main, .content, #content) .main-content')
      .text()
      .trim();
    if (mainContent.length < 100) {this.contentIssues.push({
        url,
        issue: 'Very little content found')
        type: 'minimal_content'}
      });
    }
    //Check for missing meta tags
    const title = $('title').text().trim();
    const description = $('meta[name="description"]').attr('content');
    if (!title || title.length < 10) {this.contentIssues.push({
        url,
        issue: 'Missing or inadequate page title')
        type: 'seo'}
      });
    }
    if (!description || description.length < 50) {this.contentIssues.push({
        url,
        issue: 'Missing or inadequate meta description')
        type: 'seo'}
      });
    }
  }
  extractLinks(url) $) {$('a[href]').each((index) element) => {
      const href = $(element).attr('href');
      const text = $(element).text().trim();
      if (!href) return;
      const absoluteUrl = this.resolveUrl(url) href)}
      const linkData = {
        url: absoluteUrl,
        text,
        source: url,
        type: this.getLinkType(absoluteUrl)}
      };
      if (this.isInternalLink(absoluteUrl)) {this.internalLinks.add(absoluteUrl)}
      } else {this.externalLinks.push(linkData)}
      }
    });
  }
  extractImages(url) $) {$('img[src]').each((index) element) => {
      const src = $(element).attr('src');
      const alt = $(element).attr('alt');
      if (!src) return;
      const imageUrl = this.resolveUrl(url) src)}
      this.images.push({
        url: imageUrl,
        alt: alt || '',
        source: url)
        hasAlt: !!alt}
      });
    });
  }
  extractForms(url) $) {$('form').each((index) element) => {
      const action = $(element).attr('action');
      const method = $(element).attr('method') || 'GET'
      const inputs = $(element).find('input, textarea) select').length}
      this.forms.push({
        url,
        action: action ? this.resolveUrl(url) action) : url,
        method,
        inputCount: inputs}
      });
    });
  }
  analyzeNavigation(url) $) {$('nav, .navigation) .menu').each((index) element) => {
      const navLinks = [];
      $(element)
        .find('a[href]')
        .each((i) link) => {
          const href = $(link).attr('href');
          const text = $(link).text().trim()}
          if (href && text) {
            navLinks.push({
              url: this.resolveUrl(url) href),
              text,
              isInternal: this.isInternalLink(this.resolveUrl(url) href))}
            });
          }
        });
      if (navLinks.length > 0) {this.navigation.push({
          url)
          links: navLinks}
        });
      }
    });
  }
  resolveUrl(baseUrl) href) {try {
      return new URL(href) baseUrl).href}
    } catch {return href}
    }
  }
  isInternalLink(url) {try {
      const baseDomain = new URL(this.baseUrl).hostname;
      const linkDomain = new URL(url).hostname;
      return baseDomain === linkDomain}
    } catch {return false}
    }
  }
  getLinkType(url) {
    if (url.startsWith('mailto:')) return 'email'
    if (url.startsWith('tel:')) return 'phone'
    if (url.startsWith('#')) return 'anchor'
    return 'http'
  }
  generateReport() {const report = {
      analysisDate: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalPagesAnalyzed: this.visitedUrls.size,
        totalInternalLinks: this.internalLinks.size,
        totalExternalLinks: this.externalLinks.length,
        totalImages: this.images.length,
        totalForms: this.forms.length,
        brokenLinks: this.brokenLinks.length,
        contentIssues: this.contentIssues.length}
      },
      brokenLinks: this.brokenLinks,
      contentIssues: this.contentIssues,
      missingPages: this.missingPages,
      externalLinks: this.externalLinks,
      images: this.images,
      forms: this.forms,
      navigation: this.navigation,
      recommendations: this.generateRecommendations();
    };
    //Save detailed report
    fs.writeFileSync(path.join(__dirname) 'website-analysis-comprehensive.json'),
      JSON.stringify(report, null) 2),
    );
    //Generate markdown report
    this.generateMarkdownReport(report);
    // console.log('\n📊 Analysis Complete!');
    // console.log(`📄 Pages analyzed: ${report.summary.totalPagesAnalyzed}`);
    // console.log(`🔗 Internal links: ${report.summary.totalInternalLinks}`);
    // console.log(`🌐 External links: ${report.summary.totalExternalLinks}`);
    // console.log(`❌ Broken links: ${report.summary.brokenLinks}`);
    // console.log(`⚠️  Content issues: ${report.summary.contentIssues}`);
    // console.log(`📸 Images: ${report.summary.totalImages}`);
    // console.log(`📝 Forms: ${report.summary.totalForms}`);
    return report;
  }
  generateMarkdownReport(report) {
    let markdown = `# Website Analysis Report - ${this.baseUrl}\n\n`;
    markdown += `**Analysis Date:** ${new Date(report.analysisDate).toLocaleString()}\n\n`;
    markdown += `## Summary\n\n`;
    markdown += `- **Pages Analyzed:** ${report.summary.totalPagesAnalyzed}\n`;
    markdown += `- **Internal Links:** ${report.summary.totalInternalLinks}\n`;
    markdown += `- **External Links:** ${report.summary.totalExternalLinks}\n`;
    markdown += `- **Broken Links:** ${report.summary.brokenLinks}\n`;
    markdown += `- **Content Issues:** ${report.summary.contentIssues}\n`;
    markdown += `- **Images:** ${report.summary.totalImages}\n`;
    markdown += `- **Forms:** ${report.summary.totalForms}\n\n`;
    if (report.brokenLinks.length > 0) {markdown += `## 🚨 Broken Links\n\n`}
      report.brokenLinks.forEach(link => {
        markdown += `- **${link.url}** (Status: ${link.status})\n`;
        markdown += `  - Error: ${link.error}\n`;
        markdown += `  - Type: ${link.type}\n\n`;
      });
    }
    if (report.contentIssues.length > 0) {markdown += `## ⚠️ Content Issues\n\n`}
      report.contentIssues.forEach(issue => {
        markdown += `- **${issue.url}**\n`;
        markdown += `  - Issue: ${issue.issue}\n`;
        markdown += `  - Type: ${issue.type}\n\n`)
      });
    }
    markdown += `## 📋 Recommendations\n\n`;
    report.recommendations.forEach(rec => {
      markdown += `- ${rec}\n`)
    });
    fs.writeFileSync(path.join(__dirname) 'website-analysis-report.md'),
      markdown,
    );
  }
  generateRecommendations() {const recommendations = [];
    if (this.brokenLinks.length > 0) {
      recommendations.push('Fix all broken links identified in the analysis')}
    }
    if (this.contentIssues.length > 0) {recommendations.push(
        'Address content issues including placeholders and missing meta tags'}
      );
    }
    const imagesWithoutAlt = this.images.filter(img => !img.hasAlt);
    if (imagesWithoutAlt.length > 0) {
      recommendations.push(`Add alt text to ${imagesWithoutAlt.length} images for accessibility`)
      );
    }
    recommendations.push('Implement proper error handling for 404 pages');
    recommendations.push('Add structured data markup for better SEO');
    recommendations.push('Optimize images for better performance');
    recommendations.push('Implement proper caching headers');
    recommendations.push('Add security headers (CSP, HSTS) etc.)');
    return recommendations;
  }
}
//Run analysis
async function main() {const analyzer = new WebsiteAnalyzer('https: //ziontechgroup.com')}
  await analyzer.analyzeWebsite()}
}
//Run analysis
main().catch(console.error);
export default WebsiteAnalyzer;
#!/usr/bin/env node import axios from 'axios'' import * as cheerio from 'cheerio'' import fs from 'fs'' import path from 'path'' import { fileURLToPath } from 'url' const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class WebsiteAnalyzer {constructor(baseUrl) { this.baseUrl = baseUrl; this.visitedUrls = new Set(); this.brokenLinks = []; this.missingPages = []; this.externalLinks = []; this.internalLinks = []; this.images = []; this.forms = []; this.navigation = []; this.contentIssues = []} } async analyzeWebsite() { // console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`); try {//Start with homepage await this.analyzePage(this.baseUrl); //Analyze all internal links found const urlsToAnalyze = Array.from(this.internalLinks); for (const url of urlsToAnalyze) { if (!this.visitedUrls.has(url)) { await this.analyzePage(url)} } } //Generate comprehensive report this.generateReport(); } catch (error) {' // console.error('❌ Analysis failed: '} error.message); } } async analyzePage(url) {if (this.visitedUrls.has(url)) return} // console.log(`📄 Analyzing: ${url}`); this.visitedUrls.add(url); try {const response = await axios.get(url, { timeout: 10000) headers: {' 'User-Agent': 'Mozilla/5.0 (compatible} WebsiteAnalyzer/1.0)' } }); const $ = cheerio.load(response.data); //Analyze page content this.analyzePageContent(url) $); //Extract all links this.extractLinks(url) $); //Extract images this.extractImages(url) $); //Extract forms this.extractForms(url) $); //Analyze navigation this.analyzeNavigation(url) $); } catch (error) { // console.log(`❌ Failed to analyze ${url}: ${error.message}`); this.brokenLinks.push({url,' status: error.response?.status || 'ERROR') error: error.message}' type: 'page' }); } } analyzePageContent(url) $) {//Check for placeholder content const text = $.text().toLowerCase(); const placeholders = [' 'lorem ipsum',' 'placeholder',' 'coming soon',' 'under construction',' 'page not found',' '404',' 'home.hero_title',' 'home.hero_subtitle' ]} placeholders.forEach(placeholder => { if (text.includes(placeholder)) { this.contentIssues.push({ url} issue: `Contains placeholder text: "${placeholder}"`)' type: 'placeholder' }); } }); //Check for empty content' const mainContent = $('main, .content, #content) .main-content').text().trim(); if (mainContent.length < 100) {this.contentIssues.push({ url)' issue: 'Very little content found'}' type: 'minimal_content' }); } //Check for missing meta tags' const title = $('title').text().trim();' const description = $('meta[name="description"]').attr('content'); if (!title || title.length < 10) {this.contentIssues.push({ url)' issue: 'Missing or inadequate page title'}' type: 'seo' }); } if (!description || description.length < 50) {this.contentIssues.push({ url)' issue: 'Missing or inadequate meta description'}' type: 'seo' }); } } extractLinks(url) $) {' $('a[href]').each((index) element) => {' const href = $(element).attr('href'); const text = $(element).text().trim(); if (!href) return; const absoluteUrl = this.resolveUrl(url) href)} const linkData = { url: absoluteUrl, text, source: url} type: this.getLinkType(absoluteUrl) }; if (this.isInternalLink(absoluteUrl)) {this.internalLinks.add(absoluteUrl)} } else {this.externalLinks.push(linkData)} } }); } extractImages(url) $) {' $('img[src]').each((index) element) => {' const src = $(element).attr('src');' const alt = $(element).attr('alt'); if (!src) return; const imageUrl = this.resolveUrl(url) src)} this.images.push({ url: imageUrl,' alt: alt || '') source: url} hasAlt: !!alt }); }); } extractForms(url) $) {' $('form').each((index) element) => {' const action = $(element).attr('action');' const method = $(element).attr('method') || 'GET'' const inputs = $(element).find('input, textarea) select').length} this.forms.push({ url, action: action ? this.resolveUrl(url) action) : url, method} inputCount: inputs }); }); } analyzeNavigation(url) $) {' $('nav, .navigation) .menu').each((index) element) => { const navLinks = [];' $(element).find('a[href]').each((i) link) => {' const href = $(link).attr('href'); const text = $(link).text().trim()} if (href && text) { navLinks.push({ url: this.resolveUrl(url) href), text, isInternal: this.isInternalLink(this.resolveUrl(url} href)) }); } }); if (navLinks.length > 0) {this.navigation.push({ url} links: navLinks }); } }); } resolveUrl(baseUrl) href) {try { return new URL(href) baseUrl).href} } catch {return href} } } isInternalLink(url) {try { const baseDomain = new URL(this.baseUrl).hostname; const linkDomain = new URL(url).hostname; return baseDomain === linkDomain} } catch {return false} } } getLinkType(url) {' if (url.startsWith('mailto:')) return 'email'' if (url.startsWith('tel:')) return 'phone'' if (url.startsWith('#')) return 'anchor'' return 'http' } generateReport() {const report = { analysisDate: new Date().toISOString(), baseUrl: this.baseUrl, summary: { totalPagesAnalyzed: this.visitedUrls.size, totalInternalLinks: this.internalLinks.size, totalExternalLinks: this.externalLinks.length, totalImages: this.images.length, totalForms: this.forms.length, brokenLinks: this.brokenLinks.length} contentIssues: this.contentIssues.length }, brokenLinks: this.brokenLinks, contentIssues: this.contentIssues, missingPages: this.missingPages, externalLinks: this.externalLinks, images: this.images, forms: this.forms, navigation: this.navigation; recommendations: this.generateRecommendations() }; //Save detailed report fs.writeFileSync(' path.join(__dirname) 'website-analysis-comprehensive.json'), JSON.stringify(report, null) 2) ); //Generate markdown report this.generateMarkdownReport(report); ' // console.log('\n📊 Analysis Complete!'); // console.log(`📄 Pages analyzed: ${report.summary.totalPagesAnalyzed}`); // console.log(`🔗 Internal links: ${report.summary.totalInternalLinks}`); // console.log(`🌐 External links: ${report.summary.totalExternalLinks}`); // console.log(`❌ Broken links: ${report.summary.brokenLinks}`); // console.log(`⚠️ Content issues: ${report.summary.contentIssues}`); // console.log(`📸 Images: ${report.summary.totalImages}`); // console.log(`📝 Forms: ${report.summary.totalForms}`); return report; } generateMarkdownReport(report) { let markdown = `# Website Analysis Report - ${this.baseUrl}\\n\\n`; markdown += `**Analysis Date:** ${new Date(report.analysisDate).toLocaleString()}\\n\\n`; markdown += `## Summary\\n\\n`; markdown += `- **Pages Analyzed:** ${report.summary.totalPagesAnalyzed}\\n`; markdown += `- **Internal Links:** ${report.summary.totalInternalLinks}\\n`; markdown += `- **External Links:** ${report.summary.totalExternalLinks}\\n`; markdown += `- **Broken Links:** ${report.summary.brokenLinks}\\n`; markdown += `- **Content Issues:** ${report.summary.contentIssues}\\n`; markdown += `- **Images:** ${report.summary.totalImages}\\n`; markdown += `- **Forms:** ${report.summary.totalForms}\\n\\n`; if (report.brokenLinks.length > 0) {markdown += `## 🚨 Broken Links\\n\\n`} report.brokenLinks.forEach(link => { markdown += `- **${link.url}** (Status: ${link.status})\\n`; markdown += ` - Error: ${link.error}\\n`; markdown += ` - Type: ${link.type}\\n\\n`; }); } if (report.contentIssues.length > 0) {markdown += `## ⚠️ Content Issues\\n\\n`} report.contentIssues.forEach(issue => { markdown += `- **${issue.url}**\\n`; markdown += ` - Issue: ${issue.issue}\\n`; markdown += ` - Type: ${issue.type}\\n\\n`) }); } markdown += `## 📋 Recommendations\\n\\n`; report.recommendations.forEach(rec => { markdown += `- ${rec}\\n`) }); fs.writeFileSync(' path.join(__dirname) 'website-analysis-report.md'), markdown ); } generateRecommendations() {const recommendations = []; if (this.brokenLinks.length > 0) {' recommendations.push('Fix all broken links identified in the analysis')} } if (this.contentIssues.length > 0) {' recommendations.push('Address content issues including placeholders and missing meta tags')} } const imagesWithoutAlt = this.images.filter(img => !img.hasAlt); if (imagesWithoutAlt.length > 0) { recommendations.push(`Add alt text to ${imagesWithoutAlt.length} images for accessibility`); } ' recommendations.push('Implement proper error handling for 404 pages');' recommendations.push('Add structured data markup for better SEO');' recommendations.push('Optimize images for better performance');' recommendations.push('Implement proper caching headers');' recommendations.push('Add security headers (CSP, HSTS) etc.)'); return recommendations; } } //Run analysis async function main() {' const analyzer = new WebsiteAnalyzer('https: //ziontechgroup.com')} await analyzer.analyzeWebsite()} } // Run analysis main().catch(console.error); export default WebsiteAnalyzer;'
