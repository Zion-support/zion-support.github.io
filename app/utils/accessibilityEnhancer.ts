'use client';

/**
 * Advanced Accessibility Enhancer
 * Provides comprehensive accessibility features for the application
 */

export class AccessibilityEnhancer {
  private focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ];

  private skipLinks: HTMLElement[] = [];
  private landmarks: HTMLElement[] = [];
  private headings: HTMLElement[] = [];

  constructor() {
    this.initialize();
  }

  /**
   * Initialize accessibility features
   */
  private initialize(): void {
    this.setupKeyboardNavigation();
    this.setupSkipLinks();
    this.setupLandmarks();
    this.setupHeadings();
    this.setupFocusManagement();
    this.setupScreenReaderSupport();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'Tab':
          this.handleTabNavigation(event);
          break;
        case 'Escape':
          this.handleEscapeKey(event);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          this.handleArrowNavigation(event);
          break;
        case 'Enter':
        case ' ':
          this.handleActivation(event);
          break;
      }
    });
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (event.shiftKey) {
      // Shift + Tab: move backwards
      const nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
      focusableElements[nextIndex]?.focus();
    } else {
      // Tab: move forwards
      const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
      focusableElements[nextIndex]?.focus();
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
  private handleArrowNavigation(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    
    // Check if we're in a menu or list
    if (activeElement.closest('[role="menu"], [role="listbox"], [role="grid"]')) {
      this.handleMenuNavigation(event);
    } else {
      this.handlePageNavigation(event);
    }
  }

  /**
   * Handle menu navigation
   */
  private handleMenuNavigation(event: KeyboardEvent): void {
    const menu = document.activeElement?.closest('[role="menu"], [role="listbox"], [role="grid"]');
    if (!menu) return;

    const items = Array.from(menu.querySelectorAll('[role="menuitem"], [role="option"], [role="gridcell"]')) as HTMLElement[];
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    let nextIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
    }

    items[nextIndex]?.focus();
    event.preventDefault();
  }

  /**
   * Handle page navigation
   */
  private handlePageNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    let nextIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
        nextIndex = Math.min(currentIndex + 1, focusableElements.length - 1);
        break;
      case 'ArrowUp':
        nextIndex = Math.max(currentIndex - 1, 0);
        break;
    }

    if (nextIndex !== currentIndex) {
      focusableElements[nextIndex]?.focus();
      event.preventDefault();
    }
  }

  /**
   * Handle activation (Enter or Space)
   */
  private handleActivation(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    
    if (activeElement.tagName === 'BUTTON' || activeElement.getAttribute('role') === 'button') {
      activeElement.click();
      event.preventDefault();
    }
  }

  /**
   * Setup skip links
   */
  private setupSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
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
  }

  /**
   * Setup landmarks
   */
  private setupLandmarks(): void {
    const landmarkSelectors = [
      'main',
      'nav',
      'header',
      'footer',
      'aside',
      '[role="banner"]',
      '[role="navigation"]',
      '[role="main"]',
      '[role="complementary"]',
      '[role="contentinfo"]'
    ];
    
    this.landmarks = landmarkSelectors
      .map(selector => document.querySelector(selector))
      .filter(Boolean) as HTMLElement[];
  }

  /**
   * Setup headings
   */
  private setupHeadings(): void {
    this.headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')) as HTMLElement[];
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    // Trap focus in modals
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (modal) {
          this.trapFocus(modal as HTMLElement, event);
        }
      }
    });
  }

  /**
   * Trap focus within an element
   */
  private trapFocus(element: HTMLElement, event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements(element);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

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

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    // Announce page changes
    this.announcePageChange();
    
    // Setup live regions
    this.setupLiveRegions();
    
    // Enhance form labels
    this.enhanceFormLabels();
  }

  /**
   * Announce page changes
   */
  private announcePageChange(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const title = document.title;
          this.announceToScreenReader(`Page loaded: ${title}`);
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Setup live regions
   */
  private setupLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;
    
    document.body.appendChild(liveRegion);
  }

  /**
   * Enhance form labels
   */
  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach((input) => {
      const element = input as HTMLInputElement;
      
      if (!element.id) {
        element.id = `input-${Math.random().toString(36).substr(2, 9)}`;
      }
      
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${element.id}"]`);
        if (!label) {
          element.setAttribute('aria-label', element.placeholder || element.name || 'Input field');
        }
      }
    });
  }

  /**
   * Get focusable elements
   */
  private getFocusableElements(container: HTMLElement = document.body): HTMLElement[] {
    const elements: HTMLElement[] = [];
    
    this.focusableSelectors.forEach(selector => {
      const found = container.querySelectorAll(selector);
      elements.push(...Array.from(found) as HTMLElement[]);
    });
    
    return elements.filter(element => {
      const style = window.getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });
  }

  /**
   * Announce message to screen reader
   */
  private announceToScreenReader(message: string): void {
    const liveRegion = document.querySelector('[aria-live="polite"]');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  /**
   * Get accessibility report
   */
  public getAccessibilityReport(): any {
    return {
      focusableElements: this.getFocusableElements().length,
      landmarks: this.landmarks.length,
      headings: this.headings.length,
      skipLinks: this.skipLinks.length,
      issues: this.findAccessibilityIssues()
    };
  }

  /**
   * Find accessibility issues
   */
  private findAccessibilityIssues(): string[] {
    const issues: string[] = [];
    
    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text`);
      }
    });
    
    // Check for missing form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      const element = input as HTMLInputElement;
      if (!element.id && !element.getAttribute('aria-label')) {
        issues.push(`Form input ${index + 1} missing label or aria-label`);
      }
    });
    
    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor) {
        issues.push(`Element ${index + 1} may have insufficient color contrast`);
      }
    });
    
    return issues;
  }
}

// Initialize accessibility enhancer
export const accessibilityEnhancer = new AccessibilityEnhancer();