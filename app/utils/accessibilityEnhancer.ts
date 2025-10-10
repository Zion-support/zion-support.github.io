/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility features for the application
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = 0;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableFocusManagement: true,
      enableARIALabels: true,
      ...options
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupARIALabels();
    this.setupFocusManagement();
    this.setupScreenReaderSupport();
  }

  private setupKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'Tab':
          this.handleTabNavigation(event);
          break;
        case 'Escape':
          this.handleEscapeKey(event);
          break;
        case 'Enter':
        case ' ':
          this.handleActivationKey(event);
          break;
      }
    });
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    this.updateFocusableElements();
    
    if (this.focusableElements.length === 0) return;

    const nextIndex = event.shiftKey 
      ? this.currentFocusIndex - 1 
      : this.currentFocusIndex + 1;

    if (nextIndex >= 0 && nextIndex < this.focusableElements.length) {
      this.currentFocusIndex = nextIndex;
      this.focusableElements[this.currentFocusIndex]?.focus();
      event.preventDefault();
    }
  }

  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      closeButton?.focus();
    });
  }

  private handleActivationKey(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target && (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button')) {
      target.click();
    }
  }

  private updateFocusableElements(): void {
    const selectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]:not([disabled])',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="tab"]'
    ];

    this.focusableElements = Array.from(
      document.querySelectorAll(selectors.join(', '))
    ) as HTMLElement[];
  }

  private setupARIALabels(): void {
    if (!this.options.enableARIALabels) return;

    // Add ARIA labels to interactive elements that don't have them
    const interactiveElements = document.querySelectorAll(
      'button:not([aria-label]):not([aria-labelledby]), ' +
      'input:not([aria-label]):not([aria-labelledby]), ' +
      'select:not([aria-label]):not([aria-labelledby]), ' +
      'textarea:not([aria-label]):not([aria-labelledby])'
    );

    interactiveElements.forEach(element => {
      const text = element.textContent?.trim() || element.getAttribute('placeholder') || 'Interactive element';
      element.setAttribute('aria-label', text);
    });
  }

  private setupFocusManagement(): void {
    if (!this.options.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      this.currentFocusIndex = this.focusableElements.indexOf(target);
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.options.enableScreenReader) return;

    // Announce dynamic content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedNode = mutation.addedNodes[0] as HTMLElement;
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            this.announceToScreenReader(addedNode.textContent || 'Content updated');
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private announceToScreenReader(message: string): void {
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

  public enhanceElement(element: HTMLElement): void {
    if (!element) return;

    // Add proper ARIA attributes
    if (element.tagName === 'BUTTON' && !element.getAttribute('aria-label')) {
      element.setAttribute('aria-label', element.textContent || 'Button');
    }

    // Ensure proper focus management
    if (element.getAttribute('tabindex') === null) {
      element.setAttribute('tabindex', '0');
    }
  }

  public destroy(): void {
    // Clean up event listeners and observers
    document.removeEventListener('keydown', this.handleTabNavigation);
    document.removeEventListener('keydown', this.handleEscapeKey);
    document.removeEventListener('keydown', this.handleActivationKey);
  }
}

// Export a default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();