/**
 * Accessibility enhancer utility for improving web accessibility
 */

export interface EnhancementOptions {
  addSkipLinks?: boolean;
  improveFocusManagement?: boolean;
  enhanceKeyboardNavigation?: boolean;
  addAriaLabels?: boolean;
  improveColorContrast?: boolean;
}

export class AccessibilityEnhancer {
  private options: EnhancementOptions;

  constructor(options: EnhancementOptions = {}) {
    this.options = {
      addSkipLinks: true,
      improveFocusManagement: true,
      enhanceKeyboardNavigation: true,
      addAriaLabels: true,
      improveColorContrast: false,
      ...options
    };
  }

  /**
   * Apply all accessibility enhancements
   */
  enhance(): void {
    if (this.options.addSkipLinks) {
      this.addSkipLinks();
    }

    if (this.options.improveFocusManagement) {
      this.improveFocusManagement();
    }

    if (this.options.enhanceKeyboardNavigation) {
      this.enhanceKeyboardNavigation();
    }

    if (this.options.addAriaLabels) {
      this.addAriaLabels();
    }

    if (this.options.improveColorContrast) {
      this.improveColorContrast();
    }
  }

  /**
   * Add skip links for keyboard navigation
   */
  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -40px;
        left: 0;
        z-index: 1000;
      }
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;

    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  /**
   * Improve focus management
   */
  private improveFocusManagement(): void {
    // Add focus-visible class for better focus indicators
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Add focus styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #4A90E2 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Enhance keyboard navigation
   */
  private enhanceKeyboardNavigation(): void {
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Alt + M: Focus main content
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const main = document.querySelector('main, [role="main"]') as HTMLElement;
        if (main) {
          main.focus();
        }
      }

      // Alt + N: Focus navigation
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav, [role="navigation"]') as HTMLElement;
        if (nav) {
          nav.focus();
        }
      }
    });
  }

  /**
   * Add ARIA labels to elements that need them
   */
  private addAriaLabels(): void {
    // Add aria-label to buttons without text
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
        const icon = button.querySelector('svg, i');
        if (icon) {
          const iconClass = icon.className;
          let label = 'Button';
          
          if (iconClass.includes('menu')) label = 'Menu';
          else if (iconClass.includes('close')) label = 'Close';
          else if (iconClass.includes('search')) label = 'Search';
          else if (iconClass.includes('edit')) label = 'Edit';
          else if (iconClass.includes('delete')) label = 'Delete';
          
          button.setAttribute('aria-label', label);
        }
      }
    });

    // Add aria-label to links without text
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
        const icon = link.querySelector('svg, i');
        if (icon) {
          const iconClass = icon.className;
          let label = 'Link';
          
          if (iconClass.includes('external')) label = 'External link';
          else if (iconClass.includes('download')) label = 'Download';
          else if (iconClass.includes('email')) label = 'Email';
          
          link.setAttribute('aria-label', label);
        }
      }
    });

    // Add role to custom interactive elements
    const customButtons = document.querySelectorAll('[data-role="button"]');
    customButtons.forEach((element) => {
      element.setAttribute('role', 'button');
      element.setAttribute('tabindex', '0');
    });
  }

  /**
   * Improve color contrast (simplified)
   */
  private improveColorContrast(): void {
    // Add high contrast mode toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'High Contrast';
    toggle.setAttribute('aria-label', 'Toggle high contrast mode');
    toggle.className = 'contrast-toggle';
    
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isHighContrast = document.body.classList.contains('high-contrast');
      toggle.textContent = isHighContrast ? 'Normal Contrast' : 'High Contrast';
    });

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      .contrast-toggle {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1000;
        padding: 8px 16px;
        background: #000;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(toggle);
  }

  /**
   * Add live region for announcements
   */
  addLiveRegion(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'accessibility-announcer';
    document.body.appendChild(liveRegion);
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string): void {
    const announcer = document.getElementById('accessibility-announcer');
    if (announcer) {
      announcer.textContent = message;
    }
  }

  /**
   * Add screen reader only class
   */
  addScreenReaderOnlyClass(): void {
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
}

// Create default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();
export default accessibilityEnhancer;