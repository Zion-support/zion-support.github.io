// Accessibility improvements to implement
// 1. Add ARIA labels to interactive elements
// Example JSX:
// <button aria-label="Close dialog">×</button>
// <input aria-describedby="email-help" type="email" />
// <div id="email-help">Enter your email address</div>

// 2. Implement focus management
const trapFocus = (element) => {
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

// 3. Add keyboard navigation
const addKeyboardNavigation = () => {
  // Add keyboard event listeners to interactive elements
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const target = e.target
      if (target.getAttribute('role') === 'button' || target.tagName === 'BUTTON') {
        target.click()
        e.preventDefault()
      }
    }
  })
}

// 4. Implement skip links
const addSkipLinks = () => {
  const skipLink = document.createElement('a')
  skipLink.href = '#main-content'
  skipLink.textContent = 'Skip to main content'
  skipLink.className = 'skip-link'
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
  `
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px'
  })
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px'
  })
  document.body.insertBefore(skipLink, document.body.firstChild)
}

// 5. Add high contrast mode support
const addHighContrastMode = () => {
  const toggle = document.createElement('button')
  toggle.textContent = 'Toggle High Contrast'
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast')
  })
  document.body.appendChild(toggle)
}

// 6. Implement screen reader only text
const addScreenReaderOnly = (element, text) => {
  const srOnly = document.createElement('span')
  srOnly.textContent = text
  srOnly.className = 'sr-only'
  srOnly.style.cssText = `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `
  element.appendChild(srOnly)
}

// 7. Add form validation with ARIA
const addFormValidation = (form) => {
  const inputs = form.querySelectorAll('input, textarea, select')
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateInput(input)
    })
  })
}

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