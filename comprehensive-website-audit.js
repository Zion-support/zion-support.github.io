#!/usr/bin/env node
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

class ComprehensiveWebsiteAudit {
  constructor(baseUrl = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
    this.results = [];
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.validLinks = [];
    this.externalLinks = [];
  }

  async checkUrl(url, retries = 3) {
    return new Promise((resolve) => {
      const parsedUrl = new URL(url);
      const client = parsedUrl.protocol === 'https:' ? https : http;
      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
        path: parsedUrl.pathname + parsedUrl.search,
        method: 'GET',
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAudit/1.0)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive'
        }
      };

      const makeRequest = (attempt = 1) => {
        const req = client.request(options, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            resolve({
              url: url,
              status: res.statusCode,
              success: res.statusCode >= 200 && res.statusCode < 400,
              redirect: res.statusCode >= 300 && res.statusCode < 400,
              finalUrl: res.headers.location || url,
              contentLength: data.length,
              contentType: res.headers['content-type'] || 'unknown',
              headers: res.headers
            });
          });
        });

        req.on('error', (err) => {
          if (attempt < retries) {
            console.log(`Retrying ${url} (attempt ${attempt + 1})`);
            setTimeout(() => makeRequest(attempt + 1), 1000 * attempt);
          } else {
            resolve({
              url: url,
              status: 'ERROR',
              success: false,
              error: err.message,
              attempt: attempt
            });
          }
        });

        req.on('timeout', () => {
          req.destroy();
          if (attempt < retries) {
            console.log(`Timeout retrying ${url} (attempt ${attempt + 1})`);
            setTimeout(() => makeRequest(attempt + 1), 1000 * attempt);
          } else {
            resolve({
              url: url,
              status: 'TIMEOUT',
              success: false,
              error: 'Request timeout',
              attempt: attempt
            });
          }
        });

        req.setTimeout(10000);
        req.end();
      };

      makeRequest();
    });
  }

  async checkAllLinks() {
    console.log('🔍 Starting comprehensive website audit...\n');
    
    // Define all the links that should exist based on the codebase
    const links = [
      // Main pages
      '/',
      '/about',
      '/contact',
      '/services',
      '/enterprise',
      '/blog',
      '/case-studies',
      '/team',
      '/careers',
      '/news',
      '/privacy',
      '/terms',
      '/cookies',
      '/gdpr',
      '/security',
      '/sitemap',
      '/status',
      '/system-status',
      '/support',
      '/docs',
      '/api-docs',
      '/offline',
      '/sitemap-page',
      
      // AI Services
      '/ai-services',
      '/ai-marketing',
      '/ai-automation',
      '/ai-healthcare',
      '/ai-fintech',
      '/ai-content-generation',
      '/ai-data-analytics',
      '/ai-data-visualization',
      '/ai-ecommerce-solutions',
      '/ai-mobile-app-development',
      '/ai-sales-automation',
      '/ai-workflow-automation',
      '/ai-customer-support',
      
      // IT Services
      '/it-services',
      '/it-infrastructure',
      '/cybersecurity',
      '/cloud-services',
      '/devops',
      '/database',
      '/networking',
      '/compliance',
      
      // Micro SAAS
      '/micro-saas',
      '/business-apps',
      '/developer-tools',
      '/marketing-tools',
      '/productivity',
      
      // Specialized Services
      '/quantum-computing',
      '/autonomous-systems',
      '/blockchain',
      '/blockchain-web3',
      '/iot-edge',
      '/iot-edge-computing',
      '/business-intelligence',
      '/robotics',
      
      // API and Technical
      '/api',
      '/api-docs',
      '/sitemap',
      
      // Blog posts (checking some key ones)
      '/blog/ai-2026-november-quantum-superintelligence-breakthrough',
      '/blog/ai-2026-august-quantum-consciousness-revolution',
      '/blog/ai-2026-july-mega-breakthrough-revolution',
      '/blog/ai-customer-data-platforms-2026',
      '/blog/ai-customer-journey-ai-2026',
      '/blog/ai-agent-observability-2026',
      '/blog/agentic-workflow-orchestration-2026',
      '/blog/ai-autonomous-cloud-ops-2026'
    ];

    console.log(`📋 Checking ${links.length} links...\n`);

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const fullUrl = this.baseUrl + link;
      
      if (this.visitedUrls.has(fullUrl)) {
        continue;
      }
      
      this.visitedUrls.add(fullUrl);
      
      process.stdout.write(`\r🔍 Checking ${i + 1}/${links.length}: ${link}`);
      
      const result = await this.checkUrl(fullUrl);
      this.results.push(result);
      
      if (result.success) {
        this.validLinks.push(result);
      } else {
        this.brokenLinks.push(result);
        if (result.status === 404) {
          this.missingPages.push(result);
        }
      }
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log('\n\n📊 Analysis complete!\n');
    this.generateReport();
  }

  generateReport() {
    const valid = this.validLinks;
    const broken = this.brokenLinks;
    const missing = this.missingPages;
    const redirects = this.results.filter(r => r.redirect);

    console.log('='.repeat(80));
    console.log('📊 COMPREHENSIVE WEBSITE AUDIT REPORT');
    console.log('='.repeat(80));
    
    console.log(`\n📈 SUMMARY:`);
    console.log(`   Total links checked: ${this.results.length}`);
    console.log(`   ✅ Working links: ${valid.length}`);
    console.log(`   ❌ Broken links: ${broken.length}`);
    console.log(`   🔄 Redirects: ${redirects.length}`);
    console.log(`   📄 Missing pages (404): ${missing.length}`);

    if (broken.length > 0) {
      console.log('\n❌ BROKEN LINKS:');
      console.log('-'.repeat(50));
      broken.forEach(link => {
        console.log(`   ${link.url}`);
        console.log(`   Status: ${link.status} | Error: ${link.error || 'N/A'}`);
        console.log('');
      });
    }

    if (missing.length > 0) {
      console.log('\n📄 MISSING PAGES (404):');
      console.log('-'.repeat(50));
      missing.forEach(link => {
        console.log(`   ${link.url}`);
      });
    }

    if (redirects.length > 0) {
      console.log('\n🔄 REDIRECTS:');
      console.log('-'.repeat(50));
      redirects.forEach(link => {
        console.log(`   ${link.url} → ${link.finalUrl} (${link.status})`);
      });
    }

    if (valid.length > 0) {
      console.log('\n✅ WORKING LINKS:');
      console.log('-'.repeat(50));
      valid.forEach(link => {
        console.log(`   ${link.url} (${link.status})`);
      });
    }

    // Generate detailed JSON report
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        total: this.results.length,
        working: valid.length,
        broken: broken.length,
        missing: missing.length,
        redirects: redirects.length
      },
      brokenLinks: broken,
      missingPages: missing,
      workingLinks: valid,
      redirects: redirects
    };

    fs.writeFileSync('website-audit-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: website-audit-report.json');
    
    // Generate action items
    this.generateActionItems(missing);
  }

  generateActionItems(missingPages) {
    console.log('\n🎯 ACTION ITEMS:');
    console.log('='.repeat(50));
    
    if (missingPages.length === 0) {
      console.log('✅ No missing pages found! All links are working.');
      return;
    }

    console.log('📝 Pages that need to be created:');
    missingPages.forEach(page => {
      const path = page.url.replace(this.baseUrl, '');
      console.log(`   - ${path}`);
    });

    console.log('\n🔧 Recommended fixes:');
    console.log('   1. Create missing page components in /app directory');
    console.log('   2. Update navigation links to point to existing pages');
    console.log('   3. Add proper 404 handling for non-existent routes');
    console.log('   4. Implement redirects for moved content');
  }
}

// Run the audit
const auditor = new ComprehensiveWebsiteAudit();
auditor.checkAllLinks().catch(console.error);