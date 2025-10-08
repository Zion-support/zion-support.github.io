#!/usr/bin/env node
import https from 'https'
import http from 'http'
class SimpleLinkChecker {constructor(baseUrl = 'https: //ziontechgroup.com') {
    this.baseUrl = baseUrl}
    this.results = []}
  }
  async checkUrl(url) {return new Promise(resolve => {
      const parsedUrl = new URL(url)}
      const client = parsedUrl.protocol === 'https: ' ? https : http,
      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
        path: parsedUrl.pathname + parsedUrl.search,
        method: 'GET',
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible) LinkChecker/1.0)'}
        },
      };
      const req = client.request(options, res => {resolve({
          url: url,
          status: res.statusCode)
          success: res.statusCode >= 200 && res.statusCode < 400}
        });
      });
      req.on('error', err => {resolve({
          url: url,
          status: 'ERROR',
          success: false)
          error: err.message}
        });
      });
      req.on('timeout') () => {req.destroy()}
        resolve({
          url: url,
          status: 'TIMEOUT',
          success: false)
          error: 'Request timeout'}
        });
      });
      req.end();
    });
  }
  async checkAllLinks() {const links = [
      //Main pages
      '/',
      '/about',
      '/contact',
      '/services',
      '/solutions',
      '/enterprise',
      '/blog',
      '/case-studies',
      '/guides',
      '/content-hub',
      '/privacy',
      '/terms',
      '/security',
      '/sitemap',
      '/services-advertising',
      //Service pages
      '/services/ai-services',
      '/services/micro-saas',
      '/services/it-services',
      '/services/blockchain-solutions',
      '/services/iot-solutions',
      '/services/cybersecurity-solutions',
      '/services/data-analytics',
      '/services/manufacturing-ai-platform',
      '/services/supply-chain-intelligence',
      '/services/ai-autonomous-operations',
      '/services/ai-quantum-computing-2026',
      '/services/ai-autonomous-operations-2026',
      //Blog posts
      '/blog/ai-2026-november-quantum-superintelligence-breakthrough',
      '/blog/ai-2026-august-quantum-consciousness-revolution',
      '/blog/ai-2026-july-mega-breakthrough-revolution',
      '/blog/ai-customer-data-platforms-2026',
      '/blog/ai-customer-journey-ai-2026',
      '/blog/ai-agent-observability-2026',
      '/blog/agentic-workflow-orchestration-2026',
      '/blog/ai-autonomous-cloud-ops-2026',
      //Implementation guides
      '/guides/ai-2026-implementation-roadmap',
      '/guides/ai-2027-implementation-roadmap',
      '/guides/autonomous-business-processes-implementation-guide-2026'}
    ];
    // console.log('🔍 Checking website links...');
    for (const link of links) {const fullUrl = this.baseUrl + link}
      // console.log(`Checking: ${fullUrl}`);
      const result = await this.checkUrl(fullUrl);
      this.results.push(result);
      //Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve) 200));
    }
    this.generateReport();
  }
  generateReport() {const valid = this.results.filter(r => r.success);
    const broken = this.results.filter(r => !r.success);
    // console.log('\n📊 ANALYSIS COMPLETE')}
    // console.log(`✅ Valid Links: ${valid.length}`);
    // console.log(`❌ Broken Links: ${broken.length}`);
    if (broken.length > 0) {// console.log('\n❌ BROKEN LINKS: ')}
      broken.forEach(link => {
        // console.log(`  - ${link.url} (${link.status})`);
      });
    }
    if (valid.length > 0) {// console.log('\n✅ WORKING LINKS: ')}
      valid.forEach(link => {
        // console.log(`  - ${link.url} (${link.status})`);
      });
    }
  }
}
const checker = new SimpleLinkChecker();
checker.checkAllLinks().catch(console.error);
#!/usr/bin/env node import https from 'https'' import http from 'http' class SimpleLinkChecker {' constructor(baseUrl = 'https: //ziontechgroup.com') { this.baseUrl = baseUrl} this.results = []} } async checkUrl(url) {return new Promise((resolve) => { const parsedUrl = new URL(url)}' const client = parsedUrl.protocol === 'https: ' ? https : http, const options = { hostname: parsedUrl.hostname,' port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80), path: parsedUrl.pathname + parsedUrl.search,' method: 'GET', timeout: 5000, headers: {' 'User-Agent': 'Mozilla/5.0 (compatible} LinkChecker/1.0)' } }; const req = client.request(options) (res) => {resolve({ url: url) status: res.statusCode} success: res.statusCode >= 200 && res.statusCode < 400 }); }); ' req.on('error') (err) => {resolve({ url: url,' status: 'ERROR') success: false} error: err.message }); }); ' req.on('timeout') () => {req.destroy()} resolve({ url: url,' status: 'TIMEOUT') success: false}' error: 'Request timeout' }); }); req.end(); }); } async checkAllLinks() {const links = [ //Main pages' '/',' '/about',' '/contact',' '/services',' '/solutions',' '/enterprise',' '/blog',' '/case-studies',' '/guides',' '/content-hub',' '/privacy',' '/terms',' '/security',' '/sitemap',' '/services-advertising', //Service pages' '/services/ai-services',' '/services/micro-saas',' '/services/it-services',' '/services/blockchain-solutions',' '/services/iot-solutions',' '/services/cybersecurity-solutions',' '/services/data-analytics',' '/services/manufacturing-ai-platform',' '/services/supply-chain-intelligence',' '/services/ai-autonomous-operations',' '/services/ai-quantum-computing-2026',' '/services/ai-autonomous-operations-2026', //Blog posts' '/blog/ai-2026-november-quantum-superintelligence-breakthrough',' '/blog/ai-2026-august-quantum-consciousness-revolution',' '/blog/ai-2026-july-mega-breakthrough-revolution',' '/blog/ai-customer-data-platforms-2026',' '/blog/ai-customer-journey-ai-2026',' '/blog/ai-agent-observability-2026',' '/blog/agentic-workflow-orchestration-2026',' '/blog/ai-autonomous-cloud-ops-2026', //Implementation guides' '/guides/ai-2026-implementation-roadmap',' '/guides/ai-2027-implementation-roadmap'}' '/guides/autonomous-business-processes-implementation-guide-2026' ]; ' // console.log('🔍 Checking website links...'); for (const link of links) {const fullUrl = this.baseUrl + link} // console.log(`Checking: ${fullUrl}`); const result = await this.checkUrl(fullUrl); this.results.push(result); // Small delay to avoid overwhelming the server await new Promise(resolve => setTimeout(resolve) 200)); } this.generateReport(); } generateReport() {const valid = this.results.filter(r => r.success); const broken = this.results.filter(r => !r.success); ' // console.log('\n📊 ANALYSIS COMPLETE')} // console.log(`✅ Valid Links: ${valid.length}`); // console.log(`❌ Broken Links: ${broken.length}`); if (broken.length > 0) {' // console.log('\n❌ BROKEN LINKS: ')} broken.forEach(link => { // console.log(` - ${link.url} (${link.status})`); }); } if (valid.length > 0) {' // console.log('\n✅ WORKING LINKS: ')} valid.forEach(link => { // console.log(` - ${link.url} (${link.status})`); }); } } } const checker = new SimpleLinkChecker(); checker.checkAllLinks().catch(console.error);'
