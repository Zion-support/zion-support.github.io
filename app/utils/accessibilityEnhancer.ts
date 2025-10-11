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
  enableHighContrast: true,
  enableFocusIndicators: true,
  enableAriaLabels: true,
};

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;

  constructor(options: Partial<AccessibilityOptions> = {}) {
    this.options = { ...defaultAccessibilityOptions, ...options };
  }

  /**
   * Initialize accessibility enhancements
   */
  public init(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupFocusIndicators();
    this.setupAriaLabels();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.options.enableScreenReader) return;

    // Add screen reader only text
    const screenReaderOnly = document.createElement('div');
    screenReaderOnly.setAttribute('aria-live', 'polite');
    screenReaderOnly.setAttribute('aria-atomic', 'true');
    screenReaderOnly.className = 'sr-only';
    screenReaderOnly.id = 'screen-reader-announcements';
    document.body.appendChild(screenReaderOnly);
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    if (!this.options.enableHighContrast) return;

    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }

    // Listen for changes in contrast preference
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  }

  /**
   * Setup focus indicators
   */
  private setupFocusIndicators(): void {
    if (!this.options.enableFocusIndicators) return;

    // Add focus styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup ARIA labels
   */
  private setupAriaLabels(): void {
    if (!this.options.enableAriaLabels) return;

    // Add ARIA labels to interactive elements without labels
    const interactiveElements = document.querySelectorAll('button, input, select, textarea, a[href]');
    
    interactiveElements.forEach((element) => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent?.trim() || element.getAttribute('placeholder') || 'Interactive element';
        element.setAttribute('aria-label', text);
      }
    });
  }

  /**
   * Announce message to screen readers
   */
  public announce(message: string): void {
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  }

  /**
   * Update accessibility options
   */
  public updateOptions(newOptions: Partial<AccessibilityOptions>): void {
    this.options = { ...this.options, ...newOptions };
    this.init();
  }
}

// Export default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();