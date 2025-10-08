import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

/**
 * Accessibility Enhancer Component
 * Provides comprehensive accessibility improvements
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for user preferences
  useEffect(() => {
    const checkUserPreferences = () => {
      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setIsReducedMotion(true);
      }

      // Check for high contrast preference
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setIsHighContrast(true);
      }

      // Check for dark mode preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkMode(true);
      }
    };

    checkUserPreferences();

    // Listen for changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(prefers-color-scheme: dark)'),
    ];

    const handleChange = () => checkUserPreferences();
    mediaQueries.forEach(mq => mq.addEventListener('change', handleChange));

    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', handleChange));
    };
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply reduced motion
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Apply high contrast
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.style.setProperty('--base-font-size', `${fontSize}px`);

    // Apply dark mode
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isReducedMotion, isHighContrast, fontSize, isDarkMode]);

  // Add skip links
  useEffect(() => {
    if (!enableSkipLinks) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, [enableSkipLinks]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNav) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to navigation with Alt + N
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a') as HTMLAnchorElement;
          if (firstLink) {
            firstLink.focus();
          }
        }
      }

      // Skip to footer with Alt + F
      if (event.altKey && event.key === 'f') {
        event.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
          footer.focus();
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNav]);

  // Focus indicators
  useEffect(() => {
    if (!enableFocusIndicators) return;

    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        outline: 3px solid #fbbf24 !important;
        outline-offset: 2px !important;
      }
      
      button:focus,
      a:focus,
      input:focus,
      textarea:focus,
      select:focus {
        box-shadow: 0 0 0 2px #3b82f6 !important;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [enableFocusIndicators]);

  // Font size controls
  const increaseFontSize = useCallback(() => {
    setFontSize(prev => Math.min(prev + 2, 24));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => Math.max(prev - 2, 12));
  }, []);

  const resetFontSize = useCallback(() => {
    setFontSize(16);
  }, []);

  // Toggle high contrast
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => !prev);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  return (
    <div className="accessibility-enhancer">
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
        <div className="flex flex-col space-y-2">
          <button
            onClick={increaseFontSize}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
            aria-label="Increase font size"
          >
            A+
          </button>
          <button
            onClick={decreaseFontSize}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <button
            onClick={resetFontSize}
            className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700"
            aria-label="Reset font size"
          >
            A
          </button>
          <button
            onClick={toggleHighContrast}
            className={`px-3 py-1 rounded text-sm hover:opacity-80 ${
              isHighContrast ? 'bg-yellow-600 text-black' : 'bg-gray-600 text-white'
            }`}
            aria-label={isHighContrast ? 'Disable high contrast' : 'Enable high contrast'}
          >
            HC
          </button>
          <button
            onClick={toggleDarkMode}
            className={`px-3 py-1 rounded text-sm hover:opacity-80 ${
              isDarkMode ? 'bg-yellow-600 text-black' : 'bg-gray-600 text-white'
            }`}
            aria-label={isDarkMode ? 'Disable dark mode' : 'Enable dark mode'}
          >
            DM
          </button>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AccessibilityEnhancer;