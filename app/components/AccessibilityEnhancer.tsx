'use client';
import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableSkipLinks?: boolean;
  enableARIALabels?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableSkipLinks = true,
  enableARIALabels = true
}) => {
  // Add skip links
  useEffect(() => {
    if (enableSkipLinks) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      skipLink.setAttribute('tabindex', '1');
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableSkipLinks]);

  // Add keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (enableKeyboardNavigation) {
      // Handle keyboard navigation
      if (event.key === 'Tab') {
        // Ensure focus indicators are visible
        document.body.classList.add('keyboard-navigation');
      }
      
      // Handle escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
      
      // Handle arrow keys for navigation
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusableElements = document.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
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
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation, handleKeyDown]);

  // Add focus indicators
  useEffect(() => {
    if (enableFocusManagement) {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        .keyboard-navigation button:focus,
        .keyboard-navigation a:focus {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
          box-shadow: 0 0 0 4px rgba(0, 255, 255, 0.2);
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableFocusManagement]);

  // Add ARIA labels and roles
  useEffect(() => {
    if (enableARIALabels) {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      // Add ARIA labels to buttons without text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        const icon = button.querySelector('svg');
        if (icon && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add ARIA labels to images without alt text
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        img.setAttribute('alt', `Image ${index + 1}`);
      });

      // Add ARIA labels to form inputs
      const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      inputs.forEach((input) => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
          input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
        }
      });
    }
  }, [enableARIALabels]);

  // Add high contrast mode support
  useEffect(() => {
    if (enableHighContrast) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      // Check initial state
      if (mediaQuery.matches) {
        document.body.classList.add('high-contrast');
      }

      // Listen for changes
      mediaQuery.addEventListener('change', handleContrastChange);

      return () => {
        mediaQuery.removeEventListener('change', handleContrastChange);
      };
    }
  }, [enableHighContrast]);

  // Add reduced motion support
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    // Check initial state
    if (mediaQuery.matches) {
      document.body.classList.add('reduced-motion');
    }

    // Listen for changes
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Add screen reader announcements
  useEffect(() => {
    if (enableScreenReaderSupport) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);
    }
  }, [enableScreenReaderSupport]);

  return null;
};

export default AccessibilityEnhancer;