// Advanced Accessibility Enhancement Utility

interface AccessibilityConfig {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableColorContrast?: boolean;
  enableTextScaling?: boolean;
  enableMotionReduction?: boolean;
}

interface AccessibilityFeatures {
  keyboardNavigation: boolean;
  screenReader: boolean;
  highContrast: boolean;
  focusManagement: boolean;
  ariaLabels: boolean;
  colorContrast: boolean;
  textScaling: boolean;
  motionReduction: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private features: AccessibilityFeatures;
  private observers: MutationObserver[] = [];
  private focusTrap: HTMLElement[] = [];

  constructor(config: AccessibilityConfig = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableFocusManagement: true,
      enableAriaLabels: true,
      enableColorContrast: true,
      enableTextScaling: true,
      enableMotionReduction: false,
      ...config
    };

    this.features = {
      keyboardNavigation: this.config.enableKeyboardNavigation || false,
      screenReader: this.config.enableScreenReader || false,
      highContrast: this.config.enableHighContrast || false,
      focusManagement: this.config.enableFocusManagement || false,
      ariaLabels: this.config.enableAriaLabels || false,
      colorContrast: this.config.enableColorContrast || false,
      textScaling: this.config.enableTextScaling || false,
      motionReduction: this.config.enableMotionReduction || false
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.detectUserPreferences();
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupAriaLabels();
    this.setupColorContrast();
    this.setupTextScaling();
    this.setupMotionReduction();
    this.setupScreenReaderSupport();
  }

  private detectUserPreferences(): void {
    if (typeof window === 'undefined') return;

    // Detect high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      this.features.highContrast = true;
      this.enableHighContrast();
    }

