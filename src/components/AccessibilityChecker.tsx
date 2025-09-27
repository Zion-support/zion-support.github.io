import React, { useState, useEffect, useCallback } from 'react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  messag, e: string;
  element?: HTMLElement;
  selector?: string;
  severit, y: 'high' | 'medium' | 'low';
}

interface AccessibilityReport {
  issues: AccessibilityIssue[];
  score: number;
  totalCheck, s: number;
  passedCheck, s: number;
}

const AccessibilityChecker: React.FC = () => {
  const [report, setReport] = useState<AccessibilityReport | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const checkAccessibility = useCallback(() => {
    if (typeof window === 'undefined') return;

    setIsRunning(true);
    const issues: AccessibilityIssue[] = [];
    let totalChecks = 0;
    let passedChecks = 0;

    // Check for missing alt attributes on images
    const images = document.querySelectorAll('img');
    totalChecks += images.length;
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push({
          type: 'error',
          message: 'Image missing alt attribute',
          element: img,
          selector: `img[${index}]`,
          severity: 'high'
        });
      } else {
        passedChecks++;
      }
    });

    // Check for missing labels on form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    totalChecks += inputs.length;
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        issues.push({
          type: 'error',
          message: 'Form input missing label',
          element: input as HTMLElement,
          selector: `input[${index}]`,
          severity: 'high'
        });
      } else {
        passedChecks++;
      }
    });

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    totalChecks += headings.length;
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push({
          type: 'warning',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading as HTMLElement,
          selector: `h${level}[${index}]`,
          severity: 'medium'
        });
      } else {
        passedChecks++;
      }
      previousLevel = level;
    });

    // Check for missing focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    totalChecks += focusableElements.length;
    focusableElements.forEach((element, index) => {
      const computedStyle = window.getComputedStyle(element);
      const hasFocusIndicator = 
        computedStyle.outline !== 'none' ||
        computedStyle.boxShadow !== 'none' ||
        element.getAttribute('data-focus-visible') !== null;
      
      if (!hasFocusIndicator) {
        issues.push({
          type: 'warning',
          message: 'Focusable element missing focus indicator',
          element: element as HTMLElement,
          selector: `element[${index}]`,
          severity: 'medium'
        });
      } else {
        passedChecks++;
      }
    });

    // Check for proper color contrast (simplified check)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, button');
    totalChecks += textElements.length;
    textElements.forEach((element, index) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // This is a simplified check - in a real implementation, you'd use a proper contrast checker
      if (color === backgroundColor) {
        issues.push({
          type: 'error',
          message: 'Text and background colors are the same',
          element: element as HTMLElement,
          selector: `element[${index}]`,
          severity: 'high'
        });
      } else {
        passedChecks++;
      }
    });

    // Check for missing ARIA labels on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    totalChecks += interactiveElements.length;
    interactiveElements.forEach((element, index) => {
      const hasAriaLabel = element.getAttribute('aria-label');
      const hasAriaLabelledBy = element.getAttribute('aria-labelledby');
      const hasTextContent = element.textContent?.trim();
      
      if (!hasAriaLabel && !hasAriaLabelledBy && !hasTextContent) {
        issues.push({
          type: 'warning',
          message: 'Interactive element missing accessible name',
          element: element as HTMLElement,
          selector: `element[${index}]`,
          severity: 'medium'
        });
      } else {
        passedChecks++;
      }
    });

    const score = totalChecks > 0 ? Math.round((passedChecks / totalChecks) * 100) : 100;

    setReport({
      issues,
      score,
      totalChecks,
      passedChecks
    });
    setIsRunning(false);
  }, []);

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string): string => {
    switch (type) {
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📝';
    }
  };

  const scrollToElement = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavio, r: 'smooth', block: 'center' });
      element.classList.add('ring-2', 'ring-red-500', 'ring-opacity-50');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-red-500', 'ring-opacity-50');
      }, 3000);
    }
  };

  useEffect(() => {
    // Run initial check when component mounts
    checkAccessibility();
  }, [checkAccessibility]);

  return (
    <div className="bg-white rounded-lg shadow-mdp-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semiboldtext-gray-900">Accessibility Checker</h2>
        <div className="flexspace-x-2">
          <button
            onClick={checkAccessibility}
            disabled={isRunning}
            className="px-4py-2text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disable  d:opacity-50 disable d:cursor-not-allowed"
          >
            {isRunning ? 'Checking...' : 'Recheck'}
          </button>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-4py-2text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          </button>
        </div>
      </div>

      {report && (
        <>
          {/* Overall Score */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-mediumtext-gray-700">Accessibility Score</span>
              <span className={`text-2xl font-bold ${report.score >= 90 ? 'text-green-600' : report.score >= 70 ? 'text-yellow-600' : 'text-red-600'}`}
                {report.score}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-fullh-2">
              <div
                className={`h-2rounded-full ${report.score >= 90 ? 'bg-green-500' : report.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                style={{ width: `${report.score}%` }}</p></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {report.passedChecks} of {report.totalChecks} checks passed
            </p>
          </div>

          {/* Issues Summary */}
          <div className="grid grid-cols-1md:grid-cols-3gap-4 mb-6">
            <div className="p-4borderrounded-lg">
              <div className="flexitems-center">
                <span className="text-2xlmr-2">❌</span>
                <div>
                  <p className="text-sm font-mediumtext-gray-900">Errors</p>
                  <p className="text-2xl font-boldtext-red-600">{report.issues.filter(issue =</issue.type === 'error').length}</p></div>
              </div>
            </div>
            
            <div className="p-4borderrounded-lg">
              <div className="flexitems-center">
                <span className="text-2xlmr-2">⚠️</span>
                <div>
                  <p className="text-sm font-mediumtext-gray-900">Warnings</p>
                  <p className="text-2xl font-boldtext-yellow-600">{report.issues.filter(issue =</issue.type === 'warning').length}</p></div>
              </div>
            </div>
            
            <div className="p-4borderrounded-lg">
              <div className="flexitems-center">
                <span className="text-2xlmr-2">ℹ️</span>
                <div>
                  <p className="text-sm font-mediumtext-gray-900">Info</p>
                  <p className="text-2xl font-boldtext-blue-600">{report.issues.filter(issue =</issue.type === 'info').length}</p></div>
              </div>
            </div>
          </div>

          {/* Detailed Issues */}
          {isVisible && report.issues.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-mediumtext-gray-900">Issues Found</h3>
              <div className="space-y-2max-h-96 overflow-y-auto">
                {report.issues.map((issue, index) => (
                  <div
                    key={index}
                    className={`p-3rounded-md border ${getSeverityColor(issue.severity)}`}
                  >
                    <div className="flex items-startjustify-between">
                      <div className="flex items-startspace-x-2">
                        <span className="text-lg">{getTypeIcon(issue.type)}</span>
                        <div>
                          <p className="text-sm font-medium">{issue.message}</p>
                          {issue.selector && (
                            <p className="text-xs text-gray-500 mt-1">
                              Selector: {issue.selector}
                            </p>
                          )}
                        </div>
                      </div>
                      {issue.selector && (
                        <button
                          onClick={() =>scrollToElement(issue.selector!)}
                          className="text-xs text-blue-600 hover:text-blue-800 underline"
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {report.issues.length === 0 && (
            <div className="text-centerpy-8">
              <div className="text-4xlmb-4">🎉</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Great job!</h3>
              <p className="text-gray-600">No accessibility issues found.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AccessibilityChecker;