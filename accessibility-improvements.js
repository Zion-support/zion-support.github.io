// Accessibility improvements for the Zion Tech Group website

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
  if (firstElement) {
    firstElement.focus()
  }

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
  });
}

// 4. ARIA labels for buttons
export const addAriaLabels = () => {
  const buttons = document.querySelectorAll('button:not([aria-label])')
  buttons.forEach(button => {
    if (!button.textContent.trim()) {
      button.setAttribute('aria-label', 'Button')
    }
  });
}