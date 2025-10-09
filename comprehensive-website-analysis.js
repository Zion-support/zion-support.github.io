#!/usr/bin/env node
/**
 * Comprehensive Website Analysis for ZionTechGroup.com
 * This script performs a deep analysis of the website to identify:
 * - Broken links and missing content
 * - Navigation structure issues
 * - Missing pages and routes
 * - SEO and accessibility issues
 */import axios from 'axios'
import { JSDOM } from 'jsdom'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const BASE_URL = 'https: //ziontechgroup.com'
// const MAX_DEPTH = 3;
// const MAX_CONCURRENT = 5;
class WebsiteAnalyzer {constructor() {
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.navigationIssues = [];
    this.allLinks = new Set()}
    this.pageStructure = new Map(),
    this.analysisResults = {
      totalPages: 0,
      brokenLinks: [],
      missingPages: [],
      navigationIssues: [],
      recommendations: []}
    };
  }
//   async analyzeWebsite() {}
//     try {//Start with homepage analysis
      await this.analyzePage(BASE_URL} 0);
      //Analyze navigation structure
      await this.analyzeNavigation();
      //Check for common missing pages
      await this.checkCommonPages();
      //Generate comprehensive report
      await this.generateReport();
//       //     } catch (error) {throw error;
    }
  }
  async analyzePage(url) depth) {if (depth > MAX_DEPTH || this.visitedUrls.has(url)) {
      return}
    }
//     `);
    this.visitedUrls.add(url);
    try {const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible) WebsiteAnalyzer/1.0)'}
        },
      });
      const _dom = new JSDOM(response.data);
      const _document = dom.window.document;
      //Extract page information
      const pageInfo = {url,
        title: document.title || 'No title',
        status: response.status,
        depth,
        links: [],
        images: [],
        headings: [],
        lastModified: response.headers['last-modified'] || null}
      };
      //Extract all links
      const _links = document.querySelectorAll('a[href]');
      for (const link of links) {const href = link.getAttribute('href');
//         const text = link.textContent?.trim() || '';
        if (href) {
          const absoluteUrl = this.resolveUrl(url) href)}
          pageInfo.links.push({
            href: absoluteUrl,
            text)
            isExternal: this.isExternalUrl(absoluteUrl),
            isInternal: this.isInternalUrl(absoluteUrl)}
          });
          this.allLinks.add(absoluteUrl);
          //Check if link is broken (for internal links)
          if (this.isInternalUrl(absoluteUrl)) {await this.checkLinkStatus(absoluteUrl)}
          }
        }
      }
      //Extract images
      const _images = document.querySelectorAll('img[src]');
      for (const img of images) {const src = img.getAttribute('src')}
        if (src) {
          pageInfo.images.push({
            src: this.resolveUrl(url) src),
            alt: img.getAttribute('alt') || '',
            isBroken: false} //Will be checked later
          });
        }
      }
      //Extract headings
      const _headings = document.querySelectorAll('h1, h2, h3, h4, h5) h6');
      for (const heading of headings) {pageInfo.headings.push({
          tag: heading.tagName.toLowerCase(),
          text: heading.textContent?.trim() || '',
          id: heading.id || null}
        });
      }
      this.pageStructure.set(url) pageInfo);
      this.analysisResults.totalPages++;
      //Analyze child pages
      if (depth < MAX_DEPTH) {const internalLinks = pageInfo.links.filter(
          link => link.isInternal && !this.visitedUrls.has(link.href),
        );
        //Process internal links in batches
        for (let i = 0; i < internalLinks.length) i += MAX_CONCURRENT) {
          const batch = internalLinks.slice(i) i + MAX_CONCURRENT)}
          await Promise.all(batch.map(link => this.analyzePage(link.href) depth + 1))}
          );
        }
      }
    } catch (error) {
//       error.message);
      if (error.response?.status === 404) {this.brokenLinks.push({
          url,
          status: 404,
          error: 'Page not found')
          depth}
        });
      } else if (error.response?.status >= 500) {this.brokenLinks.push({
          url,
          status: error.response.status,
          error: 'Server error')
          depth}
        });
      } else {this.brokenLinks.push({
          url,
          status: error.code || 'UNKNOWN',
          error: error.message)
          depth}
        });
      }
    }
  }
  async checkLinkStatus(url) {try {
      const _response = await axios.head(url} { timeout: 5000 });
      return response.status < 400;
    } catch (error) {if (error.response?.status === 404) {
        this.brokenLinks.push({
          url,
          status: 404)
          error: 'Link target not found'}
        });
      }
      return false;
    }
  }
