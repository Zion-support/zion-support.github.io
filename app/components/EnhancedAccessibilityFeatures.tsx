import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Type, Volume2, VolumeX, MousePointer } from 'lucide-react';

const EnhancedAccessibilityFeatures: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [screenReader, setScreenReader] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setReducedMotion(prefersReducedMotion);
    setHighContrast(prefersHighContrast);

    // Apply initial settings
    applyAccessibilitySettings();
  }, []);

  const applyAccessibilitySettings = () => {
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
  };

  useEffect(() => {
    applyAccessibilitySettings();
  }, [highContrast, largeText, reducedMotion]);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const toggleLargeText = () => {
    setLargeText(!largeText);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  const toggleScreenReader = () => {
    setScreenReader(!screenReader);
    // Announce to screen readers
    const announcement = screenReader ? 'Screen reader mode disabled' : 'Screen reader mode enabled';
    const announcementElement = document.createElement('div');
    announcementElement.setAttribute('aria-live', 'polite');
    announcementElement.setAttribute('aria-atomic', 'true');
    announcementElement.className = 'sr-only';
    announcementElement.textContent = announcement;
    document.body.appendChild(announcementElement);
    setTimeout(() => document.body.removeChild(announcementElement), 1000);
  };

  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !isVisible) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg"
        aria-label="Accessibility features"
      >
        <Eye className="w-4 h-4 inline mr-2" />
        Accessibility
      </button>
      
      {isVisible && (
        <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-6 w-80">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Accessibility Features</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">High Contrast</span>
              </div>
              <button
                onClick={toggleHighContrast}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  highContrast ? 'bg-purple-600' : 'bg-gray-200'
                }`}
                aria-pressed={highContrast}
                aria-label="Toggle high contrast mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Type className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Large Text</span>
              </div>
              <button
                onClick={toggleLargeText}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  largeText ? 'bg-purple-600' : 'bg-gray-200'
                }`}
                aria-pressed={largeText}
                aria-label="Toggle large text mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MousePointer className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Reduced Motion</span>
              </div>
              <button
                onClick={toggleReducedMotion}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  reducedMotion ? 'bg-purple-600' : 'bg-gray-200'
                }`}
                aria-pressed={reducedMotion}
                aria-label="Toggle reduced motion mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Screen Reader</span>
              </div>
              <button
                onClick={toggleScreenReader}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  screenReader ? 'bg-purple-600' : 'bg-gray-200'
                }`}
                aria-pressed={screenReader}
                aria-label="Toggle screen reader announcements"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              These features help make the website more accessible to users with different needs.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedAccessibilityFeatures;