import React, { useState, useEffect, useCallback } from 'react';

interface AccessibilityAuditorProps {
  children: React.ReactNode;
}

interface AccessibilityIssue {
  type: 'missing-alt' | 'missing-label' | 'low-contrast' | 'missing-heading' | 'keyboard-navigation';
  element: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
}

export const AccessibilityAuditor: React.FC<AccessibilityAuditorProps> = ({ children }) => {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isAuditing, setIsAuditing] = useState(false);

  const auditAccessibility = useCallback(() => {
    const newIssues: AccessibilityIssue[] = [];

    // Check for images without alt text
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        newIssues.push({
          type: 'missing-alt',
          element: img.tagName.toLowerCase(),
          message: 'Image missing alt text',
          severity: 'high'
        });
      }
    });

    // Check for form inputs without labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (!label) {
          newIssues.push({
            type: 'missing-label',
            element: input.tagName.toLowerCase(),
            message: 'Form input missing label',
            severity: 'high'
          });
        }
      }
    });

    // Check for heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        newIssues.push({
          type: 'missing-heading',
          element: heading.tagName.toLowerCase(),
          message: 'Heading hierarchy skipped',
          severity: 'medium'
        });
      }
      previousLevel = level;
    });

    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    interactiveElements.forEach(element => {
      if (!element.getAttribute('tabindex') && 
          element.getAttribute('tabindex') !== '0' &&
          !element.hasAttribute('disabled')) {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden') {
          newIssues.push({
            type: 'keyboard-navigation',
            element: element.tagName.toLowerCase(),
            message: 'Interactive element may not be keyboard accessible',
            severity: 'medium'
          });
        }
      }
    });

    setIssues(newIssues);
  }, []);

  useEffect(() => {
    if (isAuditing) {
      auditAccessibility();
    }
  }, [isAuditing, auditAccessibility]);

  const toggleAudit = () => {
    setIsAuditing(!isAuditing);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="accessibility-auditor">
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-sm">Accessibility Audit</h3>
            <button
              onClick={toggleAudit}
              className={`px-2 py-1 text-xs rounded ${
                isAuditing ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
              }`}
            >
              {isAuditing ? 'Stop' : 'Start'} Audit
            </button>
          </div>
          {isAuditing && (
            <div className="text-xs">
              <div className="mb-2">Issues found: {issues.length}</div>
              {issues.slice(0, 5).map((issue, index) => (
                <div key={index} className={`p-2 rounded mb-1 ${getSeverityColor(issue.severity)}`}>
                  <div className="font-semibold">{issue.type}</div>
                  <div>{issue.message}</div>
                  <div className="text-xs opacity-75">{issue.element}</div>
                </div>
              ))}
              {issues.length > 5 && (
                <div className="text-xs text-gray-500">
                  ... and {issues.length - 5} more issues
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccessibilityAuditor;