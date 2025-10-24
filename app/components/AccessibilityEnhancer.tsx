'use client';

<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation: _enableKeyboardNavigation = true,
  enableScreenReaderSupport: _enableScreenReaderSupport = true,
  enableHighContrast: _enableHighContrast = false,
  enableFocusManagement: _enableFocusManagement = true
}) => {
<<<<<<< HEAD
  useEffect(() => {
    // Enable keyboard navigation
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Enable screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA labels and roles
      const elements = document.querySelectorAll('[data-aria-label]');
      elements.forEach(element => {
        const label = element.getAttribute('data-aria-label');
        if (label) {
          element.setAttribute('aria-label', label);
        }
      });
    }

    // Enable high contrast mode
    if (enableHighContrast) {
      document.body.classList.add('high-contrast');
    }

    // Enable focus management
    if (enableFocusManagement) {
      // Trap focus within modals and dialogs
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }

    return () => {
      if (enableKeyboardNavigation) {
        document.removeEventListener('keydown', handleKeyDown);
      }
      if (enableHighContrast) {
        document.body.classList.remove('high-contrast');
      }
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  const handleKeyDown = (event: KeyboardEvent) => {
    // Handle escape key
    if (event.key === 'Escape') {
      const modals = document.querySelectorAll('[role="dialog"]');
      if (modals.length > 0) {
        const lastModal = modals[modals.length - 1] as HTMLElement;
        lastModal.focus();
      }
    }

    // Handle tab navigation
    if (event.key === 'Tab') {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  return <>{children}</>;
};

export default AccessibilityEnhancer;
=======
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [_fontSize, setFontSize] = useState('medium');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    // Apply accessibility enhancements
    document.documentElement.setAttribute('data-accessibility-enhanced', 'true');
    
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
    
    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

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

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isHighContrast, isReducedMotion]);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    document.documentElement.setAttribute('data-font-size', size);
  };

  return (
    <div className="accessibility-enhanced">
      <div 
        className="accessibility-controls" 
        style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}
      >
        <button
          onClick={toggleHighContrast}
          className="accessibility-button"
          aria-label="Toggle high contrast"
        >
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        </button>
        
        <div className="font-size-controls">
          <button
            onClick={() => changeFontSize('small')}
            className="accessibility-button"
            aria-label="Small font size"
          >
            A
          </button>
          <button
            onClick={() => changeFontSize('medium')}
            className="accessibility-button"
            aria-label="Medium font size"
          >
            A
          </button>
          <button
            onClick={() => changeFontSize('large')}
            className="accessibility-button"
            aria-label="Large font size"
          >
            A
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
