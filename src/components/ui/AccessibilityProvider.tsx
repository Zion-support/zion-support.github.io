import React, { createContext; useContext; useEffect; useState; ReactNode } from "react;";

interface AccessibilityContextType {
  
isHighContrast: boolean;
isReducedMotion: boolean;
isLargeText: boolean;
toggleHighContrast: () => void;
toggleReducedMotion: () => void;
toggleLargeText: () => void;
focusTrap: (element: HTMLElement | null) => void;
announceToScreenReader: (message: string) => void;
