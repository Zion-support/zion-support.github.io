/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility improvements for web applications
 */

// Accessibility Enhancement Utilities
export interface AccessibilityOptions {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusIndicators: boolean;
  enableAriaLabels: boolean;
}

export const defaultAccessibilityOptions: AccessibilityOptions = {
  enableKeyboardNavigation: true,
  enableScreenReader: true,
  enableHighContrast: false,
  enableFocusIndicators: true,
  enableAriaLabels: true,
};

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;

  constructor(options: Partial<AccessibilityOptions> = {}) {
    this.options = { ...defaultAccessibilityOptions, ...options };
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
    
    if (this.options.enableAriaLabels) {
      this.addAriaLabels(element);
    }
  }

  private addKeyboardNavigation(element: HTMLElement): void {
    element.setAttribute('tabindex', '0');
  }

  private addScreenReaderSupport(element: HTMLElement): void {
    if (!element.getAttribute('aria-label')) {
      const text = element.textContent || element.getAttribute('alt') || 'Interactive element';
      element.setAttribute('aria-label', text);
    }
  }

  private addFocusIndicators(element: HTMLElement): void {
    element.style.outline = '2px solid #0066cc';
    element.style.outlineOffset = '2px';
  }

  private addAriaLabels(element: HTMLElement): void {
    if (element.tagName === 'BUTTON' && !element.getAttribute('aria-label')) {
      element.setAttribute('aria-label', element.textContent || 'Button');
    }
  }
}

export function enhanceAccessibility(
  selector: string, 
  options: Partial<AccessibilityOptions> = {}
): void {
  const enhancer = new AccessibilityEnhancer(options);
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    if (element instanceof HTMLElement) {
      enhancer.enhanceElement(element);
    }
  });
}

export default AccessibilityEnhancer;
