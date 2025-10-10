'use client'
import React, { useEffect } from 'react'
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add ARIA landmarks
    const addLandmarks = () => {
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

      const header = document.querySelector('header')
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner')
      }
    }
    // Add focus management
    const addFocusManagement = () => {
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      )
      focusableElements.forEach((element) => {
        element.addEventListener('focus', (e) => {
          const target = e.target as HTMLElement
          target.style.outline = '2px solid #06b6d4'
          target.style.outlineOffset = '2px'
        })
        element.addEventListener('blur', (e) => {
          const target = e.target as HTMLElement
          target.style.outline = ''
          target.style.outlineOffset = ''
        })
      })
    }
    // Add keyboard navigation
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation')
        }
      })
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation')
      })
    }
    // Add screen reader announcements
    const addScreenReaderSupport = () => {
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
            const addedNode = mutation.addedNodes[0] as HTMLElement
            if (addedNode && addedNode.getAttribute && addedNode.getAttribute('aria-label')) {
              announce(addedNode.getAttribute('aria-label')!)
            }
          }
        })
      })
      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
      return () => observer.disconnect()
    }
    // Initialize accessibility features
    addLandmarks()
    addFocusManagement()
    addKeyboardNavigation()
    const cleanup = addScreenReaderSupport()
    return () => {
      if (cleanup) cleanup()
    }}, [])
  return <>{children}</>
}
export default EnhancedAccessibility