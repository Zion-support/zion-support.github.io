/**
 * Accessibility helper utilities for enhanced user experience
 */

/**
 * Focus trap class for managing focus within modal dialogs
 */
export class FocusTrap {
  private element: HTMLElement;
  private focusableElements: HTMLElement[] = [];
  private firstFocusableElement?: HTMLElement;
  private lastFocusableElement?: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
    this.updateFocusableElements();
  }

  private updateFocusableElements(): void {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    this.focusableElements = Array.from(
      this.element.querySelectorAll(focusableSelectors)
    ) as HTMLElement[];

    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
  }

  public trapFocus(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === this.firstFocusableElement) {
          event.preventDefault();
          this.lastFocusableElement?.focus();
        }
      } else {
        if (document.activeElement === this.lastFocusableElement) {
          event.preventDefault();
          this.firstFocusableElement?.focus();
        }
      }
    }
  }

  public focusFirstElement(): void {
    this.firstFocusableElement?.focus();
  }
}

/**
 * ARIA helper functions
 */
export const ariaHelpers = {
  setAriaExpanded(element: HTMLElement, expanded: boolean): void {
    element.setAttribute('aria-expanded', expanded.toString());
  },

  setAriaHidden(element: HTMLElement, hidden: boolean): void {
    element.setAttribute('aria-hidden', hidden.toString());
  },

  setAriaLabel(element: HTMLElement, label: string): void {
    element.setAttribute('aria-label', label);
  },

  setAriaDescribedBy(element: HTMLElement, describedBy: string): void {
    element.setAttribute('aria-describedby', describedBy);
  },
};

/**
 * Screen reader announcements
 */
export const announceToScreenReader = (message: string): void => {
  const _announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Keyboard navigation helpers
 */
export const keyboardNavigation = {
  handleArrowKeys(event: KeyboardEvent, items: HTMLElement[]): void {
    //     const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      //       const nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex]?.focus();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const _prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      items[prevIndex]?.focus();
    }
  },

  handleEscapeKey(event: KeyboardEvent, callback: () => void): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      callback();
    }
  },
};
