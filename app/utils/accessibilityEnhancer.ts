export interface AccessibilityEnhancementOptions {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableKeyboardNavigation?: boolean;
}

export const accessibilityEnhancer = {
  // Add skip links to the page
  addSkipLinks: (): void => {
    if (typeof document === 'undefined') return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(({ href, text }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      link.className = 'skip-link';
      link.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
      `;
      
      link.addEventListener('focus', () => {
        link.style.top = '6px';
      });
      
      link.addEventListener('blur', () => {
        link.style.top = '-40px';
      });

      document.body.insertBefore(link, document.body.firstChild);
    });
  },

  // Enhance focus management
  enhanceFocusManagement: (): void => {
    if (typeof document === 'undefined') return;

    // Add focus styles
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .keyboard-user *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .skip-link:focus {
        top: 6px !important;
      }
    `;
    document.head.appendChild(style);

    // Detect keyboard usage
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-user');
      }
    });
    
    document.addEventListener('mousedown', () => {
      isKeyboardUser = false;
      document.body.classList.remove('keyboard-user');
    });
  },

  // Add ARIA labels to interactive elements
  addAriaLabels: (): void => {
    if (typeof document === 'undefined') return;

    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ARIA labels to links without text
    const links = document.querySelectorAll('a');
    links.forEach((link, index) => {
      if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
        link.setAttribute('aria-label', `Link ${index + 1}`);
      }
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder) {
          input.setAttribute('aria-label', placeholder);
        } else {
          input.setAttribute('aria-label', `Form control ${index + 1}`);
        }
      }
    });
  },

  // Enhance keyboard navigation
  enhanceKeyboardNavigation: (): void => {
    if (typeof document === 'undefined') return;

    // Add keyboard event listeners for custom components
    document.addEventListener('keydown', (e) => {
      // Handle Escape key for modals and dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('data-close-on-escape') === 'true') {
          activeElement.blur();
        }
      }

      // Handle Enter and Space for custom buttons
      if ((e.key === 'Enter' || e.key === ' ') && e.target instanceof HTMLElement) {
        if (e.target.getAttribute('role') === 'button' && e.target.tagName !== 'BUTTON') {
          e.preventDefault();
          e.target.click();
        }
      }
    });
  },

  // Add screen reader announcements
  addScreenReaderSupport: (): void => {
    if (typeof document === 'undefined') return;

    // Create live region for announcements
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

    // Function to announce messages
    (window as any).announceToScreenReader = (message: string) => {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    };
  },

  // Run all accessibility enhancements
  enhanceAll: (options: AccessibilityEnhancementOptions = {}): void => {
    const {
      enableSkipLinks = true,
      enableFocusManagement = true,
      enableAriaLabels = true,
      enableKeyboardNavigation = true
    } = options;

    if (enableSkipLinks) {
      accessibilityEnhancer.addSkipLinks();
    }

    if (enableFocusManagement) {
      accessibilityEnhancer.enhanceFocusManagement();
    }

    if (enableAriaLabels) {
      accessibilityEnhancer.addAriaLabels();
    }

    if (enableKeyboardNavigation) {
      accessibilityEnhancer.enhanceKeyboardNavigation();
    }

    accessibilityEnhancer.addScreenReaderSupport();
  }
};

export default accessibilityEnhancer;