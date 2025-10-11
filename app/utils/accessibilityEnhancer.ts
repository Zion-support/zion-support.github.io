/**
 * Accessibility Enhancement Utilities
 * Provides tools to improve website accessibility
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = 0;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: false,
      enableFocusManagement: true,
      enableAriaLabels: true,
      ...options
    };

    if (typeof window !== 'undefined') {
      this.initialize();
    }
  }

  private initialize(): void {
    if (this.options.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    if (this.options.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    if (this.options.enableHighContrast) {
      this.setupHighContrastMode();
    }

    if (this.options.enableFocusManagement) {
      this.setupFocusManagement();
    }

    if (this.options.enableAriaLabels) {
      this.setupAriaLabels();
    }
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      this.handleKeyDown(event);
    });
  }

  private handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Tab':
        this.handleTabNavigation(event);
        break;
      case 'Escape':
        this.handleEscapeKey();
        break;
      case 'Enter':
      case ' ':
        this.handleActivation(event);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        this.handleArrowNavigation(event);
        break;
    }
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    this.updateFocusableElements();
    
    if (this.focusableElements.length === 0) return;

    if (event.shiftKey) {
      // Shift + Tab: Move backwards
      this.currentFocusIndex = this.currentFocusIndex > 0 
        ? this.currentFocusIndex - 1 
        : this.focusableElements.length - 1;
    } else {
      // Tab: Move forwards
      this.currentFocusIndex = this.currentFocusIndex < this.focusableElements.length - 1 
        ? this.currentFocusIndex + 1 
        : 0;
    }

    this.focusableElements[this.currentFocusIndex]?.focus();
    event.preventDefault();
  }

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

  private handleActivation(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
      target.click();
    } else if (target.tagName === 'A') {
      target.click();
    }
  }

  private handleArrowNavigation(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    const container = target.closest('[role="menu"], [role="listbox"], [role="grid"]');
    
    if (!container) return;

    const items = Array.from(container.querySelectorAll('[role="menuitem"], [role="option"], [role="gridcell"]'));
    const currentIndex = items.indexOf(target);

    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
      case 'ArrowDown':
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
      case 'ArrowRight':
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        break;
    }

    (items[nextIndex] as HTMLElement)?.focus();
    event.preventDefault();
  }

  private setupScreenReaderSupport(): void {
    // Add skip links
    this.addSkipLinks();
    
    // Enhance form labels
    this.enhanceFormLabels();
    
    // Add live regions for dynamic content
    this.addLiveRegions();
  }

  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'sr-only';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      const element = input as HTMLInputElement;
      
      if (!element.id && !element.getAttribute('aria-label')) {
        const label = element.closest('label');
        if (label) {
          const labelText = label.textContent?.trim();
          if (labelText) {
            element.setAttribute('aria-label', labelText);
          }
        }
      }
    });
  }

  private addLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    
    document.body.appendChild(liveRegion);
  }

  private setupHighContrastMode(): void {
    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      
      .high-contrast button,
      .high-contrast input,
      .high-contrast select,
      .high-contrast textarea {
        border: 2px solid currentColor;
      }
    `;
    
    document.head.appendChild(style);
  }

  private setupFocusManagement(): void {
    this.updateFocusableElements();
    
    // Update focusable elements when DOM changes
    const observer = new MutationObserver(() => {
      this.updateFocusableElements();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private updateFocusableElements(): void {
    const selectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="option"]'
    ];
    
    this.focusableElements = Array.from(
      document.querySelectorAll(selectors.join(', '))
    ) as HTMLElement[];
  }

  private setupAriaLabels(): void {
    // Add ARIA labels to interactive elements without proper labels
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
      }
    });

    // Add ARIA labels to icons
    const icons = document.querySelectorAll('svg:not([aria-label]):not([aria-labelledby])');
    
    icons.forEach(icon => {
      const parent = icon.parentElement;
      if (parent && parent.textContent) {
        const text = parent.textContent.trim();
        if (text) {
          icon.setAttribute('aria-label', text);
        }
      }
    });
  }

  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.textContent = message;
      
      // Clear the message after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  public setHighContrast(enabled: boolean): void {
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }

  public focusElement(selector: string): boolean {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
      return true;
    }
    return false;
  }

  public destroy(): void {
    // Clean up event listeners and observers
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}

// Utility functions
export const accessibilityUtils = {
  /**
   * Check if an element is visible to screen readers
   */
  isVisibleToScreenReader: (element: HTMLElement): boolean => {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           element.getAttribute('aria-hidden') !== 'true';
  },

  /**
   * Get accessible name for an element
   */
  getAccessibleName: (element: HTMLElement): string => {
    return element.getAttribute('aria-label') ||
           element.getAttribute('aria-labelledby') ||
           element.textContent?.trim() ||
           element.getAttribute('alt') ||
           '';
  },

  /**
   * Check if element is focusable
   */
  isFocusable: (element: HTMLElement): boolean => {
    const tabIndex = element.getAttribute('tabindex');
    if (tabIndex === '-1') return false;
    
    const focusableTags = ['button', 'input', 'select', 'textarea', 'a'];
    if (focusableTags.includes(element.tagName.toLowerCase())) {
      return !element.hasAttribute('disabled');
    }
    
    return tabIndex !== null;
  },

  /**
   * Add focus trap to a container
   */
  trapFocus: (container: HTMLElement): (() => void) => {
    const focusableElements = container.querySelectorAll(
      'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleKeyDown = (event: KeyboardEvent) => {
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
    
    container.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }
};

export default AccessibilityEnhancer;