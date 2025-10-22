// Accessibility utilities for improving user experience and compliance

export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

export const createAriaLabel = (text: string, context?: string): string => {
  return context ? `${text}, ${context}` : text
}

export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

export const focusElement = (selector: string): void => {
  const element = document.querySelector(selector) as HTMLElement
  if (element) {
    element.focus()
  }
}

export const trapFocus = (container: HTMLElement): void => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  
  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
  
  container.addEventListener('keydown', (e) => {
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

export const setAriaExpanded = (element: HTMLElement, expanded: boolean): void => {
  element.setAttribute('aria-expanded', expanded.toString())
}

export const setAriaHidden = (element: HTMLElement, hidden: boolean): void => {
  element.setAttribute('aria-hidden', hidden.toString())
}

export const addSkipLink = (targetId: string, text: string = 'Skip to main content'): void => {
  const skipLink = document.createElement('a')
  skipLink.href = `#${targetId}`
  skipLink.textContent = text
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
    transition: top 0.3s;
  `
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px'
  })
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px'
  })
  
  document.body.insertBefore(skipLink, document.body.firstChild)
}

export const checkColorContrast = (_foreground: string, _background: string): number => {
  // Simplified contrast calculation
  // In a real implementation, you'd parse the colors and calculate luminance
  return 4.5 // Placeholder
}

export const accessibilityUtils = {
  generateId,
  createAriaLabel,
  announceToScreenReader,
  focusElement,
  trapFocus,
  setAriaExpanded,
  setAriaHidden,
  addSkipLink,
  checkColorContrast,
  init: () => {
    console.log('Accessibility Utils initialized')
  }
}

export default accessibilityUtils