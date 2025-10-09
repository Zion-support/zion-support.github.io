import React, { useEffect, useCallback } from 'react';

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
=======
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
=======
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    setIsReducedMotion(mediaQuery.matches);
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
    mediaQuery.addEventListener('change', handleChange);
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    // Check for font size preference
    const computedStyle = getComputedStyle(document.documentElement);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    setFontSize(rootFontSize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };


  // Expose utility functions to children via context if needed
  const accessibilityUtils = {
    announceToScreenReader,
    isReducedMotion,
    isHighContrast,
    fontSize,
  };

  return (
    <div 
      className="accessibility-enhanced"
      style={{
        '--reduced-motion': isReducedMotion ? 'reduce' : 'auto',
        '--high-contrast': isHighContrast ? 'high' : 'normal',
      } as React.CSSProperties}
    >
      {children}
      <style>{`
        .accessibility-enhanced {
          --animation-duration: var(--reduced-motion) === 'reduce' ? '0.01ms' : 'normal';
          --animation-iteration-count: var(--reduced-motion) === 'reduce' ? '1' : 'infinite';
        }
        
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .skip-link:focus {
          top: 6px !important;
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
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        @media (prefers-contrast: high) {
          .high-contrast {
            filter: contrast(200%) brightness(150%);
          }
        }
      `}</style>
=======
    // Announce page changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          announce('Page content updated');
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="accessibility-enhanced">
      {children}
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
    </div>
  );
};

export default AccessibilityEnhancer;