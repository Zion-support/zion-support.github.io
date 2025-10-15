// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
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

  // Move focus to next focusable element
  focusNext: (currentElement: HTMLElement) => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
    nextElement?.focus();
  },

  // Move focus to previous focusable element
  focusPrevious: (currentElement: HTMLElement) => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const previousElement = focusableElements[currentIndex - 1] as HTMLElement;
    previousElement?.focus();
  },
};

// Screen reader utilities
export const screenReader = {
  // Announce message to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },

  // Create visually hidden text for screen readers
  createScreenReaderText: (text: string) => {
    const element = document.createElement('span');
    element.className = 'sr-only';
    element.textContent = text;
    return element;
  },
};

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation
  handleArrowKeys: (e: KeyboardEvent, items: HTMLElement[], currentIndex: number) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focus();
        return nextIndex;
      }
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault();
        const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        items[prevIndex]?.focus();
        return prevIndex;
      }
      case 'Home':
        e.preventDefault();
        items[0]?.focus();
        return 0;
      case 'End':
        e.preventDefault();
        items[items.length - 1]?.focus();
        return items.length - 1;
    }
    return currentIndex;
  },

  // Handle escape key
  handleEscape: (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      callback();
    }
  },
};

// Color contrast utilities
export const colorContrast = {
  // Calculate relative luminance
  getLuminance: (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  },

  // Calculate contrast ratio
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]) => {
    const lum1 = colorContrast.getLuminance(...color1);
    const lum2 = colorContrast.getLuminance(...color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (color1: [number, number, number], color2: [number, number, number], level: 'AA' | 'AAA' = 'AA') => {
    const ratio = colorContrast.getContrastRatio(color1, color2);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  },
};