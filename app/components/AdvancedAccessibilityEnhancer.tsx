'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, Eye, Volume2, Keyboard, MousePointer, Settings } from 'lucide-react';

interface AdvancedAccessibilityEnhancerProps {
  enableHighContrast?: boolean;
  enableScreenReader?: boolean;
  enableKeyboardNavigation?: boolean;
  enableVoiceControl?: boolean;
  enableFocusManagement?: boolean;
  enableTextScaling?: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  enableHighContrast = true,
  enableScreenReader = true,
  enableKeyboardNavigation = true,
  enableVoiceControl = true,
  enableFocusManagement = true,
  enableTextScaling = true
}) => {
  const [isActive, setIsActive] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    screenReader: false,
    keyboardNav: false,
    voiceControl: false,
    focusManagement: false,
    textScaling: 100
  });

  useEffect(() => {
    // Initialize accessibility features
    if (enableHighContrast) {
      document.documentElement.setAttribute('data-high-contrast', 'false');
    }
    if (enableScreenReader) {
      document.documentElement.setAttribute('data-screen-reader', 'false');
    if (enableKeyboardNavigation) {
      document.documentElement.setAttribute('data-keyboard-nav', 'false');
    if (enableVoiceControl) {
      document.documentElement.setAttribute('data-voice-control', 'false');
    if (enableFocusManagement) {
      document.documentElement.setAttribute('data-focus-management', 'false');
    if (enableTextScaling) {
      document.documentElement.setAttribute('data-text-scaling', '100');
  }, [enableHighContrast, enableScreenReader, enableKeyboardNavigation, enableVoiceControl, enableFocusManagement, enableTextScaling]);

  const toggleFeature = (feature: keyof typeof settings) => {
    const newValue = typeof settings[feature] === 'boolean' ? !settings[feature] : settings[feature];
    setSettings(prev => ({ ...prev, [feature]: newValue }));
    
    // Apply the setting to the document
    if (feature === 'textScaling') {
      document.documentElement.setAttribute('data-text-scaling', newValue.toString());
    } else {
      document.documentElement.setAttribute(`data-${feature.replace(/([A-Z])/g, '-$1').toLowerCase()}`, newValue.toString());
  };

  const features = [
    {
      id: 'highContrast',
      name: 'High Contrast',
      description: 'Increase color contrast for better visibility',
      icon: Eye,
      enabled: enableHighContrast
    },
      id: 'screenReader',
      name: 'Screen Reader',
      description: 'Optimize content for screen readers',
      icon: Volume2,
      enabled: enableScreenReader
      id: 'keyboardNav',
      name: 'Keyboard Navigation',
      description: 'Enhanced keyboard navigation support',
      icon: Keyboard,
      enabled: enableKeyboardNavigation
      id: 'voiceControl',
      name: 'Voice Control',
      description: 'Enable voice commands for navigation',
      icon: MousePointer,
      enabled: enableVoiceControl
      id: 'focusManagement',
      name: 'Focus Management',
      description: 'Improved focus indicators and management',
      icon: Settings,
      enabled: enableFocusManagement
  ];

  if (!isActive) {
    return (
      <button
        onClick={() => setIsActive(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open accessibility settings"
      >
        <Settings className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border border-gray-200 p-6 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Accessibility Settings</h3>
        <button
          onClick={() => setIsActive(false)}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Close accessibility settings"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <feature.icon className="w-5 h-5 text-gray-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                <div className="text-xs text-gray-500">{feature.description}</div>
              </div>
            </div>
            <button
              onClick={() => toggleFeature(feature.id as keyof typeof settings)}
              disabled={!feature.enabled}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings[feature.id as keyof typeof settings] ? 'bg-blue-600' : 'bg-gray-200'
              } ${!feature.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings[feature.id as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}

        {enableTextScaling && (
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">Text Scaling</span>
              <span className="text-sm text-gray-500">{settings.textScaling}%</span>
            <input
              type="range"
              min="75"
              max="200"
              value={settings.textScaling}
              onChange={() => toggleFeature('textScaling')}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
        )}

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-600">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
          Accessibility features are active
        </div>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;