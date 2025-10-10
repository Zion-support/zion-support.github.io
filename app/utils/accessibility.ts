export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusIndicators?: boolean;
}

export interface AccessibilityViolation {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  selector?: string;
  fix?: string;
}

export class AccessibilityChecker {
  private options: AccessibilityOptions;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: true,
      enableReducedMotion: true,
      enableFocusIndicators: true,
      ...options,
    };
  }

  checkElement(element: HTMLElement): AccessibilityViolation[] {
    const violations: AccessibilityViolation[] = [];

    // Check for alt text on images
    const images = element.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        violations.push({
          type: 'error',
          message: 'Image missing alt text',
          element: img,
          fix: 'Add alt attribute or aria-label',
        });
      }
    });

    // Check for form labels
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      if (id) {
        const label = element.querySelector(`label[for="${id}"]`);
        if (!label && !input.getAttribute('aria-label')) {
          violations.push({
            type: 'error',
            message: 'Form input missing label',
            element: input as HTMLElement,
            fix: 'Add label element or aria-label',
          });
        }
      }
    });

    // Check for heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        violations.push({
          type: 'warning',
          message: `Heading level ${level} skipped level ${previousLevel + 1}`,
          element: heading as HTMLElement,
          fix: 'Use proper heading hierarchy',
        });
      }
      previousLevel = level;
    });

    // Check for color contrast
    if (this.options.enableHighContrast) {
      const textElements = element.querySelectorAll('p, span, div, a, button');
      textElements.forEach((el) => {
        const style = window.getComputedStyle(el as HTMLElement);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        if (color && backgroundColor) {
          const contrast = this.calculateContrast(color, backgroundColor);
          if (contrast < 4.5) {
            violations.push({
              type: 'warning',
              message: `Low color contrast: ${contrast.toFixed(2)}`,
              element: el as HTMLElement,
              fix: 'Increase color contrast to at least 4.5:1',
            });
          }
        }
      });
    }

    return violations;
  }

  private calculateContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you would parse the colors and calculate luminance
    return 4.5; // Placeholder
  }

  checkPage(): AccessibilityViolation[] {
    const violations: AccessibilityViolation[] = [];
    
    // Check main content
    const main = document.querySelector('main');
    if (main) {
      violations.push(...this.checkElement(main as HTMLElement));
    }

    // Check navigation
    const nav = document.querySelector('nav');
    if (nav) {
      violations.push(...this.checkElement(nav as HTMLElement));
    }

    // Check for skip links
    const skipLinks = document.querySelectorAll('a[href="#main"], a[href="#content"]');
    if (skipLinks.length === 0) {
      violations.push({
        type: 'info',
        message: 'No skip links found',
        fix: 'Add skip links for keyboard navigation',
      });
    }

    return violations;
  }

  generateReport(): string {
    const violations = this.checkPage();
    const errors = violations.filter(v => v.type === 'error').length;
    const warnings = violations.filter(v => v.type === 'warning').length;
    const info = violations.filter(v => v.type === 'info').length;

    return `
Accessibility Report
==================
Errors: ${errors}
Warnings: ${warnings}
Info: ${info}

${violations.map(v => `${v.type.toUpperCase()}: ${v.message}${v.fix ? ` - Fix: ${v.fix}` : ''}`).join('\n')}
    `;
  }
}

export const accessibilityUtils = {
  checkElement: (element: HTMLElement, options?: AccessibilityOptions) => {
    const checker = new AccessibilityChecker(options);
    return checker.checkElement(element);
  },
  
  checkPage: (options?: AccessibilityOptions) => {
    const checker = new AccessibilityChecker(options);
    return checker.checkPage();
  },
  
  generateReport: (options?: AccessibilityOptions) => {
    const checker = new AccessibilityChecker(options);
    return checker.generateReport();
  },
};

export default accessibilityUtils;