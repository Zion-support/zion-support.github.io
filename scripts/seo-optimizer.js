import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// SEO optimization script
class SEOOptimizer {
  constructor() {
    this.optimizations = [];
    this.issues = [];
  }

  // Check meta tags
  async checkMetaTags() {
    console.log('🏷️  Checking meta tags...');
    
    const htmlFiles = await glob('dist/**/*.html');
    
    for (const file of htmlFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for essential meta tags
        const hasTitle = content.includes('<title>');
        const hasDescription = content.includes('name="description"');
        const hasViewport = content.includes('name="viewport"');
        const hasCharset = content.includes('charset=');
        const hasOgTitle = content.includes('property="og:title"');
        const hasOgDescription = content.includes('property="og:description"');
        const hasOgImage = content.includes('property="og:image"');
        const hasTwitterCard = content.includes('name="twitter:card"');
        
        if (!hasTitle) this.issues.push(`${file}: Missing title tag`);
        if (!hasDescription) this.issues.push(`${file}: Missing meta description`);
        if (!hasViewport) this.issues.push(`${file}: Missing viewport meta tag`);
        if (!hasCharset) this.issues.push(`${file}: Missing charset declaration`);
        if (!hasOgTitle) this.issues.push(`${file}: Missing Open Graph title`);
        if (!hasOgDescription) this.issues.push(`${file}: Missing Open Graph description`);
        if (!hasOgImage) this.issues.push(`${file}: Missing Open Graph image`);
        if (!hasTwitterCard) this.issues.push(`${file}: Missing Twitter card meta`);
        
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`   ✅ Checked ${htmlFiles.length} HTML files`);
    this.optimizations.push('Meta tags validation');
  }

  // Check heading structure
  async checkHeadingStructure() {
    console.log('📝 Checking heading structure...');
    
    const tsxFiles = await glob('src/**/*.tsx', {
      ignore: ['**/node_modules/**', '**/dist/**']
    });

    let headingIssues = 0;
    for (const file of tsxFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for h1 tags
        const h1Count = (content.match(/<h1/g) || []).length;
        const h2Count = (content.match(/<h2/g) || []).length;
        const h3Count = (content.match(/<h3/g) || []).length;
        
        if (h1Count === 0) {
          this.issues.push(`${file}: No h1 tag found`);
          headingIssues++;
        }
        if (h1Count > 1) {
          this.issues.push(`${file}: Multiple h1 tags found (${h1Count})`);
          headingIssues++;
        }
        
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`   ✅ Checked ${tsxFiles.length} TSX files`);
    if (headingIssues > 0) {
      console.log(`   ⚠️  Found ${headingIssues} heading structure issues`);
    }
    this.optimizations.push('Heading structure validation');
  }

  // Check alt attributes
  async checkAltAttributes() {
    console.log('🖼️  Checking alt attributes...');
    
    const tsxFiles = await glob('src/**/*.tsx', {
      ignore: ['**/node_modules/**', '**/dist/**']
    });

    let altIssues = 0;
    for (const file of tsxFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Find img tags without alt attributes
        const imgTags = content.match(/<img[^>]*>/g) || [];
        for (const imgTag of imgTags) {
          if (!imgTag.includes('alt=')) {
            this.issues.push(`${file}: Image without alt attribute`);
            altIssues++;
          }
        }
        
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`   ✅ Checked ${tsxFiles.length} TSX files`);
    if (altIssues > 0) {
      console.log(`   ⚠️  Found ${altIssues} missing alt attributes`);
    }
    this.optimizations.push('Alt attributes validation');
  }

  // Check internal links
  async checkInternalLinks() {
    console.log('🔗 Checking internal links...');
    
    const tsxFiles = await glob('src/**/*.tsx', {
      ignore: ['**/node_modules/**', '**/dist/**']
    });

    let linkCount = 0;
    for (const file of tsxFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Count internal links
        const internalLinks = content.match(/href=["']\/(?!\/)[^"']*["']/g) || [];
        linkCount += internalLinks.length;
        
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`   ✅ Found ${linkCount} internal links`);
    this.optimizations.push('Internal links analysis');
  }

  // Generate SEO report
  generateReport() {
    console.log('\n📊 SEO Optimization Report');
    console.log('');
    console.log(`✅ Optimizations applied: ${this.optimizations.length}`);
    this.optimizations.forEach((opt, index) => {
      console.log(`   ${index + 1}. ${opt}`);
    });
    
    if (this.issues.length > 0) {
      console.log(`\n⚠️  Issues found: ${this.issues.length}`);
      this.issues.slice(0, 10).forEach((issue, index) => {
        console.log(`   ${index + 1}. ${issue}`);
      });
      if (this.issues.length > 10) {
        console.log(`   ... and ${this.issues.length - 10} more issues`);
      }
    } else {
      console.log('\n✅ No SEO issues found!');
    }
    
    console.log('\n🚀 SEO Recommendations:');
    console.log('   1. Add structured data (JSON-LD)');
    console.log('   2. Implement breadcrumb navigation');
    console.log('   3. Add canonical URLs');
    console.log('   4. Optimize page loading speed');
    console.log('   5. Use descriptive URLs');
    console.log('   6. Add sitemap.xml');
    console.log('   7. Implement robots.txt');
    console.log('   8. Use semantic HTML elements');
    console.log('   9. Add social media meta tags');
    console.log('   10. Implement schema markup');
  }

  // Run all optimizations
  async run() {
    console.log('🔍 Starting SEO optimization...\n');
    
    try {
      await this.checkMetaTags();
      await this.checkHeadingStructure();
      await this.checkAltAttributes();
      await this.checkInternalLinks();
      this.generateReport();
      
      console.log('\n✅ SEO optimization completed!');
    } catch (error) {
      console.error('❌ SEO optimization failed:', error.message);
    }
  }
}

// Run the optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new SEOOptimizer();
  optimizer.run();
}

export default SEOOptimizer;