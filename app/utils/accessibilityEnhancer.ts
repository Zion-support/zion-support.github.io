// Accessibility enhancement utilities
export interface AccessibilityOptions {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusIndicators: boolean;
  enableAriaLabels: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;

  constructor(options: Partial<AccessibilityOptions> = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableFocusIndicators: true,
      enableAriaLabels: true,
      ...options
    };
  }

  enhanceElement(element: HTMLElement): void {
    if (this.options.enableKeyboardNavigation) {
      this.addKeyboardNavigation(element);
    }

    if (this.options.enableScreenReader) {
      this.addScreenReaderSupport(element);
    }

    if (this.options.enableHighContrast) {
      this.addHighContrastSupport(element);
    }

    if (this.options.enableFocusIndicators) {
      this.addFocusIndicators(element);
    }

    if (this.options.enableAriaLabels) {
      this.addAriaLabels(element);
    }
  }

  private addKeyboardNavigation(element: HTMLElement): void {
    element.setAttribute('tabindex', '0');
    
    element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        element.click();
      }
    });
  }

  private addScreenReaderSupport(element: HTMLElement): void {
    if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
      const text = element.textContent?.trim();
      if (text) {
        element.setAttribute('aria-label', text);
      }
    }
  }

  private addHighContrastSupport(element: HTMLElement): void {
    element.style.border = '2px solid';
    element.style.outline = '2px solid transparent';
  }

  private addFocusIndicators(element: HTMLElement): void {
    element.style.outline = '2px solid #0066cc';
    element.style.outlineOffset = '2px';
  }

  private addAriaLabels(element: HTMLElement): void {
    const role = element.getAttribute('role');
    if (!role) {
      if (element.tagName === 'BUTTON') {
        element.setAttribute('role', 'button');
      } else if (element.tagName === 'A') {
        element.setAttribute('role', 'link');
      }
    }
  }

  enhancePage(): void {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    
    interactiveElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        this.enhanceElement(element);
      }
    });
  }

  updateOptions(newOptions: Partial<AccessibilityOptions>): void {
    this.options = { ...this.options, ...newOptions };
  }
}

export default AccessibilityEnhancer;