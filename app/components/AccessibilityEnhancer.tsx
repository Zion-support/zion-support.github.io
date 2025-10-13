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

    // Focus management
    const manageFocus = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusable = document.querySelectorAll(focusableElements);
      
      focusable.forEach((element) => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).style.outline = '2px solid #06b6d4';
          (e.target as HTMLElement).style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).style.outline = 'none';
        });
      });
    };

    // Screen reader announcements
    const setupScreenReader = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'screen-reader-announcements';
      document.body.appendChild(announcement);
    };

    // High contrast mode
    const setupHighContrast = () => {
      if (enableHighContrast) {
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#ffffff');
        document.documentElement.style.setProperty('--border-color', '#ffffff');
      }
    };

    // Keyboard navigation
    const setupKeyboardNavigation = () => {
      if (enableKeyboardNavigation) {
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
          }
        });

        document.addEventListener('mousedown', () => {
          document.body.classList.remove('keyboard-navigation');
        });
      }
    };

    // Initialize accessibility features
    addSkipLink();
    manageFocus();
    setupScreenReader();
    setupHighContrast();
    setupKeyboardNavigation();

    // Cleanup
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
      
      const announcement = document.getElementById('screen-reader-announcements');
      if (announcement) {
        announcement.remove();
      }
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
