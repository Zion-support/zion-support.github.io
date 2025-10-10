import fs from 'fs';
import path from 'path';

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  file?: string;
  line?: number;
}

class SEOAuditor {
  private issues: SEOIssue[] = [];
  private baseUrl = 'https://ziontechgroup.com';

  auditFile(filePath: string, content: string) {
    const fileName = path.basename(filePath);
    
    // Check for missing title
    if (!content.includes('<title>') && !content.includes('Helmet')) {
      this.addIssue('error', 'Missing page title', fileName);
    }
    
    // Check for missing meta description
    if (!content.includes('meta name="description"') && !content.includes('description:')) {
      this.addIssue('warning', 'Missing meta description', fileName);
    }
    
    // Check for missing alt attributes on images
    const imgTags = content.match(/<img[^>]*>/g) || [];
    imgTags.forEach((img, index) => {
      if (!img.includes('alt=')) {
        this.addIssue('warning', `Image ${index + 1} missing alt attribute`, fileName);
      }
    });
    
    // Check for heading structure
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    if (headings.length === 0) {
      this.addIssue('warning', 'No headings found', fileName);
    }
    
    // Check for internal links
    const internalLinks = content.match(/href="[^"]*"/g) || [];
    const hasInternalLinks = internalLinks.some(link => 
      link.includes(this.baseUrl) || link.startsWith('href="/')
    );
    
    if (!hasInternalLinks && fileName !== 'index.html') {
      this.addIssue('info', 'No internal links found', fileName);
    }
    
    // Check for external links
    const externalLinks = content.match(/href="https?://[^"]*"/g) || [];
    externalLinks.forEach((link, index) => {
      if (!link.includes('rel=')) {
        this.addIssue('warning', `External link ${index + 1} missing rel attribute`, fileName);
      }
    });
  }

  private addIssue(type: SEOIssue['type'], message: string, file?: string, line?: number) {
    this.issues.push({ type, message, file, line });
  }

  generateReport(): string {
    const errors = this.issues.filter(issue => issue.type === 'error');
    const warnings = this.issues.filter(issue => issue.type === 'warning');
    const infos = this.issues.filter(issue => issue.type === 'info');
    
    let report = '# SEO Audit Report\n\n';
    report += `## Summary\n`;
    report += `- Errors: ${errors.length}\n`;
    report += `- Warnings: ${warnings.length}\n`;
    report += `- Info: ${infos.length}\n\n`;
    
    if (errors.length > 0) {
      report += '## Errors\n\n';
      errors.forEach(issue => {
        report += `- ${issue.message}`;
        if (issue.file) report += ` (File: ${issue.file})`;
        if (issue.line) report += ` (Line: ${issue.line})`;
        report += '\n';
      });
      report += '\n';
    }
    
    if (warnings.length > 0) {
      report += '## Warnings\n\n';
      warnings.forEach(issue => {
        report += `- ${issue.message}`;
        if (issue.file) report += ` (File: ${issue.file})`;
        if (issue.line) report += ` (Line: ${issue.line})`;
        report += '\n';
      });
      report += '\n';
    }
    
    if (infos.length > 0) {
      report += '## Info\n\n';
      infos.forEach(issue => {
        report += `- ${issue.message}`;
        if (issue.file) report += ` (File: ${issue.file})`;
        if (issue.line) report += ` (Line: ${issue.line})`;
        report += '\n';
      });
    }
    
    return report;
  }

  getIssues(): SEOIssue[] {
    return this.issues;
  }
}

// Run SEO audit
const auditor = new SEOAuditor();

// Audit main pages
const pagesDir = path.join(process.cwd(), 'src');
const pages = fs.readdirSync(pagesDir, { recursive: true })
  .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'))
  .filter(file => !file.includes('node_modules'))
  .filter(file => !file.includes('.test.'))
  .filter(file => !file.includes('.spec.'));

pages.forEach(page => {
  const filePath = path.join(pagesDir, page);
  const content = fs.readFileSync(filePath, 'utf8');
  auditor.auditFile(filePath, content);
});

// Generate report
const report = auditor.generateReport();
fs.writeFileSync('seo-audit-report.md', report);

console.log('✅ SEO audit completed');
console.log(`Found ${auditor.getIssues().length} issues`);

export default SEOAuditor;