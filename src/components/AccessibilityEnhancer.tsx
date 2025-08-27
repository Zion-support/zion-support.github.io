import React, { useEffect, useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  RotateCcw,
  Sun,
  Moon,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  darkMode: 'light' | 'dark' | 'auto';
  deviceType: 'desktop' | 'tablet' | 'mobile';
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    highContrast: false,
    reducedMotion: false,
    soundEnabled: true,
    darkMode: 'auto',
    deviceType: 'desktop'
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.warn('Failed to parse accessibility settings');
      }
    }

    // Detect device type
    const detectDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) setSettings(prev => ({ ...prev, deviceType: 'mobile' }));
      else if (width < 1024) setSettings(prev => ({ ...prev, deviceType: 'tablet' }));
      else setSettings(prev => ({ ...prev, deviceType: 'desktop' }));
    };

    detectDeviceType();
    window.addEventListener('resize', detectDeviceType);

    return () => window.removeEventListener('resize', detectDeviceType);
  }, []);

  useEffect(() => {
    // Apply settings to document
    applySettings();
    
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applySettings = () => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${settings.fontSize}px`;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }
    
    // Dark mode
    if (settings.darkMode === 'dark' || 
        (settings.darkMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K, 
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 16,
      highContrast: false,
      reducedMotion: false,
      soundEnabled: true,
      darkMode: 'auto',
      deviceType: 'desktop'
    };
    setSettings(defaultSettings);
  };

  const increaseFontSize = () => {
    updateSetting('fontSize', Math.min(settings.fontSize + 2, 24));
  };

  const decreaseFontSize = () => {
    updateSetting('fontSize', Math.max(settings.fontSize - 2, 12));
  };

  const toggleHighContrast = () => {
    updateSetting('highContrast', !settings.highContrast);
  };

  const toggleReducedMotion = () => {
    updateSetting('reducedMotion', !settings.reducedMotion);
  };

  const toggleSound = () => {
    updateSetting('soundEnabled', !settings.soundEnabled);
  };

  const setDarkMode = (mode: 'light' | 'dark' | 'auto') => {
    updateSetting('darkMode', mode);
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-lg p-6 text-white shadow-2xl max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-cyan-400">Accessibility</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* Font Size Control */}
            <div>
              <label className="block text-sm font-medium mb-2">Font Size</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 bg-cyan-500/20 text-cyan-400 rounded hover:bg-cyan-500/30 transition-colors"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-3 py-2 bg-white/10 rounded text-center min-w-[3rem]">
                  {settings.fontSize}px
                </span>
                <button
                  onClick={increaseFontSize}
                  className="p-2 bg-cyan-500/20 text-cyan-400 rounded hover:bg-cyan-500/30 transition-colors"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">High Contrast</label>
              <button
                onClick={toggleHighContrast}
                className={`p-2 rounded transition-colors ${
                  settings.highContrast 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
                aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
              >
                <Contrast className="w-4 h-4" />
              </button>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Reduced Motion</label>
              <button
                onClick={toggleReducedMotion}
                className={`p-2 rounded transition-colors ${
                  settings.reducedMotion 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
                aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
              >
                {settings.reducedMotion ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Sound Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Sound Effects</label>
              <button
                onClick={toggleSound}
                className={`p-2 rounded transition-colors ${
                  settings.soundEnabled 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
                aria-label={`${settings.soundEnabled ? 'Disable' : 'Enable'} sound effects`}
              >
                {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>

            {/* Dark Mode Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Theme</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setDarkMode('light')}
                  className={`p-2 rounded text-xs transition-colors ${
                    settings.darkMode === 'light'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                  aria-label="Light theme"
                >
                  <Sun className="w-4 h-4 mx-auto mb-1" />
                  Light
                </button>
                <button
                  onClick={() => setDarkMode('dark')}
                  className={`p-2 rounded text-xs transition-colors ${
                    settings.darkMode === 'dark'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                  aria-label="Dark theme"
                >
                  <Moon className="w-4 h-4 mx-auto mb-1" />
                  Dark
                </button>
                <button
                  onClick={() => setDarkMode('auto')}
                  className={`p-2 rounded text-xs transition-colors ${
                    settings.darkMode === 'auto'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                  aria-label="Auto theme"
                >
                  <Monitor className="w-4 h-4 mx-auto mb-1" />
                  Auto
                </button>
              </div>
            </div>

            {/* Device Type Indicator */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Device:</span>
              <div className="flex items-center space-x-1">
                {settings.deviceType === 'mobile' && <Smartphone className="w-4 h-4" />}
                {settings.deviceType === 'tablet' && <Tablet className="w-4 h-4" />}
                {settings.deviceType === 'desktop' && <Monitor className="w-4 h-4" />}
                <span className="capitalize">{settings.deviceType}</span>
              </div>
            </div>

            {/* Reset Button */}
            <div className="pt-2 border-t border-cyan-500/20">
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors flex items-center justify-center space-x-2"
                aria-label="Reset all accessibility settings"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Settings</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityEnhancer;
