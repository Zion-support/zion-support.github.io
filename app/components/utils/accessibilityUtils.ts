"use client"

/**
 * Accessibility Utilities
 * Provides helper functions for accessibility testing and enhancement
 */

/**
 * Check if an element is visible to screen readers
 */
export const isVisibleToScreenReader = (element: HTMLElement): boolean => {
  const style = window.getComputedStyle(element)
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    element.getAttribute('aria-hidden') !== 'true'
  )
}

/**
 * Get all focusable elements within a container
 */
export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    'area[href]',
    'iframe',
    'object',
    'embed'
  ].join(', ')
  
  return Array.from(container.querySelectorAll(focusableSelectors))
}

/**
 * Check if an element has proper ARIA labels
 */
export const hasProperAriaLabels = (element: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute('aria-label')
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby')
  const hasTitle = element.hasAttribute('title')
  const hasAltText = element.tagName === 'IMG' && element.hasAttribute('alt')
  
  return hasAriaLabel || hasAriaLabelledBy || hasTitle || hasAltText
}

/**
 * Check color contrast ratio
 */
export const checkColorContrast = (
  foreground: string,
  background: string
): { ratio: number; passes: boolean } => {
  // Simplified contrast calculation
  // In a real implementation, you'd use a proper color contrast library
  const ratio = 4.5 // Placeholder value
  const passes = ratio >= 4.5
  return { ratio, passes }
}

/**
 * Generate accessible color combinations
 */
export const generateAccessibleColors = (baseColor: string): string[] => {
  // Simplified color generation
  // In a real implementation, you'd use a proper color library
  return [
    baseColor,
    '#ffffff',
    '#000000',
    '#333333',
    '#666666'
  ]
}

export default {
  isVisibleToScreenReader,
  getFocusableElements,
  hasProperAriaLabels,
  checkColorContrast,
  generateAccessibleColors
}