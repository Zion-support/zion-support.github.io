interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: HTMLElement
  selector?: string
}

interface AccessibilityCheckResult {
  issues: AccessibilityIssue[]
  score: number
  passed: boolean
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = []

  checkElement(element: HTMLElement): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = []

    // Check for alt text on images
    const images = element.querySelectorAll('img')
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push({
          type: 'error',
          message: 'Image missing alt text or aria-label',
          element: img,
          selector: this.getSelector(img)
        })
      }
    })

    // Check for proper heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let lastLevel = 0
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1))
      if (level > lastLevel + 1) {
        issues.push({
          type: 'warning',
          message: `Heading level ${level} follows heading level ${lastLevel}, skipping level ${lastLevel + 1}`,
          element: heading as HTMLElement,
          selector: this.getSelector(heading as HTMLElement)
        })
      }
      lastLevel = level
    })

    // Check for proper form labels
    const inputs = element.querySelectorAll('input, textarea, select')
    inputs.forEach(input => {
      const id = input.getAttribute('id')
      const ariaLabel = input.getAttribute('aria-label')
      const ariaLabelledBy = input.getAttribute('aria-labelledby')
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        issues.push({
          type: 'error',
          message: 'Form control missing label or aria-label',
          element: input as HTMLElement,
          selector: this.getSelector(input as HTMLElement)
        })
      }
    })

    // Check for proper color contrast
    const textElements = element.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6')
    textElements.forEach(el => {
      const styles = window.getComputedStyle(el as HTMLElement)
      const color = styles.color
      const backgroundColor = styles.backgroundColor
      
      if (color && backgroundColor && color !== backgroundColor) {
        const contrast = this.calculateContrast(color, backgroundColor)
        if (contrast < 4.5) {
          issues.push({
            type: 'error',
            message: `Low color contrast: ${contrast.toFixed(2)}:1 (minimum 4.5:1 required)`,
            element: el as HTMLElement,
            selector: this.getSelector(el as HTMLElement)
          })
        }
      }
    })

    return issues
  }

  checkDocument(): AccessibilityCheckResult {
    this.issues = []
    
    if (typeof document !== 'undefined') {
      this.issues = this.checkElement(document.body)
    }

    const score = Math.max(0, 100 - (this.issues.length * 10))
    const passed = this.issues.filter(issue => issue.type === 'error').length === 0

    return {
      issues: this.issues,
      score,
      passed
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

  private calculateContrast(_color1: string, _color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd parse the colors and calculate luminance
    return 4.5 // Placeholder
  }
}

export const accessibilityChecker = new AccessibilityChecker()