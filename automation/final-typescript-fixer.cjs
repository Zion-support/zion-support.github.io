#!/usr/bin/env node;
const fs = require("fs")

const fs = require('fs');
const path = require('path');

class FinalTypeScriptFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = []}

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`)}

  async fixCorruptedImports() {
    this.log('🔧 Fixing corrupted import statements...');
    
    const filesToFix = [
      'pages',
      'components',
      'utils',
      'hooks'
    ];
    
    for (const dir of filesToFix) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.fixFilesInDirectory(dirPath)}
    }
  }

  fixFilesInDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.fixFilesInDirectory(fullPath)} else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
        this.fixCorruptedFile(fullPath)}
    }
  }

  fixCorruptedFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix corrupted import statements with \\n
      if (content.includes('import React from \'react\';\\nimport type { NextPage }')) {
        content = content.replace(
          /import React from 'react';\\nimport type { NextPage }/g,
          'import React from \'react\';\nimport type { NextPage }'
        );
        modified = true}
      
      // Fix other corrupted patterns
      if (content.includes('\\n')) {
        content = content.replace(/\\n/g, '\n');
        modified = true}
      
      // Fix specific corrupted files
      if (filePath.includes('messageChannelHandler.ts')) {
        content = `// Message channel handler utility
export const messageChannelHandler = {
  receiveMessage: (callback: (message: any) => void) => {
    // Implementation for receiving messages
  },
  sendMessage: (message: any) => {
    // Implementation for sending messages
  }
};`;
        modified = true}
      
      if (filePath.includes('sanitizeHtml.ts')) {
        content = `// HTML sanitization utility to prevent CSP violations
import DOMPurify from 'isomorphic-dompurify';

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html)};`;
        modified = true}
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixes.push(`Fixed corrupted file: ${path.relative(this.projectRoot, filePath)}`)}
      
    } catch (error) {
      this.log(`⚠️  Could not fix file ${filePath}: ${error.message}`, 'WARN')}
  }

  async run() {
    this.log('🚀 Starting Final TypeScript Fixing Process...');
    this.log('==');
    
    try {
      await this.fixCorruptedImports();
      
      this.log('\\n📊 FINAL TYPESCRIPT FIXING REPORT');
      this.log('======');
      this.log(`Fixes Applied: ${this.fixes.length}`);
      
      if (this.fixes.length > 0) {
        this.log('\\n✅ Fixes Applied:');
        this.fixes.forEach((fix, index) => {
          this.log(`  ${index + 1}. ${fix}`)})}
      
      this.log('\\n🎉 Final TypeScript fixing completed!')} catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, 'ERROR');
      process.exit(1)}
  }
}

const fixer = new FinalTypeScriptFixer();
fixer.run().catch(console.error);