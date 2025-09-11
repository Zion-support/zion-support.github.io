<<<<<<< HEAD


interface AccessibilityContextType {;

<<<<<<< HEAD



interface AccessibilityContextType {
interface AccessibilityContextType {;
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccessibilityContextType {
=======
=======



interface AccessibilityContextType {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccessibilityContextType {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
import React, { create_context, useContext, useState, ReactNode } from './react';
;
interface AccessibilityContextType {
  high_contrast: boolean;
  large_text: boolean;
  reduced_motion: boolean;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
}
<<<<<<< HEAD
<<<<<<< HEAD
export const useAccessibility = () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export const useAccessibility = () => {;
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
}
interface AccessibilityProviderProps {
  children: React.ReactNode;
}
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const value = {;
    highContrast,;
    largeText,;
    reducedMotion,;
    toggleHighContrast,;
    toggleLargeText,;
    toggleReducedMotion,;
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <AccessibilityContext && AccessibilityContext.Provider value={value}>;
      <div
        className={`${highContrast ? "high-contrast" : ""} ${largeText ? "large-text" : ""} ${reducedMotion ? "reduced-motion" : ""}`}>;
        {children}
      </div>;
    </AccessibilityContext && AccessibilityContext.Provider>;
  );
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    high_contrast,
    large_text,
    reduced_motion,
    toggleHighContrast,
    toggleLargeText,
    toggleReducedMotion,
  }
;
  return (
    <AccessibilityContext.Provider value={value}>;
      <div;
        className={`${high_contrast ? "high - contrast" : ""} ${large_text ? "large - text" : ""} ${reduced_motion ? "reduced - motion" : ""}`}
      >;
        {children}
      </div>;
    </AccessibilityContext.Provider>);
}
;
export default AccessibilityProvider;
<<<<<<< HEAD
;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};

export default AccessibilityProvider;

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
=======
};

export default AccessibilityProvider;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
