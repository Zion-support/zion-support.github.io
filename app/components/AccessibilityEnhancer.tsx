'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  enableReducedMotion = true,
  children
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Handle high contrast mode
  useEffect(() => {
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      document.documentElement.classList.remove('high-contrast');
    };
  }, [enableHighContrast]);

  // Handle reduced motion preference
  useEffect(() => {
    if (enableReducedMotion) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('reduced-motion');
        } else {
          document.documentElement.classList.remove('reduced-motion');
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      
      if (mediaQuery.matches) {
        document.documentElement.classList.add('reduced-motion');
      }

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        document.documentElement.classList.remove('reduced-motion');
      };
    }
  }, [enableReducedMotion]);

  // Handle keyboard navigation
  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
        
        // Handle escape key for closing modals/dropdowns
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableKeyboardNavigation]);

  // Handle focus management
  useEffect(() => {
    if (enableFocusManagement) {
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          // Add focus ring for better visibility
          target.classList.add('focus-visible');
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.classList.remove('focus-visible');
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [enableFocusManagement]);

  // Handle screen reader announcements
  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Create a live region for screen reader announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'screen-reader-announcements';
      document.body.appendChild(liveRegion);

      return () => {
        const existingLiveRegion = document.getElementById('screen-reader-announcements');
        if (existingLiveRegion) {
          existingLiveRegion.remove();
        }
      };
    }
  }, [enableScreenReaderSupport]);

  // Add skip links for keyboard navigation
  useEffect(() => {
    if (enableKeyboardNavigation) {
      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);

      return () => {
        const existingSkipLinks = document.querySelector('.skip-links');
        if (existingSkipLinks) {
          existingSkipLinks.remove();
        }
      };
    }
  }, [enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
