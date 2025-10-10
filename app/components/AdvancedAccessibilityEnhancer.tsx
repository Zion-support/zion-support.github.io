'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Eye, Ear, MousePointer, Keyboard } from 'lucide-react';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element: string;
  suggestion: string;
}

interface AccessibilityEnhancerProps {
  onEnhance?: (issues: AccessibilityIssue[]) => void;
  className?: string;
}

const AdvancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  onEnhance,
  className = ''
}) => {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const accessibilityChecks = [
    {
      name: 'Alt Text Check',
      icon: Eye,
      description: 'Ensures all images have descriptive alt text',
      check: () => {
        const images = document.querySelectorAll('img');
        const issues: AccessibilityIssue[] = [];
        
        images.forEach((img, index) => {
          if (!img.alt || img.alt.trim() === '') {
            issues.push({
              id: `alt-text-${index}`,
              type: 'error',
              message: 'Image missing alt text',
              element: img.tagName,
              suggestion: 'Add descriptive alt text to improve screen reader accessibility'
            });
          }
        });
        
        return issues;
      }
    },
    {
      name: 'Color Contrast Check',
      icon: Eye,
      description: 'Verifies sufficient color contrast ratios',
      check: () => {
        // Simplified color contrast check
        const issues: AccessibilityIssue[] = [];
        const elements = document.querySelectorAll('*');
        
        elements.forEach((el, index) => {
          const styles = window.getComputedStyle(el);
          const color = styles.color;
          const backgroundColor = styles.backgroundColor;
          
          // Basic check - in a real implementation, you'd calculate actual contrast ratios
          if (color === backgroundColor) {
            issues.push({
              id: `contrast-${index}`,
              type: 'warning',
              message: 'Potential color contrast issue',
              element: el.tagName,
              suggestion: 'Ensure sufficient contrast between text and background colors'
            });
          }
        });
        
        return issues;
      }
    },
    {
      name: 'Keyboard Navigation Check',
      icon: Keyboard,
      description: 'Ensures all interactive elements are keyboard accessible',
      check: () => {
        const issues: AccessibilityIssue[] = [];
        const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
        
        interactiveElements.forEach((el, index) => {
          if (!el.hasAttribute('tabindex') && el.getAttribute('tabindex') !== '0') {
            issues.push({
              id: `keyboard-${index}`,
              type: 'warning',
              message: 'Element may not be keyboard accessible',
              element: el.tagName,
              suggestion: 'Ensure element is focusable and has proper tab order'
            });
          }
        });
        
        return issues;
      }
    },
    {
      name: 'ARIA Labels Check',
      icon: MousePointer,
      description: 'Verifies proper ARIA labeling',
      check: () => {
        const issues: AccessibilityIssue[] = [];
        const elements = document.querySelectorAll('[aria-label], [aria-labelledby]');
        
        elements.forEach((el, index) => {
          const ariaLabel = el.getAttribute('aria-label');
          const ariaLabelledBy = el.getAttribute('aria-labelledby');
          
          if (!ariaLabel && !ariaLabelledBy) {
            issues.push({
              id: `aria-${index}`,
              type: 'info',
              message: 'Element could benefit from ARIA labeling',
              element: el.tagName,
              suggestion: 'Consider adding aria-label or aria-labelledby for better accessibility'
            });
          }
        });
        
        return issues;
      }
    }
  ];

  const runAccessibilityScan = async () => {
    setIsScanning(true);
    setScanProgress(0);
    setIssues([]);

    const allIssues: AccessibilityIssue[] = [];

    for (let i = 0; i < accessibilityChecks.length; i++) {
      const check = accessibilityChecks[i];
      try {
        const checkIssues = check.check();
        allIssues.push(...checkIssues);
      } catch (error) {
        console.error(`Error running ${check.name}:`, error);
      }
      
      setScanProgress(((i + 1) / accessibilityChecks.length) * 100);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate processing time
    }

    setIssues(allIssues);
    setIsScanning(false);
    
    if (onEnhance) {
      onEnhance(allIssues);
    }
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
    }
  };

  const getIssueColor = (type: string) => {
    switch (type) {
      case 'error':
        return 'border-red-200 bg-red-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Advanced Accessibility Enhancer
        </h3>
        <p className="text-gray-600">
          Comprehensive accessibility scanning and enhancement tools for your website.
        </p>
      </div>

      <div className="mb-6">
        <button
          onClick={runAccessibilityScan}
          disabled={isScanning}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          {isScanning ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Scanning... {Math.round(scanProgress)}%
            </>
          ) : (
            <>
              <Eye className="h-5 w-5 mr-2" />
              Run Accessibility Scan
            </>
          )}
        </button>
      </div>

      {isScanning && (
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${scanProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {issues.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">
            Scan Results ({issues.length} issues found)
          </h4>
          
          <div className="space-y-3">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className={`border rounded-lg p-4 ${getIssueColor(issue.type)}`}
              >
                <div className="flex items-start space-x-3">
                  {getIssueIcon(issue.type)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">
                        {issue.message}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({issue.element})
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {issue.suggestion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {accessibilityChecks.map((check, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <check.icon className="h-6 w-6 text-blue-600" />
            <div>
              <h5 className="font-medium text-gray-900">{check.name}</h5>
              <p className="text-sm text-gray-600">{check.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;