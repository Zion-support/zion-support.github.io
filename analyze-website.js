#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website analysis script
class WebsiteAnalyzer {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.localUrl = 'http://localhost:3001';
    this.brokenLinks = [];
    this.missingPages = [];
    this.existingPages = new Set();
    this.analysisResults = {
      timestamp: new Date().toISOString(),
      totalPages: 0,
      brokenLinks: [],
      missingPages: [],
      existingPages: [],
      recommendations: []
    };
  }

  // Get all route files from the app directory
  getRouteFiles() {
    const appDir = path.join(__dirname, 'app');
    const routes = [];
    
    const scanDirectory = (dir, basePath = '') => {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        const relativePath = path.join(basePath, item.name);
        
        if (item.isDirectory()) {
          scanDirectory(fullPath, relativePath);
        } else if (item.name === 'page.tsx') {
          const routePath = basePath.replace(/\\/g, '/');
          routes.push({
            path: routePath ? `/${routePath}` : '/',
            filePath: fullPath,
            exists: true
          });
        }
      }
    };
    
    scanDirectory(appDir);
    return routes;
  }

  // Get all links from navigation and footer components
  getNavigationLinks() {
    const navigationFile = path.join(__dirname, 'app/components/Navigation.tsx');
    const footerFile = path.join(__dirname, 'app/components/Footer.tsx');
    const links = new Set();
    
    try {
      // Read navigation file
      if (fs.existsSync(navigationFile)) {
        const navContent = fs.readFileSync(navigationFile, 'utf8');
        const navMatches = navContent.match(/to="([^"]+)"/g);
        if (navMatches) {
          navMatches.forEach(match => {
            const link = match.replace('to="', '').replace('"', '');
            links.add(link);
          });
        }
      }
      
      // Read footer file
      if (fs.existsSync(footerFile)) {
        const footerContent = fs.readFileSync(footerFile, 'utf8');
        const footerMatches = footerContent.match(/to="([^"]+)"/g);
        if (footerMatches) {
          footerMatches.forEach(match => {
            const link = match.replace('to="', '').replace('"', '');
            links.add(link);
          });
        }
      }
    } catch (error) {
      console.error('Error reading navigation files:', error.message);
    }
    
    return Array.from(links);
  }

  // Check if a page exists
  checkPageExists(routePath) {
    if (routePath === '/') {
      return fs.existsSync(path.join(__dirname, 'app/page.tsx'));
    }
    
    const pagePath = path.join(__dirname, 'app', routePath, 'page.tsx');
    return fs.existsSync(pagePath);
  }

  // Analyze the website structure
  async analyzeWebsite() {
    console.log('🔍 Starting website analysis...');
    
    // Get all routes
    const routes = this.getRouteFiles();
    console.log(`📁 Found ${routes.length} route files`);
    
    // Get navigation links
    const navLinks = this.getNavigationLinks();
    console.log(`🧭 Found ${navLinks.length} navigation links`);
    
    // Check existing pages
    routes.forEach(route => {
      this.existingPages.add(route.path);
    });
    
    // Check navigation links against existing pages
    navLinks.forEach(link => {
      if (!this.existingPages.has(link)) {
        this.missingPages.push(link);
      }
    });
    
    // Check for broken internal links
    const allLinks = [...navLinks, ...routes.map(r => r.path)];
    allLinks.forEach(link => {
      if (link.startsWith('/') && !this.existingPages.has(link)) {
        this.brokenLinks.push({
          url: link,
          type: 'missing_page',
          source: 'navigation'
        });
      }
    });
    
    // Update analysis results
    this.analysisResults.totalPages = routes.length;
    this.analysisResults.brokenLinks = this.brokenLinks;
    this.analysisResults.missingPages = this.missingPages;
    this.analysisResults.existingPages = Array.from(this.existingPages);
    
    // Generate recommendations
    this.generateRecommendations();
    
    console.log('✅ Analysis complete!');
    return this.analysisResults;
  }

  // Generate recommendations for improvements
  generateRecommendations() {
    const recommendations = [];
    
    if (this.missingPages.length > 0) {
      recommendations.push({
        type: 'missing_pages',
        priority: 'high',
        message: `Create ${this.missingPages.length} missing pages: ${this.missingPages.join(', ')}`,
        action: 'create_missing_pages'
      });
    }
    
    if (this.brokenLinks.length > 0) {
      recommendations.push({
        type: 'broken_links',
        priority: 'high',
        message: `Fix ${this.brokenLinks.length} broken links`,
        action: 'fix_broken_links'
      });
    }
    
    // Check for common missing pages
    const commonPages = ['/privacy', '/terms', '/cookies', '/sitemap', '/contact', '/about'];
    const missingCommonPages = commonPages.filter(page => !this.existingPages.has(page));
    
    if (missingCommonPages.length > 0) {
      recommendations.push({
        type: 'essential_pages',
        priority: 'medium',
        message: `Add essential pages: ${missingCommonPages.join(', ')}`,
        action: 'create_essential_pages'
      });
    }
    
    this.analysisResults.recommendations = recommendations;
  }

  // Save analysis results
  saveResults() {
    const outputFile = path.join(__dirname, 'website-analysis-results.json');
    fs.writeFileSync(outputFile, JSON.stringify(this.analysisResults, null, 2));
    console.log(`📊 Analysis results saved to ${outputFile}`);
  }

  // Print summary
  printSummary() {
    console.log('\n📋 WEBSITE ANALYSIS SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total Pages: ${this.analysisResults.totalPages}`);
    console.log(`Broken Links: ${this.brokenLinks.length}`);
    console.log(`Missing Pages: ${this.missingPages.length}`);
    console.log(`Recommendations: ${this.analysisResults.recommendations.length}`);
    
    if (this.missingPages.length > 0) {
      console.log('\n❌ Missing Pages:');
      this.missingPages.forEach(page => console.log(`  - ${page}`));
    }
    
    if (this.brokenLinks.length > 0) {
      console.log('\n🔗 Broken Links:');
      this.brokenLinks.forEach(link => console.log(`  - ${link.url} (${link.type})`));
    }
    
    if (this.analysisResults.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.analysisResults.recommendations.forEach((rec, index) => {
        console.log(`  ${index + 1}. [${rec.priority.toUpperCase()}] ${rec.message}`);
      });
    }
  }
}

// Run the analysis
async function main() {
  const analyzer = new WebsiteAnalyzer();
  
  try {
    await analyzer.analyzeWebsite();
    analyzer.saveResults();
    analyzer.printSummary();
  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
    process.exit(1);
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default WebsiteAnalyzer;