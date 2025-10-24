'use client'
import Navigation from './Navigation';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNav?: boolean
  enableFocusIndicators?: boolean
  enableScreenReader?: boolean
  enableHighContrast?: boolean
  enableReducedMotion?: boolean
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNav = true,
  enableFocusIndicators = true,
  enableScreenReader = true,
  enableHighContrast = false,
  enableReducedMotion = false
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast)
  const [isReducedMotion, setIsReducedMotion] = useState(enableReducedMotion)

  useEffect(() => {
    if (!enableKeyboardNav) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (e.altKey && e.key === 'm') {
        e.preventDefault()
        const main = document.querySelector('main')
        if (main) {
          (main as HTMLElement).focus()
          (main as HTMLElement).scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Skip to navigation with Alt + N
      if (e.altKey && e.key === 'n') {
        e.preventDefault()
        const nav = document.querySelector('nav')
        if (nav) {
          (nav as HTMLElement).focus()
          (nav as HTMLElement).scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Close modals/dropdowns with Escape
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"][aria-modal="true"]')
        modals.forEach((modal) => {
          const closeButton = modal.querySelector('[aria-label*="close" i], [aria-label*="dismiss" i]')
          if (closeButton) {
            (closeButton as HTMLElement).click()
          }
        })
      }

      // Navigate through interactive elements with Tab (visual indicator)
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
      }
    }

    // Remove keyboard navigation class on mouse use
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [enableKeyboardNav])

  useEffect(() => {
    if (!enableFocusIndicators) return

    // Add custom focus styles
    const style = document.createElement('style')
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 3px solid #0066cc !important;
        outline-offset: 2px !important;
      }
      
      .keyboard-navigation button:focus,
      .keyboard-navigation a:focus,
      .keyboard-navigation input:focus,
      .keyboard-navigation select:focus,
      .keyboard-navigation textarea:focus {
        box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3) !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [enableFocusIndicators])

  useEffect(() => {
    if (!enableScreenReader) return

    // Add screen reader announcements
    const announce = (message: string) => {
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

    // Announce page changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedNode = mutation.addedNodes[0] as Element
          if (addedNode && addedNode.getAttribute && addedNode.getAttribute('aria-label')) {
            announce(addedNode.getAttribute('aria-label') || '')
          }
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
    }
  }, [enableScreenReader])

  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }
  }, [isHighContrast])

  useEffect(() => {
    if (isReducedMotion) {
      document.body.classList.add('reduced-motion')
    } else {
      document.body.classList.remove('reduced-motion')
    }
  }, [isReducedMotion])

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast)
  }

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion)
  }

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Accessibility Options
        </h3>
        
        <button
          onClick={toggleHighContrast}
          className={`w-full px-3 py-2 text-sm rounded ${
            isHighContrast
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
          aria-pressed={isHighContrast}
        >
          {isHighContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        
        <button
          onClick={toggleReducedMotion}
          className={`w-full px-3 py-2 text-sm rounded ${
            isReducedMotion
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
          aria-pressed={isReducedMotion}
        >
          {isReducedMotion ? 'Disable' : 'Enable'} Reduced Motion
        </button>
      </div>
    </div>
  )
}

export default AccessibilityEnhancer