import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusIndicators?: boolean;
  enableKeyboardNavigation?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusIndicators = true,
  enableKeyboardNavigation = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    setIsHighContrast(mediaQuery.matches);
    setIsReducedMotion(motionQuery.matches);

    // Focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusIndicators) return;

      const addFocusStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-focus-styles';
        style.textContent = `
          *:focus {
            outline: 2px solid #06b6d4 !important;
            outline-offset: 2px !important;
            border-radius: 4px !important;
          }
          .focus-visible {
            outline: 2px solid #06b6d4 !important;
            outline-offset: 2px !important;
          }
        `;
        document.head.appendChild(style);
      };

      addFocusStyles();

      return () => {
        const existingStyle = document.getElementById('accessibility-focus-styles');
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    };

    // Keyboard navigation enhancement
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip links for better navigation
        if (event.key === 'Tab' && event.shiftKey) {
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          if (document.activeElement === firstElement) {
            event.preventDefault();
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            lastElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    };

    // Focus trap for modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusableElement = focusableElements[0] as HTMLElement;
      const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      element.addEventListener('keydown', handleTabKey);
      firstFocusableElement?.focus();

      return () => {
        element.removeEventListener('keydown', handleTabKey);
      };
    };

    // Apply focus trap to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
    const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));

    // Initialize all enhancements
    const focusCleanup = enhanceFocusManagement();
    const keyboardCleanup = enhanceKeyboardNavigation();

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
      focusCleanup?.();
      keyboardCleanup?.();
    };
  }, [enableFocusIndicators, enableKeyboardNavigation]);

  // High contrast mode
  useEffect(() => {
    if (!enableHighContrast) return;

    const addHighContrastStyles = () => {
      const style = document.createElement('style');
      style.id = 'accessibility-high-contrast';
      style.textContent = `
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }
        .high-contrast * {
          border-color: currentColor !important;
        }
      `;
      document.head.appendChild(style);
    };

    const removeHighContrastStyles = () => {
      const existingStyle = document.getElementById('accessibility-high-contrast');
      if (existingStyle) {
        existingStyle.remove();
      }
    };

    if (isHighContrast) {
      addHighContrastStyles();
      document.body.classList.add('high-contrast');
    } else {
      removeHighContrastStyles();
      document.body.classList.remove('high-contrast');
    }

    return () => {
      removeHighContrastStyles();
      document.body.classList.remove('high-contrast');
    };
  }, [isHighContrast, enableHighContrast]);

  // Reduced motion
  useEffect(() => {
    if (!enableReducedMotion) return;

    if (isReducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }

    return () => {
      document.body.classList.remove('reduced-motion');
    };
  }, [isReducedMotion, enableReducedMotion]);

  return (
    <div 
      className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}
      style={{
        '--focus-color': '#06b6d4',
        '--focus-width': '2px',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;