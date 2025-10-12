import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode
}

const EnhancedAccessibility: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add skip navigation link
    const addSkipNavigation = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px'
      })
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px'
      })
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Enhance focus indicators
    const enhanceFocusIndicators = () => {
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        .focus-visible:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        button:focus,
        a:focus,
        input:focus,
        textarea:focus,
        select:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `
      document.head.appendChild(style)
    }

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
        main.setAttribute('id', 'main-content')
      }

      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
        nav.setAttribute('aria-label', 'Main navigation')
      }

      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }
    }

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form')
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select')
        inputs.forEach((input, index) => {
          const inputElement = input as HTMLInputElement
          if (!inputElement.id) {
            inputElement.id = `input-${index}`
          }
          if (!inputElement.getAttribute('aria-describedby')) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`)
            if (label) {
              const errorId = `error-${inputElement.id}`
              inputElement.setAttribute('aria-describedby', errorId)
            }
          }
        })
      })
    }

    // Add keyboard navigation for dropdowns
    const enhanceKeyboardNavigation = () => {
      const dropdowns = document.querySelectorAll('[data-dropdown]')
      dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('[data-dropdown-trigger]')
        const menu = dropdown.querySelector('[data-dropdown-menu]')
        
        if (trigger && menu) {
          trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              const isOpen = menu.getAttribute('aria-expanded') === 'true'
              menu.setAttribute('aria-expanded', (!isOpen).toString())
            }
            if (e.key === 'Escape') {
              menu.setAttribute('aria-expanded', 'false')
              trigger.focus()
            }
          })
        }
      })
    }

    // Add screen reader announcements
    const addScreenReaderAnnouncements = () => {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.id = 'screen-reader-announcements'
      document.body.appendChild(announcement)
    }

    // Initialize accessibility enhancements
    addSkipNavigation()
    enhanceFocusIndicators()
    addAriaLandmarks()
    enhanceFormAccessibility()
    enhanceKeyboardNavigation()
    addScreenReaderAnnouncements()

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

export default EnhancedAccessibility