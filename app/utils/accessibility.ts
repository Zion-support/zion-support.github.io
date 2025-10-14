export const accessibility Utils = {
  add Skip Link: () => {
    const skip Link = document.create Element('a');
    skip Link.href = '#main-content';
    skip Link.text Content = 'Skip to main content';
    skip Link.className = 'sr-only focus:not-sr-only';
    document.body.insert Before(skip Link, document.body.first Child);
  },
  trap Focus: (element: HTMLElement) => {
    const focusable Elements = element.query Selector All(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first Element = focusable Elements[0] as HTMLElement;
    const last Element = focusable Elements[focusable Elements.length - 1] as HTMLElement;
    
    const handle Tab Key = (e: Keyboard Event) => {
      if (e.key === 'Tab') {
        if (e.shift Key) {
          if (document.active Element === first Element) {
            last Element.focus();
            e.prevent Default();
          }
        } else {
          if (document.active Element === last Element) {
            first Element.focus();
            e.prevent Default();
          }
        }
      }
    };
    
    element.add Event Listener('keydown', handle Tab Key);
    return () => {
      element.remove Event Listener('keydown', handle Tab Key);
    };
  },
  add Aria Labels: (element: HTMLElement, label: string) => {
    element.set Attribute('aria-label', label);
  },
  add Role: (element: HTMLElement, role: string) => {
    element.set Attribute('role', role);
  }
};