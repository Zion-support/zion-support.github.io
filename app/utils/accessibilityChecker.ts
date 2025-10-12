// Accessibility checker utility functions

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: HTMLElement
  rule?: string
}

export interface AccessibilityReport {
  issues: AccessibilityIssue[]
  score: number
  passed: number
  failed: number
  warnings: number
}

export function checkAccessibility(element: HTMLElement): AccessibilityReport {
  const issues: AccessibilityIssue[] = []
  
  // Check for missing alt text on images
  const images = element.querySelectorAll('img')
  images.forEach(img => {
    if (!img.alt) {
      issues.push({
        type: 'error',
        message: 'Image missing alt text',
        element: img,
        rule: 'alt-text'
      })
    }
  })
  
  // Check for proper heading hierarchy
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6')
  let previousLevel = 0
  headings.forEach(heading => {
    const level = parseInt(heading.tagName.charAt(1))
    if (level > previousLevel + 1) {
      issues.push({
        type: 'warning',
        message: `Heading level ${level} skipped after level ${previousLevel}`,
        element: heading as HTMLElement,
        rule: 'heading-order'
      })
    }
    previousLevel = level
  })
  
  // Check for proper form labels
  const inputs = element.querySelectorAll('input, textarea, select')
  inputs.forEach(input => {
    const id = input.getAttribute('id')
    if (id && !element.querySelector(`label[for="${id}"]`)) {
      issues.push({
        type: 'error',
        message: 'Form input missing associated label',
        element: input as HTMLElement,
        rule: 'label'
      })
    }
  })
  
  const passed = issues.filter(issue => issue.type === 'info').length
  const failed = issues.filter(issue => issue.type === 'error').length
  const warnings = issues.filter(issue => issue.type === 'warning').length
  const total = passed + failed + warnings
  const score = total > 0 ? Math.round((passed / total) * 100) : 100
  
  return {
    issues,
    score,
    passed,
    failed,
    warnings
  }
}

export function generateAccessibilityReport(element: HTMLElement): string {
  const report = checkAccessibility(element)
  
  let reportText = `Accessibility Report\n`
  reportText += `==================\n\n`
  reportText += `Score: ${report.score}%\n`
  reportText += `Passed: ${report.passed}\n`
  reportText += `Failed: ${report.failed}\n`
  reportText += `Warnings: ${report.warnings}\n\n`
  
  if (report.issues.length > 0) {
    reportText += `Issues:\n`
    report.issues.forEach((issue, index) => {
      reportText += `${index + 1}. [${issue.type.toUpperCase()}] ${issue.message}\n`
      if (issue.rule) {
        reportText += `   Rule: ${issue.rule}\n`
      }
    })
  }
  
  return reportText
}