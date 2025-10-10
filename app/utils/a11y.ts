'use client';
import { useCallback } from 'react';

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
  if (typeof document === 'undefined') return
  
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.style.position = 'absolute'
  announcement.style.left = '-10000px'
  announcement.style.width = '1px'
  announcement.style.height = '1px'
  announcement.style.overflow = 'hidden'
  
  document.body.appendChild(announcement)
  
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
  )
  
  const firstFocusable = focusableElements[0]
  const lastFocusable = focusableElements[focusableElements.length - 1]
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
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
  }, [firstFocusable, lastFocusable]);
  
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
  const tabindex = element.getAttribute('tabindex')
  const role = element.getAttribute('role')
  const isInteractive = ['button', 'link', 'input', 'select', 'textarea'].includes(
    element.tagName.toLowerCase()
  )
  
  return (
    isInteractive ||
    (tabindex !== null && tabindex !== '-1') ||
    (role !== null && ['button', 'link', 'checkbox', 'radio'].includes(role))
  )
}

/**
 * Add keyboard navigation support to custom interactive elements
 */
export function makeKeyboardAccessible(
  element: HTMLElement,
  onClick: (e: Event) => void,
  options: {
    role?: string
    tabindex?: number
  } = {}
): () => void {
  const { role = 'button', tabindex = 0 } = options
  
  element.setAttribute('role', role)
  element.setAttribute('tabindex', tabindex.toString())
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(e)
    }
  }, [onClick])
  
  element.addEventListener('click', onClick)
  element.addEventListener('keydown', handleKeyDown)
  
  return () => {
    element.removeEventListener('click', onClick)
    element.removeEventListener('keydown', handleKeyDown)
  }
}

/**
 * Check color contrast ratio (WCAG 2.1)
 */
export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (color: string): number => {
    // Simple RGB to luminance conversion
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0]
    const [r, g, b] = rgb.map(val => {
      const normalized = val / 255
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  
  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  
  return (brightest + 0.05) / (darkest + 0.05)
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
  const ratio = getContrastRatio(color1, color2)
  
  if (level === 'AAA') {
    return fontSize === 'large' ? ratio >= 4.5 : ratio >= 7
  }
  
  return fontSize === 'large' ? ratio >= 3 : ratio >= 4.5
}

/**
 * Get accessible color suggestions based on contrast requirements
 */
export function getAccessibleColor(
  backgroundColor: string,
  preferredColor: string,
  level: 'AA' | 'AAA' = 'AA',
  fontSize: 'normal' | 'large' = 'normal'
): string {
  const colors = [
    '#000000', // Black
    '#FFFFFF', // White
    '#333333', // Dark gray
    '#666666', // Medium gray
    '#999999', // Light gray
    '#CCCCCC', // Very light gray
  ]
  
  for (const color of colors) {
    if (meetsContrastRequirements(backgroundColor, color, level, fontSize)) {
      return color
    }
  }
  
  return preferredColor // Fallback to preferred color
}

/**
 * Add skip link for keyboard navigation
 */
export function addSkipLink(targetId: string, text = 'Skip to main content'): void {
  if (typeof document === 'undefined') return
  
  const skipLink = document.createElement('a')
  skipLink.href = `#${targetId}`
  skipLink.textContent = text
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded'
  
  document.body.insertBefore(skipLink, document.body.firstChild)
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get accessible focus styles
 */
export function getFocusStyles(): string {
  return 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
}

/**
 * Validate ARIA attributes
 */
export function validateAriaAttributes(element: HTMLElement): string[] {
  const errors: string[] = []
  
  // Check for required ARIA attributes
  const hasAriaLabel = element.hasAttribute('aria-label')
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby')
  const hasAriaDescribedBy = element.hasAttribute('aria-describedby')
  
  if (!hasAriaLabel && !hasAriaLabelledBy && !element.textContent?.trim()) {
    errors.push('Element needs accessible name (aria-label, aria-labelledby, or visible text)')
  }
  
  // Check for invalid ARIA attributes
  const ariaAttributes = Array.from(element.attributes)
    .filter(attr => attr.name.startsWith('aria-'))
    .map(attr => attr.name)
  
  const validAriaAttributes = [
    'aria-label', 'aria-labelledby', 'aria-describedby', 'aria-expanded',
    'aria-hidden', 'aria-selected', 'aria-checked', 'aria-disabled',
    'aria-required', 'aria-invalid', 'aria-live', 'aria-atomic',
    'aria-busy', 'aria-controls', 'aria-current', 'aria-flowto',
    'aria-owns', 'aria-posinset', 'aria-setsize', 'aria-sort',
    'aria-valuemin', 'aria-valuemax', 'aria-valuenow', 'aria-valuetext',
    'aria-orientation', 'aria-multiline', 'aria-multiselectable',
    'aria-readonly', 'aria-level', 'aria-haspopup', 'aria-modal',
    'aria-pressed', 'aria-sort', 'aria-valuemin', 'aria-valuemax',
    'aria-valuenow', 'aria-valuetext'
  ]
  
  for (const attr of ariaAttributes) {
    if (!validAriaAttributes.includes(attr)) {
      errors.push(`Invalid ARIA attribute: ${attr}`)
    }
  }
  
  return errors
}

/**
 * Make element focusable with proper tab order
 */
export function makeFocusable(
  element: HTMLElement,
  tabIndex: number = 0
): void {
  element.setAttribute('tabindex', tabIndex.toString())
  
  if (!element.hasAttribute('role')) {
    element.setAttribute('role', 'button')
  }
}

/**
 * Remove focus from element
 */
export function removeFocus(element: HTMLElement): void {
  element.setAttribute('tabindex', '-1')
  element.blur()
}

/**
 * Get screen reader only text class
 */
export function getScreenReaderOnlyClass(): string {
  return 'sr-only'
}

/**
 * Get visually hidden class
 */
export function getVisuallyHiddenClass(): string {
  return 'sr-only focus:not-sr-only'
}