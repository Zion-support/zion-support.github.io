<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
}
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);
=======

interface AccessibilityContextType {;

<<<<<<< HEAD



interface AccessibilityContextType {
interface AccessibilityContextType {;
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccessibilityContextType {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
<<<<<<< HEAD
import React, { createContext, useContext, ReactNode } from 'react';

interface AccessibilityContextType {
<<<<<<< HEAD
  announceToScreenReader: (message: string) => void;
  setFocus: (elementId: string) => void;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
import React, { create_context, useContext, useState, ReactNode } from './react';
;
interface AccessibilityContextType {
  high_contrast: boolean;
  large_text: boolean;
  reduced_motion: boolean;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
}
<<<<<<< HEAD
export const useAccessibility = () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/chore/fix-lint-and-merge
interface AccessibilityProviderProps {
<<<<<<< HEAD
  children: ReactNode;
=======
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

<<<<<<< HEAD
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
'use client';

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
=======
export const useAccessibility = () => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
  }
  "children": ReactNode;
}
<<<<<<< HEAD

interface AccessibilityProviderProps {
<<<<<<< HEAD
  }
  "children": React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const toggleHighContrast = () => setHighContrast(!highContrast)
  const toggleLargeText = () => setLargeText(!largeText)
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion)
=======
  children: React.ReactNode;
}
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
interface AccessibilityProviderProps {
  children: React.ReactNode;
}
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children
}) => {
  children,
}) => {;
=======
=======

  children,
}) => {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const value = {;
    highContrast,;
    largeText,;
    reducedMotion,;
    toggleHighContrast,;
    toggleLargeText,;
    toggleReducedMotion,;
  };
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <AccessibilityContext && AccessibilityContext.Provider value={value}>;
      <div
        className={`${highContrast ? "high-contrast" : ""} ${largeText ? "large-text" : ""} ${reducedMotion ? "reduced-motion" : ""}`}>;
        {children}
      </div>;
    </AccessibilityContext && AccessibilityContext.Provider>;
  );

<<<<<<< HEAD
}
export default AccessibilityProvider;
=======
const AccessibilityContext = create_context<;
  AccessibilityContextType | undefined;
>(undefined);
;
export const use_accessibility = () =>: any {
  const context = useContext (AccessibilityContext);
  // Check condition
if ( {) {
  $2
}
    throw new Error (
      "use_accessibility must be used within an AccessibilityProvider",
    );
  }
  return context;
}
;
interface AccessibilityProviderProps {
  children: React.ReactNode;
}
export const AccessibilityProvider: React.FC < AccessibilityProviderProps> = ({
  children,
}) => {
  const [high_contrast, setHighContrast] = useState (false);
  const [large_text, setLargeText] = useState (false);
  const [reduced_motion, setReducedMotion] = useState (false);
;
  const toggleHighContrast = () =>: any setHighContrast (!high_contrast);
  const toggleLargeText = () =>: any setLargeText (!large_text);
  const toggleReducedMotion = () =>: any setReducedMotion (!reduced_motion);
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const value = {
    }
    high_contrast,
    large_text,
    reduced_motion,
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
import React, { createContext, useContext, useState, ReactNode } from "react";
  }
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
'use client';
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


=======
<<<<<<< HEAD
const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = React.useState(false);
  const [largeText, setLargeText] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

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

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const toggleLargeText = () => {
    setLargeText(!largeText);
=======
>>>>>>> origin/chore/fix-lint-and-merge
export function useAccessibility() {
  if (context === undefined) {
    throw new Error(useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

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
<<<<<<< HEAD
  }

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  }
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };
<<<<<<< HEAD

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
        toggleReducedMotion,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
=======
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
  const value = {
    highContrast,
    reducedMotion,
    fontSize,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize}

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
<<<<<<< HEAD
  );

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
  );
}
  );
=======
  );
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
};

export default AccessibilityProvider;
}
export default AccessibilityProvider;
};

export default AccessibilityProvider;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
