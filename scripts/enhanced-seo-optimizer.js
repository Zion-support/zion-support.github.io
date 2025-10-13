/**
 * Enhanced SEO Optimizer
 * Implements advanced SEO optimizations for the Zion Tech Group website
 */

const fs = require('fs');
const path = require('path');

class SEOOptimizer {
  constructor() {
    this.optimizations = [];
    this.metrics = {
      pagesAnalyzed: 0,
      metaTagsFixed: 0,
      structuredDataAdded: 0,
      performanceScore: 0,;
};
  }

  async optimize() {
    console.log('🔍 Starting enhanced SEO optimizations...');
    
    try {
      await this.analyzePages();
      await this.optimizeMetaTags();
      await this.addStructuredData();
      await this.optimizeImages();
      await this.generateSEOReport();
      
      console.log('✅ Enhanced SEO optimizations completed successfully!');
    } catch (error) {
      console.error('❌ SEO optimization failed:', error);
    }
  }

  async analyzePages() {
    console.log('📄 Analyzing pages for SEO...');
    
    const appPath = path.join(__dirname, '../app');
    if (!fs.existsSync(appPath)) {
      console.log('⚠️  App folder not found, skipping page analysis');
      return;
    }

    const pages = this.findPageFiles(appPath);
    this.metrics.pagesAnalyzed = pages.length;

    pages.forEach(page => {
      const analysis = this.analyzePage(page);
      if (analysis.issues.length > 0) {
        this.optimizations.push({
          type: 'page',
          file: page,
          issues: analysis.issues,
          recommendations: analysis.recommendations,;
});
      }
    });

    console.log(`📄 Analyzed ${pages.length} pages`);
  }

  async optimizeMetaTags() {
    console.log('🏷️  Optimizing meta tags...');
    
    const appPath = path.join(__dirname, '../app');
    const components = this.findComponentFiles(appPath);
    let metaOptimizations = 0;

    components.forEach(component => {
      const content = fs.readFileSync(component, 'utf8');
      
      // Check for missing meta tags
      const issues = this.findMetaTagIssues(content);
      if (issues.length > 0) {
        this.optimizations.push({
          type: 'meta',
          file: component,
          issues: issues,
          recommendations: this.generateMetaRecommendations(issues),;
});
        metaOptimizations++;
      }
    });

    this.metrics.metaTagsFixed = metaOptimizations;
    console.log(`🏷️  Found ${metaOptimizations} components with meta tag issues`);
  }

  async addStructuredData() {
    console.log('📊 Adding structured data...');
    
    const structuredData = this.generateStructuredData();
    const structuredDataPath = path.join(__dirname, '../app/components/StructuredData.tsx');
    
    fs.writeFileSync(structuredDataPath, structuredData);
    this.metrics.structuredDataAdded = 1;
    
    console.log('📊 Structured data component created');
  }

  async optimizeImages() {
    console.log('🖼️  Optimizing images for SEO...');
    
    const appPath = path.join(__dirname, '../app');
    const imageFiles = this.findImageFiles(appPath);
    let imageOptimizations = 0;

    imageFiles.forEach(image => {
      const content = fs.readFileSync(image, 'utf8');
      const issues = this.findImageSEOIssues(content);
      
      if (issues.length > 0) {
        this.optimizations.push({
          type: 'image',
          file: image,
          issues: issues,
          recommendations: this.generateImageRecommendations(issues),;
});
        imageOptimizations++;
      }
    });

    console.log(`🖼️  Found ${imageOptimizations} images with SEO issues`);
  }

  findPageFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findPageFiles(fullPath, files);
      } else if (item === 'page.tsx') {
        files.push(path.relative(dir, fullPath));
      }
    });
    
    return files;
  }

  findComponentFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findComponentFiles(fullPath, files);
      } else if (item.endsWith('.tsx') && !item.includes('page.tsx')) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  findImageFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findImageFiles(fullPath, files);
      } else if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(item)) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  analyzePage(pagePath) {
    const content = fs.readFileSync(pagePath, 'utf8');
    const issues = [];
    const recommendations = [];

    // Check for title tag
    if (!content.includes('<title>') && !content.includes('title:')) {
      issues.push('Missing title tag');
      recommendations.push('Add a descriptive title tag');
    }

    // Check for meta description
    if (!content.includes('description') && !content.includes('meta name="description"')) {
      issues.push('Missing meta description');
      recommendations.push('Add a meta description tag');
    }

    // Check for heading structure
    const h1Count = (content.match(/<h1/g) || []).length;
    if (h1Count === 0) {
      issues.push('Missing H1 tag');
      recommendations.push('Add an H1 tag for the main heading');
    } else if (h1Count > 1) {
      issues.push('Multiple H1 tags');
      recommendations.push('Use only one H1 tag per page');
    }

    // Check for alt attributes on images
    const imgCount = (content.match(/<img/g) || []).length;
    const altCount = (content.match(/alt=/g) || []).length;
    if (imgCount > 0 && altCount < imgCount) {
      issues.push('Missing alt attributes on images');
      recommendations.push('Add alt attributes to all images');
    }

    return { issues, recommendations };
  }

  findMetaTagIssues(content) {
    const issues = [];

    // Check for missing Open Graph tags
    if (!content.includes('og:title')) {
      issues.push('Missing og:title');
    }
    if (!content.includes('og:description')) {
      issues.push('Missing og:description');
    }
    if (!content.includes('og:image')) {
      issues.push('Missing og:image');
    }

    // Check for missing Twitter Card tags
    if (!content.includes('twitter:card')) {
      issues.push('Missing twitter:card');
    }
    if (!content.includes('twitter:title')) {
      issues.push('Missing twitter:title');
    }

    // Check for missing canonical URL
    if (!content.includes('canonical')) {
      issues.push('Missing canonical URL');
    }

    return issues;
  }

  generateMetaRecommendations(issues) {
    const recommendations = [];

    if (issues.includes('Missing og:title')) {
      recommendations.push('Add Open Graph title tag');
    }
    if (issues.includes('Missing og:description')) {
      recommendations.push('Add Open Graph description tag');
    }
    if (issues.includes('Missing og:image')) {
      recommendations.push('Add Open Graph image tag');
    }
    if (issues.includes('Missing twitter:card')) {
      recommendations.push('Add Twitter Card meta tag');
    }
    if (issues.includes('Missing canonical URL')) {
      recommendations.push('Add canonical URL link tag');
    }

    return recommendations;
  }

  findImageSEOIssues(content) {
    const issues = [];

    // Check for missing alt attributes
    if (content.includes('<img') && !content.includes('alt=')) {
      issues.push('Missing alt attributes');
    }

    // Check for missing width/height attributes
    if (content.includes('<img') && (!content.includes('width=') || !content.includes('height='))) {
      issues.push('Missing width/height attributes');
    }

    return issues;
  }

  generateImageRecommendations(issues) {
    const recommendations = [];

    if (issues.includes('Missing alt attributes')) {
      recommendations.push('Add descriptive alt attributes to all images');
    }
    if (issues.includes('Missing width/height attributes')) {
      recommendations.push('Add width and height attributes to prevent layout shift');
    }

    return recommendations;
  }

  generateStructuredData() {
    return `'use client'
import React from 'react'

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article'
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ 
  type = 'Organization', 
  data ;
}) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,;
};

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          name: "Zion Tech Group",
          description: "Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.",
          url: "https://ziontechgroup.com",
          logo: "https://ziontechgroup.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567",
            contactType: "customer service",
            email: "info@ziontechgroup.com";
},
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US";
},
          sameAs: [
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup"
          ],
          ...data;
};

      case 'WebSite':
        return {
          ...baseData,
          name: "Zion Tech Group",
          url: "https://ziontechgroup.com",
          description: "Advanced AI and IT Solutions Website",
          potentialAction: {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string";
},
          ...data;
};

      case 'Service':
        return {
          ...baseData,
          name: data?.name || "AI Solutions",
          description: data?.description || "Advanced artificial intelligence solutions for business automation and optimization.",
          provider: {
            "@type": "Organization",
            name: "Zion Tech Group";
},
          areaServed: "Worldwide",
          ...data;
};

      default:
        return { ...baseData, ...data };
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2);
}}
    />;
);
};

export default StructuredData;
`;
  }

  async generateSEOReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      optimizations: this.optimizations,
      summary: {
        totalIssues: this.optimizations.reduce((sum, opt) => sum + (opt.issues?.length || 0), 0),
        pagesWithIssues: this.optimizations.filter(opt => opt.type === 'page').length,
        seoScore: this.calculateSEOScore(),;
},;
};

    const reportPath = path.join(__dirname, '../seo-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 SEO report generated:', reportPath);
    console.log(`📈 Total SEO issues found: ${report.summary.totalIssues}`);
    console.log(`📄 Pages with issues: ${report.summary.pagesWithIssues}`);
    console.log(`🎯 SEO Score: ${report.summary.seoScore}/100`);
  }

  calculateSEOScore() {
    const totalIssues = this.optimizations.reduce((sum, opt) => sum + (opt.issues?.length || 0), 0);
    const maxScore = 100;
    const penaltyPerIssue = 5;
    const score = Math.max(0, maxScore - (totalIssues * penaltyPerIssue));
    return Math.round(score);
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.optimize();
}

module.exports = SEOOptimizer;