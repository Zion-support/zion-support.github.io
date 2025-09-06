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
import React, { createContext, useContext, ReactNode } from 'react';
interface AccessibilityContextType {_announceToScreenReader: (_message: string) => void;
  setFocus: (_elementId: string) => void;}

const _AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

interface AccessibilityProviderProps {_children: ReactNode;}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = (_{_children, _}) => {_const _announceToScreenReader = (_message: string) => {
    const _liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;}
  };

  const _setFocus = (_elementId: string) => {_const _element = document.getElementById(elementId);
    if (element) {
      element.focus();}
  };

  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}    <AccessibilityContext.Provider value={_{ announceToScreenReader, _setFocus}}>
      {_children}
    </AccessibilityContext.Provider>
  )
}

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);  if (context === undefined) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider'
    );}
  return context;
};
export default AccessibilityProvider;

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

  const value = {    highContrast,
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