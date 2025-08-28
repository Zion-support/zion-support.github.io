import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Contrast, 
  Keyboard,
  HelpCircle,
  X,
  Plus,
  Minus
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  soundEffects: boolean;
  focusIndicators: boolean;
  fontSize: number;
  theme: 'light' | 'dark' | 'auto';
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    soundEffects: true,
    focusIndicators: true,
    fontSize: 16,
    theme: 'auto'
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(prev => ({ ...prev, ...parsed }));
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    applyAccessibilitySettings();
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-contrast', '1.5');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.removeProperty('--text-scale');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('show-focus-indicators');
    } else {
      root.classList.remove('show-focus-indicators');
    }

    // Font size
    root.style.setProperty('--base-font-size', `${settings.fontSize}px`);

    // Theme
    if (settings.theme === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else if (settings.theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.remove('light-theme', 'dark-theme');
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateFontSize = (delta: number) => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.max(12, Math.min(24, prev.fontSize + delta))
    }));
  };

  const updateTheme = (theme: 'light' | 'dark' | 'auto') => {
    setSettings(prev => ({ ...prev, theme }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      soundEffects: true,
      focusIndicators: true,
      fontSize: 16,
      theme: 'auto'
    };
    setSettings(defaultSettings);
  };

  const playSoundEffect = () => {
    if (settings.soundEffects) {
      // Create a simple beep sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-cyan-400" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsOpen(false);
                  }
                }}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Visual Settings */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  Visual Settings
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-300">High Contrast</span>
                    <button
                      onClick={() => toggleSetting('highContrast')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                        settings.highContrast ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}
                      aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-300">Large Text</span>
                    <button
                      onClick={() => toggleSetting('largeText')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                        settings.largeText ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}
                      aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </label>

                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm">Font Size</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateFontSize(-1)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            updateFontSize(-1);
                          }
                        }}
                        className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        aria-label="Decrease font size"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <span className="text-white font-mono min-w-[3rem] text-center">
                        {settings.fontSize}px
                      </span>
                      <button
                        onClick={() => updateFontSize(1)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            updateFontSize(1);
                          }
                        }}
                        className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        aria-label="Increase font size"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Motion & Sound */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  Motion & Sound
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-300">Reduced Motion</span>
                    <button
                      onClick={() => toggleSetting('reducedMotion')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                        settings.reducedMotion ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}
                      aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-300">Sound Effects</span>
                    <button
                      onClick={() => toggleSetting('soundEffects')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                        settings.soundEffects ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}
                      aria-label={`${settings.soundEffects ? 'Disable' : 'Enable'} sound effects`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </label>

                  <button
                    onClick={playSoundEffect}
                    className="w-full p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-300 text-sm"
                    aria-label="Test sound effects"
                  >
                    Test Sound
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-cyan-400" />
                  Navigation
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-slate-300">Focus Indicators</span>
                    <button
                      onClick={() => toggleSetting('focusIndicators')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                        settings.focusIndicators ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}
                      aria-label={`${settings.focusIndicators ? 'Disable' : 'Enable'} focus indicators`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </label>

                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm">Theme</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['light', 'dark', 'auto'] as const).map((theme) => (
                        <button
                          key={theme}
                          onClick={() => updateTheme(theme)}
                          className={`p-2 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                            settings.theme === theme
                              ? 'bg-cyan-500 text-white'
                              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                          }`}
                          aria-label={`Switch to ${theme} theme`}
                        >
                          {theme === 'light' && <Sun className="w-4 h-4 mx-auto" />}
                          {theme === 'dark' && <Moon className="w-4 h-4 mx-auto" />}
                          {theme === 'auto' && <Contrast className="w-4 h-4 mx-auto" />}
                          <span className="block mt-1 capitalize">{theme}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Help */}
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400" />
                  Keyboard Shortcuts
                </h4>
                <div className="text-sm text-slate-300 space-y-1">
                  <div>• <kbd className="bg-slate-600 px-1 py-0.5 rounded text-xs">Tab</kbd> Navigate between elements</div>
                  <div>• <kbd className="bg-slate-600 px-1 py-0.5 rounded text-xs">Enter</kbd> or <kbd className="bg-slate-600 px-1 py-0.5 rounded text-xs">Space</kbd> Activate buttons</div>
                  <div>• <kbd className="bg-slate-600 px-1 py-0.5 rounded text-xs">Escape</kbd> Close dialogs</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={resetSettings}
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Reset all accessibility settings"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Close accessibility panel"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
