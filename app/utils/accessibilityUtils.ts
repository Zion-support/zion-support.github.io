// Accessibility utility functions for enhanced user experience

export interface AccessibilityConfig {
  enableLogging?: boolean;
  enableAnnouncements?: boolean;
  enableKeyboardNavigation?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export interface AccessibilityFeatures {
  announce: (message: string, priority?: 'polite' | 'assertive') => void;
  setFocus: (element: HTMLElement) => void;
  trapFocus: (container: HTMLElement) => void;
  releaseFocus: () => void;
  checkContrast: (foreground: string, background: string) => boolean;
  enableHighContrast: () => void;
  disableHighContrast: () => void;
  enableReducedMotion: () => void;
  disableReducedMotion: () => void;
  validateAriaLabels: (element: HTMLElement) => string[];
  addSkipLink: (targetId: string, text: string) => void;
  setupKeyboardNavigation: (container: HTMLElement) => void;
}

class AccessibilityUtils {
  private config: AccessibilityConfig;
  private focusTrap: HTMLElement[] = [];
  private skipLinks: Map<string, HTMLAnchorElement> = new Map();

  constructor(config: AccessibilityConfig = {}) {
    this.config = {
      enableLogging: process.env.NODE_ENV === 'development',
      enableAnnouncements: true,
      enableKeyboardNavigation: true,
      enableHighContrast: false,
      enableReducedMotion: false,
      ...config,
    };

    this.initializeAccessibility();
  }

  private initializeAccessibility(): void {
    if (typeof window === 'undefined') return;

    // Listen for system preferences
    this.detectSystemPreferences();
    
    // Add global keyboard event listeners
    if (this.config.enableKeyboardNavigation) {
      document.addEventListener('keydown', this.handleGlobalKeydown.bind(this));
    }

    // Add focus management
    document.addEventListener('focusin', this.handleFocusIn.bind(this));
  }

  private detectSystemPreferences(): void {
    if (typeof window === 'undefined') return;

    // Detect high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      this.enableHighContrast();
    }

