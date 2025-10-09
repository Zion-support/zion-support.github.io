'use client';
import React, { createContext, useContext, useEffect, ReactNode, useCallback } from 'react';

interface AccessibilityContextType {
  announce: (message: string) => void;
  setFocus: (element: HTMLElement) => void;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableSkipLinks?: boolean;
  enableARIALabels?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
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

  useEffect(() => {
    // Create announcement area for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'accessibility-announcements';
    document.body.appendChild(announcement);

    // Add keyboard navigation support
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

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    document.addEventListener('focusin', handleFocusIn);

    // Add high contrast mode support
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleContrastChange);
    if (mediaQuery.matches) {
      document.body.classList.add('high-contrast');
    }

    // Add reduced motion support
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);
    if (motionQuery.matches) {
      document.body.classList.add('reduced-motion');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focusin', handleFocusIn);
      mediaQuery.removeEventListener('change', handleContrastChange);
      motionQuery.removeEventListener('change', handleMotionChange);
      
      const announcement = document.getElementById('accessibility-announcements');
      if (announcement) {
        announcement.remove();
      }
    };
  }, []);

  const announce = (message: string) => {
    const announcement = document.getElementById('accessibility-announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  };

  const setFocus = (element: HTMLElement) => {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const toggleHighContrast = () => {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    announce(`High contrast mode ${isHighContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleReducedMotion = () => {
    document.body.classList.toggle('reduced-motion');
    const isReducedMotion = document.body.classList.contains('reduced-motion');
    announce(`Reduced motion ${isReducedMotion ? 'enabled' : 'disabled'}`);
  };

  const value: AccessibilityContextType = {
    announce,
    setFocus,
    toggleHighContrast,
    toggleReducedMotion,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityEnhancer');
  }
  return context;
};