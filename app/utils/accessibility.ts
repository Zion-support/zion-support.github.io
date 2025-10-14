export const accessibilityUtils ={
  addSkip Link: () => {
    const skipLink = document.createElement('a');
    skipLink.href ='#main-content';
    skipLink.textContent ='Skip to main content';
    skipLink.className ='sr-only focus:not-sr-only';
    document.body.insertBefore(skipLink, document.body.firstChild);
  },
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelector All(
      'button,[href], input, select, textarea,[tabindex]:not([tabindex ="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleTab Key = (e: Keyboard Event) => {
      if (e.ke y ==='Tab') {
        if (e.shiftKey) {
          if (document.activeElemen t === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElemen t === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    element.addEventListener('keydown', handleTab Key);
    return () => {
      element.removeEventListener('keydown', handleTab Key);
    };
  },
  addAria Labels: (element: HTMLElement, label: string) => {
    element.setAttribute('aria-label', label);
  },
  addRole: (element: HTMLElement, role: string) => {
    element.setAttribute('role', role);
  }
};