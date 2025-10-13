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
        // Handle keyboard navigation
        if (event.key === 'Tab') {
          // Focus management
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          // Focus management logic here
        }
      };
      
      document.addEventListener('keydown', handleKeyboardNavigation);
      
      return () => {
        document.removeEventListener('keydown', handleKeyboardNavigation);
      };
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (enableScreenReader) {
      // Add screen reader enhancements
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
      
      // Make announcement function available globally
      (window as any).announceToScreenReader = announceToScreenReader;
    }
  }, [enableScreenReader]);

  useEffect(() => {
    if (enableHighContrast) {
      // Add high contrast mode
      document.body.classList.add('high-contrast');
      
      return () => {
        document.body.classList.remove('high-contrast');
      };
    }
  }, [enableHighContrast]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;