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

      // Add ARIA landmarks
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
      }

      // Add focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          const focusable = document.querySelectorAll(focusableElements)
          const firstFocusable = focusable[0] as HTMLElement
          const lastFocusable = focusable[focusable.length - 1] as HTMLElement

          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable?.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable?.focus()
              e.preventDefault()
            }
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown)

      // Add high contrast mode support
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)')
      if (prefersHighContrast.matches) {
        document.documentElement.classList.add('high-contrast')
      }

      // Add reduced motion support
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduce-motion')
      }

      // Add screen reader announcements
      const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div')
        announcement.setAttribute('aria-live', 'polite')
        announcement.setAttribute('aria-atomic', 'true')
        announcement.className = 'sr-only'
        announcement.textContent = message
        document.body.appendChild(announcement)
        
        setTimeout(() => {
          document.body.removeChild(announcement)
        }, 1000)
      }

      // Make announcements available globally
      ;(window as any).announceToScreenReader = announceToScreenReader

      // Add keyboard navigation hints
      const addKeyboardHints = () => {
        const interactiveElements = document.querySelectorAll('button, [role="button"], [tabindex]')
        interactiveElements.forEach(element => {
          if (!element.getAttribute('aria-label') && !element.getAttribute('title')) {
            const text = element.textContent?.trim()
            if (text) {
              element.setAttribute('aria-label', text)
            }
          }
        })
      }

      addKeyboardHints()

      // Cleanup function
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        const skipLink = document.querySelector('a[href="#main-content"]')
        if (skipLink) {
          skipLink.remove()
        }
      }
    }

    const cleanup = initAccessibility()
    
    return cleanup
  }, [])

  return <>{children}</>
}

export default AccessibilityEnhancer
