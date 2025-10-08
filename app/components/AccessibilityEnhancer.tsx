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

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    setIsHighContrast(highContrastQuery.matches);
    highContrastQuery.addEventListener('change', handleHighContrastChange);

    // Apply accessibility enhancements
    if (enableSkipLinks) {
      addSkipLinks();
    }

    if (enableKeyboardNav) {
      setupKeyboardNavigation();
    }

    if (enableFocusIndicators) {
      setupFocusIndicators();
    }

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
    };
  }, [enableSkipLinks, enableKeyboardNav, enableFocusIndicators]);

  const addSkipLinks = useCallback(() => {
    // Add skip links
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
  }, []);

  const setupKeyboardNavigation = useCallback(() => {
    // Enhanced keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const setupFocusIndicators = useCallback(() => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #0066cc !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        outline: 2px solid #0066cc !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const increaseFontSize = useCallback(() => {
    setFontSize(prev => Math.min(prev + 2, 24));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => Math.max(prev - 2, 12));
  }, []);

  const resetFontSize = useCallback(() => {
    setFontSize(16);
  }, []);

  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => !prev);
  }, []);

  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(prev => !prev);
  }, []);

  // Apply dynamic styles based on preferences
  useEffect(() => {
    const root = document.documentElement;
    
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--animation-iteration-count', '1');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--animation-iteration-count');
    }

    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    root.style.fontSize = `${fontSize}px`;
  }, [isReducedMotion, isHighContrast, fontSize]);

  return (
    <div 
      className="accessibility-enhancer"
      style={{
        fontSize: `${fontSize}px`,
        ...(isReducedMotion && {
          '--animation-duration': '0.01ms',
          '--animation-iteration-count': '1',
        }),
        ...(isHighContrast && {
          filter: 'contrast(150%)',
        }),
      }}
    >
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        zIndex: 1000,
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}>
        <button onClick={increaseFontSize} aria-label="Increase font size">
          A+
        </button>
        <button onClick={decreaseFontSize} aria-label="Decrease font size">
          A-
        </button>
        <button onClick={resetFontSize} aria-label="Reset font size">
          A
        </button>
        <button onClick={toggleHighContrast} aria-label="Toggle high contrast">
          {isHighContrast ? '🔆' : '🌙'}
        </button>
        <button onClick={toggleReducedMotion} aria-label="Toggle reduced motion">
          {isReducedMotion ? '⏸️' : '▶️'}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;