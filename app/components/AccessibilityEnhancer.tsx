import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.zIndex = '9999';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Focus management
    const manageFocus = () => {
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    // Keyboard navigation
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
      
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    // Initialize accessibility features
    addSkipLink();
    manageFocus();
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, []);

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Apply font size changes
    document.body.style.fontSize = fontSize === 'large' ? '1.125rem' : fontSize === 'small' ? '0.875rem' : '1rem';
  }, [fontSize]);

  useEffect(() => {
    // Apply reduced motion
    if (isReducedMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }, [isReducedMotion]);

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-600">
          <h3 className="text-white text-sm font-medium mb-3">Accessibility</h3>
          
          <div className="space-y-2">
            <label className="flex items-center text-white text-sm">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={(e) => setIsHighContrast(e.target.checked)}
                className="mr-2"
              />
              High Contrast
            </label>
            
            <div className="flex items-center text-white text-sm">
              <span className="mr-2">Font Size:</span>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="bg-slate-700 text-white text-sm rounded px-2 py-1"
              >
                <option value="small">Small</option>
                <option value="normal">Normal</option>
                <option value="large">Large</option>
              </select>
            </div>
            
            <label className="flex items-center text-white text-sm">
              <input
                type="checkbox"
                checked={isReducedMotion}
                onChange={(e) => setIsReducedMotion(e.target.checked)}
                className="mr-2"
              />
              Reduce Motion
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;