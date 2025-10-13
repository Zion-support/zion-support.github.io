import React, { useEffect, ReactNode } from 'react'

interface AccessibilityEnhancerProps {
  children: ReactNode
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return

    // Initialize accessibility features
    const initAccessibility = () => {
      // Add skip navigation link
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-lg'
      document.body.insertBefore(skipLink, document.body.firstChild)

      // Add focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      
      // Trap focus in modals
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

      // Add ARIA labels to interactive elements
      const addAriaLabels = () => {
        const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])')
        buttons.forEach((button) => {
          if (!button.textContent?.trim()) {
            button.setAttribute('aria-label', 'Button')
          }
        })

        const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])')
        links.forEach((link) => {
          if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
            link.setAttribute('aria-label', 'Link')
          }
        })
      }

      // Add keyboard navigation support
      const addKeyboardNavigation = () => {
        document.addEventListener('keydown', (e) => {
          // Escape key to close modals
          if (e.key === 'Escape') {
            const modals = document.querySelectorAll('[role="dialog"]')
            modals.forEach((modal) => {
              if (modal.getAttribute('aria-hidden') === 'false') {
                const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement
                if (closeButton) {
                  closeButton.click()
                }
              }
            })
          }
        })
      }

      // Initialize all accessibility features
      addAriaLabels()
      addKeyboardNavigation()

      // Add high contrast mode support
      const addHighContrastSupport = () => {
        const style = document.createElement('style')
        style.textContent = `
          @media (prefers-contrast: high) {
            .bg-gradient-to-br {
              background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%) !important;
            }
            .text-white {
              color: #ffffff !important;
            }
            .text-gray-300 {
              color: #cccccc !important;
            }
            .border-white\/10 {
              border-color: #ffffff !important;
            }
          }
        `
        document.head.appendChild(style)
      }

      addHighContrastSupport()

      // Add reduced motion support
      const addReducedMotionSupport = () => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        
        const handleMotionPreference = (e: MediaQueryListEvent) => {
          if (e.matches) {
            document.documentElement.style.setProperty('--animation-duration', '0.01ms')
            document.documentElement.style.setProperty('--animation-iteration-count', '1')
          } else {
            document.documentElement.style.removeProperty('--animation-duration')
            document.documentElement.style.removeProperty('--animation-iteration-count')
          }
        }

        mediaQuery.addEventListener('change', handleMotionPreference)
        handleMotionPreference(mediaQuery)
      }

      addReducedMotionSupport()
    }

    // Initialize accessibility features
    initAccessibility()

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]')
      if (skipLink) {
        skipLink.remove()
      }
    }
  }, [])

  return <>{children}</>
}

export default AccessibilityEnhancer
