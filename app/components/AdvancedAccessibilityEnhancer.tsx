'use client';

import { useEffect } from 'react-helmet-async';
import {   Volume2, Keyboard, MousePointer } from 'lucide-react';

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
    }
    if (enableKeyboardNavigation) {
      document.documentElement.setAttribute('data-keyboard-nav', 'false');
    }
    if (enableVoiceControl) {
      document.documentElement.setAttribute('data-voice-control', 'false');
    }
    if (enableFocusManagement) {
      document.documentElement.setAttribute('data-focus-management', 'false');
    }
    if (enableTextScaling) {
      document.documentElement.setAttribute('data-text-scaling', '100');
    }
  }, [enableHighContrast, enableScreenReader, enableKeyboardNavigation, enableVoiceControl, enableFocusManagement, enableTextScaling]);

  const toggleFeature = (feature: keyof typeof settings) => {
    const newValue = typeof settings[feature] === 'boolean' ? !settings[feature] : settings[feature];
    setSettings(prev => ({ ...prev, [feature]: newValue }));
    
    // Apply the setting to the document
    if (feature === 'textScaling') {
      document.documentElement.setAttribute('data-text-scaling', newValue.toString());
    } else {
      document.documentElement.setAttribute(`data-${feature.replace(/([A-Z])/g, '-$1').toLowerCase()}`, newValue.toString());
    }
  };

const features = [
    {
      id: 'highContrast',
      name: 'High Contrast',
      description: 'Increase color contrast for better visibility',
      icon: 
      enabled: enableHighContrast
    },
    {
      id: 'screenReader',
      name: 'Screen Reader',
      description: 'Optimize content for screen readers',
      icon: Volume2,
      enabled: enableScreenReader
    },
    {
      id: 'keyboardNav',
      name: 'Keyboard Navigation',
      description: 'Enhanced keyboard navigation support',
      icon: Keyboard,
      enabled: enableKeyboardNavigation
    },
    {
      id: 'voiceControl',
      name: 'Voice Control',
      description: 'Enable voice commands for navigation',
      icon: MousePointer,
      enabled: enableVoiceControl
    },
    {
      id: 'focusManagement',
      name: 'Focus Management',
      description: 'Improved focus indicators and management',
      icon: 
      enabled: enableFocusManagement
    }
  ];

  if (!isActive) {
    return (
    <div>

      <button
        onClick={() => setIsActive(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open accessibility settings"
      >
        <Settings>
  
      </button>
    );
  }

  return (
    <div>

    <div>
  
      <div>
  
        <h3 className="text-lg font-semibold text-gray-900">Accessibility Settings</h3>
        <button
          onClick={() => setIsActive(false)}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Close accessibility settings"
        >
          ×
        </button>
      </div>

      <div>
  
        {features.map((feature) => (
          <div>
  
            <div>
  
              <feature>
  
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
              <span>
  
            </button>
          </div>
        ))}

        {enableTextScaling && (
          <div>
  
            <div>
  
              <span className="text-sm font-medium text-gray-900">Text Scaling</span>
              <span className="text-sm text-gray-500">{settings.textScaling}%</span>
            </div>
            <input
              type="range"
              min="75"
              max="200"
              value={settings.textScaling}
              onChange={() => toggleFeature('textScaling')}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}
      </div>

      <div>
  
        <div>
  
          <CheckCircle>
  
          Accessibility features are active
        </div>
      </div>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;