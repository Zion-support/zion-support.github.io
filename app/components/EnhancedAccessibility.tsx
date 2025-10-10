'use client';
import React, { useEffect, useState } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const { trackEvent } = useAnalytics();

  // High contrast mode detection
  useEffect(() => {
    const checkHighContrast = () => {
      if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-contrast: high)');
        setIsHighContrast(mediaQuery.matches);
        
        const handleContrastChange = (e: MediaQueryListEvent) => {
          setIsHighContrast(e.matches);
        };
        
        mediaQuery.addEventListener('change', handleContrastChange);
        return () => mediaQuery.removeEventListener('change', handleContrastChange);
      }
    };

    const cleanup = checkHighContrast();
    return cleanup;
  }, []);

  // Reduced motion detection
  useEffect(() => {
    const checkReducedMotion = () => {
      if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setIsReducedMotion(mediaQuery.matches);
        
        const handleMotionChange = (e: MediaQueryListEvent) => {
          setIsReducedMotion(e.matches);
        };
        
        mediaQuery.addEventListener('change', handleMotionChange);
        return () => mediaQuery.removeEventListener('change', handleMotionChange);
      }
    };

    const cleanup = checkReducedMotion();
    return cleanup;
  }, []);

  // Font size management
  useEffect(() => {
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem('accessibility-font-size', fontSize.toString());
  }, [fontSize]);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    return () => {
      root.classList.remove('high-contrast', 'reduced-motion');
    };
  }, [isHighContrast, isReducedMotion]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }

      // Track accessibility interactions
      if (event.key === 'Tab') {
        trackEvent('accessibility_interaction', {
          category: 'Accessibility',
          action: 'Keyboard Navigation',
          label: 'Tab Navigation'
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [trackEvent]);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, []);

  // Screen reader announcements
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

  // Expose accessibility functions globally
  useEffect(() => {
    (window as any).accessibility = {
      setFontSize: (size: number) => setFontSize(Math.max(12, Math.min(24, size))),
      announce: announceToScreenReader,
      isHighContrast,
      isReducedMotion
    };
  }, [isHighContrast, isReducedMotion]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default EnhancedAccessibility;