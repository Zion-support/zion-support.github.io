import React, { useEffect, useState, useCallback } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isScreenReader, setIsScreenReader] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const savedLargeText = localStorage.getItem('accessibility-large-text') === 'true';
    const savedReducedMotion = localStorage.getItem('accessibility-reduced-motion') === 'true';
    const savedScreenReader = localStorage.getItem('accessibility-screen-reader') === 'true';

    setIsHighContrast(savedHighContrast);
    setIsLargeText(savedLargeText);
    setIsReducedMotion(savedReducedMotion);
    setIsScreenReader(savedScreenReader);

    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedLargeText, savedReducedMotion);
  }, []);

  const applyAccessibilityStyles = useCallback((
    highContrast: boolean,
    largeText: boolean,
    reducedMotion: boolean
  ) => {
    const root = document.documentElement;
    
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, []);

  const toggleHighContrast = useCallback(() => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('accessibility-high-contrast', newValue.toString());
    applyAccessibilityStyles(newValue, isLargeText, isReducedMotion);
  }, [isHighContrast, isLargeText, isReducedMotion, applyAccessibilityStyles]);

  const toggleLargeText = useCallback(() => {
    const newValue = !isLargeText;
    setIsLargeText(newValue);
    localStorage.setItem('accessibility-large-text', newValue.toString());
    applyAccessibilityStyles(isHighContrast, newValue, isReducedMotion);
  }, [isHighContrast, isLargeText, isReducedMotion, applyAccessibilityStyles]);

  const toggleReducedMotion = useCallback(() => {
    const newValue = !isReducedMotion;
    setIsReducedMotion(newValue);
    localStorage.setItem('accessibility-reduced-motion', newValue.toString());
    applyAccessibilityStyles(isHighContrast, isLargeText, newValue);
  }, [isHighContrast, isLargeText, isReducedMotion, applyAccessibilityStyles]);

  const toggleScreenReader = useCallback(() => {
    const newValue = !isScreenReader;
    setIsScreenReader(newValue);
    localStorage.setItem('accessibility-screen-reader', newValue.toString());
  }, []);

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed top-20 right-4 z-50">
        <div className="bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-2xl">
          <div className="flex flex-col space-y-2">
            <button
              onClick={toggleHighContrast}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                isHighContrast 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
            >
              <Contrast className="w-4 h-4" />
              <span>High Contrast</span>
            </button>

            <button
              onClick={toggleLargeText}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                isLargeText 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label={`${isLargeText ? 'Disable' : 'Enable'} large text mode`}
            >
              <Type className="w-4 h-4" />
              <span>Large Text</span>
            </button>

            <button
              onClick={toggleReducedMotion}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                isReducedMotion 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion mode`}
            >
              {isReducedMotion ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>Reduce Motion</span>
            </button>

            <button
              onClick={toggleScreenReader}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                isScreenReader 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label={`${isScreenReader ? 'Disable' : 'Enable'} screen reader mode`}
            >
              {isScreenReader ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>Screen Reader</span>
            </button>
          </div>
        </div>
      </div>

      {/* Screen Reader Announcements */}
      {isScreenReader && (
        <div 
          className="sr-only" 
          aria-live="polite" 
          aria-atomic="true"
          id="screen-reader-announcements"
        />
      )}
    </>
  );
};

export default AccessibilityEnhancer;
