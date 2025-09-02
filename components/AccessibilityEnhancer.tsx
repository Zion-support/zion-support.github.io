import React, { useState, useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Check for saved preferences
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const savedFontSize = localStorage.getItem('accessibility-font-size') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    // Add skip to main content link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 2px solid #2563eb;
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

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      // Add ARIA labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach(button => {
        const icon = button.querySelector('svg');
        if (icon && !button.textContent?.trim()) {
          const iconName = icon.getAttribute('data-icon') || 'button';
          button.setAttribute('aria-label', iconName);
        }
      });

      // Add ARIA labels to links
      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
          const href = link.getAttribute('href');
          if (href) {
            link.setAttribute('aria-label', `Navigate to ${href}`);
          }
        }
      });
    };

    // Enhance color contrast
    const enhanceColorContrast = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Ensure minimum contrast ratios */
        .text-gray-600 {
          color: #4b5563 !important;
        }
        
        .text-gray-700 {
          color: #374151 !important;
        }
        
        .text-gray-800 {
          color: #1f2937 !important;
        }
        
        .text-gray-900 {
          color: #111827 !important;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-white {
            background-color: #ffffff !important;
            border: 1px solid #000000 !important;
          }
          
          .text-gray-600 {
            color: #000000 !important;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize accessibility enhancements
    addSkipLink();
    enhanceFocusManagement();
    addAriaLabels();
    enhanceColorContrast();

    // Re-run ARIA label addition when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-normal', 'font-large');
    root.classList.add(`font-${fontSize}`);

    // Apply reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Save preferences
    localStorage.setItem('accessibility-high-contrast', isHighContrast.toString());
    localStorage.setItem('accessibility-font-size', fontSize);
  };

  useEffect(() => {
    applyAccessibilitySettings();
  }, [isHighContrast, fontSize, reducedMotion]);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  const skipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        onClick={(e) => {
          e.preventDefault();
          skipToMain();
        }}
      >
        Skip to main content
      </a>

      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed bottom-4 right-4 z-50">
        {isOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 border mb-4 w-64">
            <h3 className="text-sm font-semibold mb-3 text-gray-800">Accessibility Options</h3>
            
            <div className="space-y-3">
              <button
                onClick={toggleHighContrast}
                className={`w-full px-3 py-2 text-sm rounded transition-colors ${
                  isHighContrast 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={isHighContrast ? 'Disable high contrast' : 'Enable high contrast'}
                aria-pressed={isHighContrast}
              >
                {isHighContrast ? 'High Contrast On' : 'High Contrast Off'}
              </button>

              <div className="space-y-2">
                <label className="text-xs text-gray-600">Font Size</label>
                <div className="flex space-x-1">
                  {['small', 'normal', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => changeFontSize(size)}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        fontSize === size
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      aria-label={`Set font size to ${size}`}
                      aria-pressed={fontSize === size}
                    >
                      {size.charAt(0).toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={toggleReducedMotion}
                className={`w-full px-3 py-2 text-sm rounded transition-colors ${
                  reducedMotion 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={reducedMotion ? 'Enable animations' : 'Reduce animations'}
                aria-pressed={reducedMotion}
              >
                {reducedMotion ? 'Animations Off' : 'Animations On'}
              </button>

              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  These settings are saved in your browser and will persist across visits.
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label={isOpen ? 'Close accessibility options' : 'Open accessibility options'}
          aria-expanded={isOpen}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </button>
      </div>

      {/* CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        
        .high-contrast a {
          text-decoration: underline !important;
        }
        
        .font-small {
          font-size: 0.875rem;
        }
        
        .font-normal {
          font-size: 1rem;
        }
        
        .font-large {
          font-size: 1.125rem;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;