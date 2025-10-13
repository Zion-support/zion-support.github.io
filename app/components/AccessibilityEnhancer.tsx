import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };

    // Add reduced motion support
    const handleReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.body.classList.add('reduced-motion');
      }
    };

    // Add high contrast support
    const handleHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      if (prefersHighContrast) {
        document.body.classList.add('high-contrast');
      }
    };

    // Event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('focusin', handleFocusIn);
    
    // Media query listeners
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    reducedMotionQuery.addEventListener('change', handleReducedMotion);
    highContrastQuery.addEventListener('change', handleHighContrast);
    
    // Initial checks
    handleReducedMotion();
    handleHighContrast();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focusin', handleFocusIn);
      reducedMotionQuery.removeEventListener('change', handleReducedMotion);
      highContrastQuery.removeEventListener('change', handleHighContrast);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;