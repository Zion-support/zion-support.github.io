#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SimpleSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedCount = 0}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;

      // Fix the specific patterns that are causing build failures
      fixed = fixed.replace(/}'\`,/g, '}\'`');
      fixed = fixed.replace(/}'\`,\s*description:/g, '}\'`,\n      description:');
      fixed = fixed.replace(/}'\`,\s*author:/g, '}\'`,\n      author:');
      fixed = fixed.replace(/}'\`,\s*category:/g, '}\'`,\n      category:');
      fixed = fixed.replace(/}'\`,\s*answer:/g, '}\'`,\n      answer:');

      // Fix unterminated strings
      fixed = fixed.replace(/efficiency and cost savings\.",\s*'/g, 'efficiency and cost savings.\",\n      \'');
      fixed = fixed.replace(/AI and automation capabilities\.",\s*'/g, 'AI and automation capabilities.\",\n      \'');
      fixed = fixed.replace(/provide a customized solution\.''/g, 'provide a customized solution.\'');
      
      // Fix missing commas in arrays
      fixed = fixed.replace(/Master\\'s degree in Computer Science or related field',\s*'/g, 
        'Master\\'s degree in Computer Science or related field\',\n        \'');

      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed);
        this.log(`✅ Fixed ${path.basename(filePath)}`);
        this.fixedCount++;
        return true}
      return false} catch (error) {
      this.log(`❌ Error fixing ${path.basename(filePath)}: ${error.message}`);
      return false}
  }

  async run() {
    this.log('🔧 Fixing critical syntax errors...');

    const files = [
      'pages/api.tsx',
      'pages/careers.tsx', 
      'pages/case-studies.tsx',
      'pages/help.tsx',
      'pages/press.tsx'
    ];

    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        await this.fixFile(filePath)}
    }

    this.log(`✅ Fixed ${this.fixedCount} files`)}
}

new SimpleSyntaxFixer().run().catch(console.error);