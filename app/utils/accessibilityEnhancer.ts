export interface EnhancementOptions {
  addSkipLinks?: boolean;
  improveColorContrast?: boolean;
  addAriaLabels?: boolean;
  enhanceKeyboardNavigation?: boolean;
  addFocusIndicators?: boolean;
}

export interface EnhancementResult {
  success: boolean;
  changes: string[];
  errors: string[];
}

export class AccessibilityEnhancer {
  private options: EnhancementOptions;

  constructor(options: EnhancementOptions = {}) {
    this.options = {
      addSkipLinks: true,
      improveColorContrast: true,
      addAriaLabels: true,
      enhanceKeyboardNavigation: true,
      addFocusIndicators: true,
      ...options
    };
  }

  enhanceElement(element: HTMLElement): EnhancementResult {
    const changes: string[] = [];
    const errors: string[] = [];

    try {
      if (this.options.addSkipLinks) {
        this.addSkipLinks(element, changes);
      }

      if (this.options.improveColorContrast) {
        this.improveColorContrast(element, changes);
      }

      if (this.options.addAriaLabels) {
        this.addAriaLabels(element, changes);
      }

      if (this.options.enhanceKeyboardNavigation) {
        this.enhanceKeyboardNavigation(element, changes);
      }

      if (this.options.addFocusIndicators) {
        this.addFocusIndicators(element, changes);
      }

      return {
        success: true,
        changes,
        errors
      };
    } catch (error) {
      errors.push(`Enhancement failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return {
        success: false,
        changes,
        errors
      };
    }
  }

  private addSkipLinks(element: HTMLElement, changes: string[]): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    element.insertBefore(skipLink, element.firstChild);
    changes.push('Added skip link for keyboard navigation');
  }

  private improveColorContrast(element: HTMLElement, changes: string[]): void {
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(1.2) brightness(1.1);
      }
      
      .focus-visible {
        outline: 2px solid #005fcc;
        outline-offset: 2px;
      }
    `;
    
    document.head.appendChild(style);
    changes.push('Added high contrast styles');
  }

  private addAriaLabels(element: HTMLElement, changes: string[]): void {
    const buttons = element.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
        changes.push(`Added aria-label to button ${index + 1}`);
      }
    });

    const images = element.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
      img.setAttribute('alt', `Image ${index + 1}`);
      changes.push(`Added alt text to image ${index + 1}`);
    });
  }

  private enhanceKeyboardNavigation(element: HTMLElement, changes: string[]): void {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((el, index) => {
      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
      }
    });

    changes.push(`Enhanced keyboard navigation for ${focusableElements.length} elements`);
  }

  private addFocusIndicators(element: HTMLElement, changes: string[]): void {
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #005fcc;
        outline-offset: 2px;
      }
      
      *:focus:not(:focus-visible) {
        outline: none;
      }
    `;
    
    document.head.appendChild(style);
    changes.push('Added focus indicators');
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();