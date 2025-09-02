import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply accessibility features based on preferences
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    // Keyboard navigation enhancement
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const skipLink = document.querySelector('.skip-to-main') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast', !isHighContrast);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    document.documentElement.className = document.documentElement.className.replace(/font-size-\w+/g, '');
    document.documentElement.classList.add(`font-size-${size}`);
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-to-main sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        tabIndex={1}
      >
        Skip to main content
      </a>

      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed bottom-4 right-4 z-40 bg-white shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2 text-gray-700">Accessibility</h3>
        
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full text-xs px-3 py-1 rounded transition-colors ${
              isHighContrast 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle high contrast mode"
          >
            High Contrast
          </button>
          
          <div className="flex space-x-1">
            <button
              onClick={() => changeFontSize('small')}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                fontSize === 'small' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Small font size"
            >
              A
            </button>
            <button
              onClick={() => changeFontSize('normal')}
              className={`text-sm px-2 py-1 rounded transition-colors ${
                fontSize === 'normal' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Normal font size"
            >
              A
            </button>
            <button
              onClick={() => changeFontSize('large')}
              className={`text-base px-2 py-1 rounded transition-colors ${
                fontSize === 'large' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Large font size"
            >
              A
            </button>
          </div>
        </div>
      </div>

      {/* Accessibility Styles */}
      <style jsx global>{`
        /* High contrast mode */
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .high-contrast * {
          border-color: currentColor !important;
        }
        
        /* Font size adjustments */
        .font-size-small {
          font-size: 0.875rem;
        }
        
        .font-size-large {
          font-size: 1.125rem;
        }
        
        .font-size-large h1 {
          font-size: 3.5rem;
        }
        
        .font-size-large h2 {
          font-size: 2.5rem;
        }
        
        .font-size-large h3 {
          font-size: 2rem;
        }
        
        /* Focus indicators */
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        /* Screen reader only content */
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
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        /* Color contrast improvements */
        .text-gray-600 {
          color: #4b5563;
        }
        
        .text-gray-700 {
          color: #374151;
        }
        
        /* Interactive elements */
        button, a, input, select, textarea {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Form accessibility */
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        
        input, select, textarea {
          border: 2px solid #d1d5db;
          border-radius: 0.375rem;
          padding: 0.75rem;
          font-size: 1rem;
        }
        
        input:focus, select:focus, textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        /* Error states */
        .error {
          border-color: #ef4444;
        }
        
        .error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;