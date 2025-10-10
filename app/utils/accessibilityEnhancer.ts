// Accessibility enhancer utility

export interface EnhancementOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusManagement?: boolean;
}

export class AccessibilityEnhancer {
  private options: EnhancementOptions;
  private enhancements: Map<string, () => void> = new Map();

  constructor(options: EnhancementOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableReducedMotion: true,
      enableFocusManagement: true,
      ...options
    };
  }

  /**
   * Enhance accessibility for the entire page
   */
  enhance(): void {
    this.enhanceKeyboardNavigation();
    this.enhanceScreenReaderSupport();
    this.enhanceHighContrast();
    this.enhanceReducedMotion();
    this.enhanceFocusManagement();
  }

  /**
   * Remove all enhancements
   */
  removeEnhancements(): void {
    this.enhancements.forEach(cleanup => cleanup());
    this.enhancements.clear();
  }

  private enhanceKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip links and buttons
      if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
        return;
      }

      // Handle arrow key navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        this.navigateVertically(e.key === 'ArrowDown');
      }

      // Handle escape key
      if (e.key === 'Escape') {
        this.handleEscapeKey();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    this.enhancements.set('keyboardNavigation', () => {
      document.removeEventListener('keydown', handleKeyDown);
    });
  }

  private enhanceScreenReaderSupport(): void {
    if (!this.options.enableScreenReaderSupport) return;

    // Add skip links
    this.addSkipLinks();
    
    // Enhance form labels
    this.enhanceFormLabels();
    
    // Add ARIA landmarks
    this.addAriaLandmarks();
  }

  private enhanceHighContrast(): void {
    if (!this.options.enableHighContrast) return;

    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    if (prefersHighContrast) {
      document.body.classList.add('high-contrast');
    }

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    this.enhancements.set('highContrast', () => {
      mediaQuery.removeEventListener('change', handleChange);
      document.body.classList.remove('high-contrast');
    });
  }

  private enhanceReducedMotion(): void {
    if (!this.options.enableReducedMotion) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
    }

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    this.enhancements.set('reducedMotion', () => {
      mediaQuery.removeEventListener('change', handleChange);
      document.body.classList.remove('reduced-motion');
    });
  }

  private enhanceFocusManagement(): void {
    if (!this.options.enableFocusManagement) return;

    // Add focus indicators
    this.addFocusIndicators();
    
    // Manage focus for modals
    this.enhanceModalFocus();
  }

  private navigateVertically(down: boolean): void {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
    const nextIndex = down ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex >= 0 && nextIndex < focusableElements.length) {
      (focusableElements[nextIndex] as HTMLElement).focus();
    }
  }

  private handleEscapeKey(): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      if (modal instanceof HTMLElement && modal.style.display !== 'none') {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  private addSkipLinks(): void {
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

  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder) {
          input.setAttribute('aria-label', placeholder);
        }
      }
    });
  }

  private addAriaLandmarks(): void {
    // Add main landmark if missing
    if (!document.querySelector('main, [role="main"]')) {
      const main = document.createElement('main');
      main.id = 'main-content';
      main.setAttribute('role', 'main');
      
      // Move main content into the main element
      const content = document.querySelector('.main-content, .content, main');
      if (content) {
        content.parentNode?.insertBefore(main, content);
        main.appendChild(content);
      }
    }
  }

  private addFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      .focus-indicator:focus {
        outline: 2px solid #4F46E5;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
    
    // Add focus indicators to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    interactiveElements.forEach(el => {
      el.classList.add('focus-indicator');
    });
  }

  private enhanceModalFocus(): void {
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        };
        
        modal.addEventListener('keydown', handleKeyDown);
      }
    });
  }
}

export default AccessibilityEnhancer;