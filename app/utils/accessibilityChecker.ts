// Accessibility checker utility functions

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: HTMLElement
  selector?: string
  suggestion?: string
}

export interface AccessibilityReport {
  issues: AccessibilityIssue[]
  score: number
  passed: number
  failed: number
  warnings: number
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = []

  checkElement(element: HTMLElement): AccessibilityIssue[] {
    const elementIssues: AccessibilityIssue[] = []

    // Check for missing alt text on images
    const images = element.querySelectorAll('img')
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        elementIssues.push({
          type: 'error',
          message: 'Image missing alt text',
          element: img,
          selector: this.getSelector(img),
          suggestion: 'Add alt text or aria-label to describe the image'
        })
      }
    })

    // Check for missing labels on form inputs
    const inputs = element.querySelectorAll('input, textarea, select')
    inputs.forEach(input => {
      const id = input.getAttribute('id')
      const ariaLabel = input.getAttribute('aria-label')
      const ariaLabelledBy = input.getAttribute('aria-labelledby')
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        elementIssues.push({
          type: 'error',
          message: 'Form input missing label',
          element: input as HTMLElement,
          selector: this.getSelector(input as HTMLElement),
          suggestion: 'Add a label element or aria-label attribute'
        })
      }
    })

    // Check for proper heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let lastLevel = 0
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1))
      if (level > lastLevel + 1) {
        elementIssues.push({
          type: 'warning',
          message: `Heading level ${level} skipped from ${lastLevel}`,
          element: heading as HTMLElement,
          selector: this.getSelector(heading as HTMLElement),
          suggestion: 'Use proper heading hierarchy (h1, h2, h3, etc.)'
        })
      }
      lastLevel = level
    })

    // Check for missing focus indicators
    const focusableElements = element.querySelectorAll('a, button, input, textarea, select, [tabindex]')
    focusableElements.forEach(el => {
      const computedStyle = window.getComputedStyle(el as HTMLElement)
      const outline = computedStyle.outline
      const boxShadow = computedStyle.boxShadow
      
      if (outline === 'none' && !boxShadow.includes('inset')) {
        elementIssues.push({
          type: 'warning',
          message: 'Focusable element may not have visible focus indicator',
          element: el as HTMLElement,
          selector: this.getSelector(el as HTMLElement),
          suggestion: 'Add visible focus styles for keyboard navigation'
        })
      }
    })

    // Check for color contrast (simplified check)
    const textElements = element.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, button')
    textElements.forEach(el => {
      const computedStyle = window.getComputedStyle(el as HTMLElement)
      const color = computedStyle.color
      const backgroundColor = computedStyle.backgroundColor
      
      if (color === backgroundColor) {
        elementIssues.push({
          type: 'error',
          message: 'Text and background colors are the same',
          element: el as HTMLElement,
          selector: this.getSelector(el as HTMLElement),
          suggestion: 'Ensure sufficient color contrast between text and background'
        })
      }
    })

    return elementIssues
  }

  checkDocument(): AccessibilityReport {
    this.issues = []
    
    // Check the entire document
    const documentIssues = this.checkElement(document.body)
    this.issues.push(...documentIssues)

    // Calculate score
    const errors = this.issues.filter(issue => issue.type === 'error').length
    const warnings = this.issues.filter(issue => issue.type === 'warning').length
    const total = this.issues.length
    
    const score = total > 0 ? Math.max(0, 100 - (errors * 10) - (warnings * 5)) : 100

    return {
      issues: this.issues,
      score,
      passed: this.issues.filter(issue => issue.type === 'info').length,
      failed: errors,
      warnings
    }
  }

  private getSelector(element: HTMLElement): string {
    if (element.id) {
      return `#${element.id}`
    }
    
    if (element.className) {
      const classes = element.className.split(' ').filter(c => c.length > 0)
      if (classes.length > 0) {
        return `.${classes.join('.')}`
      }
    }
    
    return element.tagName.toLowerCase()
  }
}

// Export a default instance
export const accessibilityChecker = new AccessibilityChecker()