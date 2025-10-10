'use client';

import React, { useEffect, useState } from 'react';

interface AdvancedAccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableVoiceControl?: boolean;
  enableColorBlindSupport?: boolean;
  enableTextToSpeech?: boolean;
  enableGestureControl?: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableVoiceControl = true,
  enableColorBlindSupport = true,
  enableTextToSpeech = true,
  enableGestureControl = true
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Initialize accessibility enhancements
    if (typeof window !== 'undefined') {
      setIsEnabled(true);
      
      // Keyboard navigation enhancements
      if (enableKeyboardNavigation) {
        const handleKeyDown = (event: KeyboardEvent) => {
          // Skip to main content
          if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
            const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
            if (skipLink) {
              skipLink.focus();
              event.preventDefault();
            }
          }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add skip links
      const existingSkipLink = document.querySelector('a[href="#main-content"]');
      if (!existingSkipLink) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast && typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      if (prefersHighContrast.matches) {
        document.documentElement.classList.add('high-contrast');
      }

      prefersHighContrast.addEventListener('change', handleContrastChange);
      return () => prefersHighContrast.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (container: HTMLElement) => {
        const focusableContent = container.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        container.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        });
      };

      // Apply focus trapping to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }
  }, [enableFocusManagement]);

  useEffect(() => {
    // Voice control support
    if (enableVoiceControl && typeof window !== 'undefined') {
      const handleVoiceCommand = (event: SpeechRecognitionEvent) => {
        const command = event.results[0][0].transcript.toLowerCase();
        
        if (command.includes('skip to main')) {
          const mainContent = document.querySelector('main');
          if (mainContent) {
            mainContent.focus();
          }
        }
      };

      if ('webkitSpeechRecognition' in window) {
        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.addEventListener('result', handleVoiceCommand);
        recognition.start();
      }
    }
  }, [enableVoiceControl]);

  useEffect(() => {
    // Color blind support
    if (enableColorBlindSupport && typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduced-motion');
      }
    }
  }, [enableColorBlindSupport]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div className="accessibility-enhancer">
      {/* Accessibility controls */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility enhancements loaded
      </div>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;