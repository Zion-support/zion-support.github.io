'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false,
  enableFocusIndicators = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);

  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const mainContent = document.querySelector('main, [role="main"]');
          if (mainContent) {
            (mainContent as HTMLElement).focus();
            event.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader enhancements
    if (enableScreenReader && typeof window !== 'undefined') {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableScreenReader]);

  useEffect(() => {
    // High contrast mode
    if (typeof window !== 'undefined') {
      if (isHighContrast) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Focus indicators
    if (enableFocusIndicators && typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        .focus-visible:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableFocusIndicators]);

  return (
    <div className="accessibility-enhancer">
      {/* High contrast toggle */}
      <button
        onClick={() => setIsHighContrast(!isHighContrast)}
        className="sr-only focus:not-sr-only fixed top-4 right-4 bg-gray-800 text-white px-3 py-2 rounded text-sm z-50"
        aria-label={`Turn ${isHighContrast ? 'off' : 'on'} high contrast mode`}
      >
        {isHighContrast ? 'High Contrast: On' : 'High Contrast: Off'}
      </button>
    </div>
  );
};

export default AccessibilityEnhancer;
