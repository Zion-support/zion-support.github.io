import React, { useEffect } from 'react';

const AccessibilityEnhancements: React.FC = () => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.top = '0';
      skipLink.style.zIndex = '9999';
      skipLink.style.padding = '8px 16px';
      skipLink.style.backgroundColor = '#2563eb';
      skipLink.style.color = 'white';
      skipLink.style.borderRadius = '4px';
      skipLink.style.textDecoration = 'none';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '16px';
        skipLink.style.top = '16px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
        skipLink.style.top = '0';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add focus management
    const addFocusManagement = () => {
      // Add focus indicators to all interactive elements
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
      interactiveElements.forEach((element) => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).style.outline = '2px solid #8b5cf6';
          (e.target as HTMLElement).style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).style.outline = 'none';
        });
      });
    };

    // Add ARIA live region for announcements
    const addLiveRegion = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    // Add keyboard navigation enhancements
    const addKeyboardNavigation = () => {
      // Handle escape key for modals and dropdowns
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          // Close any open modals or dropdowns
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach((dropdown) => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          });
        }
      });

      // Handle tab navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      // Remove keyboard navigation class on mouse use
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Add high contrast mode detection
    const addHighContrastDetection = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };
      
      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);
    };

    // Add reduced motion detection
    const addReducedMotionDetection = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };
      
      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);
    };

    // Initialize all accessibility enhancements
    addSkipLink();
    addFocusManagement();
    addLiveRegion();
    addKeyboardNavigation();
    addHighContrastDetection();
    addReducedMotionDetection();

    // Cleanup function
    return () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancements;