// Accessibility checker utility

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  selector?: string;
  fix?: string;
}

export interface AccessibilityReport {
  issues: AccessibilityIssue[];
  score: number;
  passed: boolean;
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = [];

  /**
   * Check accessibility of a page or element
   */
  check(element: HTMLElement = document.body): AccessibilityReport {
    this.issues = [];
    
    this.checkImages(element);
    this.checkHeadings(element);
    this.checkLinks(element);
    this.checkForms(element);
    this.checkButtons(element);
    this.checkLandmarks(element);
    this.checkColorContrast(element);
    this.checkKeyboardNavigation(element);

    const score = this.calculateScore();
    const passed = score >= 80;

    return {
      issues: this.issues,
      score,
      passed
    };
  }

  private checkImages(element: HTMLElement): void {
    const images = element.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        this.issues.push({
          type: 'error',
          message: 'Image missing alt text',
          element: img,
          fix: 'Add alt attribute or aria-label'
        });
      }
    });
  }

  private checkHeadings(element: HTMLElement): void {
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;

    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > previousLevel + 1) {
        this.issues.push({
          type: 'warning',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading as HTMLElement,
          fix: 'Use sequential heading levels'
        });
      }
      
      previousLevel = level;
    });
  }

  private checkLinks(element: HTMLElement): void {
    const links = element.querySelectorAll('a');
    links.forEach(link => {
      const text = link.textContent?.trim();
      const href = link.getAttribute('href');
      
      if (!text && !link.querySelector('img')) {
        this.issues.push({
          type: 'error',
          message: 'Link missing accessible text',
          element: link as HTMLElement,
          fix: 'Add text content or aria-label'
        });
      }
      
      if (href === '#' || href === 'javascript:void(0)') {
        this.issues.push({
          type: 'warning',
          message: 'Link has empty or JavaScript href',
          element: link as HTMLElement,
          fix: 'Use proper href or button element'
        });
      }
    });
  }

  private checkForms(element: HTMLElement): void {
    const inputs = element.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      const label = element.querySelector(`label[for="${id}"]`);
      
      if (!label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        this.issues.push({
          type: 'error',
          message: 'Form control missing label',
          element: input as HTMLElement,
          fix: 'Add label element or aria-label'
        });
      }
    });
  }

  private checkButtons(element: HTMLElement): void {
    const buttons = element.querySelectorAll('button');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      
      if (!text && !button.getAttribute('aria-label')) {
        this.issues.push({
          type: 'error',
          message: 'Button missing accessible text',
          element: button,
          fix: 'Add text content or aria-label'
        });
      }
    });
  }

  private checkLandmarks(element: HTMLElement): void {
    const landmarks = element.querySelectorAll('[role="main"], [role="banner"], [role="contentinfo"], [role="navigation"]');
    
    if (landmarks.length === 0) {
      this.issues.push({
        type: 'warning',
        message: 'Page missing landmark elements',
        fix: 'Add main, header, footer, or nav elements'
      });
    }
  }

  private checkColorContrast(element: HTMLElement): void {
    // Simplified color contrast check
    // In a real implementation, you'd use a proper color contrast library
    const elements = element.querySelectorAll('*');
    elements.forEach(el => {
      const style = window.getComputedStyle(el);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color && backgroundColor && color !== backgroundColor) {
        // Placeholder for actual contrast calculation
        this.issues.push({
          type: 'info',
          message: 'Color contrast should be verified',
          element: el as HTMLElement,
          fix: 'Ensure 4.5:1 contrast ratio for normal text'
        });
      }
    });
  }

  private checkKeyboardNavigation(element: HTMLElement): void {
    const interactiveElements = element.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    
    interactiveElements.forEach(el => {
      const tabIndex = el.getAttribute('tabindex');
      
      if (tabIndex === '0' && !el.matches('button, a, input, select, textarea')) {
        this.issues.push({
          type: 'warning',
          message: 'Element with tabindex="0" should be focusable',
          element: el as HTMLElement,
          fix: 'Ensure element is keyboard accessible'
        });
      }
    });
  }

  private calculateScore(): number {
    const totalIssues = this.issues.length;
    const errorCount = this.issues.filter(issue => issue.type === 'error').length;
    const warningCount = this.issues.filter(issue => issue.type === 'warning').length;
    
    // Calculate score based on issues
    let score = 100;
    score -= errorCount * 10; // Each error reduces score by 10
    score -= warningCount * 5; // Each warning reduces score by 5
    
    return Math.max(0, score);
  }
}

export default AccessibilityChecker;