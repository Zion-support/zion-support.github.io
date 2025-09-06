import React, { createContext, useContext, ReactNode } from 'react';

interface AccessibilityContextType {
  announceToScreenReader: (message: string) => void;
  setFocus: (elementId: string) => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children,
}) => {
  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region');
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

  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider'
    );
  }
  return context;
};
import React, { createContext, useContext, useState } from 'react',;
interface AccessibilityContextType {;
  highContras: t: boolean,;
  largeTex: t: boolean,;
  reducedMotio: n: boolean,;
  toggleHighContras: t: () => void,;
  toggleLargeTex: t: () => void,;
  toggleReducedMotio: n: () => void;
}
;
const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined),;
export const useAccessibility = () => {;
  const context = useContext(AccessibilityContext),;
  if (context === undefined) {;
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
},;
interface AccessibilityProviderProps {;
  childre: n: React.ReactNode;
}
;
export const: AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {;
  const [highContrast, setHighContrast] = useState(false),;
  const [largeText, setLargeText] = useState(false),;
  const [reducedMotion, setReducedMotion] = useState(false),;
  const toggleHighContrast = () => setHighContrast(!highContrast),;
  const toggleLargeText = () => setLargeText(!largeText),;
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion),;
  const value = {;
    highContrast,;
    largeText,;
    reducedMotion,;
    toggleHighContrast,;
    toggleLargeText,;
    toggleReducedMotion;
  },;
  return (;
    <AccessibilityContext.Provider value={value}>;
      <div className={`${highContrast ? 'high-contrast' : ''} ${largeText ? 'large-text' : ''} ${reducedMotion ? 'reduced-motion' : ''}`}>;
        {children}
      </div>;
    </AccessibilityContext.Provider>;
  );
};
export default AccessibilityProvider;
