'use client'
import React, { useEffect } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-md z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])')
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button')
        }
      })

      const links = document.querySelectorAll('a:not([aria-label])')
      links.forEach(link => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link')
        }
      })
    }

    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"]')
          modals.forEach(modal => {
            if (modal instanceof HTMLElement && modal.style.display !== 'none') {
              modal.style.display = 'none'
              modal.setAttribute('aria-hidden', 'true')
            }
          })
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }

    // Add focus management
    const addFocusManagement = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      
      const trapFocus = (element: HTMLElement) => {
        const focusableContent = element.querySelectorAll(focusableElements)
        const firstFocusableElement = focusableContent[0] as HTMLElement
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement

        element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus()
                e.preventDefault()
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus()
                e.preventDefault()
              }
            }
          }
        })
      }

      const modals = document.querySelectorAll('[role="dialog"]')
      modals.forEach(modal => {
        if (modal instanceof HTMLElement) {
          trapFocus(modal)
        }
      })
    }

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)')
      
      if (prefersHighContrast.matches) {
        document.documentElement.classList.add('high-contrast')
      }

      prefersHighContrast.addEventListener('change', (e) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast')
        } else {
          document.documentElement.classList.remove('high-contrast')
        }
      })
    }

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
      
      if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms')
        document.documentElement.style.setProperty('--animation-iteration-count', '1')
      }

      prefersReducedMotion.addEventListener('change', (e) => {
        if (e.matches) {
          document.documentElement.style.setProperty('--animation-duration', '0.01ms')
          document.documentElement.style.setProperty('--animation-iteration-count', '1')
        } else {
          document.documentElement.style.removeProperty('--animation-duration')
          document.documentElement.style.removeProperty('--animation-iteration-count')
        }
      })
    }

    // Initialize all accessibility features
    addSkipLinks()
    addAriaLabels()
    enhanceKeyboardNavigation()
    addFocusManagement()
    addHighContrastSupport()
    addReducedMotionSupport()

    // Cleanup
    return () => {
      // Cleanup code if needed
    }
  }, [])

  return null
}

export default AccessibilityEnhancer
