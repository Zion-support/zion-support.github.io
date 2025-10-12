// Accessibility checker utility functions
export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  rule?: string;
}

export interface AccessibilityCheckerOptions {
  includeWarnings?: boolean;
  includeInfo?: boolean;
  customRules?: AccessibilityRule[];
}

export interface AccessibilityRule {
  name: string;
  check: (element: HTMLElement) => AccessibilityIssue[];
}

export class AccessibilityChecker {
  private options: AccessibilityCheckerOptions;

  constructor(options: AccessibilityCheckerOptions = {}) {
    this.options = {
      includeWarnings: true,
      includeInfo: false,
      customRules: [],
      ...options
    };
  }

  checkElement(element: HTMLElement): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = [];
    
    // Check for missing alt text on images
    const images = element.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push({
          type: 'error',
          message: 'Image missing alt text or aria-label',
          element: img,
          rule: 'image-alt-text'
        });
      }
    });

    // Check for proper heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        issues.push({
          type: 'warning',
          message: `Heading level ${level} skips level ${lastLevel + 1}`,
          element: heading as HTMLElement,
          rule: 'heading-hierarchy'
        });
      }
      lastLevel = level;
    });

    // Check for proper form labels
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        const label = element.querySelector(`label[for="${id}"]`);
        if (!label) {
          issues.push({
            type: 'error',
            message: 'Form input missing label or aria-label',
            element: input as HTMLElement,
            rule: 'form-labels'
          });
        }
      }
    });

    // Run custom rules
    if (this.options.customRules) {
      this.options.customRules.forEach(rule => {
        issues.push(...rule.check(element));
      });
    }

    return issues;
  }

  checkDocument(): AccessibilityIssue[] {
    if (typeof document === 'undefined') {
      return [];
    }
    
    return this.checkElement(document.body);
  }

  generateReport(issues: AccessibilityIssue[]): string {
    const errorCount = issues.filter(i => i.type === 'error').length;
    const warningCount = issues.filter(i => i.type === 'warning').length;
    const infoCount = issues.filter(i => i.type === 'info').length;

    let report = `Accessibility Report\n`;
    report += `==================\n`;
    report += `Errors: ${errorCount}\n`;
    report += `Warnings: ${warningCount}\n`;
    report += `Info: ${infoCount}\n\n`;

    issues.forEach(issue => {
      report += `${issue.type.toUpperCase()}: ${issue.message}\n`;
      if (issue.element) {
        report += `Element: ${issue.element.tagName.toLowerCase()}`;
        if (issue.element.id) report += `#${issue.element.id}`;
        if (issue.element.className) report += `.${issue.element.className.split(' ').join('.')}`;
        report += `\n`;
      }
      if (issue.rule) {
        report += `Rule: ${issue.rule}\n`;
      }
      report += `\n`;
    });

    return report;
  }
}