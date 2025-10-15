<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
>>>>>>> cursor/analyze-improve-and-merge-code-b7b5

  useEffect(() => {
<<<<<<< HEAD
    // Add ARIA roles to semantic elements
    const addAriaRoles = () => {
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Add alt text to images without alt attributes
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `Image ${index + 1}`);
        }
      });
    };

    // Add focus management
    const addFocusManagement = () => {
      // Skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
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
        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      // Trap focus in modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement?.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement?.focus();
                e.preventDefault();
              }
            }
          }
        };

        modal.addEventListener('keydown', handleKeyDown);
      });
    };

    // Initialize accessibility enhancements
    addAriaRoles();
    addAltText();
    addFocusManagement();
    addKeyboardNavigation();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addAriaRoles();
      addAltText();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
=======
    // Check for high contrast mode
    const checkHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsHighContrast(e.matches);
      });
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsReducedMotion(e.matches);
      });
    };

    // Check for font size preference
    const checkFontSize = () => {
      const savedFontSize = localStorage.getItem('accessibility-font-size');
      if (savedFontSize) {
        setFontSize(parseInt(savedFontSize, 10));
      }
    };

    checkHighContrast();
    checkReducedMotion();
    checkFontSize();

    // Apply accessibility settings
    const applyAccessibilitySettings = () => {
      const root = document.documentElement;
      
      // High contrast mode
      if (isHighContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }
      
      // Reduced motion
      if (isReducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }
      
      // Font size
      root.style.fontSize = `${fontSize}px`;
    };

    applyAccessibilitySettings();

    // Keyboard navigation enhancement
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
          e.preventDefault();
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

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
>>>>>>> cursor/analyze-improve-and-merge-code-b7b5
    };
  }, [isHighContrast, isReducedMotion, fontSize]);

<<<<<<< HEAD
  return null;
=======
  // Font size controls
  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  };

  const resetFontSize = () => {
    setFontSize(16);
    localStorage.removeItem('accessibility-font-size');
  };

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50 bg-slate-800 rounded-lg p-4 shadow-lg border border-cyan-500/20">
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-semibold text-white mb-2">Accessibility</h3>
          
          {/* Font Size Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="w-8 h-8 bg-cyan-600 hover:bg-cyan-700 text-white rounded text-sm font-bold"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs text-gray-300 min-w-[2rem] text-center">
              {fontSize}px
            </span>
            <button
              onClick={increaseFontSize}
              className="w-8 h-8 bg-cyan-600 hover:bg-cyan-700 text-white rounded text-sm font-bold"
              aria-label="Increase font size"
            >
              A+
            </button>
            <button
              onClick={resetFontSize}
              className="w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded text-xs"
              aria-label="Reset font size"
            >
              ↺
            </button>
          </div>
          
          {/* High Contrast Toggle */}
          <button
            onClick={() => {
              const newState = !isHighContrast;
              setIsHighContrast(newState);
              if (newState) {
                document.documentElement.classList.add('high-contrast');
              } else {
                document.documentElement.classList.remove('high-contrast');
              }
            }}
            className={`px-3 py-1 text-xs rounded ${
              isHighContrast 
                ? 'bg-yellow-600 text-black' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'High Contrast ON' : 'High Contrast'}
          </button>
          
          {/* Reduced Motion Toggle */}
          <button
            onClick={() => {
              const newState = !isReducedMotion;
              setIsReducedMotion(newState);
              if (newState) {
                document.documentElement.classList.add('reduced-motion');
              } else {
                document.documentElement.classList.remove('reduced-motion');
              }
            }}
            className={`px-3 py-1 text-xs rounded ${
              isReducedMotion 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
            aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
          >
            {isReducedMotion ? 'Motion OFF' : 'Motion ON'}
          </button>
        </div>
      </div>
    </>
  );
>>>>>>> cursor/analyze-improve-and-merge-code-b7b5
};

export default AccessibilityEnhancer;