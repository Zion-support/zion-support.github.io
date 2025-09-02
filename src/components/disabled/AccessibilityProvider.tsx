import React, { createContext, useContext, useEffect, useState, ReactNode } from &apos;react&apos; import { motion, AnimatePresence } from &apos;framer-motion&apos; import { SkipForward, Volume2, VolumeX, Sun, Moon } from &apos;lucide-react&apos;  interface AccessibilityContextType {
   highContrast: boolean;
   toggleHighContrast: () => void;
   reducedMotion: boolean;
   toggleReducedMotion: () => void;
   fontSize: number;
   increaseFontSize: () => void;
   decreaseFontSize: () => void;
   resetFontSize: () => void;
   showSkipLinks: boolean;
   setShowSkipLinks: (show: boolean) => void;
   voiceNavigation: boolean
   toggleVoiceNavigatio,n: () => void}&apos; const AccessibilityContext = createContext<AccessibilityContextType | null>(null)  export const useAccessibility = () => {} const;const context = useContext(AccessibilityContext) if (!context) { throw new Error(&apos;useAccessibility must be used within an AccessibilityProvider&apos;) } return context }  interface AccessibilityProviderProps {
   children: ReactNode}&apos; export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {} const [highContrast, setHighContrast] = useState(false) const [reducedMotion, setReducedMotion] = useState(false) const [fontSize, setFontSize] = useState(16) const [showSkipLinks, setShowSkipLinks] = useState(false) const;const;const [voiceNavigation, setVoiceNavigation] = useState(false) ';
&apos;'