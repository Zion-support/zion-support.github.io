import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  TypeOff, 
  Contrast, 
  Sun, 
  Moon,
  HelpCircle,
  X
} from 'lucide-react';

interface AccessibilityState {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  darkMode: boolean;
  fontSize: number;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [accessibility, setAccessibility] = useState<AccessibilityState>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    darkMode: false,
    fontSize: 16
  });

  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    // Load saved preferences from localStorage
    const saved = localStorage.getItem('zion-accessibility');
    if (saved) {
      const savedState = JSON.parse(saved);
      setAccessibility(prev => ({ ...prev, ...savedState }));
      applyAccessibilitySettings(savedState);
    }
  }, []);

  const applyAccessibilitySettings = (settings: Partial<AccessibilityState>) => {
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.style.setProperty('--foreground', '142 71% 95%');
      root.style.setProperty('--background', '0 0% 5%');
      root.style.setProperty('--border', '0 0% 90%');
    } else {
      root.style.removeProperty('--foreground');
      root.style.removeProperty('--background');
      root.style.removeProperty('--border');
    }

    if (settings.largeText) {
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
    } else {
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--font-size-lg');
      root.style.removeProperty('--font-size-xl');
    }

    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
    }

    if (settings.fontSize !== undefined) {
      root.style.fontSize = `${settings.fontSize}px`;
    }

    // Apply dark mode
    if (settings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const updateAccessibility = (updates: Partial<AccessibilityState>) => {
    const newState = { ...accessibility, ...updates };
    setAccessibility(newState);
    applyAccessibilitySettings(updates);
    
    // Save to localStorage
    localStorage.setItem('zion-accessibility', JSON.stringify(newState));
  };

  const resetAccessibility = () => {
    const defaultState: AccessibilityState = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      darkMode: false,
      fontSize: 16
    };
    
    setAccessibility(defaultState);
    applyAccessibilitySettings(defaultState);
    localStorage.removeItem('zion-accessibility');
  };

  const accessibilityFeatures = [
    {
      id: 'highContrast',
      title: 'High Contrast',
      description: 'Increase contrast for better visibility',
      icon: Contrast,
      active: accessibility.highContrast
    },
    {
      id: 'largeText',
      title: 'Large Text',
      description: 'Increase text size for better readability',
      icon: Type,
      active: accessibility.largeText
    },
    {
      id: 'reducedMotion',
      title: 'Reduced Motion',
      description: 'Reduce animations for motion sensitivity',
      icon: Eye,
      active: accessibility.reducedMotion
    },
    {
      id: 'darkMode',
      title: 'Dark Mode',
      description: 'Switch to dark theme',
      icon: accessibility.darkMode ? Moon : Sun,
      active: accessibility.darkMode
    }
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-zion-purple text-white rounded-full shadow-lg hover:bg-zion-purple/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Accessibility settings"
        title="Accessibility Settings"
      >
        <HelpCircle className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Accessibility</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Font Size Control */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Font Size
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateAccessibility({ fontSize: Math.max(12, accessibility.fontSize - 1) })}
                    className="px-2 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors"
                    aria-label="Decrease font size"
                  >
                    A-
                  </button>
                  <span className="text-sm text-slate-300 min-w-[3rem] text-center">
                    {accessibility.fontSize}px
                  </span>
                  <button
                    onClick={() => updateAccessibility({ fontSize: Math.min(24, accessibility.fontSize + 1) })}
                    className="px-2 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors"
                    aria-label="Increase font size"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Accessibility Features */}
              <div className="space-y-3">
                {accessibilityFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => updateAccessibility({ [feature.id]: !feature.active })}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      feature.active
                        ? 'bg-zion-purple/20 border border-zion-purple/40'
                        : 'bg-slate-700/50 border border-slate-600 hover:bg-slate-700'
                    }`}
                    aria-pressed={feature.active}
                  >
                    <div className="flex items-center gap-3">
                      <feature.icon className={`w-5 h-5 ${
                        feature.active ? 'text-zion-purple' : 'text-slate-400'
                      }`} />
                      <div className="text-left">
                        <div className="text-sm font-medium text-white">
                          {feature.title}
                        </div>
                        <div className="text-xs text-slate-400">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      feature.active
                        ? 'bg-zion-purple border-zion-purple'
                        : 'border-slate-500'
                    }`} />
                  </button>
                ))}
              </div>

              {/* Reset Button */}
              <button
                onClick={resetAccessibility}
                className="w-full mt-4 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm"
              >
                Reset to Default
              </button>

              {/* Help Button */}
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="w-full mt-2 px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg hover:bg-zion-cyan/30 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                Accessibility Help
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Help Modal */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowHelp(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-800 rounded-lg p-6 max-w-md w-full border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Accessibility Features
              </h3>
              
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <h4 className="font-medium text-white mb-2">High Contrast</h4>
                  <p>Increases color contrast for better visibility, especially useful for users with visual impairments.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Large Text</h4>
                  <p>Increases text size throughout the website for better readability.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Reduced Motion</h4>
                  <p>Reduces animations and transitions for users sensitive to motion or with vestibular disorders.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Dark Mode</h4>
                  <p>Switches to a dark color scheme for better visibility in low-light environments.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Font Size Control</h4>
                  <p>Adjust the base font size from 12px to 24px to suit your reading preferences.</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700">
                <h4 className="font-medium text-white mb-2">Keyboard Navigation</h4>
                <p className="text-sm text-slate-300">
                  Use Tab to navigate through interactive elements. Press Enter or Space to activate buttons and links.
                </p>
              </div>

              <button
                onClick={() => setShowHelp(false)}
                className="w-full mt-4 px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple/80 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}