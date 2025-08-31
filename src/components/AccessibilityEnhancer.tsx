import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showIssues?: boolean;
  autoFix?: boolean;
}

interface AccessibilityIssue {
  type: 'missing-alt' | 'missing-label' | 'missing-aria' | 'contrast' | 'keyboard';
  element: HTMLElement;
  message: string;
  severity: 'low' | 'medium' | 'high';
}

export default function AccessibilityEnhancer({
  enabled = true,
  showIssues = false,
  autoFix = true
}: AccessibilityEnhancerProps) {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [keyboardMode, setKeyboardMode] = useState(false);

  // Scan for accessibility issues
  const scanForIssues = useCallback(() => {
    if (!enabled) return;

    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];

    try {
      // Check for images without alt text
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          newIssues.push({
            type: 'missing-alt',
            element: img,
            message: 'Image missing alt text or aria-label',
            severity: 'medium'
          });
        }
      });

      // Check for form inputs without labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        const id = input.id;
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledBy = input.getAttribute('aria-labelledby');
        
        if (!label && !ariaLabel && !ariaLabelledBy) {
          newIssues.push({
            type: 'missing-label',
            element: input as HTMLElement,
            message: 'Form input missing label or aria-label',
            severity: 'high'
          });
        }
      });

      // Check for interactive elements without ARIA attributes
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], [tabindex]');
      interactiveElements.forEach(element => {
        if (element instanceof HTMLElement) {
          const hasAriaLabel = element.getAttribute('aria-label');
          const hasAriaLabelledBy = element.getAttribute('aria-labelledby');
          const hasTextContent = element.textContent?.trim();
          
          if (!hasAriaLabel && !hasAriaLabelledBy && !hasTextContent) {
            newIssues.push({
              type: 'missing-aria',
              element,
              message: 'Interactive element missing accessible name',
              severity: 'high'
            });
          }
        }
      });

      // Check for keyboard navigation issues
      const focusableElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])');
      focusableElements.forEach(element => {
        if (element instanceof HTMLElement) {
          const tabIndex = element.getAttribute('tabindex');
          if (tabIndex && parseInt(tabIndex) > 0) {
            newIssues.push({
              type: 'keyboard',
              element,
              message: 'Element with positive tabindex can cause keyboard navigation issues',
              severity: 'medium'
            });
          }
        }
      });

    } catch (error) {
      console.warn('Accessibility scanning failed:', error);
    }

    setIssues(newIssues);
    setIsScanning(false);
  }, [enabled]);

  // Auto-fix accessibility issues
  const fixIssues = useCallback(() => {
    if (!autoFix) return;

    issues.forEach(issue => {
      try {
        switch (issue.type) {
          case 'missing-alt':
            if (issue.element instanceof HTMLImageElement) {
              // Generate descriptive alt text based on image context
              const context = issue.element.getAttribute('data-context') || 'image';
              issue.element.alt = `Zion Tech Group ${context}`;
            }
            break;

          case 'missing-label':
            if (issue.element instanceof HTMLInputElement || issue.element instanceof HTMLTextAreaElement) {
              // Add aria-label based on placeholder or type
              const placeholder = issue.element.placeholder;
              const type = issue.element.type;
              if (placeholder) {
                issue.element.setAttribute('aria-label', placeholder);
              } else if (type) {
                issue.element.setAttribute('aria-label', `${type} input`);
              }
            }
            break;

          case 'missing-aria':
            // Add aria-label based on element context
            const context = issue.element.getAttribute('data-context') || 'element';
            issue.element.setAttribute('aria-label', `Zion Tech Group ${context}`);
            break;

          case 'keyboard':
            // Remove problematic tabindex
            issue.element.removeAttribute('tabindex');
            break;
        }
      } catch (error) {
        console.warn('Failed to fix accessibility issue:', error);
      }
    });

    // Re-scan after fixing
    setTimeout(scanForIssues, 100);
  }, [autoFix, issues, scanForIssues]);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enabled) return;

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content landmark
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Enhanced focus management
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        setKeyboardMode(true);
      }
    });

    document.addEventListener('mousedown', () => {
      setKeyboardMode(false);
    });

    // Add focus indicators for keyboard users
    if (keyboardMode) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }
  }, [enabled, keyboardMode]);

  // Add ARIA landmarks
  const addAriaLandmarks = useCallback(() => {
    if (!enabled) return;

    // Add navigation landmark
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add banner landmark
    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    // Add contentinfo landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Add complementary landmarks for sidebars
    const sidebars = document.querySelectorAll('[class*="sidebar"], [class*="aside"]');
    sidebars.forEach(sidebar => {
      if (sidebar instanceof HTMLElement && !sidebar.getAttribute('role')) {
        sidebar.setAttribute('role', 'complementary');
        sidebar.setAttribute('aria-label', 'Additional information');
      }
    });
  }, [enabled]);

  // Initialize accessibility enhancements
  useEffect(() => {
    if (!enabled) return;

    // Run initial scan
    scanForIssues();

    // Enhance keyboard navigation
    enhanceKeyboardNavigation();

    // Add ARIA landmarks
    addAriaLandmarks();

    // Set up mutation observer for dynamic content
    const observer = new MutationObserver(() => {
      setTimeout(() => {
        scanForIssues();
        addAriaLandmarks();
      }, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [enabled, scanForIssues, enhanceKeyboardNavigation, addAriaLandmarks]);

  // Auto-fix issues when they're detected
  useEffect(() => {
    if (autoFix && issues.length > 0) {
      fixIssues();
    }
  }, [autoFix, issues, fixIssues]);

  if (!enabled) return null;

  return (
    <>
      {showIssues && (
        <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-w-sm max-h-96 overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Accessibility Issues ({issues.length})
          </h3>
          {isScanning && (
            <div className="text-xs text-blue-600 dark:text-blue-400 mb-2">
              Scanning...
            </div>
          )}
          {issues.length === 0 && !isScanning && (
            <div className="text-xs text-green-600 dark:text-green-400">
              No accessibility issues found!
            </div>
          )}
          {issues.map((issue, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-50 dark:bg-gray-700 rounded text-xs">
              <div className={`inline-block px-2 py-1 rounded text-xs text-white mb-1 ${
                issue.severity === 'high' ? 'bg-red-500' :
                issue.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
              }`}>
                {issue.severity}
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {issue.message}
              </div>
            </div>
          ))}
          {issues.length > 0 && (
            <button
              onClick={fixIssues}
              className="w-full mt-2 px-3 py-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
            >
              Auto-fix Issues
            </button>
          )}
        </div>
      )}
      
      {/* Keyboard navigation indicator */}
      {keyboardMode && (
        <div className="fixed top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs z-50">
          ⌨️ Keyboard Navigation
        </div>
      )}
    </>
  );
}