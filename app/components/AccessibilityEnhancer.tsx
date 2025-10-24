'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableVoiceNavigation?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  enableVoiceNavigation = false
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    if (enableKeyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    }

    if (enableScreenReaderSupport) {
      // Add screen reader support
      const skipLinks = document.querySelectorAll('[data-skip-link]');
      skipLinks.forEach(link => {
        link.setAttribute('tabindex', '0');
      });
    }

    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    if (enableFocusManagement) {
      // Focus management
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach(element => {
        element.setAttribute('tabindex', '0');
      });
    }

    if (enableVoiceNavigation) {
      // Voice navigation support
      const voiceElements = document.querySelectorAll('[data-voice-command]');
      voiceElements.forEach(element => {
        element.setAttribute('aria-label', element.textContent || '');
      });
    }

    return () => {
      // Cleanup
      document.body.classList.remove('keyboard-navigation');
      document.documentElement.classList.remove('high-contrast');
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement, enableVoiceNavigation]);

  return (
    <div
      className={`accessibility-enhancer ${
        enableHighContrast ? 'high-contrast' : ''
      }`}
      role="main"
      aria-label="Enhanced accessibility container"
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;