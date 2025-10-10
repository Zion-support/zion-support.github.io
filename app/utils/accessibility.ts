/**
 * Accessibility utility functions for improving web accessibility
 */

export interface AccessibilityOptions {
  announceChanges?: boolean;
  focusManagement?: boolean;
  keyboardNavigation?: boolean;
  screenReaderSupport?: boolean;
}

export class AccessibilityManager {
  private options: AccessibilityOptions;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      announceChanges: true,
      focusManagement: true,
      keyboardNavigation: true,
      screenReaderSupport: true,
      ...options,
    };
  }

  /**
   * Announce a message to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.options.announceChanges || !this.options.screenReaderSupport) {
      return;
    }

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove the announcement after a short delay
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  /**
   * Set focus to an element
   */
  focusElement(element: HTMLElement | null): void {
    if (!this.options.focusManagement || !element) {
      return;
    }

    element.focus();
  }

  /**
   * Trap focus within a container
   */
  trapFocus(container: HTMLElement): () => void {
    if (!this.options.focusManagement) {
      return () => {};
    }

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
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

    container.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }

  /**
   * Check if an element is visible to screen readers
   */
  isVisibleToScreenReader(element: HTMLElement): boolean {
    if (!this.options.screenReaderSupport) {
      return true;
    }

    const style = window.getComputedStyle(element);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      element.getAttribute('aria-hidden') !== 'true' &&
      element.getAttribute('hidden') === null
    );
  }

  /**
   * Add keyboard navigation support
   */
  addKeyboardNavigation(element: HTMLElement): () => void {
    if (!this.options.keyboardNavigation) {
      return () => {};
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          element.click();
          break;
        case 'Escape':
          element.blur();
          break;
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    element.setAttribute('tabindex', '0');

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }

  /**
   * Validate accessibility attributes
   */
  validateAccessibility(element: HTMLElement): string[] {
    const issues: string[] = [];

    // Check for alt text on images
    const images = element.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.getAttribute('alt') && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} is missing alt text or aria-label`);
      }
    });

    // Check for form labels
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        issues.push(`Form input ${index + 1} is missing label or aria-label`);
      }
    });

    // Check for heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading ${index + 1} (${heading.tagName}) skips heading level`);
      }
      previousLevel = level;
    });

    return issues;
  }
}

// Utility functions
export const accessibilityUtils = {
  /**
   * Create a screen reader only element
   */
  createScreenReaderOnly(text: string): HTMLElement {
    const element = document.createElement('span');
    element.className = 'sr-only';
    element.textContent = text;
    return element;
  },

  /**
   * Skip to main content link
   */
  createSkipLink(href: string, text: string = 'Skip to main content'): HTMLElement {
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
      z-index: 1000;
    `;
    
    link.addEventListener('focus', () => {
      link.style.top = '6px';
    });
    
    link.addEventListener('blur', () => {
      link.style.top = '-40px';
    });

    return link;
  },

  /**
   * Get contrast ratio between two colors
   */
  getContrastRatio(color1: string, color2: string): number {
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\d+/g);
      if (!rgb || rgb.length !== 3) return 0;
      
      const [r, g, b] = rgb.map(c => {
        const val = parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  },

  /**
   * Check if contrast meets WCAG standards
   */
  meetsContrastStandards(foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean {
    const ratio = this.getContrastRatio(foreground, background);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  }
};

export default AccessibilityManager;