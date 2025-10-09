'use client';
/**
 * Accessibility (A11Y) Utilities
 * Provides helpers for improving web accessibility
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
<<<<<<< HEAD
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', priority);
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  announcer.textContent = message;
  document.body.appendChild(announcer);
  
  setTimeout(() => {
    announcer.remove();
  }, 100);
  
  // Remove announcement after it's been read
  setTimeout(() => {
    announcer.remove();
=======
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove announcement after it's been read
  setTimeout(() => {
    document.body.removeChild(announcement);
>>>>>>> main
  }, 3000);
}

/**
 * Trap focus within a container (useful for modals)
 */
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
<<<<<<< HEAD
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };
  
  element.addEventListener('keydown', handleKeyDown);
  
  // Focus first element
  firstElement?.focus();
  
  // Return cleanup function
=======
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable?.focus();
          e.preventDefault();
        }
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  firstFocusable?.focus();

>>>>>>> main
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Check if element is keyboard accessible
 */
export function isKeyboardAccessible(element: HTMLElement): boolean {
  const tabIndex = element.getAttribute('tabindex');
<<<<<<< HEAD
  const role = element.getAttribute('role');
  
  return (
    tabIndex !== null ||
    role === 'button' ||
    role === 'link' ||
    element.tagName === 'BUTTON' ||
    element.tagName === 'A' ||
    element.tagName === 'INPUT' ||
    element.tagName === 'SELECT' ||
    element.tagName === 'TEXTAREA'
  );
=======
  return tabIndex !== null && tabIndex !== '-1';
>>>>>>> main
}

/**
 * Add keyboard navigation support to custom interactive elements
 */
export function makeKeyboardAccessible(
  element: HTMLElement,
  onClick: (e: Event) => void,
  options: {
    role?: string;
    tabindex?: number;
  } = {}
): () => void {
  const { role = 'button', tabindex = 0 } = options;
  
  element.setAttribute('role', role);
  element.setAttribute('tabindex', tabindex.toString());
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(e);
    }
  };
<<<<<<< HEAD
  
  element.addEventListener('click', onClick);
  element.addEventListener('keydown', handleKeyDown);
  
=======

  element.addEventListener('click', onClick);
  element.addEventListener('keydown', handleKeyDown);

