// Accessibility enhancement utilities

export const enhanceAccessibility = () => {
  // Add keyboard navigation support
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      // Ensure proper tab order
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
      const nextIndex = (currentIndex + 1) % focusableElements.length;
      
      (focusableElements[nextIndex] as HTMLElement)?.focus();
      event.preventDefault();
    }
  };

  // Add focus management
  const manageFocus = (element: HTMLElement) => {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Add ARIA labels to interactive elements
  const addAriaLabels = () => {
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', button.textContent || 'Button');
      }
    });
  };

  // Initialize accessibility enhancements
  const init = () => {
    document.addEventListener('keydown', handleKeyDown);
    addAriaLabels();
  };

  return {
    init,
    manageFocus,
    addAriaLabels
  };
};

export default enhanceAccessibility;