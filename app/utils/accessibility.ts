// Accessibility utility functions

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
}

export const defaultAccessibilityOptions: AccessibilityOptions = {
  enableKeyboardNavigation: true,
  enableScreenReader: true,
  enableHighContrast: false,
  enableFocusIndicators: true,
};

/**
 * Initialize accessibility features
 */
export function initializeAccessibility(options: AccessibilityOptions = defaultAccessibilityOptions): void {
  if (typeof window === 'undefined') return;

  // Enable keyboard navigation
  if (options.enableKeyboardNavigation) {
    enableKeyboardNavigation();
  }

  // Enable screen reader support
  if (options.enableScreenReader) {
    enableScreenReaderSupport();
  }

  // Enable high contrast mode
  if (options.enableHighContrast) {
    enableHighContrastMode();
  }

  // Enable focus indicators
  if (options.enableFocusIndicators) {
    enableFocusIndicators();
  }
}

/**
 * Enable keyboard navigation
 */
function enableKeyboardNavigation(): void {
  document.addEventListener('keydown', (event) => {
    // Handle Tab key for focus management
    if (event.key === 'Tab') {
      const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        // Shift + Tab: move backwards
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          event.preventDefault();
        }
      } else {
        // Tab: move forwards
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          event.preventDefault();
        }
      }
    }
  });
}

/**
 * Enable screen reader support
 */
function enableScreenReaderSupport(): void {
  // Add ARIA labels to interactive elements
  const buttons = document.querySelectorAll('button:not([aria-label])');
  buttons.forEach((button) => {
    if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
      button.setAttribute('aria-label', 'Button');
    }
  });

  // Add ARIA labels to images
  const images = document.querySelectorAll('img:not([alt])');
  images.forEach((img) => {
    if (!img.getAttribute('alt')) {
      img.setAttribute('alt', 'Image');
    }
  });
}

/**
 * Enable high contrast mode
 */
function enableHighContrastMode(): void {
  document.body.classList.add('high-contrast');
}

/**
 * Enable focus indicators
 */
function enableFocusIndicators(): void {
  const style = document.createElement('style');
  style.textContent = `
    *:focus {
      outline: 2px solid #0066cc;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(message: string): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get accessible color contrast ratio
 */
export function getContrastRatio(color1: string, color2: string): number {
  // This is a simplified implementation
  // In a real application, you would use a proper color contrast calculation library
  return 4.5; // Placeholder value
}