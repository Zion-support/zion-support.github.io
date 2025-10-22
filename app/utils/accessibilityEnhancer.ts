interface AccessibilityConfig {
  enabled: boolean;
  highContrast: boolean;
  fontSize: number;
  screenReader: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;

  constructor() {
    this.config = {
      enabled: true,
      highContrast: false,
      fontSize: 16,
      screenReader: false
    };
  }

  init(): void {
    if (this.config.enabled) {
      this.addSkipLinks();
      this.enhanceKeyboardNavigation();
      this.addAriaLabels();
      this.optimizeColorContrast();
      console.log('Accessibility enhancer initialized');
    }
  }

  setHighContrast(enabled: boolean): void {
    this.config.highContrast = enabled;
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }

  setFontSize(size: number): void {
    this.config.fontSize = size;
    document.documentElement.style.fontSize = `${size}px`;
  }

  setScreenReader(enabled: boolean): void {
    this.config.screenReader = enabled;
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
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  /**
   * Enhance keyboard navigation
   */
  private enhanceKeyboardNavigation(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  /**
   * Add ARIA labels to interactive elements
   */
  private addAriaLabels(): void {
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (text) {
        button.setAttribute('aria-label', text);
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      const text = link.textContent?.trim();
      if (text) {
        link.setAttribute('aria-label', text);
      }
    });
  }

  /**
   * Optimize color contrast
   */
  private optimizeColorContrast(): void {
    if (this.config.highContrast) {
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }
        .high-contrast * {
          border: 1px solid currentColor !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * Announce changes to screen readers
   */
  announce(message: string): void {
    if (this.config.screenReader) {
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
  }

  /**
   * Focus management
   */
  trapFocus(element: HTMLElement): void {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    element.addEventListener('keydown', (e) => {
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
    });
  }
}

export default AccessibilityEnhancer;