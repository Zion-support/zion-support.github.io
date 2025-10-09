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
  /** Minor issue that may affect some users */
  MINOR = 'MINOR',
  /** Moderate issue that affects usability */
  MODERATE = 'MODERATE',
  /** Serious issue that significantly impacts accessibility */
  SERIOUS = 'SERIOUS',
  /** Critical issue that makes content inaccessible */
  CRITICAL = 'CRITICAL',
}
/**
 * WCAG success criteria levels
 */
export enum WCAGLevel {
  /** Level A - Basic accessibility */
  A = 'A',
  /** Level AA - Recommended level (most common requirement) */
  AA = 'AA',
  /** Level AAA - Enhanced accessibility */
  AAA = 'AAA',
}
/**
 * Accessibility issue interface
 */
export interface A11yIssue {
  /** Unique identifier for the issue */
  id: string;
  /** Issue type/category */
  type: string;
  /** Severity level */
  severity: A11ySeverity;
  /** WCAG level this issue violates */
  wcagLevel: WCAGLevel;
  /** WCAG success criterion (e.g., "1.1.1", "2.4.7") */
  wcagCriterion: string;
  /** Description of the issue */
  message: string;
  /** Element selector or description */
  element?: string;
  /** Suggested fix */
  fix?: string;
  /** Code example for the fix */
  codeExample?: string;
}
/**
 * Accessibility check result
 */
