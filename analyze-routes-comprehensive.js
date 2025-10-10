#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class RouteAnalyzer {
  constructor() {
    this.appDir = path.join(__dirname, 'app');
    this.routes = new Map();
    this.missingRoutes = [];
    this.existingRoutes = [];
    this.navigationLinks = [];
  }

  analyze() {
    console.log('🔍 Starting comprehensive route analysis...');
    
    // Find all page.tsx files
    this.findPageFiles();
    
    // Extract navigation links from components
    this.extractNavigationLinks();
    
    // Check for missing routes
    this.checkMissingRoutes();
    
    // Generate report
    this.generateReport();
  }

  findPageFiles() {
    const findPages = (dir, basePath = '') => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          const newBasePath = basePath ? `${basePath}/${item}` : item;
          findPages(fullPath, newBasePath);
        } else if (item === 'page.tsx') {
          const route = basePath || '/';
          this.existingRoutes.push(route);
          this.routes.set(route, fullPath);
        }
      }
    };
    
    findPages(this.appDir);
    console.log(`📄 Found ${this.existingRoutes.length} existing routes`);
  }

  extractNavigationLinks() {
    const navigationFile = path.join(this.appDir, 'components', 'Navigation.tsx');
    const footerFile = path.join(this.appDir, 'components', 'Footer.tsx');
    
    if (fs.existsSync(navigationFile)) {
      const content = fs.readFileSync(navigationFile, 'utf8');
      const links = this.extractLinksFromContent(content);
      this.navigationLinks.push(...links);
    }
    
    if (fs.existsSync(footerFile)) {
      const content = fs.readFileSync(footerFile, 'utf8');
      const links = this.extractLinksFromContent(content);
      this.navigationLinks.push(...links);
    }
    
    // Remove duplicates
    this.navigationLinks = [...new Set(this.navigationLinks)];
    console.log(`🔗 Found ${this.navigationLinks.length} navigation links`);
  }

  extractLinksFromContent(content) {
    const links = [];
    
    // Extract href attributes
    const hrefRegex = /href=["']([^"']+)["']/g;
    let match;
    while ((match = hrefRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    // Extract to attributes (React Router)
    const toRegex = /to=["']([^"']+)["']/g;
    while ((match = toRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    // Extract from navigationItems array
    const navItemsRegex = /href:\s*['"]([^'"]+)['"]/g;
    while ((match = navItemsRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    // Extract from service categories
    const serviceRegex = /href:\s*['"]([^'"]+)['"]/g;
    while ((match = serviceRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    return links;
  }

  checkMissingRoutes() {
    for (const link of this.navigationLinks) {
      if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:')) {
        continue; // Skip external links
      }
      
      const route = link === '/' ? '/' : link;
      // Check if route exists (with or without leading slash)
      const routeExists = this.routes.has(route) || this.routes.has(route.replace(/^\//, ''));
      if (!routeExists) {
        this.missingRoutes.push(route);
      }
    }
    
    console.log(`❌ Found ${this.missingRoutes.length} missing routes`);
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalExistingRoutes: this.existingRoutes.length,
        totalNavigationLinks: this.navigationLinks.length,
        missingRoutes: this.missingRoutes.length,
        coverage: ((this.navigationLinks.length - this.missingRoutes.length) / this.navigationLinks.length * 100).toFixed(2) + '%'
      },
      existingRoutes: this.existingRoutes.sort(),
      navigationLinks: this.navigationLinks.sort(),
      missingRoutes: this.missingRoutes.sort(),
      recommendations: this.generateRecommendations()
    };

    // Save report
    fs.writeFileSync('route-analysis-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n📊 ROUTE ANALYSIS COMPLETE');
    console.log('==========================');
    console.log(`✅ Existing routes: ${this.existingRoutes.length}`);
    console.log(`🔗 Navigation links: ${this.navigationLinks.length}`);
    console.log(`❌ Missing routes: ${this.missingRoutes.length}`);
    console.log(`📈 Coverage: ${report.summary.coverage}`);
    console.log(`📁 Report saved to: route-analysis-report.json`);

    if (this.missingRoutes.length > 0) {
      console.log('\n❌ MISSING ROUTES:');
      this.missingRoutes.forEach(route => {
        console.log(`  - ${route}`);
      });
    }

    console.log('\n💡 RECOMMENDATIONS:');
    report.recommendations.forEach(rec => {
      console.log(`  - ${rec}`);
    });
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.missingRoutes.length > 0) {
      recommendations.push(`Create ${this.missingRoutes.length} missing page components`);
      recommendations.push('Ensure all navigation links have corresponding routes');
    }
    
    if (this.navigationLinks.length < 10) {
      recommendations.push('Consider adding more navigation links for better site structure');
    }
    
    recommendations.push('Add error handling for 404 pages');
    recommendations.push('Implement proper SEO meta tags for all pages');
    recommendations.push('Add breadcrumb navigation for better UX');
    
    return recommendations;
  }
}

// Run analysis
const analyzer = new RouteAnalyzer();
analyzer.analyze();