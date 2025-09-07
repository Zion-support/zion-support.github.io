<<<<<<< HEAD
}
const AccessibilityContext = createContext<
=======

}

const AccessibilityContext = createContext<;
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
  AccessibilityContextType | undefined
>(undefined);
interface AccessibilityProviderProps {
  }
  "children": ReactNode;
}
<<<<<<< HEAD
  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );
=======


}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error(useAccessibility must be used within an AccessibilityProvider')
=======
'use client;

import React, { createContext, useContext, useEffect, useState } from react';

interface AccessibilityContextType {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small | medium' | 'large;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  setFontSize: (size: small' | 'medium | large') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }
  return context
}

interface AccessibilityProviderProps {
  }
  "children": React.ReactNode;
}

=======


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
=======
  return (
    <AccessibilityContext.Provider
      value={{
        announceToScreenReader,
        setFocus,
        highContrast,
        largeText,
        reducedMotion,
        toggleHighContrast,
        toggleLargeText,
        toggleReducedMotion}}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}
    )
  return context
}
export const useAccessibility = () => {
  if($2) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider,
    )
  return context
}
export default AccessibilityProvider;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
=======
use client';

import React, { createContext, useContext, useEffect, useState } from 'react;

interface AccessibilityContextType {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: small' | 'medium | large';
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  setFontSize: (size: 'small | medium' | 'large) => void;
}


export function useAccessibility() {
  if (context === undefined) {
    throw new Error(useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
export default function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small | medium' | 'large>(medium');

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia((prefers-reduced-motion: reduce));
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener(change, handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    document.documentElement.setAttribute('data-high-contrast', highContrast.toString());
    document.documentElement.setAttribute(data-reduced-motion, reducedMotion.toString());
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [highContrast, reducedMotion, fontSize]);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  }

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  }

  const value = {
    highContrast,
    reducedMotion,
    fontSize,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>

=======
  )
}
    )
  return context
}
export const useAccessibility = () => {
  if($2) {
    throw new Error(
      useAccessibility must be used within an AccessibilityProvider",
    )
  return context
}
export default AccessibilityProvider;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
  );
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
