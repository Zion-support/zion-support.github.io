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
<<<<<<< HEAD
=======
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
  children: React.ReactNode
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  children
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation')
        }
      }

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation')
      }

      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleMouseDown)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('mousedown', handleMouseDown)
      }
    }
  }, [enableKeyboardNavigation])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLinks = document.createElement('div')
      skipLinks.className = 'sr-only'
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
      `
      document.body.insertBefore(skipLinks, document.body.firstChild)

      return () => {
        if (skipLinks.parentNode) {
          skipLinks.parentNode.removeChild(skipLinks)
        }
      }
    }
  }, [enableScreenReaderSupport])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // High contrast mode
    if (enableHighContrast) {
      document.body.classList.add('high-contrast')
      return () => {
        document.body.classList.remove('high-contrast')
      }
    }
  }, [enableHighContrast])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Focus management
    if (enableFocusManagement) {
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement
        if (target && target.scrollIntoView) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }

      document.addEventListener('focusin', handleFocusIn)
      return () => {
        document.removeEventListener('focusin', handleFocusIn)
      }
    }
  }, [enableFocusManagement])

  return (
    <div className="accessibility-enhanced">
      {children}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
        }

        .skip-link:focus {
          top: 6px;
        }

        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        .high-contrast {
          filter: contrast(1.5);
        }
      `}</style>
    </div>
  )
}

export default AccessibilityEnhancer
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
