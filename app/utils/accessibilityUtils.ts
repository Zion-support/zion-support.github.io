// Comprehensive accessibility utilities

export interface AccessibilityAuditResult {
  score: number;
  issues: AccessibilityIssue[];
  recommendations: string[];
  timestamp: string;
}

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  selector?: string;
  code: string;
  impact: 'critical' | 'serious' | 'moderate' | 'minor';
}

export class AccessibilityAuditor {
  private static instance: AccessibilityAuditor;
  private issues: AccessibilityIssue[] = [];

  private constructor() {}

  public static getInstance(): AccessibilityAuditor {
    if (!AccessibilityAuditor.instance) {
      AccessibilityAuditor.instance = new AccessibilityAuditor();
    }
    return AccessibilityAuditor.instance;
  }

  public audit(): AccessibilityAuditResult {
    this.issues = [];
    
    this.checkImages();
    this.checkHeadings();
    this.checkLinks();
    this.checkButtons();
    this.checkFormElements();
    this.checkColorContrast();
    this.checkKeyboardNavigation();
    this.checkFocusManagement();
    this.checkARIALabels();
    this.checkSemanticHTML();

    const score = this.calculateScore();
    const recommendations = this.generateRecommendations();

    return {
      score,
      issues: this.issues,
      recommendations,
      timestamp: new Date().toISOString(),
    };
  }

  private checkImages(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach((img, index) => {
      if (!img.alt) {
        this.addIssue({
          type: 'error',
          message: 'Image missing alt text',
          element: img,
          selector: `img:nth-child(${index + 1})`,
          code: 'WCAG2.1:1.1.1',
          impact: 'critical',
        });
      }

      if (img.alt === '') {
        this.addIssue({
          type: 'warning',
          message: 'Image has empty alt text - should be decorative or have meaningful description',
          element: img,
          selector: `img:nth-child(${index + 1})`,
          code: 'WCAG2.1:1.1.1',
          impact: 'moderate',
        });
      }
    });
  }

  private checkHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingLevels: number[] = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      headingLevels.push(level);

