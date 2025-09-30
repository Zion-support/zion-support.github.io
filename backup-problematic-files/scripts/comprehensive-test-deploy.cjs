    this.log(`Tests: ${this.results.tests.passed}/${this.results.tests.total} passed`);
    this.log(`Builds: ${this.results.builds.success} successful, ${this.results.builds.failed} failed`);
    this.log(`Errors: ${this.results.errors.length}`);
    
    const recommendations = this.generateRecommendations();
    this.log('\n💡 Recommendations:');
    recommendations.forEach((rec, index) => {
      this.log(`  ${index + 1}. ${rec}`);
    });

    this.log('\\n🎉 Comprehensive test & deploy suite completed!');
  }
}

// Run the comprehensive suite
const suite = new ComprehensiveTestDeploy();
suite.runComprehensiveSuite().catch(console.error);#!/usr/bin/env node;
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log(' Comprehensive Test & Deploy Suite')
console.log('=')
  log(message, type = 'info')
        encoding: 'utf8'
        stdio: 'pipe'
      this.log(` ${description} completed successfully`, 'success'`)
      this.log(` ${description} failed: ${error.message}`, 'error'`)
    this.log('🧪 Running comprehensive tests...')
      { cmd: 'npm run lint', desc: 'ESLint linting'}
      { cmd: 'npm run type-check', desc: 'TypeScript type checking'}
      { cmd: 'npm run test:smoke', desc: 'Smoke tests'}
    this.log('� Running builds...')
      { cmd: 'npm run build', desc: 'Production build'}
      { cmd: 'npm run export', desc: 'Static export'}
    this.log('� Running security checks...')
      { cmd: 'npm audit --audit-level=moderate', desc: 'NPM security audit'}
      { cmd: 'node scripts/security-auditor.cjs', desc: 'Custom security audit'}
    this.log('⚡ Running performance checks...')
      { cmd: 'node scripts/performance-optimizer.cjs', desc: 'Performance optimization'}
      { cmd: 'node scripts/resource-optimizer.cjs', desc: 'Resource optimization'}
    this.log(' Running SEO checks...')
      { cmd: 'node scripts/seo-optimizer.cjs', desc: 'SEO optimization'}
      { cmd: 'node scripts/link-checker.cjs', desc: 'Link checking'}
    this.log(' Generating comprehensive reports...')
    const reportPath = path.join(process.cwd(), 'comprehensive-reports', 'test-deploy-report.json'
      recommendations.push('Fix failing tests before deployment')
      recommendations.push('Fix build issues before deployment')
      recommendations.push('Address multiple errors before deployment')
      recommendations.push('All checks passed - ready for deployment')
    this.log('Starting comprehensive test & deploy suite...')
    this.log('\\n COMPREHENSIVE SUITE SUMMARY')
    this.log('===')
    this.log('\n Recommendations:')
    this.log('\\n� Comprehensive test & deploy suite completed!')
