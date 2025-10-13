import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      const handleKeyboardNavigation = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          // Ensure focus is visible
          document.body.classList.add('keyboard-navigation');
        }
      };
      
      document.addEventListener('keydown', handleKeyboardNavigation);
      
      return () => {
        document.removeEventListener('keydown', handleKeyboardNavigation);
      };
    }

    if (enableScreenReader) {
      // Add screen reader support
      document.body.setAttribute('aria-live', 'polite');
    }

    if (enableHighContrast) {
      // Add high contrast mode
      document.body.classList.add('high-contrast');
    }

    return () => {
      document.body.removeAttribute('aria-live');
      document.body.classList.remove('high-contrast', 'keyboard-navigation');
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;