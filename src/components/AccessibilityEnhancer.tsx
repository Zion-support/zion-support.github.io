import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Type, 
  MousePointer, 
  Keyboard, 
  Monitor,
  X,
  Settings,
  Accessibility,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  soundEnabled: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    soundEnabled: true
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings');
      }
    }

    // Apply initial settings
    applySettings(settings);
  }, []);

  useEffect(() => {
    // Save settings to localStorage whenever they change
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    // Apply settings to the document
    applySettings(settings);
  }, [settings]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    showAccessibilityNotification(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`);
  };

  const showAccessibilityNotification = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const toggleSound = () => {
    updateSetting('soundEnabled', !settings.soundEnabled);
  };

  const handleKeyboardShortcuts = (e: KeyboardEvent) => {
    // Alt + A to open accessibility panel
    if (e.altKey && e.key === 'a') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
    
    // Alt + S to toggle sound
    if (e.altKey && e.key === 's') {
      e.preventDefault();
      toggleSound();
    }
    
    // Alt + H to toggle high contrast
    if (e.altKey && e.key === 'h') {
      e.preventDefault();
      updateSetting('highContrast', !settings.highContrast);
    }
    
    // Alt + L to toggle large text
    if (e.altKey && e.key === 'l') {
      e.preventDefault();
      updateSetting('largeText', !settings.largeText);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => document.removeEventListener('keydown', handleKeyboardShortcuts);
  }, [settings]);

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Accessibility className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              className="fixed right-6 bottom-24 z-50 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                <div className="flex items-center space-x-2">
                  <Accessibility className="w-5 h-5" />
                  <h2 className="font-semibold">Accessibility</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick Actions</h3>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={toggleSound}
                      className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                        settings.soundEnabled
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                      aria-label={`${settings.soundEnabled ? 'Disable' : 'Enable'} sound effects`}
                    >
                      {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                      <span className="text-sm font-medium">Sound</span>
                    </button>

                    <button
                      onClick={() => updateSetting('highContrast', !settings.highContrast)}
                      className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                        settings.highContrast
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                      aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">Contrast</span>
                    </button>
                  </div>
                </div>

                {/* Settings */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Display Settings</h3>
                  
                  <div className="space-y-2">
                    {[
                      { key: 'largeText', label: 'Large Text', icon: Type, description: 'Increase text size' },
                      { key: 'reducedMotion', label: 'Reduced Motion', icon: Monitor, description: 'Minimize animations' },
                      { key: 'focusVisible', label: 'Focus Indicators', icon: MousePointer, description: 'Show focus outlines' }
                    ].map((setting) => (
                      <label key={setting.key} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings[setting.key as keyof AccessibilitySettings] as boolean}
                          onChange={(e) => updateSetting(setting.key as keyof AccessibilitySettings, e.target.checked)}
                          className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                        />
                        <setting.icon className="w-4 h-4 text-gray-500" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{setting.label}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{setting.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Keyboard Shortcuts</h3>
                  <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex justify-between">
                      <span>Open Panel:</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-gray-600 rounded text-xs">Alt + A</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Toggle Sound:</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-gray-600 rounded text-xs">Alt + S</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>High Contrast:</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-gray-600 rounded text-xs">Alt + H</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Large Text:</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-gray-600 rounded text-xs">Alt + L</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{notificationMessage}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Accessibility setting updated</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