>>>>>>> main
  return () => {
    element.removeEventListener('click', onClick);
    element.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Check color contrast ratio (WCAG 2.1)
 */
export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (color: string): number => {
<<<<<<< HEAD
    const rgb = hexToRgb(color);
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
=======
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
    const [r, g, b] = rgb.map(c => {
>>>>>>> main
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
<<<<<<< HEAD
  
=======

>>>>>>> main
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check if contrast ratio meets WCAG standards
 */
export function meetsContrastRequirements(
  color1: string,
  color2: string,
  level: 'AA' | 'AAA' = 'AA',
  fontSize: 'normal' | 'large' = 'normal'
): boolean {
  const ratio = getContrastRatio(color1, color2);
<<<<<<< HEAD
  
  if (level === 'AAA') {
    return fontSize === 'large' ? ratio >= 4.5 : ratio >= 7;
  }
  
=======
>>>>>>> main
  return fontSize === 'large' ? ratio >= 3 : ratio >= 4.5;
}

/**
 * Skip to content link helper
 */
export function createSkipLink(targetId: string, text = 'Skip to main content'): HTMLAnchorElement {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'skip-link';
  skipLink.style.position = 'absolute';
  skipLink.style.top = '-40px';
  skipLink.style.left = '0';
  skipLink.style.background = '#000';
  skipLink.style.color = '#fff';
  skipLink.style.padding = '8px';
  skipLink.style.textDecoration = 'none';
  skipLink.style.zIndex = '100';
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  return skipLink;
}

/**
 * Detect if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Detect if user prefers dark mode
 */
export function prefersDarkMode(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Get ARIA label for form validation error
 */
<<<<<<< HEAD
export function getAriaInvalid(hasError: boolean): { 'aria-invalid'?: boolean; 'aria-describedby'?: string } {
  return {
    'aria-invalid': hasError,
=======
export function getAriaInvalid(hasError: boolean): Record<string, string> {
  return {
>>>>>>> main
    ...(hasError && { 'aria-describedby': generateId('error') })
  };
}

/**
 * Create accessible tooltip
 */
export function createAccessibleTooltip(
  trigger: HTMLElement,
  content: string,
  placement: 'top' | 'bottom' | 'left' | 'right' = 'top'
): () => void {
  const tooltip = document.createElement('div');
<<<<<<< HEAD
  tooltip.className = 'tooltip';
  tooltip.textContent = content;
=======
  tooltip.textContent = content;
  tooltip.className = 'tooltip';
  tooltip.setAttribute('role', 'tooltip');
>>>>>>> main
  tooltip.style.position = 'absolute';
  tooltip.style.background = '#000';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '8px';
  tooltip.style.borderRadius = '4px';
  tooltip.style.fontSize = '14px';
  tooltip.style.zIndex = '1000';
<<<<<<< HEAD
  tooltip.style.pointerEvents = 'none';
  tooltip.style.opacity = '0';
  tooltip.style.transition = 'opacity 0.2s';
=======
  tooltip.style.display = 'none';
>>>>>>> main
  
  document.body.appendChild(tooltip);
  
  const showTooltip = () => {
<<<<<<< HEAD
    const triggerRect = trigger.getBoundingClientRect();
    tooltip.style.opacity = '1';
=======
    tooltip.style.display = 'block';
    const triggerRect = trigger.getBoundingClientRect();
>>>>>>> main
    
    switch (placement) {
      case 'top':
        tooltip.style.left = `${triggerRect.left + triggerRect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${triggerRect.top - tooltip.offsetHeight - 5}px`;
        break;
      case 'bottom':
        tooltip.style.left = `${triggerRect.left + triggerRect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${triggerRect.bottom + 5}px`;
        break;
      case 'left':
        tooltip.style.left = `${triggerRect.left - tooltip.offsetWidth - 5}px`;
        tooltip.style.top = `${triggerRect.top + triggerRect.height / 2 - tooltip.offsetHeight / 2}px`;
        break;
      case 'right':
        tooltip.style.left = `${triggerRect.right + 5}px`;
        tooltip.style.top = `${triggerRect.top + triggerRect.height / 2 - tooltip.offsetHeight / 2}px`;
        break;
    }
  };
  
  const hideTooltip = () => {
<<<<<<< HEAD
    tooltip.style.opacity = '0';
=======
    tooltip.style.display = 'none';
>>>>>>> main
  };
  
  trigger.addEventListener('mouseenter', showTooltip);
  trigger.addEventListener('mouseleave', hideTooltip);
  trigger.addEventListener('focus', showTooltip);
  trigger.addEventListener('blur', hideTooltip);
  
  return () => {
<<<<<<< HEAD
    tooltip.remove();
=======
>>>>>>> main
    trigger.removeEventListener('mouseenter', showTooltip);
    trigger.removeEventListener('mouseleave', hideTooltip);
    trigger.removeEventListener('focus', showTooltip);
    trigger.removeEventListener('blur', hideTooltip);
<<<<<<< HEAD
=======
    document.body.removeChild(tooltip);
>>>>>>> main
  };
}

/**
 * Manage focus restoration (useful for modals)
 */
export class FocusManager {
  private previousActiveElement: HTMLElement | null = null;
<<<<<<< HEAD
  
  saveFocus(): void {
    this.previousActiveElement = document.activeElement as HTMLElement;
  }
  
=======

  saveFocus(): void {
    this.previousActiveElement = document.activeElement as HTMLElement;
  }

>>>>>>> main
  restoreFocus(): void {
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
  }
<<<<<<< HEAD
  
  moveFocusInside(container: HTMLElement): void {
    const focusableElements = container.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    firstElement?.focus();
  }
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : { r: 0, g: 0, b: 0 };
=======

  moveFocusInside(container: HTMLElement): void {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    firstFocusable?.focus();
  }
>>>>>>> main
}