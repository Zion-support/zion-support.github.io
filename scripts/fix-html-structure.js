#!/usr/bin/env node

/**
 * Fix HTML Structure Script
 * Automatically fixes HTML doctype and other structural issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class HTMLStructureFixer {
  constructor() {
    this.outDir = path.join(__dirname, '..', 'out');
    this.fixes = [];
  }

  async fixHTMLStructure() {
    console.log('🔧 Fixing HTML structure issues...');
    
    try {
      // Fix HTML files
      await this.fixHTMLFiles();
      
      // Generate report
      await this.generateFixReport();
      
      console.log('✅ HTML structure fixed successfully');
    } catch (error) {
      console.error('❌ Failed to fix HTML structure:', error.message);
      process.exit(1);
    }
  }

  async fixHTMLFiles() {
    const htmlFiles = this.findHTMLFiles(this.outDir);
    
    for (const file of htmlFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix missing DOCTYPE
      if (!content.includes('<!DOCTYPE html>')) {
        content = '<!DOCTYPE html>\n' + content;
        modified = true;
        this.fixes.push(`Added DOCTYPE to ${path.basename(file)}`);
      }
      
      // Fix missing lang attribute
      if (content.includes('<html>') && !content.includes('lang=')) {
        content = content.replace('<html>', '<html lang="en">');
        modified = true;
        this.fixes.push(`Added lang attribute to ${path.basename(file)}`);
      }
      
      // Fix missing meta description
      if (!content.includes('name="description"')) {
        const titleMatch = content.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1] : 'Zion Holdings';
        const metaDescription = `    <meta name="description" content="${title} - Advanced AI and technology solutions">`;
        
        if (content.includes('<head>')) {
          content = content.replace('<head>', `<head>\n${metaDescription}`);
          modified = true;
          this.fixes.push(`Added meta description to ${path.basename(file)}`);
        }
      }
      
      // Fix missing H1 tags
      if (!content.includes('<h1>')) {
        const titleMatch = content.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1] : 'Zion Holdings';
        
        if (content.includes('<body>')) {
          content = content.replace('<body>', `<body>\n    <h1>${title}</h1>`);
          modified = true;
          this.fixes.push(`Added H1 tag to ${path.basename(file)}`);
        }
      }
      
      // Fix missing Open Graph tags
      if (!content.includes('property="og:title"')) {
        const titleMatch = content.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1] : 'Zion Holdings';
        
        const ogTags = `    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${title} - Advanced AI and technology solutions">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://zion.app">
    <meta property="og:image" content="https://zion.app/og-image.svg">`;
        
        if (content.includes('<head>')) {
          content = content.replace('<head>', `<head>\n${ogTags}`);
          modified = true;
          this.fixes.push(`Added Open Graph tags to ${path.basename(file)}`);
        }
      }
      
      // Fix missing structured data
      if (!content.includes('application/ld+json')) {
        const titleMatch = content.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1] : 'Zion Holdings';
        
        const structuredData = `    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "${title}",
      "description": "${title} - Advanced AI and technology solutions",
      "url": "https://zion.app",
      "logo": "https://zion.app/og-image.svg"
    }
    </script>`;
        
        if (content.includes('</head>')) {
          content = content.replace('</head>', `${structuredData}\n</head>`);
          modified = true;
          this.fixes.push(`Added structured data to ${path.basename(file)}`);
        }
      }
      
      // Fix missing meta keywords
      if (!content.includes('name="keywords"')) {
        const metaKeywords = `    <meta name="keywords" content="AI, artificial intelligence, quantum computing, space technology, enterprise solutions, automation">`;
        
        if (content.includes('<head>')) {
          content = content.replace('<head>', `<head>\n${metaKeywords}`);
          modified = true;
          this.fixes.push(`Added meta keywords to ${path.basename(file)}`);
        }
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed structure in ${path.basename(file)}`);
      }
    }
  }

  findHTMLFiles(dir) {
    const files = [];
    
    const findInDir = (dirPath) => {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        
        if (item.isDirectory()) {
          findInDir(fullPath);
        } else if (item.isFile() && item.name.endsWith('.html')) {
          files.push(fullPath);
        }
      }
    };
    
    findInDir(dir);
    return files;
  }

  async generateFixReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixes: this.fixes,
      summary: {
        totalFixes: this.fixes.length,
        doctypeFixes: this.fixes.filter(fix => fix.includes('DOCTYPE')).length,
        langFixes: this.fixes.filter(fix => fix.includes('lang attribute')).length,
        metaDescriptionFixes: this.fixes.filter(fix => fix.includes('meta description')).length,
        h1Fixes: this.fixes.filter(fix => fix.includes('H1 tag')).length,
        ogFixes: this.fixes.filter(fix => fix.includes('Open Graph')).length,
        structuredDataFixes: this.fixes.filter(fix => fix.includes('structured data')).length,
        keywordsFixes: this.fixes.filter(fix => fix.includes('meta keywords')).length,
      }
    };

    // Save report
    const reportPath = path.join(__dirname, '..', 'html-structure-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Log summary
    console.log('\n📊 HTML Structure Fix Report:');
    console.log(`📄 DOCTYPE fixes: ${report.summary.doctypeFixes}`);
    console.log(`🌐 Lang attribute fixes: ${report.summary.langFixes}`);
    console.log(`📝 Meta description fixes: ${report.summary.metaDescriptionFixes}`);
    console.log(`🏷️  H1 tag fixes: ${report.summary.h1Fixes}`);
    console.log(`🔗 Open Graph fixes: ${report.summary.ogFixes}`);
    console.log(`📊 Structured data fixes: ${report.summary.structuredDataFixes}`);
    console.log(`🔑 Keywords fixes: ${report.summary.keywordsFixes}`);
    console.log(`✅ Total fixes: ${report.summary.totalFixes}`);
  }
}

// Run if called directly
if (import.meta.url === `file://${__filename}`) {
  const fixer = new HTMLStructureFixer();
  fixer.fixHTMLStructure().catch(console.error);
}

export default HTMLStructureFixer;