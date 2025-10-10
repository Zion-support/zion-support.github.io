'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  children
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
<<<<<<< HEAD
    // Apply high contrast mode
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
=======
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {;
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }
>>>>>>> origin/main

    return () => {
      document.documentElement.classList.remove('high-contrast');
    };
  }, [isHighContrast]);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && document.activeElement === document.body) {
        const skipLink = document.querySelector('[href="#main-content"]') as HTMLElement;
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

// Arrow key navigation for custom components
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (currentIndex !== -1) {
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, focusableElements.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (!enableScreenReaderSupport) return;

    // Announce page changes to screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content has been updated';
      document.body.appendChild(announcement);
      
<<<<<<< HEAD
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Listen for route changes (if using React Router)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          announcePageChange();
=======
      const trapFocus = (container: HTMLElement) => {;
        const focusableContent = container.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {;
          if (e.key !== 'Tab') return;

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
>>>>>>> origin/main
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (!enableFocusManagement) return;

<<<<<<< HEAD
// Focus management for modals and dropdowns
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      const modal = target.closest('[role="dialog"], [role="menu"], [role="listbox"]');
      
      if (modal) {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          // Trap focus within modal
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
          
          // Cleanup when modal is closed
          const cleanup = () => {
            modal.removeEventListener('keydown', handleTabKey);
            modal.removeEventListener('focusout', cleanup);
          };
          
          modal.addEventListener('focusout', cleanup);
=======
      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add live region for dynamic content updates
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Announce page changes
      const announcePageChange = (message: string) => {;
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.textContent = message;
        }
      }

      // Listen for route changes (if using React Router)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        announcePageChange('Page changed');
      }

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        announcePageChange('Page updated');
      }

      return () => {
        document.body.removeChild(liveRegion);
        history.pushState = originalPushState;
        history.replaceState = originalReplaceState;
      }
    }

    // High contrast mode support
    if (enableHighContrast && typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const updateHighContrast = (e: MediaQueryListEvent) => {
        if (e.matches) {;
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
>>>>>>> origin/main
        }
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, [enableFocusManagement]);

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

  const resetFontSize = () => {
    setFontSize(16);
  };

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Accessibility</h3>
          <div className="space-y-2">
            <button
              onClick={toggleHighContrast}
              className="block w-full text-left text-xs px-2 py-1 rounded hover:bg-gray-100"
              aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
            >
              {isHighContrast ? '🔆' : '🌙'} High Contrast
            </button>
            
            <div className="flex items-center space-x-1">
              <button
                onClick={decreaseFontSize}
                className="text-xs px-1 py-1 rounded hover:bg-gray-100"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <span className="text-xs px-1">{fontSize}px</span>
              <button
                onClick={increaseFontSize}
                className="text-xs px-1 py-1 rounded hover:bg-gray-100"
                aria-label="Increase font size"
              >
                A+
              </button>
              <button
                onClick={resetFontSize}
                className="text-xs px-1 py-1 rounded hover:bg-gray-100"
                aria-label="Reset font size"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default AccessibilityEnhancer;
