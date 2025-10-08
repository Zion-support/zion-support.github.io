import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';

class WebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.workingLinks = [];
    this.analyzedPages = [];
    this.maxDepth = 3;
    this.delay = 1000; // 1 second delay between requests
  }
<<<<<<< HEAD
  async analyzeWebsite() {
//     try {//Start with homepage
      await this.analyzePage(this.baseUrl);
      //Analyze all internal links found
//       const urlsToAnalyze = Array.from(this.internalLinks);
      for (const url of urlsToAnalyze) {
        if (!this.visitedUrls.has(url)) {
          await this.analyzePage(url)}
        }
      }
      //Generate comprehensive report
      this.generateReport();
//     } catch (error) {}
  }
  async analyzePage(url) {if (this.visitedUrls.has(url)) return}
//     this.visitedUrls.add(url);
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
//       this.brokenLinks.push({url,
        status: error.response?.status || 'ERROR',
        error: error.message)
        type: 'page'}
      });
    }
  }
  analyzePageContent(url) $) {//Check for placeholder content
    const _text = $.text().toLowerCase();
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
    const _title = $('title').text().trim();
    const _description = $('meta[name="description"]').attr('content');
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
//       const href = $(element).attr('href');
      const _text = $(element).text().trim();
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
//       const src = $(element).attr('src');
//       const alt = $(element).attr('alt');
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
//       const action = $(element).attr('action');
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
      const _navLinks = [];
      $(element)
        .find('a[href]')
        .each((i) link) => {
//           const href = $(link).attr('href');
          const text = $(link).text().trim()}
          if (href && text) {
            navLinks.push({
              url: this.resolveUrl(url) href),
              text,
              isInternal: this.isInternalLink(this.resolveUrl(url) href))}
            });
