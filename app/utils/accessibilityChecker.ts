<<<<<<< HEAD
'use client'

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: HTMLElement
  selector?: string
  code?: string
}

interface AccessibilityReport {
  issues: AccessibilityIssue[]
  score: number
  passed: number
  failed: number
  warnings: number
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = []

  checkElement(element: HTMLElement): AccessibilityIssue[] {
    const elementIssues: AccessibilityIssue[] = []

    // Check for alt text on images
    if (element.tagName === 'IMG') {
      const img = element as HTMLImageElement
      if (!img.alt && !img.getAttribute('aria-label')) {
        elementIssues.push({
          type: 'error',
          message: 'Image missing alt text or aria-label',
          element,
          selector: this.getSelector(element),
          code: 'WCAG2.1_AA_1.1.1'
        })
      }
    }

    // Check for form labels
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
      const formElement = element as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      const id = formElement.id
      const ariaLabel = formElement.getAttribute('aria-label')
      const ariaLabelledBy = formElement.getAttribute('aria-labelledby')
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        elementIssues.push({
          type: 'error',
          message: 'Form element missing label, aria-label, or aria-labelledby',
          element,
          selector: this.getSelector(element),
          code: 'WCAG2.1_AA_1.3.1'
        })
      }
    }

    // Check for heading hierarchy
    if (element.tagName.match(/^H[1-6]$/)) {
      const headingLevel = parseInt(element.tagName.charAt(1))
      const previousHeading = this.findPreviousHeading(element)
      
      if (previousHeading) {
        const previousLevel = parseInt(previousHeading.tagName.charAt(1))
        if (headingLevel > previousLevel + 1) {
          elementIssues.push({
            type: 'warning',
            message: `Heading level ${headingLevel} follows heading level ${previousLevel}. Consider using level ${previousLevel + 1}.`,
            element,
            selector: this.getSelector(element),
            code: 'WCAG2.1_AA_1.3.1'
          })
        }
      }
    }

    // Check for color contrast (simplified)
    const computedStyle = window.getComputedStyle(element)
    const color = computedStyle.color
    const backgroundColor = computedStyle.backgroundColor
    
    if (color && backgroundColor && color !== backgroundColor) {
      // This is a simplified check - in practice, you'd use a proper contrast ratio calculator
      elementIssues.push({
        type: 'info',
        message: 'Check color contrast ratio (4.5:1 for normal text, 3:1 for large text)',
        element,
        selector: this.getSelector(element),
        code: 'WCAG2.1_AA_1.4.3'
      })
    }

    return elementIssues
  }

  checkDocument(): AccessibilityReport {
    this.issues = []
    
    // Check all elements in the document
    const allElements = document.querySelectorAll('*')
    allElements.forEach(element => {
      const elementIssues = this.checkElement(element as HTMLElement)
      this.issues.push(...elementIssues)
    })

    // Calculate scores
    const errors = this.issues.filter(issue => issue.type === 'error').length
    const warnings = this.issues.filter(issue => issue.type === 'warning').length
    const infos = this.issues.filter(issue => issue.type === 'info').length
    
    const total = errors + warnings + infos
    const score = total > 0 ? Math.max(0, 100 - (errors * 10) - (warnings * 5) - (infos * 2)) : 100

    return {
      issues: this.issues,
      score: Math.round(score),
      passed: total - errors - warnings,
      failed: errors,
      warnings: warnings
    }
  }

  private getSelector(element: HTMLElement): string {
    if (element.id) {
      return `#${element.id}`
    }
    
    if (element.className) {
      const classes = element.className.split(' ').filter(c => c.trim())
      if (classes.length > 0) {
        return `.${classes.join('.')}`
      }
    }
    
    return element.tagName.toLowerCase()
  }

  private findPreviousHeading(element: HTMLElement): HTMLElement | null {
    let current = element.previousElementSibling as HTMLElement
    
    while (current) {
      if (current.tagName.match(/^H[1-6]$/)) {
        return current
      }
      current = current.previousElementSibling as HTMLElement
    }
    
    return null
  }

  getIssues(): AccessibilityIssue[] {
    return this.issues
  }

  clearIssues(): void {
    this.issues = []
  }
}

export const accessibilityChecker = new AccessibilityChecker()
=======
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
Accessibility Report
===================
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
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
