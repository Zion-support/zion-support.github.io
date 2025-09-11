import React, { createContext, useContext, useEffect, useState } from 'react';
;
interface AccessibilityContextType {;
  "isHighContrast": "boolean;
  "isReducedMotion": boolean;
  "fontSize": 'small' | 'medium' | 'large';
  "toggleHighContrast": () => void;
  "toggleReducedMotion": () => void;
  "setFontSize": ("size": 'small' | 'medium' | 'large') => void;
"}
;
const _AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);
;
export function AccessibilityProvider("props": "any) {;
  const [isHighContrast", setIsHighContrast] = useStateg<div>(false);
  const [isReducedMotion, setIsReducedMotion] = useStateg<div>(false);
  const [fontSize, setFontSizeState] = useState<'small' | 'medium' | 'large'>('medium');
;
  useEffect(() => {;
    // Check for user's system preferences;
    const _prefersReducedMotion = window.matchMedia('(prefers-reduced-"motion": "reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
;
    // Load saved preferences from localStorage;
    const _savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const _savedFontSize = localStorage.getItem('accessibility-font-size') as 'small' | 'medium' | 'large' || 'medium';
    ;
    setIsHighContrast(savedHighContrast);
    setFontSizeState(savedFontSize);
;
    // Apply initial styles;
    applyAccessibilityStyles(savedHighContrast", prefersReducedMotion, savedFontSize);
  }, []);
;
  const _applyAccessibilityStyles = ("props": "any) => {;
    const _root = document.documentElement;
    ;
    // High contrast;
    if (highContrast) {;
      root.classList.add('high-contrast');
    "} else {;
      root.classList.remove('high-contrast');
    }
;
    // Reduced motion;
    if (reducedMotion) {;
      root.classList.add('reduced-motion');
    } else {;
      root.classList.remove('reduced-motion');
    }
;
    // Font size;
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${fontSize}`);
  };
;
  const _toggleHighContrast = ("props": "any) => {;
    const _newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('accessibility-high-contrast'", newValue.toString());
    applyAccessibilityStyles(newValue, isReducedMotion, fontSize);
  };
;
  const _toggleReducedMotion = ("props": "any) => {;
    const _newValue = !isReducedMotion;
    setIsReducedMotion(newValue);
    localStorage.setItem('accessibility-reduced-motion'", newValue.toString());
    applyAccessibilityStyles(isHighContrast, newValue, fontSize);
  };
;
  const _setFontSize = ("props": "any) => {;
    setFontSizeState(size);
    localStorage.setItem('accessibility-font-size'", size);
    applyAccessibilityStyles(isHighContrast, isReducedMotion, size);
  };
;
  return (;
    <AccessibilityContext.Provider;
      value={{;
        isHighContrast,;
        isReducedMotion,;
        fontSize,;
        toggleHighContrast,;
        toggleReducedMotion,;
        setFontSize,;
      }}
    >;export function useAccessibility($1) {
  const _context = useContext(AccessibilityContext);
  if (context === undefined) {;
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  "}
  return context;
}
</AccessibilityContext>;
</div>;
</div>;
</AccessibilityContextType>
</AccessibilityContext>
</div>
</AccessibilityContextType>;';';
import React,{ createContext,useContext,useEffect,useState } from 'react'; interface AccessibilityContextType { isHighContrast: boolean;'; isReducedMotion: boolean;';'; fontSize: 'small' | 'medium' | 'large'; toggleHighContrast: () => void;'; toggleReducedMotion: () => void;';'; setFontSize: (size: 'small' | 'medium' | 'large') => void} const _AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined); export function AccessibilityProvider($1) { const [isHighContrast,setIsHighContrast] = useStateg<div>(false); const [isReducedMotion,setIsReducedMotion] = useStateg<div>(false); const [fontSize,setFontSizeState] = useState<'small' | 'medium' | 'large'>('medium'); useEffect(() => { const _prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; setIsReducedMotion(prefersReducedMotion); const _savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true const _savedFontSize = localStorage.getItem('accessibility-font-size') as 'small' | 'medium' | 'large' || 'medium'; setIsHighContrast(savedHighContrast); setFontSizeState(savedFontSize); applyAccessibilityStyles(savedHighContrast,prefersReducedMotion,savedFontSize)},[]); const _applyAccessibilityStyles = (props) => { const _root = document.documentElement; if (highContrast) { root.classList.add('high-contrast');'} else { root.classList.remove('high-contrast')} if (reducedMotion) { root.classList.add('reduced-motion');'} else { root.classList.remove('reduced-motion')} root.classList.remove('font-small','font-medium','font-large'); root.classList.add(`font-${fontSize}`)}; const _toggleHighContrast = (props) => { const _newValue = !isHighContrast; setIsHighContrast(newValue);';'; localStorage.setItem('accessibility-high-contrast',newValue.toString()); applyAccessibilityStyles(newValue,isReducedMotion,fontSize)}; const _toggleReducedMotion = (props) => { const _newValue = !isReducedMotion; setIsReducedMotion(newValue);';'; localStorage.setItem('accessibility-reduced-motion',newValue.toString()); applyAccessibilityStyles(isHighContrast,newValue,fontSize)}; const _setFontSize = (props) => { setFontSizeState(size);';'; localStorage.setItem('accessibility-font-size',size); applyAccessibilityStyles(isHighContrast,isReducedMotion,size)}; return ( <AccessibilityContext.Provider value={{ isHighContrast,isReducedMotion,fontSize,toggleHighContrast,toggleReducedMotion,setFontSize,}} > {children} </AccessibilityContext.Provider> )} export function useAccessibility($1) { const _context = useContext(AccessibilityContext); if (context === undefined) { throw new Error('useAccessibility must be used within an AccessibilityProvider')} return context} </AccessibilityContext> </div> </AccessibilityContextType>;';';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';