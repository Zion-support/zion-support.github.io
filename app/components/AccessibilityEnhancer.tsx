import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true,
  enableScreenReader = true
}) => {
  useEffect(() => {
    // Apply accessibility enhancements
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    if (enableReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Add focus management
    if (enableFocusManagement) {
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleTabKey);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleTabKey);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
