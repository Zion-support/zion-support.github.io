import React from 'react';
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
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  if (typeof document === 'undefined') return;

  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.style.width = '1px';
  announcement.style.height = '1px';
  announcement.style.overflow = 'hidden';
  
  document.body.appendChild(announcement);
  
  // Set message after a slight delay to ensure screen readers pick it up
  setTimeout(() => {
    announcement.textContent = message;
  }, 100);
  
  // Remove announcement after it's been read
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 3000);
}

/**
 * Trap focus within a container (useful for modals)
 */
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable?.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable?.focus();
      }
    }
  };
  
  element.addEventListener('keydown', handleKeyDown);
  
  // Focus first element
  firstFocusable?.focus();
  
  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Check if element is keyboard accessible
 */
export function isKeyboardAccessible(element: HTMLElement): boolean {
  const tabindex = element.getAttribute('tabindex');
  const role = element.getAttribute('role');
  const isInteractive = ['button', 'link', 'input', 'select', 'textarea'].includes(element.tagName.toLowerCase());
  
  return (
    isInteractive ||
    (tabindex !== null && tabindex !== '-1') ||
    (role !== null && ['button', 'link', 'checkbox', 'radio'].includes(role))
  );
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
  
  element.addEventListener('click', onClick);
  element.addEventListener('keydown', handleKeyDown);
  
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
    // Simple RGB to luminance conversion
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
    const [r, g, b] = rgb.map(val => {
      const normalized = val / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  
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
  
  if (level === 'AAA') {
    return fontSize === 'large' ? ratio >= 4.5 : ratio >= 7;
  }
  
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
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Detect if user prefers dark mode
 */
export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Get ARIA label for form validation error
 */
export function getAriaInvalid(hasError: boolean): {
  'aria-invalid': boolean;
  'aria-describedby'?: string;
} {
  return {
    'aria-invalid': hasError,
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
  const tooltipId = generateId('tooltip');
  const tooltip = document.createElement('div');
  tooltip.id = tooltipId;
  tooltip.setAttribute('role', 'tooltip');
  tooltip.textContent = content;
  tooltip.style.position = 'absolute';
  tooltip.style.background = '#333';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '4px 8px';
  tooltip.style.borderRadius = '4px';
  tooltip.style.fontSize = '14px';
  tooltip.style.zIndex = '1000';
  tooltip.style.display = 'none';
  
  document.body.appendChild(tooltip);
  trigger.setAttribute('aria-describedby', tooltipId);
  
  const showTooltip = () => {
    tooltip.style.display = 'block';
    const triggerRect = trigger.getBoundingClientRect();
    
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
    tooltip.style.display = 'none';
  };
  
  trigger.addEventListener('mouseenter', showTooltip);
  trigger.addEventListener('mouseleave', hideTooltip);
  trigger.addEventListener('focus', showTooltip);
  trigger.addEventListener('blur', hideTooltip);
  
  return () => {
    trigger.removeEventListener('mouseenter', showTooltip);
    trigger.removeEventListener('mouseleave', hideTooltip);
    trigger.removeEventListener('focus', showTooltip);
    trigger.removeEventListener('blur', hideTooltip);
    document.body.removeChild(tooltip);
  };
}

/**
 * Manage focus restoration (useful for modals)
 */
export class FocusManager {
  private previousFocus: HTMLElement | null = null;
  
  saveFocus(): void {
    this.previousFocus = document.activeElement as HTMLElement;
  }
  
  restoreFocus(): void {
    if (this.previousFocus) {
      this.previousFocus.focus();
      this.previousFocus = null;
    }
  }
  
  moveFocusInside(container: HTMLElement): void {
    const focusable = container.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();
  }
}