#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * SEO Optimization script for Zion Tech Group website
 * Analyzes and optimizes SEO elements, meta tags, and structured data
 */

class SEOOptimizer {
  constructor() {
    this.appPath = path.join(process.cwd(), 'app');
    this.reportPath = path.join(process.cwd(), 'seo-report.json');
    this.issues = [];
    this.recommendations = [];
  }

  async analyze() {
    console.log('🔍 Analyzing SEO optimization...');
    
    try {
      // Analyze main layout
      await this.analyzeLayout();
      
      // Analyze main page
      await this.analyzeMainPage();
      
      // Check for missing pages
      await this.checkMissingPages();
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Save report
      await this.saveReport();
      
      // Display results
      this.displayResults();
      
    } catch (error) {
      console.error('❌ SEO analysis failed:', error.message);
      process.exit(1);
    }
  }

  async analyzeLayout() {
    const layoutPath = path.join(this.appPath, 'layout.tsx');
    
    if (!fs.existsSync(layoutPath)) {
      this.issues.push({
        type: 'error',
        file: 'layout.tsx',
        message: 'Layout file not found',
        suggestion: 'Create a proper layout.tsx file'
      });
      return;
    }

    const content = fs.readFileSync(layoutPath, 'utf8');
    
    // Check for essential meta tags
    const essentialTags = [
      'description',
      'keywords',
      'author',
      'viewport',
      'robots',
      'canonical'
    ];

    essentialTags.forEach(tag => {
      if (!content.includes(`name="${tag}"`) && !content.includes(`property="${tag}"`)) {
        this.issues.push({
          type: 'warning',
          file: 'layout.tsx',
          message: `Missing essential meta tag: ${tag}`,
          suggestion: `Add <meta name="${tag}" content="..."> to improve SEO`
        });
      }
    });

    // Check for Open Graph tags
    const ogTags = ['og:title', 'og:description', 'og:image', 'og:url'];
    ogTags.forEach(tag => {
      if (!content.includes(tag)) {
        this.issues.push({
          type: 'warning',
          file: 'layout.tsx',
          message: `Missing Open Graph tag: ${tag}`,
          suggestion: `Add <meta property="${tag}" content="..."> for better social sharing`
        });
      }
    });

    // Check for structured data
    if (!content.includes('application/ld+json')) {
      this.issues.push({
        type: 'warning',
        file: 'layout.tsx',
        message: 'Missing structured data',
        suggestion: 'Add JSON-LD structured data for better search engine understanding'
      });
    }
  }

  async analyzeMainPage() {
    const pagePath = path.join(this.appPath, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      this.issues.push({
        type: 'error',
        file: 'page.tsx',
        message: 'Main page file not found',
        suggestion: 'Create a proper page.tsx file'
      });
      return;
    }

    const content = fs.readFileSync(pagePath, 'utf8');
    
    // Check for heading structure
    const headingCounts = {
      h1: (content.match(/<h1/g) || []).length,
      h2: (content.match(/<h2/g) || []).length,
      h3: (content.match(/<h3/g) || []).length
    };

    if (headingCounts.h1 === 0) {
      this.issues.push({
        type: 'error',
        file: 'page.tsx',
        message: 'Missing H1 heading',
        suggestion: 'Add a single H1 heading for the main page title'
      });
    } else if (headingCounts.h1 > 1) {
      this.issues.push({
        type: 'warning',
        file: 'page.tsx',
        message: 'Multiple H1 headings found',
        suggestion: 'Use only one H1 per page for better SEO'
      });
    }

    // Check for alt attributes on images
    const imgTags = content.match(/<img[^>]*>/g) || [];
    imgTags.forEach((img, index) => {
      if (!img.includes('alt=')) {
        this.issues.push({
          type: 'warning',
          file: 'page.tsx',
          message: `Image ${index + 1} missing alt attribute`,
          suggestion: 'Add descriptive alt attributes to all images'
        });
      }
    });

    // Check for internal links
    const internalLinks = content.match(/href="\/[^"]*"/g) || [];
    if (internalLinks.length < 3) {
      this.issues.push({
        type: 'info',
        file: 'page.tsx',
        message: 'Few internal links found',
        suggestion: 'Add more internal links to improve site navigation and SEO'
      });
    }
  }

  async checkMissingPages() {
    const essentialPages = [
      'about',
      'contact',
      'privacy',
      'terms',
      'sitemap'
    ];

    essentialPages.forEach(page => {
      const pagePath = path.join(this.appPath, page, 'page.tsx');
      if (!fs.existsSync(pagePath)) {
        this.issues.push({
          type: 'warning',
          file: `${page}/page.tsx`,
          message: `Missing essential page: ${page}`,
          suggestion: `Create ${page}/page.tsx for better user experience and SEO`
        });
      }
    });
  }

  generateRecommendations() {
    // Performance recommendations
    this.recommendations.push({
      type: 'performance',
      title: 'Implement lazy loading',
      description: 'Add lazy loading to images and components below the fold',
      priority: 'high'
    });

    this.recommendations.push({
      type: 'performance',
      title: 'Optimize images',
      description: 'Use WebP format and proper sizing for all images',
      priority: 'high'
    });

    // SEO recommendations
    this.recommendations.push({
      type: 'seo',
      title: 'Add breadcrumbs',
      description: 'Implement breadcrumb navigation for better user experience',
      priority: 'medium'
    });

    this.recommendations.push({
      type: 'seo',
      title: 'Create XML sitemap',
      description: 'Generate and submit XML sitemap to search engines',
      priority: 'high'
    });

    this.recommendations.push({
      type: 'seo',
      title: 'Add FAQ section',
      description: 'Include frequently asked questions to target long-tail keywords',
      priority: 'medium'
    });

    // Accessibility recommendations
    this.recommendations.push({
      type: 'accessibility',
      title: 'Improve color contrast',
      description: 'Ensure all text meets WCAG AA contrast requirements',
      priority: 'high'
    });

    this.recommendations.push({
      type: 'accessibility',
      title: 'Add skip links',
      description: 'Implement skip navigation links for keyboard users',
      priority: 'medium'
    });
  }

  async saveReport() {
    const report = {
      timestamp: new Date().toISOString(),
      issues: this.issues,
      recommendations: this.recommendations,
      summary: {
        totalIssues: this.issues.length,
        criticalIssues: this.issues.filter(i => i.type === 'error').length,
        warnings: this.issues.filter(i => i.type === 'warning').length,
        info: this.issues.filter(i => i.type === 'info').length
      }
    };

    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
  }

  displayResults() {
    console.log('\n📊 SEO Analysis Results');
    console.log('========================');
    
    console.log(`\n📋 Issues Found: ${this.issues.length}`);
    this.issues.forEach(issue => {
      const icon = issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : 'ℹ️';
      console.log(`  ${icon} ${issue.file}: ${issue.message}`);
      console.log(`     → ${issue.suggestion}`);
    });

    console.log(`\n💡 Recommendations:`);
    this.recommendations.forEach(rec => {
      const priorityIcon = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
      console.log(`  ${priorityIcon} [${rec.type.toUpperCase()}] ${rec.title}`);
      console.log(`     ${rec.description}`);
    });

    console.log(`\n📄 Full report saved to: ${this.reportPath}`);
  }
}

// Run the SEO optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new SEOOptimizer();
  optimizer.analyze().catch(console.error);
}

export default SEOOptimizer;