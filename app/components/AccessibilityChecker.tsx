'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, CheckCircle, Eye, EyeOff } from 'lucide-react'

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: string
  recommendation?: string
}

export default function AccessibilityChecker() {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const checkAccessibility = () => {
      const newIssues: AccessibilityIssue[] = []

      // Check for missing alt attributes
      const imagesWithoutAlt = document.querySelectorAll('img:not([alt])')
      imagesWithoutAlt.forEach((img, index) => {
        newIssues.push({
          type: 'error',
          message: `Image ${index + 1} is missing alt attribute`,
          element: img.tagName.toLowerCase(),
          recommendation: 'Add descriptive alt text to all images'
        })
      })

      // Check for missing form labels
      const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])')
      inputsWithoutLabels.forEach((input, index) => {
        const hasLabel = document.querySelector(`label[for="${input.id}"]`)
        if (!hasLabel) {
          newIssues.push({
            type: 'error',
            message: `Input ${index + 1} is missing label`,
            element: input.tagName.toLowerCase(),
            recommendation: 'Add proper labels or aria-label attributes'
          })
        }
      })

      // Check for missing heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      let previousLevel = 0
      headings.forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1))
        if (level > previousLevel + 1 && previousLevel > 0) {
          newIssues.push({
            type: 'warning',
            message: `Heading hierarchy skip detected`,
            element: heading.tagName.toLowerCase(),
            recommendation: 'Maintain proper heading hierarchy (h1 → h2 → h3, etc.)'
          })
        }
        previousLevel = level
      })

      // Check for color contrast (basic check)
      const elements = document.querySelectorAll('*')
      elements.forEach((element) => {
        const styles = window.getComputedStyle(element)
        const color = styles.color
        const backgroundColor = styles.backgroundColor
        
        if (color && backgroundColor && 
            color !== 'rgba(0, 0, 0, 0)' && 
            backgroundColor !== 'rgba(0, 0, 0, 0)') {
          // This is a simplified check - in a real implementation,
          // you'd calculate the actual contrast ratio
          if (color === backgroundColor) {
            newIssues.push({
              type: 'warning',
              message: 'Potential color contrast issue detected',
              element: element.tagName.toLowerCase(),
              recommendation: 'Ensure sufficient color contrast for readability'
            })
          }
        }
      })

      // Check for keyboard navigation
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea')
      interactiveElements.forEach((element) => {
        const tabIndex = element.getAttribute('tabindex')
        if (tabIndex === '-1') {
          newIssues.push({
            type: 'info',
            message: 'Element is not keyboard accessible',
            element: element.tagName.toLowerCase(),
            recommendation: 'Ensure all interactive elements are keyboard accessible'
          })
        }
      })

      setIssues(newIssues)
    }

    checkAccessibility()

    // Re-check when DOM changes
    const observer = new MutationObserver(checkAccessibility)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['alt', 'aria-label', 'tabindex']
    })

    return () => observer.disconnect()
  }, [isVisible])

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open accessibility checker"
      >
        <Eye className="w-5 h-5" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm max-h-96 overflow-y-auto z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Accessibility Checker</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Close accessibility checker"
        >
          <EyeOff className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        {issues.length === 0 ? (
          <div className="flex items-center text-green-600 text-sm">
            <CheckCircle className="w-4 h-4 mr-2" />
            No accessibility issues found
          </div>
        ) : (
          issues.map((issue, index) => (
            <div key={index} className="flex items-start space-x-2 text-sm">
              <div className="flex-shrink-0 mt-0.5">
                {issue.type === 'error' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                {issue.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                {issue.type === 'info' && <AlertTriangle className="w-4 h-4 text-blue-500" />}
              </div>
              <div className="flex-1">
                <p className="text-gray-900">{issue.message}</p>
                {issue.recommendation && (
                  <p className="text-gray-600 text-xs mt-1">{issue.recommendation}</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Found {issues.length} issue{issues.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  )
}