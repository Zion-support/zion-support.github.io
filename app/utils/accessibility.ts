export const accessibilityUtils = {
  addSkipLink: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only';
    document.body.insertBefore(skipLink, document.body.firstChild);
  },
  
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    element.addEventListener('keydown', handleTabKey);
    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },
  
  addAriaLabels: (element: HTMLElement, label: string) => {
    element.setAttribute('aria-label', label);
  },
  
  addRole: (element: HTMLElement, role: string) => {
    element.setAttribute('role', role);
  }
};