    // Detect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.enableReducedMotion();
    }

    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        this.enableHighContrast();
      } else {
        this.disableHighContrast();
      }
    });

    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        this.enableReducedMotion();
      } else {
        this.disableReducedMotion();
      }
    });
  }

  private handleGlobalKeydown(event: KeyboardEvent): void {
    // Handle common accessibility shortcuts
    if (event.key === 'Tab' && event.shiftKey) {
      // Handle reverse tab navigation
      this.handleTabNavigation(event, true);
    } else if (event.key === 'Tab') {
      // Handle forward tab navigation
      this.handleTabNavigation(event, false);
    } else if (event.key === 'Escape') {
      // Handle escape key for modals, dropdowns, etc.
      this.handleEscapeKey(event);
    }
  }

  private handleTabNavigation(event: KeyboardEvent, reverse: boolean): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (currentIndex === -1) return;

    let nextIndex = reverse ? currentIndex - 1 : currentIndex + 1;
    
    if (nextIndex < 0) {
      nextIndex = focusableElements.length - 1;
    } else if (nextIndex >= focusableElements.length) {
      nextIndex = 0;
    }

    event.preventDefault();
    focusableElements[nextIndex]?.focus();
  }

  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals, dropdowns, etc.
    const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
      if (closeButton) {
        (closeButton as HTMLElement).click();
      }
    });
  }

  private handleFocusIn(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    
    // Add focus ring for keyboard navigation
    if (target.matches('button, input, select, textarea, a[href], [tabindex]')) {
      target.classList.add('keyboard-focus');
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]:not([disabled])',
      '[role="link"]:not([disabled])',
    ];

    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  // Announce messages to screen readers
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.config.enableAnnouncements) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);

    if (this.config.enableLogging) {
      console.log(`[A11y] Announced: ${message}`);
    }
  }

  // Set focus to an element
  setFocus(element: HTMLElement): void {
    if (!element) return;

    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (this.config.enableLogging) {
      console.log('[A11y] Focus set to:', element);
    }
  }

  // Trap focus within a container
  trapFocus(container: HTMLElement): void {
    const focusableElements = this.getFocusableElements().filter(el => 
      container.contains(el)
    );

    if (focusableElements.length === 0) return;

    this.focusTrap.push(container);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    firstElement.focus();
  }

  // Release focus trap
  releaseFocus(): void {
    this.focusTrap.pop();
  }

  // Check color contrast ratio
  checkContrast(foreground: string, background: string): boolean {
    const getLuminance = (color: string): number => {
      const rgb = this.hexToRgb(color);
      if (!rgb) return 0;

      const { r, g, b } = rgb;
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

    return contrast >= 4.5; // WCAG AA standard
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Enable high contrast mode
  enableHighContrast(): void {
    document.documentElement.classList.add('high-contrast');
    this.config.enableHighContrast = true;

    if (this.config.enableLogging) {
      console.log('[A11y] High contrast mode enabled');
    }
  }

  // Disable high contrast mode
  disableHighContrast(): void {
    document.documentElement.classList.remove('high-contrast');
    this.config.enableHighContrast = false;

    if (this.config.enableLogging) {
      console.log('[A11y] High contrast mode disabled');
    }
  }

  // Enable reduced motion
  enableReducedMotion(): void {
    document.documentElement.classList.add('reduced-motion');
    this.config.enableReducedMotion = true;

    if (this.config.enableLogging) {
      console.log('[A11y] Reduced motion enabled');
    }
  }

  // Disable reduced motion
  disableReducedMotion(): void {
    document.documentElement.classList.remove('reduced-motion');
    this.config.enableReducedMotion = false;

    if (this.config.enableLogging) {
      console.log('[A11y] Reduced motion disabled');
    }
  }

  // Validate ARIA labels
  validateAriaLabels(element: HTMLElement): string[] {
    const issues: string[] = [];

    // Check for missing alt text on images
    const images = element.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} is missing alt text or aria-label`);
      }
    });

    // Check for missing labels on form inputs
    const inputs = element.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      const id = input.id;
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');

      if (!label && !ariaLabel && !ariaLabelledBy) {
        issues.push(`Form input ${index + 1} is missing label or aria-label`);
      }
    });

    // Check for proper heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        issues.push(`Heading ${index + 1} (${heading.tagName}) skips heading level`);
      }
      lastLevel = level;
    });

    return issues;
  }

  // Add skip link
  addSkipLink(targetId: string, text: string): void {
    if (this.skipLinks.has(targetId)) return;

    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = text;
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
    this.skipLinks.set(targetId, skipLink);

    if (this.config.enableLogging) {
      console.log(`[A11y] Skip link added for ${targetId}`);
    }
  }

  // Setup keyboard navigation for a container
  setupKeyboardNavigation(container: HTMLElement): void {
    const focusableElements = this.getFocusableElements().filter(el => 
      container.contains(el)
    );

    focusableElements.forEach((element, index) => {
      element.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
          event.preventDefault();
          const nextIndex = (index + 1) % focusableElements.length;
          focusableElements[nextIndex].focus();
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
          event.preventDefault();
          const prevIndex = index === 0 ? focusableElements.length - 1 : index - 1;
          focusableElements[prevIndex].focus();
        }
      });
    });

    if (this.config.enableLogging) {
      console.log(`[A11y] Keyboard navigation setup for container with ${focusableElements.length} focusable elements`);
    }
  }
}

// Export singleton instance
export const accessibilityUtils = new AccessibilityUtils();

// Export individual functions for convenience
export const {
  announce,
  setFocus,
  trapFocus,
  releaseFocus,
  checkContrast,
  enableHighContrast,
  disableHighContrast,
  enableReducedMotion,
  disableReducedMotion,
  validateAriaLabels,
  addSkipLink,
  setupKeyboardNavigation,
} = accessibilityUtils;
