const fs = require('fs');
const path = require('path');

// Comprehensive website analysis and fix script
class WebsiteAnalyzer {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.issues = [];
    this.missingPages = [];
    this.brokenLinks = [];
    this.fixedIssues = [];
  }

  // Analyze the current website structure
  analyzeWebsite() {
    console.log('🔍 Starting comprehensive website analysis...\n');

    this.analyzeRoutingIssues();
    this.analyzeNavigationIssues();
    this.analyzeMissingPages();
    this.analyzeContentIssues();

    this.generateReport();
  }

  // Analyze routing issues in App.tsx
  analyzeRoutingIssues() {
    console.log('📋 Analyzing routing issues...');

    const appTsxPath = 'src/App.tsx';
    if (!fs.existsSync(appTsxPath)) {
      this.issues.push('App.tsx not found');
      return;
    }

    const appContent = fs.readFileSync(appTsxPath, 'utf8');

    // Find all route paths
    const routeRegex = /path="([^"]+)"/g;
    const routes = [];
    let match;

    while ((match = routeRegex.exec(appContent)) !== null) {
      routes.push(match[1]);
    }

    // Check for duplicate routes
    const duplicateRoutes = routes.filter(
      (route, index) => routes.indexOf(route) !== index
    );
    if (duplicateRoutes.length > 0) {
      this.issues.push(`Duplicate routes found: ${duplicateRoutes.join(', ')}`);
    }

    // Check for invalid routes
    const invalidRoutes = routes.filter(
      route =>
        route.includes('undefined') ||
        route.includes('null') ||
        route.includes('{}')
    );

    if (invalidRoutes.length > 0) {
      this.issues.push(`Invalid routes found: ${invalidRoutes.join(', ')}`);
    }

    console.log(`Found ${routes.length} routes`);
  }

  // Analyze navigation issues in header and footer
  analyzeNavigationIssues() {
    console.log('🧭 Analyzing navigation issues...');

    const headerPath = 'src/components/EnhancedHeader.tsx';
    const footerPath = 'src/components/EnhancedFooter.tsx';

    if (fs.existsSync(headerPath)) {
      this.analyzeComponentLinks(headerPath, 'Header');
    }

    if (fs.existsSync(footerPath)) {
      this.analyzeComponentLinks(footerPath, 'Footer');
    }
  }

  // Analyze component links
  analyzeComponentLinks(componentPath, componentName) {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Find all href attributes
    const hrefRegex = /href="([^"]+)"/g;
    const hrefs = [];
    let match;

    while ((match = hrefRegex.exec(content)) !== null) {
      hrefs.push(match[1]);
    }

    // Check for broken internal links
    const internalLinks = hrefs.filter(
      href =>
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !href.startsWith('http')
    );

    internalLinks.forEach(link => {
      if (!this.pageExists(link)) {
        this.brokenLinks.push({
          component: componentName,
          link: link,
          type: 'internal',
        });
      }
    });

    console.log(
      `Analyzed ${componentName}: ${internalLinks.length} internal links`
    );
  }

  // Check if a page exists
  pageExists(route) {
    if (route === '/') return true;

    const pagePath = route.startsWith('/') ? route.slice(1) : route;
    const possiblePaths = [
      `src/pages/${pagePath}.tsx`,
      `src/pages/${pagePath}.jsx`,
      `src/pages/${pagePath}/index.tsx`,
      `src/pages/${pagePath}/index.jsx`,
    ];

    return possiblePaths.some(path => fs.existsSync(path));
  }

  // Analyze missing pages
  analyzeMissingPages() {
    console.log('📄 Analyzing missing pages...');

    const pagesDir = 'src/pages';
    if (!fs.existsSync(pagesDir)) {
      this.issues.push('Pages directory not found');
      return;
    }

    // Get all existing pages
    const existingPages = this.getAllPages(pagesDir);

    // Define required pages based on navigation
    const requiredPages = [
      'about',
      'services',
      'solutions',
      'contact',
      'blog',
      'careers',
      'partners',
      'team',
      'help',
      'support',
      'documentation',
      'api',
      'developer-portal',
      'pricing',
      'case-studies',
      'white-papers',
      'news',
      'press',
      'webinars',
      'training',
      'status',
      'cookies',
      'sitemap',
      'privacy',
      'terms',
    ];

    // Check for missing required pages
    requiredPages.forEach(page => {
      if (!this.pageExists(`/${page}`)) {
        this.missingPages.push(page);
      }
    });

    console.log(`Found ${existingPages.length} existing pages`);
    console.log(`Missing ${this.missingPages.length} required pages`);
  }

  // Get all pages recursively
  getAllPages(dir, basePath = '') {
    const pages = [];

    if (!fs.existsSync(dir)) return pages;

    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        pages.push(...this.getAllPages(fullPath, path.join(basePath, item)));
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        const pageName = path.join(basePath, item.replace(/\.(tsx|jsx)$/, ''));
        pages.push(pageName);
      }
    });

    return pages;
  }

  // Analyze content issues
  analyzeContentIssues() {
    console.log('📝 Analyzing content issues...');

    const pagesDir = 'src/pages';
    if (!fs.existsSync(pagesDir)) return;

    this.analyzePageContent(pagesDir);
  }

  // Analyze individual page content
  analyzePageContent(pagesDir) {
    const items = fs.readdirSync(pagesDir);

    items.forEach(item => {
      const fullPath = path.join(pagesDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        this.analyzePageContent(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        this.analyzeSinglePage(fullPath);
      }
    });
  }

  // Analyze a single page
  analyzeSinglePage(pagePath) {
    try {
      const content = fs.readFileSync(pagePath, 'utf8');

      // Check for empty or minimal content
      if (content.length < 100) {
        this.issues.push(
          `Page ${pagePath} has minimal content (${content.length} characters)`
        );
      }

      // Check for missing imports
      if (content.includes('import') && content.includes('export default')) {
        // Check for common import issues
        if (
          content.includes('import {') &&
          content.includes('} from') &&
          !content.includes('from')
        ) {
          this.issues.push(`Page ${pagePath} has malformed imports`);
        }
      }

      // Check for React component structure
      if (
        !content.includes('export default') &&
        !content.includes('export {') &&
        !content.includes('export default function')
      ) {
        this.issues.push(`Page ${pagePath} missing default export`);
      }
    } catch (error) {
      this.issues.push(`Error reading page ${pagePath}: ${error.message}`);
    }
  }

  // Generate comprehensive report
  generateReport() {
    console.log('\n📊 Generating comprehensive report...\n');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: this.issues.length,
        missingPages: this.missingPages.length,
        brokenLinks: this.brokenLinks.length,
        fixedIssues: this.fixedIssues.length,
      },
      issues: this.issues,
      missingPages: this.missingPages,
      brokenLinks: this.brokenLinks,
      recommendations: this.generateRecommendations(),
    };

    // Save report
    fs.writeFileSync(
      'comprehensive-website-analysis.json',
      JSON.stringify(report, null, 2)
    );

    // Display summary
    console.log('📋 COMPREHENSIVE WEBSITE ANALYSIS REPORT');
    console.log('==========================================');
    console.log(`Total Issues Found: ${report.summary.totalIssues}`);
    console.log(`Missing Pages: ${report.summary.missingPages}`);
    console.log(`Broken Links: ${report.summary.brokenLinks}`);
    console.log(`Fixed Issues: ${report.summary.fixedIssues}`);

    if (this.issues.length > 0) {
      console.log('\n🚨 ISSUES FOUND:');
      this.issues.forEach((issue, index) => {
        console.log(`${index + 1}. ${issue}`);
      });
    }

    if (this.missingPages.length > 0) {
      console.log('\n📄 MISSING PAGES:');
      this.missingPages.forEach((page, index) => {
        console.log(`${index + 1}. /${page}`);
      });
    }

    if (this.brokenLinks.length > 0) {
      console.log('\n🔗 BROKEN LINKS:');
      this.brokenLinks.forEach((link, index) => {
        console.log(`${index + 1}. ${link.component}: ${link.link}`);
      });
    }

    console.log('\n💡 RECOMMENDATIONS:');
    report.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });

    console.log('\n📁 Report saved to: comprehensive-website-analysis.json');
  }

  // Generate recommendations
  generateRecommendations() {
    const recommendations = [];

    if (this.missingPages.length > 0) {
      recommendations.push(
        `Create ${this.missingPages.length} missing pages to improve user experience`
      );
    }

    if (this.brokenLinks.length > 0) {
      recommendations.push(
        `Fix ${this.brokenLinks.length} broken navigation links`
      );
    }

    if (this.issues.length > 0) {
      recommendations.push(
        'Review and fix identified issues to improve site stability'
      );
    }

    recommendations.push('Implement proper error handling for missing routes');
    recommendations.push('Add 404 page for better user experience');
    recommendations.push('Optimize navigation structure for better usability');
    recommendations.push('Ensure all internal links are working correctly');

    return recommendations;
  }

  // Start the analysis
  start() {
    try {
      this.analyzeWebsite();
    } catch (error) {
      console.error('❌ Error during analysis:', error);
    }
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer();
analyzer.start();
