import React, { useEffect, ReactNode } from 'react'

interface AccessibilityEnhancerProps {
  children: ReactNode
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return

    // Add skip navigation link
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-lg'
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #00ffff;
      color: #000;
      padding: 8px;
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

    // Add ARIA landmarks
    const main = document.querySelector('main')
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main')
    }

    const nav = document.querySelector('nav')
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation')
    }

    const footer = document.querySelector('footer')
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo')
    }

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators to interactive elements
      const interactiveElements = document.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )

      interactiveElements.forEach(element => {
        if (!element.classList.contains('focus-enhanced')) {
          element.classList.add('focus-enhanced')
          element.addEventListener('focus', (e) => {
            e.currentTarget.classList.add('focus-visible')
          })
          element.addEventListener('blur', (e) => {
            e.currentTarget.classList.remove('focus-visible')
          })
        }
      })
    }

    // Apply focus trap to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="menu"]')
    modals.forEach(modal => {
      const focusableElements = modal.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        const trapFocus = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault()
                lastElement.focus()
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault()
                firstElement.focus()
              }
            }
          }
        }

        modal.addEventListener('keydown', trapFocus)
      }
    })

    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add keyboard support for custom components
      const customButtons = document.querySelectorAll('[data-custom-button]')
      customButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            button.click()
          }
        })
      })
    }

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceFocusManagement()
      enhanceKeyboardNavigation()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Initialize accessibility features
    enhanceFocusManagement()
    enhanceKeyboardNavigation()

    // Cleanup function
    return () => {
      observer.disconnect()
    }
  }, [])

  return <>{children}</>
}

export default AccessibilityEnhancer
