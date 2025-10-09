import React, { useState, useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
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

    // Add skip links
    addSkipLinks();

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, [addSkipLinks]);

  useEffect(() => {
    // Apply accessibility styles
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

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enableKeyboardNav) return;

    // Skip to main content with Tab
    if (e.key === 'Tab' && e.target === document.body) {
      const skipLink = document.querySelector('.skip-link') as HTMLAnchorElement;
      if (skipLink) {
        skipLink.focus();
      }
    }

    // Escape key to close modals/dropdowns
    if (e.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
    }
  }, [enableKeyboardNav]);

  useEffect(() => {
    if (enableKeyboardNav) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown, enableKeyboardNav]);

  // Focus management
  const manageFocus = useCallback(() => {
    if (!enableFocusIndicators) return;

    // Add focus indicators to interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });
  }, [enableFocusIndicators]);

  useEffect(() => {
    manageFocus();
  }, [manageFocus]);

  // Announce page changes
  const announcePageChange = useCallback((message: string) => {
    const liveRegion = document.getElementById('live-region') || document.createElement('div');
    liveRegion.id = 'live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    
    if (!document.getElementById('live-region')) {
      document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
  }, []);

  // Expose utility functions to children via context if needed
  const accessibilityContext = {
    isReducedMotion,
    isHighContrast,
    fontSize,
    setFontSize,
    announcePageChange,
  };

  return (
    <div className="accessibility-enhanced">
      <style>{`
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
        
        .focus-visible {
          outline: 2px solid #4A90E2;
          outline-offset: 2px;
        }
        
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        @media (prefers-contrast: high) {
          * {
            filter: contrast(150%) brightness(120%);
          }
        }
      `}</style>
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;