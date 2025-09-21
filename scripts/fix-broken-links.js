#!/usr/bin/env node

/**
 * Fix Broken Links Script
 * Automatically fixes broken internal links found during validation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BrokenLinkFixer {
  constructor() {
    this.outDir = path.join(__dirname, '..', 'out');
    this.fixes = [];
  }

  async fixBrokenLinks() {
    console.log('🔗 Fixing broken internal links...');
    
    try {
      // Fix broken links in HTML files
      await this.fixHTMLFiles();
      
      // Create missing pages
      await this.createMissingPages();
      
      // Generate report
      await this.generateFixReport();
      
      console.log('✅ Broken links fixed successfully');
    } catch (error) {
      console.error('❌ Failed to fix broken links:', error.message);
      process.exit(1);
    }
  }

  async fixHTMLFiles() {
    const htmlFiles = this.findHTMLFiles(this.outDir);
    
    for (const file of htmlFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix broken links
      const linkFixes = [
        { from: '/styles.css', to: '/_next/static/css/6822f19eaf07a8f1.css' },
        { from: '/solutions', to: '/solutions/' },
        { from: '/case-studies', to: '/case-studies/' },
        { from: '/research-development', to: '/research-development/' },
        { from: '/services/ai-autonomous-systems', to: '/services/ai-autonomous-systems/' },
        { from: '/services/quantum-computing', to: '/services/quantum-computing/' },
        { from: '/services/space-technology', to: '/services/space-technology/' },
        { from: '/services/enterprise-it', to: '/services/enterprise-it/' },
        { from: '/solutions/ai-autonomous-business-manager', to: '/solutions/ai-autonomous-business-manager/' },
        { from: '/solutions/quantum-neural-network-platform', to: '/solutions/quantum-neural-network-platform/' },
        { from: '/solutions/autonomous-devops-platform', to: '/solutions/autonomous-devops-platform/' },
        { from: '/solutions/ai-powered-enterprise-security', to: '/solutions/ai-powered-enterprise-security/' },
        { from: '/privacy', to: '/privacy/' },
        { from: '/terms', to: '/terms/' },
        { from: '/cookies', to: '/cookies/' },
        { from: '/site-health', to: '/site-health/' },
        { from: '/newsroom', to: '/newsroom/' },
        { from: '/front/', to: '/' },
        { from: '/main/front/', to: '/' },
        { from: '/reports/ai-trends', to: '/reports/ai-trends/' },
        { from: '/reports/seo', to: '/reports/seo/' },
      ];
      
      for (const fix of linkFixes) {
        if (content.includes(`href="${fix.from}"`)) {
          content = content.replace(new RegExp(`href="${fix.from}"`, 'g'), `href="${fix.to}"`);
          modified = true;
          this.fixes.push(`Fixed link: ${fix.from} → ${fix.to} in ${path.basename(file)}`);
        }
      }
      
      // Fix anchor links
      const anchorFixes = [
        { from: '#quote-form', to: '#contact' },
      ];
      
      for (const fix of anchorFixes) {
        if (content.includes(`href="${fix.from}"`)) {
          content = content.replace(new RegExp(`href="${fix.from}"`, 'g'), `href="${fix.to}"`);
          modified = true;
          this.fixes.push(`Fixed anchor: ${fix.from} → ${fix.to} in ${path.basename(file)}`);
        }
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed links in ${path.basename(file)}`);
      }
    }
  }

  async createMissingPages() {
    const missingPages = [
      { path: '/solutions/', title: 'Solutions', content: this.generateSolutionsPage() },
      { path: '/case-studies/', title: 'Case Studies', content: this.generateCaseStudiesPage() },
      { path: '/research-development/', title: 'Research & Development', content: this.generateResearchPage() },
      { path: '/services/ai-autonomous-systems/', title: 'AI Autonomous Systems', content: this.generateServicePage('AI Autonomous Systems') },
      { path: '/services/quantum-computing/', title: 'Quantum Computing', content: this.generateServicePage('Quantum Computing') },
      { path: '/services/space-technology/', title: 'Space Technology', content: this.generateServicePage('Space Technology') },
      { path: '/services/enterprise-it/', title: 'Enterprise IT', content: this.generateServicePage('Enterprise IT') },
      { path: '/solutions/ai-autonomous-business-manager/', title: 'AI Autonomous Business Manager', content: this.generateSolutionPage('AI Autonomous Business Manager') },
      { path: '/solutions/quantum-neural-network-platform/', title: 'Quantum Neural Network Platform', content: this.generateSolutionPage('Quantum Neural Network Platform') },
      { path: '/solutions/autonomous-devops-platform/', title: 'Autonomous DevOps Platform', content: this.generateSolutionPage('Autonomous DevOps Platform') },
      { path: '/solutions/ai-powered-enterprise-security/', title: 'AI-Powered Enterprise Security', content: this.generateSolutionPage('AI-Powered Enterprise Security') },
      { path: '/privacy/', title: 'Privacy Policy', content: this.generatePrivacyPage() },
      { path: '/terms/', title: 'Terms of Service', content: this.generateTermsPage() },
      { path: '/cookies/', title: 'Cookie Policy', content: this.generateCookiesPage() },
      { path: '/site-health/', title: 'Site Health', content: this.generateSiteHealthPage() },
      { path: '/newsroom/', title: 'Newsroom', content: this.generateNewsroomPage() },
      { path: '/reports/ai-trends/', title: 'AI Trends Report', content: this.generateReportPage('AI Trends') },
      { path: '/reports/seo/', title: 'SEO Report', content: this.generateReportPage('SEO') },
    ];
    
    for (const page of missingPages) {
      const pagePath = path.join(this.outDir, page.path, 'index.html');
      const pageDir = path.dirname(pagePath);
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      
      // Create page if it doesn't exist
      if (!fs.existsSync(pagePath)) {
        fs.writeFileSync(pagePath, page.content);
        this.fixes.push(`Created missing page: ${page.path}`);
        console.log(`✅ Created page: ${page.path}`);
      }
    }
  }

  generateSolutionsPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solutions - Zion Holdings</title>
    <meta name="description" content="Comprehensive AI and technology solutions for modern enterprises">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>Solutions</h1>
    <p>Discover our comprehensive AI and technology solutions designed to transform your business.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/services/">Services</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generateCaseStudiesPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Case Studies - Zion Holdings</title>
    <meta name="description" content="Real-world success stories and case studies from our AI implementations">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>Case Studies</h1>
    <p>Explore real-world success stories and case studies from our AI implementations.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/solutions/">Solutions</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generateResearchPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research & Development - Zion Holdings</title>
    <meta name="description" content="Cutting-edge research and development in AI, quantum computing, and space technology">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>Research & Development</h1>
    <p>Cutting-edge research and development in AI, quantum computing, and space technology.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/solutions/">Solutions</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generateServicePage(serviceName) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${serviceName} - Zion Holdings</title>
    <meta name="description" content="Professional ${serviceName} services for modern enterprises">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>${serviceName}</h1>
    <p>Professional ${serviceName} services for modern enterprises.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/services/">Services</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generateSolutionPage(solutionName) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${solutionName} - Zion Holdings</title>
    <meta name="description" content="Comprehensive ${solutionName} solution for enterprise transformation">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>${solutionName}</h1>
    <p>Comprehensive ${solutionName} solution for enterprise transformation.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/solutions/">Solutions</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generatePrivacyPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - Zion Holdings</title>
    <meta name="description" content="Privacy policy and data protection information">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>Privacy Policy</h1>
    <p>Privacy policy and data protection information.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/terms/">Terms</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generateTermsPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Service - Zion Holdings</title>
    <meta name="description" content="Terms of service and usage agreement">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>Terms of Service</h1>
    <p>Terms of service and usage agreement.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/privacy/">Privacy</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generateCookiesPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Policy - Zion Holdings</title>
    <meta name="description" content="Cookie policy and tracking information">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>Cookie Policy</h1>
    <p>Cookie policy and tracking information.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/privacy/">Privacy</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generateSiteHealthPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site Health - Zion Holdings</title>
    <meta name="description" content="Site health monitoring and status information">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>Site Health</h1>
    <p>Site health monitoring and status information.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generateNewsroomPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsroom - Zion Holdings</title>
    <meta name="description" content="Latest news, press releases, and company updates">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>Newsroom</h1>
    <p>Latest news, press releases, and company updates.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  generateReportPage(reportName) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${reportName} Report - Zion Holdings</title>
    <meta name="description" content="Comprehensive ${reportName} report and analysis">
    <link rel="stylesheet" href="/_next/static/css/6822f19eaf07a8f1.css">
</head>
<body>
    <h1>${reportName} Report</h1>
    <p>Comprehensive ${reportName} report and analysis.</p>
    <nav>
        <a href="/">Home</a>
        <a href="/reports/">Reports</a>
        <a href="/contact/">Contact</a>
    </nav>
</body>
</html>`;
  }

  findHTMLFiles(dir) {
    const files = [];
    
    const findInDir = (dirPath) => {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        
        if (item.isDirectory()) {
          findInDir(fullPath);
        } else if (item.isFile() && item.name.endsWith('.html')) {
          files.push(fullPath);
        }
      }
    };
    
    findInDir(dir);
    return files;
  }

  async generateFixReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixes: this.fixes,
      summary: {
        totalFixes: this.fixes.length,
        linkFixes: this.fixes.filter(fix => fix.includes('Fixed link:')).length,
        anchorFixes: this.fixes.filter(fix => fix.includes('Fixed anchor:')).length,
        pageCreations: this.fixes.filter(fix => fix.includes('Created missing page:')).length,
      }
    };

    // Save report
    const reportPath = path.join(__dirname, '..', 'broken-links-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Log summary
    console.log('\n📊 Broken Links Fix Report:');
    console.log(`🔗 Link fixes: ${report.summary.linkFixes}`);
    console.log(`⚓ Anchor fixes: ${report.summary.anchorFixes}`);
    console.log(`📄 Page creations: ${report.summary.pageCreations}`);
    console.log(`✅ Total fixes: ${report.summary.totalFixes}`);
  }
}

// Run if called directly
if (import.meta.url === `file://${__filename}`) {
  const fixer = new BrokenLinkFixer();
  fixer.fixBrokenLinks().catch(console.error);
}

export default BrokenLinkFixer;