// Accessibility enhancement utilities

export interface AccessibilityOptions {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusIndicators: boolean;
  enableReducedMotion: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;

  constructor(options: Partial<AccessibilityOptions> = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableFocusIndicators: true,
      enableReducedMotion: false,
      ...options
    };
  }

  public enhanceElement(element: HTMLElement): void {
    if (this.options.enableKeyboardNavigation) {
      this.addKeyboardNavigation(element);
    }
    
    if (this.options.enableScreenReader) {
      this.addScreenReaderSupport(element);
    }
    
    if (this.options.enableFocusIndicators) {
      this.addFocusIndicators(element);
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
    if (!element.getAttribute('aria-label') && !element.textContent) {
      element.setAttribute('aria-label', 'Interactive element');
    }
  }

  private addFocusIndicators(element: HTMLElement): void {
    element.style.outline = 'none';
    element.addEventListener('focus', () => {
      element.style.outline = '2px solid #3b82f6';
      element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
      element.style.outline = 'none';
    });
  }

  public enhanceForm(form: HTMLFormElement): void {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach((input) => {
      const htmlInput = input as HTMLInputElement;
      
      if (!htmlInput.getAttribute('aria-label') && !htmlInput.getAttribute('aria-labelledby')) {
        const label = form.querySelector(`label[for="${htmlInput.id}"]`);
        if (label) {
          htmlInput.setAttribute('aria-labelledby', label.id || 'label-' + htmlInput.id);
        }
      }
    });
  }

  public enhanceNavigation(nav: HTMLElement): void {
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Main navigation');
    
    const links = nav.querySelectorAll('a');
    links.forEach((link, index) => {
      link.setAttribute('tabindex', '0');
      
      if (index === 0) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }
}

export default AccessibilityEnhancer;
