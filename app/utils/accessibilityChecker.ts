// Accessibility checker utility
export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: HTMLElement
  selector?: string
  code?: string
  severity: 'error' | 'warning' | 'info'
  wcagLevel: string
}

export interface AccessibilityReport {
  issues: AccessibilityIssue[]
  score: number
  passed: number
  failed: number
  warnings: number
  timestamp: Date
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = []

  checkElement(element: HTMLElement): AccessibilityIssue[] {
    const elementIssues: AccessibilityIssue[] = []

    // Check for missing alt text on images
    const images = element.querySelectorAll('img')
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        elementIssues.push({
          type: 'error',
          message: 'Image missing alt text',
          element: img,
          selector: this.getSelector(img),
          code: 'IMG_MISSING_ALT',
          severity: 'error',
          wcagLevel: 'A'
        })
      }
    })

    // Check for missing labels on form inputs
    const inputs = element.querySelectorAll('input, textarea, select')
    inputs.forEach((input) => {
      const id = input.getAttribute('id')
      const ariaLabel = input.getAttribute('aria-label')
      const ariaLabelledBy = input.getAttribute('aria-labelledby')
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        elementIssues.push({
          type: 'error',
          message: 'Form input missing label',
          element: input as HTMLElement,
          selector: this.getSelector(input as HTMLElement),
          code: 'INPUT_MISSING_LABEL',
          severity: 'error',
          wcagLevel: 'A'
        })
      }
    })

    // Check for missing heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let lastLevel = 0
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1))
      if (level > lastLevel + 1) {
        elementIssues.push({
          type: 'warning',
          message: 'Heading hierarchy skipped',
          element: heading as HTMLElement,
          selector: this.getSelector(heading as HTMLElement),
          code: 'HEADING_HIERARCHY',
          severity: 'warning',
          wcagLevel: 'AA'
        })
      }
      lastLevel = level
    })

    // Check for missing focus indicators
    const focusableElements = element.querySelectorAll('button, a, input, select, textarea, [tabindex]')
    focusableElements.forEach((el) => {
      const computedStyle = window.getComputedStyle(el as Element)
      const outline = computedStyle.outline
      const boxShadow = computedStyle.boxShadow
      
      if (outline === 'none' && !boxShadow.includes('inset')) {
        elementIssues.push({
          type: 'warning',
          message: 'Focusable element missing focus indicator',
          element: el as HTMLElement,
          selector: this.getSelector(el as HTMLElement),
          code: 'MISSING_FOCUS_INDICATOR',
          severity: 'warning',
          wcagLevel: 'AA'
        })
      }
    })

    // Check for color contrast (simplified)
    const textElements = element.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6')
    textElements.forEach((el) => {
      const computedStyle = window.getComputedStyle(el as Element)
      const color = computedStyle.color
      const backgroundColor = computedStyle.backgroundColor
      
      if (color && backgroundColor && color === backgroundColor) {
        elementIssues.push({
          type: 'error',
          message: 'Text color same as background color',
          element: el as HTMLElement,
          selector: this.getSelector(el as HTMLElement),
          code: 'COLOR_CONTRAST',
          severity: 'error',
          wcagLevel: 'AA'
        })
      }
    })

    return elementIssues
  }

  checkPage(): AccessibilityReport {
    this.issues = []
    
    // Check all elements on the page
    const allElements = document.querySelectorAll('*')
    allElements.forEach((element) => {
      const elementIssues = this.checkElement(element as HTMLElement)
      this.issues.push(...elementIssues)
    })

    // Calculate scores
    const errors = this.issues.filter(issue => issue.type === 'error').length
    const warnings = this.issues.filter(issue => issue.type === 'warning').length
    const total = this.issues.length
    const passed = total - errors - warnings
    const score = total > 0 ? Math.round((passed / total) * 100) : 100

    return {
      issues: this.issues,
      score,
      passed,
      failed: errors,
      warnings,
      timestamp: new Date()
    }
  }

  private getSelector(element: HTMLElement): string {
    if (element.id) {
      return `#${element.id}`
    }
    
    if (element.className) {
      return `.${element.className.split(' ').join('.')}`
    }
    
    return element.tagName.toLowerCase()
  }

  getReport(): string {
    if (this.issues.length === 0) {
      return 'No accessibility issues found!'
    }
    
    return this.issues.map(issue => 
      `${issue.severity}: ${issue.message} (${issue.wcagLevel})`
    ).join('\n')
  }
}