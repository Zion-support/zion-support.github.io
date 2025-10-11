// Accessibility improvements for the Zion Tech Group website

// 1. Focus management
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  element.addEventListener('keydown', (e) => {
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
    }
  })
}

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
