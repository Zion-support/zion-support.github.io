/**
 * Accessibility Utilities
 * Collection of utility functions for improving web accessibility
 */

import { generateId, announceToScreenReader, trapFocus } from './a11y';

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export class AccessibilityUtils {
  private options: AccessibilityOptions;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableReducedMotion: false,
      ...options,
    };
  }

  /**
   * Initialize accessibility features
   */
  init(): void {
    if (this.options.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }
    
    if (this.options.enableScreenReader) {
      this.setupScreenReaderSupport();
    }
    
    if (this.options.enableHighContrast) {
      this.setupHighContrast();
    }
    
    if (this.options.enableReducedMotion) {
      this.setupReducedMotion();
    }
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    // Add ARIA labels and roles
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', button.textContent || 'Button');
      }
    });
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrast(): void {
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    if (prefersHighContrast) {
      document.body.classList.add('high-contrast');
    }
  }

  /**
   * Setup reduced motion
   */
  private setupReducedMotion(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
    }
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    announceToScreenReader(message, priority);
  }

  /**
   * Focus element with proper announcement
   */
  focusElement(element: HTMLElement, announceText?: string): void {
    element.focus();
    if (announceText) {
      this.announce(announceText);
    }
  }

  /**
   * Trap focus in container
   */
  trapFocusInContainer(container: HTMLElement): () => void {
    return trapFocus(container);
  }

  /**
   * Generate unique ID
   */
  generateId(prefix = 'a11y'): string {
    return generateId(prefix);
  }
}

// Export default instance
export const accessibilityUtils = new AccessibilityUtils();

// Export utility functions
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  accessibilityUtils.announce(message, priority);
};

export const focusWithAnnouncement = (element: HTMLElement, announceText?: string) => {
  accessibilityUtils.focusElement(element, announceText);
};

export const trapFocusInContainer = (container: HTMLElement) => {
  return accessibilityUtils.trapFocusInContainer(container);
};