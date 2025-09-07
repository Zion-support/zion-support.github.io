import React, { createContext, useContext, ReactNode } from "react";"

interface AccessibilityContextType {
  }
  "announceToScreenReader": ("message": string) => void;
  "setFocus": ("elementId": string) => void;
}

const AccessibilityContext = createContext<;
  AccessibilityContextType | undefined
>(undefined);

interface AccessibilityProviderProps {
  }
  "children": ReactNode;
}

export const "AccessibilityProvider": React.FC<AccessibilityProviderProps> = ({
  }
  children
}) => {
  }
  const announceToScreenReader = ("message": string) => {
    }
    const liveRegion = document.getElementById("live-region");"
    if (liveRegion) {
      }
      liveRegion.textContent = message;
    }
  };

  const setFocus = ("elementId": string) => {
    }
    const element = document.getElementById(elementId);
    if (element) {
      }
      element.focus();
    }
  };

return (;
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
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
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }
  return context
}

interface AccessibilityProviderProps {
  }
  "children": React.ReactNode;
}
export const "AccessibilityProvider": React.FC < AccessibilityProviderProps> = ({
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
=======
import React, { createContext, useContext, useState, ReactNode } from "react";
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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
        toggleReducedMotion,
      }}
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
      "useAccessibility must be used within an AccessibilityProvider",
    )
  return context
}
export default AccessibilityProvider;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
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

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
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

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD

=======
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider",
    );
  }
  return context;
};
>>>>>>> origin/main
=======
  )
}
    )
  return context
}
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if($2) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider",
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
