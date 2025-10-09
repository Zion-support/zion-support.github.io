<<<<<<< HEAD

'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

/**
 * Accessibility Enhancer Component
 * Provides comprehensive accessibility improvements
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  // Add skip links
  useEffect(() => {
    if (enableSkipLinks) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableSkipLinks]);

  // Add keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (enableKeyboardNav) {
      // Handle keyboard navigation
      if (event.key === 'Tab') {
        // Ensure focus indicators are visible
        document.body.classList.add('keyboard-navigation');
      }
    }
  }, [enableKeyboardNav]);

  useEffect(() => {
    if (enableKeyboardNav) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNav, handleKeyDown]);

  // Add focus indicators
  useEffect(() => {
    if (enableFocusIndicators) {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableFocusIndicators]);
=======
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add keyboard navigation classes
      document.body.classList.add('keyboard-navigation');
      
      // Handle focus management
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
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
    };

    // Enhance focus indicators
    const enhanceFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
        
        .keyboard-navigation button:focus,
        .keyboard-navigation a:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation textarea:focus,
        .keyboard-navigation select:focus {
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3) !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Enhance ARIA labels
    const enhanceARIALabels = () => {
      // Add ARIA labels to interactive elements without them
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add ARIA labels to images without alt text
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        img.setAttribute('alt', `Image ${index + 1}`);
      });
    };

    // Handle reduced motion preference
    const handleReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };

      handleChange(mediaQuery);
      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    };

    // Handle high contrast preference
    const handleHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      handleChange(mediaQuery);
      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    };

    // Initialize all enhancements
    const cleanup = enhanceKeyboardNavigation();
    enhanceFocusIndicators();
    addSkipLinks();
    enhanceARIALabels();
    const cleanupMotion = handleReducedMotion();
    const cleanupContrast = handleHighContrast();

    return () => {
      cleanup?.();
      cleanupMotion?.();
      cleanupContrast?.();
    };
  }, []);
>>>>>>> cursor/analyze-improve-and-deploy-application-bc4a

  return <>{children}</>;
};

export default AccessibilityEnhancer;
