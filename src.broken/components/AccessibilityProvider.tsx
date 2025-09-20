import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
export const AccessibilityProvider: React.FC < AccessibilityProviderProps> = ({ children }) => {
export const FocusTrap: React.FC<{ children: ReactNode; isActive?: boolean }> = ({
export const useAccessibility = () => {;
import { motion, AnimatePresence  } from 'framer-motion';

export default function Page() {
> {
  children: ReactNode}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showSkipLinks, setShowSkipLinks] = useState(false);
  const [voiceNavigation, setVoiceNavigation] = useState(false);

  // Load accessibility preferences from localStorage
  useEffect(() => {

    setHighContrast(savedHighContrast);
    setReducedMotion(savedReducedMotion);
    setFontSize(savedFontSize ? parseInt(savedFontSize) : 16);
    setVoiceNavigation(savedVoiceNavigation)}, []);

  // Apply accessibility settings to document
  useEffect(() => {
    
    // Apply high contrast
    if(highContrast) {
      root.classList.add('high-contrast')} else {
      root.classList.remove('high-contrast')}

    // Apply reduced motion
    if(reducedMotion) {
      root.classList.add('reduce-motion')} else {
      root.classList.remove('reduce-motion')}

    // Apply font size
    root.style.fontSize = `${fontSize}px`}, [highContrast, reducedMotion, fontSize]);

  // Keyboard navigation support
  useEffect(() => {
    
        setTimeout(() => setShowSkipLinks(false), 5000)}

      // High contrast toggle(Alt + H)
      if(event.altKey && event.key === 'h') {
        event.preventDefault();
        toggleHighContrast()}

      // Font size controls(Alt + Plus/Minus)
      if(event.altKey && event.key === '+') {
        event.preventDefault();
        increaseFontSize()}
      if(event.altKey && event.key === '-') {
        event.preventDefault();
        decreaseFontSize()}
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)}, []);

    setHighContrast(newValue);
    localStorage.setItem('zion-high-contrast', newValue.toString())};

    setReducedMotion(newValue);
    localStorage.setItem('zion-reduced-motion', newValue.toString())};

    setFontSize(newSize);
    localStorage.setItem('zion-font-size', newSize.toString())};

    setFontSize(newSize);
    localStorage.setItem('zion-font-size', newSize.toString())};

    localStorage.setItem('zion-font-size', '16')};

    setVoiceNavigation(newValue);
    localStorage.setItem('zion-voice-navigation', newValue.toString())};

  const contextValue: AccessibilityContextType = {
    highContrast,
    toggleHighContrast,
    reducedMotion,
    toggleReducedMotion,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    showSkipLinks,
    setShowSkipLinks,
    voiceNavigation,
    toggleVoiceNavigation,
  };

  return (<AccessibilityContext.Provider value={contextValue}>
      {children}
      
      {/* Skip Links */}
      <AnimatePresence>
        {showSkipLinks && (<motion.div
            initial = {
  { opacity: 0,
  y: -20

}}
            animate = {
  { opacity: 1,
  y: 0

}}
            exit = {
  { opacity: 0,
  y: -20

}}
            className="fixed top - 0 left - 0 right - 0 z - 50 bg-zion - cyan text-black p - 4 text-center"

            <div  className="max - w-4xl mx - auto flex flex - wrap justify - center gap-4">
              <a
                href="#main - content"
                className="px-4 py-2 bg-white rounded-lg font - semibold hover:bg-gray - 100 focus:outline - none focus:ring - 2 focus:ring -black"

      <div  className="fixed bottom - 4 left - 4 z -40">;
        <motion.div
          initial = {
  { opacity: 0,
  x: -20

}}
          animate = {
  { opacity: 1,
  x: 0
