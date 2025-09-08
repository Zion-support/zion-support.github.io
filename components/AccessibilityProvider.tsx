import React, { createContext, useContext, useState } from 'react';

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

  const value = {
    highContrast,
    largeText,
    reducedMotion,
    toggleHighContrast,
    toggleLargeText,
    toggleReducedMotion
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};