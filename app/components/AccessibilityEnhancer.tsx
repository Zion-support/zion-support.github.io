import React, { useEffect } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
      }
    }

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')
    }

    // Add focus indicators
    const addFocusStyles = () => {
      const style = document.createElement('style')
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `
      document.head.appendChild(style)
    }

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Add ARIA labels to interactive elements
    const enhanceARIA = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])')
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button')
        }
      })

      const links = document.querySelectorAll('a:not([aria-label])')
      links.forEach((link) => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link')
        }
      })
    }

    // Initialize accessibility enhancements
    addFocusStyles()
    addSkipLinks()
    enhanceARIA()

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    // Re-run ARIA enhancement when DOM changes
    const observer = new MutationObserver(enhanceARIA)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
      observer.disconnect()
    }
  }, [])

  return null
}

export default AccessibilityEnhancer
