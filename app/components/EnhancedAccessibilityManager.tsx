'use client';

import React, { useEffect, memo, useState } from 'react';

interface EnhancedAccessibilityManagerProps {
  enableAutoDetection?: boolean;
  enableKeyboardShortcuts?: boolean;
  enableScreenReaderOptimization?: boolean;
  enableHighContrastMode?: boolean;
  enableFocusManagement?: boolean;
  children?: React.ReactNode;
}

const EnhancedAccessibilityManager: React.FC<EnhancedAccessibilityManagerProps> = memo(({
  enableAutoDetection = true,
  enableKeyboardShortcuts = true,
  enableScreenReaderOptimization = true,
  enableHighContrastMode = true,
  enableFocusManagement = true,
  children
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isScreenReaderActive, setIsScreenReaderActive] = useState(false);

  useEffect(() => {
    if (!enableAutoDetection) return;

    const checkScreenReader = () => {
      const isScreenReader = window.speechSynthesis?.speaking || 
                            document.querySelector('[aria-live]') ||
                            window.navigator.userAgent.includes('NVDA') ||
                            window.navigator.userAgent.includes('JAWS');
      setIsScreenReaderActive(!!isScreenReader);
    };

    checkScreenReader();
    window.addEventListener('focus', checkScreenReader);
    return () => window.removeEventListener('focus', checkScreenReader);
  }, [enableAutoDetection]);

  useEffect(() => {
    if (!enableHighContrastMode) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e) => setIsHighContrast(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableHighContrastMode]);

  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (e) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case 'h':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            setIsHighContrast(prev => !prev);
          }
          break;
        case 'k':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const focusableElements = document.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            firstElement?.focus();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts]);

  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (isScreenReaderActive) {
      document.body.classList.add('screen-reader-active');
    } else {
      document.body.classList.remove('screen-reader-active');
    }
  }, [isHighContrast, isScreenReaderActive]);

  return (
    <div className="accessibility-manager">
      {children}
    </div>
  );
});

EnhancedAccessibilityManager.displayName = 'EnhancedAccessibilityManager';

export default EnhancedAccessibilityManager;