    // Detect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.features.motionReduction = true;
      this.enableMotionReduction();
    }

    // Detect color scheme preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      this.features.highContrast = e.matches;
      if (e.matches) {
        this.enableHighContrast();
      } else {
        this.disableHighContrast();
      }
    });

    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      this.features.motionReduction = e.matches;
      if (e.matches) {
        this.enableMotionReduction();
      } else {
        this.disableMotionReduction();
      }
    });
  }

  private setupKeyboardNavigation(): void {
    if (!this.features.keyboardNavigation || typeof window === 'undefined') return;

    document.addEventListener('keydown', (e) => {
      // Skip links and buttons
      if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
        return;
      }

      switch (e.key) {
        case 'Tab':
          this.handleTabNavigation(e);
          break;
        case 'Enter':
        case ' ':
          this.handleActivation(e);
          break;
        case 'Escape':
          this.handleEscape(e);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          this.handleArrowNavigation(e);
          break;
      }
    });
  }

  private handleTabNavigation(e: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);

    if (e.shiftKey) {
      // Shift + Tab: move backwards
      if (currentIndex > 0) {
        e.preventDefault();
        focusableElements[currentIndex - 1].focus();
      }
    } else {
      // Tab: move forwards
      if (currentIndex < focusableElements.length - 1) {
        e.preventDefault();
        focusableElements[currentIndex + 1].focus();
      }
    }
  }

  private handleActivation(e: KeyboardEvent): void {
    const target = e.target as HTMLElement;
    if (target && target.click) {
      e.preventDefault();
      target.click();
    }
  }

  private handleEscape(e: KeyboardEvent): void {
    // Close modals, dropdowns, etc.
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label="Close"]');
      if (closeButton instanceof HTMLElement) {
        closeButton.click();
      }
    });
  }

  private handleArrowNavigation(e: KeyboardEvent): void {
    const target = e.target as HTMLElement;
    const parent = target.closest('[role="menu"], [role="tablist"], [role="listbox"]');
    
    if (!parent) return;

    const items = Array.from(parent.querySelectorAll('[role="menuitem"], [role="tab"], [role="option"]'));
    const currentIndex = items.indexOf(target);

    let nextIndex = currentIndex;
    switch (e.key) {
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

    if (nextIndex !== currentIndex && items[nextIndex]) {
      e.preventDefault();
      (items[nextIndex] as HTMLElement).focus();
    }
  }

  private setupFocusManagement(): void {
    if (!this.features.focusManagement || typeof window === 'undefined') return;

    // Track focus changes
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      this.manageFocus(target);
    });

    // Handle focus trapping
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.handleFocusTrap(e);
      }
    });
  }

  private manageFocus(element: HTMLElement): void {
    // Add focus indicators
    element.classList.add('focus-visible');
    
    // Remove focus indicators from other elements
    document.querySelectorAll('.focus-visible').forEach(el => {
      if (el !== element) {
        el.classList.remove('focus-visible');
      }
    });

    // Announce focus changes to screen readers
    if (this.features.screenReader) {
      this.announceToScreenReader(element);
    }
  }

  private handleFocusTrap(e: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    const trapContainer = activeElement.closest('[data-focus-trap]');
    
    if (!trapContainer) return;

    const focusableElements = this.getFocusableElements(trapContainer as HTMLElement);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  private setupAriaLabels(): void {
    if (!this.features.ariaLabels || typeof window === 'undefined') return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.enhanceAriaLabels(node as HTMLElement);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
  }

  private enhanceAriaLabels(element: HTMLElement): void {
    // Add aria-labels to buttons without text
    const buttons = element.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (!text) {
        const icon = button.querySelector('svg, i, img');
        if (icon) {
          button.setAttribute('aria-label', this.generateAriaLabel(button));
        }
      }
    });

    // Add aria-labels to links without text
    const links = element.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      const text = link.textContent?.trim();
      if (!text) {
        const icon = link.querySelector('svg, i, img');
        if (icon) {
          link.setAttribute('aria-label', this.generateAriaLabel(link));
        }
      }
    });

    // Add role attributes where needed
    const clickableDivs = element.querySelectorAll('div[onclick], div[role="button"]:not([role])');
    clickableDivs.forEach(div => {
      if (!div.getAttribute('role')) {
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
      }
    });
  }

  private generateAriaLabel(element: HTMLElement): string {
    // Try to generate a meaningful aria-label based on context
    const parent = element.parentElement;
    const sibling = element.previousElementSibling || element.nextElementSibling;
    
    if (sibling && sibling.textContent) {
      return `${sibling.textContent.trim()} button`;
    }
    
    if (parent && parent.textContent) {
      return `${parent.textContent.trim()} button`;
    }
    
    return 'Button';
  }

  private setupColorContrast(): void {
    if (!this.features.colorContrast || typeof window === 'undefined') return;

    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(1.2);
      }
      
      .high-contrast * {
        border-color: currentColor !important;
      }
    `;
    document.head.appendChild(style);
  }

  private setupTextScaling(): void {
    if (!this.features.textScaling || typeof window === 'undefined') return;

    // Add text scaling support
    const style = document.createElement('style');
    style.textContent = `
      .text-scaling {
        font-size: calc(1rem * var(--text-scale, 1));
      }
      
      .text-scaling h1 { font-size: calc(2.5rem * var(--text-scale, 1)); }
      .text-scaling h2 { font-size: calc(2rem * var(--text-scale, 1)); }
      .text-scaling h3 { font-size: calc(1.75rem * var(--text-scale, 1)); }
      .text-scaling h4 { font-size: calc(1.5rem * var(--text-scale, 1)); }
      .text-scaling h5 { font-size: calc(1.25rem * var(--text-scale, 1)); }
      .text-scaling h6 { font-size: calc(1rem * var(--text-scale, 1)); }
    `;
    document.head.appendChild(style);
  }

  private setupMotionReduction(): void {
    if (!this.features.motionReduction || typeof window === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupScreenReaderSupport(): void {
    if (!this.features.screenReader || typeof window === 'undefined') return;

    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'accessibility-announcer';
    document.body.appendChild(liveRegion);

    // Add screen reader only styles
    const style = document.createElement('style');
    style.textContent = `
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

  private getFocusableElements(container: HTMLElement = document.body): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];

    return Array.from(container.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  private announceToScreenReader(element: HTMLElement): void {
    const announcer = document.getElementById('accessibility-announcer');
    if (announcer) {
      const text = element.textContent || element.getAttribute('aria-label') || 'Element focused';
      announcer.textContent = text;
    }
  }

  // Public methods
  public enableHighContrast(): void {
    document.documentElement.classList.add('high-contrast');
    this.features.highContrast = true;
  }

  public disableHighContrast(): void {
    document.documentElement.classList.remove('high-contrast');
    this.features.highContrast = false;
  }

  public enableMotionReduction(): void {
    document.documentElement.classList.add('motion-reduced');
    this.features.motionReduction = true;
  }

  public disableMotionReduction(): void {
    document.documentElement.classList.remove('motion-reduced');
    this.features.motionReduction = false;
  }

  public setTextScale(scale: number): void {
    document.documentElement.style.setProperty('--text-scale', scale.toString());
  }

  public announce(message: string): void {
    const announcer = document.getElementById('accessibility-announcer');
    if (announcer) {
      announcer.textContent = message;
    }
  }

  public getFeatures(): AccessibilityFeatures {
    return { ...this.features };
  }

  public updateConfig(newConfig: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.initialize();
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Create default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export the class and types
export { AccessibilityEnhancer, type AccessibilityConfig, type AccessibilityFeatures };