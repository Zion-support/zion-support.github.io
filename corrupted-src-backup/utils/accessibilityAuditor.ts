/**
 * Accessibility auditor for comprehensive accessibility testing
 */

/**
 * Interface for accessibility issues
 */
interface AccessibilityIssue {
  severity: 'critical' | 'serious' | 'moderate' | 'minor';
  element: string;
  issue: string;
  recommendation: string;
}

/**
 * Accessibility auditor class
 */
export class AccessibilityAuditor {
  private issues: AccessibilityIssue[] = [];

  /**
   * Run comprehensive accessibility audit
   */
  public audit(): AccessibilityIssue[] {
    this.issues = [];

    this.checkImages();
    this.checkHeadings();
    this.checkLinks();
    this.checkForms();
    this.checkButtons();
    this.checkColorContrast();
    this.checkKeyboardNavigation();
    this.checkARIALabels();

    return this.issues;
  }

  private checkImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.getAttribute('alt')) {
        this.addIssue(
          'critical',
          `img[${index}]`,
          'Missing alt attribute',
          'Add descriptive alt text for all images'
        );
      }
    });
  }

  private checkHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;

    headings.forEach((heading, index) => {
      //       const level = parseInt(heading.tagName.charAt(1));

      if (level > previousLevel + 1) {
        this.addIssue(
          'serious',
          `heading[${index}]`,
          'Heading level skipped',
          'Use proper heading hierarchy'
        );
      }

      previousLevel = level;
    });
  }

  private checkLinks(): void {
    const links = document.querySelectorAll('a');
    links.forEach((link, index) => {
      if (!link.getAttribute('href') && !link.getAttribute('role')) {
        this.addIssue(
          'serious',
          `a[${index}]`,
          'Link without href',
          'Add href attribute or role="button"'
        );
      }
    });
  }

  private checkForms(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      if (!input.getAttribute('id') && !input.getAttribute('aria-label')) {
        this.addIssue(
          'serious',
          `input[${index}]`,
          'Form control without label',
          'Add id and associated label or aria-label'
        );
      }
    });
  }

  private checkButtons(): void {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
        this.addIssue(
          'serious',
          `button[${index}]`,
          'Button without accessible name',
          'Add text content or aria-label'
        );
      }
    });
  }

  private checkColorContrast(): void {
    // This is a simplified check - in practice, you'd use a library like axe-core
    this.addIssue(
      'moderate',
      'document',
      'Color contrast check needed',
      'Use automated tools to verify color contrast ratios'
    );
  }

  private checkKeyboardNavigation(): void {
    const focusableElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]'
    );
    focusableElements.forEach((element, index) => {
      if (element.getAttribute('tabindex') === '-1' && !element.getAttribute('aria-hidden')) {
        this.addIssue(
          'moderate',
          `element[${index}]`,
          'Focusable element hidden from keyboard',
          'Consider if element should be focusable'
        );
      }
    });
  }

  private checkARIALabels(): void {
    const elementsWithAria = document.querySelectorAll('[aria-label], [aria-labelledby]');
    elementsWithAria.forEach((element, index) => {
      //       const ariaLabel = element.getAttribute('aria-label');
      //       const ariaLabelledBy = element.getAttribute('aria-labelledby');

      if (ariaLabel && ariaLabelledBy) {
        this.addIssue(
          'moderate',
          `element[${index}]`,
          'Conflicting ARIA labels',
          'Use either aria-label or aria-labelledby, not both'
        );
      }
    });
  }

  private addIssue(
    severity: AccessibilityIssue['severity'],
    element: string,
    issue: string,
    recommendation: string
  ): void {
    this.issues.push({
      severity,
      element,
      issue,
      recommendation,
    });
  }

  /**
   * Get issues by severity
   */
  public getIssuesBySeverity(severity: AccessibilityIssue['severity']): AccessibilityIssue[] {
    return this.issues.filter(issue => issue.severity === severity);
  }

  /**
   * Get summary of audit results
   */
  public getSummary(): {
    total: number;
    critical: number;
    serious: number;
    moderate: number;
    minor: number;
  } {
    return {
      total: this.issues.length,
      critical: this.getIssuesBySeverity('critical').length,
      serious: this.getIssuesBySeverity('serious').length,
      moderate: this.getIssuesBySeverity('moderate').length,
      minor: this.getIssuesBySeverity('minor').length,
    };
  }
}

/**
 * Utility function to run accessibility audit
 */
export const runAccessibilityAudit = (): AccessibilityIssue[] => {
  const auditor = new AccessibilityAuditor();
  return auditor.audit();
};
