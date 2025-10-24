'use client'
import { useEffect } from 'react'

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]')
        if (mainContent) {
          (mainContent as HTMLElement).focus()
          event.preventDefault()
        }
      }
    }

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement
      if (target) {
        // Ensure focus is visible
        target.style.outline = '2px solid #3b82f6'
        target.style.outlineOffset = '2px'
      }
    }

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement
      if (target) {
        target.style.outline = ''
        target.style.outlineOffset = ''
      }
    }

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])')
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button')
        }
      })

      const links = document.querySelectorAll('a:not([aria-label])')
      links.forEach((link) => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link')
        }
      })
    }

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
          button, a, input, select, textarea {
            border: 2px solid currentColor !important;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Initialize accessibility features
    addAriaLabels()
    addHighContrastSupport()
    addReducedMotionSupport()

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
    }
  }, [])

  return <>{children}</>
}

export default AccessibilityEnhancer