<<<<<<< HEAD
import React, { createContext, useContext, ReactNode } from 'react';'

interface AccessibilityContextType {
  }
  'announceToScreenReader': ('message': string) => void;
  'setFocus': ('elementId': string) => void;
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
}

const AccessibilityContext = createContext<;
  AccessibilityContextType | undefined
>(undefined);
<<<<<<< HEAD

interface AccessibilityProviderProps {
  }
  'children': ReactNode;
=======
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
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> origin/resolved-merge-conflicts
}

export const 'AccessibilityProvider': React.FC<AccessibilityProviderProps> = ({
  }
  children
}) => {
  }
  const announceToScreenReader = ('message': string) => {
    }
    const liveRegion = document.getElementById('live-region');'
    if (liveRegion) {
      }
      liveRegion.textContent = message;
    }
  };

  const setFocus = ('elementId': string) => {
    }
    const element = document.getElementById(elementId);
    if (element) {
      }
      element.focus();
    }
  };

return (;
    <AccessibilityContext.Provider value={ announceToScreenReader, setFocus }>
      {children}
    </AccessibilityContext.Provider>
  );
  return context;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
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
  return context
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);
interface AccessibilityProviderProps {
  }
  "children": ReactNode;
}
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

interface AccessibilityProviderProps {
  }
  'children': React.ReactNode;
}
export const 'AccessibilityProvider': React.FC < AccessibilityProviderProps> = ({
  }
  children
}) => {
  }
  const [high_contrast, setHighContrast] = useState (false);
  const [large_text, setLargeText] = useState (false);
  const [reduced_motion, setReducedMotion] = useState (false);
;
  const toggleLargeText = () =>: any setLargeText (!large_text);
  const toggleReducedMotion = () =>: any setReducedMotion (!reduced_motion);
;
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
import React, { createContext, useContext, useState, ReactNode } from 'react';
  }
  return (
    <AccessibilityContext.Provider
      value={
        announceToScreenReader,
        setFocus,
        highContrast,
        largeText,
        reducedMotion,
        toggleHighContrast,
        toggleLargeText,
        toggleReducedMotion,
      }
    >
      {children}
    </AccessibilityContext.Provider>
  )
}
    )
  return context
}
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if($2) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider',
    )
  return context
}
export default AccessibilityProvider;
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

};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider',
    );
  }
  return context;
};
  )
}
    )
  return context
}
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if($2) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider',
    )
  return context
}
export default AccessibilityProvider;
  );
}
<<<<<<< HEAD
=======
  );
=======
  );
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
