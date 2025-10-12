import React, { useEffect } from 'react'

export default function AccessibilityEnhancer() {
  useEffect(() => {
    // Skip focus outline for mouse users, keep for keyboard users
    let usingMouse = false
    
    const handleMouseDown = () => {
      usingMouse = true
      document.body.classList.add('using-mouse')
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        usingMouse = false
        document.body.classList.remove('using-mouse')
      }
    }
    
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('keydown', handleKeyDown)
    
    // Add skip to main content link
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
    
    // Add ARIA landmarks
    const main = document.querySelector('main')
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main')
    }
    
    // Enhance form accessibility
    const forms = document.querySelectorAll('form')
    forms.forEach(form => {
      if (!form.getAttribute('aria-label') && !form.getAttribute('aria-labelledby')) {
        const legend = form.querySelector('legend')
        if (!legend) {
          form.setAttribute('aria-label', 'Form')
        }
      }
    })
    
    // Add loading states to buttons
    const buttons = document.querySelectorAll('button[data-loading]')
    buttons.forEach(button => {
      button.setAttribute('aria-live', 'polite')
    })
    
    // Enhance image accessibility
    const images = document.querySelectorAll('img:not([alt])')
    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        img.setAttribute('alt', '')
        img.setAttribute('aria-hidden', 'true')
      }
    })
    
    // Add high contrast mode support
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)')
    const updateHighContrast = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast')
      } else {
        document.body.classList.remove('high-contrast')
      }
    }
    
    prefersHighContrast.addEventListener('change', updateHighContrast)
    updateHighContrast(prefersHighContrast)
    
    // Add reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateReducedMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduce-motion')
      } else {
        document.body.classList.remove('reduce-motion')
      }
    }
    
    prefersReducedMotion.addEventListener('change', updateReducedMotion)
    updateReducedMotion(prefersReducedMotion)
    
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('keydown', handleKeyDown)
      skipLink.remove()
    }
  }, [])

  return null
}