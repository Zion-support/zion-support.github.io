'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  children
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);

  useEffect(() => {
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      document.documentElement.classList.remove('high-contrast');
    };
  }, [enableHighContrast]);

  useEffect(() => {
    if (enableKeyboardNavigation) {
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

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
