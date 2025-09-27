import React, { useState, useEffect } from 'react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  rule: string;
}

export const AccessibilityAuditor: React.FC = () => {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const runAccessibilityAudit = () => {
    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];

    // Check for missing alt attributes on images
    const images = document.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
      if (!img.alt) {
        newIssues.push({
          type: "error",
          message: "Image missing alt attribute",
          element: img,
          rule: "alt-text"
        });
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input: HTMLInputElement) => {
      const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute("aria-label");
      const ariaLabelledBy = input.getAttribute("aria-labelledby");
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        newIssues.push({
          type: "error",
          message: "Form element missing accessible label",
          element: input,
          rule: "form-labels"
        });
      }
    });

    // Check heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading: HTMLHeadingElement) => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      if (currentLevel > previousLevel + 1) {
        newIssues.push({
          type: "warning",
          message: `Heading hierarchy skipped from H${previousLevel} to H${currentLevel}`,
          element: heading,
          rule: "heading-order"
        });
      }
      previousLevel = currentLevel;
    });

    // Check for missing focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach((element: HTMLElement) => {
      const styles = window.getComputedStyle(element);
      if (styles.outline === 'none' && !element.getAttribute('data-focus-visible-added')) {
        newIssues.push({
          type: "warning",
          message: "Element may lack visible focus indicator",
          element: element,
          rule: "focus-visible"
        });
      }
    });

    // Check color contrast (simplified check)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element: HTMLElement) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color === backgroundColor) {
        newIssues.push({
          type: "error",
          message: "Text color matches background color",
          element: element,
          rule: "color-contrast"
        });
      }
    });

    setIssues(newIssues);
    setIsScanning(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      runAccessibilityAudit();
    }
  }, []);

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error':
        return '🔴';
      case 'warning':
        return '🟡';
      case 'info':
        return '🔵';
      default:
        return '⚪';
    }
  };

  const scrollToIssue = (element?: HTMLElement) => {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.style.outline = '2px solid red';
      setTimeout(() => {
        element.style.outline = '';
      }, 3000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Accessibility Audit</h2>
        <button
          onClick={runAccessibilityAudit}
          disabled={isScanning}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {isScanning ? 'Scanning...' : 'Run Audit'}
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-600">
          Found {issues.length} accessibility issue{issues.length !== 1 ? 's' : ''}
        </p>
      </div>

      {issues.length > 0 && (
        <div className="space-y-3">
          {issues.map((issue, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                issue.type === 'error' 
                  ? 'bg-red-50 border-red-500' 
                  : issue.type === 'warning'
                  ? 'bg-yellow-50 border-yellow-500'
                  : 'bg-blue-50 border-blue-500'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <span className="text-lg">{getIssueIcon(issue.type)}</span>
                  <div>
                    <p className="font-medium text-gray-800">{issue.message}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Rule: {issue.rule}
                    </p>
                  </div>
                </div>
                {issue.element && (
                  <button
                    onClick={() => scrollToIssue(issue.element)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Locate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {issues.length === 0 && !isScanning && (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">✅</div>
          <p className="text-gray-600 text-lg">No accessibility issues found!</p>
        </div>
      )}
    </div>
  );
};

export default AccessibilityAuditor;