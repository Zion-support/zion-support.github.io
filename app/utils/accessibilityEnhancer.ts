<<<<<<< HEAD
// Accessibility Enhancement Utilities
export interface AccessibilityOptions {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusIndicators: boolean;
  enableAriaLabels: boolean;
}

export const defaultAccessibilityOptions: AccessibilityOptions = {
  enableKeyboardNavigation: true,
  enableScreenReader: true,
  enableHighContrast: false,
  enableFocusIndicators: true,
  enableAriaLabels: true,
};

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;

  constructor(options: Partial<AccessibilityOptions> = {}) {
    this.options = { ...defaultAccessibilityOptions, ...options };
  }

  public enhanceElement(element: HTMLElement): void {
    if (this.options.enableKeyboardNavigation) {
      this.addKeyboardNavigation(element);
    }
    
    if (this.options.enableScreenReader) {
      this.addScreenReaderSupport(element);
    }
    
    if (this.options.enableFocusIndicators) {
      this.addFocusIndicators(element);
    }
    
    if (this.options.enableAriaLabels) {
      this.addAriaLabels(element);
    }
  }

  private addKeyboardNavigation(element: HTMLElement): void {
    element.setAttribute('tabindex', '0');
  }

  private addScreenReaderSupport(element: HTMLElement): void {
    if (!element.getAttribute('aria-label')) {
      const text = element.textContent || element.getAttribute('alt') || 'Interactive element';
      element.setAttribute('aria-label', text);
    }
  }

  private addFocusIndicators(element: HTMLElement): void {
    element.style.outline = '2px solid #0066cc';
    element.style.outlineOffset = '2px';
  }

  private addAriaLabels(element: HTMLElement): void {
    if (element.tagName === 'BUTTON' && !element.getAttribute('aria-label')) {
      element.setAttribute('aria-label', element.textContent || 'Button');
    }
  }
}

export function enhanceAccessibility(
  selector: string, 
  options: Partial<AccessibilityOptions> = {}
): void {
  const enhancer = new AccessibilityEnhancer(options);
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    if (element instanceof HTMLElement) {
      enhancer.enhanceElement(element);
    }
  });
}

export default AccessibilityEnhancer;
=======
'use client';

/**
 * Accessibility Enhancement Utilities
 * Provides tools to improve web accessibility
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
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
      enableScreenReaderSupport: true,
      enableHighContrast: false,
      enableFocusManagement: true,
      enableARIALabels: true,
      ...options,
    };
  }

  /**
   * Initialize accessibility enhancements
   */
  public init(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupFocusManagement();
    this.setupARIALabels();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.options.enableScreenReaderSupport) return;

    // Add screen reader announcements
    this.createScreenReaderRegion();
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrast(): void {
    if (!this.options.enableHighContrast) return;

    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.options.enableFocusManagement) return;

    this.updateFocusableElements();
    document.addEventListener('focusin', this.handleFocusIn.bind(this));
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    if (!this.options.enableARIALabels) return;

    this.addARIALabels();
  }

  /**
   * Handle key down events
   */
  private handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Tab':
        this.handleTabKey(event);
        break;
      case 'Escape':
        this.handleEscapeKey(event);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        this.handleArrowKeys(event);
        break;
    }
  }

  /**
   * Handle tab key navigation
   */
  private handleTabKey(event: KeyboardEvent): void {
    this.updateFocusableElements();
    
    if (this.focusableElements.length === 0) return;

    const currentElement = document.activeElement as HTMLElement;
    const currentIndex = this.focusableElements.indexOf(currentElement);

    if (event.shiftKey) {
      // Shift + Tab: move backwards
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : this.focusableElements.length - 1;
      this.focusableElements[prevIndex]?.focus();
    } else {
      // Tab: move forwards
      const nextIndex = currentIndex < this.focusableElements.length - 1 ? currentIndex + 1 : 0;
      this.focusableElements[nextIndex]?.focus();
    }
    
    event.preventDefault();
  }

  /**
   * Handle escape key
   */
  private handleEscapeKey(event: KeyboardEvent): void {
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
    const currentElement = document.activeElement as HTMLElement;
    
    // Only handle arrow keys for specific elements
    if (!currentElement.matches('[role="menu"], [role="menubar"], [role="tablist"]')) {
      return;
    }

    event.preventDefault();
    
    const direction = event.key.includes('Up') || event.key.includes('Left') ? -1 : 1;
    const nextElement = this.findNextFocusableElement(currentElement, direction);
    
    if (nextElement) {
      nextElement.focus();
    }
  }

  /**
   * Handle focus in events
   */
  private handleFocusIn(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    
    // Update current focus index
    this.currentFocusIndex = this.focusableElements.indexOf(target);
    
    // Announce focus changes to screen readers
    if (this.options.enableScreenReaderSupport) {
      this.announceToScreenReader(`Focused on ${target.textContent || target.getAttribute('aria-label') || 'element'}`);
    }
  }

  /**
   * Update list of focusable elements
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
      '[role="link"]:not([disabled])',
      '[role="menuitem"]:not([disabled])',
      '[role="tab"]:not([disabled])',
    ];

    this.focusableElements = Array.from(
      document.querySelectorAll(focusableSelectors.join(', '))
    ) as HTMLElement[];
  }

  /**
   * Find next focusable element
   */
  private findNextFocusableElement(currentElement: HTMLElement, direction: number): HTMLElement | null {
    const currentIndex = this.focusableElements.indexOf(currentElement);
    const nextIndex = currentIndex + direction;
    
    if (nextIndex >= 0 && nextIndex < this.focusableElements.length) {
      return this.focusableElements[nextIndex];
    }
    
    return null;
  }

  /**
   * Create screen reader region
   */
  private createScreenReaderRegion(): void {
    const region = document.createElement('div');
    region.id = 'screen-reader-announcements';
    region.setAttribute('aria-live', 'polite');
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    region.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    
    document.body.appendChild(region);
  }

  /**
   * Announce message to screen readers
   */
  private announceToScreenReader(message: string): void {
    const region = document.getElementById('screen-reader-announcements');
    if (region) {
      region.textContent = message;
    }
  }

  /**
   * Add ARIA labels to elements
   */
  private addARIALabels(): void {
    // Add labels to buttons without text
    const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    iconButtons.forEach(button => {
      const icon = button.querySelector('svg, i, [class*="icon"]');
      if (icon && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label && !input.getAttribute('aria-label')) {
        input.setAttribute('aria-label', input.placeholder || 'Input field');
      }
    });

    // Add labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', 'Image');
    });
  }

  /**
   * Enable high contrast mode
   */
  public enableHighContrast(): void {
    document.body.classList.add('high-contrast');
  }

  /**
   * Disable high contrast mode
   */
  public disableHighContrast(): void {
    document.body.classList.remove('high-contrast');
  }

  /**
   * Toggle high contrast mode
   */
  public toggleHighContrast(): void {
    document.body.classList.toggle('high-contrast');
  }

  /**
   * Get current focus index
   */
  public getCurrentFocusIndex(): number {
    return this.currentFocusIndex;
  }

  /**
   * Get total focusable elements count
   */
  public getFocusableElementsCount(): number {
    return this.focusableElements.length;
  }

  /**
   * Focus on specific element
   */
  public focusElement(index: number): void {
    if (index >= 0 && index < this.focusableElements.length) {
      this.focusableElements[index].focus();
    }
  }

  /**
   * Cleanup event listeners
   */
  public destroy(): void {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    document.removeEventListener('focusin', this.handleFocusIn.bind(this));
  }
}

// Export utility functions
export const createAccessibilityEnhancer = (options?: AccessibilityOptions): AccessibilityEnhancer => {
  return new AccessibilityEnhancer(options);
};

export const enhanceAccessibility = (options?: AccessibilityOptions): void => {
  const enhancer = createAccessibilityEnhancer(options);
  enhancer.init();
};

export default AccessibilityEnhancer;
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