=======

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
        },
        timeout: 10000
      };

      const protocol = urlObj.protocol === 'https:' ? https : http;
      
      const req = protocol.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: data,
            url: url
          });
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.setTimeout(10000);
      req.end();
    });
  }

  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    
    let match;
    
    // Extract regular links
    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      if (href && !href.startsWith('#') && !href.startsWith('javascript:') && !href.startsWith('mailto:')) {
        try {
          const absoluteUrl = new URL(href, baseUrl).href;
          links.push({
            url: absoluteUrl,
            text: this.extractLinkText(html, match.index),
            type: 'link'
          });
        } catch (e) {
          // Invalid URL, skip
        }
      }
    }
    
    // Extract image sources
    while ((match = imgRegex.exec(html)) !== null) {
      const src = match[1];
      if (src) {
        try {
          const absoluteUrl = new URL(src, baseUrl).href;
          links.push({
            url: absoluteUrl,
            text: 'Image',
            type: 'image'
          });
        } catch (e) {
          // Invalid URL, skip
        }
      }
    }
    
    return links;
  }

  extractLinkText(html, linkIndex) {
    const textMatch = html.substring(linkIndex).match(/<a[^>]*>([^<]+)<\/a>/i);
    return textMatch ? textMatch[1].trim() : '';
  }

  isInternalLink(url) {
    try {
      const urlObj = new URL(url);
      const baseUrlObj = new URL(this.baseUrl);
      return urlObj.hostname === baseUrlObj.hostname;
    } catch (e) {
      return false;
    }
  }

  async analyzePage(url, depth = 0) {
    if (this.visitedUrls.has(url) || depth > this.maxDepth) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Analyzing: ${url} (depth: ${depth})`);

    try {
      const response = await this.makeRequest(url);
      
      if (response.statusCode >= 200 && response.statusCode < 300) {
        this.workingLinks.push({
          url: url,
          statusCode: response.statusCode,
          depth: depth
        });

        this.analyzedPages.push({
          url: url,
          statusCode: response.statusCode,
          title: this.extractTitle(response.body),
          links: this.extractLinks(response.body, url),
          depth: depth
        });

        // Analyze internal links
        if (depth < this.maxDepth) {
          const links = this.extractLinks(response.body, url);
          const internalLinks = links.filter(link => this.isInternalLink(link.url));
          
          for (const link of internalLinks) {
            await this.delay(this.delay);
            await this.analyzePage(link.url, depth + 1);
>>>>>>> cursor/website-audit-and-update-with-deployment-a7af
          }
        }
      } else {
        this.brokenLinks.push({
          url: url,
          statusCode: response.statusCode,
          depth: depth
        });
      }
    } catch (error) {
      this.brokenLinks.push({
        url: url,
        error: error.message,
        depth: depth
      });
    }
  }

  extractTitle(html) {
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    return titleMatch ? titleMatch[1].trim() : 'No title';
  }

  async analyze() {
    console.log(`Starting comprehensive analysis of ${this.baseUrl}`);
    console.log(`Max depth: ${this.maxDepth}, Delay: ${this.delay}ms`);
    
    await this.analyzePage(this.baseUrl);
    
    // Generate report
    const report = {
      baseUrl: this.baseUrl,
      analysisDate: new Date().toISOString(),
      summary: {
        totalPagesAnalyzed: this.analyzedPages.length,
        workingLinks: this.workingLinks.length,
        brokenLinks: this.brokenLinks.length,
        uniqueUrlsVisited: this.visitedUrls.size
      },
      analyzedPages: this.analyzedPages,
      workingLinks: this.workingLinks,
      brokenLinks: this.brokenLinks,
      recommendations: this.generateRecommendations()
    };
<<<<<<< HEAD
    //Save detailed report
    fs.writeFileSync(path.join(__dirname) 'website-analysis-comprehensive.json'),
      JSON.stringify(report, null) 2),
    );
    //Generate markdown report
    this.generateMarkdownReport(report);
//     //     //     //     //     //     //     //     return report;
  }
  generateMarkdownReport(report) {
    let _markdown = `# Website Analysis Report - ${this.baseUrl}\n\n`;
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
=======

    // Save report
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n=== ANALYSIS COMPLETE ===');
    console.log(`Total pages analyzed: ${this.analyzedPages.length}`);
    console.log(`Working links: ${this.workingLinks.length}`);
    console.log(`Broken links: ${this.brokenLinks.length}`);
    console.log(`Unique URLs visited: ${this.visitedUrls.size}`);
    
    if (this.brokenLinks.length > 0) {
      console.log('\n=== BROKEN LINKS ===');
      this.brokenLinks.forEach(link => {
        console.log(`❌ ${link.url} - Status: ${link.statusCode || 'Error: ' + link.error}`);
      });
    }

    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
>>>>>>> cursor/website-audit-and-update-with-deployment-a7af
    if (this.brokenLinks.length > 0) {
      recommendations.push({
        type: 'critical',
        message: `Found ${this.brokenLinks.length} broken links that need immediate attention`,
        action: 'Fix broken links or remove them from navigation'
      });
    }

    // Check for missing common pages
    const commonPages = ['/about', '/contact', '/services', '/privacy', '/terms', '/team', '/case-studies'];
    const existingPages = this.analyzedPages.map(page => new URL(page.url).pathname);
    const missingPages = commonPages.filter(page => !existingPages.includes(page));
    
    if (missingPages.length > 0) {
      recommendations.push({
        type: 'important',
        message: `Missing common pages: ${missingPages.join(', ')}`,
        action: 'Create these essential pages for better user experience'
      });
    }
<<<<<<< HEAD
    const _imagesWithoutAlt = this.images.filter(img => !img.hasAlt);
    if (imagesWithoutAlt.length > 0) {
      recommendations.push(`Add alt text to ${imagesWithoutAlt.length} images for accessibility`)
      );
=======

    // Check for SEO issues
    const pagesWithoutTitles = this.analyzedPages.filter(page => 
      page.title === 'No title' || page.title.trim() === ''
    );
    
    if (pagesWithoutTitles.length > 0) {
      recommendations.push({
        type: 'seo',
        message: `${pagesWithoutTitles.length} pages are missing proper titles`,
        action: 'Add descriptive titles to all pages for better SEO'
      });
>>>>>>> cursor/website-audit-and-update-with-deployment-a7af
    }

    return recommendations;
  }
}

