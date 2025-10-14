export constaccessibilityUtils= {
  add SkipLink: () => {
    const skipLink= document.create Element('a');
    skip Link.href = '#main-content';
    skip Link.text Content= 'Skip to main content';
    skip Link.className = 'sr-only focus:not-sr-only';
    document.body.insert Before(skip Link, document.body.first Child);
  },
  trap Focus: (element: HTMLElement) => {
    const focusableElements= element.query Selector All(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement= focusable Elements[0] as HTMLElement;
    const lastElement= focusable Elements[focusable Elements.length - 1] as HTMLElement;
    
    const handleTabKey= (e: Keyboard Event) => {
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
  add AriaLabels: (element: HTMLElement, label: string) => {
    element.set Attribute('aria-label', label);
  },
  addRole: (element: HTMLElement, role: string) => {
    element.set Attribute('role', role);
  }
};