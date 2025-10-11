// Accessibility Enhancement Utilities
export const accessibilityEnhancer = {
  // Add focus management
  manageFocus: (element: HTMLElement) => {
    element.focus();
  },

  // Add ARIA labels
  addAriaLabel: (element: HTMLElement, label: string) => {
    element.setAttribute('aria-label', label);
  },

  // Enhance keyboard navigation
  enhanceKeyboardNavigation: (element: HTMLElement) => {
    element.setAttribute('tabindex', '0');
  },

  // Add screen reader support
  addScreenReaderSupport: (element: HTMLElement, text: string) => {
    const srOnly = document.createElement('span');
    srOnly.className = 'sr-only';
    srOnly.textContent = text;
    element.appendChild(srOnly);
  }
};

export default accessibilityEnhancer;
