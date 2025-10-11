/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility improvements for web applications
 */

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
    const screenReaderOnly = document.createElement('style');
    screenReaderOnly.textContent = `
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
    document.head.appendChild(screenReaderOnly);
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

    const focusStyles = document.createElement('style');
    focusStyles.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #4F46E5;
        outline-offset: 2px;
      }
      
      .high-contrast .keyboard-navigation *:focus {
        outline: 3px solid #FFFFFF;
        outline-offset: 3px;
      }
    `;
    document.head.appendChild(focusStyles);
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
        const text = element.textContent?.trim();
        if (text) {
          element.setAttribute('aria-label', text);
        }
      }
    });
  }

  /**
   * Announce message to screen readers
   */
  public announce(message: string): void {
    if (!this.options.enableScreenReader) return;

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

  /**
   * Update accessibility options
   */
  public updateOptions(options: Partial<AccessibilityOptions>): void {
    this.options = { ...this.options, ...options };
    this.init();
  }
}

// Export default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();