// Run the analysis
async function main() {
  const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
  try {
    const report = await analyzer.analyze();
    console.log('\nReport saved to website-analysis-report.json');
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}
<<<<<<< HEAD
//Run analysis
// main().catch(console.error);
export default WebsiteAnalyzer;
// #!/usr/bin/env node import axios from 'axios'' import * as cheerio from 'cheerio'' import fs from 'fs'' import path from 'path'' import { fileURLToPath } from 'url' const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class WebsiteAnalyzer {constructor(baseUrl) { this.baseUrl = baseUrl; this.visitedUrls = new Set(); this.brokenLinks = []; this.missingPages = []; this.externalLinks = []; this.internalLinks = []; this.images = []; this.forms = []; this.navigation = []; this.contentIssues = []} } async analyzeWebsite() { try {//Start with homepage await this.analyzePage(this.baseUrl); //Analyze all internal links found const urlsToAnalyze = Array.from(this.internalLinks); for (const url of urlsToAnalyze) { if (!this.visitedUrls.has(url)) { await this.analyzePage(url)} } } //Generate comprehensive report this.generateReport(); } catch (error) {' } } async analyzePage(url) {if (this.visitedUrls.has(url)) return} this.visitedUrls.add(url); try {const response = await axios.get(url, { timeout: 10000) headers: {' 'User-Agent': 'Mozilla/5.0 (compatible} WebsiteAnalyzer/1.0)' } }); const $ = cheerio.load(response.data); //Analyze page content this.analyzePageContent(url) $); //Extract all links this.extractLinks(url) $); //Extract images this.extractImages(url) $); //Extract forms this.extractForms(url) $); //Analyze navigation this.analyzeNavigation(url) $); } catch (error) { this.brokenLinks.push({url,' status: error.response?.status || 'ERROR') error: error.message}' type: 'page' }); } } analyzePageContent(url) $) {//Check for placeholder content const text = $.text().toLowerCase(); const placeholders = [' 'lorem ipsum',' 'placeholder',' 'coming soon',' 'under construction',' 'page not found',' '404',' 'home.hero_title',' 'home.hero_subtitle' ]} placeholders.forEach(placeholder => { if (text.includes(placeholder)) { this.contentIssues.push({ url} issue: `Contains placeholder text: "${placeholder}"`)' type: 'placeholder' }); } }); //Check for empty content' const mainContent = $('main, .content, #content) .main-content').text().trim(); if (mainContent.length < 100) {this.contentIssues.push({ url)' issue: 'Very little content found'}' type: 'minimal_content' }); } //Check for missing meta tags' const title = $('title').text().trim();' const description = $('meta[name="description"]').attr('content'); if (!title || title.length < 10) {this.contentIssues.push({ url)' issue: 'Missing or inadequate page title'}' type: 'seo' }); } if (!description || description.length < 50) {this.contentIssues.push({ url)' issue: 'Missing or inadequate meta description'}' type: 'seo' }); } } extractLinks(url) $) {' $('a[href]').each((index) element) => {' const href = $(element).attr('href'); const text = $(element).text().trim(); if (!href) return; const absoluteUrl = this.resolveUrl(url) href)} const linkData = { url: absoluteUrl, text, source: url} type: this.getLinkType(absoluteUrl) }; if (this.isInternalLink(absoluteUrl)) {this.internalLinks.add(absoluteUrl)} } else {this.externalLinks.push(linkData)} } }); } extractImages(url) $) {' $('img[src]').each((index) element) => {' const src = $(element).attr('src');' const alt = $(element).attr('alt'); if (!src) return; const imageUrl = this.resolveUrl(url) src)} this.images.push({ url: imageUrl,' alt: alt || '') source: url} hasAlt: !!alt }); }); } extractForms(url) $) {' $('form').each((index) element) => {' const action = $(element).attr('action');' const method = $(element).attr('method') || 'GET'' const inputs = $(element).find('input, textarea) select').length} this.forms.push({ url, action: action ? this.resolveUrl(url) action) : url, method} inputCount: inputs }); }); } analyzeNavigation(url) $) {' $('nav, .navigation) .menu').each((index) element) => { const navLinks = [];' $(element).find('a[href]').each((i) link) => {' const href = $(link).attr('href'); const text = $(link).text().trim()} if (href && text) { navLinks.push({ url: this.resolveUrl(url) href), text, isInternal: this.isInternalLink(this.resolveUrl(url} href)) }); } }); if (navLinks.length > 0) {this.navigation.push({ url} links: navLinks }); } }); } resolveUrl(baseUrl) href) {try { return new URL(href) baseUrl).href} } catch {return href} } } isInternalLink(url) {try { const baseDomain = new URL(this.baseUrl).hostname; const linkDomain = new URL(url).hostname; return baseDomain === linkDomain} } catch {return false} } } getLinkType(url) {' if (url.startsWith('mailto:')) return 'email'' if (url.startsWith('tel:')) return 'phone'' if (url.startsWith('#')) return 'anchor'' return 'http' } generateReport() {const report = { analysisDate: new Date().toISOString(), baseUrl: this.baseUrl, summary: { totalPagesAnalyzed: this.visitedUrls.size, totalInternalLinks: this.internalLinks.size, totalExternalLinks: this.externalLinks.length, totalImages: this.images.length, totalForms: this.forms.length, brokenLinks: this.brokenLinks.length} contentIssues: this.contentIssues.length }, brokenLinks: this.brokenLinks, contentIssues: this.contentIssues, missingPages: this.missingPages, externalLinks: this.externalLinks, images: this.images, forms: this.forms, navigation: this.navigation; recommendations: this.generateRecommendations() }; //Save detailed report fs.writeFileSync(' path.join(__dirname) 'website-analysis-comprehensive.json'), JSON.stringify(report, null) 2) ); //Generate markdown report this.generateMarkdownReport(report); ' return report; } generateMarkdownReport(report) { let markdown = `# Website Analysis Report - ${this.baseUrl}\\n\\n`; markdown += `**Analysis Date:** ${new Date(report.analysisDate).toLocaleString()}\\n\\n`; markdown += `## Summary\\n\\n`; markdown += `- **Pages Analyzed:** ${report.summary.totalPagesAnalyzed}\\n`; markdown += `- **Internal Links:** ${report.summary.totalInternalLinks}\\n`; markdown += `- **External Links:** ${report.summary.totalExternalLinks}\\n`; markdown += `- **Broken Links:** ${report.summary.brokenLinks}\\n`; markdown += `- **Content Issues:** ${report.summary.contentIssues}\\n`; markdown += `- **Images:** ${report.summary.totalImages}\\n`; markdown += `- **Forms:** ${report.summary.totalForms}\\n\\n`; if (report.brokenLinks.length > 0) {markdown += `## 🚨 Broken Links\\n\\n`} report.brokenLinks.forEach(link => { markdown += `- **${link.url}** (Status: ${link.status})\\n`; markdown += ` - Error: ${link.error}\\n`; markdown += ` - Type: ${link.type}\\n\\n`; }); } if (report.contentIssues.length > 0) {markdown += `## ⚠️ Content Issues\\n\\n`} report.contentIssues.forEach(issue => { markdown += `- **${issue.url}**\\n`; markdown += ` - Issue: ${issue.issue}\\n`; markdown += ` - Type: ${issue.type}\\n\\n`) }); } markdown += `## 📋 Recommendations\\n\\n`; report.recommendations.forEach(rec => { markdown += `- ${rec}\\n`) }); fs.writeFileSync(' path.join(__dirname) 'website-analysis-report.md'), markdown ); } generateRecommendations() {const recommendations = []; if (this.brokenLinks.length > 0) {' recommendations.push('Fix all broken links identified in the analysis')} } if (this.contentIssues.length > 0) {' recommendations.push('Address content issues including placeholders and missing meta tags')} } const imagesWithoutAlt = this.images.filter(img => !img.hasAlt); if (imagesWithoutAlt.length > 0) { recommendations.push(`Add alt text to ${imagesWithoutAlt.length} images for accessibility`); } ' recommendations.push('Implement proper error handling for 404 pages');' recommendations.push('Add structured data markup for better SEO');' recommendations.push('Optimize images for better performance');' recommendations.push('Implement proper caching headers');' recommendations.push('Add security headers (CSP, HSTS) etc.)'); return recommendations; } } //Run analysis async function main() {' const analyzer = new WebsiteAnalyzer('https: //ziontechgroup.com')} await analyzer.analyzeWebsite()} } // Run analysis main().catch(console.error); export default WebsiteAnalyzer;'
=======

// Run the analysis if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default WebsiteAnalyzer;
>>>>>>> cursor/website-audit-and-update-with-deployment-a7af
