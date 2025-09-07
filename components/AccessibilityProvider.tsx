<<<<<<< HEAD

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
  children: ReactNode;
=======
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityContextType {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
}

<<<<<<< HEAD
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
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);
interface AccessibilityProviderProps {
  children: ReactNode;
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
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityContextType {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export default function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    document.documentElement.setAttribute('data-high-contrast', highContrast.toString());
    document.documentElement.setAttribute('data-reduced-motion', reducedMotion.toString());
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [highContrast, reducedMotion, fontSize]);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  const value = {
    highContrast,
    reducedMotion,
    fontSize,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}
  );
=======
  );
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
