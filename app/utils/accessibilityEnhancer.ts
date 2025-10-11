/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility features for web applications
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
  enableSkipLinks?: boolean;
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
      enableSkipLinks: true,
      ...options
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupARIALabels();
    this.setupSkipLinks();
    this.setupFocusManagement();
    this.setupHighContrast();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      this.handleKeyboardNavigation(event);
    });
  }

  /**
   * Handle keyboard navigation
   */
  private handleKeyboardNavigation(event: KeyboardEvent): void {
    const { key, ctrlKey, altKey } = event;

    // Tab navigation
    if (key === 'Tab') {
      this.handleTabNavigation(event);
      return;
    }

    // Arrow key navigation
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      this.handleArrowNavigation(event);
      return;
    }

    // Escape key
    if (key === 'Escape') {
      this.handleEscapeKey(event);
      return;
    }

    // Enter key
    if (key === 'Enter' && !ctrlKey && !altKey) {
      this.handleEnterKey(event);
      return;
    }
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    this.updateFocusableElements();
    
    if (this.focusableElements.length === 0) return;

    if (event.shiftKey) {
      // Shift + Tab - move backwards
      this.currentFocusIndex = this.currentFocusIndex > 0 
        ? this.currentFocusIndex - 1 
        : this.focusableElements.length - 1;
    } else {
      // Tab - move forwards
      this.currentFocusIndex = this.currentFocusIndex < this.focusableElements.length - 1 
        ? this.currentFocusIndex + 1 
        : 0;
    }

    this.focusableElements[this.currentFocusIndex]?.focus();
    event.preventDefault();
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(event: KeyboardEvent): void {
    const currentElement = document.activeElement as HTMLElement;
    
    if (!currentElement) return;

    // Handle arrow navigation for specific elements
    if (currentElement.getAttribute('role') === 'menuitem' || 
        currentElement.closest('[role="menu"]')) {
      this.handleMenuArrowNavigation(event);
    } else if (currentElement.getAttribute('role') === 'tab' || 
               currentElement.closest('[role="tablist"]')) {
      this.handleTabArrowNavigation(event);
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
   * Handle enter key
   */
  private handleEnterKey(event: KeyboardEvent): void {
    const currentElement = document.activeElement as HTMLElement;
    
    if (!currentElement) return;

    // Trigger click for buttons and links
    if (currentElement.tagName === 'BUTTON' || 
        currentElement.tagName === 'A' || 
        currentElement.getAttribute('role') === 'button') {
      currentElement.click();
      event.preventDefault();
    }
  }

  /**
   * Update focusable elements list
   */
  private updateFocusableElements(): void {
    const selectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]:not([disabled])',
      '[role="menuitem"]',
      '[role="tab"]'
    ];

    this.focusableElements = Array.from(
      document.querySelectorAll(selectors.join(', '))
    ) as HTMLElement[];

    // Filter out hidden elements
    this.focusableElements = this.focusableElements.filter(element => {
      const style = window.getComputedStyle(element);
      return style.display !== 'none' && 
             style.visibility !== 'hidden' && 
             element.offsetParent !== null;
    });
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    if (!this.options.enableARIALabels) return;

    // Add ARIA labels to buttons without text
    const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    iconButtons.forEach(button => {
      const icon = button.querySelector('svg, i, [class*="icon"]');
      if (icon && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add ARIA labels to images without alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', '');
      img.setAttribute('aria-hidden', 'true');
    });
  }

  /**
   * Setup skip links
   */
  private setupSkipLinks(): void {
    if (!this.options.enableSkipLinks) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
    skipLink.setAttribute('aria-label', 'Skip to main content');
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.options.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      if (target) {
        this.currentFocusIndex = this.focusableElements.indexOf(target);
      }
    });

    // Prevent focus loss on modal open
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (modal) {
          const focusableElements = modal.querySelectorAll(
            'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (event.shiftKey && document.activeElement === firstElement) {
              lastElement.focus();
              event.preventDefault();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              firstElement.focus();
              event.preventDefault();
            }
          }
        }
      }
    });
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrast(): void {
    if (!this.options.enableHighContrast) return;

    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Handle menu arrow navigation
   */
  private handleMenuArrowNavigation(event: KeyboardEvent): void {
    const { key } = event;
    const currentElement = document.activeElement as HTMLElement;
    const menu = currentElement.closest('[role="menu"]');
    
    if (!menu) return;

    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
    const currentIndex = menuItems.indexOf(currentElement);
    
    let nextIndex = currentIndex;
    
    if (key === 'ArrowDown' || key === 'ArrowRight') {
      nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
    } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
    }
    
    menuItems[nextIndex]?.focus();
    event.preventDefault();
  }

  /**
   * Handle tab arrow navigation
   */
  private handleTabArrowNavigation(event: KeyboardEvent): void {
    const { key } = event;
    const currentElement = document.activeElement as HTMLElement;
    const tablist = currentElement.closest('[role="tablist"]');
    
    if (!tablist) return;

    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]')) as HTMLElement[];
    const currentIndex = tabs.indexOf(currentElement);
    
    let nextIndex = currentIndex;
    
    if (key === 'ArrowRight') {
      nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    } else if (key === 'ArrowLeft') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    }
    
    tabs[nextIndex]?.focus();
    event.preventDefault();
  }

  /**
   * Enable accessibility features
   */
  public enable(): void {
    this.initialize();
  }

  /**
   * Disable accessibility features
   */
  public disable(): void {
    // Remove event listeners and cleanup
    document.removeEventListener('keydown', this.handleKeyboardNavigation);
  }

  /**
   * Update options
   */
  public updateOptions(newOptions: Partial<AccessibilityOptions>): void {
    this.options = { ...this.options, ...newOptions };
    this.initialize();
  }
}

// Export default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export utility functions
export const addARIALabel = (element: HTMLElement, label: string): void => {
  element.setAttribute('aria-label', label);
};

export const addARIALabelledBy = (element: HTMLElement, labelledBy: string): void => {
  element.setAttribute('aria-labelledby', labelledBy);
};

export const addARIADescribedBy = (element: HTMLElement, describedBy: string): void => {
  element.setAttribute('aria-describedby', describedBy);
};

export const setARIAExpanded = (element: HTMLElement, expanded: boolean): void => {
  element.setAttribute('aria-expanded', expanded.toString());
};

export const setARIAHidden = (element: HTMLElement, hidden: boolean): void => {
  element.setAttribute('aria-hidden', hidden.toString());
};

export const setARIASelected = (element: HTMLElement, selected: boolean): void => {
  element.setAttribute('aria-selected', selected.toString());
};

export const setARIAChecked = (element: HTMLElement, checked: boolean): void => {
  element.setAttribute('aria-checked', checked.toString());
};

export const setARIAPressed = (element: HTMLElement, pressed: boolean): void => {
  element.setAttribute('aria-pressed', pressed.toString());
};

export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};