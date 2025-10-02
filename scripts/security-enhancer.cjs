
const fs = require('fs');
const path = require('path');

class SecurityEnhancer {
  constructor() {
    this.projectRoot = process.cwd()}

  async addSecurityHeaders() {
    console.log('🛡️ Adding security headers...');
    
    const securityConfig = `
// Security headers configuration
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  }, {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }, {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }, {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  }, {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }, {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

module.exports = { securityHeaders };
`;

    fs.writeFileSync(path.join(this.projectRoot, 'security.config.js'), securityConfig);
    console.log('✅ Security headers configuration created')}

  async addCSP() {
    console.log('🔐 Adding Content Security Policy...');
    
    const cspConfig = `
// Content Security Policy configuration
const cspHeader = {
  'Content-Security-Policy': [
    {
      key: 'default-src',
      value: "'self'"
    }, {
      key: 'script-src',
      value: "'self' 'unsafe-eval' 'unsafe-inline'"
    }, {
      key: 'style-src',
      value: "'self' 'unsafe-inline'"
    }, {
      key: 'img-src',
      value: "'self' blob: data: https:"
    }, {
      key: 'font-src',
      value: "'self' https:"
    }, {
      key: 'object-src',
      value: "'none'"
    }, {
      key: 'base-uri',
      value: "'self'"
    }, {
      key: 'form-action',
      value: "'self'"
    }, {
      key: 'frame-ancestors',
      value: "'none'"
    }
  ]
};

module.exports = { cspHeader };
`;

    fs.writeFileSync(path.join(this.projectRoot, 'csp.config.js'), cspConfig);
    console.log('✅ CSP configuration created')}

  async run() {
    await this.addSecurityHeaders();
    await this.addCSP();
    console.log('✅ Security enhancement completed!')}
}

const enhancer = new SecurityEnhancer();
enhancer.run().catch(console.error);
