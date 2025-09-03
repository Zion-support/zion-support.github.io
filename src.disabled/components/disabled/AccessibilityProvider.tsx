import: React { createContext, useContext, useEffect, useState, ReactNode } from;
  'react' import: { motion, AnimatePresence } from;';
  'framer-motion' import: { SkipForward, Volume2, VolumeX, Sun, Moon } from;';
  'lucide-react'  interface: AccessibilityContextType {';
   highContrast: boolean;
   toggleHighContrast: () => void;
   reducedMotion: boolean;
   toggleReducedMotion: () => void;
   fontSize: number;
   increaseFontSize: () => void;
   decreaseFontSize: () => void;
   resetFontSize: () => void;
   showSkipLinks: boolean;


