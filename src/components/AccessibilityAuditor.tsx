import React from 'react';

interface AccessibilityIssue {
  type: 'error' | 'warning';
  message: string;
  element?: HTMLElement;
  rule?: string;
}

interface AccessibilityAuditorProps {
  onIssuesFound?: (issues: AccessibilityIssue[]) => void;
}

export const AccessibilityAuditor: React.FC<AccessibilityAuditorProps> = ({ onIssuesFound }) => {
  const auditAccessibility = React.useCallback(() => {
    const issues: AccessibilityIssue[] = [];
    
    // Basic accessibility checks
    const images = document.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
      if (!img.alt) {
        issues.push({
          type: 'error',
          message: 'Image missing alt attribute',
          element: img,
          rule: 'alt-text'
        });
      }
    });

    if (onIssuesFound) {
      onIssuesFound(issues);
    }
  }, [onIssuesFound]);

  React.useEffect(() => {
    auditAccessibility();
  }, [auditAccessibility]);

  return null;
};

export default AccessibilityAuditor;