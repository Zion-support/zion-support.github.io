'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
    if (enableFocusManagement) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [enableHighContrast, enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
