'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add skip links
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (!skipLink) {
        const link = document.createElement('a');
        link.href = '#main-content';
        link.textContent = 'Skip to main content';
        link.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md';
        document.body.insertBefore(link, document.body.firstChild);
      }
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const manageFocus = () => {
        // Trap focus in modals
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (firstElement && lastElement) {
            const handleTabKey = (e: KeyboardEvent) => {
              if (e.key === 'Tab') {
                if (e.shiftKey) {
                  if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                  }
                } else {
                  if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                  }
                }
              }
            };

            modal.addEventListener('keydown', handleTabKey);
          }
        });
      };

      manageFocus();
    }
  }, [enableFocusManagement]);

  useEffect(() => {
    // Font size management
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Accessibility controls
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  return (
    <div className="accessibility-enhanced">
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-700">
        <h3 className="text-white text-sm font-semibold mb-3">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className="block w-full text-left text-sm text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle high contrast mode"
          >
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="text-sm text-gray-300 hover:text-white transition-colors"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-sm text-gray-300">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="text-sm text-gray-300 hover:text-white transition-colors"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AccessibilityEnhancer;