import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showFocusIndicator?: boolean;
  enableSkipLinks?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export function EnhancedAccessibilityEnhancer({
  enabled = true,
  showFocusIndicator = true,
  enableSkipLinks = true,
  enableHighContrast = false,
  enableReducedMotion = false
}: AccessibilityEnhancerProps) {
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!enabled) return;

    // Add CSS custom properties for accessibility
    const root = document.documentElement;
    
    if (showFocusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #3b82f6');
    }
    
    if (enableHighContrast) {
      root.style.setProperty('--text-primary', '#000000');
      root.style.setProperty('--text-secondary', '#333333');
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f0f0f0');
    }

    // Handle reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches || enableReducedMotion) {
        root.style.setProperty('--animation-duration', '0.01ms');
      } else {
        root.style.setProperty('--animation-duration', '0.3s');
      }
    };
    
    handleMotionChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Add keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey === false) {
        const firstFocusable = document.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, showFocusIndicator, enableHighContrast, enableReducedMotion]);

  if (!enabled) return null;

  return (
    <>
      {/* Skip Links */}
      {enableSkipLinks && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-0 left-0 z-50"
          >
            <a
              ref={skipLinkRef}
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => {
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                  mainContent.focus();
                  mainContent.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Skip to main content
            </a>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Accessibility Announcements */}
      <div
        id="accessibility-announcements"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      {/* High Contrast Toggle */}
      {enableHighContrast && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-4 right-4 z-40 bg-gray-800 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => {
            const root = document.documentElement;
            const isHighContrast = root.style.getPropertyValue('--text-primary') === '#000000';
            
            if (isHighContrast) {
              root.style.removeProperty('--text-primary');
              root.style.removeProperty('--text-secondary');
              root.style.removeProperty('--bg-primary');
              root.style.removeProperty('--bg-secondary');
            } else {
              root.style.setProperty('--text-primary', '#000000');
              root.style.setProperty('--text-secondary', '#333333');
              root.style.setProperty('--bg-primary', '#ffffff');
              root.style.setProperty('--bg-secondary', '#f0f0f0');
            }
          }}
          aria-label="Toggle high contrast mode"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        </motion.button>
      )}

      {/* Focus Indicator */}
      {showFocusIndicator && (
        <style jsx>{`
          *:focus-visible {
            outline: var(--focus-ring, 2px solid #3b82f6) !important;
            outline-offset: 2px !important;
          }
          
          .focus-visible {
            outline: var(--focus-ring, 2px solid #3b82f6) !important;
            outline-offset: 2px !important;
          }
        `}</style>
      )}
    </>
  );
}

// Utility function to announce changes to screen readers
export function announceToScreenReader(message: string) {
  const announcement = document.getElementById('accessibility-announcements');
  if (announcement) {
    announcement.textContent = message;
    // Clear after a short delay
    setTimeout(() => {
      announcement.textContent = '';
    }, 1000);
  }
}

// Utility function to manage focus
export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
}

// Utility function to add ARIA labels
export function enhanceAccessibility(element: HTMLElement, label: string, description?: string) {
  element.setAttribute('aria-label', label);
  if (description) {
    element.setAttribute('aria-describedby', description);
  }
  
  // Add role if not already present
  if (!element.getAttribute('role')) {
    if (element.tagName === 'BUTTON') {
      element.setAttribute('role', 'button');
    } else if (element.tagName === 'A') {
      element.setAttribute('role', 'link');
    }
  }
}