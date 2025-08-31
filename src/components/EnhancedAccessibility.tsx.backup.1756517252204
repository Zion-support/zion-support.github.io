import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Keyboard, 
  MousePointer,
  Accessibility,
  Settings,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

export const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: false
  });

  useEffect(() => {
    // Apply accessibility settings to document
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    if (settings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    // Load saved settings
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-dark transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Accessibility size={24} />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-96 bg-zion-slate-dark border-l border-zion-cyan/30 z-50 overflow-y-auto"
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-zion-cyan flex items-center gap-2">
                  <Accessibility size={24} />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Eye size={20} className="text-zion-cyan" />
                    <div>
                      <h3 className="font-semibold text-white">High Contrast</h3>
                      <p className="text-sm text-zion-slate-light">Enhanced color contrast for better visibility</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-zion-cyan' : 'bg-zion-slate-light'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MousePointer size={20} className="text-zion-cyan" />
                    <div>
                      <h3 className="font-semibold text-white">Reduced Motion</h3>
                      <p className="text-sm text-zion-slate-light">Minimize animations and transitions</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-zion-cyan' : 'bg-zion-slate-light'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Eye size={20} className="text-zion-cyan" />
                    <div>
                      <h3 className="font-semibold text-white">Large Text</h3>
                      <p className="text-sm text-zion-slate-light">Increase text size for better readability</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-zion-cyan' : 'bg-zion-slate-light'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text mode`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Keyboard size={20} className="text-zion-cyan" />
                    <div>
                      <h3 className="font-semibold text-white">Keyboard Navigation</h3>
                      <p className="text-sm text-zion-slate-light">Enhanced keyboard navigation support</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('keyboardNavigation')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-zion-cyan' : 'bg-zion-slate-light'
                    }`}
                    aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} enhanced keyboard navigation`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="mt-8 p-4 bg-zion-slate-light/10 rounded-lg">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Keyboard size={20} className="text-zion-cyan" />
                  Keyboard Shortcuts
                </h3>
                <div className="space-y-2 text-sm text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span>Navigate between elements</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enter/Space</span>
                    <span>Activate buttons/links</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Escape</span>
                    <span>Close modals/panels</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Arrow Keys</span>
                    <span>Navigate menus</span>
                  </div>
                </div>
              </div>

              {/* Help Text */}
              <div className="mt-6 p-4 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg">
                <p className="text-sm text-zion-cyan">
                  These accessibility features help make our website more usable for everyone. 
                  Changes are automatically saved and will persist across your visits.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};