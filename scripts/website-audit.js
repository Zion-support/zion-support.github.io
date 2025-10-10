#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website audit script to check all links and identify missing content
class WebsiteAuditor {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.localUrl = 'http://localhost:4173';
    this.brokenLinks = [];
    this.missingPages = [];
    this.validPages = [];
    this.allRoutes = new Set();
  }

  // Get all routes from the App.tsx file
  extractRoutesFromApp() {
    const appPath = path.join(__dirname, '../App.tsx');
    const appContent = fs.readFileSync(appPath, 'utf8');
    
    // Extract route paths from App.tsx
    const routeMatches = appContent.match(/path="([^"]+)"/g);
    if (routeMatches) {
      routeMatches.forEach(match => {
        const path = match.replace('path="', '').replace('"', '');
        this.allRoutes.add(path);
      });
    }

    // Extract service paths from Navigation.tsx
    const navPath = path.join(__dirname, '../app/components/Navigation.tsx');
    const navContent = fs.readFileSync(navPath, 'utf8');
    
    const serviceMatches = navContent.match(/path: '([^']+)'/g);
    if (serviceMatches) {
      serviceMatches.forEach(match => {
        const path = match.replace("path: '", '').replace("'", '');
        this.allRoutes.add(path);
      });
    }

    // Extract footer links
    const footerPath = path.join(__dirname, '../app/components/Footer.tsx');
    const footerContent = fs.readFileSync(footerPath, 'utf8');
    
    const footerMatches = footerContent.match(/href: '([^']+)'/g);
    if (footerMatches) {
      footerMatches.forEach(match => {
        const path = match.replace("href: '", '').replace("'", '');
        this.allRoutes.add(path);
      });
    }

    console.log(`Found ${this.allRoutes.size} routes to check:`);
    Array.from(this.allRoutes).forEach(route => console.log(`  - ${route}`));
  }

  // Check if a page file exists
  checkPageExists(route) {
    if (route === '/') {
      return true; // Home page is handled by App.tsx
    }

    const routePath = route.startsWith('/') ? route.slice(1) : route;
    const possiblePaths = [
      path.join(__dirname, '../app', routePath, 'page.tsx'),
      path.join(__dirname, '../app', routePath, 'page.js'),
      path.join(__dirname, '../app', routePath, 'index.tsx'),
      path.join(__dirname, '../app', routePath, 'index.js'),
    ];

    return possiblePaths.some(filePath => fs.existsSync(filePath));
  }

  // Check all routes
  async checkAllRoutes() {
    console.log('\n🔍 Checking all routes...\n');
    
    for (const route of this.allRoutes) {
      const exists = this.checkPageExists(route);
      if (exists) {
        this.validPages.push(route);
        console.log(`✅ ${route} - Page exists`);
      } else {
        this.missingPages.push(route);
        console.log(`❌ ${route} - Page missing`);
      }
    }
  }

  // Check for broken internal links
  async checkInternalLinks() {
    console.log('\n🔗 Checking internal links...\n');
    
    const filesToCheck = [
      '../App.tsx',
      '../app/components/Navigation.tsx',
      '../app/components/Footer.tsx'
    ];

    for (const file of filesToCheck) {
      const filePath = path.join(__dirname, file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const linkMatches = content.match(/to="([^"]+)"/g) || [];
        
        linkMatches.forEach(match => {
          const linkPath = match.replace('to="', '').replace('"', '');
          if (linkPath.startsWith('/') && !this.allRoutes.has(linkPath)) {
            this.brokenLinks.push({
              file: file,
              link: linkPath,
              type: 'missing_route'
            });
            console.log(`❌ Broken link in ${file}: ${linkPath}`);
          }
        });
      }
    }
  }

  // Generate missing pages
  generateMissingPages() {
    console.log('\n📝 Generating missing pages...\n');
    
    for (const route of this.missingPages) {
      if (route === '/') continue; // Skip home page
      
      const routePath = route.startsWith('/') ? route.slice(1) : route;
      const pageDir = path.join(__dirname, '../app', routePath);
      const pageFile = path.join(pageDir, 'page.tsx');
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      
      // Generate page content
      const pageContent = this.generatePageContent(route);
      fs.writeFileSync(pageFile, pageContent);
      
      console.log(`✅ Created page: ${route}`);
    }
  }

  // Generate page content based on route
  generatePageContent(route) {
    const routeName = route.startsWith('/') ? route.slice(1) : route;
    const title = routeName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${routeName.replace(/[-/]/g, '')}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="${title.toLowerCase()}, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ${title.toLowerCase()} services powered by advanced AI and cutting-edge technology.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team</h3>
                  <p className="text-gray-300">Experienced professionals with proven track record</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <div>
                <a 
                  href="/" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  ← Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${routeName.replace(/[-/]/g, '')}Page;
`;
  }

  // Generate audit report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalRoutes: this.allRoutes.size,
      validPages: this.validPages.length,
      missingPages: this.missingPages.length,
      brokenLinks: this.brokenLinks.length,
      validPagesList: this.validPages,
      missingPagesList: this.missingPages,
      brokenLinksList: this.brokenLinks
    };

    const reportPath = path.join(__dirname, '../website-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n📊 Audit Report Generated:');
    console.log(`Total Routes: ${report.totalRoutes}`);
    console.log(`Valid Pages: ${report.validPages}`);
    console.log(`Missing Pages: ${report.missingPages}`);
    console.log(`Broken Links: ${report.brokenLinks}`);
    console.log(`\nReport saved to: ${reportPath}`);
  }

  // Run complete audit
  async runAudit() {
    console.log('🚀 Starting Zion Tech Group Website Audit...\n');
    
    this.extractRoutesFromApp();
    await this.checkAllRoutes();
    await this.checkInternalLinks();
    this.generateMissingPages();
    this.generateReport();
    
    console.log('\n✅ Website audit completed!');
  }
}

// Run the audit
const auditor = new WebsiteAuditor();
auditor.runAudit().catch(console.error);