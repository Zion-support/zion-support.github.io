'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps>= ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences;
    if (typeof window !== 'undefined') {
                  setIsHighContrast(prefersHighContrast);
      setIsReducedMotion(prefersReducedMotion);

      // Apply high contrast mode;
      if (enableHighContrast && prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }

      // Apply reduced motion;
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      }
    }
  }, [enableHighContrast]);

  useEffect(() => {
    if (!enableKeyboardNavigation) return null;
    // Enhanced keyboard navigation;
            if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }

      // Escape key to close modals/dropdowns;
      if (event.key === 'Escape') {
                if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Arrow key navigation for custom components;
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                        if (currentIndex !== -1) {
                    (focusableElements[nextIndex] as HTMLElement)?.focus();
          event.preventDefault();
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (!enableFocusManagement) return null;
    // Focus management for better accessibility;
          // Add focus indicators;
      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    }
    manageFocus();

    // Re-run when DOM changes;
        observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [enableFocusManagement]);

  useEffect(() => {
    if (!enableScreenReaderSupport) return null;
    // Announce dynamic content changes to screen readers;
          announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
    // Announce page changes;
                  if (titleElement && titleElement.textContent !== originalTitle) {
            announceToScreenReader(`Page changed to ${titleElement.textContent}`);
          }
        }
      });
    });

    titleObserver.observe(document.head, { childList: true });

    return () => titleObserver.disconnect();
  }, [enableScreenReaderSupport]);

  // Toggle high contrast mode;
      document.documentElement.classList.toggle('high-contrast', !isHighContrast);
  }, [isHighContrast])
  return (
    <div>
      {/* High Contrast Toggle */}
      {enableHighContrast && (
        <button
          onClick={toggleHighContrast}
          className="sr-only focus:not-sr-only fixed top-4 right-4 bg-gray-800 text-white px-3 py-2 rounded text-sm z-50"
          aria-label={`Toggle high contrast mode. Currently ${isHighContrast ? 'on' : 'off'}`}
        >
          {isHighContrast ? 'High Contrast: On' : 'High Contrast: Off'}
        </button>
      )}

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >Skip to main content</a>
    </div>);
}
export default AccessibilityEnhancer