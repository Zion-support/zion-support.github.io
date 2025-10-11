'use client';

/**
 * Accessibility Enhancer Utility
 * Provides keyboard navigation, focus management, and ARIA support
 */

export class AccessibilityEnhancer {
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex: number = -1;

  constructor() {
    this.initialize();
  }

  /**
   * Initialize the accessibility enhancer
   */
  private initialize(): void {
    this.updateFocusableElements();
    this.bindKeyboardEvents();
    this.bindFocusEvents();
  }

  /**
   * Update the list of focusable elements
   */
  private updateFocusableElements(): void {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]:not([disabled])',
      '[role="menuitem"]',
      '[role="tab"]',
      '[role="option"]'
    ];

    this.focusableElements = Array.from(
      document.querySelectorAll(focusableSelectors.join(', '))
    ) as HTMLElement[];
  }

  /**
   * Bind keyboard event listeners
   */
  private bindKeyboardEvents(): void {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  /**
   * Bind focus event listeners
   */
  private bindFocusEvents(): void {
    document.addEventListener('focusin', this.handleFocusIn.bind(this));
  }

  /**
   * Handle key down events
   */
  private handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Tab':
        this.handleTabKey(event);
        break;
      case 'ArrowDown':
      case 'ArrowUp':
        this.handleArrowKeys(event);
        break;
      case 'Escape':
        this.handleEscapeKey(event);
        break;
      case 'Enter':
      case ' ':
        this.handleActivationKeys(event);
        break;
    }
  }

  /**
   * Handle tab key navigation
   */
  private handleTabKey(): void {
    this.updateFocusableElements();
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowKeys(event: KeyboardEvent): void {
    const isArrowDown = event.key === 'ArrowDown';
    const nextIndex = isArrowDown 
      ? this.currentFocusIndex + 1 
      : this.currentFocusIndex - 1;

    if (nextIndex >= 0 && nextIndex < this.focusableElements.length) {
      this.currentFocusIndex = nextIndex;
      this.focusableElements[nextIndex]?.focus();
      event.preventDefault();
    }
  }

  /**
   * Handle escape key
   */
  private handleEscapeKey(): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      closeButton?.click();
    });
    
    // Close any open menus
    const menus = document.querySelectorAll('[role="menu"][aria-expanded="true"]');
    menus.forEach(menu => {
      const trigger = document.querySelector(`[aria-controls="${menu.id}"]`) as HTMLElement;
      trigger?.click();
    });
  }

  /**
   * Handle activation keys (Enter and Space)
   */
  private handleActivationKeys(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target && (target.role === 'button' || target.tagName === 'BUTTON')) {
      target.click();
      event.preventDefault();
    }
  }

  /**
   * Handle focus in events
   */
  private handleFocusIn(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    this.currentFocusIndex = this.focusableElements.indexOf(target);
  }

  /**
   * Enhance a specific element with accessibility features
   */
  public enhanceElement(element: HTMLElement): void {
    // Add ARIA attributes if missing
    if (element.tagName === 'BUTTON' && !element.getAttribute('aria-label')) {
      element.setAttribute('aria-label', element.textContent || 'Button');
    }

    // Add focus styles
    element.classList.add('focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');

    // Add keyboard navigation support
    element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        element.click();
        event.preventDefault();
      }
    });
  }

  /**
   * Create a focus trap for modals
   */
  public createFocusTrap(container: HTMLElement): () => void {
    const focusableElements = container.querySelectorAll(
      'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    // Return cleanup function
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }

  /**
   * Announce changes to screen readers
   */
  public announce(message: string): void {
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
   * Update focusable elements (call this when DOM changes)
   */
  public refresh(): void {
    this.updateFocusableElements();
  }
}

// Export a singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export React hook for easy use in components
export const useAccessibility = () => {
  const enhanceElement = (element: HTMLElement) => {
    accessibilityEnhancer.enhanceElement(element);
  };

  const createFocusTrap = (container: HTMLElement) => {
    return accessibilityEnhancer.createFocusTrap(container);
  };

  const announce = (message: string) => {
    accessibilityEnhancer.announce(message);
  };

  const refresh = () => {
    accessibilityEnhancer.refresh();
  };

  return {
    enhanceElement,
    createFocusTrap,
    announce,
    refresh
  };
};