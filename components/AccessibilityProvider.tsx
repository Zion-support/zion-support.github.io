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
<<<<<<< HEAD
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);
<<<<<<< HEAD
=======

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export const useAccessibility = () => {
=======

export const useAccessibility = () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
}
<<<<<<< HEAD
interface AccessibilityProviderProps {
  children: React.ReactNode;
}
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
<<<<<<< HEAD
  children
}) => {
=======
<<<<<<< HEAD
}
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  children,
}) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
=======
};
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default AccessibilityProvider;
=======
export default AccessibilityProvider;
=======
};

export default AccessibilityProvider;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
