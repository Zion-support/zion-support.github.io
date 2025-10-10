import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // Detect user preferences
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for high contrast preference
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(highContrastQuery.matches);
      
      // Check for reduced motion preference
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(reducedMotionQuery.matches);

      // Listen for changes
      const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
      const handleReducedMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

      return () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      };
    }
  }, []);

  // Keyboard navigation enhancements
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const navigation = document.querySelector('nav, [role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
        }
      }

      // Escape key handling
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (e: FocusEvent) => {
      setFocusVisible(true);
      const target = e.target as HTMLElement;
      
      // Add focus-visible class for better focus indication
      if (target) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      
      // Remove focus-visible class
      if (target) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enableScreenReader]);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [isHighContrast, isReducedMotion, focusVisible]);

  // Add skip links
  useEffect(() => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);
    
    return () => {
      const existingSkipLinks = document.querySelector('.skip-links');
      if (existingSkipLinks) {
        document.body.removeChild(existingSkipLinks);
      }
    };
  }, []);

  // Expose announcement function globally for other components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).announceToScreenReader = announceToScreenReader;
    }
  }, [announceToScreenReader]);

  return (
    <style>
      {`
        /* Skip links */
        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
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
        
        /* Focus management */
        .focus-visible {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
        }
        
        /* High contrast mode */
        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #ffffff;
          --bg-dark: #000000;
          --bg-darker: #000000;
          --primary-cyan: #00ffff;
          --primary-purple: #ff00ff;
          --primary-pink: #ff00ff;
        }
        
        .high-contrast * {
          background-color: transparent !important;
          color: #ffffff !important;
          border-color: #ffffff !important;
        }
        
        .high-contrast button,
        .high-contrast a,
        .high-contrast input,
        .high-contrast select,
        .high-contrast textarea {
          background-color: #000000 !important;
          color: #ffffff !important;
          border: 2px solid #ffffff !important;
        }
        
        /* Reduced motion */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
        
        /* Focus indicators */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible,
        [tabindex]:focus-visible {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
        }
        
        /* Ensure interactive elements are keyboard accessible */
        button:not(:disabled),
        a[href],
        input:not(:disabled),
        select:not(:disabled),
        textarea:not(:disabled),
        [tabindex]:not([tabindex="-1"]) {
          cursor: pointer;
        }
        
        /* Improve text readability */
        p, span, div {
          line-height: 1.6;
        }
        
        /* Ensure sufficient color contrast */
        .text-muted {
          color: #94a3b8 !important;
        }
        
        /* Loading states for screen readers */
        [aria-busy="true"]::after {
          content: "Loading...";
          position: absolute;
          left: -10000px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
      `}
    </style>
  );
};

export default AccessibilityEnhancer;