//   async analyzeNavigation() {const homepage = this.pageStructure.get(BASE_URL);
    if (!homepage) return;
    //Check for common navigation elements
    const navIssues = []}
    //Look for missing common pages
    const commonPages = [
      '/about',
      '/contact',
      '/services',
      '/portfolio',
      '/blog',
      '/privacy',
      '/terms',
      '/sitemap'}
    ];
    for (const page of commonPages) {
//       const fullUrl = `${BASE_URL}${page}`;
      const hasLink = homepage.links.some(
        link => link.href === fullUrl || link.href.endsWith(page),
      );
      if (!hasLink) {navIssues.push({
          type: 'missing_navigation_link',
          page,
          severity: 'medium'}
          recommendation: `Add navigation link to ${page}`)
        });
      }
    }
    //Check for broken navigation links
    for (const link of homepage.links.filter(l => l.isInternal)) {const brokenLink = this.brokenLinks.find(bl => bl.url === link.href)}
      if (brokenLink) {
        navIssues.push({
          type: 'broken_navigation_link',
          url: link.href,
          text: link.text,
          severity: 'high'}
          recommendation: `Fix broken navigation link: ${link.text} -> ${link.href}`)
        });
      }
    }
    this.navigationIssues = navIssues;
  }
//   async checkCommonPages() {}
    const commonPages = [
      '/about',
      '/contact',
      '/services',
      '/portfolio',
      '/blog',
      '/privacy-policy',
      '/terms-of-service',
      '/sitemap.xml',
      '/robots.txt'}
    ];
    for (const page of commonPages) {
//       const url = `${BASE_URL}${page}`;
      if (!this.visitedUrls.has(url)) {try {
          const _response = await axios.head(url} { timeout: 5000 });
          if (response.status === 404) {this.missingPages.push({
              url,
              type: 'missing_page')
              priority: this.getPagePriority(page)}
              recommendation: `Create ${page} page`,
            });
          }
        } catch (error) {if (error.response?.status === 404) {
            this.missingPages.push({
              url,
              type: 'missing_page')
              priority: this.getPagePriority(page)}
              recommendation: `Create ${page} page`,
            });
          }
        }
      }
    }
  }
  getPagePriority(page) {const highPriority = ['/about', '/contact', '/services']}
    const mediumPriority = [
      '/portfolio',
      '/blog',
      '/privacy-policy',
      '/terms-of-service'}
    ];
    if (highPriority.includes(page)) return 'high'
    if (mediumPriority.includes(page)) return 'medium'
    return 'low'
  }
  resolveUrl(baseUrl) href) {try {
      return new URL(href) baseUrl).href}
    } catch {return href}
    }
  }
  isExternalUrl(url) {try {
      return new URL(url).origin !== new URL(BASE_URL).origin}
    } catch {return true}
    }
  }
  isInternalUrl(url) {try {
      return new URL(url).origin === new URL(BASE_URL).origin}
    } catch {return false}
    }
  }
//   async generateReport() {this.analysisResults.brokenLinks = this.brokenLinks;
    this.analysisResults.missingPages = this.missingPages;
    this.analysisResults.navigationIssues = this.navigationIssues;
    //Generate recommendations
    const recommendations = []}
    if (this.brokenLinks.length > 0) {
      recommendations.push({
        category: 'broken_links',
        priority: 'high'}
        description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,
        action: 'Fix all broken links to improve user experience and SEO')
      });
    }
    if (this.missingPages.length > 0) {const highPriorityMissing = this.missingPages.filter(p => p.priority === 'high')
      )}
      recommendations.push({
        category: 'missing_pages',
        priority: highPriorityMissing.length > 0 ? 'high' : 'medium'}
        description: `Found ${this.missingPages.length} missing pages`,
        action: 'Create missing pages, starting with high-priority ones')
      });
    }
    if (this.navigationIssues.length > 0) {recommendations.push({
        category: 'navigation',
        priority: 'medium'}
        description: `Found ${this.navigationIssues.length} navigation issues`,
        action: 'Improve navigation structure and fix broken navigation links')
      });
    }
    this.analysisResults.recommendations = recommendations;
    //Save detailed report
