'use client';
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  useEffect(() => {
    // Focus management
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Skip to main content functionality
    const handleSkipToMain = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listeners
    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleSkipToMain);

    // Set up ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Add high contrast mode support
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    const updateHighContrast = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', updateHighContrast);
    updateHighContrast(prefersHighContrast);

    // Add reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    prefersReducedMotion.addEventListener('change', updateReducedMotion);
    updateReducedMotion(prefersReducedMotion);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleSkipToMain);
      prefersHighContrast.removeEventListener('change', updateHighContrast);
      prefersReducedMotion.removeEventListener('change', updateReducedMotion);
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;