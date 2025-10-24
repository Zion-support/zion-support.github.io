export const accessibilityUtils = {
  addAriaLabel: (element: HTMLElement, label: string) => {
    element.setAttribute('aria-label', label);
  },
  
  addAriaRole: (element: HTMLElement, role: string) => {
    element.setAttribute('role', role);
  },
  
  isAccessible: (element: HTMLElement): boolean => {
    return element.hasAttribute('aria-label') || 
           element.hasAttribute('aria-labelledby') ||
           element.textContent?.trim().length > 0;
  }
};
