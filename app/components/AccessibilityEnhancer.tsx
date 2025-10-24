'use client'
import React, { useEffect } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Enhance accessibility features
      const enhanceAccessibility = () => {
        // Add skip links
        const skipLink = document.createElement('a')
        skipLink.href = '#main-content'
        skipLink.textContent = 'Skip to main content'
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
        document.body.insertBefore(skipLink, document.body.firstChild)

        // Add main content ID
        const main = document.querySelector('main')
        if (main && !main.id) {
          main.id = 'main-content'
        }

        // Enhance focus management
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            const focusable = document.querySelectorAll(focusableElements)
            const firstFocusable = focusable[0] as HTMLElement
            const lastFocusable = focusable[focusable.length - 1] as HTMLElement

            if (e.shiftKey) {
              if (document.activeElement === firstFocusable) {
                lastFocusable.focus()
                e.preventDefault()
              }
            } else {
              if (document.activeElement === lastFocusable) {
                firstFocusable.focus()
                e.preventDefault()
              }
            }
          }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
          document.removeEventListener('keydown', handleKeyDown)
        }
      }

      enhanceAccessibility()
    }
  }, [])

  return null
}

export default AccessibilityEnhancer