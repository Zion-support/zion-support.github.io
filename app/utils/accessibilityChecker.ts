// Accessibility checker utility
export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: HTMLElement
  selector?: string
  code?: string
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
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        elementIssues.push({
          type: 'error',
          message: 'Image missing alt text',
          element: img,
          selector: this.getSelector(img),
          code: 'IMG_MISSING_ALT'
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
          code: 'INPUT_MISSING_LABEL'
        })
      }
    })

    // Check for proper heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let lastLevel = 0
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1))
      if (level > lastLevel + 1) {
        elementIssues.push({
          type: 'warning',
          message: `Heading level ${level} follows level ${lastLevel}, skipping level ${lastLevel + 1}`,
          element: heading as HTMLElement,
          selector: this.getSelector(heading as HTMLElement),
          code: 'HEADING_SKIP_LEVEL'
        })
      }
      lastLevel = level
    })

    // Check for missing main landmark
    const main = element.querySelector('main')
    if (!main) {
      elementIssues.push({
        type: 'warning',
        message: 'Page missing main landmark',
        element: element,
        selector: this.getSelector(element),
        code: 'MISSING_MAIN_LANDMARK'
      })
    }

    // Check for proper color contrast (simplified check)
    const textElements = element.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6')
    textElements.forEach((el) => {
      const styles = window.getComputedStyle(el as HTMLElement)
      const color = styles.color
      const backgroundColor = styles.backgroundColor
      
      if (color === backgroundColor) {
        elementIssues.push({
          type: 'error',
          message: 'Text and background colors are identical',
          element: el as HTMLElement,
          selector: this.getSelector(el as HTMLElement),
          code: 'INSUFFICIENT_COLOR_CONTRAST'
        })
      }
    })

    return elementIssues
  }

  checkPage(): AccessibilityReport {
    this.issues = []
    
    // Check the entire document
    const documentIssues = this.checkElement(document.body)
    this.issues.push(...documentIssues)

    // Calculate score
    const errors = this.issues.filter(issue => issue.type === 'error').length
    const warnings = this.issues.filter(issue => issue.type === 'warning').length
    const total = this.issues.length
    
    const score = total === 0 ? 100 : Math.max(0, 100 - (errors * 10) - (warnings * 5))

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
    
<<<<<<< HEAD
    return element.tagName.toLowerCase()
  }
}

// Export a singleton instance
export const accessibilityChecker = new AccessibilityChecker()
=======
    return this.issues.map(issue => 
      `${issue.severity}: ${issue.message} (${issue.wcagLevel})`
    ).join('\n');
  }
}
>>>>>>> bda5d40addebc09fc3c74601f15d6b21b20062c5
