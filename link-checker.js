import fs from 'fs';
import path from 'path';

class LinkChecker {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.workingLinks = [];
    this.brokenLinks = [];
    this.missingPages = [];
    this.allRoutes = new Set();
  }

  // Extract all routes from App.tsx
  extractRoutesFromApp() {
    const appPath = '/workspace/App.tsx';
    const content = fs.readFileSync(appPath, 'utf8');
    
    // Extract route paths
    const routeMatches = content.match(/path="([^"]+)"/g);
    if (routeMatches) {
      routeMatches.forEach(match => {
        const route = match.replace('path="', '').replace('"', '');
        this.allRoutes.add(route);
      });
    }
    
    console.log('Routes found in App.tsx:', Array.from(this.allRoutes));
  }

  // Extract links from Navigation component
  extractLinksFromNavigation() {
    const navPath = '/workspace/app/components/Navigation.tsx';
    const content = fs.readFileSync(navPath, 'utf8');
    
    // Extract href attributes
    const hrefMatches = content.match(/href="([^"]+)"/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.replace('href="', '').replace('"', '');
        if (href.startsWith('/') && !href.startsWith('#')) {
          this.allRoutes.add(href);
        }
      });
    }
    
    console.log('Links found in Navigation:', Array.from(this.allRoutes));
  }

  // Extract links from Footer component
  extractLinksFromFooter() {
    const footerPath = '/workspace/app/components/Footer.tsx';
    const content = fs.readFileSync(footerPath, 'utf8');
    
    // Extract href attributes
    const hrefMatches = content.match(/href="([^"]+)"/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.replace('href="', '').replace('"', '');
        if (href.startsWith('/') && !href.startsWith('#')) {
          this.allRoutes.add(href);
        }
      });
    }
    
    console.log('Links found in Footer:', Array.from(this.allRoutes));
  }

  // Check if page file exists
  checkPageExists(route) {
    if (route === '/') {
      return fs.existsSync('/workspace/app/page.tsx');
    }
    
    const pagePath = `/workspace/app${route}/page.tsx`;
    return fs.existsSync(pagePath);
  }

  // Check all routes
  checkAllRoutes() {
    console.log('🔍 Checking all routes...');
    
    this.extractRoutesFromApp();
    this.extractLinksFromNavigation();
    this.extractLinksFromFooter();
    
    const allRoutesArray = Array.from(this.allRoutes);
    console.log(`\n📊 Total routes to check: ${allRoutesArray.length}`);
    
    allRoutesArray.forEach(route => {
      const exists = this.checkPageExists(route);
      if (exists) {
        this.workingLinks.push(route);
        console.log(`✅ ${route} - Page exists`);
      } else {
        this.missingPages.push(route);
        console.log(`❌ ${route} - Page missing`);
      }
    });
    
    this.generateReport();
  }

  // Generate report
  generateReport() {
    console.log('\n📊 LINK CHECKER REPORT');
    console.log('======================');
    
    console.log(`\n✅ Working Links: ${this.workingLinks.length}`);
    this.workingLinks.forEach(link => {
      console.log(`   ${link}`);
    });
    
    console.log(`\n❌ Missing Pages: ${this.missingPages.length}`);
    this.missingPages.forEach(link => {
      console.log(`   ${link}`);
    });
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      totalRoutes: this.allRoutes.size,
      workingLinks: this.workingLinks.length,
      missingPages: this.missingPages.length,
      workingLinksList: this.workingLinks,
      missingPagesList: this.missingPages
    };
    
    fs.writeFileSync('link-checker-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to link-checker-report.json');
  }
}

// Run the link checker
const checker = new LinkChecker();
checker.checkAllRoutes();