#!/usr/bin/env node

/**
 * Comprehensive Website Analysis Script
 * Analyzes the Zion Tech Group website for broken links, missing content, and navigation issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class WebsiteAnalyzer {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.appDir = '/workspace/app';
    this.issues = {
      brokenLinks: [],
      missingPages: [],
      navigationIssues: [],
      contentIssues: []
    };
    this.allRoutes = new Set();
    this.existingPages = new Set();
  }

  async analyze() {
    console.log('🔍 Starting comprehensive website analysis...');
    
    // Step 1: Scan all existing pages
    await this.scanExistingPages();
    
    // Step 2: Extract all links from navigation and content
    await this.extractAllLinks();
    
    // Step 3: Identify broken links
    await this.identifyBrokenLinks();
    
    // Step 4: Identify missing pages
    await this.identifyMissingPages();
    
    // Step 5: Analyze navigation structure
    await this.analyzeNavigation();
    
    // Step 6: Generate comprehensive report
    await this.generateReport();
    
    console.log('✅ Analysis complete!');
  }

  async scanExistingPages() {
    console.log('📁 Scanning existing pages...');
    
    const scanDirectory = (dir, prefix = '') => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && !item.startsWith('__')) {
          const route = prefix ? `${prefix}/${item}` : item;
          this.allRoutes.add(`/${route}`);
          scanDirectory(fullPath, route);
        } else if (item === 'page.tsx') {
          const route = prefix ? `/${prefix}` : '/';
          this.existingPages.add(route);
        }
      }
    };
    
    scanDirectory(this.appDir);
    
    console.log(`📊 Found ${this.existingPages.size} existing pages`);
    console.log(`📊 Found ${this.allRoutes.size} total routes`);
  }

  async extractAllLinks() {
    console.log('🔗 Extracting all links from navigation and content...');
    
    // Extract links from layout.tsx (navigation)
    await this.extractLinksFromFile('/workspace/app/layout.tsx');
    
    // Extract links from all page.tsx files
    const pageFiles = await this.findPageFiles();
    for (const file of pageFiles) {
      await this.extractLinksFromFile(file);
    }
  }

  async findPageFiles() {
    const pageFiles = [];
    
    const findInDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && !item.startsWith('__')) {
          findInDirectory(fullPath);
        } else if (item === 'page.tsx') {
          pageFiles.push(fullPath);
        }
      }
    };
    
    findInDirectory(this.appDir);
    return pageFiles;
  }

  async extractLinksFromFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract href attributes from Link components
      const linkRegex = /href=["']([^"']+)["']/g;
      let match;
      
      while ((match = linkRegex.exec(content)) !== null) {
        const href = match[1];
        if (href.startsWith('/') && !href.startsWith('//')) {
          this.allRoutes.add(href);
        }
      }
    } catch (error) {
      console.warn(`⚠️ Could not read file ${filePath}: ${error.message}`);
    }
  }

  async identifyBrokenLinks() {
    console.log('🔍 Identifying broken links...');
    
    for (const route of this.allRoutes) {
      if (!this.existingPages.has(route)) {
        this.issues.brokenLinks.push({
          route,
          type: 'missing-page',
          severity: 'high',
          description: `Page ${route} is referenced but does not exist`
        });
      }
    }
    
    console.log(`❌ Found ${this.issues.brokenLinks.length} broken links`);
  }

  async identifyMissingPages() {
    console.log('📝 Identifying missing critical pages...');
    
    const criticalPages = [
      '/',
      '/about',
      '/contact',
      '/services',
      '/blog',
      '/case-studies',
      '/privacy',
      '/terms',
      '/security',
      '/sitemap.xml',
      '/robots.txt'
    ];
    
    for (const page of criticalPages) {
      if (!this.existingPages.has(page)) {
        this.issues.missingPages.push({
          route: page,
          priority: 'critical',
          description: `Critical page ${page} is missing`
        });
      }
    }
    
    // Check for missing service pages referenced in navigation
    const referencedServices = [
      '/services/ai-services',
      '/services/micro-saas',
      '/services/it-services',
      '/services/manufacturing-ai-platform',
      '/services/supply-chain-intelligence',
      '/services/ai-autonomous-operations',
      '/services/ai-business-intelligence-2025',
      '/services/ai-cybersecurity-2025',
      '/services/ai-cloud-infrastructure-2025',
      '/services/ai-quantum-computing-2026',
      '/services/ai-autonomous-operations-2026'
    ];
    
    for (const service of referencedServices) {
      if (!this.existingPages.has(service)) {
        this.issues.missingPages.push({
          route: service,
          priority: 'high',
          description: `Service page ${service} is referenced in navigation but missing`
        });
      }
    }
    
    console.log(`📝 Found ${this.issues.missingPages.length} missing pages`);
  }

  async analyzeNavigation() {
    console.log('🧭 Analyzing navigation structure...');
    
    // Check for navigation consistency
    const layoutFile = '/workspace/app/layout.tsx';
    if (fs.existsSync(layoutFile)) {
      const content = fs.readFileSync(layoutFile, 'utf8');
      
      // Check if mobile menu is properly implemented
      if (!content.includes('md:hidden') || !content.includes('mobile')) {
        this.issues.navigationIssues.push({
          type: 'mobile-navigation',
          severity: 'medium',
          description: 'Mobile navigation may not be fully implemented'
        });
      }
      
      // Check for proper dropdown functionality
      if (!content.includes('group-hover:opacity-100')) {
        this.issues.navigationIssues.push({
          type: 'dropdown-functionality',
          severity: 'medium',
          description: 'Dropdown navigation may not be properly styled'
        });
      }
    }
    
    console.log(`🧭 Found ${this.issues.navigationIssues.length} navigation issues`);
  }

  async generateReport() {
    console.log('📊 Generating comprehensive report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalRoutes: this.allRoutes.size,
        existingPages: this.existingPages.size,
        brokenLinks: this.issues.brokenLinks.length,
        missingPages: this.issues.missingPages.length,
        navigationIssues: this.issues.navigationIssues.length
      },
      brokenLinks: this.issues.brokenLinks,
      missingPages: this.issues.missingPages,
      navigationIssues: this.issues.navigationIssues,
      recommendations: this.generateRecommendations()
    };
    
    // Save detailed report
    fs.writeFileSync('/workspace/website-analysis-report.json', JSON.stringify(report, null, 2));
    
    // Generate markdown summary
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync('/workspace/WEBSITE_ANALYSIS_REPORT.md', markdownReport);
    
    console.log('📊 Report generated: website-analysis-report.json');
    console.log('📊 Summary generated: WEBSITE_ANALYSIS_REPORT.md');
  }

  generateRecommendations() {
    return [
      {
        priority: 'critical',
        action: 'Create missing critical pages',
        description: 'Create /privacy, /terms, /security pages for legal compliance'
      },
      {
        priority: 'high',
        action: 'Fix broken service links',
        description: 'Create missing service pages or update navigation to match existing pages'
      },
      {
        priority: 'medium',
        action: 'Improve mobile navigation',
        description: 'Implement proper mobile menu functionality'
      },
      {
        priority: 'low',
        action: 'Add breadcrumb navigation',
        description: 'Add breadcrumb navigation for better user experience'
      }
    ];
  }

  generateMarkdownReport(report) {
    return `# Website Analysis Report - Zion Tech Group

Generated: ${report.timestamp}

## Summary

- **Total Routes Found**: ${report.summary.totalRoutes}
- **Existing Pages**: ${report.summary.existingPages}
- **Broken Links**: ${report.summary.brokenLinks}
- **Missing Pages**: ${report.summary.missingPages}
- **Navigation Issues**: ${report.summary.navigationIssues}

## Broken Links (${report.brokenLinks.length})

${report.brokenLinks.map(link => `- **${link.route}**: ${link.description}`).join('\n')}

## Missing Pages (${report.missingPages.length})

${report.missingPages.map(page => `- **${page.route}** (${page.priority}): ${page.description}`).join('\n')}

## Navigation Issues (${report.navigationIssues.length})

${report.navigationIssues.map(issue => `- **${issue.type}**: ${issue.description}`).join('\n')}

## Recommendations

${report.recommendations.map(rec => `### ${rec.priority.toUpperCase()}: ${rec.action}\n${rec.description}`).join('\n\n')}

## Next Steps

1. Fix all broken links by creating missing pages or updating navigation
2. Implement missing critical pages (privacy, terms, security)
3. Improve mobile navigation functionality
4. Test all navigation paths thoroughly
5. Run build and deployment process

---
*Report generated by Website Analysis Script*
`;
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer();
analyzer.analyze().catch(console.error);