export interface A11yCheckResult {
  /** Whether the check passed */
  passed: boolean;
  /** Number of issues found */
  issueCount: number;
  /** List of issues */
  issues: A11yIssue[];
  /** Timestamp of the check */
  timestamp: Date;
  /** Overall accessibility score (0-100) */
  score: number;
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
 * if (import.meta.env.DEV) { }
 * ```
 */
export class AccessibilityChecker {
  private issues: A11yIssue[] = [];
  /**
   * Check an element and its descendants for accessibility issues
   *
   * @param element - The DOM element to check
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
    return {
      passed: this.issues.length === 0,
      issueCount: this.issues.length,
      issues: [...this.issues],
      timestamp: new Date(),
      score,
    };
  }
  /**
   * Check entire document for accessibility issues
   *
   * @returns Accessibility check result
   */
  public checkDocument(): A11yCheckResult {
    if (typeof document === 'undefined') {
      return {
        passed: true,
        issueCount: 0,
        issues: [],
        timestamp: new Date(),
        score: 100,
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
      // Check for missing alt attribute
      if (alt === null && role !== 'presentation') {
        this.addIssue({
          type: 'missing-alt-text',
          severity: A11ySeverity.CRITICAL,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '1.1.1',
          message: `Image ${index + 1} is missing alt text`,
          element: `img[src="${img['src']}"]`,
          fix: 'Add descriptive alt text to the image',
          codeExample: '<img src="..." alt="Description of image" />',
        });
      }
      // Check for empty alt on decorative images without role
      if (alt === '' && role !== 'presentation') {
        this.addIssue({
          type: 'empty-alt-without-role',
          severity: A11ySeverity.MODERATE,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '1.1.1',
          message: `Image ${index + 1} has empty alt without role="presentation"`,
          element: `img[src="${img['src']}"]`,
          fix: 'Add role="presentation" to decorative images',
          codeExample: '<img src="..." alt="" role="presentation" />',
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
    if (headings.length === 0) return;
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      // Check for skipped heading levels
      if (level > previousLevel + 1 && previousLevel !== 0) {
        this.addIssue({
          type: 'skipped-heading-level',
          severity: A11ySeverity.MODERATE,
          wcagLevel: WCAGLevel.AA,
          wcagCriterion: '2.4.6',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading.tagName.toLowerCase(),
          fix: 'Maintain sequential heading hierarchy',
          codeExample: `Use h${previousLevel + 1} instead of h${level}`,
        });
      }
      // Check for empty headings
      if (!heading.textContent?.trim()) {
        this.addIssue({
          type: 'empty-heading',
          severity: A11ySeverity.SERIOUS,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '2.4.6',
          message: `Empty ${heading.tagName} at position ${index + 1}`,
          element: heading.tagName.toLowerCase(),
          fix: 'Add descriptive text to the heading',
        });
      }
      previousLevel = level;
    });
    // Check for multiple h1s
    const h1Count = element.querySelectorAll('h1').length;
    if (h1Count > 1) {
      this.addIssue({
        type: 'multiple-h1',
        severity: A11ySeverity.MODERATE,
        wcagLevel: WCAGLevel.AA,
        wcagCriterion: '2.4.6',
        message: `Found ${h1Count} h1 elements (should have only one)`,
        element: 'h1',
        fix: 'Use only one h1 per page for the main heading',
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
      const ariaLabelledBy = link.getAttribute('aria-labelledby');
      const title = link.getAttribute('title');
      // Check for links without accessible text
      if (!text && !ariaLabel && !ariaLabelledBy && !title) {
        this.addIssue({
          type: 'link-no-text',
          severity: A11ySeverity.CRITICAL,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '2.4.4',
          message: `Link ${index + 1} has no accessible text`,
          element: `a[to="${link.getAttribute('href')}"]`,
          fix: 'Add descriptive text or aria-label to the link',
          codeExample: '<Link to="..." aria-label="Description">...</Link>',
        });
      }
      // Check for generic link text
      if (text && ['click here', 'read more', 'more', 'link'].includes(text.toLowerCase())) {
        this.addIssue({
          type: 'generic-link-text',
          severity: A11ySeverity.MODERATE,
          wcagLevel: WCAGLevel.AA,
          wcagCriterion: '2.4.4',
          message: `Link ${index + 1} has generic text: "${text}"`,
          element: `a[to="${link.getAttribute('href')}"]`,
          fix: 'Use descriptive link text that explains the destination',
          codeExample: 'Use "Read full article" instead of "Read more"',
        });
      }
      // Check for links opening in new window without warning
      const target = link.getAttribute('target');
      if (
        target === '_blank' &&
        !ariaLabel?.includes('new window') &&
        !text?.includes('(opens in new window)')
      ) {
        this.addIssue({
          type: 'new-window-no-warning',
          severity: A11ySeverity.MINOR,
          wcagLevel: WCAGLevel.AAA,
          wcagCriterion: '3.2.5',
          message: `Link ${index + 1} opens in new window without warning`,
          element: `a[to="${link.getAttribute('href')}"]`,
          fix: 'Add indication that link opens in new window',
          codeExample:
            '<Link to="..." target="_blank" rel="noopener noreferrer">Link text (opens in new window)</Link>',
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
      const ariaLabelledBy = button.getAttribute('aria-labelledby');
      // Check for buttons without accessible text
      if (!text && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          type: 'button-no-text',
          severity: A11ySeverity.CRITICAL,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '4.1.2',
          message: `Button ${index + 1} has no accessible text`,
          element: 'button',
          fix: 'Add text content or aria-label to the button',
          codeExample: '<button aria-label="Close dialog">×</button>',
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
    const inputs = element.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
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
          type: 'form-no-label',
          severity: A11ySeverity.CRITICAL,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '1.3.1',
          message: `Form control ${index + 1} (${input.tagName.toLowerCase()}) has no label`,
          element: `${input.tagName.toLowerCase()}[name="${input.getAttribute('name')}"]`,
          fix: 'Associate a label with the form control',
          codeExample: '<label for="email">Email:</label><input id="email" name="email" />',
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
    // This is a simplified check - full color contrast checking requires
    // computing actual rendered colors which is complex
    const elementsWithColor = element.querySelectorAll('[style*="color"]');
    elementsWithColor.forEach(el => {
      const style = el.getAttribute('style');
      if (style?.includes('color:') && !style.includes('background')) {
        this.addIssue({
          type: 'color-without-background',
          severity: A11ySeverity.MINOR,
          wcagLevel: WCAGLevel.AA,
          wcagCriterion: '1.4.3',
          message: 'Element has inline color without explicit background',
          element: el.tagName.toLowerCase(),
          fix: 'Ensure sufficient color contrast (4.5:1 for normal text)',
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
    // Check for interactive elements with tabindex="-1"
    const interactiveElements = element.querySelectorAll('a, button, input, select, textarea');
    interactiveElements.forEach(el => {
      const tabindex = el.getAttribute('tabindex');
      if (tabindex === '-1') {
        this.addIssue({
          type: 'interactive-not-focusable',
          severity: A11ySeverity.SERIOUS,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '2.1.1',
          message: `Interactive ${el.tagName.toLowerCase()} is not keyboard focusable`,
          element: el.tagName.toLowerCase(),
          fix: 'Remove tabindex="-1" or use tabindex="0"',
          codeExample: '<button tabindex="0">Accessible button</button>',
        });
      }
    });
    // Check for divs/spans with onclick but no keyboard handler
    const clickableNonInteractive = element.querySelectorAll('[onclick]:not(a):not(button)');
    clickableNonInteractive.forEach(el => {
      const role = el.getAttribute('role');
      const tabindex = el.getAttribute('tabindex');
      const onKeyDown = el.getAttribute('onkeydown');
      if (!role || !tabindex || !onKeyDown) {
        this.addIssue({
          type: 'click-without-keyboard',
          severity: A11ySeverity.SERIOUS,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '2.1.1',
          message: `${el.tagName.toLowerCase()} has onclick but no keyboard support`,
          element: el.tagName.toLowerCase(),
          fix: 'Add role, tabindex, and keyboard event handlers, or use a button',
          codeExample: '<button onClick={handleClick}>Click me</button>',
        });
      }
    });
  }
  /**
   * Check ARIA usage
   *
   * @private
   * @param element - Root element to check
   */
  private checkARIA(element: Element): void {
    const elementsWithAria = element.querySelectorAll(
      '[role], [aria-label], [aria-labelledby], [aria-describedby]'
    );
    elementsWithAria.forEach(el => {
      const role = el.getAttribute('role');
      // Check for invalid ARIA roles
      const validRoles = [
        'alert',
        'button',
        'checkbox',
        'dialog',
        'link',
        'navigation',
        'region',
        'search',
        'tabpanel',
        'banner',
        'complementary',
        'contentinfo',
        'form',
        'main',
        'article',
        'note',
        'presentation',
      ];
      if (role && !validRoles.includes(role)) {
        this.addIssue({
          type: 'invalid-aria-role',
          severity: A11ySeverity.MODERATE,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '4.1.2',
          message: `Invalid ARIA role: "${role}"`,
          element: el.tagName.toLowerCase(),
          fix: 'Use a valid ARIA role or remove the role attribute',
        });
      }
      // Check aria-labelledby references
      const labelledBy = el.getAttribute('aria-labelledby');
      if (labelledBy) {
        const referencedElement = document.getElementById(labelledBy);
        if (!referencedElement) {
          this.addIssue({
            type: 'aria-labelledby-missing',
            severity: A11ySeverity.SERIOUS,
            wcagLevel: WCAGLevel.A,
            wcagCriterion: '4.1.2',
            message: `aria-labelledby references non-existent element: "${labelledBy}"`,
            element: el.tagName.toLowerCase(),
            fix: 'Ensure the referenced element exists',
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
    const hasMain = element.querySelector('main, [role="main"]');
    // const _hasNav = element.querySelector('nav, [role="navigation"]');
    if (!hasMain) {
      this.addIssue({
        type: 'missing-main-landmark',
        severity: A11ySeverity.MODERATE,
        wcagLevel: WCAGLevel.AA,
        wcagCriterion: '2.4.1',
        message: 'Page is missing a main landmark',
        fix: 'Add a <main> element or role="main"',
        codeExample: '<main><!-- Main content --></main>',
      });
    }
  }
  /**
   * Add an issue to the list
   *
   * @private
   * @param issue - Partial issue object
   */
  private addIssue(issue: Omit<A11yIssue, 'id'>): void {
    this.issues.push({
      id: this.generateIssueId(),
      ...issue,
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
    if (this.issues.length === 0) return 100;
    const severityWeights = {
      [A11ySeverity.MINOR]: 1,
      [A11ySeverity.MODERATE]: 3,
      [A11ySeverity.SERIOUS]: 7,
      [A11ySeverity.CRITICAL]: 15,
    };
    const totalPenalty = this.issues.reduce((sum, issue) => {
      return sum + severityWeights[issue.severity];
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
    if (this.issues.length === 0) {
      return 'No accessibility issues found. Great job!';
    }
    
    return this.issues.map(issue => 
      `${issue.severity}: ${issue.message} (${issue.wcagLevel})`
    ).join('\n');
  }
}
