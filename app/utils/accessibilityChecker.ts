/**
 * Accessibility Checker Utility
 * Provides functions to check and validate accessibility features
 */

export interface AccessibilityCheckResult {
  passed: boolean;,
    message: string;,
    severity: 'error' | 'warning' | 'info';
  element?: HTMLElement;
}

export interface AccessibilityReport {
  totalChecks: number;,
    passedChecks: number;,
    failedChecks: number;,
    warnings: number;,
    results: AccessibilityCheckResult[];
}

export class AccessibilityChecker {
  private results: AccessibilityCheckResult[] = [];

  /**
   * Check if an element has proper alt text for images
   */
  checkImageAltText(element: HTMLImageElement): AccessibilityCheckResult {
    const hasAlt = element.hasAttribute('alt');
    const altText = element.getAttribute('alt') || '';
    
    if (!hasAlt) {
      return {
        passed: false,
        message: 'Image missing alt attribute',
        severity: 'error',
        element
      };
    }
    
    if (altText.trim() === '') {
      return {
        passed: false,
        message: 'Image has empty alt attribute',
        severity: 'warning',
        element
      };
    }
    
    return {
      passed: true,
      message: 'Image has proper alt text',
      severity: 'info',
      element
    };
  }

  /**
   * Check if form inputs have proper labels
   */
  checkFormLabels(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): AccessibilityCheckResult {
    const id = element.getAttribute('id');
    const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    
    if (ariaLabel || ariaLabelledBy) {
      return {
        passed: true,
        message: 'Form element has proper labeling',
        severity: 'info',
        element
      };
    }
    
    if (id) {
      const label = document.querySelector(`label[for="${id}"]`);
      if (label) {
        return {
          passed: true,
          message: 'Form element has associated label',
          severity: 'info',
          element
        };
      }
    }
    
    return {
      passed: false,
      message: 'Form element missing proper label',
      severity: 'error',
      element
    };
  }

  /**
   * Check if headings are properly structured
   */
  checkHeadingStructure(): AccessibilityCheckResult[] {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const results: AccessibilityCheckResult[] = [];
    let previousLevel = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (index === 0 && level !== 1) {
        results.push({
          passed: false,
          message: 'Page should start with h1 heading',
          severity: 'warning',
          element: heading as HTMLElement
        });
      }
      
      if (level > previousLevel + 1) {
        results.push({
          passed: false,
          message: `Heading level ${level} skipped from ${previousLevel}`,
          severity: 'warning',
          element: heading as HTMLElement
        });
      }
      
      previousLevel = level;
    });
    
    return results;
  }

  /**
   * Check color contrast ratio
   */
  checkColorContrast(element: HTMLElement): AccessibilityCheckResult {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    
    // This is a simplified check - in a real implementation,
    // you would calculate the actual contrast ratio
    if (color === backgroundColor) {
      return {
        passed: false,
        message: 'Text and background colors are the same',
        severity: 'error',
        element
      };
    }
    
    return {
      passed: true,
      message: 'Color contrast appears adequate',
      severity: 'info',
      element
    };
  }

  /**
   * Check if interactive elements are keyboard accessible
   */
  checkKeyboardAccessibility(element: HTMLElement): AccessibilityCheckResult {
    const tabIndex = element.getAttribute('tabindex');
    const isInteractive = ['button', 'a', 'input', 'select', 'textarea'].includes(element.tagName.toLowerCase());
    
    if (isInteractive && tabIndex === '-1') {
      return {
        passed: false,
        message: 'Interactive element is not keyboard accessible',
        severity: 'error',
        element
      };
    }
    
    return {
      passed: true,
      message: 'Element is keyboard accessible',
      severity: 'info',
      element
    };
  }

  /**
   * Run all accessibility checks on the page
   */
  runAllChecks(): AccessibilityReport {
    this.results = [];
    
    // Check images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      this.results.push(this.checkImageAltText(img));
    });
    
    // Check form elements
    const formElements = document.querySelectorAll('input, select, textarea');
    formElements.forEach(element => {
      this.results.push(this.checkFormLabels(element as HTMLInputElement));
    });
    
    // Check heading structure
    this.results.push(...this.checkHeadingStructure());
    
    // Check color contrast for text elements
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach(element => {
      this.results.push(this.checkColorContrast(element as HTMLElement));
    });
    
    // Check keyboard accessibility
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(element => {
      this.results.push(this.checkKeyboardAccessibility(element as HTMLElement));
    });
    
    const totalChecks = this.results.length;
    const passedChecks = this.results.filter(r => r.passed).length;
    const failedChecks = this.results.filter(r => !r.passed).length;
    const warnings = this.results.filter(r => r.severity === 'warning').length;
    
    return {
      totalChecks,
      passedChecks,
      failedChecks,
      warnings,
      results: this.results
    };
  }

  /**
   * Get accessibility score as percentage
   */
  getAccessibilityScore(): number {
    const report = this.runAllChecks();
    return Math.round((report.passedChecks / report.totalChecks) * 100);
  }

  /**
   * Generate accessibility report summary
   */
  generateReport(): string {
    const report = this.runAllChecks();
    const score = this.getAccessibilityScore();
    
    return `
Accessibility Report,
    Score: ${score}%
Total Checks: ${report.totalChecks}
Passed: ${report.passedChecks}
Failed: ${report.failedChecks}
Warnings: ${report.warnings}

Issues Found:
${report.results
  .filter(r => !r.passed)
  .map(r => `- ${r.severity.toUpperCase()}: ${r.message}`)
  .join('\n')}
    `.trim();
  }
}

// Export a default instance
export const accessibilityChecker = new AccessibilityChecker();

// Export utility functions
export const checkPageAccessibility = () => accessibilityChecker.runAllChecks();
export const getAccessibilityScore = () => accessibilityChecker.getAccessibilityScore();
export const generateAccessibilityReport = () => accessibilityChecker.generateReport();
