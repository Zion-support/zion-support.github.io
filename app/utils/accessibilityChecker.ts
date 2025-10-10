/**
 * Accessibility checker utility for validating web accessibility
 */

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  rule: string;
  impact: 'critical' | 'serious' | 'moderate' | 'minor';
}

export interface AccessibilityReport {
  issues: AccessibilityIssue[];
  score: number;
  totalIssues: number;
  criticalIssues: number;
  seriousIssues: number;
  moderateIssues: number;
  minorIssues: number;
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = [];

  /**
   * Run comprehensive accessibility check
   */
  checkAccessibility(): AccessibilityReport {
    this.issues = [];
    
    this.checkImages();
    this.checkHeadings();
    this.checkLinks();
    this.checkForms();
    this.checkButtons();
    this.checkLandmarks();
    this.checkColorContrast();
    this.checkKeyboardNavigation();
    this.checkFocusManagement();
    this.checkScreenReaderSupport();

    return this.generateReport();
  }

  /**
   * Check image accessibility
   */
  private checkImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        this.addIssue({
          type: 'error',
          message: 'Image missing alt text or aria-label',
          element: img,
          rule: 'image-alt',
          impact: 'critical'
        });
      }

      if (img.alt === '') {
        this.addIssue({
          type: 'warning',
          message: 'Image has empty alt text - should be decorative or have descriptive text',
          element: img,
          rule: 'image-alt-empty',
          impact: 'moderate'
        });
      }
    });
  }

  /**
   * Check heading structure
   */
  private checkHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingLevels: number[] = [];

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      headingLevels.push(level);

      // Check for empty headings
      if (!heading.textContent?.trim()) {
        this.addIssue({
          type: 'error',
          message: 'Heading is empty',
          element: heading as HTMLElement,
          rule: 'heading-empty',
          impact: 'serious'
        });
      }

      // Check for skipped heading levels
      if (headingLevels.length > 1) {
        const prevLevel = headingLevels[headingLevels.length - 2];
        if (level > prevLevel + 1) {
          this.addIssue({
            type: 'warning',
            message: 'Heading level skipped',
            element: heading as HTMLElement,
            rule: 'heading-order',
            impact: 'moderate'
          });
        }
      }
    });

    // Check for multiple h1 elements
    const h1Elements = document.querySelectorAll('h1');
    if (h1Elements.length > 1) {
      this.addIssue({
        type: 'warning',
        message: 'Multiple h1 elements found - should only have one per page',
        rule: 'heading-h1-multiple',
        impact: 'moderate'
      });
    }
  }

  /**
   * Check link accessibility
   */
  private checkLinks(): void {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      // Check for empty links
      if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
        this.addIssue({
          type: 'error',
          message: 'Link has no accessible name',
          element: link,
          rule: 'link-name',
          impact: 'critical'
        });
      }

      // Check for links that open in new window
      if (link.target === '_blank' && !link.getAttribute('aria-label')?.includes('opens in new window')) {
        this.addIssue({
          type: 'warning',
          message: 'Link opens in new window but doesn\'t announce this to screen readers',
          element: link,
          rule: 'link-new-window',
          impact: 'moderate'
        });
      }

      // Check for links that look like buttons
      if (link.getAttribute('role') === 'button' && !link.getAttribute('aria-label')) {
        this.addIssue({
          type: 'warning',
          message: 'Link with button role should have aria-label',
          element: link,
          rule: 'link-button-role',
          impact: 'moderate'
        });
      }
    });
  }

  /**
   * Check form accessibility
   */
  private checkForms(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach((input) => {
        const inputElement = input as HTMLInputElement;
        
        // Check for missing labels
        if (!this.hasLabel(inputElement) && !inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
          this.addIssue({
            type: 'error',
            message: 'Form control missing label',
            element: inputElement,
            rule: 'form-label',
            impact: 'critical'
          });
        }

        // Check for required fields without aria-required
        if (inputElement.required && !inputElement.getAttribute('aria-required')) {
          this.addIssue({
            type: 'warning',
            message: 'Required field should have aria-required attribute',
            element: inputElement,
            rule: 'form-required',
            impact: 'moderate'
          });
        }
      });
    });
  }

  /**
   * Check button accessibility
   */
  private checkButtons(): void {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      // Check for empty buttons
      if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
        this.addIssue({
          type: 'error',
          message: 'Button has no accessible name',
          element: button,
          rule: 'button-name',
          impact: 'critical'
        });
      }

      // Check for disabled buttons without explanation
      if (button.disabled && !button.getAttribute('aria-describedby')) {
        this.addIssue({
          type: 'info',
          message: 'Disabled button should explain why it\'s disabled',
          element: button,
          rule: 'button-disabled',
          impact: 'minor'
        });
      }
    });
  }

  /**
   * Check landmark elements
   */
  private checkLandmarks(): void {
    const main = document.querySelector('main, [role="main"]');
    if (!main) {
      this.addIssue({
        type: 'warning',
        message: 'Page missing main landmark',
        rule: 'landmark-main',
        impact: 'moderate'
      });
    }

    const navigation = document.querySelector('nav, [role="navigation"]');
    if (!navigation) {
      this.addIssue({
        type: 'info',
        message: 'Page missing navigation landmark',
        rule: 'landmark-navigation',
        impact: 'minor'
      });
    }
  }

  /**
   * Check color contrast (simplified)
   */
  private checkColorContrast(): void {
    // This is a simplified check - in a real implementation,
    // you would use a library like color-contrast-checker
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // Basic check for transparent or very light backgrounds
      if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
        this.addIssue({
          type: 'warning',
          message: 'Text may have insufficient color contrast',
          element: element as HTMLElement,
          rule: 'color-contrast',
          impact: 'serious'
        });
      }
    });
  }

  /**
   * Check keyboard navigation
   */
  private checkKeyboardNavigation(): void {
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    let hasKeyboardNavigation = false;

    interactiveElements.forEach((element) => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex !== '-1') {
        hasKeyboardNavigation = true;
      }
    });

    if (!hasKeyboardNavigation) {
      this.addIssue({
        type: 'error',
        message: 'No keyboard accessible elements found',
        rule: 'keyboard-navigation',
        impact: 'critical'
      });
    }
  }

  /**
   * Check focus management
   */
  private checkFocusManagement(): void {
    const focusableElements = document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    if (focusableElements.length === 0) {
      this.addIssue({
        type: 'error',
        message: 'No focusable elements found',
        rule: 'focus-management',
        impact: 'critical'
      });
    }
  }

  /**
   * Check screen reader support
   */
  private checkScreenReaderSupport(): void {
    const hasAriaLabels = document.querySelectorAll('[aria-label]').length > 0;
    const hasAriaDescribedby = document.querySelectorAll('[aria-describedby]').length > 0;
    const hasAriaLabelledby = document.querySelectorAll('[aria-labelledby]').length > 0;

    if (!hasAriaLabels && !hasAriaDescribedby && !hasAriaLabelledby) {
      this.addIssue({
        type: 'info',
        message: 'Consider adding ARIA labels for better screen reader support',
        rule: 'screen-reader-support',
        impact: 'minor'
      });
    }
  }

  /**
   * Check if element has associated label
   */
  private hasLabel(input: HTMLInputElement): boolean {
    const id = input.id;
    if (id) {
      const label = document.querySelector(`label[for="${id}"]`);
      if (label) return true;
    }

    const parentLabel = input.closest('label');
    return !!parentLabel;
  }

  /**
   * Add issue to the list
   */
  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);
  }

  /**
   * Generate accessibility report
   */
  private generateReport(): AccessibilityReport {
    const criticalIssues = this.issues.filter(issue => issue.impact === 'critical').length;
    const seriousIssues = this.issues.filter(issue => issue.impact === 'serious').length;
    const moderateIssues = this.issues.filter(issue => issue.impact === 'moderate').length;
    const minorIssues = this.issues.filter(issue => issue.impact === 'minor').length;

    // Calculate score (0-100)
    const totalIssues = this.issues.length;
    const weightedScore = criticalIssues * 4 + seriousIssues * 3 + moderateIssues * 2 + minorIssues * 1;
    const maxPossibleScore = totalIssues * 4;
    const score = maxPossibleScore > 0 ? Math.max(0, 100 - (weightedScore / maxPossibleScore) * 100) : 100;

    return {
      issues: this.issues,
      score: Math.round(score),
      totalIssues,
      criticalIssues,
      seriousIssues,
      moderateIssues,
      minorIssues
    };
  }
}

// Create default instance
export const accessibilityChecker = new AccessibilityChecker();
export default accessibilityChecker;