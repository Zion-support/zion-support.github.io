'use client';
import { useCallback } from 'react';

/**
 * Accessibility (A11Y) Utilities
 * Provides helpers for improving web accessibility
 */

/**
 * Generate unique ID for aria-describedby and aria-labelledby
 */
export function generateId(prefix = 'a11y'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
): void {
  if (typeof document === 'undefined') return;
  
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.style.width = '1px';
  announcement.style.height = '1px';
  announcement.style.overflow = 'hidden';
  
  document.body.appendChild(announcement);
  
  // Set message after a slight delay to ensure screen readers pick it up
  setTimeout(() => {
    announcement.textContent = message;
  }, 100);
  
  // Clean up after announcement
  setTimeout(() => {
    if (announcement.parentNode) {
      announcement.parentNode.removeChild(announcement);
    }
  }, 1000);
}

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within an element
   */
  trapFocus: (element: HTMLElement): (() => void) => {
    const focusableElements = element.querySelectorAll(
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

    element.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  },

  /**
   * Restore focus to previously focused element
   */
  restoreFocus: (() => {
    let previousActiveElement: HTMLElement | null = null;
    
    return {
      save: () => {
        previousActiveElement = document.activeElement as HTMLElement;
      },
      restore: () => {
        if (previousActiveElement) {
          previousActiveElement.focus();
          previousActiveElement = null;
        }
      }
    };
  })()
};

/**
 * ARIA utilities
 */
export const ariaUtils = {
  /**
   * Set ARIA attributes for a modal
   */
  setupModal: (modalElement: HTMLElement, title: string) => {
    modalElement.setAttribute('role', 'dialog');
    modalElement.setAttribute('aria-modal', 'true');
    modalElement.setAttribute('aria-labelledby', generateId('modal-title'));
    
    const titleElement = modalElement.querySelector('[data-modal-title]');
    if (titleElement) {
      titleElement.id = generateId('modal-title');
      titleElement.textContent = title;
    }
  },

  /**
   * Set ARIA attributes for a button that controls visibility
   */
  setupToggleButton: (button: HTMLElement, targetId: string, isExpanded: boolean) => {
    button.setAttribute('aria-expanded', isExpanded.toString());
    button.setAttribute('aria-controls', targetId);
  },

  /**
   * Set ARIA attributes for a collapsible section
   */
  setupCollapsible: (trigger: HTMLElement, content: HTMLElement, isExpanded: boolean) => {
    const contentId = generateId('collapsible-content');
    content.id = contentId;
    content.setAttribute('aria-hidden', (!isExpanded).toString());
    
    trigger.setAttribute('aria-expanded', isExpanded.toString());
    trigger.setAttribute('aria-controls', contentId);
  }
};

/**
 * Color contrast utilities
 */
export const colorContrast = {
  /**
   * Calculate relative luminance of a color
   */
  getLuminance: (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  },

  /**
   * Calculate contrast ratio between two colors
   */
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]): number => {
    const lum1 = colorContrast.getLuminance(...color1);
    const lum2 = colorContrast.getLuminance(...color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  },

  /**
   * Check if contrast ratio meets WCAG standards
   */
  meetsWCAG: (contrastRatio: number, level: 'AA' | 'AAA' = 'AA'): boolean => {
    const thresholds = { AA: 4.5, AAA: 7 };
    return contrastRatio >= thresholds[level];
  }
};

/**
 * Keyboard navigation utilities
 */
export const keyboardNavigation = {
  /**
   * Handle arrow key navigation for a list
   */
  handleArrowKeys: (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
    const isHorizontal = orientation === 'horizontal';
    const isVertical = orientation === 'vertical';
    
    switch (event.key) {
      case isHorizontal ? 'ArrowLeft' : 'ArrowUp':
        event.preventDefault();
        return currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      case isHorizontal ? 'ArrowRight' : 'ArrowDown':
        event.preventDefault();
        return currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      case 'Home':
        event.preventDefault();
        return 0;
      case 'End':
        event.preventDefault();
        return items.length - 1;
      default:
        return currentIndex;
    }
  },

  /**
   * Create keyboard navigation handler
   */
  createNavigationHandler: (
    items: HTMLElement[],
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ) => {
    let currentIndex = 0;
    
    return (event: KeyboardEvent) => {
      const newIndex = keyboardNavigation.handleArrowKeys(event, items, currentIndex, orientation);
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        items[currentIndex].focus();
      }
    };
  }
};

/**
 * Screen reader utilities
 */
export const screenReader = {
  /**
   * Hide element from screen readers
   */
  hideFromScreenReader: (element: HTMLElement) => {
    element.setAttribute('aria-hidden', 'true');
  },

  /**
   * Show element to screen readers
   */
  showToScreenReader: (element: HTMLElement) => {
    element.removeAttribute('aria-hidden');
  },

  /**
   * Make element only visible to screen readers
   */
  visuallyHidden: (element: HTMLElement) => {
    element.style.position = 'absolute';
    element.style.width = '1px';
    element.style.height = '1px';
    element.style.padding = '0';
    element.style.margin = '-1px';
    element.style.overflow = 'hidden';
    element.style.clip = 'rect(0, 0, 0, 0)';
    element.style.whiteSpace = 'nowrap';
    element.style.border = '0';
  }
};

/**
 * React hook for accessibility utilities
 */
export function useAccessibility() {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    announceToScreenReader(message, priority);
  }, []);

  const generateUniqueId = useCallback((prefix?: string) => {
    return generateId(prefix);
  }, []);

  return {
    announce,
    generateUniqueId,
    focusManagement,
    ariaUtils,
    colorContrast,
    keyboardNavigation,
    screenReader
  };
}