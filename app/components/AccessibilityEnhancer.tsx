import React, { useEffect } from "react";

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
  enableHighContrast = true,
  enableFocusManagement = true,
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

    // High contrast mode
    const enableHighContrastMode = () => {
      if (enableHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }
    };

    // Focus management
    const setupFocusManagement = () => {
      if (enableFocusManagement) {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = document.querySelectorAll(focusableElements);
        
        focusableContent.forEach((element) => {
          element.setAttribute('tabindex', '0');
        });
      }
    };

    // Screen reader announcements
    const setupScreenReaderSupport = () => {
      if (enableScreenReader) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.id = 'screen-reader-announcements';
        document.body.appendChild(announcement);
      }
    };

    // Initialize accessibility features
    addSkipLink();
    enableHighContrastMode();
    setupFocusManagement();
    setupScreenReaderSupport();

    return () => {
      // Cleanup
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
      
      const announcement = document.getElementById('screen-reader-announcements');
      if (announcement) {
        announcement.remove();
      }
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;