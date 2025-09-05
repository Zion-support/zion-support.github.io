<<<<<<< HEAD
}; return context};
;
interface AccessibilityProviderProps {; children: React.ReactNode};
;
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) = > {; const [highContrast, setHighContrast] = useState(false); const [largeText, setLargeText] = useState(false); const [reducedMotion, setReducedMotion] = useState(false);
; const toggleHighContrast = () = > setHighContrast(!highContrast); const toggleLargeText = () = > setLargeText(!largeText); const toggleReducedMotion = () = > setReducedMotion(!reducedMotion);
; const value = {; highContrast; largeText; reducedMotion; toggleHighContrast; toggleLargeText; toggleReducedMotion};
; return (; <AccessibilityContext.Provider value = {value}>; <div className = {`${highContrast ? 'high-contrast': ''} ${largeText ? 'large-text': ''} ${reducedMotion ? 'reduced-motion': ''}`}>; {children}; </div>; </AccessibilityContext.Provider>; )};
;
export default AccessibilityProvider;
=======
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);

  const value = {
    highContrast,
    largeText,
    reducedMotion,
    toggleHighContrast,
    toggleLargeText,
    toggleReducedMotion,
  };

  useEffect(() => {
    // Apply accessibility settings to document
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (largeText) {
      document.body.classList.add('large-text');
    } else {
      document.body.classList.remove('large-text');
    }

    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }, [highContrast, largeText, reducedMotion]);

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
