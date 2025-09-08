
<<<<<<< HEAD

}
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

=======
import React, { createContext, useContext, ReactNode } from 'react';

interface AccessibilityContextType {
  announceToScreenReader: (message: string) => void;
  setFocus: (elementId: string) => void;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
import React, { create_context, useContext, useState, ReactNode } from './react';
;
interface AccessibilityContextType {
  high_contrast: boolean;
  large_text: boolean;
  reduced_motion: boolean;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
}
<<<<<<< HEAD




interface AccessibilityProviderProps {
=======
export const useAccessibility = () => {

interface AccessibilityProviderProps {
  children: ReactNode;
'use client';
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
  }
  "children": ReactNode;
}


  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);




  const value = {;
    highContrast,;
    largeText,;
    reducedMotion,;
    toggleHighContrast,;
    toggleLargeText,;
    toggleReducedMotion,;
  };




  return (
    <AccessibilityContext && AccessibilityContext.Provider value={value}>;
      <div
        className={`${highContrast ? "high-contrast" : ""} ${largeText ? "large-text" : ""} ${reducedMotion ? "reduced-motion" : ""}`}>;
        {children}
      </div>;
    </AccessibilityContext && AccessibilityContext.Provider>;
  );


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
interface AccessibilityContextType {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD




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


  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };




  );
}






=======
const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context
}

  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );
}
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);
interface AccessibilityProviderProps {
  }
  "children": ReactNode;
}
  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
