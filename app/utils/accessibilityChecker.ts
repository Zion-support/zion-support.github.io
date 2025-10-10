export interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element: string;
  line?: number;
  column?: number;
  fix?: string;
}

export interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  passed: number;
  failed: number;
  warnings: number;
  timestamp: Date;
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = [];

  checkElement(element: HTMLElement): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = [];
    
    // Check for missing alt text on images
    const images = element.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt) {
        issues.push({
          id: `missing-alt-${index}`,
          type: 'error',
          message: 'Image missing alt text',
          element: img.tagName,
          fix: 'Add alt attribute to image'
        });
      }
    });

    // Check for missing labels on form inputs
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = element.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        issues.push({
          id: `missing-label-${index}`,
          type: 'error',
          message: 'Form input missing label',
          element: input.tagName,
          fix: 'Add label element or aria-label attribute'
        });
      }
    });

    // Check for missing heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push({
          id: `heading-skip-${index}`,
          type: 'warning',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading.tagName,
          fix: 'Use sequential heading levels'
        });
      }
      previousLevel = level;
    });

    // Check for color contrast (simplified)
    const textElements = element.querySelectorAll('p, span, div, a, button');
    textElements.forEach((element, index) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color === backgroundColor) {
        issues.push({
          id: `contrast-${index}`,
          type: 'error',
          message: 'Text and background colors are the same',
          element: element.tagName,
          fix: 'Ensure sufficient color contrast'
        });
      }
    });

    return issues;
  }

  generateReport(element: HTMLElement): AccessibilityReport {
    const issues = this.checkElement(element);
    const errors = issues.filter(issue => issue.type === 'error').length;
    const warnings = issues.filter(issue => issue.type === 'warning').length;
    const passed = issues.filter(issue => issue.type === 'info').length;
    
    const score = Math.max(0, 100 - (errors * 10) - (warnings * 5));

    return {
      score,
      issues,
      passed,
      failed: errors,
      warnings,
      timestamp: new Date()
    };
  }

  fixIssue(issue: AccessibilityIssue): string | null {
    switch (issue.id.split('-')[0]) {
      case 'missing-alt':
        return 'Add alt="descriptive text" to image element';
      case 'missing-label':
        return 'Add <label for="inputId">Label text</label> or aria-label="Label text"';
      case 'heading-skip':
        return 'Use sequential heading levels (h1, h2, h3, etc.)';
      case 'contrast':
        return 'Ensure text and background have sufficient contrast ratio (4.5:1 for normal text)';
      default:
        return issue.fix || 'Manual review required';
    }
  }
}

export const accessibilityChecker = new AccessibilityChecker();