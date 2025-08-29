import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer, 
  Keyboard,
  HelpCircle,
  X,
  Settings,
  Accessibility,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Highlighter,
  Focus,
  FileText,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Zap,
  Move
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  colorBlind: boolean;
  dyslexia: boolean;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicator: false,
    screenReader: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    colorBlind: false,
    dyslexia: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply CSS custom properties
    root.style.setProperty('--font-size', `${settings.fontSize}px`);
    root.style.setProperty('--line-height', settings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);
    
    // Apply classes for different accessibility features
    root.classList.toggle('high-contrast', settings.highContrast);
    root.classList.toggle('large-text', settings.largeText);
    root.classList.toggle('reduced-motion', settings.reducedMotion);
    root.classList.toggle('focus-visible', settings.focusIndicator);
    root.classList.toggle('color-blind-friendly', settings.colorBlind);
    root.classList.toggle('dyslexia-friendly', settings.dyslexia);
    
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Show floating button after delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        switch (e.key) {
          case 'a':
            e.preventDefault();
            setIsOpen(!isOpen);
            break;
          case 'h':
            e.preventDefault();
            setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
            break;
          case 'l':
            e.preventDefault();
            setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
            break;
          case 'r':
            e.preventDefault();
            setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean | number) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetAllSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusIndicator: false,
      screenReader: false,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0,
      colorBlind: false,
      dyslexia: false
    };
    setSettings(defaultSettings);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-7 h-7" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Accessibility Settings</h2>
                    <p className="text-sm text-gray-600">Customize your experience</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => updateSetting('highContrast', !settings.highContrast)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        settings.highContrast
                          ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                          : 'border-gray-200 hover:border-zion-cyan/50 hover:bg-zion-cyan/5'
                      }`}
                    >
                      <Contrast className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">High Contrast</span>
                    </button>
                    <button
                      onClick={() => updateSetting('largeText', !settings.largeText)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        settings.largeText
                          ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                          : 'border-gray-200 hover:border-zion-cyan/50 hover:bg-zion-cyan/5'
                      }`}
                    >
                      <Type className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">Large Text</span>
                    </button>
                    <button
                      onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        settings.reducedMotion
                          ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                          : 'border-gray-200 hover:border-zion-cyan/50 hover:bg-zion-cyan/5'
                      }`}
                    >
                      <Move className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">Reduced Motion</span>
                    </button>
                    <button
                      onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        settings.focusIndicator
                          ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                          : 'border-gray-200 hover:border-zion-cyan/50 hover:bg-zion-cyan/5'
                      }`}
                    >
                      <Focus className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">Focus Indicator</span>
                    </button>
                  </div>
                </div>

                {/* Text Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Type className="w-5 h-5 mr-2 text-zion-cyan" />
                    Text Settings
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Font Size: {settings.fontSize}px
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="24"
                        value={settings.fontSize}
                        onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Line Height: {settings.lineHeight}
                      </label>
                      <input
                        type="range"
                        min="1.2"
                        max="2.5"
                        step="0.1"
                        value={settings.lineHeight}
                        onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Letter Spacing: {settings.letterSpacing}px
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="2"
                        step="0.1"
                        value={settings.letterSpacing}
                        onChange={(e) => updateSetting('letterSpacing', parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                </div>

                {/* Specialized Support */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-zion-cyan" />
                    Specialized Support
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => updateSetting('colorBlind', !settings.colorBlind)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        settings.colorBlind
                          ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                          : 'border-gray-200 hover:border-zion-cyan/50 hover:bg-zion-cyan/5'
                      }`}
                    >
                      <Eye className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">Color Blind Friendly</span>
                    </button>
                    <button
                      onClick={() => updateSetting('dyslexia', !settings.dyslexia)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        settings.dyslexia
                          ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                          : 'border-gray-200 hover:border-zion-cyan/50 hover:bg-zion-cyan/5'
                      }`}
                    >
                      <FileText className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">Dyslexia Friendly</span>
                    </button>
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Keyboard className="w-5 h-5 mr-2 text-zion-cyan" />
                    Keyboard Shortcuts
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Open/Close Panel:</span>
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Alt + A</kbd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Toggle High Contrast:</span>
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Alt + H</kbd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Toggle Large Text:</span>
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Alt + L</kbd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Toggle Reduced Motion:</span>
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Alt + R</kbd>
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={resetAllSettings}
                    className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200 flex items-center justify-center"
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Reset All Settings
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}