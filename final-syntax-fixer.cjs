#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class FinalSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {'INFO': 'ℹ️', 'SUCCESS': '✅', 'ERROR': '❌', 'WARNING': '⚠️', 'PROGRESS': '🔄'}[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixESLintConfig() {
    // Remove the .js file and ensure we have .cjs
    const jsPath = path.join(this.projectRoot, 'eslint.config.js');
    const cjsPath = path.join(this.projectRoot, 'eslint.config.cjs');
    
    if (fs.existsSync(jsPath)) {
      fs.unlinkSync(jsPath);
      this.log('Removed eslint.config.js', 'SUCCESS');
    }
    
    if (!fs.existsSync(cjsPath)) {
      const config = `module.exports = {
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended"
  ],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "prefer-const": "warn"
  },
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  }
};`;
      fs.writeFileSync(cjsPath, config);
      this.log('Created eslint.config.cjs', 'SUCCESS');
    }
  }

  fixDesignMapFile() {
    const filePath = path.join(this.projectRoot, 'pages/design-map.tsx');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix malformed JSX elements
      content = content.replace(/<(\w+)\s*\/>/g, '<$1 />');
      content = content.replace(/<(\w+)\s*\/\s*>/g, '<$1 />');
      
      // Fix specific malformed elements
      content = content.replace(/<h1 className="text-2xl font-semibold" \/>Zion OS Design Map<\/h1>/g, 
        '<h1 className="text-2xl font-semibold">Zion OS Design Map</h1>');
      
      content = content.replace(/<section className="space-y-6" \/>/g, '<section className="space-y-6">');
      content = content.replace(/<div className="flex items-center justify-between" \/>/g, '<div className="flex items-center justify-between">');
      content = content.replace(/<div className="flex gap-2" \/>/g, '<div className="flex gap-2">');
      
      // Fix malformed anchor tags
      content = content.replace(/<a;\s*href="([^"]+)"/g, '<a href="$1"');
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed design-map.tsx', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing design-map.tsx: ${error.message}`, 'ERROR');
    }
  }

  fixPricingFile() {
    const filePath = path.join(this.projectRoot, 'pages/pricing.tsx');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix malformed import statements
      content = content.replace(/getServicesByCategory,\s*\}/g, 'getServicesByCategory,');
      content = content.replace(/getPopularServices,\s*\}/g, 'getPopularServices,');
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed pricing.tsx', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing pricing.tsx: ${error.message}`, 'ERROR');
    }
  }

  fixPrivacyFile() {
    const filePath = path.join(this.projectRoot, 'pages/privacy.tsx');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix malformed JSX
      content = content.replace(/<MainLayout;/g, '<MainLayout');
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed privacy.tsx', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing privacy.tsx: ${error.message}`, 'ERROR');
    }
  }

  fixSpaceTechFile() {
    const filePath = path.join(this.projectRoot, 'pages/space-tech.tsx');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix malformed JSX
      content = content.replace(/<Layout \/>/g, '<Layout>');
      content = content.replace(/<Head \/>/g, '<Head>');
      content = content.replace(/<title \/>Space Technology \| Zion Tech Group<\/title>/g, 
        '<title>Space Technology | Zion Tech Group</title>');
      content = content.replace(/<meta;/g, '<meta');
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed space-tech.tsx', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing space-tech.tsx: ${error.message}`, 'ERROR');
    }
  }

  fixTeamFile() {
    const filePath = path.join(this.projectRoot, 'pages/team.tsx');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix malformed import statements
      content = content.replace(/Code,\s*\}/g, 'Code,');
      content = content.replace(/Shield,\s*\}/g, 'Shield,');
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed team.tsx', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing team.tsx: ${error.message}`, 'ERROR');
    }
  }

  fixJestTestFile() {
    const filePath = path.join(this.projectRoot, 'src/__tests__/App.test.jsx');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix malformed Jest mock
      content = content.replace(/jest\.mock\('\.\.\/pages\/Index', \(\) => \{\s*return function MockIndex\(\) \{\s*return <div data-testid='index-page' \/>Index Page<\/div>;\s*\}\s*\}\);';/g, 
        `jest.mock('../pages/Index', () => {
  return function MockIndex() {
    return <div data-testid='index-page'>Index Page</div>;
  };
});`);
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed App.test.jsx', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing App.test.jsx: ${error.message}`, 'ERROR');
    }
  }

  fixAllFiles() {
    this.log('🔧 Starting final syntax fixing...');
    
    this.fixESLintConfig();
    this.fixDesignMapFile();
    this.fixPricingFile();
    this.fixPrivacyFile();
    this.fixSpaceTechFile();
    this.fixTeamFile();
    this.fixJestTestFile();
    
    this.log(`\n📊 Final syntax fixer completed`);
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    
    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Fixed files:');
      this.fixedFiles.forEach(file => {
        this.log(`  - ${file}`);
      });
    }
  }
}

const fixer = new FinalSyntaxFixer();
fixer.fixAllFiles();

module.exports = FinalSyntaxFixer;