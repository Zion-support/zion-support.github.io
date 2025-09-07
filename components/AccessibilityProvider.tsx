<<<<<<< HEAD
<<<<<<< HEAD

=======
import React, { createContext, useContext, ReactNode } from "react";

interface AccessibilityContextType {
  announceToScreenReader: (message: string) => void;
  setFocus: (elementId: string) => void;
>>>>>>> origin/main
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

<<<<<<< HEAD
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

  const setFocus = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };

>>>>>>> origin/main
=======
import React, { createContext, useContext, useState } from 'react'
interface AccessibilityContextType {
  highContrast: boolean
  largeText: boolean
  reducedMotion: boolean
  toggleHighContrast: () => void
  toggleLargeText: () => void
  toggleReducedMotion: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}
interface AccessibilityProviderProps {
  children: React.ReactNode
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const toggleHighContrast = () => setHighContrast(!highContrast)
  const toggleLargeText = () => setLargeText(!largeText)
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion)
  const value = {
    highContrast,
    largeText,
    reducedMotion,
    toggleHighContrast,
    toggleLargeText,
    toggleReducedMotion,
  }
  return (
    <AccessibilityContext.Provider value={value}>
      <div className={`${highContrast ? 'high-contrast' : ''} ${largeText ? 'large-text' : ''} ${reducedMotion ? 'reduced-motion' : ''}`}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  )
}
export default AccessibilityProvider
=======
import React, { createContext, useContext, useState, ReactNode } from "react";
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
<<<<<<< HEAD
  );
<<<<<<< HEAD

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
>>>>>>> origin/main
=======
  )
}
    )
  return context
}
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if($2) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider",
    )
  return context
}
export default AccessibilityProvider;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
