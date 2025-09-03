
const fs = require('fs');
const path = require('path');
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
class SecurityEnhancer {
  constructor() {
    this.projectRoot = process.cwd();
    this.securityEnhancements = [];    } catch (error) {
      this.log(`❌ Security headers creation failed: ${error.message}`);
    }
  }

  async createSecurityMiddleware() {
    this.log('🛡️ Creating security middleware...');
    try {
      const securityMiddleware = `
import { NextRequest, NextResponse } from 'next/server';
import { securityHeaders, contentSecurityPolicy } from '../lib/security';

export function securityMiddleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Apply security headers
  securityHeaders.forEach(({ key, value }) => {
    response.headers.set(key, value);
  });
  
  // Apply Content Security Policy
  const cspString = Object.entries(contentSecurityPolicy.directives)
    .map(([key, values]) => \`\${key} \${values.join(' ')}\`)
    .join('; ');
  
  response.headers.set('Content-Security-Policy', cspString);
  
  // Rate limiting headers
  response.headers.set('X-RateLimit-Limit', '100');
  response.headers.set('X-RateLimit-Remaining', '99');
  response.headers.set('X-RateLimit-Reset', new Date(Date.now() + 3600000).toISOString());
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)']};
`;
      
      fs.writeFileSync(
        path.join(this.projectRoot, 'middleware.security.ts'),
        securityMiddleware
      );
      
      this.securityEnhancements.push('Security middleware created');
      this.log('✅ Security middleware created');
    } catch (error) {
      this.log(`❌ Security middleware creation failed: ${error.message}`);    }
  }

  async createSecurityAuditScript() {
    this.log('🔍 Creating security audit script...');
    try {
      const auditScript = `
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'security-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runNpmAudit() {
    console.log('🔍 Running npm audit...');
    try {
      const command = 'npm audit --audit-level=moderate --json > ./security-reports/npm-audit.json';
      execSync(command, { stdio: 'inherit' });
      console.log('✅ NPM audit completed');
    } catch (error) {
      console.log('❌ NPM audit failed:', error.message);
    }
  }

  async runSnykAudit() {
    console.log('🔍 Running Snyk audit...');
    try {
      const command = 'npx snyk test --json > ./security-reports/snyk-audit.json';
      execSync(command, { stdio: 'inherit' });
      console.log('✅ Snyk audit completed');
    } catch (error) {
      console.log('❌ Snyk audit failed:', error.message);
    }
  }

  async generateSecurityReport() {
    console.log('📊 Generating security report...');
    const report = {
      timestamp: new Date().toISOString(),
      audits: {
        npm: 'npm-audit.json',
        snyk: 'snyk-audit.json'
      },
      recommendations: [
        'Keep dependencies updated',
        'Use security headers',
        'Implement rate limiting',
        'Use HTTPS only',
        'Validate all inputs',
        'Use environment variables for secrets'
      ]
    };
    
    fs.writeFileSync(
      path.join(this.reportsDir, 'security-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('✅ Security report generated');
  }
}

const auditor = new SecurityAuditor();
auditor.runNpmAudit();
auditor.runSnykAudit();
auditor.generateSecurityReport();
`;
      
      fs.writeFileSync(
        path.join(this.projectRoot, 'scripts', 'security-audit.cjs'),
        auditScript
      );
      
      this.securityEnhancements.push('Security audit script created');
      this.log('✅ Security audit script created');
    } catch (error) {
      this.log(`❌ Security audit script creation failed: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting security enhancement...');
    
    await this.createSecurityHeaders();
    await this.createSecurityMiddleware();
    await this.createSecurityAuditScript();
    
    this.log(`🎉 Security enhancement completed with ${this.securityEnhancements.length} enhancements`);
    this.securityEnhancements.forEach(enhancement => this.log(`  - ${enhancement}`));
  }
}

const enhancer = new SecurityEnhancer();
enhancer.run().catch(console.error);