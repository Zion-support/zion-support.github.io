import React, { useState, useEffect, useCallback, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

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
    if (!enableSkipLinks) return;
    
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
  }, [enableSkipLinks]);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };
    
    highContrastQuery.addEventListener('change', handleContrastChange);
    setIsHighContrast(highContrastQuery.matches);

    // Check for font size preference
    const computedStyle = getComputedStyle(document.documentElement);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    setFontSize(rootFontSize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility enhancements
    if (enableSkipLinks) {
      addSkipLinks();
    }

    if (enableFocusIndicators) {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #4F46E5 !important;
          outline-offset: 2px !important;
        }
        .skip-link:focus {
          outline: 2px solid #fff !important;
        }
      `;
      document.head.appendChild(style);
    }

    if (enableKeyboardNav) {
      // Add keyboard navigation support
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
    }
  }, [enableSkipLinks, enableFocusIndicators, enableKeyboardNav, addSkipLinks]);

  useEffect(() => {
    // Apply reduced motion styles
    if (isReducedMotion) {
      document.documentElement.style.setProperty('--motion-duration', '0.01ms');
      document.documentElement.style.setProperty('--motion-delay', '0.01ms');
    } else {
      document.documentElement.style.removeProperty('--motion-duration');
      document.documentElement.style.removeProperty('--motion-delay');
    }
  }, [isReducedMotion]);

  useEffect(() => {
    // Apply high contrast styles
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Apply font size adjustments
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // const getMetrics = () => ({
  //   isReducedMotion,
  //   isHighContrast,
  //   fontSize,
  //   overallScore: (isReducedMotion ? 25 : 0) + (isHighContrast ? 25 : 0) + (fontSize >= 16 ? 25 : 0) + 25
  // });

  return (
    <div 
      className="accessibility-enhanced"
      data-reduced-motion={isReducedMotion}
      data-high-contrast={isHighContrast}
      data-font-size={fontSize}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
