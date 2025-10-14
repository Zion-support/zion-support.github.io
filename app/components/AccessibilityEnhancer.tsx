import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal');

  useEffect(() => {
    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        .focus-visible:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
    };

    // Apply accessibility settings
    const root = document.documentElement;
    
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'large' ? '1.2' : 
      fontSize === 'extra-large' ? '1.4' : 
      fontSize === 'small' ? '0.9' : '1'
    );

    addFocusStyles();
    addAriaLandmarks();
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Accessibility controls
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    announceToScreenReader(`High contrast mode ${!isHighContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    announceToScreenReader(`Reduced motion ${!isReducedMotion ? 'enabled' : 'disabled'}`);
  };

  const changeFontSize = (size: 'small' | 'normal' | 'large' | 'extra-large') => {
    setFontSize(size);
    announceToScreenReader(`Font size changed to ${size}`);
  };

  return (
    <div className="accessibility-enhancer">
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
        <h3 className="text-sm font-semibold mb-2">Accessibility Options</h3>
        
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={toggleHighContrast}
              className="rounded"
            />
            <span className="text-sm">High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isReducedMotion}
              onChange={toggleReducedMotion}
              className="rounded"
            />
            <span className="text-sm">Reduce Motion</span>
          </label>
          
          <div className="space-y-1">
            <span className="text-sm font-medium">Font Size:</span>
            <div className="flex space-x-1">
              {(['small', 'normal', 'large', 'extra-large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => changeFontSize(size)}
                  className={`px-2 py-1 text-xs rounded ${
                    fontSize === size 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Main content */}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <style>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
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
        
        .focus-visible:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default AccessibilityEnhancer;