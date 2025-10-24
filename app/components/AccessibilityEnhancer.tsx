'use client';

import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add high contrast support
    const addHighContrastSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast * {
          filter: contrast(150%) brightness(120%);
        }
      `;
      document.head.appendChild(style);
      return () => document.head.removeChild(style);
    };

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }
        .focus-visible:focus {
          outline: 3px solid #8b5cf6 !important;
        }
      `;
      document.head.appendChild(style);
      return () => document.head.removeChild(style);
    };

    // Add motion preferences support
    const addMotionPreferences = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);
      return () => document.head.removeChild(style);
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach((link) => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50">
          Skip to main content
        </a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
      return () => document.body.removeChild(skipLinks);
    };

    // Add screen reader announcements
    const addScreenReaderAnnouncements = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);
    };

    // Initialize accessibility features
    const cleanupContrast = addHighContrastSupport();
    const cleanupFocus = addFocusIndicators();
    const cleanupMotion = addMotionPreferences();
    const cleanupSkipLinks = addSkipLinks();
    
    addAriaLabels();
    addScreenReaderAnnouncements();

    // Cleanup
    return () => {
      cleanupContrast?.();
      cleanupFocus?.();
      cleanupMotion?.();
      cleanupSkipLinks?.();
    };
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default AccessibilityEnhancer;