      if (!heading.textContent?.trim()) {
        this.addIssue({
          type: 'error',
          message: 'Heading is empty',
          element: heading as HTMLElement,
          selector: `${heading.tagName.toLowerCase()}:nth-child(${index + 1})`,
          code: 'WCAG2.1:1.3.1',
          impact: 'serious',
        });
      }
    });

    // Check heading hierarchy
    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] > headingLevels[i - 1] + 1) {
        this.addIssue({
          type: 'warning',
          message: 'Heading hierarchy skipped - heading levels should not skip levels',
          code: 'WCAG2.1:1.3.1',
          impact: 'moderate',
        });
      }
    }
  }

  private checkLinks(): void {
    const links = document.querySelectorAll('a');
    
    links.forEach((link, index) => {
      const text = link.textContent?.trim();
      const href = link.getAttribute('href');

      if (!text && !link.querySelector('img[alt]')) {
        this.addIssue({
          type: 'error',
          message: 'Link has no accessible name',
          element: link,
          selector: `a:nth-child(${index + 1})`,
          code: 'WCAG2.1:2.4.4',
          impact: 'critical',
        });
      }

      if (href === '#' || href === 'javascript:void(0)') {
        this.addIssue({
          type: 'warning',
          message: 'Link has no meaningful href attribute',
          element: link,
          selector: `a:nth-child(${index + 1})`,
          code: 'WCAG2.1:2.4.4',
          impact: 'moderate',
        });
      }

      if (text && text.length < 4) {
        this.addIssue({
          type: 'warning',
          message: 'Link text is too short - consider making it more descriptive',
          element: link,
          selector: `a:nth-child(${index + 1})`,
          code: 'WCAG2.1:2.4.4',
          impact: 'minor',
        });
      }
    });
  }

  private checkButtons(): void {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button, index) => {
      const text = button.textContent?.trim();
      const ariaLabel = button.getAttribute('aria-label');
      const ariaLabelledby = button.getAttribute('aria-labelledby');

      if (!text && !ariaLabel && !ariaLabelledby) {
        this.addIssue({
          type: 'error',
          message: 'Button has no accessible name',
          element: button,
          selector: `button:nth-child(${index + 1})`,
          code: 'WCAG2.1:4.1.2',
          impact: 'critical',
        });
      }
    });
  }

  private checkFormElements(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const name = input.getAttribute('name');
      const type = input.getAttribute('type');
      const label = document.querySelector(`label[for="${id}"]`);

      if (type !== 'hidden' && !label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        this.addIssue({
          type: 'error',
          message: 'Form control missing label',
          element: input as HTMLElement,
          selector: `${input.tagName.toLowerCase()}:nth-child(${index + 1})`,
          code: 'WCAG2.1:3.3.2',
          impact: 'critical',
        });
      }

      if (input.hasAttribute('required') && !input.getAttribute('aria-required')) {
        this.addIssue({
          type: 'warning',
          message: 'Required form control should have aria-required attribute',
          element: input as HTMLElement,
          selector: `${input.tagName.toLowerCase()}:nth-child(${index + 1})`,
          code: 'WCAG2.1:3.3.2',
          impact: 'moderate',
        });
      }
    });
  }

  private checkColorContrast(): void {
    // This is a simplified check - in a real implementation, you'd use a library like color-contrast
    const elements = document.querySelectorAll('*');
    
    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Basic check for transparent backgrounds
      if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
        const parent = element.parentElement;
        if (parent) {
          const parentStyles = window.getComputedStyle(parent);
          const parentBackgroundColor = parentStyles.backgroundColor;
          
          if (parentBackgroundColor === 'rgba(0, 0, 0, 0)' || parentBackgroundColor === 'transparent') {
            this.addIssue({
              type: 'warning',
              message: 'Element may have insufficient color contrast',
              element: element as HTMLElement,
              code: 'WCAG2.1:1.4.3',
              impact: 'serious',
            });
          }
        }
      }
    });
  }

  private checkKeyboardNavigation(): void {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element, index) => {
      const tabIndex = element.getAttribute('tabindex');
      
      if (tabIndex && parseInt(tabIndex) > 0) {
        this.addIssue({
          type: 'warning',
          message: 'Element has positive tabindex - may disrupt natural tab order',
          element: element as HTMLElement,
          selector: `[tabindex="${tabIndex}"]:nth-child(${index + 1})`,
          code: 'WCAG2.1:2.4.3',
          impact: 'moderate',
        });
      }
    });
  }

  private checkFocusManagement(): void {
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    
    modals.forEach((modal) => {
      const focusableElements = modal.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) {
        this.addIssue({
          type: 'error',
          message: 'Modal dialog has no focusable elements',
          element: modal as HTMLElement,
          code: 'WCAG2.1:2.4.3',
          impact: 'critical',
        });
      }
    });
  }

  private checkARIALabels(): void {
    const elementsWithAriaLabel = document.querySelectorAll('[aria-label]');
    
    elementsWithAriaLabel.forEach((element) => {
      const ariaLabel = element.getAttribute('aria-label');
      
      if (!ariaLabel?.trim()) {
        this.addIssue({
          type: 'error',
          message: 'Element has empty aria-label',
          element: element as HTMLElement,
          code: 'WCAG2.1:4.1.2',
          impact: 'serious',
        });
      }
    });
  }

  private checkSemanticHTML(): void {
    const divs = document.querySelectorAll('div');
    
    divs.forEach((div) => {
      const role = div.getAttribute('role');
      const onClick = div.getAttribute('onclick');
      
      if (onClick && !role) {
        this.addIssue({
          type: 'warning',
          message: 'Clickable div should have appropriate role attribute',
          element: div,
          code: 'WCAG2.1:4.1.2',
          impact: 'moderate',
        });
      }
    });
  }

  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);
  }

  private calculateScore(): number {
    if (this.issues.length === 0) return 100;

    const criticalIssues = this.issues.filter(issue => issue.impact === 'critical').length;
    const seriousIssues = this.issues.filter(issue => issue.impact === 'serious').length;
    const moderateIssues = this.issues.filter(issue => issue.impact === 'moderate').length;
    const minorIssues = this.issues.filter(issue => issue.impact === 'minor').length;

    const penalty = (criticalIssues * 20) + (seriousIssues * 10) + (moderateIssues * 5) + (minorIssues * 2);
    
    return Math.max(0, 100 - penalty);
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];

    const criticalIssues = this.issues.filter(issue => issue.impact === 'critical');
    const seriousIssues = this.issues.filter(issue => issue.impact === 'serious');

    if (criticalIssues.length > 0) {
      recommendations.push('Fix all critical accessibility issues immediately');
    }

    if (seriousIssues.length > 0) {
      recommendations.push('Address serious accessibility issues to improve user experience');
    }

    if (this.issues.some(issue => issue.code.includes('1.1.1'))) {
      recommendations.push('Ensure all images have meaningful alt text');
    }

    if (this.issues.some(issue => issue.code.includes('2.4.4'))) {
      recommendations.push('Make link text more descriptive and meaningful');
    }

    if (this.issues.some(issue => issue.code.includes('3.3.2'))) {
      recommendations.push('Add proper labels to all form controls');
    }

    if (this.issues.some(issue => issue.code.includes('1.4.3'))) {
      recommendations.push('Improve color contrast ratios for better readability');
    }

    return recommendations;
  }
}

export const accessibilityAuditor = AccessibilityAuditor.getInstance();

// Utility functions
export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

export const skipToMainContent = (): void => {
  const mainContent = document.querySelector('main, [role="main"]') as HTMLElement;
  if (mainContent) {
    mainContent.focus();
    mainContent.scrollIntoView();
  }
};

export default accessibilityAuditor;