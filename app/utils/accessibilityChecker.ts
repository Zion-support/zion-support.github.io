'use client';
/**
 * Advanced Accessibility Checker
 * Comprehensive WCAG 2.1 compliance validation
 * @version 1.0.0
 */

/**
 * Accessibility issue severity levels
 */
export enum A11ySeverity {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

/**
 * WCAG success criteria levels
 */
export enum WCAGLevel {
  A = 'A',
  AA = 'AA',
  AAA = 'AAA'
}

/**
 * Accessibility issue interface
 */
export interface A11yIssue {
  id: string;
  type: string;
  severity: A11ySeverity;
  message: string;
  element: HTMLElement | null;
  wcagCriterion: string;
  suggestion: string;
  line?: number;
  column?: number;
}

/**
 * Accessibility checker configuration
 */
export interface A11yConfig {
  level: WCAGLevel;
  includeWarnings: boolean;
  includeInfo: boolean;
  customRules?: A11yRule[];
}

/**
 * Custom accessibility rule
 */
export interface A11yRule {
  name: string;
  check: (element: HTMLElement) => A11yIssue[];
}

/**
 * Main accessibility checker class
 */
export class AccessibilityChecker {
  private config: A11yConfig;
  private issues: A11yIssue[] = [];

  constructor(config: Partial<A11yConfig> = {}) {
    this.config = {
      level: WCAGLevel.AA,
      includeWarnings: true,
      includeInfo: false,
      ...config
    };
  }

  /**
   * Run comprehensive accessibility check
   */
  public async check(): Promise<A11yIssue[]> {
    this.issues = [];
    
    // Run all checks
    this.checkImages();
    this.checkHeadings();
    this.checkLinks();
    this.checkForms();
    this.checkButtons();
    this.checkColorContrast();
    this.checkKeyboardNavigation();
    this.checkARIA();
    this.checkFocusManagement();
    
    // Run custom rules
    if (this.config.customRules) {
      this.runCustomRules();
    }
    
    return this.issues;
  }

  /**
   * Check image accessibility
   */
  private checkImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt) {
        this.addIssue({
          id: `img-alt-${index}`,
          type: 'missing-alt-text',
          severity: A11ySeverity.ERROR,
          message: 'Image missing alt text',
          element: img,
          wcagCriterion: '1.1.1',
          suggestion: 'Add descriptive alt text to image'
        });
      }
      
