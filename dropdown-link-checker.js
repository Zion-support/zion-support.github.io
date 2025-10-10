import fs from 'fs';

class DropdownLinkChecker {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.workingLinks = [];
    this.brokenLinks = [];
    this.missingPages = [];
  }

  // Extract AI services from Navigation
  getAIServices() {
    return [
      '/ai-services',
      '/ai-marketing',
      '/ai-customer-support',
      '/ai-data-analytics',
      '/ai-content-generation',
      '/ai-healthcare',
      '/ai-fintech',
      '/ai-ecommerce-solutions',
      '/ai-cybersecurity',
      '/ai-mobile-app-development',
      '/ai-sales-automation',
      '/ai-workflow-automation',
      '/ai-data-visualization',
      '/ai-lead-generation',
      '/ai-document-processing',
      '/ai-automation'
    ];
  }

  // Extract IT services from Navigation
  getITServices() {
    return [
      '/cloud-services',
      '/cloud-migration',
      '/devops',
      '/database',
      '/cybersecurity',
      '/security-monitoring',
      '/penetration-testing',
      '/it-infrastructure',
      '/managed-it',
      '/it-consulting',
      '/data-analytics',
      '/mobile-development',
      '/web-development',
      '/process-automation'
    ];
  }

  // Extract Micro SAAS services from Navigation
  getMicroSaasServices() {
    return [
      '/micro-saas',
      '/ai-analytics-dashboard',
      '/ai-crm',
      '/security-monitoring-suite',
      '/cloud-infrastructure-manager',
      '/email-marketing-automation',
      '/project-management-pro',
      '/ecommerce-analytics-pro',
      '/ai-recruitment-assistant',
      '/medical-records-manager',
      '/ai-accounting-assistant',
      '/property-management-ai',
      '/legal-document-manager',
      '/online-learning-platform',
      '/supply-chain-optimizer',
      '/ai-writing-assistant',
      '/ai-design-studio'
    ];
  }

  // Extract Emerging Tech services from Navigation
  getEmergingTechServices() {
    return [
      '/quantum-computing',
      '/robotics',
      '/iot-edge-computing',
      '/blockchain-web3',
      '/business-intelligence',
      '/autonomous-systems',
      '/5g-implementation',
      '/ai-3d-generation',
      '/ai-holographic-workspace'
    ];
  }

  // Check if page file exists
  checkPageExists(route) {
    if (route === '/') {
      return fs.existsSync('/workspace/app/page.tsx');
    }
    
    const pagePath = `/workspace/app${route}/page.tsx`;
    return fs.existsSync(pagePath);
  }

  // Check all dropdown links
  checkAllDropdownLinks() {
    console.log('🔍 Checking dropdown links...');
    
    const allLinks = [
      ...this.getAIServices(),
      ...this.getITServices(),
      ...this.getMicroSaasServices(),
      ...this.getEmergingTechServices()
    ];
    
    console.log(`\n📊 Total dropdown links to check: ${allLinks.length}`);
    
    allLinks.forEach(route => {
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
    console.log('\n📊 DROPDOWN LINK CHECKER REPORT');
    console.log('================================');
    
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
      totalLinks: this.workingLinks.length + this.missingPages.length,
      workingLinks: this.workingLinks.length,
      missingPages: this.missingPages.length,
      workingLinksList: this.workingLinks,
      missingPagesList: this.missingPages
    };
    
    fs.writeFileSync('dropdown-link-checker-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to dropdown-link-checker-report.json');
  }
}

// Run the dropdown link checker
const checker = new DropdownLinkChecker();
checker.checkAllDropdownLinks();