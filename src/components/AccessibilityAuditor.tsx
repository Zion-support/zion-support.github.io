import React, { useState, useEffect } from 'react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element: HTMLElement;
  rule: string;
}

interface AccessibilityAuditorProps {
  onIssuesFound?: (issues: AccessibilityIssue[]) => void;
  autoScan?: boolean;
  className?: string;
}

export const AccessibilityAuditor: React.FC<AccessibilityAuditorProps> = ({
  onIssuesFound,
  autoScan = true,
  className = ''
}) => {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const scanForAccessibilityIssues = (): AccessibilityIssue[] => {
    if (typeof window === 'undefined') {
      return [];
    }

    const issues: AccessibilityIssue[] = [];

    // Check for missing alt attributes on images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.getAttribute('alt') && !img.getAttribute('aria-label')) {
        issues.push({
          type: 'error',
          message: 'Image missing alt attribute',
          element: img as HTMLElement,
          rule: 'img-alt'
        });
      }
    });

    // Check for missing labels on form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (!label) {
          issues.push({
            type: 'error',
            message: 'Form input missing label',
            element: input as HTMLElement,
            rule: 'label'
          });
        }
      }
    });

    // Check for missing heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        issues.push({
          type: 'warning',
          message: `Heading level ${level} skipped after level ${lastLevel}`,
          element: heading as HTMLElement,
          rule: 'heading-order'
        });
      }
      lastLevel = level;
    });

    // Check for missing main landmark
    const main = document.querySelector('main');
    if (!main) {
      issues.push({
        type: 'warning',
        message: 'Missing main landmark',
        element: document.body,
        rule: 'landmark-main'
      });
    }

    // Check for missing skip links
    const skipLinks = document.querySelectorAll('a[href^="#"]');
    const hasSkipLink = Array.from(skipLinks).some(link => 
      link.textContent?.toLowerCase().includes('skip') || 
      link.getAttribute('aria-label')?.toLowerCase().includes('skip')
    );
    
    if (!hasSkipLink) {
      issues.push({
        type: 'info',
        message: 'Consider adding skip links for keyboard navigation',
        element: document.body,
        rule: 'skip-link'
      });
    }

    // Check for color contrast issues (basic check)
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      if (color && backgroundColor && color !== backgroundColor) {
        // This is a simplified check - in a real implementation, you'd calculate actual contrast ratios
        if (color === backgroundColor) {
          issues.push({
            type: 'warning',
            message: 'Potential color contrast issue',
            element: element as HTMLElement,
            rule: 'color-contrast'
          });
        }
      }
    });

    return issues;
  };

  const handleScan = async () => {
    setIsScanning(true);
    try {
      const foundIssues = scanForAccessibilityIssues();
      setIssues(foundIssues);
      onIssuesFound?.(foundIssues);
    } catch (error) {
      console.error('Error scanning for accessibility issues:', error);
    } finally {
      setIsScanning(false);
    }
  };

  useEffect(() => {
    if (autoScan) {
      handleScan();
    }
  }, [autoScan]);

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📋';
    }
  };

  const getIssueColor = (type: string) => {
    switch (type) {
      case 'error': return 'text-red-600 bg-red-50 border-red-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className={`accessibility-auditor ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Accessibility Auditor
        </h3>
        <button
          onClick={handleScan}
          disabled={isScanning}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg text-sm font-medium transition-colors"
        >
          {isScanning ? 'Scanning...' : 'Scan Again'}
        </button>
      </div>

      <div className="space-y-3">
        {issues.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <div className="text-4xl mb-2">✅</div>
            <p>No accessibility issues found!</p>
          </div>
        ) : (
          issues.map((issue, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${getIssueColor(issue.type)}`}
            >
              <div className="flex items-start space-x-3">
                <span className="text-lg">{getIssueIcon(issue.type)}</span>
                <div className="flex-1">
                  <p className="font-medium">{issue.message}</p>
                  <p className="text-sm opacity-75">Rule: {issue.rule}</p>
                  {issue.element && (
                    <p className="text-xs opacity-60 mt-1">
                      Element: {issue.element.tagName.toLowerCase()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {issues.length > 0 && (
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Found {issues.length} accessibility {issues.length === 1 ? 'issue' : 'issues'}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccessibilityAuditor;