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
  errors: number;
  results: AccessibilityCheckResult[];
}

export class AccessibilityChecker {
  private results: AccessibilityCheckResult[] = [];

  checkAltText(): AccessibilityCheckResult[] {
    const results: AccessibilityCheckResult[] = [];
    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      if (!img.alt) {
        results.push({
          passed: false,
          message: 'Image missing alt text',
          severity: 'error',
          element: img
        });
      } else if (img.alt.trim() === '') {
        results.push({
          passed: false,
          message: 'Image has empty alt text',
          severity: 'warning',
          element: img
        });
      } else {
        results.push({
          passed: true,
          message: 'Image has proper alt text',
          severity: 'info',
          element: img
        });
      }
    });

    return results;
  }

  checkHeadings(): AccessibilityCheckResult[] {
    const results: AccessibilityCheckResult[] = [];
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (headings.length === 0) {
      results.push({
        passed: false,
        message: 'No headings found on page',
        severity: 'error'
      });
    }

    return results;
  }

  checkColorContrast(): AccessibilityCheckResult[] {
    const results: AccessibilityCheckResult[] = [];
    // This would require more complex color contrast checking
    // For now, return a placeholder
    results.push({
      passed: true,
      message: 'Color contrast check not implemented',
      severity: 'info'
    });

    return results;
  }

  generateReport(): AccessibilityReport {
    const allResults = [
      ...this.checkAltText(),
      ...this.checkHeadings(),
      ...this.checkColorContrast()
    ];

    const totalChecks = allResults.length;
    const passedChecks = allResults.filter(r => r.passed).length;
    const failedChecks = allResults.filter(r => !r.passed).length;
    const warnings = allResults.filter(r => r.severity === 'warning').length;
    const errors = allResults.filter(r => r.severity === 'error').length;

    return {
      totalChecks,
      passedChecks,
      failedChecks,
      warnings,
      errors,
      results: allResults
    };
  }
}

export const accessibilityChecker = new AccessibilityChecker();