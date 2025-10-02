// Accessibility utilities for enhanced user experience

export const focusManagement = {
  // Trap focus within a container
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
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

    container.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  },

  // Restore focus to previous element
  restoreFocus: (element: HTMLElement) => {
    element.focus();
  },
};

export const ariaUtils = {
  // Announce changes to screen readers
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

  // Generate unique IDs for form elements
  generateId: (prefix: string = 'id') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Set ARIA attributes for modal dialogs
  setModalAttributes: (modal: HTMLElement, isOpen: boolean) => {
    modal.setAttribute('aria-hidden', (!isOpen).toString());
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('role', 'dialog');
    
    if (isOpen) {
      modal.setAttribute('tabindex', '-1');
    } else {
      modal.removeAttribute('tabindex');
    }
  },
};

export const keyboardNavigation = {
  // Handle arrow key navigation for lists
  handleArrowKeys: (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ) => {
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    
    let newIndex = currentIndex;
    
    switch (event.key) {
      case isVertical ? 'ArrowDown' : 'ArrowRight':
        newIndex = Math.min(currentIndex + 1, items.length - 1);
        break;
      case isVertical ? 'ArrowUp' : 'ArrowLeft':
        newIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = items.length - 1;
        break;
      default:
        return currentIndex;
    }
    
    if (newIndex !== currentIndex) {
      event.preventDefault();
      items[newIndex]?.focus();
      return newIndex;
    }
    
    return currentIndex;
  },

  // Handle escape key
  handleEscape: (callback: () => void) => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  },
};

export const colorContrast = {
  // Calculate contrast ratio between two colors
  getContrastRatio: (color1: string, color2: string): number => {
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
        const cNorm = parseInt(c) / 255;
        return cNorm <= 0.03928 
          ? cNorm / 12.92 
          : Math.pow((cNorm + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (contrastRatio: number, level: 'AA' | 'AAA' = 'AA'): boolean => {
    const thresholds = {
      AA: { normal: 4.5, large: 3 },
      AAA: { normal: 7, large: 4.5 },
    };
    
    return contrastRatio >= thresholds[level].normal;
  },
};

export const screenReaderUtils = {
  // Hide element from screen readers
  hideFromScreenReader: (element: HTMLElement) => {
    element.setAttribute('aria-hidden', 'true');
  },

  // Show element to screen readers
  showToScreenReader: (element: HTMLElement) => {
    element.removeAttribute('aria-hidden');
  },

  // Create screen reader only text
  createScreenReaderText: (text: string): HTMLElement => {
    const element = document.createElement('span');
    element.className = 'sr-only';
    element.textContent = text;
    return element;
  },
};

// High contrast mode detection
export const detectHighContrast = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-contrast: high)').matches ||
         window.matchMedia('(prefers-contrast: more)').matches;
};

// Reduced motion detection
export const detectReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Dark mode detection
export const detectDarkMode = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};