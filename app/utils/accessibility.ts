'use client'
/**
 * Accessibility Utilities
 * Comprehensive accessibility helpers for web applications
 */

/**
 * Focus management utilities
 */
export class FocusManager {
  private static focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(', ')

  /**
   * Get all focusable elements within a container
   */
  static getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(container.querySelectorAll(this.focusableSelectors))
  }

  /**
   * Trap focus within a container
   */
  static trapFocus(container: HTMLElement): () => void {
    const focusableElements = this.getFocusableElements(container)
    if (focusableElements.length === 0) return () => {}

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    firstElement.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }

  /**
   * Focus first focusable element
   */
  static focusFirst(container: HTMLElement): void {
    const focusableElements = this.getFocusableElements(container)
    focusableElements[0]?.focus()
  }

  /**
   * Focus last focusable element
   */
  static focusLast(container: HTMLElement): void {
    const focusableElements = this.getFocusableElements(container)
    const lastElement = focusableElements[focusableElements.length - 1]
    lastElement?.focus()
  }
}

/**
 * ARIA utilities
 */
export class AriaUtils {
  /**
   * Set ARIA attributes for toggle button
   */
  static setToggleAttributes(
    button: HTMLElement,
    isExpanded: boolean,
    controlledId: string
  ): void {
    button.setAttribute('aria-expanded', isExpanded.toString())
    button.setAttribute('aria-controls', controlledId)
  }

  /**
   * Set ARIA attributes for collapsible content
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
   * Set ARIA attributes for modal
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
   * Set ARIA attributes for tab panel
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
   * Set ARIA attributes for tab button
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
 * Keyboard navigation utilities
 */
export class KeyboardNavigation {
  /**
   * Handle arrow key navigation
   */
  static handleArrowKeys(
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number {
    const isVertical = orientation === 'vertical'

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
 * Screen reader utilities
 */
export class ScreenReaderUtils {
  /**
   * Announce message to screen readers
   */
  static announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (typeof document === 'undefined') return

    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement)
      }
    }, 1000)
  }

  /**
   * Hide element from screen readers
   */
  static hide(element: HTMLElement): void {
    element.setAttribute('aria-hidden', 'true')
  }

  /**
   * Show element to screen readers
   */
  static show(element: HTMLElement): void {
    element.removeAttribute('aria-hidden')
  }
}

/**
 * Form accessibility utilities
 */
export class FormAccessibility {
  /**
   * Associate label with form control
   */
  static associateLabel(label: HTMLLabelElement, control: HTMLElement): void {
    const id = control.id || this.generateId('form-control')
    control.id = id
    label.setAttribute('for', id)
  }

  /**
   * Set up error message
   */
  static setupError(
    control: HTMLElement,
    errorElement: HTMLElement,
    message: string
  ): void {
    const errorId = this.generateId('error')
    errorElement.id = errorId
    errorElement.textContent = message
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

  /**
   * Generate unique ID
   */
  private static generateId(prefix: string): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
  }
}

/**
 * Color contrast utilities
 */
export class ColorContrast {
  /**
   * Calculate relative luminance
   */
  static getLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }

  /**
   * Calculate contrast ratio
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
   * Check WCAG AA compliance
   */
  static meetsWCAGAA(foreground: string, background: string): boolean {
    return this.getContrastRatio(foreground, background) >= 4.5
  }

  /**
   * Check WCAG AAA compliance
   */
  static meetsWCAGAAA(foreground: string, background: string): boolean {
    return this.getContrastRatio(foreground, background) >= 7
  }
}

// Export instances for convenience
export const focusManager = new FocusManager()
export const ariaUtils = new AriaUtils()
export const keyboardNavigation = new KeyboardNavigation()
export const screenReader = new ScreenReaderUtils()
export const formA11y = new FormAccessibility()
export const colorContrast = new ColorContrast()