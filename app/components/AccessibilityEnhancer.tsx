'use client'
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  enableScreenReaderSupport?: boolean;
  enableKeyboardNavigation?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableScreenReaderSupport = true,
  enableKeyboardNavigation = true,
  enableHighContrast = false,
  enableReducedMotion = false
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add screen reader support
    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLinks = document.createElement('div');
      skipLinks.className = 'sr-only';
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      return () => {
        const existingSkipLinks = document.querySelector('.sr-only');
        if (existingSkipLinks) {
          existingSkipLinks.remove();
        }
      };
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add high contrast support
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [enableHighContrast]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add reduced motion support
    if (enableReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [enableReducedMotion]);

  return null;
};

export default AccessibilityEnhancer;
