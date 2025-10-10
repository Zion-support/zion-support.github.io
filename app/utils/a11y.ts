<<<<<<< HEAD
=======
'use client';
import { useCallback } from 'react';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
/**
 * Accessibility utilities for enhanced user experience
 */

<<<<<<< HEAD
export interface A11yOptions {
  announceChanges?: boolean;
  focusManagement?: boolean;
  keyboardNavigation?: boolean;
  screenReaderSupport?: boolean;
}

export class A11yManager {
  private options: A11yOptions;
  private liveRegion: HTMLElement | null = null;

  constructor(options: A11yOptions = {}) {
    this.options = {
      announceChanges: true,
      focusManagement: true,
      keyboardNavigation: true,
      screenReaderSupport: true,
      ...options
    };
    
    this.initializeLiveRegion();
  }

  private initializeLiveRegion(): void {
    if (this.options.announceChanges && typeof document !== 'undefined') {
      this.liveRegion = document.createElement('div');
      this.liveRegion.setAttribute('aria-live', 'polite');
      this.liveRegion.setAttribute('aria-atomic', 'true');
      this.liveRegion.className = 'sr-only';
      document.body.appendChild(this.liveRegion);
    }
  }

  /**
   * Announce changes to screen readers
   */
  announce(message: string): void {
    if (this.liveRegion && this.options.announceChanges) {
      this.liveRegion.textContent = message;
    }
  }

  /**
   * Set focus to an element
   */
  focus(element: HTMLElement | null): void {
    if (element && this.options.focusManagement) {
      element.focus();
    }
  }

  /**
   * Trap focus within a container
   */
  trapFocus(container: HTMLElement): void {
    if (!this.options.focusManagement) return;

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
  }

  /**
   * Add keyboard navigation support
   */
  addKeyboardNavigation(element: HTMLElement): void {
    if (!this.options.keyboardNavigation) return;

    element.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          element.click();
          break;
        case 'Escape':
          element.blur();
          break;
=======
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
  if (typeof document === 'undefined') return
  
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.style.position = 'absolute'
  announcement.style.left = '-10000px'
  announcement.style.width = '1px'
  announcement.style.height = '1px'
  announcement.style.overflow = 'hidden'
  
  document.body.appendChild(announcement)
  
  // Set message after a slight delay to ensure screen readers pick it up
  setTimeout(() => {
    announcement.textContent = message;
  }, 100);
  
  // Remove announcement after it's been read
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 3000);
}

/**
 * Trap focus within a container (useful for modals)
 */
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  
  const firstFocusable = focusableElements[0]
  const lastFocusable = focusableElements[focusableElements.length - 1]
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable?.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable?.focus();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
      }
    });
  }

  /**
   * Enhance button accessibility
   */
  enhanceButton(button: HTMLButtonElement): void {
    if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
      button.setAttribute('aria-label', 'Button');
    }
<<<<<<< HEAD
    
    this.addKeyboardNavigation(button);
  }

  /**
   * Enhance form field accessibility
   */
  enhanceFormField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void {
    const label = document.querySelector(`label[for="${field.id}"]`);
    
    if (!label && !field.getAttribute('aria-label')) {
      field.setAttribute('aria-label', field.placeholder || 'Form field');
    }
    
    if (field.required) {
      field.setAttribute('aria-required', 'true');
=======
  }, [firstFocusable, lastFocusable]);
  
  element.addEventListener('keydown', handleKeyDown);
  
  // Focus first element
  firstFocusable?.focus();
  
  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Check if element is keyboard accessible
 */
export function isKeyboardAccessible(element: HTMLElement): boolean {
  const tabindex = element.getAttribute('tabindex')
  const role = element.getAttribute('role')
  const isInteractive = ['button', 'link', 'input', 'select', 'textarea'].includes(
    element.tagName.toLowerCase()
  )
  
  return (
    isInteractive ||
    (tabindex !== null && tabindex !== '-1') ||
    (role !== null && ['button', 'link', 'checkbox', 'radio'].includes(role))
  )
}

/**
 * Add keyboard navigation support to custom interactive elements
 */
export function makeKeyboardAccessible(
  element: HTMLElement,
  onClick: (e: Event) => void,
  options: {
    role?: string
    tabindex?: number
  } = {}
): () => void {
  const { role = 'button', tabindex = 0 } = options
  
  element.setAttribute('role', role)
  element.setAttribute('tabindex', tabindex.toString())
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(e)
    }
  }, [onClick])
  
  element.addEventListener('click', onClick)
  element.addEventListener('keydown', handleKeyDown)
  
  return () => {
    element.removeEventListener('click', onClick)
    element.removeEventListener('keydown', handleKeyDown)
  }
}

/**
 * Check color contrast ratio (WCAG 2.1)
 */
export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (color: string): number => {
    // Simple RGB to luminance conversion
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0]
    const [r, g, b] = rgb.map(val => {
      const normalized = val / 255
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  
  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  
  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Check if contrast ratio meets WCAG standards
 */
export function meetsContrastRequirements(
  color1: string,
  color2: string,
  level: 'AA' | 'AAA' = 'AA',
  fontSize: 'normal' | 'large' = 'normal'
): boolean {
  const ratio = getContrastRatio(color1, color2)
  
  if (level === 'AAA') {
    return fontSize === 'large' ? ratio >= 4.5 : ratio >= 7
  }
  
  return fontSize === 'large' ? ratio >= 3 : ratio >= 4.5
}

/**
 * Get accessible color suggestions based on contrast requirements
 */
export function getAccessibleColor(
  backgroundColor: string,
  preferredColor: string,
  level: 'AA' | 'AAA' = 'AA',
  fontSize: 'normal' | 'large' = 'normal'
): string {
  const colors = [
    '#000000', // Black
    '#FFFFFF', // White
    '#333333', // Dark gray
    '#666666', // Medium gray
    '#999999', // Light gray
    '#CCCCCC', // Very light gray
  ]
  
  for (const color of colors) {
    if (meetsContrastRequirements(backgroundColor, color, level, fontSize)) {
      return color
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
    }
  }

  /**
   * Create accessible modal
   */
  createAccessibleModal(modal: HTMLElement): void {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    
    const title = modal.querySelector('[data-modal-title]');
    if (title) {
      modal.setAttribute('aria-labelledby', title.id || 'modal-title');
    }
    
    this.trapFocus(modal);
  }

  /**
   * Clean up resources
   */
  destroy(): void {
    if (this.liveRegion) {
      this.liveRegion.remove();
      this.liveRegion = null;
    }
  }
}

// Utility functions
export const a11yUtils = {
  /**
   * Check if element is visible to screen readers
   */
  isVisibleToScreenReader(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           element.getAttribute('aria-hidden') !== 'true';
  },

  /**
   * Get accessible name for element
   */
  getAccessibleName(element: HTMLElement): string {
    return element.getAttribute('aria-label') ||
           element.getAttribute('aria-labelledby') ||
           element.textContent?.trim() ||
           element.getAttribute('title') ||
           '';
  },

  /**
   * Check if element is focusable
   */
  isFocusable(element: HTMLElement): boolean {
    const tabIndex = element.getAttribute('tabindex');
    if (tabIndex === '-1') return false;
    
    if (element instanceof HTMLButtonElement ||
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement ||
        element instanceof HTMLAnchorElement) {
      return !element.disabled;
    }
    
    return tabIndex !== null;
  }
};

export default A11yManager;