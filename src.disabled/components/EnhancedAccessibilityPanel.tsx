import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone,
  Tablet,
  Settings,
  X,
  Check
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  zoomLevel: number;
  audioDescription: boolean;
  keyboardNavigation: boolean;
  voiceControl: boolean;
}

interface EnhancedAccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSettingsChange: (settings: AccessibilitySettings) => void;
  currentSettings: AccessibilitySettings;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  focusIndicator: true,
  colorBlindness: 'none',
  fontSize: 'medium',
  zoomLevel: 100,
  audioDescription: false,
  keyboardNavigation: true,
  voiceControl: false
};

export const EnhancedAccessibilityPanel: React.FC<EnhancedAccessibilityPanelProps> = ({
  isOpen,
  onClose,
  onSettingsChange,
  currentSettings = defaultSettings
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(currentSettings);
  const [activeTab, setActiveTab] = useState<'visual' | 'audio' | 'motor' | 'cognitive'>('visual');

  useEffect(() => {
    setSettings(currentSettings);
  }, [currentSettings]);

  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  }, [settings, onSettingsChange]);

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings);
    onSettingsChange(defaultSettings);
  }, [onSettingsChange]);

  const applySettings = useCallback(() => {
    // Apply settings to the document
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.style.fontSize = settings.fontSize === 'small' ? '14px' : 
                         settings.fontSize === 'medium' ? '16px' :
                         settings.fontSize === 'large' ? '18px' : '20px';

    // Zoom level
    root.style.zoom = `${settings.zoomLevel}%`;

    // Color blindness
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (settings.colorBlindness !== 'none') {
      root.classList.add(settings.colorBlindness);
    }
  }, [settings]);

  useEffect(() => {
    applySettings();
  }, [applySettings]);

  const tabs = [
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'audio', label: 'Audio', icon: Volume2 },
    { id: 'motor', label: 'Motor', icon: MousePointer },
    { id: 'cognitive', label: 'Cognitive', icon: Type }
  ] as const;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        className="fixed inset-y-0 right-0 w-96 bg-white shadow-2xl z-50 overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Accessibility Settings</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close accessibility panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'visual' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Visual Settings</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">High Contrast</span>
                    <button
                      onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <label className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Large Text</span>
                    <button
                      onClick={() => handleSettingChange('largeText', !settings.largeText)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.largeText ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Font Size</label>
                    <select
                      value={settings.fontSize}
                      onChange={(e) => handleSettingChange('fontSize', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="extra-large">Extra Large</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Zoom Level: {settings.zoomLevel}%</label>
                    <input
                      type="range"
                      min="50"
                      max="200"
                      value={settings.zoomLevel}
                      onChange={(e) => handleSettingChange('zoomLevel', parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'audio' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Audio Settings</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Audio Description</span>
                    <button
                      onClick={() => handleSettingChange('audioDescription', !settings.audioDescription)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.audioDescription ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.audioDescription ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'motor' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Motor Settings</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Keyboard Navigation</span>
                    <button
                      onClick={() => handleSettingChange('keyboardNavigation', !settings.keyboardNavigation)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <label className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Voice Control</span>
                    <button
                      onClick={() => handleSettingChange('voiceControl', !settings.voiceControl)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.voiceControl ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.voiceControl ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'cognitive' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Cognitive Settings</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Reduced Motion</span>
                    <button
                      onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <label className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Focus Indicator</span>
                    <button
                      onClick={() => handleSettingChange('focusIndicator', !settings.focusIndicator)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex space-x-3">
              <button
                onClick={resetSettings}
                className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                Reset
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Apply & Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};