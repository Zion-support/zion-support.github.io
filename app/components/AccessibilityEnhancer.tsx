'use client'
import { useEffect } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Add keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style')
      style.textContent = `
        *:focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
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
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `
      document.head.appendChild(style)

      // Add skip link
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'skip-link'
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form')
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select')
        inputs.forEach(input => {
          const inputElement = input as HTMLInputElement
          
          // Add aria-labels if missing
          if (!inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`)
            if (label) {
              inputElement.setAttribute('aria-labelledby', label.id || `label-${inputElement.id}`)
            }
          }

          // Add required indicator
          if (inputElement.required && !inputElement.getAttribute('aria-required')) {
            inputElement.setAttribute('aria-required', 'true')
          }

          // Add error handling
          inputElement.addEventListener('invalid', () => {
            inputElement.setAttribute('aria-invalid', 'true')
          })

          inputElement.addEventListener('input', () => {
            if (inputElement.validity.valid) {
              inputElement.removeAttribute('aria-invalid')
            }
          })
        })
      })
    }

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
        main.id = 'main-content'
      }

      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
      }

      const header = document.querySelector('header')
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner')
      }

      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }
    }

    // Enhance color contrast
    const enhanceColorContrast = () => {
      const style = document.createElement('style')
      style.textContent = `
        /* Ensure sufficient color contrast */
        .text-gray-300 {
          color: #d1d5db !important;
        }
        
        .text-gray-400 {
          color: #9ca3af !important;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-slate-900 {
            background-color: #000000 !important;
          }
          
          .text-white {
            color: #ffffff !important;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.id = 'screen-reader-announcements'
      document.body.appendChild(announcement)

      // Function to announce messages
      window.announceToScreenReader = (message: string) => {
        const announcement = document.getElementById('screen-reader-announcements')
        if (announcement) {
          announcement.textContent = message
        }
      }
    }

    // Initialize all enhancements
    enhanceKeyboardNavigation()
    enhanceFormAccessibility()
    addAriaLandmarks()
    enhanceColorContrast()
    addScreenReaderSupport()

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('.skip-link')
      if (skipLink) {
        skipLink.remove()
      }
      
      const announcement = document.getElementById('screen-reader-announcements')
      if (announcement) {
        announcement.remove()
      }
    }
  }, [])

  return null
}

// TypeScript declaration for global function
declare global {
  interface Window {
    announceToScreenReader: (message: string) => void
  }
}

export default AccessibilityEnhancer