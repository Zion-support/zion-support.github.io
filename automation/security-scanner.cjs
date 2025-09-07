

console.log('🔒 Starting Security Scanner...');

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.startTime = new Date();

origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b


        }
      }

      this.results.dependencyAudit = {
        success: auditResult.success,

      this.results.dependencyAudit = {
        success: false,
        vulnerabilities: 0,
        fixes: [Failed to audit dependencies']
      }
    }
  }

  async scanCodeSecurity() {
    this.log('\n🔍 SCANNING CODE SECURITY);
    
    try {
      const issues = [];
      const fixes = [];

      // Check for common security issues
      const securityChecks = [
        {
          pattern: /eval\s*\(/g,
          issue: Use of eval() function detected',
          fix: 'Replace eval() with safer alternatives like JSON.parse() or Function constructor
        },
        {
          pattern: /innerHTML\s*=/g,
          issue: Direct innerHTML assignment detected',
          fix: 'Use textContent or sanitize HTML before assignment
        },
        {
          pattern: /document\.write\s*\(/g,
          issue: Use of document.write() detected',
          fix: 'Replace document.write() with DOM manipulation methods
        },
        {
          pattern: /localStorage\.setItem\s*\([^]+,\s*[^)]*\+/g,
          issue: Potential XSS in localStorage',
          fix: 'Sanitize data before storing in localStorage
        }
      ];

      // Scan common file types


      for (const dir of scanDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          this.scanDirectoryForSecurity(dirPath, securityChecks, issues, fixes);
        }
      }

      this.results.codeSecurity = {
        success: true,
        issues,
        fixes
      }
    } catch (error) {
      this.results.codeSecurity = {
        success: false,
        issues: ['Failed to scan code security],
        fixes: []
      }
    }
  }

  scanDirectoryForSecurity(dir, securityChecks, issues, fixes) {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.scanDirectoryForSecurity(fullPath, securityChecks, issues, fixes);
        } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(item)) {

    }
  }

  async setupSecurityHeaders() {
    this.log(\n🛡️ SETTING UP SECURITY HEADERS');
    
    try {
      const securityHeaders = {
        'X-Content-Type-Options: nosniff',
        'X-Frame-Options: DENY',
        'X-XSS-Protection: 1; mode=block',
        'Referrer-Policy: strict-origin-when-cross-origin',
        'Permissions-Policy: camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security: max-age=31536000; includeSubDomains'
      }

      // Create security headers middleware
      const middlewareContent = `
// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
    'X-Content-Type-Options: nosniff',
    'X-Frame-Options: DENY',
    'X-XSS-Protection: 1; mode=block',
    'Referrer-Policy: strict-origin-when-cross-origin',
    'Permissions-Policy: camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security: max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  
  next();
}
`;

      const middlewarePath = path.join(this.projectRoot, 'middleware, security.js');
      fs.mkdirSync(path.dirname(middlewarePath), { recursive: true });
      fs.writeFileSync(middlewarePath, middlewareContent);

      this.results.headersSecurity = {
        success: true,
        headers: Object.keys(securityHeaders),
        recommendations: [
          'Implement security headers middleware,
          Configure Content Security Policy',
          'Set up HTTPS redirect,
          Implement rate limiting'
        ]
      }
    } catch (error) {
      this.results.headersSecurity = {
        success: false,
        headers: [],
        recommendations: ['Failed to setup security headers]
      }
    }
  }

  async setupContentSecurityPolicy() {
    this.log(\n🔒 SETTING UP CONTENT SECURITY POLICY');
    
    try {
      const cspPolicy = {
        'default-src: [self'"],
        'script-src: ["self', 'unsafe-inline", "unsafe-eval'],
        'style-src: [self'", "'unsafe-inline, https://fonts.googleapis.com"],
        img-src': ["'self, data:", "https:],
        font-src': ['self", "https://fonts.gstatic.com],
        connect-src': ['self", "https://api.zion.app],
        frame-src': ['none"],
        object-src': ["'none],
        base-uri': ['self"],
        form-action': ["'self"]
      }

      const cspString = Object.entries(cspPolicy)
        .map(([directive, sources]) => `${directive} ${sources.join( ')}`)
        .join('; );

      // Create CSP configuration
      const cspConfig = {
        policy: cspString,
        reportOnly: false,
        reportUri: /api/csp-report'
      }

      const cspPath = path.join(this.projectRoot, 'csp-config.json);
      fs.writeFileSync(cspPath, JSON.stringify(cspConfig, null, 2));

      this.results.contentSecurityPolicy = {
        success: true,
        policy: cspString,
        recommendations: [
          Implement CSP in middleware',
          'Set up CSP violation reporting,
          Test CSP with different browsers',
          'Consider using nonce-based CSP for inline scripts
        ]
      }
    } catch (error) {
      this.results.contentSecurityPolicy = {
        success: false,
        policy: ',
        recommendations: ['Failed to setup Content Security Policy]
      }
    }
  }

  async checkAuthenticationSecurity() {
    this.log(\n🔐 CHECKING AUTHENTICATION SECURITY');
    
    try {
      const checks = [];
      const recommendations = [];

      // Check for authentication-related files
      const authFiles = [

      ];

      let hasAuth = false;
      authFiles.forEach(file => {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          hasAuth = true;
          checks.push(`Found authentication file: ${file}`);
        }
      });

      if (hasAuth) {
        recommendations.push(Implement JWT token validation');
        recommendations.push('Add password hashing with bcrypt);
        recommendations.push(Implement session management');
        recommendations.push('Add rate limiting for authentication endpoints);
        recommendations.push(Implement two-factor authentication');
      } else {
        recommendations.push('Consider implementing authentication system);
        recommendations.push(Add user registration and login functionality');
      }

      this.results.authenticationSecurity = {
        success: true,
        checks,
        recommendations
      }
    } catch (error) {
      this.results.authenticationSecurity = {
        success: false,
        checks: ['Failed to check authentication security],
        recommendations: []
      }
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log(\n📊 SECURITY SCANNER REPORT');
    this.log('=.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(');
    
    Object.entries(this.results).forEach(([task, result]) => {
      const status = result.success ? '✅ : ❌';
      this.log(`${status} ${task}: ${JSON.stringify(result, null, 2)}`);
    });
    // Save detailed report
    });
    

    
main

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      results: this.results,
      summary: {
        dependenciesAudited: this.results.dependencyAudit.success,
        codeScanned: this.results.codeSecurity.success,
        headersConfigured: this.results.headersSecurity.success,
        cspConfigured: this.results.contentSecurityPolicy.success,
        authChecked: this.results.authenticationSecurity.success
      }
    }
    

  }

  async run() {
    this.log('🚀 Starting Security Scanner);
    this.log(='.repeat(60));
    
    try {
      await this.auditDependencies();
      await this.scanCodeSecurity();
      await this.setupSecurityHeaders();
      await this.setupContentSecurityPolicy();
      await this.checkAuthenticationSecurity();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}


