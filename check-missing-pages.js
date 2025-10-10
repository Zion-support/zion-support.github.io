import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


class PageChecker {
  constructor() {
    this.appDir = '/workspace/app';
    this.srcDir = '/workspace/src';
    this.missingPages = [];
    this.existingPages = [];
    this.brokenRoutes = [];
  }

  checkAllPages() {
    console.log('🔍 Checking all pages and routes...');
    
    // Get all routes from App.tsx
    const routes = this.extractRoutesFromApp();
    console.log(`📋 Found ${routes.length} routes in App.tsx`);
    
    // Check each route
    routes.forEach(route => {
      this.checkRoute(route);
    });
    
    // Check navigation links
    this.checkNavigationLinks();
    
    // Check footer links
    this.checkFooterLinks();
    
    // Generate report
    this.generateReport();
  }

  extractRoutesFromApp() {
    const appPath = '/workspace/App.tsx';
    const content = fs.readFileSync(appPath, 'utf8');
    
    const routes = [];
    const routeMatches = content.match(/<Route\s+path="([^"]+)"\s+element={<([^>]+)\s*\/>}/g);
    
    if (routeMatches) {
      routeMatches.forEach(match => {
        const pathMatch = match.match(/path="([^"]+)"/);
        const elementMatch = match.match(/element={<([^>]+)\s*\/>}/);
        
        if (pathMatch && elementMatch) {
          routes.push({
            path: pathMatch[1],
            component: elementMatch[1],
            filePath: this.getPageFilePath(pathMatch[1])
          });
        }
      });
    }
    
    return routes;
  }

  getPageFilePath(routePath) {
    if (routePath === '/') {
      return null; // Home page is handled by main App component
    }
    
    const cleanPath = routePath.replace(/^\//, '');
    return path.join(this.appDir, cleanPath, 'page.tsx');
  }

  checkRoute(route) {
    const { path: routePath, component, filePath } = route;
    
    if (routePath === '/') {
      this.existingPages.push({
        path: routePath,
        component,
        status: 'exists',
        type: 'home'
      });
      return;
    }
    
    if (filePath && fs.existsSync(filePath)) {
      this.existingPages.push({
        path: routePath,
        component,
        filePath,
        status: 'exists',
        type: 'page'
      });
    } else {
      this.missingPages.push({
        path: routePath,
        component,
        filePath,
        status: 'missing',
        type: 'page'
      });
    }
  }

  checkNavigationLinks() {
    const navPath = '/workspace/app/components/Navigation.tsx';
    const content = fs.readFileSync(navPath, 'utf8');
    
    // Extract all href attributes from navigation
    const hrefMatches = content.match(/href="([^"]+)"/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.match(/href="([^"]+)"/)[1];
        if (href && !href.startsWith('#') && !href.startsWith('http')) {
          this.checkNavigationLink(href);
        }
      });
    }
  }

  checkFooterLinks() {
    const footerPath = '/workspace/app/components/Footer.tsx';
    const content = fs.readFileSync(footerPath, 'utf8');
    
    // Extract all href attributes from footer
    const hrefMatches = content.match(/href="([^"]+)"/g);
    if (hrefMatches) {
      hrefMatches.forEach(match => {
        const href = match.match(/href="([^"]+)"/)[1];
        if (href && !href.startsWith('#') && !href.startsWith('http')) {
          this.checkFooterLink(href);
        }
      });
    }
  }

  checkNavigationLink(href) {
    const filePath = this.getPageFilePath(href);
    
    if (filePath && fs.existsSync(filePath)) {
      this.existingPages.push({
        path: href,
        status: 'exists',
        type: 'navigation',
        filePath
      });
    } else if (href !== '/') {
      this.missingPages.push({
        path: href,
        status: 'missing',
        type: 'navigation',
        filePath
      });
    }
  }

  checkFooterLink(href) {
    const filePath = this.getPageFilePath(href);
    
    if (filePath && fs.existsSync(filePath)) {
      this.existingPages.push({
        path: href,
        status: 'exists',
        type: 'footer',
        filePath
      });
    } else if (href !== '/') {
      this.missingPages.push({
        path: href,
        status: 'missing',
        type: 'footer',
        filePath
      });
    }
  }

  generateReport() {
    console.log('\n📊 PAGE CHECK RESULTS');
    console.log('='.repeat(50));
    
    console.log(`✅ Existing pages: ${this.existingPages.length}`);
    console.log(`❌ Missing pages: ${this.missingPages.length}`);
    
    if (this.missingPages.length > 0) {
      console.log('\n❌ MISSING PAGES:');
      this.missingPages.forEach(page => {
        console.log(`  - ${page.path} (${page.type})`);
        console.log(`    Expected file: ${page.filePath}`);
      });
    }
    
    // Group missing pages by type
    const missingByType = this.missingPages.reduce((acc, page) => {
      if (!acc[page.type]) acc[page.type] = [];
      acc[page.type].push(page);
      return acc;
    }, {});
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalExisting: this.existingPages.length,
        totalMissing: this.missingPages.length,
        missingByType
      },
      existingPages: this.existingPages,
      missingPages: this.missingPages,
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync('missing-pages-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to missing-pages-report.json');
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.missingPages.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Create missing pages identified in the audit',
        count: this.missingPages.length,
        pages: this.missingPages.map(p => p.path)
      });
    }
    
    return recommendations;

  }
  
  const pageDir = path.join(__dirname, 'app', pagePath);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  return fs.existsSync(pageFile);
}


