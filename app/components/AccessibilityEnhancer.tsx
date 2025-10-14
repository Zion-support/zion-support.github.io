import React, { useEffect, useState } from 'react';

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
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('high-contrast');
    };
  }, [isHighContrast]);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          // Ensure focus is visible
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

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader support
      const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Make the function available globally for other components
      (window as any).announceToScreenReader = announceToScreenReader;
    }
  }, [enableScreenReaderSupport]);

  return null;
};

export default AccessibilityEnhancer;