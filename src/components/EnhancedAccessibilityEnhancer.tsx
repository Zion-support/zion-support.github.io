import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  severity: 'high' | 'medium' | 'low';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showIssues?: boolean;
  autoFix?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showIssues = false,
  autoFix = true
}) => {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Keyboard navigation enhancement
  const enhanceKeyboardNavigation = useCallback(() => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (element instanceof HTMLElement) {
            element.click();
          }
        }
      });

      // Add focus indicators
      element.addEventListener('focus', () => {
        setCurrentFocus(element as HTMLElement);
        element.classList.add('focus-visible');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });
  }, []);

  // ARIA improvements
  const enhanceARIA = useCallback(() => {
    // Add missing alt attributes to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      if (img instanceof HTMLImageElement) {
        const filename = img.src.split('/').pop() || '';
        const altText = filename.replace(/\.(jpg|jpeg|png|gif|svg)$/i, '').replace(/[-_]/g, ' ');
        img.alt = altText || 'Image';
      }
    });

    // Add missing labels to form inputs
    const inputs = document.querySelectorAll('input:not([id]), textarea:not([id]), select:not([id])');
    inputs.forEach((input, index) => {
      if (input instanceof HTMLElement) {
        const id = `input-${index}-${Date.now()}`;
        input.id = id;
        
        // Create label if none exists
        const existingLabel = document.querySelector(`label[for="${id}"]`);
        if (!existingLabel) {
          const label = document.createElement('label');
          label.htmlFor = id;
          label.textContent = input.getAttribute('placeholder') || input.getAttribute('name') || 'Input field';
          input.parentNode?.insertBefore(label, input);
        }
      }
    });

    // Add missing button types
    const buttons = document.querySelectorAll('button:not([type])');
    buttons.forEach((button) => {
      if (button instanceof HTMLButtonElement) {
        button.type = 'button';
      }
    });

    // Add missing table headers
    const tables = document.querySelectorAll('table');
    tables.forEach((table) => {
      const headers = table.querySelectorAll('th');
      if (headers.length === 0) {
        const firstRow = table.querySelector('tr');
        if (firstRow) {
          const cells = firstRow.querySelectorAll('td');
          cells.forEach((cell) => {
            const th = document.createElement('th');
            th.textContent = cell.textContent || 'Header';
            cell.parentNode?.replaceChild(th, cell);
          });
        }
      }
    });
  }, []);

  // Color contrast enhancement
  const enhanceColorContrast = useCallback(() => {
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const style = window.getComputedStyle(element);
        const backgroundColor = style.backgroundColor;
        const color = style.color;
        
        // Simple contrast check (this is a basic implementation)
        if (backgroundColor && color) {
          const bg = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          const fg = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          
          if (bg && fg) {
            const bgLuminance = (parseInt(bg[1]) * 0.299 + parseInt(bg[2]) * 0.587 + parseInt(bg[3]) * 0.114) / 255;
            const fgLuminance = (parseInt(fg[1]) * 0.299 + parseInt(fg[2]) * 0.587 + parseInt(fg[3]) * 0.114) / 255;
            const contrast = Math.max(bgLuminance, fgLuminance) / Math.min(bgLuminance, fgLuminance);
            
            if (contrast < 4.5) {
              element.style.border = '2px solid #ff0000';
              element.setAttribute('data-low-contrast', 'true');
            }
          }
        }
      }
    });
  }, []);

  // Screen reader enhancements
  const enhanceScreenReaderSupport = useCallback(() => {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
    `;
    
    if (!document.querySelector('.skip-link')) {
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    
    if (!document.querySelector('[aria-live]')) {
      document.body.appendChild(liveRegion);
    }

    // Add landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  // Accessibility monitoring
  const monitorAccessibility = useCallback(() => {
    const newIssues: AccessibilityIssue[] = [];

    // Check for missing alt attributes
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    imagesWithoutAlt.forEach((img) => {
      newIssues.push({
        id: `missing-alt-${Date.now()}`,
        type: 'error',
        message: 'Image missing alt attribute',
        element: img as HTMLElement,
        severity: 'high'
      });
    });

    // Check for missing form labels
    const inputsWithoutLabels = document.querySelectorAll('input:not([id]), textarea:not([id]), select:not([id])');
    inputsWithoutLabels.forEach((input) => {
      newIssues.push({
        id: `missing-label-${Date.now()}`,
        type: 'error',
        message: 'Form input missing label',
        element: input as HTMLElement,
        severity: 'high'
      });
    });

    // Check for missing button types
    const buttonsWithoutType = document.querySelectorAll('button:not([type])');
    buttonsWithoutType.forEach((button) => {
      newIssues.push({
        id: `missing-button-type-${Date.now()}`,
        type: 'warning',
        message: 'Button missing type attribute',
        element: button as HTMLElement,
        severity: 'medium'
      });
    });

    // Check for missing table headers
    const tablesWithoutHeaders = document.querySelectorAll('table:not(:has(th))');
    tablesWithoutHeaders.forEach((table) => {
      newIssues.push({
        id: `missing-table-headers-${Date.now()}`,
        type: 'warning',
        message: 'Table missing header row',
        element: table as HTMLElement,
        severity: 'medium'
      });
    });

    setIssues(newIssues);
  }, []);

  // Main enhancement function
  const runEnhancements = useCallback(async () => {
    if (!enabled) return;
    
    setIsEnhancing(true);
    
    try {
      // Run enhancements in parallel
      await Promise.all([
        enhanceKeyboardNavigation(),
        enhanceARIA(),
        enhanceColorContrast(),
        enhanceScreenReaderSupport()
      ]);
      
      // Monitor accessibility after enhancements
      monitorAccessibility();
      
    } catch (error) {
      console.warn('Accessibility enhancement failed:', error);
    } finally {
      setIsEnhancing(false);
    }
  }, [enabled, enhanceKeyboardNavigation, enhanceARIA, enhanceColorContrast, enhanceScreenReaderSupport, monitorAccessibility]);

  useEffect(() => {
    if (enabled) {
      runEnhancements();
    }
  }, [enabled, runEnhancements]);

  // Auto-fix issues if enabled
  useEffect(() => {
    if (autoFix && issues.length > 0) {
      issues.forEach((issue) => {
        if (issue.element && issue.severity === 'high') {
          // Auto-fix high severity issues
          if (issue.message.includes('alt attribute')) {
            const img = issue.element as HTMLImageElement;
            const filename = img.src.split('/').pop() || '';
            const altText = filename.replace(/\.(jpg|jpeg|png|gif|svg)$/i, '').replace(/[-_]/g, ' ');
            img.alt = altText || 'Image';
          }
        }
      });
    }
  }, [autoFix, issues]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility issues overlay */}
      {showIssues && issues.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-4 bg-red-600 text-white p-4 rounded-lg z-50 max-w-sm"
        >
          <h3 className="font-bold mb-2">Accessibility Issues ({issues.length})</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {issues.map((issue) => (
              <div key={issue.id} className="text-sm">
                <div className={`font-semibold ${
                  issue.severity === 'high' ? 'text-red-200' : 
                  issue.severity === 'medium' ? 'text-yellow-200' : 'text-blue-200'
                }`}>
                  {issue.severity.toUpperCase()}: {issue.message}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Enhancement status indicator */}
      {isEnhancing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-4 left-4 bg-green-500 text-white px-3 py-2 rounded-lg z-50"
        >
          Enhancing accessibility...
        </motion.div>
      )}

      {/* Focus indicator */}
      {currentFocus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed pointer-events-none z-50"
          style={{
            top: currentFocus.offsetTop - 2,
            left: currentFocus.offsetLeft - 2,
            width: currentFocus.offsetWidth + 4,
            height: currentFocus.offsetHeight + 4,
            border: '2px solid #3b82f6',
            borderRadius: '4px',
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.3)'
          }}
        />
      )}
    </>
  );
};