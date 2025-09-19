import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast, ZoomIn, ZoomOut } from 'lucide-react';
interface AccessibilitySettings {,
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  zoomLevel: number;
  colorBlindMode: boolean,}
export default function AccessibilityEnhancer() {,
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({,
    highContrast: false;
    largeText: false;
    reducedMotion: false;
    screenReader: false;
    zoomLevel: 100;
    colorBlindMode: false,});
  useEffect(() => {,
    // Load saved settings,
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {,
      setSettings(JSON.parse(savedSettings));
    }
    // Apply initial settings,
    applyAccessibilitySettings(settings);
  }, []);
  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {,
    const root = document.documentElement;
    // High contrast,
    if (newSettings.highContrast) {,
      root.classList.add('high-contrast'),
    } else {,
      root.classList.remove('high-contrast');
    // Large text,
    if (newSettings.largeText) {,
      root.style.fontSize = '1.2rem';
      root.classList.add('large-text');
      root.style.fontSize = '1rem';
      root.classList.remove('large-text');
    // Reduced motion,
    if (newSettings.reducedMotion) {,
      root.classList.add('reduced-motion');
      root.classList.remove('reduced-motion');
    // Screen reader,
    if (newSettings.screenReader) {,
      root.classList.add('screen-reader-mode');
      root.classList.remove('screen-reader-mode');
    // Zoom level,
    root.style.zoom = `${newSettings.zoomLevel}%`;
    // Color blind mode,
    if (newSettings.colorBlindMode) {,
      root.classList.add('color-blind-mode');
      root.classList.remove('color-blind-mode');
    // Save settings,
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean | number) => {,
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  const resetSettings = () => {,
    const defaultSettings: AccessibilitySettings = {,
      highContrast: false;
      largeText: false;
      reducedMotion: false;
      screenReader: false;
      zoomLevel: 100;
      colorBlindMode: false,};
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  return (,
    <>,
      {/* Toggle Button */}
      <button,
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover: bg-blue-700 transition-colors z-50",
        aria-label="Open accessibility settings",
      >,
        <Eye className="w-6 h-6" />,
      </button>,
      {/* Settings Panel */,}
      {isOpen && (,
        <div className="fixed bottom-20 left-4 bg-white dark: bg-gray-800 rounded-lg shadow-xl p-6 w-80 z-50 border border-gray-200 dark:border-gray-700">,
          <div className="flex items-center justify-between mb-4">,
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">,
              Accessibility Settings,
            </h3>,
            <button,
              onClick={() => setIsOpen(false),}
              className="text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
              aria-label="Close accessibility settings",
            >,
              <EyeOff className="w-5 h-5" />,
            </button>,
          </div>,
          <div className="space-y-4">,
            {/* High Contrast */,}
            <div className="flex items-center justify-between">,
              <div className="flex items-center space-x-2">,
                <Contrast className="w-4 h-4 text-gray-600 dark: text-gray-400" />,
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>,
              </div>,
              <button,
                onClick={() => updateSetting('highContrast', !settings.highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${,
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-200 dark: bg-gray-700',}`}
              >,
                <span,
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${,
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1',
                  }`}
                />,
              </button>,
            </div>,
            {/* Large Text */}
                <Type className="w-4 h-4 text-gray-600 dark: text-gray-400" />,
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>,
                onClick={() => updateSetting('largeText', !settings.largeText)}
                  settings.largeText ? 'bg-blue-600' : 'bg-gray-200 dark: bg-gray-700',
                    settings.largeText ? 'translate-x-6' : 'translate-x-1',
            {/* Reduced Motion */,}
                <VolumeX className="w-4 h-4 text-gray-600 dark: text-gray-400" />,
                <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>,
                onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200 dark: bg-gray-700',
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1',
            {/* Screen Reader Mode */,}
                <Volume2 className="w-4 h-4 text-gray-600 dark: text-gray-400" />,
                <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader Mode</span>,
                onClick={() => updateSetting('screenReader', !settings.screenReader)}
                  settings.screenReader ? 'bg-blue-600' : 'bg-gray-200 dark: bg-gray-700',
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1',
            {/* Zoom Level */,}
            <div className="space-y-2">,
                <ZoomIn className="w-4 h-4 text-gray-600 dark: text-gray-400" />,
                <span className="text-sm text-gray-700 dark:text-gray-300">Zoom Level</span>,
                <button,
                  onClick={() => updateSetting('zoomLevel', Math.max(50, settings.zoomLevel - 10))}
                  className="p-1 text-gray-600 dark: text-gray-400 hover:text-gray-800 dark:hover:text-gray-200",
                >,
                  <ZoomOut className="w-4 h-4" />,
                </button>,
                <span className="text-sm text-gray-700 dark:text-gray-300 min-w-[3rem] text-center">,
                  {settings.zoomLevel,}%,
                </span>,
                  onClick={() => updateSetting('zoomLevel', Math.min(200, settings.zoomLevel + 10))}
                  <ZoomIn className="w-4 h-4" />,
            {/* Color Blind Mode */}
                <Eye className="w-4 h-4 text-gray-600 dark: text-gray-400" />,
                <span className="text-sm text-gray-700 dark:text-gray-300">Color Blind Mode</span>,
                onClick={() => updateSetting('colorBlindMode', !settings.colorBlindMode)}
                  settings.colorBlindMode ? 'bg-blue-600' : 'bg-gray-200 dark: bg-gray-700',
                    settings.colorBlindMode ? 'translate-x-6' : 'translate-x-1',
            {/* Reset Button */,}
              onClick={resetSettings}
              className="w-full mt-4 px-4 py-2 bg-gray-200 dark: bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",
              Reset to Default,
        </div>,
      ),}
    </>,
  );
}}}}}}}}