

'use client';
import { useCallback } from 'react';




/**
 * Accessibility utilities for enhanced user experience
 */



}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
): void {


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

  // Clean up after announcement
  setTimeout(() => {
    if (announcement.parentNode) {
      announcement.parentNode.removeChild(announcement);
    }
  }, 1000);




}

/**
 * Focus management utilities
 */

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab') return
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        e.preventDefault()
        lastFocusable?.focus()

      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {

export function focusElement(element: HTMLElement | null): void {
  if (element) {
    element.focus();
  }
}

export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();


}

/**
 * Check if element is visible to screen readers
 */
export function isVisibleToScreenReader(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return (

    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    element.getAttribute('aria-hidden') !== 'true'
  );

}

/**
 * Get accessible name for an element
 */
export function getAccessibleName(element: HTMLElement): string {
  // Check for aria-label first
  const ariaLabel = element.getAttribute('aria-label');
  if (ariaLabel) return ariaLabel;
  
  // Check for aria-labelledby
  const ariaLabelledBy = element.getAttribute('aria-labelledby');
  if (ariaLabelledBy) {
    const labelElement = document.getElementById(ariaLabelledBy);
    if (labelElement) return labelElement.textContent || '';
  }
  
  // Check for associated label
  if (element.id) {
    const label = document.querySelector(`label[for="${element.id}"]`);
    if (label) return label.textContent || '';
  }
  
  // Fall back to text content
  return element.textContent || '';
}

/**
 * Set focus with announcement
 */
export function focusWithAnnouncement(
  element: HTMLElement,

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
 * Skip link functionality
 */
export function createSkipLink(targetId: string, text = 'Skip to main content'): HTMLElement {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
  
  return skipLink;
}

/**
 * ARIA attributes helpers
 */
export function getAriaLabel(element: HTMLElement): string | null {
  return element.getAttribute('aria-label') || 
         element.getAttribute('aria-labelledby') || 
         element.textContent?.trim() || 
         null;
}

export function setAriaExpanded(element: HTMLElement, expanded: boolean): void {
  element.setAttribute('aria-expanded', expanded.toString());
}

export function setAriaSelected(element: HTMLElement, selected: boolean): void {
  element.setAttribute('aria-selected', selected.toString());
}

export function setAriaPressed(element: HTMLElement, pressed: boolean): void {
  element.setAttribute('aria-pressed', pressed.toString());
}

/**
 * Color contrast utilities
 */
export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (color: string): number => {

    // Simple RGB to luminance conversion
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0]
    const [r, g, b] = rgb.map(val => {
      const normalized = val / 255
      return normalized <= 0.03928
        ? normalized / 12.92

}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Keyboard navigation helpers
 */
export function isKeyboardNavigation(event: KeyboardEvent): boolean {
  return event.key === 'Tab' || 
         event.key === 'Enter' || 
         event.key === ' ' || 
         event.key === 'Escape' ||
         event.key.startsWith('Arrow');
}


): boolean {
  const ratio = getContrastRatio(color1, color2)
  if (level === 'AAA') {
    return fontSize === 'large' ? ratio >= 4.5 : ratio >= 7

  }

  /**
   * Create accessible modal
   */
  createAccessibleModal(modal: HTMLElement): void {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    
    const title = modal.querySelector('[data-modal-title]');
    if (title) {
      modal.setAttribute('aria-labelledby', title.id || 'modal-title');
    }
    
    this.trapFocus(modal);
  }

  /**
   * Clean up resources
   */
  destroy(): void {
    if (this.liveRegion) {
      this.liveRegion.remove();
      this.liveRegion = null;

  }
};

export default A11yManager;



