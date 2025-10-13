'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    const addSkipLinks = () => {
      const existingSkipLink = document.querySelector('.skip-link');
      if (!existingSkipLink) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return;
      
      // Add focus management for better keyboard navigation
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          const focusable = Array.from(document.querySelectorAll(focusableElements));
          const firstFocusable = focusable[0] as HTMLElement;
          const lastFocusable = focusable[focusable.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable?.focus();
              e.preventDefault();
            }
          }
        }
      });
    };

    const enhanceScreenReaderSupport = () => {
      if (!enableScreenReaderSupport) return;
      
      // Add ARIA labels to interactive elements without proper labels
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add role attributes where needed
      const clickableDivs = document.querySelectorAll('div[onclick], div[role="button"]');
      clickableDivs.forEach(div => {
        if (!div.getAttribute('role')) {
          div.setAttribute('role', 'button');
          div.setAttribute('tabindex', '0');
        }
      });
    };

    const enhanceHighContrast = () => {
      if (!enableHighContrast) return;
      
      // Add high contrast mode support
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const applyHighContrast = (matches: boolean) => {
        if (matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      applyHighContrast(prefersHighContrast.matches);
      prefersHighContrast.addEventListener('change', applyHighContrast);
    };

    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;
      
      // Add keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Alt + M for main content
        if (e.altKey && e.key === 'm') {
          const mainContent = document.getElementById('main-content');
          mainContent?.focus();
          e.preventDefault();
        }
        
        // Alt + N for navigation
        if (e.altKey && e.key === 'n') {
          const navigation = document.querySelector('nav');
          const firstLink = navigation?.querySelector('a');
          firstLink?.focus();
          e.preventDefault();
        }
      });
    };

    // Apply enhancements
    addSkipLinks();
    enhanceFocusManagement();
    enhanceScreenReaderSupport();
    enhanceHighContrast();
    enhanceKeyboardNavigation();

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('.skip-link');
      skipLink?.remove();
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;