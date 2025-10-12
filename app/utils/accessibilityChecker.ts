/**
 * Accessibility Checker Utility
 * Provides functions to check and validate accessibility features
 */

export interface AccessibilityCheckResult {
  passed: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info';
  element?: HTMLElement;
}

export interface AccessibilityReport {
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  warnings: number;
  results: AccessibilityCheckResult[];
}

export class AccessibilityChecker {
  private results: AccessibilityCheckResult[] = [];

  /**
   * Check for missing alt attributes on images
   */
  checkImageAltText(): AccessibilityCheckResult[] {
    const images = document.querySelectorAll('img');
    const results: AccessibilityCheckResult[] = [];

    images.forEach((img) => {
      if (!img.alt || img.alt.trim() === '') {
        results.push({
          passed: false,
          message: 'Image missing alt text',
          severity: 'error',
          element: img
        });
      } else {
        results.push({
          passed: true,
          message: 'Image has alt text',
          severity: 'info',
          element: img
        });
      }
    });

    return results;
  }

  /**
   * Check for proper heading hierarchy
   */
  checkHeadingHierarchy(): AccessibilityCheckResult[] {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const results: AccessibilityCheckResult[] = [];
    let lastLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > lastLevel + 1) {
        results.push({
          passed: false,
          message: `Heading level ${level} skipped from ${lastLevel}`,
          severity: 'warning',
          element: heading as HTMLElement
        });
      } else {
        results.push({
          passed: true,
          message: `Heading level ${level} is correct`,
          severity: 'info',
          element: heading as HTMLElement
        });
      }
      
      lastLevel = level;
    });

    return results;
  }

  /**
   * Check for proper form labels
   */
  checkFormLabels(): AccessibilityCheckResult[] {
    const inputs = document.querySelectorAll('input, textarea, select');
    const results: AccessibilityCheckResult[] = [];

    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;

      if (!label && !ariaLabel && !ariaLabelledBy) {
        results.push({
          passed: false,
          message: 'Form input missing label',
          severity: 'error',
          element: input as HTMLElement
        });
      } else {
        results.push({
          passed: true,
          message: 'Form input has proper labeling',
          severity: 'info',
          element: input as HTMLElement
        });
      }
    });

    return results;
  }

  /**
   * Check for proper color contrast
   */
  checkColorContrast(): AccessibilityCheckResult[] {
    const elements = document.querySelectorAll('*');
    const results: AccessibilityCheckResult[] = [];

    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;

      // This is a simplified check - in a real implementation,
      // you would calculate the actual contrast ratio
      if (color === backgroundColor) {
        results.push({
          passed: false,
          message: 'Text and background colors are the same',
          severity: 'error',
          element: element as HTMLElement
        });
      } else {
        results.push({
          passed: true,
          message: 'Color contrast appears adequate',
          severity: 'info',
          element: element as HTMLElement
        });
      }
    });

    return results;
  }

  /**
   * Run all accessibility checks
   */
  runAllChecks(): AccessibilityReport {
    this.results = [];

    // Run all checks
    this.results.push(...this.checkImageAltText());
    this.results.push(...this.checkHeadingHierarchy());
    this.results.push(...this.checkFormLabels());
    this.results.push(...this.checkColorContrast());

    // Calculate statistics
    const totalChecks = this.results.length;
    const passedChecks = this.results.filter(r => r.passed).length;
    const failedChecks = this.results.filter(r => !r.passed && r.severity === 'error').length;
    const warnings = this.results.filter(r => !r.passed && r.severity === 'warning').length;

    return {
      totalChecks,
      passedChecks,
      failedChecks,
      warnings,
      results: this.results
    };
  }

  /**
   * Get results for a specific check type
   */
  getResultsBySeverity(severity: 'error' | 'warning' | 'info'): AccessibilityCheckResult[] {
    return this.results.filter(result => result.severity === severity);
  }

  /**
   * Clear all results
   */
  clearResults(): void {
    this.results = [];
  }
}

export default AccessibilityChecker;