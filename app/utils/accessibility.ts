/**
 * Accessibility utilities for enhanced user experience
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export class AccessibilityManager {
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
  announce(message: string): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
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
}

// Export default instance
export const accessibilityManager = new AccessibilityManager();

// Export utility functions
export const announceToScreenReader = (message: string) => {
  accessibilityManager.announce(message);
};

export const focusWithAnnouncement = (element: HTMLElement, announceText?: string) => {
  accessibilityManager.focusElement(element, announceText);
};