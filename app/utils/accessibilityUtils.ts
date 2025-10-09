// Accessibility utilities for improving user experience and compliance

export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const createAriaLabel = (text: string, context?: string): string => {
  return context ? `${text}, ${context}` : text;
};

export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

export const setFocus = (element: HTMLElement | null): void => {
  if (element) {
    element.focus();
  }
};

export const isElementVisible = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const addSkipLink = (targetId: string, text: string = 'Skip to main content'): void => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
};

export const validateAriaAttributes = (element: HTMLElement): string[] => {
  const errors: string[] = [];
  
  // Check for required ARIA attributes
  if (element.hasAttribute('aria-expanded') && !element.hasAttribute('aria-controls')) {
    errors.push('Elements with aria-expanded should have aria-controls');
  }
  
  if (element.hasAttribute('aria-labelledby') && element.hasAttribute('aria-label')) {
    errors.push('Elements should not have both aria-labelledby and aria-label');
  }
  
  return errors;
};

export const getContrastRatio = (color1: string, color2: string): number => {
  // Simple contrast ratio calculation
  // This is a simplified version - in production, use a proper color library
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    
    const [r, g, b] = rgb.map(Number);
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5;
};

export const addKeyboardNavigation = (container: HTMLElement): void => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  let currentIndex = 0;
  
  const updateFocus = (index: number) => {
    const element = focusableElements[index] as HTMLElement;
    if (element) {
      element.focus();
    }
  };
  
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        currentIndex = (currentIndex + 1) % focusableElements.length;
        updateFocus(currentIndex);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        currentIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
        updateFocus(currentIndex);
        break;
      case 'Home':
        e.preventDefault();
        currentIndex = 0;
        updateFocus(currentIndex);
        break;
      case 'End':
        e.preventDefault();
        currentIndex = focusableElements.length - 1;
        updateFocus(currentIndex);
        break;
    }
  };
  
  container.addEventListener('keydown', handleKeyDown);
};

export const createLiveRegion = (): HTMLElement => {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  document.body.appendChild(liveRegion);
  return liveRegion;
};

export const announceToLiveRegion = (message: string, liveRegion?: HTMLElement): void => {
  const region = liveRegion || createLiveRegion();
  region.textContent = message;
};

export const removeLiveRegion = (liveRegion: HTMLElement): void => {
  if (liveRegion.parentNode) {
    liveRegion.parentNode.removeChild(liveRegion);
  }
};