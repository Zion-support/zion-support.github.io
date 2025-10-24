// Accessibility checker utility functions
export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: string
  line?: number
  column?: number
}

export interface AccessibilityReport {
  issues: AccessibilityIssue[];
  score: number
  passed: boolean
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = [];

  checkElement(element: HTMLElement): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = [];
    
    // Check for missing alt text on images
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
      issues.push({
        type: 'error',
        message: 'Image missing alt text',
        element: element.tagName
      })
    }

    // Check for missing labels on form inputs
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName)) {
      const id = element.getAttribute('id')
      const ariaLabel = element.getAttribute('aria-label')
      const ariaLabelledBy = element.getAttribute('aria-labelledby')
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        issues.push({
          type: 'error',
          message: 'Form element missing label or aria-label',
          element: element.tagName
        }
  )
  );
}
    return issues
  }

  checkDocument(): AccessibilityReport {
    this.issues = [];
    
    const allElements = document.querySelectorAll('*')
    allElements.forEach((element) => {
      const elementIssues = this.checkElement(element as HTMLElement)
      this.issues.push(...elementIssues)
    })

    const errorCount = this.issues.filter(issue => issue.type === 'error').length
    const warningCount = this.issues.filter(issue => issue.type === 'warning').length
    
    const score = Math.max(0, 100 - (errorCount * 10) - (warningCount * 5))
    const passed = errorCount === 0

    return {
      issues: this.issues,
      score,
      passed
    }
  }
}

export default AccessibilityChecker;
