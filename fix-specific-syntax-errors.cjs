#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SpecificSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd()}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  fixNotFoundPage() {
    const filePath = path.join(this.projectRoot, 'pages/NotFound.tsx');
    if (!fs.existsSync(filePath)) return false;

    let content = fs.readFileSync(filePath, 'utf8');

    // Fix the specific JSX issue
    content = content.replace(
      /<\/a>\s*<a\s*href="mailto:kleber@ziontechgroup.com"/g,
      '</a>\n                <a\n                  href="mailto:kleber@ziontechgroup.com"
    );

    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Fixed NotFound.tsx');
    return true}

  fixContactPage() {
    const filePath = path.join(this.projectRoot, 'pages/contact.tsx');
    if (!fs.existsSync(filePath)) return false;

    let content = fs.readFileSync(filePath, 'utf8');

    // Fix the option value issue
    content = content.replace(
      /<option value=">Select a service<\/option>/g,
      '<option value="">Select a service</option>'
    );

    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Fixed contact.tsx');
    return true}

  fixPricingGuidePage() {
    const filePath = path.join(this.projectRoot, 'pages/pricing-guide.tsx');
    if (!fs.existsSync(filePath)) return false;

    let content = fs.readFileSync(filePath, 'utf8');

    // Fix the className issue
    content = content.replace(
      /<h3 className='text-2xl font-bold text-white mb-2'>\s*\{factor\.factor\}<\/h3>\s*<p className='text-gray-300'>\s*\{factor\.description\}<\/p>/g,
      "<h3 className='text-2xl font-bold text-white mb-2'>\n                        {factor.factor}\n                      </h3>\n                      <p className='text-gray-300'>\n                        {factor.description}\n                      </p>"
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
      "</motion.div>\n          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>\n            {siteStructure.map"
    );

    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Fixed sitemap.tsx');
    return true}

  async fixAllSpecificIssues() {
    this.log('🔧 Fixing specific syntax issues...');

    const fixes = [
      () => this.fixNotFoundPage(),
      () => this.fixContactPage(),
      () => this.fixPricingGuidePage(),
      () => this.fixSitemapPage() ];

    let fixedCount = 0;
    for (const fix of fixes) {
      if (fix()) {
        fixedCount++}
    }

    this.log(`🎉 Fixed ${fixedCount} specific syntax issues!`);
    return fixedCount > 0}
}

// Run the fixer
const fixer = new SpecificSyntaxFixer();
fixer
  .fixAllSpecificIssues()
  .then(success => {
    if (success) {
      console.log('✅ Specific syntax issues fixed successfully!');
      process.exit(0)} else {
      console.log('❌ No specific issues found to fix.');
      process.exit(0)}
  })
  .catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1)});
