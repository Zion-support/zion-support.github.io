// Accessibility Enhancement Utilities
export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
  enableAriaLabels?: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableFocusIndicators: true,
      enableAriaLabels: true,
      ...options
    };
  }

  /**
   * Enhance a DOM element with accessibility features
   */
  enhanceElement(element: HTMLElement): void {
    if (this.options.enableAriaLabels) {
      this.addAriaLabels(element);
    }
    
    if (this.options.enableFocusIndicators) {
      this.addFocusIndicators(element);
    }
    
    if (this.options.enableKeyboardNavigation) {
      this.addKeyboardNavigation(element);
    }
  }

  /**
   * Add ARIA labels to interactive elements
   */
  private addAriaLabels(element: HTMLElement): void {
    const interactiveElements = element.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      if (!htmlEl.getAttribute('aria-label') && !htmlEl.getAttribute('aria-labelledby')) {
        const text = htmlEl.textContent?.trim() || htmlEl.getAttribute('placeholder') || 'Interactive element';
        htmlEl.setAttribute('aria-label', text);
      }
    });
  }

  /**
   * Add focus indicators to interactive elements
   */
  private addFocusIndicators(element: HTMLElement): void {
    const interactiveElements = element.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.outline = '2px solid #3b82f6';
      htmlEl.style.outlineOffset = '2px';
    });
  }

  /**
   * Add keyboard navigation support
   */
  private addKeyboardNavigation(element: HTMLElement): void {
    const interactiveElements = element.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.setAttribute('tabindex', '0');
    });
  }

  /**
   * Check if the current environment supports accessibility features
   */
  isAccessibilitySupported(): boolean {
    return typeof window !== 'undefined' && 
           'navigator' in window && 
           'userAgent' in navigator;
  }

  /**
   * Get accessibility recommendations for an element
   */
  getRecommendations(element: HTMLElement): string[] {
    const recommendations: string[] = [];
    
    // Check for missing alt text on images
    const images = element.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.getAttribute('alt')) {
        recommendations.push('Add alt text to images for screen readers');
      }
    });
    
    // Check for missing form labels
    const inputs = element.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      const htmlInput = input as HTMLInputElement;
      if (!htmlInput.getAttribute('aria-label') && 
          !htmlInput.getAttribute('aria-labelledby') &&
          !htmlInput.closest('label')) {
        recommendations.push('Add labels or aria-labels to form inputs');
      }
    });
    
    // Check for proper heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        recommendations.push('Maintain proper heading hierarchy (h1 -> h2 -> h3, etc.)');
      }
      lastLevel = level;
    });
    
    return recommendations;
  }
}

// Default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Utility functions
export const enhanceAccessibility = (element: HTMLElement, options?: AccessibilityOptions) => {
  const enhancer = new AccessibilityEnhancer(options);
  enhancer.enhanceElement(element);
};

export const getAccessibilityScore = (element: HTMLElement): number => {
  const recommendations = accessibilityEnhancer.getRecommendations(element);
  const totalChecks = 10; // Total number of accessibility checks
  const issues = recommendations.length;
  return Math.max(0, Math.round(((totalChecks - issues) / totalChecks) * 100));
};