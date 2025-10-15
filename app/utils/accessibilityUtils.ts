// Accessibility utilities for the Zion Tech Group website

export interface AccessibilityOptions {
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableKeyboardNavigation?: boolean;
  fontSize?: 'small' | 'medium' | 'large';
  colorScheme?: 'light' | 'dark' | 'auto';
}

export const accessibilityUtils = {
  // Initialize accessibility features
  init(options: AccessibilityOptions = {}): void {
    if (typeof window === 'undefined') return;

    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply reduced motion if user prefers it
    if (prefersReducedMotion || options.enableReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Apply high contrast if user prefers it
    if (prefersHighContrast || options.enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Apply color scheme
    if (options.colorScheme === 'dark' || (options.colorScheme === 'auto' && prefersDarkScheme)) {
      document.documentElement.classList.add('dark');
    }

    // Apply font size
    if (options.fontSize) {
      document.documentElement.classList.add(`font-size-${options.fontSize}`);
    }

    // Enable keyboard navigation
    if (options.enableKeyboardNavigation !== false) {
      this.enableKeyboardNavigation();
    }

    // Add focus indicators
    this.addFocusIndicators();
  },

  // Enable keyboard navigation
  enableKeyboardNavigation(): void {
    if (typeof window === 'undefined') return;

    // Add keyboard user class when user starts using keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-user');
      }
    });

    // Remove keyboard user class when user starts using mouse
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-user');
    });

    // Handle escape key for modals and dropdowns
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    });
  },

  // Add focus indicators
  addFocusIndicators(): void {
    if (typeof window === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      .keyboard-user *:focus {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  },

  // Announce to screen readers
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (typeof window === 'undefined') return;

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
  },

  // Skip to main content
  createSkipLink(): void {
    if (typeof window === 'undefined') return;

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
  },

  // Validate form accessibility
  validateFormAccessibility(form: HTMLFormElement): {isValid: boolean, errors: string[]} {
    const errors: string[] = [];
    
    // Check for labels
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      const label = form.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        errors.push(`Input with id "${id}" is missing a label`);
      }
    });
    
    // Check for required field indicators
    const requiredInputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    requiredInputs.forEach((input) => {
      const ariaRequired = input.getAttribute('aria-required');
      if (ariaRequired !== 'true') {
        errors.push(`Required input "${input.getAttribute('id')}" should have aria-required="true"`);
      }
    });
    
    // Check for error messages
    const inputsWithErrors = form.querySelectorAll('input[aria-invalid="true"], textarea[aria-invalid="true"], select[aria-invalid="true"]');
    inputsWithErrors.forEach((input) => {
      const id = input.getAttribute('id');
      const errorMessage = form.querySelector(`[aria-describedby="${id}-error"]`);
      if (!errorMessage) {
        errors.push(`Input with error "${id}" should have an associated error message`);
      }
    });
    
    return {
      isValid: errors.length === 0,
      errors
    };
  },

  // Generate accessible color combinations
  generateAccessibleColors(background: string, text: string): {isAccessible: boolean, contrastRatio: number} {
    // This is a simplified version - in production, you'd want to use a proper color contrast library
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(Number);
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };
    
    const bgLuminance = getLuminance(background);
    const textLuminance = getLuminance(text);
    
    const contrastRatio = (Math.max(bgLuminance, textLuminance) + 0.05) / (Math.min(bgLuminance, textLuminance) + 0.05);
    
    return {
      isAccessible: contrastRatio >= 4.5, // WCAG AA standard
      contrastRatio
    };
  },

  // Add ARIA labels to interactive elements
  addAriaLabels(): void {
    if (typeof window === 'undefined') return;

    // Add aria-labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      const text = button.textContent?.trim();
      if (!text || text.length === 0) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add aria-labels to links without text
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link) => {
      const text = link.textContent?.trim();
      if (!text || text.length === 0) {
        link.setAttribute('aria-label', 'Link');
      }
    });

    // Add role to images without alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      img.setAttribute('alt', '');
      img.setAttribute('role', 'presentation');
    });
  },

  // Test keyboard navigation
  testKeyboardNavigation(): {isAccessible: boolean, issues: string[]} {
    const issues: string[] = [];
    
    // Check if all interactive elements are focusable
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
    interactiveElements.forEach((element) => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex === '-1') {
        issues.push(`Element ${element.tagName} has tabindex="-1" but should be focusable`);
      }
    });
    
    // Check for focus traps in modals
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
    modals.forEach((modal) => {
      const focusableElements = modal.querySelectorAll('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])');
      if (focusableElements.length === 0) {
        issues.push(`Modal ${modal.id || 'unnamed'} has no focusable elements`);
      }
    });
    
    return {
      isAccessible: issues.length === 0,
      issues
    };
  }
};