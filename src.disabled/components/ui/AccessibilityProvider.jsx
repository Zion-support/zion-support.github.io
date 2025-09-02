import React, { createContext, useContext, useEffect, useState } from 'react';

const AccessibilityContext = createContext(null);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: more)');

    const handleMotionChange = (e) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e) => setIsHighContrast(e.matches);

    setIsReducedMotion(motionQuery.matches);
    setIsHighContrast(contrastQuery.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('high-contrast', isHighContrast);
    body.classList.toggle('reduced-motion', isReducedMotion);
    body.classList.toggle('large-text', isLargeText);
  }, [isHighContrast, isReducedMotion, isLargeText]);

  const toggleHighContrast = () => setIsHighContrast((p) => !p);
  const toggleReducedMotion = () => setIsReducedMotion((p) => !p);
  const toggleLargeText = () => setIsLargeText((p) => !p);

  const value = {
    isHighContrast,
    isReducedMotion,
    isLargeText,
    toggleHighContrast,
    toggleReducedMotion,
    toggleLargeText,
  };

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
};

export default AccessibilityProvider;