'use client'
import { useEffect } from 'react'
interface AccessibilityEnhancerProps {
  children: React.ReactNode
}
export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      skipLink.style.position = 'absolute'
      skipLink.style.left = '-9999px'
      skipLink.style.zIndex = '9999'
      document.body.insertBefore(skipLink, document.body.firstChild)
    }
    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style')
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
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
    }
    // Initialize accessibility enhancements
    addSkipLink()
    enhanceFocusManagement()
    addAriaLandmarks()
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