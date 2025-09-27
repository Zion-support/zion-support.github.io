import React, { useState, useEffect } from 'react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  rule: string;
}

interface AccessibilityAuditorProps {
  onIssuesFound?: (issues: AccessibilityIssue[]) => void;
  autoScan?: boolean;
}

export const AccessibilityAuditor: React.FC<AccessibilityAuditorProps> = ({
  onIssuesFound,
  autoScan = true
}) => {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const scanForIssues = (): AccessibilityIssue[] => {
    const foundIssues: AccessibilityIssue[] = [];

    // Check for missing alt attributes on images
    const images = document.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
      if (!img.alt) {
        foundIssues.push({
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
        foundIssues.push({
          type: "error",
          message: "Form control missing label",
          element: input,
          rule: "label"
        });
      }
    });

    // Check heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading: HTMLHeadingElement) => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      if (currentLevel > previousLevel + 1) {
        foundIssues.push({
          type: "warning",
          message: `Heading level skipped from h${previousLevel} to h${currentLevel}`,
          element: heading,
          rule: "heading-order"
        });
      }
      previousLevel = currentLevel;
    });

    // Check for missing focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach((element: HTMLElement) => {
      const computedStyle = window.getComputedStyle(element);
      if (computedStyle.outline === 'none' && !computedStyle.boxShadow) {
        foundIssues.push({
          type: "warning",
          message: "Focusable element may not have visible focus indicator",
          element: element,
          rule: "focus-visible"
        });
      }
    });

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element: HTMLElement) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      if (color === backgroundColor) {
        foundIssues.push({
          type: "error",
          message: "Text color matches background color",
          element: element,
          rule: "color-contrast"
        });
      }
    });

    return foundIssues;
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const foundIssues = scanForIssues();
      setIssues(foundIssues);
      onIssuesFound?.(foundIssues);
      setIsScanning(false);
    }, 100);
  };

  useEffect(() => {
    if (autoScan) {
      handleScan();
    }
  }, [autoScan]);

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📝';
    }
  };

  const getIssueColor = (type: string) => {
    switch (type) {
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'info':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Accessibility Audit</h3>
        <button
          onClick={handleScan}
          disabled={isScanning}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isScanning ? 'Scanning...' : 'Scan Again'}
        </button>
      </div>

      <div className="space-y-2">
        {issues.length === 0 ? (
          <p className="text-green-600 text-sm">✅ No accessibility issues found!</p>
        ) : (
          issues.map((issue, index) => (
            <div
              key={index}
              className={`p-3 rounded-md border ${getIssueColor(issue.type)}`}
            >
              <div className="flex items-start gap-2">
                <span className="text-sm">{getIssueIcon(issue.type)}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{issue.message}</p>
                  <p className="text-xs opacity-75">Rule: {issue.rule}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {issues.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Found {issues.length} accessibility {issues.length === 1 ? 'issue' : 'issues'}
        </div>
      )}
    </div>
  );
};

export default AccessibilityAuditor;