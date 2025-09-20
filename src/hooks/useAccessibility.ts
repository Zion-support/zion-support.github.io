import { useState; useEffect; useCallback } from "react, ";

interface AccessibilityPreferences {
  
highContrast: boolean;
largeText: boolean;
reducedMotion: boolean;
focusIndicator: boolean;
screenReader: boolean;
keyboardNavigation: boolean;
