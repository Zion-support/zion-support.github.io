<<<<<<< HEAD
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
import React, { create_context, useContext, useState, ReactNode } from './react';
;
=======
import React, { createContext, useContext, ReactNode } from "react";

>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
interface AccessibilityContextType {
  high_contrast: boolean;
  large_text: boolean;
  reduced_motion: boolean;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

<<<<<<< HEAD
const AccessibilityContext = createContext<;
  AccessibilityContextType | undefined;
>(undefined);
  const context = useContext(AccessibilityContext);
  if (context === undefined) {;
    throw new Error(;
      "useAccessibility must be used within an AccessibilityProvider",;
    );
  }
  return context
};
interface AccessibilityProviderProps {;
  children: React && React.ReactNode;
}
=======
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children,
}) => {
  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById("live-region");
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3

  children,
}) => {;
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );
<<<<<<< HEAD
  return context;
}
;
interface AccessibilityProviderProps {
  children: React.ReactNode;
}
export const AccessibilityProvider: React.FC < AccessibilityProviderProps> = ({
  children,
}) => {
  const [high_contrast, setHighContrast] = useState (false);
  const [large_text, setLargeText] = useState (false);
  const [reduced_motion, setReducedMotion] = useState (false);
;
  const toggleHighContrast = () =>: any setHighContrast (!high_contrast);
  const toggleLargeText = () =>: any setLargeText (!large_text);
  const toggleReducedMotion = () =>: any setReducedMotion (!reduced_motion);
;
  const value = {
    high_contrast,
    large_text,
    reduced_motion,
    toggleHighContrast,
    toggleLargeText,
    toggleReducedMotion,
=======
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider",
    );
  }
  return context;
};
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
