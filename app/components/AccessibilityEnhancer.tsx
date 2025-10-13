import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (enableKeyboardNavigation) {
      // Add keyboard navigation enhancements
      document.addEventListener('keydown', handleKeyboardNavigation);
    }

    if (enableHighContrast) {
      document.body.classList.add('high-contrast');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.body.classList.remove('high-contrast');
    };
  }, [enableKeyboardNavigation, enableHighContrast]);

  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    // Handle keyboard navigation
    if (event.key === 'Tab') {
      // Ensure focus is visible
      document.body.classList.add('keyboard-navigation');
    }
  };

  return <>{children}</>;
};

export default AccessibilityEnhancer;
