import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  lineHeight: number;
  letterSpacing: number;
  keyboardNavigation: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  enabled = true, 
  showSettings = false 
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    lineHeight: 1.5,
    letterSpacing: 0,
    keyboardNavigation: true,
    screenReader: true
  });

  const [isOpen, setIsOpen] = useState(false);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}px`;
    
    // Apply line height
    root.style.lineHeight = newSettings.lineHeight.toString();
    
    // Apply letter spacing
    root.style.letterSpacing = `${newSettings.letterSpacing}px`;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply high saturation
    if (newSettings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }
  }, []);

  // Update setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-enhancer-settings', JSON.stringify(newSettings));
  }, [settings, applySettings]);

  // Load settings on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-enhancer-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!settings.keyboardNavigation) return;

      const target = event.target as HTMLElement;
      
      // Tab navigation enhancement
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey && target === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && target === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;
    
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.screenReader]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Accessibility Settings"
        title="Accessibility Settings"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-4 bottom-20 z-50 w-80 bg-slate-900 border border-blue-400/20 rounded-lg shadow-2xl backdrop-blur-xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-400" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Font Size Control */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Font Size
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                    disabled={settings.fontSize <= 12}
                    className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                    aria-label="Decrease font size"
                  >
                    <ZoomOut className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-white font-mono min-w-[3rem] text-center">
                    {settings.fontSize}px
                  </span>
                  <button
                    onClick={() => updateSetting('fontSize', Math.min(24, settings.fontSize + 2))}
                    disabled={settings.fontSize >= 24}
                    className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                    aria-label="Increase font size"
                  >
                    <ZoomIn className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Contrast className="w-4 h-4" />
                    High Contrast
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => updateSetting('highContrast', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-blue-500' : 'bg-slate-700'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                </label>
              </div>

              {/* Reduced Motion Toggle */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Reduced Motion
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-500' : 'bg-slate-700'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                </label>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  const defaultSettings: AccessibilitySettings = {
                    fontSize: 16,
                    highContrast: false,
                    largeText: false,
                    reducedMotion: false,
                    highSaturation: false,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    keyboardNavigation: true,
                    screenReader: true
                  };
                  setSettings(defaultSettings);
                  applySettings(defaultSettings);
                  localStorage.removeItem('accessibility-enhancer-settings');
                  announceToScreenReader('Accessibility settings reset to defaults');
                }}
                className="w-full px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
