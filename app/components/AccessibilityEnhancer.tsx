'use client'
import React, { useEffect } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
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

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        .focus-visible:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
      `
      document.head.appendChild(style)
    }

    // Add keyboard navigation support
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

    // Run accessibility enhancements
    addSkipLinks()
    addAriaLabels()
    enhanceFocusManagement()
    addKeyboardNavigation()

    // Cleanup
    return () => {
      // Cleanup code if needed
    }
  }, [])

  return null
}

export default AccessibilityEnhancer