/**
 * Accessibility Enhancer Utility
 * Provides tools and utilities to improve website accessibility
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
  enableSkipLinks?: boolean;
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
      enableFocusIndicators: true,
      enableSkipLinks: true,
      ...options
    };

    this.init();
  }

  /**
   * Initialize accessibility enhancements
   */
  private init(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupFocusIndicators();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'Tab':
          this.handleTabKey(event);
          break;
        case 'Escape':
          this.handleEscapeKey(event);
          break;
        case 'ArrowDown':
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'ArrowRight':
          this.handleArrowKeys(event);
          break;
      }
    });
  }

  /**
   * Handle tab key navigation
   */
  private handleTabKey(event: KeyboardEvent): void {
    this.updateFocusableElements();
    
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
   * Handle arrow key navigation
   */
  private handleArrowKeys(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    const role = activeElement.getAttribute('role');
    
    if (role === 'menu' || role === 'menubar') {
      this.navigateMenu(event, activeElement);
    } else if (role === 'tablist') {
      this.navigateTabs(event, activeElement);
    }
  }

  /**
   * Navigate menu items
   */
  private navigateMenu(event: KeyboardEvent, menu: HTMLElement): void {
    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
    const activeElement = document.activeElement as HTMLElement;
    const currentIndex = menuItems.indexOf(activeElement);
    
    let nextIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowUp':
        nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
        break;
    }
    
    menuItems[nextIndex]?.focus();
    event.preventDefault();
  }

  /**
   * Navigate tabs
   */
  private navigateTabs(event: KeyboardEvent, tablist: HTMLElement): void {
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]')) as HTMLElement[];
    const activeElement = document.activeElement as HTMLElement;
    const currentIndex = tabs.indexOf(activeElement);
    
    let nextIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
        break;
    }
    
    tabs[nextIndex]?.focus();
    tabs[nextIndex]?.click();
    event.preventDefault();
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.options.enableScreenReaderSupport) return;

    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'accessibility-announcer';
    document.body.appendChild(liveRegion);

    // Add skip links
    if (this.options.enableSkipLinks) {
      this.addSkipLinks();
    }
  }

  /**
   * Add skip links for keyboard navigation
   */
  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    
    const mainSkip = document.createElement('a');
    mainSkip.href = '#main-content';
    mainSkip.textContent = 'Skip to main content';
    mainSkip.className = 'skip-link';
    
    const navSkip = document.createElement('a');
    navSkip.href = '#main-navigation';
    navSkip.textContent = 'Skip to navigation';
    navSkip.className = 'skip-link';
    
    skipLinks.appendChild(mainSkip);
    skipLinks.appendChild(navSkip);
    
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrast(): void {
    if (!this.options.enableHighContrast) return;

    const highContrastToggle = document.createElement('button');
    highContrastToggle.textContent = 'Toggle High Contrast';
    highContrastToggle.className = 'high-contrast-toggle';
    highContrastToggle.setAttribute('aria-label', 'Toggle high contrast mode');
    
    highContrastToggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isHighContrast = document.body.classList.contains('high-contrast');
      this.announce(`High contrast mode ${isHighContrast ? 'enabled' : 'disabled'}`);
    });
    
    document.body.appendChild(highContrastToggle);
  }

  /**
   * Setup focus indicators
   */
  private setupFocusIndicators(): void {
    if (!this.options.enableFocusIndicators) return;

    const style = document.createElement('style');
    style.textContent = `
      .focus-indicator:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Update focusable elements list
   */
  private updateFocusableElements(): void {
    this.focusableElements = Array.from(
      document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      )
    ) as HTMLElement[];
  }

  /**
   * Announce message to screen readers
   */
  public announce(message: string): void {
    const announcer = document.getElementById('accessibility-announcer');
    if (announcer) {
      announcer.textContent = message;
    }
  }

  /**
   * Add ARIA labels to elements
   */
  public addAriaLabels(): void {
    // Add labels to buttons without text
    const iconButtons = document.querySelectorAll('button:not([aria-label]):empty');
    iconButtons.forEach((button, index) => {
      const icon = button.querySelector('svg');
      if (icon) {
        const iconName = icon.getAttribute('data-icon') || `icon-${index}`;
        button.setAttribute('aria-label', iconName);
      }
    });

    // Add labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
      }
    });
  }

  /**
   * Enhance form accessibility
   */
  public enhanceForms(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      // Add required field indicators
      const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
      requiredFields.forEach((field) => {
        const label = document.querySelector(`label[for="${field.id}"]`);
        if (label && !label.textContent?.includes('*')) {
          label.innerHTML += ' <span aria-label="required">*</span>';
        }
      });

      // Add error handling
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach((input) => {
        input.addEventListener('invalid', () => {
          const errorMessage = input.getAttribute('data-error') || 'This field is required';
          this.announce(errorMessage);
        });
      });
    });
  }

  /**
   * Cleanup method
   */
  public destroy(): void {
    // Remove event listeners and cleanup
    document.removeEventListener('keydown', this.handleTabKey);
    document.removeEventListener('keydown', this.handleEscapeKey);
    document.removeEventListener('keydown', this.handleArrowKeys);
  }
}

// Export utility functions
export const accessibilityUtils = {
  /**
   * Check if element is visible to screen readers
   */
  isVisibleToScreenReader: (element: HTMLElement): boolean => {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           element.getAttribute('aria-hidden') !== 'true';
  },

  /**
   * Get accessible name for element
   */
  getAccessibleName: (element: HTMLElement): string => {
    return element.getAttribute('aria-label') ||
           element.getAttribute('aria-labelledby') ||
           element.textContent?.trim() ||
           element.getAttribute('alt') ||
           element.getAttribute('title') ||
           '';
  },

  /**
   * Check if element is focusable
   */
  isFocusable: (element: HTMLElement): boolean => {
    const tabIndex = element.getAttribute('tabindex');
    if (tabIndex === '-1') return false;
    
    const tagName = element.tagName.toLowerCase();
    const focusableTags = ['a', 'button', 'input', 'select', 'textarea'];
    
    return focusableTags.includes(tagName) || 
           (tabIndex !== null && parseInt(tabIndex) >= 0);
  }
};

export default AccessibilityEnhancer;