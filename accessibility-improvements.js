// Accessibility improvements for Zion Tech Group website

// 1. Focus management
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }
  }

  element.addEventListener('keydown', handleTabKey)
  firstElement?.focus()

  return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
}

// 2. Skip links
export const addSkipLinks = () => {
  const skipLink = document.createElement('a')
  skipLink.href = '#main-content'
  skipLink.textContent = 'Skip to main content'
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded'
  document.body.insertBefore(skipLink, document.body.firstChild)
}

// 3. ARIA labels and descriptions
export const enhanceFormAccessibility = (form) => {
  const inputs = form.querySelectorAll('input, textarea, select')
  inputs.forEach(input => {
    if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
      const label = form.querySelector(`label[for="${input.id}"]`)
      if (label) {
        input.setAttribute('aria-labelledby', label.id || `label-${input.id}`)
      }
    }
  })
}

// 4. Color contrast checker
export const checkColorContrast = (element) => {
  const style = window.getComputedStyle(element)
  const backgroundColor = style.backgroundColor
  const color = style.color
  
  // This is a simplified version - in production, use a proper contrast checker
  console.log('Checking contrast for:', { backgroundColor, color })
  return true
}

// 5. Keyboard navigation
export const enhanceKeyboardNavigation = () => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any open modals or menus
      const openModals = document.querySelectorAll('[aria-modal="true"]')
      openModals.forEach(modal => {
        modal.style.display = 'none'
        modal.setAttribute('aria-hidden', 'true')
      })
    }
  })
}

// 6. Screen reader announcements
export const announceToScreenReader = (message) => {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'assertive')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// 7. High contrast mode detection
export const detectHighContrastMode = () => {
  const mediaQuery = window.matchMedia('(prefers-contrast: high)')
  return mediaQuery.matches
}

// 8. Reduced motion detection
export const detectReducedMotion = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}

// 9. Focus indicators
export const enhanceFocusIndicators = () => {
  const style = document.createElement('style')
  style.textContent = `
    *:focus {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }
    
    .focus-visible:focus:not(:focus-visible) {
      outline: none;
    }
  `
  document.head.appendChild(style)
}

// 10. Screen reader announcements
// Export functions for use in other modules