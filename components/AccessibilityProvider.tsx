interface AccessibilityContextType {;


interface AccessibilityContextType {
interface AccessibilityContextType {;
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccessibilityContextType {
=======
=======



interface AccessibilityContextType {>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccessibilityContextType {>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
import React, { create_context, useContext, useState, ReactNode } from './react';
;
interface AccessibilityContextType {
  high_contrast: boolean;
  large_text: boolean;
  reduced_motion: boolean;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
}


export const useAccessibility = () => {;
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
=======
const AccessibilityContext = createContext<;
  AccessibilityContextType | undefined;
>(undefined);

export const useAccessibility = () => {;
  const context = useContext(AccessibilityContext);
  if (context === undefined) {;
    throw new Error(;
      "useAccessibility must be used within an AccessibilityProvider",;
    );
  }
  return context;
};
interface AccessibilityProviderProps {;
  children: React && React.ReactNode;
}

  children,
}) => {;

  children,
}) => {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const value = {;
    highContrast,;
    largeText,;
    reducedMotion,;
    toggleHighContrast,;
    toggleLargeText,;
    toggleReducedMotion,;
  };
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <AccessibilityContext && AccessibilityContext.Provider value={value}>;
      <div
        className={`${highContrast ? "high-contrast" : ""} ${largeText ? "large-text" : ""} ${reducedMotion ? "reduced-motion" : ""}`}>;
        {children}
      </div>;
    </AccessibilityContext && AccessibilityContext.Provider>;
  );
=======
};

export default AccessibilityProvider;

export default AccessibilityProvider;
}
export default AccessibilityProvider;
};

export default AccessibilityProvider;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};

export default AccessibilityProvider;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
