// Accessibility utility functions

export interface AccessibilityOptions {
  announceChanges?: boolean;
  focusManagement?: boolean;
  keyboardNavigation?: boolean;
  screenReaderSupport?: boolean;
}

export class AccessibilityManager {
  private options: AccessibilityOptions;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      announceChanges: true,
      focusManagement: true,
      keyboardNavigation: true,
      screenReaderSupport: true,
      ...options
    };
  }

  /**
   * Announce a message to screen readers
   */
  announce(message: string): void {
    if (!this.options.announceChanges) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  /**
   * Set focus to an element
   */
  setFocus(element: HTMLElement): void {
    if (!this.options.focusManagement) return;

    element.focus();
  }

  /**
   * Trap focus within a container
   */
  trapFocus(container: HTMLElement): () => void {
    if (!this.options.focusManagement) return () => {};

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
  }

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
  }

  /**
   * Add ARIA attributes to an element
   */
  addAriaAttributes(element: HTMLElement, attributes: Record<string, string>): void {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  /**
   * Remove ARIA attributes from an element
   */
  removeAriaAttributes(element: HTMLElement, attributes: string[]): void {
    attributes.forEach(attr => {
      element.removeAttribute(attr);
    });
  }
}

// Utility functions
export const accessibilityUtils = {
  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  /**
   * Check if user prefers high contrast
   */
  prefersHighContrast(): boolean {
    return window.matchMedia('(prefers-contrast: high)').matches;
  },

  /**
   * Get accessible color contrast ratio
   */
  getContrastRatio(color1: string, color2: string): number {
    // Simplified contrast ratio calculation
    // In a real implementation, you'd use a proper color contrast library
    return 4.5; // Placeholder value
  },

  /**
   * Validate ARIA attributes
   */
  validateAriaAttributes(element: HTMLElement): string[] {
    const errors: string[] = [];
    
    // Check for required ARIA attributes
    if (element.getAttribute('aria-label') && element.getAttribute('aria-labelledby')) {
      errors.push('Element has both aria-label and aria-labelledby');
    }

    return errors;
  }
};

export default AccessibilityManager;