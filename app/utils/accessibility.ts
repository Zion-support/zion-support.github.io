/**
 * Accessibility utilities for improving web accessibility
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  announceChanges?: boolean;
}

export class AccessibilityManager {
  private options: AccessibilityOptions;
  private observers: MutationObserver[] = [];
  private focusTrap: HTMLElement[] = [];

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableReducedMotion: false,
      announceChanges: true,
      ...options,
    };
  }

  /**
   * Initialize accessibility features
   */
  init(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupReducedMotion();
    this.setupFocusManagement();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }
      if (event.key === 'Escape') {
        this.handleEscapeKey(event);
      }
    });
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.options.enableScreenReader) return;

    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'accessibility-announcer';
    document.body.appendChild(liveRegion);
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrast(): void {
    if (!this.options.enableHighContrast) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    this.handleHighContrastChange(mediaQuery);
    mediaQuery.addEventListener('change', this.handleHighContrastChange);
  }

  /**
   * Setup reduced motion support
   */
  private setupReducedMotion(): void {
    if (!this.options.enableReducedMotion) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.handleReducedMotionChange(mediaQuery);
    mediaQuery.addEventListener('change', this.handleReducedMotionChange);
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    // Track focus changes
    document.addEventListener('focusin', (event) => {
      this.announceFocusChange(event.target as HTMLElement);
    });
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);

    if (event.shiftKey) {
      // Shift + Tab - move backwards
      if (currentIndex > 0) {
        focusableElements[currentIndex - 1].focus();
      } else {
        focusableElements[focusableElements.length - 1].focus();
      }
    } else {
      // Tab - move forwards
      if (currentIndex < focusableElements.length - 1) {
        focusableElements[currentIndex + 1].focus();
      } else {
        focusableElements[0].focus();
      }
    }
  }

  /**
   * Handle escape key
   */
  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach((modal) => {
      if (modal.getAttribute('aria-hidden') === 'false') {
        this.closeModal(modal as HTMLElement);
      }
    });
  }

  /**
   * Get all focusable elements
   */
  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
    ];

    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  /**
   * Announce changes to screen readers
   */
  announce(message: string): void {
    if (!this.options.announceChanges) return;

    const announcer = document.getElementById('accessibility-announcer');
    if (announcer) {
      announcer.textContent = message;
    }
  }

  /**
   * Announce focus changes
   */
  private announceFocusChange(element: HTMLElement): void {
    const label = this.getElementLabel(element);
    if (label) {
      this.announce(`Focused on ${label}`);
    }
  }

  /**
   * Get element label for screen readers
   */
  private getElementLabel(element: HTMLElement): string | null {
    const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;

    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    if (ariaLabelledBy) {
      const labelElement = document.getElementById(ariaLabelledBy);
      if (labelElement) return labelElement.textContent;
    }

    const textContent = element.textContent?.trim();
    if (textContent) return textContent;

    const placeholder = element.getAttribute('placeholder');
    if (placeholder) return placeholder;

    return null;
  }

  /**
   * Handle high contrast change
   */
  private handleHighContrastChange = (mediaQuery: MediaQueryList): void => {
    if (mediaQuery.matches) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  /**
   * Handle reduced motion change
   */
  private handleReducedMotionChange = (mediaQuery: MediaQueryList): void => {
    if (mediaQuery.matches) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  };

  /**
   * Close modal
   */
  private closeModal(modal: HTMLElement): void {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    
    // Return focus to trigger element
    const trigger = document.querySelector(`[aria-controls="${modal.id}"]`) as HTMLElement;
    if (trigger) {
      trigger.focus();
    }
  }

  /**
   * Cleanup
   */
  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Utility functions
export const accessibilityUtils = {
  /**
   * Check if element is visible to screen readers
   */
  isVisibleToScreenReader(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      element.getAttribute('aria-hidden') !== 'true'
    );
  },

  /**
   * Get accessible name for element
   */
  getAccessibleName(element: HTMLElement): string | null {
    const manager = new AccessibilityManager();
    return manager['getElementLabel'](element);
  },

  /**
   * Check if element is focusable
   */
  isFocusable(element: HTMLElement): boolean {
    const manager = new AccessibilityManager();
    const focusableElements = manager['getFocusableElements']();
    return focusableElements.includes(element);
  },

  /**
   * Add skip link
   */
  addSkipLink(text: string = 'Skip to main content', targetId: string = 'main'): void {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = text;
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};

export default AccessibilityManager;