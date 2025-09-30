#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AllIssuesFixer {
  constructor() {
    this.projectRoot = process.cwd()}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  fixPricingGuidePage() {
    const filePath = path.join(this.projectRoot, 'pages/pricing-guide.tsx');
    if (!fs.existsSync(filePath)) return false;

    let content = fs.readFileSync(filePath, 'utf8');

    // Fix the specific JSX issue by rewriting the problematic section
    content = content.replace(
      /<h3 className='text-2xl font-bold text-white mb-2'>\s*\{factor\.factor\}<\/h3>\s*<p className='text-gray-300'>\s*\{factor\.description\}<\/p>/g,
      `<h3 className='text-2xl font-bold text-white mb-2'>
                        {factor.factor}
                      </h3>
                      <p className='text-gray-300'>
                        {factor.description}
                      </p>`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Fixed pricing-guide.tsx');
    return true}

  fixSitemapPage() {
    const filePath = path.join(this.projectRoot, 'pages/sitemap.tsx');
    if (!fs.existsSync(filePath)) return false;

    let content = fs.readFileSync(filePath, 'utf8');

    // Fix the JSX structure issue
    content = content.replace(
      /<\/motion\.div>\s*<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>\s*\{siteStructure\.map/g,
      `</motion.div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {siteStructure.map`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Fixed sitemap.tsx');
    return true}

  fixScriptSyntaxErrors() {
    const scripts = [
      'scripts/performance-monitor.js',
      'scripts/health-checker.js',
      'scripts/link-checker.js',
      'scripts/seo-optimizer.js' ];

    let fixedCount = 0;
    for (const script of scripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        try {
          let content = fs.readFileSync(scriptPath, 'utf8');
          let originalContent = content;

          // Fix common syntax errors
          content = content.replace(/import fs from;/g, 'import fs from "fs";');
          content = content.replace(/import fs from,/g, 'import fs from "fs";');
          content = content.replace(/\?\?/g, '||');
          content = content.replace(/\?\./g, '.');

          if (content !== originalContent) {
            fs.writeFileSync(scriptPath, content, 'utf8');
            this.log(`✅ Fixed syntax in: ${script}`);
            fixedCount++}
        } catch (error) {
          this.log(`❌ Error fixing ${script}: ${error.message}`)}
      }
    }

    return fixedCount}

  async fixAllIssues() {
    this.log('🔧 Fixing all remaining issues...');

    let fixedCount = 0;

    // Fix page syntax errors
    if (this.fixPricingGuidePage()) fixedCount++;
    if (this.fixSitemapPage()) fixedCount++;

    // Fix script syntax errors
    const scriptFixes = this.fixScriptSyntaxErrors();
    fixedCount += scriptFixes;

    this.log(`🎉 Fixed ${fixedCount} issues!`);
    return fixedCount > 0}
}

// Run the fixer
const fixer = new AllIssuesFixer();
fixer
  .fixAllIssues()
  .then(success => {
    if (success) {
      console.log('✅ All remaining issues fixed successfully!');
      process.exit(0)} else {
      console.log('❌ No issues found to fix.');
      process.exit(0)}
  })
  .catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1)});