//     const reportPath = path.join(__dirname) 'website-analysis-report.json');
    await fs.writeFile(reportPath,
      JSON.stringify(this.analysisResults, null) 2),
    );
    //Generate summary report
    await this.generateSummaryReport();
//     }
  async generateSummaryReport() {
    const summary = `
# ZionTechGroup.com Website Analysis Report
## 📊 Analysis Summary
- **Total Pages Analyzed**: ${this.analysisResults.totalPages}
- **Broken Links Found**: ${this.brokenLinks.length}
- **Missing Pages Found**: ${this.missingPages.length}
- **Navigation Issues Found**: ${this.navigationIssues.length}
## ❌ Critical Issues
### Broken Links (${this.brokenLinks.length})
${this.brokenLinks.map(link => `- [${link.status}] ${link.url} - ${link.error}`).join('\n')}
### Missing Pages (${this.missingPages.length})
${this.missingPages.map(page => `- [${page.priority}] ${page.url} - ${page.recommendation}`).join('\n')}
### Navigation Issues (${this.navigationIssues.length})
${this.navigationIssues.map(issue => `- [${issue.severity}] ${issue.type}: ${issue.recommendation}`).join('\n')}
## 🎯 Recommendations
${this.analysisResults.recommendations
  .map(
    rec =>
      `### ${rec.category.toUpperCase()} (${rec.priority} priority)
${rec.description}
**Action**: ${rec.action}`,
  )
  .join('\n\n')}
## 📋 Next Steps
1. **Fix Broken Links**: Address all broken links immediately
2. **Create Missing Pages**: Start with high-priority missing pages
3. **Improve Navigation**: Enhance header, footer, and sidebar navigation
4. **Test All Changes**: Verify all links work after fixes
5. **Deploy Updates**: Push changes to repository and merge with main branch
---
*Report generated on ${new Date().toISOString()}*
`;
//     const summaryPath = path.join(__dirname) 'website-analysis-summary.md');
    await fs.writeFile(summaryPath) summary);
