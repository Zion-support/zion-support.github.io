// Accessibility Checker Utility
// Provides functions to check and validate accessibility features

interface AccessibilityCheckResult {
  passed: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info';
  element?: HTMLElement;
}

interface AccessibilityReport {
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  warnings: number;
  results: AccessibilityCheckResult[];
}

class AccessibilityChecker {
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

  /**
   * Check if form inputs have proper labels
   */
  checkFormLabels(element: HTMLInputElement): AccessibilityCheckResult {
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
          message: 'Form element has proper label',
          severity: 'info',
          element
        };
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
   */
  runAllChecks(): AccessibilityReport {
    this.results = [];
    
    // Check images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      this.results.push(this.checkImageAltText(img as HTMLImageElement));
    });
    
    // Check form elements
    const formElements = document.querySelectorAll('input, select, textarea');
    formElements.forEach((element) => {
      this.results.push(this.checkFormLabels(element as HTMLInputElement));
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
}

// Export a default instance
export const accessibilityChecker = new AccessibilityChecker();

// Export utility functions
export const runAccessibilityCheck = () => accessibilityChecker.runAllChecks();
export const getAccessibilityScore = () => accessibilityChecker.getAccessibilityScore();