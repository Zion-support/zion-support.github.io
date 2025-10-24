export const accessibilityUtils = {
  // Add ARIA attributes to elements
  addAriaLabel: (element: HTMLElement, label: string) => {
    element.setAttribute('aria-label', label);
  },
  
  // Add ARIA role to elements
  addAriaRole: (element: HTMLElement, role: string) => {
    element.setAttribute('role', role);
  },
  
  // Check if element is accessible
  isAccessible: (element: HTMLElement): boolean => {
    return element.hasAttribute('aria-label') || 
           element.hasAttribute('aria-labelledby') ||
           element.textContent?.trim().length > 0;
  },
  
  // Focus management
  focusElement: (element: HTMLElement) => {
    element.focus();
  },
  
  // Skip to content functionality
  skipToContent: (contentId: string) => {
    const content = document.getElementById(contentId);
    if (content) {
      content.focus();
      content.scrollIntoView();
    }
  }
};
