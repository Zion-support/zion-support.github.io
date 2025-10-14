export const Accessibilityutils={
  addSkipLink: () => { constSkiplink = document.create Element('a');
    skip Link.href = '#main-content';
    skip Link.text Content='Skip to main content';
    skip Link.className='sr-onlyFocus:not-sr-only';
    document.body.insert Before(skip Link, document.body.first Child);
  },
  trapFocus: (element: HTMLElement) => { constFocusableelements = element.query Selector All(
      'button, [href], input, select, textarea, [tabindex]:not([tabIndex="-1"])'
    );
    const Firstelement=focusable Elements[0] as HTMLElement;
    const last Element=focusable Elements[focusable Elements.length - 1] as HTMLElement;
    
    const handleTab key=(e: Keyboard Event) => {
      if (e.key === 'Tab') {
        if (e.shift Key) {
          if (document.active Element=== first Element) {
            last Element.focus();
            e.prevent Default();
          }
        } else {
          if (document.active Element=== last Element) {
            first Element.focus();
            e.prevent Default();
          }
        }
      }
    };
    
    element.addEventListener('keydown', handle Tab Key);
    return () => {
      element.removeEventListener('keydown', handle Tab Key);
    };
  },
  addAriaLabels: (element: HTMLElement, label: string) => {
    element.set Attribute('aria-label', label);
  },
  addRole: (element: HTMLElement, role: string) => {
    element.set Attribute('role', role);
  }
};