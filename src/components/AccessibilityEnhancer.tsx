import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityMetrics {
  contrastRatio: number;
  focusableElements: number;
  headingStructure: number;
  altTexts: number;
  ariaLabels: number;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: AccessibilityMetrics) => void;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showMetrics = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<AccessibilityMetrics>({
    contrastRatio: 0,
    focusableElements: 0,
    headingStructure: 0,
    altTexts: 0,
    ariaLabels: 0,
    keyboardNavigation: false
  });

  const [isVisible, setIsVisible] = useState(showMetrics);

  // Accessibility improvements
  const improveFocusManagement = useCallback(() => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only absolute top-0 left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, []);

  const improveColorContrast = useCallback(() => {
    // Add high contrast mode toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'High Contrast';
    toggle.className = 'fixed bottom-4 left-4 z-40 bg-gray-800 text-white p-2 rounded';
    toggle.onclick = () => {
      document.body.classList.toggle('high-contrast');
    };
    document.body.appendChild(toggle);

    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      
      .high-contrast * {
        border-color: currentColor !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const improveKeyboardNavigation = useCallback(() => {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Add keyboard navigation styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const addAriaLabels = useCallback(() => {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && button.textContent) {
        button.setAttribute('aria-label', button.textContent.trim());
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      if (!link.getAttribute('aria-label') && link.textContent) {
        link.setAttribute('aria-label', link.textContent.trim());
      }
    });
  }, []);

  const measureAccessibility = useCallback(() => {
    if (!enabled) return;

    // Count focusable elements
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ).length;

    // Count heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingStructure = headings.length;

    // Count alt texts
    const images = document.querySelectorAll('img');
    const altTexts = Array.from(images).filter(img => img.alt).length;

    // Count ARIA labels
    const ariaLabels = document.querySelectorAll('[aria-label]').length;

    // Check keyboard navigation
    const keyboardNavigation = document.body.classList.contains('keyboard-navigation');

    setMetrics(prev => ({
      ...prev,
      focusableElements,
      headingStructure,
      altTexts,
      ariaLabels,
      keyboardNavigation
    }));
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Apply accessibility improvements
    improveFocusManagement();
    improveColorContrast();
    improveKeyboardNavigation();
    addAriaLabels();

    // Start accessibility measurement
    const interval = setInterval(measureAccessibility, 1000);

    // Notify parent of metrics updates
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }

    return () => clearInterval(interval);
  }, [enabled, improveFocusManagement, improveColorContrast, improveKeyboardNavigation, addAriaLabels, measureAccessibility, onMetricsUpdate, metrics]);

  if (!enabled) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-lg min-w-[300px] max-w-[400px]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold">Accessibility Metrics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-300 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Focusable Elements:</span>
              <span className="text-green-400">{metrics.focusableElements}</span>
            </div>
            <div className="flex justify-between">
              <span>Heading Structure:</span>
              <span className="text-blue-400">{metrics.headingStructure}</span>
            </div>
            <div className="flex justify-between">
              <span>Alt Texts:</span>
              <span className="text-yellow-400">{metrics.altTexts}</span>
            </div>
            <div className="flex justify-between">
              <span>ARIA Labels:</span>
              <span className="text-purple-400">{metrics.ariaLabels}</span>
            </div>
            <div className="flex justify-between">
              <span>Keyboard Navigation:</span>
              <span className={metrics.keyboardNavigation ? 'text-green-400' : 'text-red-400'}>
                {metrics.keyboardNavigation ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-600">
            <div className="text-xs text-gray-400">
              Accessibility enhancements active
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityEnhancer;