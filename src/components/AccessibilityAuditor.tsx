import React, { useEffect, useState } from 'react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element: HTMLElement;
  rule: string;
}

export default function AccessibilityAuditor() {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const auditAccessibility = () => {
      const newIssues: AccessibilityIssue[] = [];

      // Check for images without alt text
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.getAttribute('alt')) {
          newIssues.push({
            type: 'error',
            message: 'Image missing alt attribute',
            element: img,
            rule: 'img-alt'
          });
        }
      });

      // Check for missing heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 0;
      headings.forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > lastLevel + 1) {
          newIssues.push({
            type: 'warning',
            message: `Heading level ${level} follows level ${lastLevel}`,
            element: heading as HTMLElement,
            rule: 'heading-order'
          });
        }
        lastLevel = level;
      });

      setIssues(newIssues);
    };

    // Run audit after component mounts
    setTimeout(auditAccessibility, 1000);

    // Show auditor after 2 seconds
    setTimeout(() => setIsVisible(true), 2000);
  }, []);

  if (!isVisible || issues.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="font-semibold text-gray-900 mb-2">Accessibility Issues</h3>
      <div className="space-y-2">
        {issues.slice(0, 3).map((issue, index) => (
          <div key={index} className={`text-sm p-2 rounded ${
            issue.type === 'error' ? 'bg-red-100 text-red-800' :
            issue.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {issue.message}
          </div>
        ))}
        {issues.length > 3 && (
          <div className="text-sm text-gray-500">
            +{issues.length - 3} more issues
          </div>
        )}
      </div>
    </div>
  );
}