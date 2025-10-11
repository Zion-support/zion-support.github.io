// Accessibility improvements for the Zion Tech Group website
=======
// Accessibility improvements for Zion Tech Group website
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7

// 1. Focus management
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
  element.addEventListener('keydown', (e) => {
=======
  const handleTabKey = (e) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
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

// 2. Skip links
export const addSkipLinks = () => {
  const skipLink = document.createElement('a')
  skipLink.href = '#main-content'
  skipLink.textContent = 'Skip to main content'
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50'
  document.body.insertBefore(skipLink, document.body.firstChild)
}

// 3. ARIA labels
export const addAriaLabels = () => {
  const buttons = document.querySelectorAll('button:not([aria-label])')
  buttons.forEach(button => {
    if (!button.textContent.trim()) {
      button.setAttribute('aria-label', 'Button')
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
    }
  })
}

<<<<<<< HEAD
// 4. Color contrast checker
export const checkColorContrast = (foreground, background) => {
  const getLuminance = (color) => {
    const rgb = color.match(/\d+/g).map(Number)
    const [r, g, b] = rgb.map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  const l1 = getLuminance(foreground)
  const l2 = getLuminance(background)
  const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
  
  return {
    ratio: contrast,
    passes: contrast >= 4.5,
    level: contrast >= 7 ? 'AAA' : contrast >= 4.5 ? 'AA' : 'Fail'
  }
}

// 5. Keyboard navigation
export const enhanceKeyboardNavigation = () => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('[role="dialog"]')
      modals.forEach(modal => {
        if (modal.style.display !== 'none') {
          modal.style.display = 'none'
          modal.setAttribute('aria-hidden', 'true')
        }
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

// 7. Form validation
export const enhanceFormValidation = (form) => {
  const inputs = form.querySelectorAll('input, textarea, select')
  
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input)
    })
    
    input.addEventListener('input', () => {
      clearFieldError(input)
    })
  })
}

const validateField = (field) => {
  const value = field.value.trim()
  const type = field.type
  const required = field.hasAttribute('required')
  
  if (required && !value) {
    showFieldError(field, 'This field is required')
    return false
  }
  
  if (type === 'email' && value && !isValidEmail(value)) {
    showFieldError(field, 'Please enter a valid email address')
    return false
  }
  
  return true
}

const showFieldError = (field, message) => {
  clearFieldError(field)
  
  const error = document.createElement('div')
  error.className = 'text-red-500 text-sm mt-1'
  error.textContent = message
  error.setAttribute('role', 'alert')
  error.setAttribute('aria-live', 'polite')
  
  field.parentNode.appendChild(error)
  field.setAttribute('aria-invalid', 'true')
}

const clearFieldError = (field) => {
  const error = field.parentNode.querySelector('.text-red-500')
  if (error) {
    error.remove()
  }
  field.removeAttribute('aria-invalid')
}

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// 8. High contrast mode
export const addHighContrastMode = () => {
  const toggle = document.createElement('button')
  toggle.textContent = 'Toggle High Contrast'
  toggle.className = 'fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded z-50'
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast')
  })
  document.body.appendChild(toggle)
}

// 9. Reduced motion support
export const respectReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  
  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms')
    document.documentElement.style.setProperty('--animation-iteration-count', '1')
  }
}

// 10. Screen reader announcements
export const setupScreenReaderAnnouncements = () => {
  // Add live region for dynamic content updates
  const liveRegion = document.createElement('div')
  liveRegion.setAttribute('aria-live', 'polite')
  liveRegion.setAttribute('aria-atomic', 'true')
  liveRegion.className = 'sr-only'
  liveRegion.id = 'live-region'
  document.body.appendChild(liveRegion)
}

// Initialize all accessibility features
export const initializeAccessibility = () => {
  addSkipLinks()
  addAriaLabels()
  enhanceKeyboardNavigation()
  addHighContrastMode()
  respectReducedMotion()
  setupScreenReaderAnnouncements()
}
<<<<<<< HEAD
const validateInput = (input) => {
  const isValid = input.checkValidity()
  const errorId = `${input.id}-error`
  let errorElement = document.getElementById(errorId)
  
  if (!isValid) {
    if (!errorElement) {
      errorElement = document.createElement('div')
      errorElement.id = errorId
      errorElement.className = 'error-message'
      input.parentNode.appendChild(errorElement)
    }
    errorElement.textContent = input.validationMessage
    input.setAttribute('aria-invalid', 'true')
    input.setAttribute('aria-describedby', errorId)
  } else {
    if (errorElement) {
      errorElement.remove()
    }
    input.removeAttribute('aria-invalid')
    input.removeAttribute('aria-describedby')
  }
}

// 8. Implement focus indicators
const addFocusIndicators = () => {
  const style = document.createElement('style')
  style.textContent = `
    *:focus {
      outline: 2px solid #4A90E2;
      outline-offset: 2px;
    }
    .skip-link:focus {
      outline: 2px solid #fff;
    }
  `
  document.head.appendChild(style)
}

// 9. Add landmark roles
const addLandmarkRoles = () => {
  const main = document.querySelector('main')
  if (main) main.setAttribute('role', 'main')
  
  const nav = document.querySelector('nav')
  if (nav) nav.setAttribute('role', 'navigation')
  
  const header = document.querySelector('header')
  if (header) header.setAttribute('role', 'banner')
  
  const footer = document.querySelector('footer')
  if (footer) footer.setAttribute('role', 'contentinfo')
}

// 10. Screen reader announcements
const announceToScreenReader = (message) => {
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

// Initialize accessibility features
const initAccessibility = () => {
  addKeyboardNavigation()
  addSkipLinks()
  addHighContrastMode()
  addFocusIndicators()
  addLandmarkRoles()
}

export { 
  trapFocus, 
  addKeyboardNavigation, 
  addSkipLinks, 
  addHighContrastMode, 
  addScreenReaderOnly, 
  addFormValidation, 
  addFocusIndicators, 
  addLandmarkRoles, 
  announceToScreenReader, 
  initAccessibility 
}
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
