/**
 * Accessibility utilities for enhanced user experience
 */

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
      screenReaderSupport: true}
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
      }

  }

  /**
   * Enhance button accessibility
   */
  enhanceButton(button: HTMLButtonElement): void {
    if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
      button.setAttribute('aria-label', 'Button');
    }

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