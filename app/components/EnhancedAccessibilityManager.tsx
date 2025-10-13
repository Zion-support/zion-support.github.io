import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityManagerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibilityManager: React.FC<AccessibilityManagerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  // Keyboard navigation enhancements
  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main, #main-content');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const navigation = document.querySelector('nav, [role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
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
  }, [enableKeyboardNavigation]);

  // Screen reader enhancements
  const setupScreenReaderSupport = useCallback(() => {
    if (!enableScreenReader) return;

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.hasAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
    skipLink.style.cssText = `
      position: absolute;
      left: -9999px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }, [enableScreenReader]);

  // High contrast mode
  const setupHighContrastMode = useCallback(() => {
    if (!enableHighContrast) return;

    const toggleHighContrast = () => {
      setIsHighContrast(!isHighContrast);
      document.documentElement.classList.toggle('high-contrast', !isHighContrast);
      
      // Announce the change
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = `High contrast mode ${!isHighContrast ? 'enabled' : 'disabled'}`;
      }
    };

    // Add high contrast toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle High Contrast';
    toggleButton.className = 'fixed top-4 right-4 z-50 px-3 py-2 bg-gray-800 text-white rounded text-sm';
    toggleButton.setAttribute('aria-label', 'Toggle high contrast mode');
    toggleButton.onclick = toggleHighContrast;
    document.body.appendChild(toggleButton);

    // Add CSS for high contrast mode
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      .high-contrast * {
        border-color: currentColor !important;
      }
      .high-contrast button,
      .high-contrast a {
        border: 2px solid currentColor !important;
      }
    `;
    document.head.appendChild(style);
  }, [enableHighContrast, isHighContrast]);

  // Focus management
  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

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

      element.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => element.removeEventListener('keydown', handleTabKey);
    };

    // Enhanced focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 3px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      *:focus:not(:focus-visible) {
        outline: none !important;
      }
      *:focus-visible {
        outline: 3px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }, [enableFocusManagement]);

  // Font size controls
  const setupFontSizeControls = useCallback(() => {
    const increaseFontSize = () => {
      setFontSize(prev => Math.min(prev + 2, 24));
      document.documentElement.style.fontSize = `${fontSize + 2}px`;
    };

    const decreaseFontSize = () => {
      setFontSize(prev => Math.max(prev - 2, 12));
      document.documentElement.style.fontSize = `${fontSize - 2}px`;
    };

    const resetFontSize = () => {
      setFontSize(16);
      document.documentElement.style.fontSize = '16px';
    };

    // Add font size controls
    const controls = document.createElement('div');
    controls.className = 'fixed top-4 left-4 z-50 flex gap-2';
    controls.innerHTML = `
      <button onclick="decreaseFontSize()" aria-label="Decrease font size" class="px-2 py-1 bg-gray-800 text-white rounded text-sm">A-</button>
      <button onclick="resetFontSize()" aria-label="Reset font size" class="px-2 py-1 bg-gray-800 text-white rounded text-sm">A</button>
      <button onclick="increaseFontSize()" aria-label="Increase font size" class="px-2 py-1 bg-gray-800 text-white rounded text-sm">A+</button>
    `;
    
    // Make functions globally available
    (window as any).increaseFontSize = increaseFontSize;
    (window as any).decreaseFontSize = decreaseFontSize;
    (window as any).resetFontSize = resetFontSize;
    
    document.body.appendChild(controls);
  }, [fontSize]);

  // Announce page changes
  const announcePageChange = useCallback((title: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = `Page changed to ${title}`;
    }
  }, []);

  // Setup all accessibility features
  useEffect(() => {
    const cleanupFunctions = [
      setupKeyboardNavigation(),
      setupScreenReaderSupport(),
      setupHighContrastMode(),
      setupFocusManagement(),
      setupFontSizeControls()
    ].filter(Boolean);

    return () => {
      cleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') {
          cleanup();
        }
      });
    };
  }, [
    setupKeyboardNavigation,
    setupScreenReaderSupport,
    setupHighContrastMode,
    setupFocusManagement,
    setupFontSizeControls
  ]);

  // Monitor page changes for announcements
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const title = document.title;
      if (title) {
        announcePageChange(title);
      }
    });

    observer.observe(document.head, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [announcePageChange]);

  return null; // This component doesn't render anything
};

export default EnhancedAccessibilityManager;