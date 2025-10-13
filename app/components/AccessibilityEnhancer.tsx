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
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50';
      skipLink.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `;
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add accessibility enhancements
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      document.addEventListener('keydown', handleKeyboardNavigation);
    }

    if (enableScreenReader) {
      // Add screen reader support
      document.body.setAttribute('aria-live', 'polite');
    }

    if (enableHighContrast) {
      // Add high contrast mode
      document.body.classList.add('high-contrast');
    }

    // Add skip link
    addSkipLink();

    return () => {
      if (enableKeyboardNavigation) {
        document.removeEventListener('keydown', handleKeyboardNavigation);
      }
      if (enableHighContrast) {
        document.body.classList.remove('high-contrast');
      }
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast]);

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
