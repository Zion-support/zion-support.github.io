import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityConfig {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityConfig> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [focusVisible, setFocusVisible] = useState(false);

  // High contrast mode
  useEffect(() => {
    if (!enableHighContrast) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableHighContrast]);

  // Apply high contrast styles
  useEffect(() => {
    if (!enableHighContrast) return;

    const root = document.documentElement;
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [isHighContrast, enableHighContrast]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (e: FocusEvent) => {
      setFocusVisible(true);
      const target = e.target as HTMLElement;
      target.classList.add('focus-visible');
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setFocusVisible(true);
      }
    };

    const handleMouseDown = () => {
      setFocusVisible(false);
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableFocusManagement]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const main = document.querySelector('main, [role="main"]');
        if (main) {
          (main as HTMLElement).focus();
        }
      }

      // Escape key handling
      if (e.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
        if (modal) {
          const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Font size adjustment
  const adjustFontSize = useCallback((delta: number) => {
    const newSize = Math.max(12, Math.min(24, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  }, [fontSize]);

  // Skip to main content link
  const SkipLink = () => (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      onClick={(e) => {
        e.preventDefault();
        const main = document.querySelector('main, [role="main"]');
        if (main) {
          (main as HTMLElement).focus();
        }
      }}
    >
      Skip to main content
    </a>
  );

  // Accessibility controls
  const AccessibilityControls = () => (
    <div className="fixed top-4 right-4 z-40 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-3">Accessibility</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Font Size</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => adjustFontSize(-2)}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded text-sm"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-sm">{fontSize}px</span>
            <button
              onClick={() => adjustFontSize(2)}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded text-sm"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={(e) => setIsHighContrast(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">High Contrast</span>
          </label>
        </div>
      </div>
    </div>
  );

  // Add ARIA landmarks
  useEffect(() => {
    if (!enableAriaLabels) return;

    // Add main landmark if not present
    const main = document.querySelector('main, [role="main"]');
    if (!main) {
      const content = document.querySelector('#main-content, .main-content, main');
      if (content) {
        content.setAttribute('role', 'main');
        content.id = content.id || 'main-content';
      }
    }

    // Add navigation landmarks
    const navs = document.querySelectorAll('nav:not([role])');
    navs.forEach(nav => nav.setAttribute('role', 'navigation'));

    // Add banner landmark
    const header = document.querySelector('header:not([role])');
    if (header) {
      header.setAttribute('role', 'banner');
    }

    // Add contentinfo landmark
    const footer = document.querySelector('footer:not([role])');
    if (footer) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, [enableAriaLabels]);

  return (
    <>
      <SkipLink />
      <AccessibilityControls />
      
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: var(--high-contrast-bg, #000000) !important;
          color: var(--high-contrast-text, #ffffff) !important;
          border-color: var(--high-contrast-border, #ffffff) !important;
        }
        
        .focus-visible {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .focus\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;