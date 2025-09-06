import React, { createContext, useContext, useState, ReactNode } from "react";
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface AccessibilityContextType {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
}
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
}
interface AccessibilityProviderProps {
  children: React.ReactNode;
}
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children
}) => {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);
  const value = {
    highContrast
    largeText
    reducedMotion
    toggleHighContrast
    toggleLargeText
    toggleReducedMotion
  }
  return (
    <AccessibilityContext.Provider value={value}>
      <div
        className={`${highContrast ? "high-contrast" : ""} ${largeText ? "large-text" : ""} ${reducedMotion ? "reduced-motion" : ""}`}
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
<<<<<<< HEAD
}
export default AccessibilityProvider;
=======
};

export default AccessibilityProvider;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
