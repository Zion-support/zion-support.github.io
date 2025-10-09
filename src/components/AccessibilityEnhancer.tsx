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

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    if (typeof window !== 'undefined') {
      const _prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setIsHighContrast(prefersHighContrast);
      setIsReducedMotion(prefersReducedMotion);

      // Apply high contrast mode
      if (enableHighContrast && prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }

      // Apply reduced motion
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      }
    }
  }, [enableHighContrast]);

  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && !event.shiftKey && document.activeElement === document.body) {
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
    if (!enableFocusManagement) return;

    // Focus management for better accessibility
    const manageFocus = () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      // Add focus indicators
      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    manageFocus();

    // Re-run when DOM changes
    const observer = new MutationObserver(manageFocus);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [enableFocusManagement]);

  useEffect(() => {
    if (!enableScreenReaderSupport) return;

    // Announce dynamic content changes to screen readers
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

    // Announce page changes
    const originalTitle = document.title;
    const titleObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target === document.head) {
          const titleElement = document.querySelector('title');
          if (titleElement && titleElement.textContent !== originalTitle) {
            announceToScreenReader(`Page changed to ${titleElement.textContent}`);
          }
        }
      });
    });

    titleObserver.observe(document.head, { childList: true });

    return () => titleObserver.disconnect();
  }, [enableScreenReaderSupport]);

  // Toggle high contrast mode
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast', !isHighContrast);
  }, [isHighContrast]);

  return (
    <div className="accessibility-controls">
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
      >
        Skip to main content
      </a>
    </div>
  );
};

export default AccessibilityEnhancer;