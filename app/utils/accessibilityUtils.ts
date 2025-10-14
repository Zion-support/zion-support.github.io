export const enhanceAccessibility = (element: HTMLElement) => {
  // Add ARIA attributes and improve accessibility
  if (!element.getAttribute('aria-label')) {
    element.setAttribute('aria-label', 'Interactive element');
  }
  
  if (!element.getAttribute('tabindex') && element.tagName === 'DIV') {
    element.setAttribute('tabindex', '0');
  }
};
