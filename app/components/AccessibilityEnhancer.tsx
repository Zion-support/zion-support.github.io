'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableARIALabels = true
}) => {
  const [accessibilityStatus, setAccessibilityStatus] = useState({
    keyboardNavigation: false,
    screenReader: false,
    highContrast: false,
    focusManagement: false,
    ariaLabels: false
  });

  useEffect(() => {
    if (enableKeyboardNavigation) {
      setupKeyboardNavigation();
    }
    if (enableScreenReader) {
      setupScreenReaderSupport();
    }
    if (enableHighContrast) {
      setupHighContrastMode();
    }
    if (enableFocusManagement) {
      setupFocusManagement();
    }
    if (enableARIALabels) {
      setupARIALabels();
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement, enableARIALabels]);

  const setupKeyboardNavigation = () => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links for keyboard navigation
      if (event.key === 'Tab' && event.shiftKey) {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    setAccessibilityStatus(prev => ({ ...prev, keyboardNavigation: true }));
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  };

  const setupScreenReaderSupport = () => {
    // Add screen reader announcements
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

    // Add skip links
    const skipLinks = document.createElement('div');
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);

    setAccessibilityStatus(prev => ({ ...prev, screenReader: true }));
  };

  const setupHighContrastMode = () => {
    // Add high contrast mode support
    const addHighContrastStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .high-contrast {
            background-color: #000 !important;
            color: #fff !important;
            border: 2px solid #fff !important;
          }
          .high-contrast a {
            color: #ffff00 !important;
          }
          .high-contrast button {
            background-color: #000 !important;
            color: #fff !important;
            border: 2px solid #fff !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    addHighContrastStyles();
    setAccessibilityStatus(prev => ({ ...prev, highContrast: true }));
  };

  const setupFocusManagement = () => {
    // Manage focus for modals and dropdowns
    const manageFocus = () => {
      const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
      const dropdowns = document.querySelectorAll('[aria-expanded="true"]');
      
      [...modals, ...dropdowns].forEach(element => {
        const focusableElements = element.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          firstElement.focus();
        }
      });
    };

    // Set up focus trap for modals
    const setupFocusTrap = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
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
      };

      element.addEventListener('keydown', handleTabKey);
      
      return () => {
        element.removeEventListener('keydown', handleTabKey);
      };
    };

    setAccessibilityStatus(prev => ({ ...prev, focusManagement: true }));
  };

  const setupARIALabels = () => {
    // Add ARIA labels to interactive elements
    const addARIALabels = () => {
      // Add labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach((button, index) => {
        const icon = button.querySelector('svg');
        if (icon) {
          const iconName = icon.getAttribute('data-icon') || `icon-${index}`;
          button.setAttribute('aria-label', iconName);
        }
      });

      // Add labels to form inputs
      const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      inputs.forEach((input, index) => {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder) {
          input.setAttribute('aria-label', placeholder);
        }
      });

      // Add role attributes
      const navigation = document.querySelector('nav');
      if (navigation && !navigation.getAttribute('role')) {
        navigation.setAttribute('role', 'navigation');
        navigation.setAttribute('aria-label', 'Main navigation');
      }

      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Run after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addARIALabels);
    } else {
      addARIALabels();
    }

    setAccessibilityStatus(prev => ({ ...prev, ariaLabels: true }));
  };

  // Add CSS for accessibility
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
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
      
      .focus-visible:focus {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
      
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default AccessibilityEnhancer;