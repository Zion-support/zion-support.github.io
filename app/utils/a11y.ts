/**
 * Accessibility utilities for improved user experience
 */

/**
 * Generate unique ID for aria-describedby and aria-labelledby
 */
export function generateId(prefix = 'a11y'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
): void {
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
}

/**
 * Focus management utilities
 */
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
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
  
  element.addEventListener('keydown', handleTabKey);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

/**
 * Skip to main content functionality
 */
export function addSkipLink(): void {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
}

/**
 * High contrast mode detection
 */
export function isHighContrastMode(): boolean {
  return window.matchMedia('(prefers-contrast: high)').matches;
}

/**
 * Reduced motion detection
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Color scheme detection
 */
export function getColorScheme(): 'light' | 'dark' | 'no-preference' {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'no-preference';
}

/**
 * Screen reader detection
 */
export function isScreenReaderActive(): boolean {
  return window.speechSynthesis && window.speechSynthesis.getVoices().length > 0;
}

/**
 * Keyboard navigation helpers
 */
export function addKeyboardNavigation(): void {
  document.addEventListener('keydown', (e) => {
    // Skip to main content with Alt + M
    if (e.altKey && e.key === 'm') {
      const main = document.querySelector('main');
      if (main) {
        (main as HTMLElement).focus();
        e.preventDefault();
      }
    }
    
    // Skip to navigation with Alt + N
    if (e.altKey && e.key === 'n') {
      const nav = document.querySelector('nav');
      if (nav) {
        (nav as HTMLElement).focus();
        e.preventDefault();
      }
    }
  });
}

/**
 * ARIA live region for dynamic content
 */
export function createLiveRegion(priority: 'polite' | 'assertive' = 'polite'): HTMLElement {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', priority);
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  document.body.appendChild(liveRegion);
  return liveRegion;
}

/**
 * Initialize accessibility features
 */
export function initializeAccessibility(): void {
  addSkipLink();
  addKeyboardNavigation();
  
  // Add main content ID if it doesn't exist
  const main = document.querySelector('main');
  if (main && !main.id) {
    main.id = 'main-content';
  }
}