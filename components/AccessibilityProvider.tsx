}
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);
=======
<<<<<<< HEAD
import React, { createContext, useContext, ReactNode } from 'react';

interface AccessibilityContextType {
  announceToScreenReader: (message: string) => void;
  setFocus: (elementId: string) => void;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
}

>>>>>>> origin/chore/fix-lint-and-merge
interface AccessibilityProviderProps {
  }
  "children": ReactNode;
}
  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );
