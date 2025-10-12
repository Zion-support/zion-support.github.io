<<<<<<< HEAD
// Accessibility Checker Utility
// Provides functions to check and validate accessibility features

interface AccessibilityCheckResult {
=======
export const accessibilityChecker = new AccessibilityChecker();
/**
 * Accessibility Checker Utility;
 * Provides functions to check and validate accessibility features;
 */
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  passed: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info';
  element?: HTMLElement;
<<<<<<< HEAD
}

interface AccessibilityReport {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  warnings: number;
  results: AccessibilityCheckResult[];
<<<<<<< HEAD
}

class AccessibilityChecker {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  private results: AccessibilityCheckResult[] = [];
  /**
   * Check if an element has proper alt text for images
   */
  checkImageAltText(element: HTMLImageElement): AccessibilityCheckResult {
    const hasAlt = element.hasAttribute('alt');
<<<<<<< HEAD
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
        message: 'Image has empty alt text',
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

=======
const altText = element.getAttribute('alt') || '';
        element;
      };
        element;
      };
      element;
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  /**
   * Check if form inputs have proper labels
   */
  checkFormLabels(element: HTMLInputElement): AccessibilityCheckResult {
    const id = element.getAttribute('id');
const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
<<<<<<< HEAD
    
    if (ariaLabel || ariaLabelledBy) {
      return {
        passed: true,
        message: 'Form element has proper labeling',
        severity: 'info',
        element
      };
    }
    
    if (id) {
=======
        element;
      };
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      const label = document.querySelector(`label[for="${id}"]`);
      if (label) {
        return {
          passed: true,
          message: 'Form element has proper label',
          severity: 'info',
          element
        };
<<<<<<< HEAD
      }
    }
    
    return {
      passed: false,
      message: 'Form element missing proper labeling',
      severity: 'error',
      element
    };
  }

  /**
   * Run all accessibility checks on the page
=======
      element;
    };
  /**
   * Check if headings are properly structured;
   */
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const results: AccessibilityCheckResult[] = [];
    let previousLevel = 0;
      const level = parseInt(heading.tagName.charAt(1));
          element: heading as HTMLElement;
        });
          element: heading as HTMLElement;
        });
      previousLevel = level;
    });
    return results;
  /**
   * Check color contrast ratio;
   */
    const styles = window.getComputedStyle(element);
const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    // you would calculate the actual contrast ratio;
        element;
      };
      element;
    };
  /**
   * Check if interactive elements are keyboard accessible;
   */
    const tabIndex = element.getAttribute('tabindex');
const isInteractive = ['button', 'a', 'input', 'select', 'textarea'].includes(element.tagName.toLowerCase());
        element;
      };
      element;
    };
  /**
   * Run all accessibility checks on the page;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
   */
  runAllChecks(): AccessibilityReport {
    this.results = [];
<<<<<<< HEAD
    
    // Check images
=======
    // Check images;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      this.results.push(this.checkImageAltText(img as HTMLImageElement));
    });
<<<<<<< HEAD
    
    // Check form elements
=======
    // Check form elements;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    const formElements = document.querySelectorAll('input, select, textarea');
    formElements.forEach((element) => {
      this.results.push(this.checkFormLabels(element as HTMLInputElement));
    });
<<<<<<< HEAD
    
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

=======
    // Check heading structure;
    this.results.push(...this.checkHeadingStructure());
    // Check color contrast for text elements;
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      this.results.push(this.checkColorContrast(element, as, HTMLElement));
    });
    // Check keyboard accessibility;
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
      this.results.push(this.checkKeyboardAccessibility(element, as, HTMLElement));
    });
    const totalChecks = this.results.length;
 r.passed).length;
 !r.passed).length;
 r.severity === 'warning').length;
      results: this.results;
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  /**
   * Get accessibility score as percentage
   */
  getAccessibilityScore(): number {
    const report = this.runAllChecks();
    return Math.round((report.passedChecks / report.totalChecks) * 100);
<<<<<<< HEAD
  }
}

// Export a default instance
export const accessibilityChecker = new AccessibilityChecker();

// Export utility functions
export const runAccessibilityCheck = () => accessibilityChecker.runAllChecks();
export const getAccessibilityScore = () => accessibilityChecker.getAccessibilityScore();
=======
  /**
   * Generate accessibility report summary;
   */
    const report = this.runAllChecks();
const score = this.getAccessibilityScore();
    return `
Accessibility Report;
Score: ${score}%
Total Checks: ${report.totalChecks}
Passed: ${report.passedChecks}
Failed: ${report.failedChecks}
Warnings: ${report.warnings}
Issues Found:
${report.results;
 !r.passed)
 `- ${r.severity.toUpperCase()}: ${r.message}`)
  .join('\n')}
    `.trim();
// Export a default instance;
// Export utility functions;
 accessibilityChecker.runAllChecks();
 accessibilityChecker.getAccessibilityScore();
 accessibilityChecker.generateReport();
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
