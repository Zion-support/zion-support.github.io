'use client';

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

    this.init();
  }

  /**
   * Initialize accessibility features
   */
  private init(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupSkipLinks();
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
    const { key } = event;

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
    if (key === 'Enter') {
      this.handleEnterKey(event);
      return;
    }

    // Space key
    if (key === ' ') {
      this.handleSpaceKey(event);
      return;
    }
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    this.updateFocusableElementsInternal();
    
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
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(event: KeyboardEvent): void {
    const { key } = event;
    const currentElement = document.activeElement as HTMLElement;
    
    if (!currentElement) return;

    // Find the next focusable element based on arrow direction
    const direction = key === 'ArrowUp' || key === 'ArrowLeft' ? -1 : 1;
    const nextIndex = this.currentFocusIndex + direction;
    
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
   * Handle enter key
   */
  private handleEnterKey(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
      target.click();
    }
  }

  /**
   * Handle space key
   */
  private handleSpaceKey(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
      event.preventDefault();
      target.click();
    }
  }

  /**
   * Update focusable elements list
   */
  private updateFocusableElementsInternal(): void {
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
      '[role="option"]'
    ];

    this.focusableElements = Array.from(
      document.querySelectorAll(selectors.join(', '))
    ) as HTMLElement[];
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.options.enableScreenReader) return;

    // Add screen reader only text for important elements
    this.addScreenReaderText();
    
    // Setup live regions for dynamic content
    this.setupLiveRegions();
  }

  /**
   * Add screen reader only text
   */
  private addScreenReaderText(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
    `;
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Setup live regions for dynamic content
   */
  private setupLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    
    document.body.appendChild(liveRegion);
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    if (!this.options.enableHighContrast) return;

    // Add high contrast toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'Toggle High Contrast';
    toggle.className = 'high-contrast-toggle';
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });

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
        border: 2px solid #000;
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.options.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      this.currentFocusIndex = this.focusableElements.indexOf(target);
    });

    // Ensure focus is visible
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      target.style.outline = '2px solid #0066cc';
    });

    document.addEventListener('focusout', (event) => {
      const target = event.target as HTMLElement;
      target.style.outline = '';
    });
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    if (!this.options.enableARIALabels) return;

    // Add ARIA labels to interactive elements without labels
    const interactiveElements = document.querySelectorAll('button, input, select, textarea');
    
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent || element.getAttribute('placeholder') || 'Interactive element';
        element.setAttribute('aria-label', text);
      }
    });
  }

  /**
   * Setup skip links
   */
  private setupSkipLinks(): void {
    if (!this.options.enableSkipLinks) return;

    // Add skip links for main content areas
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    });
  }

  /**
   * Announce message to screen readers
   */
  public announce(message: string): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  /**
   * Update focusable elements
   */
  public updateFocusableElements(): void {
    this.updateFocusableElementsInternal();
  }

  /**
   * Focus on specific element
   */
  public focusElement(element: HTMLElement): void {
    element.focus();
    this.currentFocusIndex = this.focusableElements.indexOf(element);
  }

  /**
   * Get current focus index
   */
  public getCurrentFocusIndex(): number {
    return this.currentFocusIndex;
  }

  /**
   * Get focusable elements
   */
  public getFocusableElements(): HTMLElement[] {
    return this.focusableElements;
  }
}

// Export default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export utility functions
export const announceToScreenReader = (message: string) => {
  accessibilityEnhancer.announce(message);
};

export const focusElement = (element: HTMLElement) => {
  accessibilityEnhancer.focusElement(element);
};

export const updateFocusableElements = () => {
  accessibilityEnhancer.updateFocusableElements();
};