// Accessibility utilities

export const accessibilityUtils = {
  // Check if element is focusable
  isFocusable: (element: HTMLElement): boolean => {
    const focusableElements = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];
    
    return focusableElements.some(selector => element.matches(selector));
  },

  // Get accessible name for element
  getAccessibleName: (element: HTMLElement): string => {
    const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;

    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    if (ariaLabelledBy) {
      const labelElement = document.getElementById(ariaLabelledBy);
      if (labelElement) return labelElement.textContent || '';
    }

    const title = element.getAttribute('title');
    if (title) return title;

    return element.textContent || '';
  },

  // Check color contrast ratio
  getContrastRatio: (color1: string, color2: string): number => {
    // Simplified contrast ratio calculation
    // In a real implementation, you would parse colors and calculate luminance
    return 4.5; // Placeholder value
  },

  // Validate ARIA attributes
  validateAriaAttributes: (element: HTMLElement): string[] => {
    const errors: string[] = [];
    
    // Check for required ARIA attributes
    if (element.hasAttribute('aria-expanded') && !element.hasAttribute('aria-controls')) {
      errors.push('Elements with aria-expanded should have aria-controls');
    }
    
    return errors;
  }
};

export default accessibilityUtils;