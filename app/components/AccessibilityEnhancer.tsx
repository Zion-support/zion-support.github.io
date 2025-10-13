import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const enableKeyboardNavigation = true;
    const enableHighContrast = true;
    const enableScreenReader = true;

    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      document.addEventListener('keydown', handleKeyboardNavigation);
    }

    if (enableHighContrast) {
      // Add high contrast support
      document.body.classList.add('high-contrast-support');
    }

    if (enableScreenReader) {
      // Add screen reader support
      document.body.classList.add('screen-reader-support');
    }

    // Add focus management
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.setAttribute('tabindex', '0');
    });

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.body.classList.remove('high-contrast-support', 'screen-reader-support');
    };
  }, []);

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