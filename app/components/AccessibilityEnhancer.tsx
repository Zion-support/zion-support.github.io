import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.getElementById('skip-to-main');
        if (skipLink) {
          (skipLink as HTMLElement).focus();
        }
      }
    };

    // High contrast mode detection
    const handleHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    // Reduced motion detection
    const handleReducedMotion = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    // Focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.classList.contains('focus-visible')) {
        target.classList.add('focus-ring');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.classList.contains('focus-visible')) {
        target.classList.remove('focus-ring');
      }
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', handleHighContrast);
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', handleReducedMotion);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Initialize
    handleHighContrast();
    handleReducedMotion();

    // Add skip link if it doesn't exist
    if (!document.getElementById('skip-to-main')) {
      const skipLink = document.createElement('a');
      skipLink.id = 'skip-to-main';
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.matchMedia('(prefers-contrast: high)').removeEventListener('change', handleHighContrast);
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', handleReducedMotion);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;