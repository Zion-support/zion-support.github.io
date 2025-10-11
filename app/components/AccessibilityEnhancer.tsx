import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    if (enableHighContrast) {
      document.body.classList.add('high-contrast');
    }

    // Focus management
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
  }, [enableHighContrast, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
