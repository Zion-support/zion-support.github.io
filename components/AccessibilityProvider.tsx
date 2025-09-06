<<<<<<< HEAD
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
=======
import React, { createContext, useContext, ReactNode } from 'react';
 f6b849a806966ab0803a1eba10ab812addf04f56
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

}

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
  return context;
};
interface AccessibilityProviderProps {;
  children: React && React.ReactNode;
}

  children,
}) => {;
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);
=======
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
 f6b849a806966ab0803a1eba10ab812addf04f56
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

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );

 a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
