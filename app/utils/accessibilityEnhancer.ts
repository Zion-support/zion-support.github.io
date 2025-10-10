/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility improvements for web applications
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
  enableColorContrast?: boolean;
  enableTextScaling?: boolean;
  enableMotionReduction?: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;
  private isInitialized: boolean = false;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableColorContrast: true,
      enableTextScaling: true,
      enableMotionReduction: true,
      ...options
    };
  }

  /**
   * Initialize accessibility enhancements
   */
  public initialize(): void {
    if (this.isInitialized) return;

    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupColorContrast();
    this.setupTextScaling();
    this.setupMotionReduction();

    this.isInitialized = true;
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
  }

  /**
   * Handle keyboard navigation
   */
  private handleKeyboardNavigation(event: KeyboardEvent): void {
    const { key, ctrlKey, altKey, shiftKey } = event;

    // Skip if modifier keys are pressed
    if (ctrlKey || altKey || shiftKey) return;

    switch (key) {
      case 'Tab':
        this.handleTabNavigation(event);
        break;
      case 'Escape':
        this.handleEscapeKey(event);
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

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (event.shiftKey) {
      // Shift + Tab - move backwards
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
      focusableElements[prevIndex]?.focus();
    } else {
      // Tab - move forwards
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
   * Handle activation (Enter or Space)
   */
  private handleActivation(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    if (target.getAttribute('role') === 'button' || 
        target.tagName === 'BUTTON' || 
        target.getAttribute('tabindex') === '0') {
      target.click();
      event.preventDefault();
    }
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    const role = target.getAttribute('role');
    
    if (role === 'menuitem' || role === 'tab' || role === 'option') {
      const container = target.closest('[role="menu"], [role="tablist"], [role="listbox"]');
      if (container) {
        const items = Array.from(container.querySelectorAll(`[role="${role}"]`)) as HTMLElement[];
        const currentIndex = items.indexOf(target);
        
        let nextIndex = currentIndex;
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowLeft':
            nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            break;
          case 'ArrowDown':
          case 'ArrowRight':
            nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            break;
        }
        
        items[nextIndex]?.focus();
        event.preventDefault();
      }
    }
  }

  /**
   * Get all focusable elements
   */
  private getFocusableElements(): HTMLElement[] {
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

    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.options.enableScreenReaderSupport) return;

    // Add skip links
    this.addSkipLinks();
    
    // Enhance form labels
    this.enhanceFormLabels();
    
    // Add live regions for dynamic content
    this.addLiveRegions();
  }

  /**
   * Add skip links
   */
  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  /**
   * Enhance form labels
   */
  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const element = input as HTMLInputElement;
      if (!element.id || !element.getAttribute('aria-label')) {
        const label = document.querySelector(`label[for="${element.id}"]`);
        if (label) {
          element.setAttribute('aria-label', label.textContent || '');
        }
      }
    });
  }

  /**
   * Add live regions for dynamic content
   */
  private addLiveRegions(): void {
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
  private setupHighContrast(): void {
    if (!this.options.enableHighContrast) return;

    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    });
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.options.enableFocusManagement) return;

    // Add focus indicators
    this.addFocusIndicators();
    
    // Manage focus for modals
    this.setupModalFocusManagement();
  }

  /**
   * Add focus indicators
   */
  private addFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #00ffff;
        outline-offset: 2px;
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
      }
      
      .skip-link:focus {
        top: 6px;
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
   * Setup modal focus management
   */
  private setupModalFocusManagement(): void {
    // This would be implemented based on your modal system
    // For now, we'll add a basic implementation
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (modal) {
          const focusableElements = modal.querySelectorAll('button, input, select, textarea, a[href]');
          if (focusableElements.length > 0) {
            (focusableElements[0] as HTMLElement).focus();
          }
        }
      }
    });
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    if (!this.options.enableARIALabels) return;

    // Add ARIA labels to interactive elements
    this.addARIALabels();
  }

  /**
   * Add ARIA labels
   */
  private addARIALabels(): void {
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (text) {
        button.setAttribute('aria-label', text);
      }
    });

    const links = document.querySelectorAll('a:not([aria-label]):not([aria-describedby])');
    links.forEach(link => {
      const text = link.textContent?.trim();
      if (text) {
        link.setAttribute('aria-label', text);
      }
    });
  }

  /**
   * Setup color contrast checking
   */
  private setupColorContrast(): void {
    if (!this.options.enableColorContrast) return;

    // This would integrate with a color contrast checking library
    // For now, we'll add a basic implementation
    this.checkColorContrast();
  }

  /**
   * Check color contrast
   */
  private checkColorContrast(): void {
    // Basic color contrast checking would go here
    // This is a simplified implementation
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // Basic contrast checking logic would go here
      // This is a placeholder for the actual implementation
    });
  }

  /**
   * Setup text scaling
   */
  private setupTextScaling(): void {
    if (!this.options.enableTextScaling) return;

    // Add text scaling support
    const style = document.createElement('style');
    style.textContent = `
      html {
        font-size: 16px;
      }
      
      @media (prefers-reduced-motion: no-preference) {
        html {
          transition: font-size 0.3s ease;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup motion reduction
   */
  private setupMotionReduction(): void {
    if (!this.options.enableMotionReduction) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Listen for changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    });

    // Add reduced motion styles
    const style = document.createElement('style');
    style.textContent = `
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
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
   * Cleanup and destroy
   */
  public destroy(): void {
    if (!this.isInitialized) return;

    // Remove event listeners
    document.removeEventListener('keydown', this.handleKeyboardNavigation.bind(this));
    
    // Remove added elements
    const skipLinks = document.querySelector('.skip-links');
    skipLinks?.remove();
    
    const liveRegion = document.getElementById('live-region');
    liveRegion?.remove();

    this.isInitialized = false;
  }
}

// Export default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();