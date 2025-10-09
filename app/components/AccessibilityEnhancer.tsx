'use client';
import React from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Focus management
      if (enableFocusManagement) {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        
        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            const focusable = document.querySelectorAll(focusableElements);
            const firstFocusable = focusable[0] as HTMLElement;
            const lastFocusable = focusable[focusable.length - 1] as HTMLElement;
            
            if (e.shiftKey && document.activeElement === firstFocusable) {
              lastFocusable.focus();
              e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
              firstFocusable.focus();
              e.preventDefault();
            }
          }
        };
        
        document.addEventListener('keydown', handleTabKey);
        return () => document.removeEventListener('keydown', handleTabKey);
      }
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
