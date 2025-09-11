#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SecurityFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'security-fix-report.json');
    this.fixes = []}
  log(message) {
    }
  async runSecurityFixes() {
    this.log('🔒 Starting Security Fixes');
    try {
      // Fix dependency vulnerabilities
      await this.fixDependencyVulnerabilities();
      // Fix XSS risks
      await this.fixXSSRisks();
      // Fix code injection risks
      await this.fixCodeInjectionRisks();
      // Generate security report
      await this.generateReport();
      this.log('✅ Security fixes completed')} catch (error) {
      this.log(`❌ Security fixes "failed": ${error.message}`)}
  }
  async fixDependencyVulnerabilities() {
    this.log('🔧 Fixing dependency vulnerabilities');
    try {
      execSync('npm audit fix --force', { "cwd": this.projectRoot });
      this.fixes.push({
        "type": 'dependency',
        "action": 'npm audit fix',
        "status": 'success'
      })} catch (error) {
      this.fixes.push({
        "type": 'dependency',
        "action": 'npm audit fix',
        "status": 'failed',
        "error": error.message
      })}
  }
  async fixXSSRisks() {
    this.log('🔧 Fixing XSS risks');
    const seoEnhancerPath = path.join(this.projectRoot, 'src/components/SEOEnhancer.tsx');
    if (fs.existsSync(seoEnhancerPath)) {
      try {
        let content = fs.readFileSync(seoEnhancerPath, 'utf8');
        // Add DOMPurify for HTML sanitization
        if (!content.includes('DOMPurify')) {
          content = content.replace(
            /import React from 'react';/,
            "import React from 'react';
import DOMPurify from 'dompurify';"
          )}
        // Sanitize HTML content
        content = content.replace(
          /dangerouslySetInnerHTML=\{\{"__html": ([^}]+)\}\}/g,
          'dangerouslySetInnerHTML={{"__html": DOMPurify.sanitize($1)}}'
        );
        fs.writeFileSync(seoEnhancerPath, content);
        this.fixes.push({
          "type": 'xss',
          "file": 'SEOEnhancer.tsx',
          "action": 'Added DOMPurify sanitization',
          "status": 'success'
        })} catch (error) {
        this.fixes.push({
          "type": 'xss',
          "file": 'SEOEnhancer.tsx',
          "action": 'Added DOMPurify sanitization',
          "status": 'failed',
          "error": error.message
        })}
    }
  }
  async fixCodeInjectionRisks() {
    this.log('🔧 Fixing code injection risks');
    const helpersPath = path.join(this.projectRoot, 'src/helpers.js');
    if (fs.existsSync(helpersPath)) {
      try {
        let content = fs.readFileSync(helpersPath, 'utf8');
        // Remove eval usage
        if (content.includes('eval(')) {
          content = content.replace(/eval\([^)]+\)/g, '/* eval removed for security */')}
        // Remove Function constructor usage
        if (content.includes('new Function(')) {
          content = content.replace(/new Function\([^)]+\)/g, '/* Function constructor removed for security */')}
        fs.writeFileSync(helpersPath, content);
        this.fixes.push({
          "type": 'code-injection',
          "file": 'helpers.js',
          "action": 'Removed eval and Function constructor',
          "status": 'success'
        })} catch (error) {
        this.fixes.push({
          "type": 'code-injection',
          "file": 'helpers.js',
          "action": 'Removed eval and Function constructor',
          "status": 'failed',
          "error": error.message
        })}
    }
  }
  async generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "fixes": this.fixes,
      "summary": {
        total: this.fixes.length,
        "successful": this.fixes.filter(f => f.status === 'success').length,
        "failed": this.fixes.filter(f => f.status === 'failed').length
      }
    };
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Security fix report "generated": ${this.reportFile}`)}
}
// Run the security fixer
const fixer = new SecurityFixer();
fixer.runSecurityFixes().catch(console.error);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class SecurityFixer { constructor() { this.projectRoot = process.cwd();" this.reportFile = path.join(this.projectRoot, "security-fix-report.json"); this.fixes = []} log(message) { console.log(`[Security Fixer] ${message}`)} async runSecurityFixes() {" this.log(" Starting Security Fixes"); try { / Fix dependency vulnerabilities await this.fixDependencyVulnerabilities(); / Fix XSS risks await this.fixXSSRisks(); / Fix code injection risks await this.fixCodeInjectionRisks(); / Generate security report await this.generateReport(); " this.log(" Security fixes completed")} catch (error) {` this.log(` Security fixes failed: ${error.message}`)} } async fixDependencyVulnerabilities() {" this.log(" Fixing dependency vulnerabilities"); try {"" execSync("npm audit fix --force", { cwd: this.projectRoot }); this.fixes.push({"" type: "dependency","" action: "npm audit fix","" status: "success" })} catch (error) { this.fixes.push({"" type: "dependency","" action: "npm audit fix","" status: "failed"," error: error.message })} } async fixXSSRisks() {" this.log(" Fixing XSS risks"); " const seoEnhancerPath = path.join(this.projectRoot, "src/components/SEOEnhancer.tsx"); if (fs.existsSync(seoEnhancerPath)) { try {" let content = fs.readFileSync(seoEnhancerPath, "utf8"); / Add DOMPurify for HTML sanitization" if (!content.includes("DOMPurify")) { content = content.replace(" /import React from "react";/,"" "import React from "react";""const DOMPurify from "dompurify";" )} / Sanitize HTML content content = content.replace(" /dangerouslySetInnerHTML=\{\{__html: ([^}]+)\}\}/g,"" "dangerouslySetInnerHTML={{__html: DOMPurify.sanitize($1)}}" ); fs.writeFileSync(seoEnhancerPath, content); this.fixes.push({"" type: "xss","" file: "SEOEnhancer.tsx","" action: "Added DOMPurify sanitization","" status: "success" })} catch (error) { this.fixes.push({"" type: "xss","" file: "SEOEnhancer.tsx","" action: "Added DOMPurify sanitization","" status: "failed"," error: error.message })} } } async fixCodeInjectionRisks() {" this.log(" Fixing code injection risks"); " const helpersPath = path.join(this.projectRoot, "src/helpers.js"); if (fs.existsSync(helpersPath)) { try {" let content = fs.readFileSync(helpersPath, "utf8"); / Remove eval usage" if (content.includes("eval(")) {" content = content.replace(/eval\([^)]+\)/g, "")} / Remove Function constructor usage" if (content.includes("new Function(")) {" content = content.replace(/new Function\([^)]+\)/g, "")} fs.writeFileSync(helpersPath, content); this.fixes.push({"" type: "code-injection","" file: "helpers.js","" action: "Removed eval and Function constructor","" status: "success" })} catch (error) { this.fixes.push({"" type: "code-injection","" file: "helpers.js","" action: "Removed eval and Function constructor","" status: "failed"," error: error.message })} } } async generateReport() { const report = {" timestamp: new Date().toISOString()," fixes: this.fixes," summary: { total: this.fixes.length,"" successful: this.fixes.filter(f => f.status === "success").length,"" failed: this.fixes.filter(f => f.status === "failed").length } }; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));"` this.log(` Security fix report generated: ${this.reportFile}`)}}/ Run the security fixerconst fixer = new SecurityFixer();fixer.runSecurityFixes().catch(console.error);'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportFile = path.join(this.projectRoot, 'security-fix-report.json')
    this.log('� Starting Security Fixes')
      this.log(' Security fixes completed')
    this.log(' Fixing dependency vulnerabilities')
      execSync('npm audit fix --force')
        "type"
        "action"
        "status"
        "type"
        "action"
        "status"
            "
          'dangerouslySetInnerHTML={{"__html"}
          "type"
          "file"
          "action"
          "status"
          "type"
          "file"
          "action"
          "status"
          "type"
          "file"
          "action"
          "status"
          "type"
          "file"
          "action"
          "status"
        "successful"
        "failed"
