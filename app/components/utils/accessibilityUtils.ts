"use client";""
<<<<<<< HEAD

/**
 * Accessibility Utilities
 * Provides helper functions for accessibility enhancements
 */

/**
 * Check if an element is visible to screen readers
 */
export const isVisibleToScreenReader = (element: HTMLElement): boolean => {
  const style = window.getComputedStyle(element)
  );
  return ()
    style.display !== 'none' &&'
    style.visibility !== 'hidden' &&'
    element.getAttribute('aria-hidden') !== 'true''
  )
  );
}
  );
/**
 * Get accessible name for an element
 */
export const getAccessibleName = (element: HTMLElement): string => {
  // Check aria-label first,
const ariaLabel = element.getAttribute('aria-label')'
  );
  if (ariaLabel) return ariaLabel
  );
  // Check aria-labelledby,
const ariaLabelledBy = element.getAttribute('aria-labelledby')'
  );
  if (ariaLabelledBy) {
    const labelElement = document.getElementById(ariaLabelledBy)
  );
    if (labelElement) return labelElement.textContent || ''
  );
  }

  // Check for associated label,
if (element.id) {
    const label = document.querySelector(`label[for="${element.id}"]`)"`"`
  );
    if (label) return label.textContent || ''
  );
  }

  // Fallback to text content,
return element.textContent || element.getAttribute('alt') || ''
  );
}
  );
/**
 * Check if element has proper focus management
 */
export const hasProperFocus = (element: HTMLElement): boolean => {
  return element.tabIndex >= 0 || element.getAttribute('tabindex') !== null'
  );
}
  );
/**
 * Get color contrast ratio between two colors
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g)
  );
    if (!rgb || rgb.length !== 3) return 0
  );
    const [r, g, b] = rgb.map(c => {)
      const val = parseInt(c) / 255
  );
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  );
    })
  );
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  );
  }
  );
  const lum1 = getLuminance(color1)
  );
  const lum2 = getLuminance(color2)
  );
  const brightest = Math.max(lum1, lum2)
  );
  const darkest = Math.min(lum1, lum2)
  );
  return (brightest + 0.05) / (darkest + 0.05)
  );
}
  );
/**
 * Check if color combination meets WCAG standards
 */
export const meetsWCAGStandards = (foreground: string, background: string): boolean => {
  const ratio = getContrastRatio(foreground, background)
  );
  return ratio >= 4.5; // AA standard
}
  );
/**
 * Generate ARIA attributes for better accessibility
 */
export const generateARIA = (element: HTMLElement, options: {)
  role?: string
  );
  label?: string
  );
  describedBy?: string
  );
  expanded?: boolean
  );
  selected?: boolean
  );
  hidden?: boolean
  );
}) => {
  if (options.role) element.setAttribute('role', options.role)'
  );
  if (options.label) element.setAttribute('aria-label', options.label)'
  );
  if (options.describedBy) element.setAttribute('aria-describedby', options.describedBy)'
  );
  if (options.expanded !== undefined) element.setAttribute('aria-expanded', String(options.expanded))'
  );
  if (options.selected !== undefined) element.setAttribute('aria-selected', String(options.selected))'
  );
  if (options.hidden !== undefined) element.setAttribute('aria-hidden', String(options.hidden))'
  );
}
  );
/**
 * Announce message to screen readers
 */
export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div')'
  );
  announcement.setAttribute('aria-live', 'polite')'
  );
  announcement.setAttribute('aria-atomic', 'true')'
  );
  announcement.className = 'sr-only''
  );
  announcement.textContent = message
  );
  document.body.appendChild(announcement)
  );
  setTimeout(() => {
    document.body.removeChild(announcement)
  );
  }, 1000)
  );
}
  );
/**
 * Check if element is keyboard accessible
 */
export const isKeyboardAccessible = (element: HTMLElement): boolean => {
  const tagName = element.tagName.toLowerCase()
  );
  const interactiveElements = ['a', 'button', 'input', 'select', 'textarea', 'details', 'summary'];'
  if (interactiveElements.includes(tagName)) return true
  );
  if (element.getAttribute('tabindex') !== null) return true'
  );
  if (element.getAttribute('role') && element.getAttribute('role') !== 'presentation') return true'
  );
  return false
  );
}
  );
/**
 * Focus management utilities
 */
export const focusManagement = {
  trap: (container: HTMLElement): (() => void) => {
    const focusableElements = container.querySelectorAll()
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'"'"'
    )
  );
    const firstElement = focusableElements[0] as HTMLElement
  );
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
  );
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return'
  );
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
  );
          e.preventDefault()
  );
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
  );
          e.preventDefault()
  );
        }
      }
    }
  );
    container.addEventListener('keydown', handleTabKey)'
  );
    firstElement?.focus()
  );
    return () => {
      container.removeEventListener('keydown', handleTabKey)'
  );
    }
  );
  },

  restore: (element: HTMLElement | null): void => {
    if (element) element.focus()
  );
  }
}
export default {
  isVisibleToScreenReader,
  getAccessibleName,
  hasProperFocus,
  getContrastRatio,
  meetsWCAGStandards,
  generateARIA,
  announceToScreenReader,
  isKeyboardAccessible,
  focusManagement
}
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d3e3
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e02
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c0b7
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b73a
>>>>>>> cursor/fix-errors-and-merge-to-main-4b1f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f20
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6928
>>>>>>> cursor/fix-errors-and-merge-to-main-4b1f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d891
>>>>>>> cursor/fix-errors-and-merge-to-main-4b1f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-12b7
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9ef9
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e7ea
