import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  MousePointer, 
  Keyboard,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Settings,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
}

interface AccessibilityEnhancerProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlind: false,
    dyslexia: false
  });

  const [activeTab, setActiveTab] = useState<'visual' | 'navigation' | 'reading'>('visual');
  const [fontSize, setFontSize] = useState(100); // percentage
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--color-primary', '#ffffff');
      root.style.setProperty('--color-secondary', '#000000');
      root.style.setProperty('--color-background', '#000000');
      root.style.setProperty('--color-text', '#ffffff');
      root.style.setProperty('--color-border', '#ffffff');
    } else {
      root.style.removeProperty('--color-primary');
      root.style.removeProperty('--color-secondary');
      root.style.removeProperty('--color-background');
      root.style.removeProperty('--color-text');
      root.style.removeProperty('--color-border');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
      root.style.setProperty('--font-size-2xl', '32px');
    } else {
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--font-size-lg');
      root.style.removeProperty('--font-size-xl');
      root.style.removeProperty('--font-size-2xl');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
      root.style.setProperty('--focus-ring-offset', '2px');
    } else {
      root.style.removeProperty('--focus-ring');
      root.style.removeProperty('--focus-ring-offset');
    }

    // Color blind support
    if (newSettings.colorBlind) {
      root.style.setProperty('--color-success', '#000000');
      root.style.setProperty('--color-error', '#000000');
      root.style.setProperty('--color-warning', '#000000');
    } else {
      root.style.removeProperty('--color-success');
      root.style.removeProperty('--color-error');
      root.style.removeProperty('--color-warning');
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.style.setProperty('--font-family', 'OpenDyslexic, Arial, sans-serif');
      root.style.setProperty('--line-height', '1.8');
      root.style.setProperty('--letter-spacing', '0.1em');
    } else {
      root.style.removeProperty('--font-family');
      root.style.removeProperty('--line-height');
      root.style.removeProperty('--letter-spacing');
    }

    // Apply font size
    root.style.setProperty('--font-size-percentage', `${fontSize}%`);
    root.style.setProperty('--line-height-custom', lineHeight.toString());
    root.style.setProperty('--letter-spacing-custom', `${letterSpacing}em`);

    // Notify parent component
    onSettingsChange?.(newSettings);
  }, [fontSize, lineHeight, letterSpacing, onSettingsChange]);

  // Update settings
  const updateSettings = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [settings, applySettings]);

  // Reset all settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlind: false,
      dyslexia: false
    };
    setSettings(defaultSettings);
    setFontSize(100);
    setLineHeight(1.5);
    setLetterSpacing(0);
    applySettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const currentElement = document.activeElement;
      const currentIndex = Array.from(focusableElements).indexOf(currentElement as Element);

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          const nextIndex = (currentIndex + 1) % focusableElements.length;
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          const prevIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
          (focusableElements[prevIndex] as HTMLElement)?.focus();
          break;
        case 'Home':
          event.preventDefault();
          (focusableElements[0] as HTMLElement)?.focus();
          break;
        case 'End':
          event.preventDefault();
          (focusableElements[focusableElements.length - 1] as HTMLElement)?.focus();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReader]);

  // Toggle panel
  const togglePanel = useCallback(() => {
    setIsOpen(!isOpen);
    announceToScreenReader(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
  }, [isOpen, announceToScreenReader]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto"
            role="dialog"
            aria-label="Accessibility settings"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Accessibility Settings</h2>
                <button
                  onClick={togglePanel}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                {[
                  { id: 'visual', label: 'Visual', icon: Eye },
                  { id: 'navigation', label: 'Navigation', icon: Keyboard },
                  { id: 'reading', label: 'Reading', icon: Type }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-white dark:bg-gray-700 text-cyan-600 dark:text-cyan-400 shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Visual Settings */}
              {activeTab === 'visual' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Visual Adjustments</h3>
                    
                    {/* High Contrast */}
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <Contrast className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">High Contrast</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Increase color contrast</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => updateSettings('highContrast', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 transition-colors ${
                        settings.highContrast
                          ? 'bg-cyan-600 border-cyan-600'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {settings.highContrast && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>

                    {/* Large Text */}
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <Type className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Large Text</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Increase font size</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => updateSettings('largeText', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 transition-colors ${
                        settings.largeText
                          ? 'bg-cyan-600 border-cyan-600'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {settings.largeText && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>

                    {/* Font Size Slider */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Font Size: {fontSize}%
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="200"
                        value={fontSize}
                        onChange={(e) => {
                          setFontSize(Number(e.target.value));
                          applySettings(settings);
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>50%</span>
                        <span>100%</span>
                        <span>200%</span>
                      </div>
                    </div>

                    {/* Color Blind Support */}
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <Eye className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Color Blind Support</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Adjust colors for color blindness</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.colorBlind}
                        onChange={(e) => updateSettings('colorBlind', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 transition-colors ${
                        settings.colorBlind
                          ? 'bg-cyan-600 border-cyan-600'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {settings.colorBlind && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Settings */}
              {activeTab === 'navigation' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h3>
                    
                    {/* Keyboard Navigation */}
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <Keyboard className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Keyboard Navigation</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Use arrow keys to navigate</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => updateSettings('keyboardNavigation', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 transition-colors ${
                        settings.keyboardNavigation
                          ? 'bg-cyan-600 border-cyan-600'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {settings.keyboardNavigation && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>

                    {/* Focus Indicator */}
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <MousePointer className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Focus Indicator</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Show focus outlines</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => updateSettings('focusIndicator', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 transition-colors ${
                        settings.focusIndicator
                          ? 'bg-cyan-600 border-cyan-600'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {settings.focusIndicator && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>

                    {/* Reduced Motion */}
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <VolumeX className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Reduced Motion</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Minimize animations</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => updateSettings('reducedMotion', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 transition-colors ${
                        settings.reducedMotion
                          ? 'bg-cyan-600 border-cyan-600'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {settings.reducedMotion && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Reading Settings */}
              {activeTab === 'reading' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reading</h3>
                    
                    {/* Screen Reader */}
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <Volume2 className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Screen Reader</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Enable screen reader support</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => updateSettings('screenReader', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 transition-colors ${
                        settings.screenReader
                          ? 'bg-cyan-600 border-cyan-600'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {settings.screenReader && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>

                    {/* Dyslexia Support */}
                    <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <Type className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Dyslexia Support</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Optimize for dyslexia</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.dyslexia}
                        onChange={(e) => updateSettings('dyslexia', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 transition-colors ${
                        settings.dyslexia
                          ? 'bg-cyan-600 border-cyan-600'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {settings.dyslexia && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>

                    {/* Line Height */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Line Height: {lineHeight}
                      </label>
                      <input
                        type="range"
                        min="1.2"
                        max="2.5"
                        step="0.1"
                        value={lineHeight}
                        onChange={(e) => {
                          setLineHeight(Number(e.target.value));
                          applySettings(settings);
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    {/* Letter Spacing */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Letter Spacing: {letterSpacing}em
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="0.3"
                        step="0.01"
                        value={letterSpacing}
                        onChange={(e) => {
                          setLetterSpacing(Number(e.target.value));
                          applySettings(settings);
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={resetSettings}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset All Settings
                </button>
              </div>

              {/* Accessibility Info */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-medium mb-1">Accessibility Features</p>
                    <p>These settings help make our website more accessible. Your preferences are saved locally.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-30"
            onClick={togglePanel}
          />
        )}
      </AnimatePresence>

      {/* Screen Reader Only Class */}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;