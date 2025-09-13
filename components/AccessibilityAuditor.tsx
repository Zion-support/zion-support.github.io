// @ts-nocheck
import React, { useEffect, useState } from 'react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  suggestion: string;
}

const AccessibilityAuditor: React.FC = () => {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);

  const runAccessibilityAudit = () => {
    setIsAuditing(true);
    setIssues([]);

    const newIssues: AccessibilityIssue[] = [];

    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt || img.alt.trim() === '') {
        newIssues.push({
          type: 'error',
          element: `img[${index}]`,
          message: 'Image missing alt text',
          suggestion: 'Add descriptive alt text for screen readers'
        });
      }
    });

    // Check for missing heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        newIssues.push({
          type: 'warning',
          element: heading.tagName.toLowerCase(),
          message: 'Heading hierarchy skipped',
          suggestion: `Consider using h${lastLevel + 1} instead of h${level}`
        });
      }
      lastLevel = level;
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        newIssues.push({
          type: 'error',
          element: `input[${index}]`,
          message: 'Form input missing label',
          suggestion: 'Add id and corresponding label, or aria-label'
        });
      }
    });

    // Check for missing focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach((element, index) => {
      const styles = window.getComputedStyle(element);
      const hasFocusIndicator = 
        styles.outline !== 'none' || 
        styles.boxShadow !== 'none' ||
        element.getAttribute('data-focus-visible') === 'true';
      
      if (!hasFocusIndicator) {
        newIssues.push({
          type: 'warning',
          element: element.tagName.toLowerCase(),
          message: 'Missing focus indicator',
          suggestion: 'Add visible focus styles for keyboard navigation'
        });
      }
    });

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // This is a simplified check - in a real implementation,
      // you'd use a proper color contrast calculation
      if (color === backgroundColor) {
        newIssues.push({
          type: 'error',
          element: element.tagName.toLowerCase(),
          message: 'Text and background colors are identical',
          suggestion: 'Ensure sufficient color contrast ratio (4.5:1 for normal text)'
        });
      }
    });

    // Check for missing ARIA labels on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach((element, index) => {
      const hasAriaLabel = element.getAttribute('aria-label');
      const hasAriaLabelledBy = element.getAttribute('aria-labelledby');
      const hasTextContent = element.textContent && element.textContent.trim() !== '';
      
      if (!hasAriaLabel && !hasAriaLabelledBy && !hasTextContent) {
        newIssues.push({
          type: 'warning',
          element: element.tagName.toLowerCase(),
          message: 'Interactive element missing accessible name',
          suggestion: 'Add aria-label or ensure element has visible text content'
        });
      }
    });

    // Check for missing skip links
    const skipLinks = document.querySelectorAll('a[href^="#"]');
    if (skipLinks.length === 0) {
      newIssues.push({
        type: 'info',
        element: 'body',
        message: 'No skip links found',
        suggestion: 'Add skip links for keyboard navigation'
      });
    }

    setIssues(newIssues);
    setIsAuditing(false);
    setAuditComplete(true);
  };

  const getIssueCount = (type: 'error' | 'warning' | 'info') => {
    return issues.filter(issue => issue.type === type).length;
  };

  const getAccessibilityScore = () => {
    const totalIssues = issues.length;
    const errors = getIssueCount('error');
    const warnings = getIssueCount('warning');
    
    if (totalIssues === 0) return 100;
    
    // Calculate score based on issue severity
    const errorWeight = 3;
    const warningWeight = 1;
    const totalWeight = errors * errorWeight + warnings * warningWeight;
    
    return Math.max(0, 100 - (totalWeight * 10));
  };

  const score = getAccessibilityScore();

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Accessibility Audit
        </h3>
        <div className={`w-3 h-3 rounded-full ${
          score >= 90 ? 'bg-green-500' : 
          score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
        }`}></div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
          <span>Accessibility Score:</span>
          <span className={`font-semibold ${
            score >= 90 ? 'text-green-500' : 
            score >= 70 ? 'text-yellow-500' : 'text-red-500'
          }`}>
            {score}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              score >= 90 ? 'bg-green-500' : 
              score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300 mb-3">
        <div className="flex justify-between">
          <span>Errors:</span>
          <span className="text-red-500 font-semibold">{getIssueCount('error')}</span>
        </div>
        <div className="flex justify-between">
          <span>Warnings:</span>
          <span className="text-yellow-500 font-semibold">{getIssueCount('warning')}</span>
        </div>
        <div className="flex justify-between">
          <span>Info:</span>
          <span className="text-blue-500 font-semibold">{getIssueCount('info')}</span>
        </div>
      </div>

      <button
        onClick={runAccessibilityAudit}
        disabled={isAuditing}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white text-xs py-2 px-3 rounded transition-colors"
      >
        {isAuditing ? 'Auditing...' : 'Run Audit'}
      </button>

      {auditComplete && issues.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600 max-h-40 overflow-y-auto">
          <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">
            Issues Found:
          </h4>
          <div className="space-y-2">
            {issues.slice(0, 5).map((issue, index) => (
              <div key={index} className="text-xs">
                <div className={`flex items-center mb-1 ${
                  issue.type === 'error' ? 'text-red-500' :
                  issue.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                  <span className="font-semibold">{issue.element}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-4">
                  {issue.message}
                </div>
                <div className="text-gray-500 dark:text-gray-400 ml-4 text-xs">
                  {issue.suggestion}
                </div>
              </div>
            ))}
            {issues.length > 5 && (
              <div className="text-xs text-gray-500 dark:text-gray-400">
                ... and {issues.length - 5} more issues
              </div>
            )}
          </div>
        </div>
      )}

      {auditComplete && issues.length === 0 && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <div className="text-xs text-green-600 dark:text-green-400 text-center">
            🎉 No accessibility issues found!
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityAuditor;