<<<<<<< HEAD
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Security Scanner
 * Comprehensive security scanning and enhancement automation
 */
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyAudit: { success: false, vulnerabilities: 0, fixes: [] },
      codeSecurity: { success: false, issues: [], fixes: [] },
      headersSecurity: { success: false, headers: [], recommendations: [] },
      contentSecurityPolicy: { success: false, policy: '', recommendations: [] },
      authenticationSecurity: { success: false, checks: [], recommendations: [] }
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async auditDependencies() {
    this.log('\n🔍 AUDITING DEPENDENCIES');
    
    try {
      // Run npm audit
      const auditResult = await this.runCommand(
        'npm audit --json',
        'Dependency Security Audit'
      );

      let vulnerabilities = 0;
      let fixes = [];

      if (auditResult.success) {
        try {
          const auditData = JSON.parse(auditResult.output);
          vulnerabilities = auditData.metadata?.vulnerabilities?.total || 0;
          
          if (vulnerabilities > 0) {
            fixes.push('Run npm audit fix to fix vulnerabilities');
            fixes.push('Update vulnerable packages to latest versions');
            fixes.push('Consider using npm audit fix --force for automatic fixes');
          }
        } catch (parseError) {
          this.log('Failed to parse audit results', 'WARNING');
        }
=======
#!/usr/bin/env node;
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
class $1 {
  constructor() {
  this.projectRoot = process.cwd()
    this.vulnerabilities = []
    this.recommendations = [],
}
  async scanDependencies() {
  console.log("🔍 Scanning dependencies for vulnerabilities...")
    try {
  execSync("npm audit", { stdio: "pipe" })
      console.log("✅ No critical vulnerabilities found"),
} catch (error) {
  this.vulnerabilities.push("Dependency vulnerabilities detected")
      this.recommendations.push("Run npm audit fix"),
}
  }
  async scanSecrets() {
  console.log("🔐 Scanning for exposed secrets...")
    const sensitivePatterns = [
  /password\s*[:=]\s*[""][^""]+[""]/gi,
      /api[_-]?key\s*[:=]\s*[""][^""]+[""]/gi,
      /secret\s*[:=]\s*[""][^""]+[""]/gi,
      /token\s*[:=]\s*[""][^""]+[""]/gi;
    ]

    const files = this.findSourceFiles()
    for (const file of files) {
  try {
  const content = fs.readFileSync(file, "utf8")
        for (const pattern of sensitivePatterns) {
  if (pattern.test(content)) {
  this.vulnerabilities.push(`Potential secret in ${path.relative(this.projectRoot, file)}`)
            this.recommendations.push(`Review ${path.relative(this.projectRoot, file)} for exposed secrets`),
}
        }
      } catch (error) {
  // Skip files that can"t be read;
}
    }
    console.log("✅ Secret scanning completed"),
}
  findSourceFiles() {
  const files = []
    const dirs = ["src", "components", "pages", "utils", "hooks"]
    dirs.forEach(dir => {
  const fullPath = path.join(this.projectRoot, dir)
      if (fs.existsSync(fullPath)) {
  this.findFilesRecursively(fullPath, files),
}
    })
    return files.filter(file => ;
      file.endsWith(".js") || ;
      file.endsWith(".jsx") || ;
      file.endsWith(".ts") || ;
      file.endsWith(".tsx")
    ),
}
  findFilesRecursively(dir, files) {
  const items = fs.readdirSync(dir)
    for (const item of items) {
  const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
  this.findFilesRecursively(fullPath, files),
} else {
  files.push(fullPath),
}
    }
  }
  async scanConfiguration() {
  console.log("⚙️  Scanning configuration files...")
    const configFiles = ["package.json", "next.config.js", ".env", ".env.local"]
    for (const file of configFiles) {
  const filePath = path.join(this.projectRoot, file)
      if (fs.existsSync(filePath)) {
  try {
  const content = fs.readFileSync(filePath, "utf8")
          // Check for insecure configurations;
          if (content.includes("NODE_ENV=development") && file.includes(".env")) {
  this.recommendations.push(`Review ${file} for production-ready configuration`),
}
        } catch (error) {
  // Skip files that can"t be read;
}
>>>>>>> origin/automation-fixes
      }

      // Try to fix vulnerabilities
      if (vulnerabilities > 0) {
        const fixResult = await this.runCommand(
          'npm audit fix',
          'Fix Security Vulnerabilities'
        );
        
        if (fixResult.success) {
          fixes.push('Successfully applied automatic fixes');
        }
      }

      this.results.dependencyAudit = {
        success: auditResult.success,
        vulnerabilities,
        fixes
      };
    } catch (error) {
      this.results.dependencyAudit = {
        success: false,
        vulnerabilities: 0,
        fixes: ['Failed to audit dependencies']
      };
    }
<<<<<<< HEAD
  }

  async scanCodeSecurity() {
    this.log('\n🔍 SCANNING CODE SECURITY');
    
    try {
      const issues = [];
      const fixes = [];

      // Check for common security issues
      const securityChecks = [
        {
          pattern: /eval\s*\(/g,
          issue: 'Use of eval() function detected',
          fix: 'Replace eval() with safer alternatives like JSON.parse() or Function constructor'
        },
        {
          pattern: /innerHTML\s*=/g,
          issue: 'Direct innerHTML assignment detected',
          fix: 'Use textContent or sanitize HTML before assignment'
        },
        {
          pattern: /document\.write\s*\(/g,
          issue: 'Use of document.write() detected',
          fix: 'Replace document.write() with DOM manipulation methods'
        },
        {
          pattern: /localStorage\.setItem\s*\([^,]+,\s*[^)]*\+/g,
          issue: 'Potential XSS in localStorage',
          fix: 'Sanitize data before storing in localStorage'
        }
      ];

      // Scan common file types
      const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];
      const scanDirs = ['components', 'pages', 'lib', 'utils', 'hooks'];

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
      };
    } catch (error) {
      this.results.codeSecurity = {
        success: false,
        issues: ['Failed to scan code security'],
        fixes: []
      };
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
          const content = fs.readFileSync(fullPath, 'utf8');
          
          securityChecks.forEach(check => {
            const matches = content.match(check.pattern);
            if (matches) {
              issues.push({
                file: fullPath,
                issue: check.issue,
                matches: matches.length
              });
              fixes.push(check.fix);
            }
          });
        }
      });
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'WARNING');
    }
  }

  async setupSecurityHeaders() {
    this.log('\n🛡️ SETTING UP SECURITY HEADERS');
    
    try {
      const securityHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
      };

      // Create security headers middleware
      const middlewareContent = `
// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  
  next();
=======
    console.log("✅ Configuration scanning completed"),
}
  async runSecurityScan() {
  console.log("🛡️  Starting security scan...\n")
    await this.scanDependencies()
    await this.scanSecrets()
    await this.scanConfiguration()
    console.log("\n📊 Security Scan Summary:")
    console.log(`Vulnerabilities found: ${this.vulnerabilities.length}`)
    console.log(`Recommendations: ${this.recommendations.length}`)
    if (this.vulnerabilities.length > 0) {
  console.log("\n⚠️  Vulnerabilities:")
      this.vulnerabilities.forEach((vuln, index) => console.log(`${index + 1}. ${vuln}`)),
}
    if (this.recommendations.length > 0) {
  console.log("\n💡 Recommendations:")
      this.recommendations.forEach((rec, index) => console.log(`${index + 1}. ${rec}`)),
}
    if (this.vulnerabilities.length === 0) {
  console.log("\n🎉 No security issues found!"),
>>>>>>> origin/automation-fixes
}
`;

      const middlewarePath = path.join(this.projectRoot, 'middleware', 'security.js');
      fs.mkdirSync(path.dirname(middlewarePath), { recursive: true });
      fs.writeFileSync(middlewarePath, middlewareContent);

      this.results.headersSecurity = {
        success: true,
        headers: Object.keys(securityHeaders),
        recommendations: [
          'Implement security headers middleware',
          'Configure Content Security Policy',
          'Set up HTTPS redirect',
          'Implement rate limiting'
        ]
      };
    } catch (error) {
      this.results.headersSecurity = {
        success: false,
        headers: [],
        recommendations: ['Failed to setup security headers']
      };
    }
  }

  async setupContentSecurityPolicy() {
    this.log('\n🔒 SETTING UP CONTENT SECURITY POLICY');
    
    try {
      const cspPolicy = {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        'img-src': ["'self'", "data:", "https:"],
        'font-src': ["'self'", "https://fonts.gstatic.com"],
        'connect-src': ["'self'", "https://api.zion.app"],
        'frame-src': ["'none'"],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"]
      };

      const cspString = Object.entries(cspPolicy)
        .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
        .join('; ');

      // Create CSP configuration
      const cspConfig = {
        policy: cspString,
        reportOnly: false,
        reportUri: '/api/csp-report'
      };

      const cspPath = path.join(this.projectRoot, 'csp-config.json');
      fs.writeFileSync(cspPath, JSON.stringify(cspConfig, null, 2));

      this.results.contentSecurityPolicy = {
        success: true,
        policy: cspString,
        recommendations: [
          'Implement CSP in middleware',
          'Set up CSP violation reporting',
          'Test CSP with different browsers',
          'Consider using nonce-based CSP for inline scripts'
        ]
      };
    } catch (error) {
      this.results.contentSecurityPolicy = {
        success: false,
        policy: '',
        recommendations: ['Failed to setup Content Security Policy']
      };
    }
  }

  async checkAuthenticationSecurity() {
    this.log('\n🔐 CHECKING AUTHENTICATION SECURITY');
    
    try {
      const checks = [];
      const recommendations = [];

      // Check for authentication-related files
      const authFiles = [
        'lib/auth.js',
        'lib/auth.ts',
        'utils/auth.js',
        'utils/auth.ts',
        'pages/api/auth',
        'pages/api/login',
        'pages/api/logout'
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
        recommendations.push('Implement JWT token validation');
        recommendations.push('Add password hashing with bcrypt');
        recommendations.push('Implement session management');
        recommendations.push('Add rate limiting for authentication endpoints');
        recommendations.push('Implement two-factor authentication');
      } else {
    recommendations.push('Consider implementing authentication system'),
    recommendations.push('Add user registration and login functionality')
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      this.results.authenticationSecurity = {
        success: true,
        checks,
        recommendations
      };
    } catch (error) {
      this.results.authenticationSecurity = {
        success: false,
        checks: ['Failed to check authentication security'],
        recommendations: []
      };
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 SECURITY SCANNER REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log('');
    
    Object.entries(this.results).forEach(([task, result]) => {
      const status = result.success ? '✅' : '❌';
      this.log(`${status} ${task}: ${JSON.stringify(result, null, 2)}`);
    });
    
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
    };
    
    fs.writeFileSync(
      'security-scanner-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Detailed report saved to security-scanner-report.json');
  }

  async run() {
    this.log('🚀 Starting Security Scanner');
    this.log('='.repeat(60));
    
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
<<<<<<< HEAD

// Run the security scanner
if (require.main === module) {
    const scanner = new SecurityScanner();
    scanner.run().catch(console.error);
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

module.exports = SecurityScanner;
=======
const scanner = new SecurityScanner()
scanner.runSecurityScan().catch(console.error)
>>>>>>> origin/automation-fixes
