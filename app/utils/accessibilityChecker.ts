'use client';
/**
 * Accessibility Checker Utility
 *
 * Provides tools for checking and improving accessibility (a11y) in React applications.
 * Helps ensure WCAG 2.1 AA compliance.
 *
 * @module accessibilityChecker
 * @author Zion Tech Group
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
  message: string;
  element: string;
  fix: string;
  codeExample: string;
  severity: A11ySeverity;
  wcagLevel: WCAGLevel;
}

/**
 * Accessibility check result
 */
export interface A11yCheckResult {
  score: number;
  issues: A11yIssue[];
  errors: A11yIssue[];
  warnings: A11yIssue[];
  info: A11yIssue[];
}

/**
 * Accessibility Checker class
 *
 * Provides comprehensive accessibility checking and reporting
 *
 * @example
 * ```typescript
 * const checker = new AccessibilityChecker();
 * const result = checker.checkElement(document.getElementById('main'));
 * if (import.meta.env.DEV) {
 *   console.log('Accessibility issues:', result.issues);
 * }
 * ```
 */
export class AccessibilityChecker {
  private issues: A11yIssue[] = [];

  constructor() {
    this.issues = [];
  }

  /**
   * Check entire document for accessibility issues
   *
   * @returns Accessibility check result
   */
  public checkDocument(): A11yCheckResult {
    if (typeof window === 'undefined') {
      return {
        score: 0,
        issues: [],
        errors: [],
        warnings: [],
        info: []
      };
    }
    return this.checkElement(document.body);
  }

  /**
   * Check images for alt text
   *
   * @private
   * @param element - Root element to check
   */
  private checkImages(element: Element): void {
    const images = element.querySelectorAll('img');
    images.forEach((img, index) => {
      const alt = img.getAttribute('alt');
      const role = img.getAttribute('role');
      
      if (!alt) {
        this.addIssue({
          type: 'missing-alt',
          message: `Image ${index + 1} is missing alt text`,
          element: `img[src="${img.getAttribute('src')}"]`,
          fix: 'Add descriptive alt text to the image',
          codeExample: '<img src="..." alt="Description of image" />',
          severity: A11ySeverity.ERROR,
          wcagLevel: WCAGLevel.AA
        });
      }
      
      // Check for empty alt on decorative images without role
      if (alt === '' && role !== 'presentation') {
        this.addIssue({
          type: 'empty-alt',
          message: `Image ${index + 1} has empty alt without role="presentation"`,
          element: `img[src="${img.getAttribute('src')}"]`,
          fix: 'Add role="presentation" to decorative images',
          codeExample: '<img src="..." alt="" role="presentation" />',
          severity: A11ySeverity.WARNING,
          wcagLevel: WCAGLevel.AA
        });
      }
    });
  }

