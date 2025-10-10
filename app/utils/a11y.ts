'use client'
/**
 * Accessibility (A11Y) Utilities
 * Provides helpers for improving web accessibility
 */

/**
 * Generate unique ID for aria-describedby and aria-labelledby
 */
export function generateId(prefix = 'a11y'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
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
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Focus management utilities
 */
export class FocusManager {
  private focusableElements: string = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  
  /**
   * Get all focusable elements within a container
   */
  getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(container.querySelectorAll(this.focusableElements))
  }
  
  /**
   * Trap focus within a container
   */
  trapFocus(container: HTMLElement): () => void {
    const focusableElements = this.getFocusableElements(container)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus()
          e.preventDefault()
        }
      }
    }
    
    document.addEventListener('keydown', handleTabKey)
    
    // Return cleanup function
    return () => {
      document.removeEventListener('keydown', handleTabKey)
    }
  }
  
  /**
   * Focus first focusable element in container
   */
  focusFirst(container: HTMLElement): void {
    const focusableElements = this.getFocusableElements(container)
    focusableElements[0]?.focus()
  }
  
  /**
   * Focus last focusable element in container
   */
  focusLast(container: HTMLElement): void {
    const focusableElements = this.getFocusableElements(container)
    focusableElements[focusableElements.length - 1]?.focus()
  }
}

/**
 * Keyboard navigation utilities
 */
export class KeyboardNavigation {
  /**
   * Handle arrow key navigation for lists
   */
  static handleArrowKeys(
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number {
    const isVertical = orientation === 'vertical'
    const isHorizontal = orientation === 'horizontal'
    
    switch (event.key) {
      case isVertical ? 'ArrowDown' : 'ArrowRight':
        event.preventDefault()
        return Math.min(currentIndex + 1, items.length - 1)
      
      case isVertical ? 'ArrowUp' : 'ArrowLeft':
        event.preventDefault()
        return Math.max(currentIndex - 1, 0)
      
      case 'Home':
        event.preventDefault()
        return 0
      
      case 'End':
        event.preventDefault()
        return items.length - 1
      
      default:
        return currentIndex
    }
  }
  
  /**
   * Handle escape key
   */
  static handleEscape(callback: () => void): (event: KeyboardEvent) => void {
    return (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        callback()
      }
    }
  }
}

/**
 * ARIA utilities
 */
export class AriaUtils {
  /**
   * Set ARIA attributes for a button that controls visibility
   */
  static setToggleButtonAttributes(
    button: HTMLElement,
    isExpanded: boolean,
    controlledId: string
  ): void {
    button.setAttribute('aria-expanded', isExpanded.toString())
    button.setAttribute('aria-controls', controlledId)
  }
  
  /**
   * Set ARIA attributes for a collapsible element
   */
  static setCollapsibleAttributes(
    element: HTMLElement,
    isExpanded: boolean,
    buttonId: string
  ): void {
    element.setAttribute('aria-hidden', (!isExpanded).toString())
    element.setAttribute('aria-labelledby', buttonId)
  }
  
  /**
   * Set ARIA attributes for a modal
   */
  static setModalAttributes(
    modal: HTMLElement,
    isOpen: boolean,
    titleId: string
  ): void {
    modal.setAttribute('aria-modal', 'true')
    modal.setAttribute('aria-hidden', (!isOpen).toString())
    modal.setAttribute('aria-labelledby', titleId)
  }
  
  /**
   * Set ARIA attributes for a tab panel
   */
  static setTabPanelAttributes(
    panel: HTMLElement,
    isActive: boolean,
    tabId: string
  ): void {
    panel.setAttribute('role', 'tabpanel')
    panel.setAttribute('aria-hidden', (!isActive).toString())
    panel.setAttribute('aria-labelledby', tabId)
  }
  
  /**
   * Set ARIA attributes for a tab button
   */
  static setTabAttributes(
    tab: HTMLElement,
    isActive: boolean,
    panelId: string
  ): void {
    tab.setAttribute('role', 'tab')
    tab.setAttribute('aria-selected', isActive.toString())
    tab.setAttribute('aria-controls', panelId)
  }
}

/**
 * Color contrast utilities
 */
export class ColorContrast {
  /**
   * Calculate relative luminance of a color
   */
  static getLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }
  
  /**
   * Calculate contrast ratio between two colors
   */
  static getContrastRatio(color1: string, color2: string): number {
    const parseColor = (color: string) => {
      const hex = color.replace('#', '')
      return {
        r: parseInt(hex.substr(0, 2), 16),
        g: parseInt(hex.substr(2, 2), 16),
        b: parseInt(hex.substr(4, 2), 16)
      }
    }
    
    const c1 = parseColor(color1)
    const c2 = parseColor(color2)
    
    const l1 = this.getLuminance(c1.r, c1.g, c1.b)
    const l2 = this.getLuminance(c2.r, c2.g, c2.b)
    
    const lighter = Math.max(l1, l2)
    const darker = Math.min(l1, l2)
    
    return (lighter + 0.05) / (darker + 0.05)
  }
  
  /**
   * Check if color combination meets WCAG AA standards
   */
  static meetsWCAGAA(foreground: string, background: string): boolean {
    const ratio = this.getContrastRatio(foreground, background)
    return ratio >= 4.5
  }
  
  /**
   * Check if color combination meets WCAG AAA standards
   */
  static meetsWCAGAAA(foreground: string, background: string): boolean {
    const ratio = this.getContrastRatio(foreground, background)
    return ratio >= 7
  }
}

/**
 * Screen reader utilities
 */
export class ScreenReaderUtils {
  /**
   * Hide element from screen readers
   */
  static hideFromScreenReader(element: HTMLElement): void {
    element.setAttribute('aria-hidden', 'true')
  }
  
  /**
   * Show element to screen readers
   */
  static showToScreenReader(element: HTMLElement): void {
    element.removeAttribute('aria-hidden')
  }
  
  /**
   * Check if element is visible to screen readers
   */
  static isVisibleToScreenReader(element: HTMLElement): boolean {
    return element.getAttribute('aria-hidden') !== 'true' && 
           !element.classList.contains('sr-only')
  }
}

/**
 * Form accessibility utilities
 */
export class FormA11y {
  /**
   * Associate label with form control
   */
  static associateLabel(label: HTMLLabelElement, control: HTMLElement): void {
    const id = control.id || generateId('form-control')
    control.id = id
    label.setAttribute('for', id)
  }
  
  /**
   * Set up error message association
   */
  static setupErrorMessage(
    control: HTMLElement,
    errorElement: HTMLElement,
    errorMessage: string
  ): void {
    const errorId = generateId('error')
    errorElement.id = errorId
    errorElement.textContent = errorMessage
    control.setAttribute('aria-describedby', errorId)
    control.setAttribute('aria-invalid', 'true')
  }
  
  /**
   * Clear error message
   */
  static clearError(control: HTMLElement, errorElement: HTMLElement): void {
    control.removeAttribute('aria-describedby')
    control.removeAttribute('aria-invalid')
    errorElement.textContent = ''
  }
}

// Export instances for convenience
export const focusManager = new FocusManager()
export const ariaUtils = new AriaUtils()
export const colorContrast = new ColorContrast()
export const screenReaderUtils = new ScreenReaderUtils()
export const formA11y = new FormA11y()