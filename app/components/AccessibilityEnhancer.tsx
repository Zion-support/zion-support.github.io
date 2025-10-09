'use client';
import React from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    // Add focus management
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          const focusable = Array.from(document.querySelectorAll(focusableElements));
          const firstFocusable = focusable[0] as HTMLElement;
          const lastFocusable = focusable[focusable.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable.focus();
              e.preventDefault();
            }
          }
        }
      });
    }

    // Add high contrast support
    if (enableHighContrast) {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .text-gray-300 { color: #ffffff !important; }
          .text-gray-400 { color: #e5e7eb !important; }
          .bg-slate-800 { background-color: #000000 !important; }
          .border-gray-700 { border-color: #ffffff !important; }
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;