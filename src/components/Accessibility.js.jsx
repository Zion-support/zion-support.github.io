import React, { createContext, useContext, useEffect, useState } from 'react';

const AccessibilityContext = createContext(null);

export const useAccessibility = () => {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibility must be used within an AccessibilityProvider');
  return ctx;
};

export const AccessibilityProvider = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('high-contrast', highContrast);
    root.classList.toggle('reduced-motion', reducedMotion);
  }, [highContrast, reducedMotion]);

  const value = { highContrast, reducedMotion, setHighContrast, setReducedMotion };
  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
};

export default AccessibilityProvider;