  /**
   * Check heading hierarchy
   *
   * @private
   * @param element - Root element to check
   */
  private checkHeadings(element: Element): void {
    const headings = Array.from(element.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let previousLevel = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > previousLevel + 1) {
        this.addIssue({
          type: 'heading-hierarchy',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading.tagName.toLowerCase(),
          fix: 'Maintain sequential heading hierarchy',
          codeExample: `Use h${previousLevel + 1} instead of h${level}`,
          severity: A11ySeverity.WARNING,
          wcagLevel: WCAGLevel.AA
        });
      }
      
      // Check for empty headings
      if (!heading.textContent?.trim()) {
        this.addIssue({
          type: 'empty-heading',
          message: `Empty ${heading.tagName} at position ${index + 1}`,
          element: heading.tagName.toLowerCase(),
          fix: 'Add descriptive text to the heading',
          codeExample: `<${heading.tagName}>Descriptive heading text</${heading.tagName}>`,
          severity: A11ySeverity.ERROR,
          wcagLevel: WCAGLevel.AA
        });
      }
      
      previousLevel = level;
    });
    
    // Check for multiple h1s
    const h1Count = element.querySelectorAll('h1').length;
    if (h1Count > 1) {
      this.addIssue({
        type: 'multiple-h1',
        message: `Found ${h1Count} h1 elements (should have only one)`,
        element: 'h1',
        fix: 'Use only one h1 per page for the main heading',
        codeExample: 'Use h2, h3, etc. for section headings',
        severity: A11ySeverity.WARNING,
        wcagLevel: WCAGLevel.AA
      });
    }
  }

  /**
   * Check links for accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkLinks(element: Element): void {
    const links = element.querySelectorAll('a');
    links.forEach((link, index) => {
      const text = link.textContent?.trim();
      const ariaLabel = link.getAttribute('aria-label');
      
      if (!text && !ariaLabel) {
        this.addIssue({
          type: 'no-link-text',
          message: `Link ${index + 1} has no accessible text`,
          element: `a[href="${link.getAttribute('href')}"]`,
          fix: 'Add descriptive text or aria-label to the link',
          codeExample: '<a href="..." aria-label="Description">...</a>',
          severity: A11ySeverity.ERROR,
          wcagLevel: WCAGLevel.AA
        });
      }
      
      // Check for generic link text
      if (text && ['click here', 'read more', 'more', 'link'].includes(text.toLowerCase())) {
        this.addIssue({
          type: 'generic-link-text',
          message: `Link ${index + 1} has generic text: "${text}"`,
          element: `a[href="${link.getAttribute('href')}"]`,
          fix: 'Use descriptive link text that explains the destination',
          codeExample: 'Use "Read full article" instead of "Read more"',
          severity: A11ySeverity.WARNING,
          wcagLevel: WCAGLevel.AA
        });
      }
      
      // Check for links opening in new window without warning
      const target = link.getAttribute('target');
      if (target === '_blank' && 
        !ariaLabel?.includes('new window') &&
        !text?.includes('(opens in new window)')
      ) {
        this.addIssue({
          type: 'new-window-no-warning',
          message: `Link ${index + 1} opens in new window without warning`,
          element: `a[href="${link.getAttribute('href')}"]`,
          fix: 'Add indication that link opens in new window',
          codeExample: '<a href="..." target="_blank" rel="noopener noreferrer">Link text (opens in new window)</a>',
          severity: A11ySeverity.WARNING,
          wcagLevel: WCAGLevel.AA
        });
      }
    });
  }

  /**
   * Check buttons for accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkButtons(element: Element): void {
    const buttons = element.querySelectorAll('button');
    buttons.forEach((button, index) => {
      const text = button.textContent?.trim();
      const ariaLabel = button.getAttribute('aria-label');
      
      if (!text && !ariaLabel) {
        this.addIssue({
          type: 'no-button-text',
          message: `Button ${index + 1} has no accessible text`,
          element: 'button',
          fix: 'Add text content or aria-label to the button',
          codeExample: '<button aria-label="Close dialog">×</button>',
          severity: A11ySeverity.ERROR,
          wcagLevel: WCAGLevel.AA
        });
      }
    });
  }

  /**
   * Check form elements for accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkForms(element: Element): void {
    const formControls = element.querySelectorAll('input, select, textarea');
    formControls.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      const label = id ? element.querySelector(`label[for="${id}"]`) : null;
      const type = input.getAttribute('type');
      
      // Skip hidden and submit inputs
      if (type === 'hidden' || type === 'submit' || type === 'button') return;
      
      // Check for form controls without labels
      if (!label && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          type: 'no-form-label',
          message: `Form control ${index + 1} (${input.tagName.toLowerCase()}) has no label`,
          element: `${input.tagName.toLowerCase()}[name="${input.getAttribute('name')}"]`,
          fix: 'Associate a label with the form control',
          codeExample: '<label for="email">Email:</label><input id="email" name="email" />',
          severity: A11ySeverity.ERROR,
          wcagLevel: WCAGLevel.AA
        });
      }
    });
  }

  /**
   * Check color contrast (basic check)
   *
   * @private
   * @param element - Root element to check
   */
  private checkColors(element: Element): void {
    // This is a simplified check - in a real implementation,
    // you would calculate actual contrast ratios
    const elements = element.querySelectorAll('*');
    elements.forEach((el) => {
      const styles = window.getComputedStyle(el);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Basic check for very low contrast
      if (color === backgroundColor) {
        this.addIssue({
          type: 'low-contrast',
          message: 'Text and background colors are identical',
          element: el.tagName.toLowerCase(),
          fix: 'Use contrasting colors for text and background',
          codeExample: 'Use dark text on light background or vice versa',
          severity: A11ySeverity.ERROR,
          wcagLevel: WCAGLevel.AA
        });
      }
    });
  }

  /**
   * Check keyboard accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkKeyboardAccess(element: Element): void {
    const interactiveElements = element.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    interactiveElements.forEach((el) => {
      const tabIndex = el.getAttribute('tabindex');
      if (tabIndex === '-1') {
        this.addIssue({
          type: 'not-keyboard-accessible',
          message: `Interactive ${el.tagName.toLowerCase()} is not keyboard focusable`,
          element: el.tagName.toLowerCase(),
          fix: 'Remove tabindex="-1" or use tabindex="0"',
          codeExample: '<button tabindex="0">Accessible button</button>',
          severity: A11ySeverity.ERROR,
          wcagLevel: WCAGLevel.AA
        });
      }
    });
    
    // Check for divs/spans with onclick but no keyboard handler
    const clickableNonInteractive = element.querySelectorAll('[onclick]:not(a):not(button)');
    clickableNonInteractive.forEach((el) => {
      this.addIssue({
        type: 'clickable-non-interactive',
        message: `${el.tagName.toLowerCase()} has onclick but no keyboard support`,
        element: el.tagName.toLowerCase(),
        fix: 'Add role, tabindex, and keyboard event handlers, or use a button',
        codeExample: '<button onClick={handleClick}>Click me</button>',
        severity: A11ySeverity.ERROR,
        wcagLevel: WCAGLevel.AA
      });
    });
  }

  /**
   * Check ARIA usage
   *
   * @private
   * @param element - Root element to check
   */
  private checkARIA(element: Element): void {
    const elementsWithRole = element.querySelectorAll('[role]');
    elementsWithRole.forEach((el) => {
      const role = el.getAttribute('role');
      const validRoles = ['button', 'link', 'menuitem', 'menubar', 'menu', 'tab', 'tabpanel', 'dialog', 'alert', 'status', 'log', 'marquee', 'timer', 'progressbar', 'slider', 'scrollbar', 'textbox', 'checkbox', 'radio', 'switch', 'separator', 'tooltip', 'tree', 'treeitem', 'grid', 'gridcell', 'columnheader', 'rowheader', 'row', 'cell', 'complementary', 'contentinfo', 'form', 'main', 'navigation', 'region', 'search', 'banner'];
      
      if (role && !validRoles.includes(role)) {
        this.addIssue({
          type: 'invalid-aria-role',
          message: `Invalid ARIA role: "${role}"`,
          element: el.tagName.toLowerCase(),
          fix: 'Use a valid ARIA role or remove the role attribute',
          codeExample: 'Use valid roles like "button", "link", "menu", etc.',
          severity: A11ySeverity.ERROR,
          wcagLevel: WCAGLevel.AA
        });
      }
      
      // Check aria-labelledby references
      const labelledBy = el.getAttribute('aria-labelledby');
      if (labelledBy) {
        const referencedElement = document.getElementById(labelledBy);
        if (!referencedElement) {
          this.addIssue({
            type: 'invalid-aria-labelledby',
            message: `aria-labelledby references non-existent element: "${labelledBy}"`,
            element: el.tagName.toLowerCase(),
            fix: 'Ensure the referenced element exists',
            codeExample: 'Make sure the element with the referenced ID exists',
            severity: A11ySeverity.ERROR,
            wcagLevel: WCAGLevel.AA
          });
        }
      }
    });
  }

  /**
   * Check for proper use of landmark regions
   *
   * @private
   * @param element - Root element to check
   */
  private checkLandmarks(element: Element): void {
    const landmarks = element.querySelectorAll('[role="banner"], [role="main"], [role="complementary"], [role="contentinfo"], [role="navigation"], [role="search"], [role="form"]');
    const landmarkTypes = new Set();
    
    landmarks.forEach((landmark) => {
      const role = landmark.getAttribute('role');
      if (landmarkTypes.has(role)) {
        this.addIssue({
          type: 'duplicate-landmark',
          message: `Duplicate landmark role: "${role}"`,
          element: landmark.tagName.toLowerCase(),
          fix: 'Use each landmark role only once per page',
          codeExample: 'Ensure each landmark role appears only once',
          severity: A11ySeverity.WARNING,
          wcagLevel: WCAGLevel.AA
        });
      }
      landmarkTypes.add(role);
    });
  }

  /**
   * Add an issue to the list
   *
   * @private
   * @param issue - Partial issue object
   */
  private addIssue(issue: Omit<A11yIssue, 'id'>): void {
    this.issues.push({
      ...issue,
      id: this.generateIssueId()
    });
  }

  /**
   * Generate unique issue ID
   *
   * @private
   * @returns Unique identifier
   */
  private generateIssueId(): string {
    return `a11y_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Calculate accessibility score based on issues
   *
   * @private
   * @returns Score from 0-100
   */
  private calculateScore(): number {
    const severityPenalties = {
      [A11ySeverity.ERROR]: 10,
      [A11ySeverity.WARNING]: 5,
      [A11ySeverity.INFO]: 2
    };
    
    const totalPenalty = this.issues.reduce((sum, issue) => {
      return sum + severityPenalties[issue.severity];
    }, 0);
    
    // Score decreases with more/severe issues
    const score = Math.max(0, 100 - totalPenalty);
    return Math.round(score);
  }

  /**
   * Get issues by severity
   *
   * @param severity - Severity level to filter by
   * @returns Array of issues with the specified severity
   */
  public getIssuesBySeverity(severity: A11ySeverity): A11yIssue[] {
    return this.issues.filter(issue => issue.severity === severity);
  }

  /**
   * Get issues by WCAG level
   *
   * @param level - WCAG level to filter by
   * @returns Array of issues that violate the specified WCAG level
   */
  public getIssuesByWCAGLevel(level: WCAGLevel): A11yIssue[] {
    return this.issues.filter(issue => issue.wcagLevel === level);
  }

  /**
   * Generate accessibility report
   *
   * @returns Formatted report string
   */
  public generateReport(): string {
    const score = this.calculateScore();
    const errors = this.getIssuesBySeverity(A11ySeverity.ERROR);
    const warnings = this.getIssuesBySeverity(A11ySeverity.WARNING);
    const info = this.getIssuesBySeverity(A11ySeverity.INFO);
    
    let report = `Accessibility Report\n`;
    report += `==================\n\n`;
    report += `Overall Score: ${score}/100\n\n`;
    report += `Issues Found: ${this.issues.length}\n`;
    report += `- Errors: ${errors.length}\n`;
    report += `- Warnings: ${warnings.length}\n`;
    report += `- Info: ${info.length}\n\n`;
    
    if (errors.length > 0) {
      report += `ERRORS:\n`;
      errors.forEach((issue, index) => {
        report += `${index + 1}. ${issue.message}\n`;
        report += `   Element: ${issue.element}\n`;
        report += `   Fix: ${issue.fix}\n`;
        report += `   Example: ${issue.codeExample}\n\n`;
      });
    }
    
    if (warnings.length > 0) {
      report += `WARNINGS:\n`;
      warnings.forEach((issue, index) => {
        report += `${index + 1}. ${issue.message}\n`;
        report += `   Element: ${issue.element}\n`;
        report += `   Fix: ${issue.fix}\n\n`;
      });
    }
    
    return report;
  }

  /**
   * Check a specific element for accessibility issues
   *
   * @param element - Element to check
   * @returns Accessibility check result
   */
  public checkElement(element: Element): A11yCheckResult {
    this.issues = [];
    
    // Run all checks
    this.checkImages(element);
    this.checkHeadings(element);
    this.checkLinks(element);
    this.checkButtons(element);
    this.checkForms(element);
    this.checkColors(element);
    this.checkKeyboardAccess(element);
    this.checkARIA(element);
    this.checkLandmarks(element);
    
    const score = this.calculateScore();
    const errors = this.getIssuesBySeverity(A11ySeverity.ERROR);
    const warnings = this.getIssuesBySeverity(A11ySeverity.WARNING);
    const info = this.getIssuesBySeverity(A11ySeverity.INFO);
    
    return {
      score,
      issues: this.issues,
      errors,
      warnings,
      info
    };
  }
}

// Export singleton instance
export const accessibilityChecker = new AccessibilityChecker();