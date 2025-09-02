'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityMetrics {
  altTextMissing: number;
  headingStructure: boolean;
  colorContrast: boolean;
  focusManagement: boolean;
  keyboardNavigation: boolean;
  ariaLabels: number;
  formLabels: number;
}

const AccessibilityEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<AccessibilityMetrics>({
    altTextMissing: 0,
    headingStructure: false,
    colorContrast: false,
    focusManagement: false,
    keyboardNavigation: false,
    ariaLabels: 0,
    formLabels: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [issues, setIssues] = useState<string[]>([]);

  // Only show in development or when explicitly enabled
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' || process.env['NEXT_PUBLIC_SHOW_ACCESSIBILITY'] === 'true') {
      setIsVisible(true);
    }
  }, []);

  // Check for missing alt text
  const checkAltText = useCallback(() => {
    const images = document.querySelectorAll('img');
    let missingAlt = 0;
    
    images.forEach(img => {
      if (!img.alt || img.alt.trim() === '') {
        missingAlt++;
      }
    });
    
    return missingAlt;
  }, []);

  // Check heading structure
  const checkHeadingStructure = useCallback(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let isValid = true;
    let previousLevel = 0;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        isValid = false;
      }
      previousLevel = level;
    });
    
    return isValid;
  }, []);

  // Check color contrast (simplified)
  const checkColorContrast = useCallback(() => {
    // This is a simplified check - in a real implementation, you'd use a library like color-contrast
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    let hasGoodContrast = true;
    
    textElements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Simple check for high contrast colors
      if (color === 'rgb(0, 0, 0)' && backgroundColor === 'rgb(255, 255, 255)') {
        // Good contrast
      } else if (color === 'rgb(255, 255, 255)' && backgroundColor === 'rgb(0, 0, 0)') {
        // Good contrast
      } else {
        // This is simplified - real implementation would calculate actual contrast ratios
        hasGoodContrast = false;
      }
    });
    
    return hasGoodContrast;
  }, []);

  // Check focus management
  const checkFocusManagement = useCallback(() => {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    let hasFocusManagement = true;
    
    focusableElements.forEach(element => {
      if (element.getAttribute('tabindex') === '-1' && !element.hasAttribute('aria-hidden')) {
        // This might be intentional, but we'll flag it
        hasFocusManagement = false;
      }
    });
    
    return hasFocusManagement;
  }, []);

  // Check keyboard navigation
  const checkKeyboardNavigation = useCallback(() => {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    let hasKeyboardSupport = true;
    
    interactiveElements.forEach(element => {
      if (element.getAttribute('tabindex') === '-1') {
        hasKeyboardSupport = false;
      }
    });
    
    return hasKeyboardSupport;
  }, []);

  // Check ARIA labels
  const checkAriaLabels = useCallback(() => {
    const elementsWithAria = document.querySelectorAll('[aria-label], [aria-labelledby], [aria-describedby]');
    return elementsWithAria.length;
  }, []);

  // Check form labels
  const checkFormLabels = useCallback(() => {
    const formInputs = document.querySelectorAll('input, textarea, select');
    let labeledInputs = 0;
    
    formInputs.forEach(input => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (id && document.querySelector(`label[for="${id}"]`)) {
        labeledInputs++;
      } else if (ariaLabel || ariaLabelledBy) {
        labeledInputs++;
      }
    });
    
    return labeledInputs;
  }, []);

  // Run accessibility checks
  const runAccessibilityChecks = useCallback(() => {
    const newMetrics: AccessibilityMetrics = {
      altTextMissing: checkAltText(),
      headingStructure: checkHeadingStructure(),
      colorContrast: checkColorContrast(),
      focusManagement: checkFocusManagement(),
      keyboardNavigation: checkKeyboardNavigation(),
      ariaLabels: checkAriaLabels(),
      formLabels: checkFormLabels(),
    };

    setMetrics(newMetrics);

    // Generate issues list
    const newIssues: string[] = [];
    
    if (newMetrics.altTextMissing > 0) {
      newIssues.push(`${newMetrics.altTextMissing} images missing alt text`);
    }
    
    if (!newMetrics.headingStructure) {
      newIssues.push('Heading structure is not properly ordered');
    }
    
    if (!newMetrics.colorContrast) {
      newIssues.push('Some text may have insufficient color contrast');
    }
    
    if (!newMetrics.focusManagement) {
      newIssues.push('Focus management could be improved');
    }
    
    if (!newMetrics.keyboardNavigation) {
      newIssues.push('Keyboard navigation support needs improvement');
    }
    
    setIssues(newIssues);
  }, [
    checkAltText,
    checkHeadingStructure,
    checkColorContrast,
    checkFocusManagement,
    checkKeyboardNavigation,
    checkAriaLabels,
    checkFormLabels,
  ]);

  // Run checks on mount and when DOM changes
  useEffect(() => {
    if (!isVisible) return;

    runAccessibilityChecks();

    // Run checks when DOM changes
    const observer = new MutationObserver(() => {
      runAccessibilityChecks();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['alt', 'aria-label', 'aria-labelledby', 'tabindex'],
    });

    return () => observer.disconnect();
  }, [isVisible, runAccessibilityChecks]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible) return null;

  const getScoreColor = (value: boolean | number, type: 'boolean' | 'number') => {
    if (type === 'boolean') {
      return value ? 'text-green-500' : 'text-red-500';
    }
    if (type === 'number') {
      return (value as number) > 0 ? 'text-green-500' : 'text-red-500';
    }
    return 'text-gray-500';
  };

  const getScoreText = (value: boolean | number, type: 'boolean' | 'number') => {
    if (type === 'boolean') {
      return value ? 'Good' : 'Needs Improvement';
    }
    if (type === 'number') {
      return (value as number) > 0 ? 'Good' : 'Needs Improvement';
    }
    return 'Unknown';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Accessibility Metrics</h3>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Alt Text:</span>
          <span className={getScoreColor(metrics.altTextMissing, 'number')}>
            {metrics.altTextMissing === 0 ? 'All Good' : `${metrics.altTextMissing} Missing`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Heading Structure:</span>
          <span className={getScoreColor(metrics.headingStructure, 'boolean')}>
            {getScoreText(metrics.headingStructure, 'boolean')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Color Contrast:</span>
          <span className={getScoreColor(metrics.colorContrast, 'boolean')}>
            {getScoreText(metrics.colorContrast, 'boolean')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Focus Management:</span>
          <span className={getScoreColor(metrics.focusManagement, 'boolean')}>
            {getScoreText(metrics.focusManagement, 'boolean')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Keyboard Nav:</span>
          <span className={getScoreColor(metrics.keyboardNavigation, 'boolean')}>
            {getScoreText(metrics.keyboardNavigation, 'boolean')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>ARIA Labels:</span>
          <span className="text-blue-500">
            {metrics.ariaLabels} found
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Form Labels:</span>
          <span className="text-blue-500">
            {metrics.formLabels} labeled
          </span>
        </div>
      </div>
      
      {issues.length > 0 && (
        <div className="mt-3 pt-2 border-t border-gray-200">
          <div className="text-xs text-red-600">
            <div className="font-semibold mb-1">Issues Found:</div>
            {issues.map((issue, index) => (
              <div key={index} className="mb-1">• {issue}</div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-3 pt-2 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Overall Score: {(() => {
            const scores = [
              metrics.altTextMissing === 0,
              metrics.headingStructure,
              metrics.colorContrast,
              metrics.focusManagement,
              metrics.keyboardNavigation,
            ];
            
            const goodCount = scores.filter(score => score).length;
            const totalCount = scores.length;
            
            if (goodCount === totalCount) return 'Excellent';
            if (goodCount >= totalCount * 0.8) return 'Good';
            if (goodCount >= totalCount * 0.6) return 'Needs Improvement';
            return 'Poor';
          })()}
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;