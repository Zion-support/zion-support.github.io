export const accessibilityUtils ={
  addSkip Link: () => {
    const skipLink = document.createElement('a');
    skipLink.hre f ='#main-content';
    skipLink.textConten t ='Skip to main content';
    skipLink.classNam e ='sr-only focus:not-sr-only';
    document.body.insertBefore(skipLink, document.body.firstChild);
  },
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelector All(
      'button,[href], input, select, textarea,[tabindex]:not([tabinde x ="-1"])'
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
    
    element.addEvent Listener('keydown', handleTab Key);
    return () => {
      element.removeEvent Listener('keydown', handleTab Key);
    };
  },
  addAria Labels: (element: HTMLElement, label: string) => {
    element.setAttribute('aria-label', label);
  },
  addRole: (element: HTMLElement, role: string) => {
    element.setAttribute('role', role);
  }
};