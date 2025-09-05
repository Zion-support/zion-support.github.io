const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const SEO_LOG_PATH = path.join(process.cwd(), 'seo-report.json');

async function runSEOOptimization() {
  console.log('🔍 Running SEO optimization...');
  
  try {
    // Check for meta tags
    const metaTags = await checkMetaTags();
    
    // Check for alt attributes
    const altAttributes = await checkAltAttributes();
    
    // Check for heading structure
    const headingStructure = await checkHeadingStructure();
    
    // Check for internal links
    const internalLinks = await checkInternalLinks();
    
    // Check for page titles
    const pageTitles = await checkPageTitles();
    
    const seoReport = {
      timestamp: new Date().toISOString(),
      metaTags: metaTags,
      altAttributes: altAttributes,
      headingStructure: headingStructure,
      internalLinks: internalLinks,
      pageTitles: pageTitles,
      recommendations: []
    };

    // Generate SEO recommendations
    if (metaTags.missingDescription > 0) {
      seoReport.recommendations.push('Add meta descriptions to pages missing them');
    }
    
    if (altAttributes.missing > 0) {
      seoReport.recommendations.push('Add alt attributes to images for better accessibility');
    }
    
    if (headingStructure.issues.length > 0) {
      seoReport.recommendations.push('Fix heading hierarchy - use h1, h2, h3 in proper order');
    }
    
    if (internalLinks.count < 5) {
      seoReport.recommendations.push('Add more internal links to improve site navigation');
    }
    
    if (pageTitles.duplicates.length > 0) {
      seoReport.recommendations.push('Fix duplicate page titles');
    }

    fs.mkdirSync(path.dirname(SEO_LOG_PATH), { recursive: true });
    fs.writeFileSync(SEO_LOG_PATH, JSON.stringify(seoReport, null, 2));
    
    console.log('✅ SEO optimization completed');
    console.log(`📄 Pages with meta descriptions: ${metaTags.withDescription}/${metaTags.total}`);
    console.log(`🖼️  Images with alt attributes: ${altAttributes.withAlt}/${altAttributes.total}`);
    console.log(`🔗 Internal links found: ${internalLinks.count}`);
    
    if (seoReport.recommendations.length > 0) {
      console.log('💡 SEO recommendations:');
      seoReport.recommendations.forEach(rec => console.log(`   - ${rec}`));
    }

  } catch (error) {
    console.error('❌ SEO optimization failed:', error);
  }
}

async function checkMetaTags() {
  return new Promise((resolve) => {
    exec('find pages -name "*.tsx" -o -name "*.jsx" | xargs grep -l "meta.*description" | wc -l', (error, stdout) => {
      const withDescription = parseInt(stdout.trim()) || 0;
      exec('find pages -name "*.tsx" -o -name "*.jsx" | wc -l', (error2, stdout2) => {
        const total = parseInt(stdout2.trim()) || 0;
        resolve({
          withDescription,
          total,
          missingDescription: total - withDescription
        });
      });
    });
  });
}

async function checkAltAttributes() {
  return new Promise((resolve) => {
    exec('find pages -name "*.tsx" -o -name "*.jsx" | xargs grep -c "alt=" | awk \'{sum += $1} END {print sum}\'', (error, stdout) => {
      const withAlt = parseInt(stdout.trim()) || 0;
      exec('find pages -name "*.tsx" -o -name "*.jsx" | xargs grep -c "<img" | awk \'{sum += $1} END {print sum}\'', (error2, stdout2) => {
        const total = parseInt(stdout2.trim()) || 0;
        resolve({
          withAlt,
          total,
          missing: total - withAlt
        });
      });
    });
  });
}

async function checkHeadingStructure() {
  return new Promise((resolve) => {
    exec('find pages -name "*.tsx" -o -name "*.jsx" | xargs grep -n "<h[1-6]" | head -20', (error, stdout) => {
      const headings = stdout.trim().split('\n').filter(line => line.trim());
      const issues = [];
      
      // Simple check for heading hierarchy issues
      let lastLevel = 0;
      headings.forEach(line => {
        const match = line.match(/<h([1-6])/);
        if (match) {
          const level = parseInt(match[1]);
          if (level > lastLevel + 1) {
            issues.push(`Skipped heading level: ${line.trim()}`);
          }
          lastLevel = level;
        }
      });
      
      resolve({
        total: headings.length,
        issues
      });
    });
  });
}

async function checkInternalLinks() {
  return new Promise((resolve) => {
    exec('find pages -name "*.tsx" -o -name "*.jsx" | xargs grep -c "href=\\"/" | awk \'{sum += $1} END {print sum}\'', (error, stdout) => {
      const count = parseInt(stdout.trim()) || 0;
      resolve({ count });
    });
  });
}

async function checkPageTitles() {
  return new Promise((resolve) => {
    exec('find pages -name "*.tsx" -o -name "*.jsx" | xargs grep -h "title=" | sort | uniq -d', (error, stdout) => {
      const duplicates = stdout.trim().split('\n').filter(line => line.trim());
      resolve({
        duplicates,
        duplicateCount: duplicates.length
      });
    });
  });
}

// Run SEO optimization every 2 hours
setInterval(runSEOOptimization, 2 * 60 * 60 * 1000);
runSEOOptimization(); // Run immediately on startup

console.log('📈 SEO optimizer started');