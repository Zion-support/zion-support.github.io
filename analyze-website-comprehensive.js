#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Comprehensive website analysis script
class WebsiteAnalyzer {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.appDir = '/workspace/app';
    this.componentsDir = '/workspace/components';
    this.issues = [];
    this.missingPages = [];
    this.brokenLinks = [];
    this.navigationIssues = [];
  }

  // Analyze all pages and routes
  analyzeRoutes() {
    console.log('🔍 Analyzing website routes and pages...');
    
    // Get all page directories
    const pages = this.getPageDirectories();
    
    // Check each page exists and has proper content
    pages.forEach(page => {
      this.analyzePage(page);
    });
    
    // Check navigation consistency
    this.analyzeNavigation();
    
    // Check sitemap consistency
    this.analyzeSitemap();
  }

  getPageDirectories() {
    const pages = [];
    
    try {
      const appContents = fs.readdirSync(this.appDir, { withFileTypes: true });
      
      appContents.forEach(item => {
        if (item.isDirectory() && !item.name.startsWith('_') && !item.name.includes('.')) {
          const pagePath = path.join(this.appDir, item.name);
          pages.push({
            name: item.name,
            path: pagePath,
            url: `/${item.name}`,
            pageFile: path.join(pagePath, 'page.tsx')
          });
        }
      });
      
      // Check nested routes
      this.getNestedRoutes(pages);
      
    } catch (error) {
      console.error('Error reading app directory:', error);
    }
    
    return pages;
  }

  getNestedRoutes(pages) {
    pages.forEach(page => {
      try {
        const subContents = fs.readdirSync(page.path, { withFileTypes: true });
        
        subContents.forEach(item => {
          if (item.isDirectory()) {
            const nestedPath = path.join(page.path, item.name);
            pages.push({
              name: `${page.name}/${item.name}`,
              path: nestedPath,
              url: `/${page.name}/${item.name}`,
              pageFile: path.join(nestedPath, 'page.tsx')
            });
          }
        });
      } catch (error) {
        // Directory might not exist or be readable
      }
    });
  }

  analyzePage(page) {
    console.log(`📄 Analyzing page: ${page.name}`);
    
    // Check if page.tsx exists
    if (!fs.existsSync(page.pageFile)) {
      this.missingPages.push({
        name: page.name,
        url: page.url,
        path: page.pageFile,
        issue: 'Missing page.tsx file'
      });
      return;
    }
    
    // Read and analyze page content
    try {
      const content = fs.readFileSync(page.pageFile, 'utf8');
      this.analyzePageContent(content, page);
    } catch (error) {
      this.issues.push({
        page: page.name,
        issue: 'Error reading page content',
        error: error.message
      });
    }
  }

  analyzePageContent(content, page) {
    // Check for broken imports
    const importRegex = /import.*from\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      if (importPath.startsWith('./') || importPath.startsWith('../')) {
        const resolvedPath = path.resolve(path.dirname(page.pageFile), importPath);
        if (!fs.existsSync(resolvedPath) && !fs.existsSync(resolvedPath + '.tsx') && !fs.existsSync(resolvedPath + '.ts')) {
          this.brokenLinks.push({
            page: page.name,
            type: 'import',
            path: importPath,
            issue: 'Broken import path'
          });
        }
      }
    }
    
    // Check for broken Link components
    const linkRegex = /to\s*=\s*['"]([^'"]+)['"]/g;
    while ((match = linkRegex.exec(content)) !== null) {
      const linkPath = match[1];
      if (linkPath.startsWith('/')) {
        this.checkLinkExists(linkPath, page.name);
      }
    }
    
    // Check for missing metadata
    if (!content.includes('export const metadata')) {
      this.issues.push({
        page: page.name,
        issue: 'Missing metadata export'
      });
    }
    
    // Check for proper React component structure
    if (!content.includes('export default function')) {
      this.issues.push({
        page: page.name,
        issue: 'Missing default export function'
      });
    }
  }

  checkLinkExists(linkPath, sourcePage) {
    // Remove query parameters and fragments
    const cleanPath = linkPath.split('?')[0].split('#')[0];
    
    // Check if it's an external link
    if (cleanPath.startsWith('http')) {
      return;
    }
    
    // Check if page exists
    const pagePath = path.join(this.appDir, cleanPath.substring(1), 'page.tsx');
    const indexPagePath = path.join(this.appDir, cleanPath.substring(1), 'index.tsx');
    
    if (!fs.existsSync(pagePath) && !fs.existsSync(indexPagePath)) {
      // Check if it's a dynamic route
      const dynamicPath = path.join(this.appDir, cleanPath.substring(1), '[id]', 'page.tsx');
      if (!fs.existsSync(dynamicPath)) {
        this.brokenLinks.push({
          page: sourcePage,
          type: 'internal_link',
          path: cleanPath,
          issue: 'Link points to non-existent page'
        });
      }
    }
  }

  analyzeNavigation() {
    console.log('🧭 Analyzing navigation components...');
    
    const navFiles = [
      '/workspace/components/Header.tsx',
      '/workspace/components/Footer.tsx',
      '/workspace/components/Sidebar.tsx'
    ];
    
    navFiles.forEach(file => {
      if (fs.existsSync(file)) {
        this.analyzeNavigationFile(file);
      } else {
        this.navigationIssues.push({
          file,
          issue: 'Navigation component missing'
        });
      }
    });
  }

  analyzeNavigationFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract all navigation links
      const linkRegex = /(?:href|to)\s*=\s*['"]([^'"]+)['"]/g;
      let match;
      const links = [];
      
      while ((match = linkRegex.exec(content)) !== null) {
        links.push(match[1]);
      }
      
      // Check each navigation link
      links.forEach(link => {
        if (link.startsWith('/') && !link.startsWith('http')) {
          this.checkLinkExists(link, path.basename(filePath));
        }
      });
      
    } catch (error) {
      this.navigationIssues.push({
        file: filePath,
        issue: 'Error reading navigation file',
        error: error.message
      });
    }
  }

  analyzeSitemap() {
    console.log('🗺️ Analyzing sitemap...');
    
    const sitemapFile = path.join(this.appDir, 'sitemap.ts');
    if (!fs.existsSync(sitemapFile)) {
      this.issues.push({
        issue: 'Missing sitemap.ts file'
      });
      return;
    }
    
    try {
      const content = fs.readFileSync(sitemapFile, 'utf8');
      
      // Extract URLs from sitemap
      const urlRegex = /url:\s*[`'"]([^`'"]+)[`'"]/g;
      let match;
      
      while ((match = urlRegex.exec(content)) !== null) {
        const url = match[1].replace(this.baseUrl, '');
        if (url) {
          this.checkLinkExists(url, 'sitemap');
        }
      }
      
    } catch (error) {
      this.issues.push({
        issue: 'Error reading sitemap file',
        error: error.message
      });
    }
  }

  // Generate comprehensive report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: this.issues.length,
        missingPages: this.missingPages.length,
        brokenLinks: this.brokenLinks.length,
        navigationIssues: this.navigationIssues.length
      },
      issues: this.issues,
      missingPages: this.missingPages,
      brokenLinks: this.brokenLinks,
      navigationIssues: this.navigationIssues,
      recommendations: this.generateRecommendations()
    };
    
    // Save report
    const reportPath = '/workspace/website-analysis-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate markdown report
    this.generateMarkdownReport(report);
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.missingPages.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Missing Pages',
        description: 'Create missing page components',
        actions: this.missingPages.map(page => `Create ${page.pageFile}`)
      });
    }
    
    if (this.brokenLinks.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Broken Links',
        description: 'Fix broken internal links',
        actions: this.brokenLinks.map(link => `Fix ${link.type} in ${link.page}: ${link.path}`)
      });
    }
    
    if (this.navigationIssues.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'Navigation Issues',
        description: 'Fix navigation component issues',
        actions: this.navigationIssues.map(issue => `Fix ${issue.file}: ${issue.issue}`)
      });
    }
    
    recommendations.push({
      priority: 'LOW',
      category: 'Performance',
      description: 'Optimize page loading and SEO',
      actions: [
        'Add proper meta descriptions to all pages',
        'Implement proper error boundaries',
        'Add loading states for better UX',
        'Optimize images and assets'
      ]
    });
    
    return recommendations;
  }

  generateMarkdownReport(report) {
    const mdReport = `# Website Analysis Report

## Summary
- **Total Issues**: ${report.summary.totalIssues}
- **Missing Pages**: ${report.summary.missingPages}
- **Broken Links**: ${report.summary.brokenLinks}
- **Navigation Issues**: ${report.summary.navigationIssues}

## Missing Pages
${report.missingPages.map(page => `- **${page.name}**: ${page.issue} (${page.pageFile})`).join('\n')}

## Broken Links
${report.brokenLinks.map(link => `- **${link.page}**: ${link.issue} - ${link.path}`).join('\n')}

## Navigation Issues
${report.navigationIssues.map(issue => `- **${issue.file}**: ${issue.issue}`).join('\n')}

## General Issues
${report.issues.map(issue => `- **${issue.page || 'Global'}**: ${issue.issue}`).join('\n')}

## Recommendations
${report.recommendations.map(rec => `
### ${rec.category} (${rec.priority} Priority)
${rec.description}

**Actions:**
${rec.actions.map(action => `- ${action}`).join('\n')}
`).join('\n')}

---
*Generated on ${report.timestamp}*
`;

    fs.writeFileSync('/workspace/website-analysis-report.md', mdReport);
  }

  // Main analysis function
  async run() {
    console.log('🚀 Starting comprehensive website analysis...');
    
    this.analyzeRoutes();
    
    const report = this.generateReport();
    
    console.log('\n📊 Analysis Complete!');
    console.log(`Total Issues: ${report.summary.totalIssues}`);
    console.log(`Missing Pages: ${report.summary.missingPages}`);
    console.log(`Broken Links: ${report.summary.brokenLinks}`);
    console.log(`Navigation Issues: ${report.summary.navigationIssues}`);
    
    console.log('\n📄 Reports generated:');
    console.log('- website-analysis-report.json');
    console.log('- website-analysis-report.md');
    
    return report;
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer();
analyzer.run().catch(console.error);

export default WebsiteAnalyzer;