import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityFeatures {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  screenReaderMode: boolean;
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = false
}) => {
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicator: true,
    screenReaderMode: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Toggle accessibility features
  const toggleFeature = useCallback((feature: keyof AccessibilityFeatures) => {
    setFeatures(prev => {
      const newFeatures = { ...prev, [feature]: !prev[feature] };
      
      // Apply feature changes
      if (feature === 'highContrast') {
        document.documentElement.classList.toggle('high-contrast', newFeatures.highContrast);
      } else if (feature === 'largeText') {
        document.documentElement.classList.toggle('large-text', newFeatures.largeText);
      } else if (feature === 'reducedMotion') {
        document.documentElement.classList.toggle('reduced-motion', newFeatures.reducedMotion);
      } else if (feature === 'focusIndicator') {
        document.documentElement.classList.toggle('enhanced-focus', newFeatures.focusIndicator);
      }
      
      // Save to localStorage
      localStorage.setItem('accessibilityFeatures', JSON.stringify(newFeatures));
      
      return newFeatures;
    });
  }, []);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', (e) => {
      // Skip if user is typing in an input field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      let focusable = Array.from(document.querySelectorAll(focusableElements)) as HTMLElement[];
      let index = focusable.indexOf(document.activeElement as HTMLElement);

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation with visual feedback
          if (e.shiftKey) {
            if (index <= 0) index = focusable.length;
            index--;
          } else {
            if (index >= focusable.length - 1) index = -1;
            index++;
          }
          
          if (focusable[index]) {
            focusable[index].focus();
            // Add visual feedback
            focusable[index].classList.add('keyboard-focus');
            setTimeout(() => {
              focusable[index].classList.remove('keyboard-focus');
            }, 2000);
          }
          break;
          
        case 'Escape':
          // Close modals, dropdowns, etc.
          const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement && modal.style.display !== 'none') {
              modal.style.display = 'none';
              modal.setAttribute('aria-hidden', 'true');
            }
          });
          break;
          
        case 'Enter':
        case ' ':
          // Activate focused element
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.click();
          }
          break;
      }
    });
  }, []);

  // Enhanced focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus indicators to all focusable elements
    const addFocusIndicators = () => {
      const focusableElements = document.querySelectorAll(focusableElements);
      focusableElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.setAttribute('tabindex', '0');
          element.addEventListener('focus', () => {
            element.classList.add('enhanced-focus');
          });
          element.addEventListener('blur', () => {
            element.classList.remove('enhanced-focus');
          });
        }
      });
    };

    // Add focus indicators on DOM changes
    const observer = new MutationObserver(addFocusIndicators);
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Initial setup
    addFocusIndicators();
    
    return () => observer.disconnect();
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Enhanced ARIA labels
  const enhanceARIALabels = useCallback(() => {
    // Add missing ARIA labels to common elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (button instanceof HTMLButtonElement && button.textContent) {
        button.setAttribute('aria-label', button.textContent.trim());
      }
    });

    // Add role attributes to semantic elements
    const navs = document.querySelectorAll('nav:not([role])');
    navs.forEach(nav => nav.setAttribute('role', 'navigation'));

    const mains = document.querySelectorAll('main:not([role])');
    mains.forEach(main => main.setAttribute('role', 'main'));

    const asides = document.querySelectorAll('aside:not([role])');
    asides.forEach(aside => aside.setAttribute('role', 'complementary'));
  }, []);

  // Skip to main content link
  const addSkipLink = useCallback(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Load saved preferences
    const savedFeatures = localStorage.getItem('accessibilityFeatures');
    if (savedFeatures) {
      const parsed = JSON.parse(savedFeatures);
      setFeatures(parsed);
      
      // Apply saved features
      if (parsed.highContrast) document.documentElement.classList.add('high-contrast');
      if (parsed.largeText) document.documentElement.classList.add('large-text');
      if (parsed.reducedMotion) document.documentElement.classList.add('reduced-motion');
      if (parsed.focusIndicator) document.documentElement.classList.add('enhanced-focus');
    }

    // Enhance accessibility
    enhanceKeyboardNavigation();
    enhanceFocusManagement();
    enhanceARIALabels();
    addSkipLink();

    // Add CSS for accessibility features
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(1.5) brightness(1.2);
      }
      
      .large-text {
        font-size: 1.2em !important;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .enhanced-focus {
        outline: 3px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .keyboard-focus {
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5) !important;
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .skip-link:focus {
        position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 9999;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enabled, enhanceKeyboardNavigation, enhanceFocusManagement, enhanceARIALabels, addSkipLink]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Controls */}
      {showControls && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Accessibility controls"
            aria-expanded={isVisible}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>

          {isVisible && (
            <div className="absolute top-12 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 min-w-64">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Accessibility Options
              </h3>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={features.highContrast}
                    onChange={() => toggleFeature('highContrast')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={features.largeText}
                    onChange={() => toggleFeature('largeText')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={features.reducedMotion}
                    onChange={() => toggleFeature('reducedMotion')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={features.focusIndicator}
                    onChange={() => toggleFeature('focusIndicator')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Enhanced Focus</span>
                </label>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => announceToScreenReader('Accessibility options updated')}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Test Screen Reader
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
