export interface AccessibilityUtilsOptions {
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
}

export const accessibilityUtils = {
  // Check if user prefers high contrast
  isHighContrast: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-contrast: high)').matches;
  },

  // Check if user prefers reduced motion
  isReducedMotion: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Add ARIA label to element
  addAriaLabel: (element: HTMLElement, label: string): void => {
    element.setAttribute('aria-label', label);
  },

  // Add ARIA description to element
  addAriaDescription: (element: HTMLElement, description: string): void => {
    element.setAttribute('aria-describedby', description);
  },

  // Add role to element
  addRole: (element: HTMLElement, role: string): void => {
    element.setAttribute('role', role);
  },

  // Make element focusable
  makeFocusable: (element: HTMLElement): void => {
    element.setAttribute('tabindex', '0');
  },

  // Remove element from tab order
  removeFromTabOrder: (element: HTMLElement): void => {
    element.setAttribute('tabindex', '-1');
  },

  // Announce to screen readers
  announce: (message: string): void => {
    if (typeof document === 'undefined') return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },

  // Get focusable elements
  getFocusableElements: (container: HTMLElement = document.body): HTMLElement[] => {
    const focusableSelectors = [
      'button',
      'input',
      'select',
      'textarea',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
  },

  // Trap focus within container
  trapFocus: (container: HTMLElement): (() => void) => {
    const focusableElements = accessibilityUtils.getFocusableElements(container);
    
    if (focusableElements.length === 0) return () => {};

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }
};

export default accessibilityUtils;