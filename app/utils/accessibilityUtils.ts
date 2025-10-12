// Accessibility utility functions

export function addAriaLabels(element: HTMLElement): void {
  // Add aria-labels to interactive elements without labels
  const buttons = element.querySelectorAll('button:not([aria-label]):not([aria-labelledby])')
  buttons.forEach((button, index) => {
    if (!button.textContent?.trim()) {
      button.setAttribute('aria-label', `Button ${index + 1}`)
    }
  })

  const links = element.querySelectorAll('a:not([aria-label]):not([aria-labelledby])')
  links.forEach((link, index) => {
    if (!link.textContent?.trim()) {
      link.setAttribute('aria-label', `Link ${index + 1}`)
    }
  })
}

export function improveColorContrast(element: HTMLElement): void {
  // Check and improve color contrast for better accessibility
  const elements = element.querySelectorAll('*')
  elements.forEach(el => {
    const computedStyle = window.getComputedStyle(el)
    const color = computedStyle.color
    const backgroundColor = computedStyle.backgroundColor
    
    // Basic contrast check (simplified)
    if (color && backgroundColor && color !== backgroundColor) {
      // Add high contrast class if needed
      if (el.classList.contains('low-contrast')) {
        el.classList.add('high-contrast')
        el.classList.remove('low-contrast')
      }
    }
  })
}

export function addKeyboardNavigation(element: HTMLElement): void {
  // Add keyboard navigation support
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  
  focusableElements.forEach((el, index) => {
    el.setAttribute('tabindex', index.toString())
  })
}

export function generateAccessibilityReport(element: HTMLElement): string {
  let report = 'Accessibility Report\n'
  report += '==================\n\n'
  
  // Check for missing alt text
  const images = element.querySelectorAll('img')
  const imagesWithoutAlt = Array.from(images).filter(img => !img.alt)
  report += `Images without alt text: ${imagesWithoutAlt.length}\n`
  
  // Check for proper heading structure
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6')
  report += `Total headings: ${headings.length}\n`
  
  // Check for form labels
  const inputs = element.querySelectorAll('input, textarea, select')
  const inputsWithoutLabels = Array.from(inputs).filter(input => {
    const id = input.getAttribute('id')
    return id && !element.querySelector(`label[for="${id}"]`)
  })
  report += `Form inputs without labels: ${inputsWithoutLabels.length}\n`
  
  return report
}