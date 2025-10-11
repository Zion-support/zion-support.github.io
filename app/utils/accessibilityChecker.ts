'use client'

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: HTMLElement
  selector?: string
  code?: string
}

interface AccessibilityReport {
  issues: AccessibilityIssue[]
  score: number
  passed: number
  failed: number
  warnings: number
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = []

  checkElement(element: HTMLElement): AccessibilityIssue[] {

    // Check for alt text on images
    if (element.tagName === 'IMG') {
      const img = element as HTMLImageElement
      if (!img.alt && !img.getAttribute('aria-label')) {
        elementIssues.push({
          type: 'error',
          message: 'Image missing alt text or aria-label',
          element,
          selector: this.getSelector(element),
          code: 'WCAG2.1_AA_1.1.1'
        })
      }
    }

    // Check for form labels
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
      const formElement = element as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      const id = formElement.id
      const ariaLabel = formElement.getAttribute('aria-label')
      const ariaLabelledBy = formElement.getAttribute('aria-labelledby')
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        elementIssues.push({
          type: 'error',
          message: 'Form element missing label, aria-label, or aria-labelledby',
          element,
          selector: this.getSelector(element),
          code: 'WCAG2.1_AA_1.3.1'
        })
      }
    }

    // Check for heading hierarchy
    if (element.tagName.match(/^H[1-6]$/)) {
      const headingLevel = parseInt(element.tagName.charAt(1))
      const previousHeading = this.findPreviousHeading(element)
      
      if (previousHeading) {
        const previousLevel = parseInt(previousHeading.tagName.charAt(1))
        if (headingLevel > previousLevel + 1) {
          elementIssues.push({
            type: 'warning',
            message: `Heading level ${headingLevel} follows heading level ${previousLevel}. Consider using level ${previousLevel + 1}.`,
            element,
            selector: this.getSelector(element),
            code: 'WCAG2.1_AA_1.3.1'
          })
        }
      }
    }

    // Check for color contrast (simplified)
    const computedStyle = window.getComputedStyle(element)
    const color = computedStyle.color
    const backgroundColor = computedStyle.backgroundColor
    
    if (color && backgroundColor && color !== backgroundColor) {
      // This is a simplified check - in practice, you'd use a proper contrast ratio calculator
      elementIssues.push({
        type: 'info',
        message: 'Check color contrast ratio (4.5:1 for normal text, 3:1 for large text)',
        element,
        selector: this.getSelector(element),
        code: 'WCAG2.1_AA_1.4.3'
      })
    }

    return elementIssues
  }

  checkDocument(): AccessibilityReport {
    this.issues = []
    
    // Check all elements in the document
    const allElements = document.querySelectorAll('*')
    allElements.forEach(element => {
      const elementIssues = this.checkElement(element as HTMLElement)
      this.issues.push(...elementIssues)
    })

    // Calculate scores
    const errors = this.issues.filter(issue => issue.type === 'error').length
    const warnings = this.issues.filter(issue => issue.type === 'warning').length
    const infos = this.issues.filter(issue => issue.type === 'info').length
    
    const total = errors + warnings + infos
    const score = total > 0 ? Math.max(0, 100 - (errors * 10) - (warnings * 5) - (infos * 2)) : 100

    return {
      issues: this.issues,
      score: Math.round(score),
      passed: total - errors - warnings,
      failed: errors,
    }
  }

  private getSelector(element: HTMLElement): string {
    if (element.id) {
      return `#${element.id}`
    }
    
    if (element.className) {
      const classes = element.className.split(' ').filter(c => c.trim())
      if (classes.length > 0) {
        return `.${classes.join('.')}`
      }
    }
    
    return element.tagName.toLowerCase()
  }

  private findPreviousHeading(element: HTMLElement): HTMLElement | null {
    let current = element.previousElementSibling as HTMLElement
    
    while (current) {
      if (current.tagName.match(/^H[1-6]$/)) {
        return current
      }
      current = current.previousElementSibling as HTMLElement
    }
    
    return null
  }

  getIssues(): AccessibilityIssue[] {
    return this.issues
  }

  clearIssues(): void {
    this.issues = []
  }
}

export const accessibilityChecker = new AccessibilityChecker()