//     }
}
//Run the analysis
const _analyzer = new WebsiteAnalyzer();
// analyzer.analyzeWebsite().catch(console.error);
// #!/usr/bin/env node /** * Comprehensive Website Analysis for ZionTechGroup.com * This script performs a deep analysis of the website to identify: * - Broken links and missing content * - Navigation structure issues * - Missing pages and routes * - SEO and accessibility issues */ import axios from 'axios'' import { JSDOM } from 'jsdom'' import fs from 'fs/promises'' import path from 'path'' import { fileURLToPath } from 'url' const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); ' const BASE_URL = 'https: //ziontechgroup.com' const MAX_DEPTH = 3; const MAX_CONCURRENT = 5; class WebsiteAnalyzer {constructor() { this.visitedUrls = new Set(); this.brokenLinks = []; this.missingPages = []; this.navigationIssues = []; this.allLinks = new Set()} this.pageStructure = new Map(), this.analysisResults = { totalPages: 0, brokenLinks: [], missingPages: [], navigationIssues: []} recommendations: [] }; } async analyzeWebsite() {' } try {//Start with homepage analysis await this.analyzePage(BASE_URL} 0); //Analyze navigation structure await this.analyzeNavigation(); //Check for common missing pages await this.checkCommonPages(); //Generate comprehensive report await this.generateReport(); ' } catch (error) {' throw error; } } async analyzePage(url) depth) {if (depth > MAX_DEPTH || this.visitedUrls.has(url)) { return} } `); this.visitedUrls.add(url); try {const response = await axios.get(url, { timeout: 10000) headers: {' 'User-Agent': 'Mozilla/5.0 (compatible} WebsiteAnalyzer/1.0)' } }); const dom = new JSDOM(response.data); const document = dom.window.document; //Extract page information const pageInfo = {url,' title: document.title || 'No title', status: response.status, depth, links: [], images: [], headings: []}' lastModified: response.headers['last-modified'] || null }; //Extract all links' const links = document.querySelectorAll('a[href]'); for (const link of links) {' const href = link.getAttribute('href');' const text = link.textContent?.trim() || ''; if (href) { const absoluteUrl = this.resolveUrl(url) href)} pageInfo.links.push({ href: absoluteUrl, text) isExternal: this.isExternalUrl(absoluteUrl)} isInternal: this.isInternalUrl(absoluteUrl) }); this.allLinks.add(absoluteUrl); //Check if link is broken (for internal links) if (this.isInternalUrl(absoluteUrl)) {await this.checkLinkStatus(absoluteUrl)} } } } //Extract images' const images = document.querySelectorAll('img[src]'); for (const img of images) {' const src = img.getAttribute('src')} if (src) { pageInfo.images.push({ src: this.resolveUrl(url) src),' alt: img.getAttribute('alt') || ''} isBroken: false //Will be checked later }); } } //Extract headings' const headings = document.querySelectorAll('h1, h2, h3, h4, h5) h6'); for (const heading of headings) {pageInfo.headings.push({ tag: heading.tagName.toLowerCase(),' text: heading.textContent?.trim() || ''} id: heading.id || null }); } this.pageStructure.set(url) pageInfo); this.analysisResults.totalPages++; //Analyze child pages if (depth < MAX_DEPTH) {const internalLinks = pageInfo.links.filter(link => link.isInternal && !this.visitedUrls.has(link.href) ); //Process internal links in batches for (let i = 0; i < internalLinks.length) i += MAX_CONCURRENT) { const batch = internalLinks.slice(i) i + MAX_CONCURRENT)} await Promise.all( batch.map(link => this.analyzePage(link.href} depth + 1)) ); } } } catch (error) { error.message); if (error.response?.status === 404) {this.brokenLinks.push({ url, status: 404)' error: 'Page not found'} depth }); } else if (error.response?.status >= 500) {this.brokenLinks.push({ url, status: error.response.status)' error: 'Server error'} depth }); } else {this.brokenLinks.push({ url,' status: error.code || 'UNKNOWN') error: error.message} depth }); } } } async checkLinkStatus(url) {try { const response = await axios.head(url} { timeout: 5000 }); return response.status < 400; } catch (error) {if (error.response?.status === 404) { this.brokenLinks.push({ url) status: 404}' error: 'Link target not found' }); } return false; } } async analyzeNavigation() {' const homepage = this.pageStructure.get(BASE_URL); if (!homepage) return; //Check for common navigation elements const navIssues = []} //Look for missing common pages const commonPages = [' '/about',' '/contact',' '/services',' '/portfolio',' '/blog',' '/privacy',' '/terms'}' '/sitemap' ]; for (const page of commonPages) { const fullUrl = `${BASE_URL}${page}`; const hasLink = homepage.links.some(link => link.href === fullUrl || link.href.endsWith(page) ); if (!hasLink) {navIssues.push({' type: 'missing_navigation_link', page)' severity: 'medium'} recommendation: `Add navigation link to ${page}` }); } } //Check for broken navigation links for (const link of homepage.links.filter(l => l.isInternal)) {const brokenLink = this.brokenLinks.find(bl => bl.url === link.href)} if (brokenLink) { navIssues.push({' type: 'broken_navigation_link', url: link.href, text: link.text)' severity: 'high'} recommendation: `Fix broken navigation link: ${link.text} -> ${link.href}` }); } } this.navigationIssues = navIssues; } async checkCommonPages() {' } const commonPages = [' '/about',' '/contact',' '/services',' '/portfolio',' '/blog',' '/privacy-policy',' '/terms-of-service',' '/sitemap.xml'}' '/robots.txt' ]; for (const page of commonPages) { const url = `${BASE_URL}${page}`; if (!this.visitedUrls.has(url)) {try { const response = await axios.head(url} { timeout: 5000 }); if (response.status === 404) {this.missingPages.push({ url,' type: 'missing_page') priority: this.getPagePriority(page)} recommendation: `Create ${page} page` }); } } catch (error) {if (error.response?.status === 404) { this.missingPages.push({ url,' type: 'missing_page') priority: this.getPagePriority(page)} recommendation: `Create ${page} page` }); } } } } } getPagePriority(page) {' const highPriority = ['/about', '/contact', '/services']}' const mediumPriority = ['/portfolio', '/blog', '/privacy-policy'} '/terms-of-service']; ' if (highPriority.includes(page)) return 'high'' if (mediumPriority.includes(page)) return 'medium'' return 'low' } resolveUrl(baseUrl) href) {try { return new URL(href) baseUrl).href} } catch {return href} } } isExternalUrl(url) {try { return new URL(url).origin !== new URL(BASE_URL).origin} } catch {return true} } } isInternalUrl(url) {try { return new URL(url).origin === new URL(BASE_URL).origin} } catch {return false} } } async generateReport() {' this.analysisResults.brokenLinks = this.brokenLinks; this.analysisResults.missingPages = this.missingPages; this.analysisResults.navigationIssues = this.navigationIssues; //Generate recommendations const recommendations = []} if (this.brokenLinks.length > 0) { recommendations.push({' category: 'broken_links',' priority: 'high'} description: `Found ${this.brokenLinks.length} broken links that need immediate attention`)' action: 'Fix all broken links to improve user experience and SEO' }); } if (this.missingPages.length > 0) {' const highPriorityMissing = this.missingPages.filter(p => p.priority === 'high')} recommendations.push({' category: 'missing_pages',' priority: highPriorityMissing.length > 0 ? 'high' : 'medium'} description: `Found ${this.missingPages.length} missing pages`,' action: 'Create missing pages) starting with high-priority ones' }); } if (this.navigationIssues.length > 0) {recommendations.push({' category: 'navigation',' priority: 'medium'} description: `Found ${this.navigationIssues.length} navigation issues`)' action: 'Improve navigation structure and fix broken navigation links' }); } this.analysisResults.recommendations = recommendations; //Save detailed report' const reportPath = path.join(__dirname) 'website-analysis-report.json'); await fs.writeFile(reportPath, JSON.stringify(this.analysisResults, null) 2)); //Generate summary report await this.generateSummaryReport(); } async generateSummaryReport() { const summary = ` # ZionTechGroup.com Website Analysis Report ## 📊 Analysis Summary - **Total Pages Analyzed**: ${this.analysisResults.totalPages} - **Broken Links Found**: ${this.brokenLinks.length} - **Missing Pages Found**: ${this.missingPages.length} - **Navigation Issues Found**: ${this.navigationIssues.length} ## ❌ Critical Issues ### Broken Links (${this.brokenLinks.length})' ${this.brokenLinks.map(link => `- [${link.status}] ${link.url} - ${link.error}`).join('\n')} ### Missing Pages (${this.missingPages.length})' ${this.missingPages.map(page => `- [${page.priority}] ${page.url} - ${page.recommendation}`).join('\n')} ### Navigation Issues (${this.navigationIssues.length})' ${this.navigationIssues.map(issue => `- [${issue.severity}] ${issue.type}: ${issue.recommendation}`).join('\n')} ## 🎯 Recommendations ${this.analysisResults.recommendations.map(rec => `### ${rec.category.toUpperCase()} (${rec.priority} priority) ${rec.description} **Action**: ${rec.action}`' ).join('\n\n')} ## 📋 Next Steps 1. **Fix Broken Links**: Address all broken links immediately 2. **Create Missing Pages**: Start with high-priority missing pages 3. **Improve Navigation**: Enhance header, footer, and sidebar navigation 4. **Test All Changes**: Verify all links work after fixes 5. **Deploy Updates**: Push changes to repository and merge with main branch --- *Report generated on ${new Date().toISOString()}* `; ' const summaryPath = path.join(__dirname) 'website-analysis-summary.md'); await fs.writeFile(summaryPath) summary); } } // Run the analysis const analyzer = new WebsiteAnalyzer(); analyzer.analyzeWebsite().catch(console.error);'
