import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  announce: (message: string) => void;
  setFocus: (element: HTMLElement) => void;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true
}) => {
  useEffect(() => {
    // Create announcement area for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'accessibility-announcements';
    document.body.appendChild(announcement);

    // Skip links functionality
    if (enableSkipLinks) {
      const skipLinks = document.querySelectorAll('.skip-link');
      skipLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector((link as HTMLAnchorElement).getAttribute('href') || '');
          if (target) {
            (target as HTMLElement).focus();
            (target as HTMLElement).scrollIntoView();
          }
        });
      });
    }

    // Add keyboard navigation support
    if (enableKeyboardNav) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      // Add focus management
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };

      document.addEventListener('focusin', handleFocusIn);
    }

    // Focus indicators
    if (enableFocusIndicators) {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Add high contrast mode support
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleContrastChange);
    if (mediaQuery.matches) {
      document.body.classList.add('high-contrast');
    }

    // Add reduced motion support
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);
    if (motionQuery.matches) {
      document.body.classList.add('reduced-motion');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      if (enableKeyboardNav) {
        document.removeEventListener('focusin', handleFocusIn);
      }
      mediaQuery.removeEventListener('change', handleContrastChange);
      motionQuery.removeEventListener('change', handleMotionChange);
      
      const announcement = document.getElementById('accessibility-announcements');
      if (announcement) {
        announcement.remove();
      }
    };
  }, [enableSkipLinks, enableKeyboardNav, enableFocusIndicators]);

  const announce = (message: string) => {
    const announcement = document.getElementById('accessibility-announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  };

  const setFocus = (element: HTMLElement) => {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const toggleHighContrast = () => {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    announce(`High contrast mode ${isHighContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleReducedMotion = () => {
    document.body.classList.toggle('reduced-motion');
    const isReducedMotion = document.body.classList.contains('reduced-motion');
    announce(`Reduced motion ${isReducedMotion ? 'enabled' : 'disabled'}`);
  };

  const value: AccessibilityContextType = {
    announce,
    setFocus,
    toggleHighContrast,
    toggleReducedMotion,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      <div className="accessibility-enhancer">
        {enableSkipLinks && (
          <div className="skip-links">
            <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
              Skip to main content
            </a>
            <a href="#navigation" className="skip-link sr-only focus:not-sr-only">
              Skip to navigation
            </a>
          </div>
        )}
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityEnhancer');
  }
  return context;
};

export default AccessibilityEnhancer;
