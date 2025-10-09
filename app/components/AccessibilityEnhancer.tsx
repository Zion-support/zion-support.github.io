import React, { useEffect, useCallback, useState } from 'react';

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

  const addSkipLinks = useCallback(() => {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast preference
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };
    
    setIsHighContrast(contrastQuery.matches);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    if (enableSkipLinks) {
      addSkipLinks();
    }

    // Add keyboard navigation support
    if (enableKeyboardNav) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableSkipLinks, enableKeyboardNav, addSkipLinks]);

  useEffect(() => {
    // Apply accessibility styles
    const style = document.createElement('style');
    style.textContent = `
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      ${enableFocusIndicators ? `
        *:focus {
          outline: 2px solid #4F46E5;
          outline-offset: 2px;
        }
      ` : ''}
      
      ${isReducedMotion ? `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      ` : ''}
      
      ${isHighContrast ? `
        .bg-gray-100 { background-color: #000 !important; }
        .text-gray-600 { color: #fff !important; }
        .text-gray-900 { color: #fff !important; }
      ` : ''}
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [enableFocusIndicators, isReducedMotion, isHighContrast]);

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const increaseFontSize = useCallback(() => {
    setFontSize(prev => Math.min(prev + 2, 24));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => Math.max(prev - 2, 12));
  }, []);

  const resetFontSize = useCallback(() => {
    setFontSize(16);
  }, []);

  return (
    <div className="accessibility-enhanced">
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
        <button
          onClick={increaseFontSize}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm mr-2"
          aria-label="Increase font size"
        >
          A+
        </button>
        <button
          onClick={decreaseFontSize}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm mr-2"
          aria-label="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={resetFontSize}
          className="bg-gray-600 text-white px-3 py-1 rounded text-sm"
          aria-label="Reset font size"
        >
          Reset
        </button>
      </div>
      
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;