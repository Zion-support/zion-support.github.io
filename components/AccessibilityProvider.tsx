<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { createContext, useContext, useState, ReactNode } from "react";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

interface AccessibilityContextType {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
import React, { create_context, useContext, useState, ReactNode } from './react';
;
=======
import React, { createContext, useContext, ReactNode } from "react";

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
interface AccessibilityContextType {
  announceToScreenReader: (message: string) => void;
  setFocus: (elementId: string) => void;
}
<<<<<<< HEAD
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);
export const useAccessibility = () => {

export const useAccessibility = () => {;
=======

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
    const liveRegion = document.getElementById("live-region");
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

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


const AccessibilityContext = createContext<;
  AccessibilityContextType | undefined;
>(undefined);
  const context = useContext(AccessibilityContext);
  if (context === undefined) {;
    throw new Error(;
      "useAccessibility must be used within an AccessibilityProvider",;
=======
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
      "useAccessibility must be used within an AccessibilityProvider",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    );
  }
  return context;
};
<<<<<<< HEAD
interface AccessibilityProviderProps {;
  children: React && React.ReactNode;
}

  children,
}) => {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleLargeText = () => setLargeText(!largeText);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);
  return (
    <AccessibilityContext && AccessibilityContext.Provider value={value}>;
      <div
        className={`${highContrast ? "high-contrast" : ""} ${largeText ? "large-text" : ""} ${reducedMotion ? "reduced-motion" : ""}`}>;
        {children}
      </div>;
    </AccessibilityContext && AccessibilityContext.Provider>;
  );
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
