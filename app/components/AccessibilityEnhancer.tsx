'use client';

import React, { useEffect, useState, memo } from 'react';
import dynamic from 'next/dynamic';
import { addFocusIndicators, improveKeyboardNavigation, addSkipLinks } from './accessibility/AccessibilityUtils';

// Dynamically import the controls component
const AccessibilityControls = dynamic(() => import('./accessibility/AccessibilityControls'), {
  ssr: false,
  loading: () => <div className="sr-only">Loading accessibility controls...</div>,
});

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = memo(({ 
  className = '', 
  children 
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const applyAccessibilityFeatures = React.useCallback(() => {
    const root = document.documentElement;

    // Apply high contrast
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-xl');
    root.classList.add(`font-${fontSize}`);

    // Apply reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Add focus indicators
    addFocusIndicators();

    // Improve keyboard navigation
    improveKeyboardNavigation();

    // Add skip links
    addSkipLinks();
  }, [isHighContrast, fontSize, reducedMotion]);

  useEffect(() => {
    // Check for user preferences
    const savedHighContrast = localStorage.getItem('high-contrast') === 'true';
    const savedFontSize = localStorage.getItem('font-size') || 'normal';
    const savedReducedMotion = localStorage.getItem('reduced-motion') === 'true';

    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    setReducedMotion(savedReducedMotion);

    // Check for system preferences
    if (window.matchMedia) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (prefersReducedMotion.matches) {
        setReducedMotion(true);
      }
    }

    // Show controls after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    applyAccessibilityFeatures();
  }, [applyAccessibilityFeatures]);

  const handleHighContrastToggle = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('high-contrast', newValue.toString());
  };

  const handleFontSizeChange = (newSize: string) => {
    setFontSize(newSize);
    localStorage.setItem('font-size', newSize);
  };

  const handleReducedMotionToggle = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('reduced-motion', newValue.toString());
  };

  return (
    <div className={`accessibility-enhancer ${className}`}>
      {children}
      {isVisible && (
        <AccessibilityControls
          isHighContrast={isHighContrast}
          fontSize={fontSize}
          reducedMotion={reducedMotion}
          onHighContrastToggle={handleHighContrastToggle}
          onFontSizeChange={handleFontSizeChange}
          onReducedMotionToggle={handleReducedMotionToggle}
        />
      )}
    </div>
  );
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;