      if (img.alt === '') {
        this.addIssue({
          id: `img-empty-alt-${index}`,
          type: 'empty-alt-text',
          severity: A11ySeverity.WARNING,
          message: 'Image has empty alt text',
          element: img,
          wcagCriterion: '1.1.1',
          suggestion: 'Decorative images should have alt="" or be background images'
        });
      }
    });
  }

  /**
   * Check heading structure
   */
  private checkHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > lastLevel + 1) {
        this.addIssue({
          id: `heading-skip-${index}`,
          type: 'heading-skip',
          severity: A11ySeverity.WARNING,
          message: 'Heading level skipped',
          element: heading as HTMLElement,
          wcagCriterion: '1.3.1',
          suggestion: 'Don\'t skip heading levels'
        });
      }
      
      lastLevel = level;
    });
  }

  /**
   * Check link accessibility
   */
  private checkLinks(): void {
    const links = document.querySelectorAll('a');
    links.forEach((link, index) => {
      if (!link.textContent?.trim() && !link.querySelector('img')) {
        this.addIssue({
          id: `link-empty-${index}`,
          type: 'empty-link',
          severity: A11ySeverity.ERROR,
          message: 'Link has no accessible text',
          element: link,
          wcagCriterion: '2.4.4',
          suggestion: 'Add text content or aria-label to link'
        });
      }
      
      if (link.getAttribute('href') === '#') {
        this.addIssue({
          id: `link-placeholder-${index}`,
          type: 'placeholder-link',
          severity: A11ySeverity.WARNING,
          message: 'Link points to placeholder',
          element: link,
          wcagCriterion: '2.4.4',
          suggestion: 'Replace placeholder href with actual URL'
        });
      }
    });
  }

  /**
   * Check form accessibility
   */
  private checkForms(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          id: `form-label-${index}`,
          type: 'missing-label',
          severity: A11ySeverity.ERROR,
          message: 'Form control missing label',
          element: input as HTMLElement,
          wcagCriterion: '1.3.1',
          suggestion: 'Add a label element or aria-label attribute'
        });
      }
    });
  }

  /**
   * Check button accessibility
   */
  private checkButtons(): void {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim() && !button.querySelector('img')) {
        this.addIssue({
          id: `button-empty-${index}`,
          type: 'empty-button',
          severity: A11ySeverity.ERROR,
          message: 'Button has no accessible text',
          element: button,
          wcagCriterion: '2.4.4',
          suggestion: 'Add text content or aria-label to button'
        });
      }
    });
  }

  /**
   * Check color contrast
   */
  private checkColorContrast(): void {
    // This is a simplified version - in practice, you'd use a library like color-contrast
    const elements = document.querySelectorAll('*');
    elements.forEach((element, index) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor && color !== backgroundColor) {
        // Simplified contrast check - in practice, use a proper contrast calculation
        this.addIssue({
          id: `contrast-${index}`,
          type: 'color-contrast',
          severity: A11ySeverity.WARNING,
          message: 'Color contrast may be insufficient',
          element: element as HTMLElement,
          wcagCriterion: '1.4.3',
          suggestion: 'Ensure sufficient color contrast ratio (4.5:1 for normal text)'
        });
      }
    });
  }

  /**
   * Check keyboard navigation
   */
  private checkKeyboardNavigation(): void {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) {
      this.addIssue({
        id: 'no-focusable-elements',
        type: 'no-focusable-elements',
        severity: A11ySeverity.ERROR,
        message: 'No focusable elements found',
        element: null,
        wcagCriterion: '2.1.1',
        suggestion: 'Ensure page has focusable elements for keyboard navigation'
      });
    }
  }

  /**
   * Check ARIA usage
   */
  private checkARIA(): void {
    const elementsWithAria = document.querySelectorAll('[aria-*]');
    elementsWithAria.forEach((element, index) => {
      const ariaLabel = element.getAttribute('aria-label');
      const ariaLabelledBy = element.getAttribute('aria-labelledby');
      
      if (ariaLabel && ariaLabelledBy) {
        this.addIssue({
          id: `aria-conflict-${index}`,
          type: 'aria-conflict',
          severity: A11ySeverity.WARNING,
          message: 'Element has both aria-label and aria-labelledby',
          element: element as HTMLElement,
          wcagCriterion: '4.1.2',
          suggestion: 'Use either aria-label or aria-labelledby, not both'
        });
      }
    });
  }

  /**
   * Check focus management
   */
  private checkFocusManagement(): void {
    // Check for focus traps
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach((modal, index) => {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) {
        this.addIssue({
          id: `modal-no-focus-${index}`,
          type: 'modal-no-focus',
          severity: A11ySeverity.ERROR,
          message: 'Modal dialog has no focusable elements',
          element: modal as HTMLElement,
          wcagCriterion: '2.1.1',
          suggestion: 'Add focusable elements to modal or implement focus trap'
        });
      }
    });
  }

  /**
   * Run custom accessibility rules
   */
  private runCustomRules(): void {
    if (!this.config.customRules) return;
    
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      this.config.customRules!.forEach(rule => {
        const issues = rule.check(element as HTMLElement);
        issues.forEach(issue => this.addIssue(issue));
      });
    });
  }

  /**
   * Add issue to the list
   */
  private addIssue(issue: A11yIssue): void {
    if (issue.severity === A11ySeverity.ERROR) {
      this.issues.push(issue);
    } else if (issue.severity === A11ySeverity.WARNING && this.config.includeWarnings) {
      this.issues.push(issue);
    } else if (issue.severity === A11ySeverity.INFO && this.config.includeInfo) {
      this.issues.push(issue);
    }
  }

  /**
   * Get accessibility score
   */
  public getScore(): number {
    const errors = this.issues.filter(issue => issue.severity === A11ySeverity.ERROR).length;
    const warnings = this.issues.filter(issue => issue.severity === A11ySeverity.WARNING).length;
    
    return Math.max(0, 100 - (errors * 10) - (warnings * 5));
  }

  /**
   * Generate accessibility report
   */
  public generateReport(): {
    score: number;
    level: WCAGLevel;
    issues: A11yIssue[];
    summary: {
      errors: number;
      warnings: number;
      info: number;
    };
  } {
    const errors = this.issues.filter(issue => issue.severity === A11ySeverity.ERROR).length;
    const warnings = this.issues.filter(issue => issue.severity === A11ySeverity.WARNING).length;
    const info = this.issues.filter(issue => issue.severity === A11ySeverity.INFO).length;
    
    const score = this.getScore();
    const level = score >= 90 ? WCAGLevel.AAA : score >= 80 ? WCAGLevel.AA : WCAGLevel.A;
    
    return {
      score,
      level,
      issues: this.issues,
      summary: {
        errors,
        warnings,
        info
      }
    };
  }
}

export default AccessibilityChecker;