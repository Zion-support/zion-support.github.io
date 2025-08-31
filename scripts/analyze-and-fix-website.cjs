const fs = require('fs');
const path = require('path');

class WebsiteAnalyzer {
  constructor() {
    this.sitemapPath = path.join(__dirname, '../working-sitemap.json');
    this.sitemap = null;
    this.analysis = {
      totalPages: 0,
      pagesWithContent: 0,
      pagesWithoutContent: 0,
      missingPages: [],
      brokenLinks: [],
      recommendations: []
    };
  }

  loadSitemap() {
    try {
      const data = fs.readFileSync(this.sitemapPath, 'utf8');
      this.sitemap = JSON.parse(data);
      console.log(`Loaded sitemap with ${this.sitemap.count} pages`);
    } catch (error) {
      console.error('Error loading sitemap:', error);
      process.exit(1);
    }
  }

  analyzeWebsite() {
    console.log('\n=== ANALYZING WEBSITE ===');
    
    this.analysis.totalPages = this.sitemap.pages.length;
    
    this.sitemap.pages.forEach(page => {
      if (page.hasContent) {
        this.analysis.pagesWithContent++;
      } else {
        this.analysis.pagesWithoutContent++;
        this.analysis.missingPages.push({
          url: page.url,
          path: page.url.replace('https://ziontechgroup.com', ''),
          needsContent: true
        });
      }
    });

    // Identify common missing page patterns
    this.identifyMissingPagePatterns();
    
    // Generate recommendations
    this.generateRecommendations();
    
    // Display analysis
    this.displayAnalysis();
    
    // Save analysis report
    this.saveAnalysisReport();
  }

  identifyMissingPagePatterns() {
    const patterns = {
      'about': '/about',
      'services': '/services',
      'solutions': '/solutions',
      'ai-services': '/ai-services',
      'it-services': '/it-services',
      'micro-saas': '/micro-saas',
      'blog': '/blog',
      'news': '/news',
      'partners': '/partners',
      'leadership': '/leadership',
      'events': '/events',
      'training': '/training',
      'webinars': '/webinars',
      'research-development': '/research-development',
      'industry-solutions': '/industry-solutions',
      'digital-transformation': '/digital-transformation',
      'cloud-solutions': '/cloud-solutions',
      'emerging-tech': '/emerging-tech',
      'security': '/security',
      'compliance': '/compliance',
      'terms': '/terms'
    };

    // Check if these key pages exist and have content
    Object.entries(patterns).forEach(([key, path]) => {
      const page = this.sitemap.pages.find(p => p.url.endsWith(path));
      if (!page || !page.hasContent) {
        this.analysis.missingPages.push({
          url: `https://ziontechgroup.com${path}`,
          path: path,
          needsContent: true,
          priority: 'HIGH'
        });
      }
    });
  }

  generateRecommendations() {
    // High priority: Core pages
    if (this.analysis.pagesWithoutContent > 0) {
      this.analysis.recommendations.push({
        priority: 'HIGH',
        action: 'Create missing page content',
        details: `${this.analysis.pagesWithoutContent} pages are missing content`,
        count: this.analysis.pagesWithoutContent
      });
    }

    // Medium priority: Navigation structure
    this.analysis.recommendations.push({
      priority: 'MEDIUM',
      action: 'Improve navigation structure',
      details: 'Organize main navigation with proper categories',
      count: 1
    });

    // Medium priority: Footer links
    this.analysis.recommendations.push({
      priority: 'MEDIUM',
      action: 'Enhance footer with organized links',
      details: 'Add comprehensive footer with all important pages',
      count: 1
    });

    // Low priority: SEO optimization
    this.analysis.recommendations.push({
      priority: 'LOW',
      action: 'Optimize page titles and descriptions',
      details: 'Add proper meta tags for better SEO',
      count: this.analysis.totalPages
    });
  }

  displayAnalysis() {
    console.log('\n=== WEBSITE ANALYSIS RESULTS ===');
    console.log(`Total Pages: ${this.analysis.totalPages}`);
    console.log(`Pages with Content: ${this.analysis.pagesWithContent}`);
    console.log(`Pages without Content: ${this.analysis.pagesWithoutContent}`);
    console.log(`Content Coverage: ${((this.analysis.pagesWithContent / this.analysis.totalPages) * 100).toFixed(1)}%`);
    
    console.log('\n=== MISSING CONTENT PAGES ===');
    this.analysis.missingPages.forEach(page => {
      console.log(`- ${page.path} (${page.priority || 'MEDIUM'})`);
    });

    console.log('\n=== RECOMMENDATIONS ===');
    this.analysis.recommendations.forEach(rec => {
      console.log(`[${rec.priority}] ${rec.action}: ${rec.details}`);
    });
  }

  saveAnalysisReport() {
    const reportPath = path.join(__dirname, '../reports/website-analysis-report.json');
    const markdownPath = path.join(__dirname, '../reports/website-analysis-report.md');
    
    // Save JSON report
    fs.writeFileSync(reportPath, JSON.stringify(this.analysis, null, 2));
    
    // Generate markdown report
    const markdown = this.generateMarkdownReport();
    fs.writeFileSync(markdownPath, markdown);
    
    console.log(`\nReports saved to:`);
    console.log(`- ${reportPath}`);
    console.log(`- ${markdownPath}`);
  }

  generateMarkdownReport() {
    let markdown = `# Website Analysis Report\n\n`;
    markdown += `**Generated:** ${new Date().toISOString()}\n\n`;
    
    markdown += `## Summary\n\n`;
    markdown += `- **Total Pages:** ${this.analysis.totalPages}\n`;
    markdown += `- **Pages with Content:** ${this.analysis.pagesWithContent}\n`;
    markdown += `- **Pages without Content:** ${this.analysis.pagesWithoutContent}\n`;
    markdown += `- **Content Coverage:** ${((this.analysis.pagesWithContent / this.analysis.totalPages) * 100).toFixed(1)}%\n\n`;
    
    if (this.analysis.missingPages.length > 0) {
      markdown += `## Missing Content Pages\n\n`;
      markdown += `| Path | Priority |\n`;
      markdown += `|------|----------|\n`;
      this.analysis.missingPages.forEach(page => {
        markdown += `| ${page.path} | ${page.priority || 'MEDIUM'} |\n`;
      });
      markdown += `\n`;
    }
    
    if (this.analysis.recommendations.length > 0) {
      markdown += `## Recommendations\n\n`;
      this.analysis.recommendations.forEach(rec => {
        markdown += `### ${rec.priority}: ${rec.action}\n\n`;
        markdown += `${rec.details}\n\n`;
      });
    }
    
    return markdown;
  }
}

// Run the analyzer
async function main() {
  try {
    const analyzer = new WebsiteAnalyzer();
    analyzer.loadSitemap();
    analyzer.analyzeWebsite();
  } catch (error) {
    console.error('Error running website analyzer:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = WebsiteAnalyzer;