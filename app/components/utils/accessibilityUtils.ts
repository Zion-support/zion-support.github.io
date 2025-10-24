"use client";

/**
 * Accessibility Utilities
 * Provides helper functions for accessibility enhancements
 */

/**
 * Check if an element is visible to screen readers
 */
export const isVisibleToScreenReader = (element: HTMLElement): boolean => {
  const style = window.getComputedStyle(element);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    element.getAttribute('aria-hidden') !== 'true'
  );
};

/**
 * Get accessible name for an element
 */
export const getAccessibleName = (element: HTMLElement): string => {
  // Check for aria-label first
  const ariaLabel = element.getAttribute('aria-label');
  if (ariaLabel) return ariaLabel;

  // Check for aria-labelledby
  const ariaLabelledBy = element.getAttribute('aria-labelledby');
  if (ariaLabelledBy) {
    const labelElement = document.getElementById(ariaLabelledBy);
    if (labelElement) return labelElement.textContent || '';
  }

  // Check for associated label
  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
    const id = element.getAttribute('id');
    if (id) {
      const label = document.querySelector(`label[for="${id}"]`);
      if (label) return label.textContent || '';
    }
  }

  // Fallback to text content
  return element.textContent || element.getAttribute('alt') || '';
};

/**
 * Check if element has proper focus management
 */
export const hasProperFocus = (element: HTMLElement): boolean => {
  return element.tabIndex >= 0 || element.tagName === 'A' || element.tagName === 'BUTTON' || element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT';
};

/**
 * Get color contrast ratio between two colors
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length < 3) return 0;
    
    const [r, g, b] = rgb.map(c => {
      const val = parseInt(c) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

/**
 * Check if color combination meets WCAG standards
 */
export const meetsWCAGStandards = (foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
  const ratio = getContrastRatio(foreground, background);
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
};

/**
 * Generate accessible color palette
 */
export const generateAccessibleColors = (baseColor: string): string[] => {
  // This is a simplified implementation
  // In a real app, you'd use a proper color library
  return [
    baseColor,
    baseColor + '80', // 50% opacity
    baseColor + '40', // 25% opacity
    baseColor + '20'  // 12.5% opacity
  ];
};

/**
 * Check if element has proper ARIA attributes
 */
export const hasProperARIA = (element: HTMLElement): boolean => {
  const role = element.getAttribute('role');
  const ariaLabel = element.getAttribute('aria-label');
  const ariaLabelledBy = element.getAttribute('aria-labelledby');
  
  // If element has a role, it should have accessible name
  if (role && !ariaLabel && !ariaLabelledBy) {
    return false;
  }
  
  return true;
};

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within an element
   */
  trapFocus: (container: HTMLElement): (() => void) => {
    const focusableElements = container.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
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

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  },

  /**
   * Restore focus to previously focused element
   */
  restoreFocus: (() => {
    let previousElement: HTMLElement | null = null;
    
    return {
      save: () => {
        previousElement = document.activeElement as HTMLElement;
      },
      restore: () => {
        if (previousElement) {
          previousElement.focus();
        }
      }
    };
  })()
};

export default {
  isVisibleToScreenReader,
  getAccessibleName,
  hasProperFocus,
  getContrastRatio,
  meetsWCAGStandards,
  generateAccessibleColors,
  hasProperARIA,
  focusManagement
};
