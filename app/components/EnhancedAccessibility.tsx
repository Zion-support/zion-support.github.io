'use client'
import React, { useEffect } from 'react'

interface EnhancedAccessibilityProps {
  children: React.ReactNode
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const enhanceAccessibility = () => {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])')
      buttons.forEach(button => {
        const text = button.textContent?.trim()
        if (text && !button.getAttribute('aria-label')) {
          button.setAttribute('aria-label', text)
        }
      })

      // Add ARIA labels to links
      const links = document.querySelectorAll('a:not([aria-label])')
      links.forEach(link => {
        const text = link.textContent?.trim()
        if (text && !link.getAttribute('aria-label')) {
          link.setAttribute('aria-label', text)
        }
      })

      // Add role attributes to custom elements
      const customElements = document.querySelectorAll('[data-role]')
      customElements.forEach(element => {
        const role = element.getAttribute('data-role')
        if (role && !element.getAttribute('role')) {
          element.setAttribute('role', role)
        }
      })

      // Add tabindex to focusable elements
      const focusableElements = document.querySelectorAll('[data-focusable]')
      focusableElements.forEach(element => {
        if (!element.getAttribute('tabindex')) {
          element.setAttribute('tabindex', '0')
        }
      })
    }

    // Run enhancements
    enhanceAccessibility()

    // Re-run on DOM changes
    const observer = new MutationObserver(enhanceAccessibility)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    })

    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}

export default EnhancedAccessibility
