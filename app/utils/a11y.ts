// Accessibility utilities
export const a11y = {
  // Check if element is focusable
  isFocusable: (element: HTMLElement): boolean => {
    const focusableSelectors = [
      'button',
      'input',
      'select',
      'textarea',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ];
    
    return focusableSelectors.some(selector => 
      element.matches(selector)
    );
  },

  // Get focusable elements within a container
  getFocusableElements: (container: HTMLElement): HTMLElement[] => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ];
    
    return Array.from(container.querySelectorAll(focusableSelectors.join(', ')));
  },

  // Trap focus within an element
  trapFocus: (element: HTMLElement): (() => void) => {
    const focusableElements = a11y.getFocusableElements(element);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }
};

export default a11y;