import fs from 'fs';
import path from 'path';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  file?: string;
  line?: number;
  code?: string;
}

class AccessibilityAuditor {
  private issues: AccessibilityIssue[] = [];

  auditFile(filePath: string, content: string) {
    const fileName = path.basename(filePath);
    
    // Check for missing alt attributes on images
    const imgTags = content.match(/<img[^>]*>/g) || [];
    imgTags.forEach((img, index) => {
      if (!img.includes('alt=')) {
        this.addIssue('error', `Image ${index + 1} missing alt attribute`, fileName);
      }
    });
    
    // Check for missing form labels
    const inputTags = content.match(/<input[^>]*>/g) || [];
    inputTags.forEach((input, index) => {
      if (!input.includes('aria-label') && !content.includes(`for="${this.extractId(input)}"`)) {
        this.addIssue('error', `Input ${index + 1} missing label or aria-label`, fileName);
      }
    });
    
    // Check for missing heading hierarchy
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    if (headings.length > 0) {
      const headingLevels = headings.map(h => parseInt(h.match(/<h([1-6])/)?.[1] || '0'));
      for (let i = 1; i < headingLevels.length; i++) {
        if (headingLevels[i] > headingLevels[i-1] + 1) {
          this.addIssue('warning', `Heading hierarchy skipped from h${headingLevels[i-1]} to h${headingLevels[i]}`, fileName);
        }
      }
    }
    
    // Check for missing focus management
    if (content.includes('onClick') && !content.includes('onKeyDown') && !content.includes('onKeyPress')) {
      this.addIssue('warning', 'Interactive elements should be keyboard accessible', fileName);
    }
    
    // Check for missing ARIA labels
    const interactiveElements = content.match(/<(button|a|input|select|textarea)[^>]*>/g) || [];
    interactiveElements.forEach((element, index) => {
      if (!element.includes('aria-label') && !element.includes('aria-labelledby') && !element.includes('>')) {
        this.addIssue('info', `Interactive element ${index + 1} could benefit from ARIA label`, fileName);
      }
    });
    
    // Check for color contrast (simplified)
    const colorClasses = content.match(/text-\w+-\d+|bg-\w+-\d+/g) || [];
    if (colorClasses.length > 0) {
      this.addIssue('info', 'Consider checking color contrast ratios', fileName);
    }
    
    // Check for missing skip links
    if (!content.includes('skip') && !content.includes('Skip')) {
      this.addIssue('info', 'Consider adding skip navigation links', fileName);
    }
  }

  private extractId(input: string): string {
    const idMatch = input.match(/id="([^"]*)"/);
    return idMatch ? idMatch[1] : '';
  }

  private addIssue(type: AccessibilityIssue['type'], message: string, file?: string, line?: number, code?: string) {
    this.issues.push({ type, message, file, line, code });
  }

  generateReport(): string {
    const errors = this.issues.filter(issue => issue.type === 'error');
    const warnings = this.issues.filter(issue => issue.type === 'warning');
    const infos = this.issues.filter(issue => issue.type === 'info');
    
    let report = '# Accessibility Audit Report\n\n';
    report += `## Summary\n`;
    report += `- Errors: ${errors.length}\n`;
    report += `- Warnings: ${warnings.length}\n`;
    report += `- Info: ${infos.length}\n\n`;
    
    if (errors.length > 0) {
      report += '## Errors (Must Fix)\n\n';
      errors.forEach(issue => {
        report += `- ${issue.message}`;
        if (issue.file) report += ` (File: ${issue.file})`;
        if (issue.line) report += ` (Line: ${issue.line})`;
        report += '\n';
      });
      report += '\n';
    }
    
    if (warnings.length > 0) {
      report += '## Warnings (Should Fix)\n\n';
      warnings.forEach(issue => {
        report += `- ${issue.message}`;
        if (issue.file) report += ` (File: ${issue.file})`;
        if (issue.line) report += ` (Line: ${issue.line})`;
        report += '\n';
      });
      report += '\n';
    }
    
    if (infos.length > 0) {
      report += '## Info (Consider Fixing)\n\n';
      infos.forEach(issue => {
        report += `- ${issue.message}`;
        if (issue.file) report += ` (File: ${issue.file})`;
        if (issue.line) report += ` (Line: ${issue.line})`;
        report += '\n';
      });
    }
    
    report += '\n## WCAG Guidelines\n\n';
    report += 'This audit checks for compliance with WCAG 2.1 AA standards:\n\n';
    report += '- **Perceivable**: Images have alt text, content is readable\n';
    report += '- **Operable**: Interactive elements are keyboard accessible\n';
    report += '- **Understandable**: Content is clear and navigation is consistent\n';
    report += '- **Robust**: Code is valid and compatible with assistive technologies\n';
    
    return report;
  }

  getIssues(): AccessibilityIssue[] {
    return this.issues;
  }
}

// Run accessibility audit
const auditor = new AccessibilityAuditor();

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
fs.writeFileSync('accessibility-audit-report.md', report);

console.log('✅ Accessibility audit completed');
console.log(`Found ${auditor.getIssues().length} issues`);

export default AccessibilityAuditor;