import React, { createContext, useContext, useState } from 'react';
interface AccessibilityContextType {
  highContras: boolean,
  largeTex: boolean,
  reducedMotio: boolean,
  toggleHighContras: () => void,
  toggleLargeTex: () => void,
  toggleReducedMotio: () => void
}

const AccessibilityContext = $2;
export const useAccessibility = () => {
  const context = useContext($2);
  if (context = $2;
interface AccessibilityProviderProps {
  childre: React.ReactNode
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState($2);
  const [largeText, setLargeText] = useState($2);
  const [reducedMotion, setReducedMotion] = useState($2);
  const toggleHighContrast = () => setHighContrast($2);
  const toggleLargeText = () => setLargeText($2);
  const toggleReducedMotion = () => setReducedMotion($2);
  const value = $2;
    largeText,
    reducedMotion,
    toggleHighContrast,
    toggleLargeText,
    toggleReducedMotion
  },

  return (
    <AccessibilityContext.Provider value = $2;
export default AccessibilityProvider,