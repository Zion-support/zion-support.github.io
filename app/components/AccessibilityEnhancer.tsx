import React, { useEffect, useState } from 'react';

interface AccessibilityState {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  keyboardNavigation: boolean;
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    keyboardNavigation: false,
    screenReader: false,
  });

  useEffect(() => {
    // Detect user preferences
    const detectPreferences = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      setAccessibilityState(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
      }));
    };

    // Detect screen reader
    const detectScreenReader = () => {
      const hasScreenReader = 
        'speechSynthesis' in window ||
        'webkitSpeechSynthesis' in window ||
        navigator.userAgent.includes('NVDA') ||
        navigator.userAgent.includes('JAWS') ||
        navigator.userAgent.includes('VoiceOver');
      
      setAccessibilityState(prev => ({
        ...prev,
        screenReader: hasScreenReader,
      }));
    };

    // Add skip links
    const addSkipLinks = () => {
      const existingSkipLink = document.querySelector('.skip-link');
      if (!existingSkipLink) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        skipLink.setAttribute('aria-label', 'Skip to main content');
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    // Add landmarks
    const addLandmarks = () => {
      // Main content landmark
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
        main.setAttribute('role', 'main');
      }

      // Navigation landmark
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      // Footer landmark
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
      });
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
          setAccessibilityState(prev => ({ ...prev, keyboardNavigation: true }));
        }
        
        // Handle escape key for closing modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }

        // Handle arrow keys for navigation
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
          
          if (currentIndex !== -1) {
            let nextIndex = currentIndex;
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
              nextIndex = (currentIndex + 1) % focusableElements.length;
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
              nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
            }
            
            (focusableElements[nextIndex] as HTMLElement)?.focus();
            e.preventDefault();
          }
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
        setAccessibilityState(prev => ({ ...prev, keyboardNavigation: false }));
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    // Add accessibility styles
    const addAccessibilityStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Focus styles */
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link:focus {
          outline: 2px solid #ffffff !important;
          outline-offset: 2px !important;
        }

        /* High contrast mode */
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }

        /* Reduced motion */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Font size adjustments */
        .font-small {
          font-size: 0.875rem;
        }
        
        .font-medium {
          font-size: 1rem;
        }
        
        .font-large {
          font-size: 1.125rem;
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

        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        /* Focus visible for better keyboard navigation */
        *:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Ensure sufficient color contrast */
        .text-contrast {
          color: #ffffff;
          background-color: #000000;
        }
      `;
      document.head.appendChild(style);

      return () => {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    };

    // Apply accessibility settings
    const applyAccessibilitySettings = () => {
      const body = document.body;
      
      if (accessibilityState.highContrast) {
        body.classList.add('high-contrast');
      } else {
        body.classList.remove('high-contrast');
      }

      if (accessibilityState.reducedMotion) {
        body.classList.add('reduced-motion');
      } else {
        body.classList.remove('reduced-motion');
      }

      body.classList.remove('font-small', 'font-medium', 'font-large');
      body.classList.add(`font-${accessibilityState.fontSize}`);
    };

    // Initialize accessibility features
    detectPreferences();
    detectScreenReader();
    addSkipLinks();
    addLandmarks();
    const cleanupFocus = enhanceFocusManagement();
    const cleanupStyles = addAccessibilityStyles();

    // Apply settings
    applyAccessibilitySettings();

    // Listen for preference changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
    ];

    const handleMediaChange = () => {
      detectPreferences();
      applyAccessibilitySettings();
    };

    mediaQueries.forEach(mq => mq.addEventListener('change', handleMediaChange));

    return () => {
      cleanupFocus();
      cleanupStyles();
      mediaQueries.forEach(mq => mq.removeEventListener('change', handleMediaChange));
    };
  }, [accessibilityState.highContrast, accessibilityState.reducedMotion, accessibilityState.fontSize]);

  // Accessibility controls (only in development)
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed top-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50">
        <h3 className="font-bold mb-2 text-sm">Accessibility Controls</h3>
        <div className="space-y-2 text-xs">
          <div>
            <label className="block">
              <input
                type="checkbox"
                checked={accessibilityState.highContrast}
                onChange={(e) => setAccessibilityState(prev => ({ ...prev, highContrast: e.target.checked }))}
                className="mr-2"
              />
              High Contrast
            </label>
          </div>
          <div>
            <label className="block">
              <input
                type="checkbox"
                checked={accessibilityState.reducedMotion}
                onChange={(e) => setAccessibilityState(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                className="mr-2"
              />
              Reduced Motion
            </label>
          </div>
          <div>
            <label className="block">
              Font Size:
              <select
                value={accessibilityState.fontSize}
                onChange={(e) => setAccessibilityState(prev => ({ ...prev, fontSize: e.target.value as any }))}
                className="ml-2 text-black"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
          </div>
          <div className="text-xs text-gray-300">
            Keyboard: {accessibilityState.keyboardNavigation ? 'On' : 'Off'}
          </div>
          <div className="text-xs text-gray-300">
            Screen Reader: {accessibilityState.screenReader ? 'Detected' : 'Not detected'}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AccessibilityEnhancer;