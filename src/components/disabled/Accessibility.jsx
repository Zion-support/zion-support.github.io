import React, { useState, useEffect, createContext, useContext } from,
  react&apos;
import { motion } from &apos;framer-motion';; import { motion, AnimatePresence } from;
  &apos;framer-motion&apos;  import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X import { Button } from;
  &apos;../ui/button&apos;&apos;' const AccessibilityContext = createContext(undefined) export const useAccessibility = () => {} const;const;const context = useContext(AccessibilityContext) if (!context) { throw new Error(
  &apos;useAccessibility must be used within an AccessibilityProvider&apos;)  return context }

import React, { useState, useEffect, createContext, useContext } from;
  &apos;react';
import { motion, AnimatePresence } from;
  &apos;framer-motion';
import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X import { Button } from;
  &apos;../ui/button';&apos;&apos;
const AccessibilityContext = createContext(undefined);
export const useAccessibility = () => {}
    const;const;const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error(
  &apos;useAccessibility must be used within an AccessibilityProvider&apos;);
    return context}// Accessibility Provider Component;&apos;
export const AccessibilityProvider = ({ children }) => {}
    const;const;const [highContrast, setHighContrast] = useState(false);
ursor/automate-test-fix-improve-and-merge-code-48f3}, [])    // Save settings to localStorage;
    useEffect(() => {}
        const settings = {
  highContrast,
            reducedMotion,
            fontSize,
            colorBlindMode;
ursor/automate-test-fix-improve-and-merge-code-48f3;
    useEffect(() => {}}
        const root = document.documentElement;
        // High contrast mode;
        if (highContrast) {
;
            root.classList.add(
  &apos;high-contrast&apos;);
        else {
            root.classList.remove(
  &apos;high-contrast&apos;);
        // Reduced motion;
        if (reducedMotion) {
            root.classList.add(
  &apos;reduced-motion&apos;);
        else {
            root.classList.remove(
  &apos;reduced-motion&apos;);// Font size;
        root.style.fontSize = fontSize ===;
  &apos;small&apos; ?;
  &apos;14px&apos;: fontSize ===;
  &apos;large&apos; ?;
  &apos;18px&apos; :;
  &apos;16px';
        // Color blind mode;
        root.style.filter = colorBlindMode ===;
  &apos;none&apos; ?;
  &apos;none&apos; :;
            colorBlindMode ===;
  &apos;protanopia&apos; ?;
  &apos;url(#protanopia)&apos; :;
                colorBlindMode ===;
  &apos;deuteranopia&apos; ?;
  &apos;url(#deuteranopia)&apos; :;
';url(#tritanopia)}, [highContrast, reducedMotion, fontSize, colorBlindMode]);&apos;&apos;
    const toggleHighContrast = () => setHighContrast(!highContrast);const toggleReducedMotion = () => setReducedMotion(!reducedMotion)
    const value = {
  highContrast,
        reducedMotion,
        fontSize,
        colorBlindMode,
        toggleHighContrast,
        toggleReducedMotion,
        setFontSize,
  setColorBlindMode}
    return (<AccessibilityContext.Provider value={value}>
      {children}
    <;<;</AccessibilityContext.Provider>)}
// Accessibility Panel Component;
export const AccessibilityPanel = () => {}
    const;const;const [isOpen, setIsOpen] = useState(false);
    const { highContrast, reducedMotion, fontSize, colorBlindMode, toggleHighContrast, toggleReducedMotion, setFontSize, setColorBlindMode } = useAccessibility();
    // Keyboard shortcuts;
    useEffect(() => {}
        const handleKeyDown = (event) => {
ursor/automate-test-fix-improve-and-merge-code-48f3;
                event.preventDefault();
                setIsOpen(!isOpen);
            // Ctrl/Cmd + Shift + H to toggle high contrast;
            if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key ===;
  &apos;H&apos;) {
                event.preventDefault();
                toggleHighContrast();
            // Ctrl/Cmd + Shift + M to toggle reduced motion;
            if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key ===;
  &apos;M&apos;) {
                event.preventDefault();
                toggleReducedMotion()}';
        window.addEventListener(
  &apos;keydown&apos;, handleKeyDown)';
        return () => window.removeEventListener(
  &apos;keydown&apos;, handleKeyDown)}, [isOpen, toggleHighContrast, toggleReducedMotion])&apos;
    return (&apos;&apos;<>';&apos;{/* Floating Accessibility Button */}&apos;';&apos;&apos;'
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className=&apos;fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center hover:shadow-2xl hove,r:shadow-zion-cyan/40 transition-all duration-300&apos; aria-label=&apos;Open Accessibility Settings&apos;>&apos;';&apos;&apos;'
        <Accessibility className=&apos;w-6 h-6&apos;/>&apos;&apos;'
      </motion.button>&apos;{/* Accessibility Panel */}';&apos;&apos;'
      <AnimatePresence>&apos;&apos;'        {isOpen && (&apos;}&apos;<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=&apos;fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4&apos; onClick={() => setIsOpen(false)}>&apos;
            <motion.div initial = {
  { scale: 0.9,
  opacity: 0}} animate = {
  { scale: 1,
  opacity: 1&apos;}} exit = {&apos;{ scale: 0.9,';
  opacity: 0';&apos;&apos;}} className=&apos;bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto&apos; onClick={(e) => e.stopPropagation()}>';&apos;{/* Header */}&apos;';&apos;&apos;'
              <div className=&apos;flex items-center justify-between mb-6&apos;>&apos;';&apos;&apos;'
                <h2 className=&apos;text-xl font-bold text-white flex items-center gap-2&apos;>&apos;';&apos;&apos;'
                  <Accessibility className=&apos;w-5 h-5 text-zion-cyan&apos;/>';
                  Accessibility Settings';&apos;&apos;'
                </h2>&apos;';&apos;&apos;'
                <Button variant=&apos;ghost&apos; size=&apos;sm&apos; onClick={() => setIsOpen(false)} className=&apos;text-zion-slate-light hover:text-white&apos;>&apos;';&apos;&apos;'
                  <X className=&apos;w-4 h-4&apos;/>&apos;&apos;'
                </Button>&apos;&apos;'
              </div>';&apos;{/* Settings */}&apos;';&apos;&apos;'
              <div className=&apos;space-y-6&apos;>';&apos;{/* High Contrast */}&apos;';&apos;&apos;'
                <div className=&apos;flex items-center justify-between&apos;>';&apos;&apos;'
                  <div>&apos;';&apos;&apos;'
                    <h3 className=&apos;text-white font-medium mb-1&apos;>High Contrast&apos;</h3>&apos;';&apos;&apos;'
                    <p className=&apos;text-sm text-zion-slate-light&apos;>Increase contrast for better visibility&apos;</p>';&apos;&apos;'
                  </div>&apos;';&apos;&apos;'
                  <Button variant={highContrast ? &apos;default&apos; : &apos;outline&apos;} size=&apos;sm&apos; onClick={toggleHighContrast} className={highContrast ? &apos;bg-zion-cyan text-white&apos; : &apos;border-zion-cyan/30 text-zion-cyan&apos;}>&apos;&apos;'{highContrast ?&apos;}&apos; <Eye className=&apos;w-4 h-4&apos;/> :&apos; <EyeOff className=&apos;w-4 h-4&apos;/>}&apos;&apos;'
                  </Button>&apos;&apos;'
                </div>';&apos;{/* Reduced Motion */}&apos;';&apos;&apos;'
                <div className=&apos;flex items-center justify-between&apos;>';&apos;&apos;'
                  <div>&apos;';&apos;&apos;'
                    <h3 className=&apos;text-white font-medium mb-1&apos;>Reduced Motion&apos;</h3>&apos;';&apos;&apos;'
                    <p className=&apos;text-sm text-zion-slate-light&apos;>Minimize animations and transitions&apos;</p>';&apos;&apos;'
                  </div>&apos;';&apos;&apos;'
                  <Button variant={reducedMotion ? &apos;default&apos; : &apos;outline&apos;} size=&apos;sm&apos; onClick={toggleReducedMotion} className={reducedMotion ? &apos;bg-zion-cyan text-white&apos; : &apos;border-zion-cyan/30 text-zion-cyan&apos;}>&apos;&apos;'{reducedMotion ?&apos;}&apos; <VolumeX className=&apos;w-4 h-4&apos;/> :&apos; <Volume2 className=&apos;w-4 h-4&apos;/>}&apos;&apos;'
                  </Button>&apos;&apos;'
                </div>&apos;{/* Font Size */}';&apos;&apos;'
                <div>&apos;';&apos;&apos;'
                  <h3 className=&apos;text-white font-medium mb-3&apos;>Font Size&apos;</h3>&apos;';&apos;&apos;'
                  <div className=&apos;flex gap-2&apos;>&apos;';&apos;{[
  &apos;small&apos;,
  &apos;medium&apos;,
  &apos;large&apos;].map((size) => (&apos;}&apos;<Button key={size} variant={fontSize === size ? &apos;default&apos; : &apos;outline&apos;} size=&apos;sm&apos; onClick={() => setFontSize(size)} className={fontSize === size ? &apos;bg-zion-cyan text-white&apos; : &apos;border-zion-cyan/30 text-zion-cyan&apos;}>{size.charAt(0).toUpperCase() + size.slice(1)}&apos;
                      </Button>))}&apos;&apos;'
                  </div>&apos;&apos;'
                </div>&apos;{/* Color Blind Mode */}';&apos;&apos;'
                <div>&apos;';&apos;&apos;'
                  <h3 className=&apos;text-white font-medium mb-3&apos;>Color Blind Support&apos;</h3>&apos;';&apos;&apos;'
                  <div className=&apos;grid grid-cols-2 gap-2&apos;>&apos;';&apos;{[
  &apos;none&apos;,
  &apos;protanopia&apos;,
  &apos;deuteranopia&apos;,
  &apos;tritanopia&apos;].map((mode) => (&apos;}&apos;<Button key={mode} variant={colorBlindMode === mode ? &apos;default&apos; : &apos;outline&apos;} size=&apos;sm&apos; onClick={() => setColorBlindMode(mode)} className={colorBlindMode === mode ? &apos;bg-zion-cyan text-white&apos; : &apos;border-zion-cyan/30 text-zion-cyan&apos;}>{mode.charAt(0).toUpperCase() + mode.slice(1)}&apos;&apos;'
                      </Button>))}&apos;&apos;'
                  </div>&apos;&apos;'
                </div>';&apos;{/* Keyboard Shortcuts */}&apos;';&apos;&apos;'
                <div className=&apos;bg-zion-blue-dark/50 rounded-lg p-4&apos;>&apos;';&apos;&apos;'
                  <h3 className=&apos;text-white font-medium mb-3 flex items-center gap-2&apos;>&apos;';&apos;&apos;'
                    <Keyboard className=&apos;w-4 h-4 text-zion-cyan&apos;/>';
                    Keyboard Shortcuts';&apos;&apos;'
                  </h3>&apos;';&apos;&apos;'
                  <div className=&apos;space-y-2 text-sm text-zion-slate-light&apos;>&apos;';&apos;&apos;'
                    <div className=&apos;flex justify-between&apos;>';&apos;&apos;'
                      <span>Open Panel:</span>&apos;';&apos;&apos;'
                      <kbd className=&apos;px-2 py-1 bg-zion-blue-light/20 rounded text-xs&apos;>Ctrl/Cmd + Shift + A&apos;</kbd>';&apos;&apos;'
                    </div>&apos;';&apos;&apos;'
                    <div className=&apos;flex justify-between&apos;>';&apos;&apos;'
                      <span>High Contrast:</span>&apos;';&apos;&apos;'
                      <kbd className=&apos;px-2 py-1 bg-zion-blue-light/20 rounded text-xs&apos;>Ctrl/Cmd + Shift + H&apos;</kbd>';&apos;&apos;'
                    </div>&apos;';&apos;&apos;'
                    <div className=&apos;flex justify-between&apos;>';&apos;&apos;'
                      <span>Reduced Motio,n:</span>&apos;';&apos;&apos;'
                      <kbd className=&apos;px-2 py-1 bg-zion-blue-light/20 rounded text-xs&apos;>Ctrl/Cmd + Shift + M&apos;</kbd>
                    </div>&apos;&apos;'
                  </div>&apos;&apos;'
                </div>&apos;&apos;'
              </div>';&apos;{/* Footer */}&apos;';&apos;&apos;'
              <div className=&apos;mt-6 pt-4 border-t border-zion-cyan/20&apos;>'&apos;&apos;''                <p className=&apos;text-xs text-zion-slate-light text-center&apos;>
                  These settings are saved locally and will persist across sessions.&apos;
                </p>
              </div>&apos;&apos;'
            </motion.div>';&apos;&apos;'
          </motion.div>)}';&apos;&apos;'
      </AnimatePresence>';&apos;&apos;'
</>)}';';';
// Skip to Content Link&apos;';&apos;&apos;'
export const SkipToContent = () => (<;<a href=&apos;#main-content&apos; className=&apos;sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 hove,r:bg-zion-cyan-light transition-colors duration-300&apos;>
    Skip to main content&apos;
  <;</a>);
// Focus Trap Hook';&apos;&apos;
export const useFocusTrap = (isActive) => {';
    useEffect(() => {';
        if (!isActive)';';
            return';&apos;';&apos;}}&apos;
        const focusableElements =,
  button, [href], input, select, textarea, [tabindex]: not([tabindex=&apos;-1&apos;])';&apos;&apos;
        const container = document.activeElement?.closest(
  &apos;[data-focus-trap]&apos;)        if (!container);
            return;&apos;
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];
ursor/automate-test-fix-improve-and-merge-code-48f3;
                if (e.shiftKey) {                    if (document.activeElement === firstFocusableElement) {
                        e.preventDefault();
                        lastFocusableElement.focus();
                else {
                    if (document.activeElement === lastFocusableElement) {
                        e.preventDefault();
                        firstFocusableElement.focus()}';
        document.addEventListener(
  &apos;keydown&apos;, handleTabKey)';
        return () => document.removeEventListener(
  &apos;keydown&apos;, handleTabKey)}, [isActive])}';';
// Screen Reader Only Text&apos;';&apos;&apos;'
export const SrOnly = ({ children }) => (<;<span className=&apos;sr-only&apos;>{children}&apos;<;</span>)';&apos;&apos;
export default AccessibilityPanel';&apos;}}}}}}}}}}}}}}}&apos;';&quot;import React, { useState, useEffect, createContext, useContext } from &apos;react&apos; import { motion, AnimatePresence    } from &apos;framer-motion&apos;  import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X import { Button } from &apos;../ui/button&apos;&apos;' const AccessibilityContext = createContext(undefined) export const useAccessibility = () => {} const;const context = useContext(AccessibilityContext) if(!context) { throw new Error(&apos;useAccessibility must be used within an AccessibilityProvider&apos;)  return context }

import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X    } from &apos;lucide-react&apos; import { Button } from &apos;../ui/button&apos;&apos;' const AccessibilityContext = createContext(null) export const useAccessibility = () => {} const;const;const context = useContext(AccessibilityContext) if(!context) { throw new Error(&apos;useAccessibility must be used within an AccessibilityProvider&apos;)} return context};&apos;'