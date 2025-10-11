import React, { useEffect } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
    skipLink.style.position = 'absolute'
    skipLink.style.left = '-9999px'
    skipLink.style.zIndex = '9999'
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.left = '16px'
      skipLink.style.top = '16px'
    })
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.left = '-9999px'
    })
    
    document.body.insertBefore(skipLink, document.body.firstChild)

    // Add ARIA landmarks
    const main = document.querySelector('main')
    if (main && !main.getAttribute('id')) {
      main.id = 'main-content'
      main.setAttribute('role', 'main')
    }

    // Add navigation landmark
    const nav = document.querySelector('nav')
    if (nav) {
      nav.setAttribute('role', 'navigation')
      nav.setAttribute('aria-label', 'Main navigation')
    }

    // Add footer landmark
    const footer = document.querySelector('footer')
    if (footer) {
      footer.setAttribute('role', 'contentinfo')
    }

    // Add focus management for modals and dropdowns
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement
        if (activeElement && activeElement.blur) {
          activeElement.blur()
        }
      }
    }

    document.addEventListener('keydown', handleEscape)

    // Add high contrast mode support
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)')
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast')
      } else {
        document.documentElement.classList.remove('high-contrast')
      }
    }

    prefersHighContrast.addEventListener('change', handleContrastChange)
    if (prefersHighContrast.matches) {
      document.documentElement.classList.add('high-contrast')
    }

    // Add reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion')
      } else {
        document.documentElement.classList.remove('reduce-motion')
      }
    }

    prefersReducedMotion.addEventListener('change', handleMotionChange)
    if (prefersReducedMotion.matches) {
      document.documentElement.classList.add('reduce-motion')
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      prefersHighContrast.removeEventListener('change', handleContrastChange)
      prefersReducedMotion.removeEventListener('change', handleMotionChange)
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink)
      }
    }
  }, [])

  return null
}

export default AccessibilityEnhancer