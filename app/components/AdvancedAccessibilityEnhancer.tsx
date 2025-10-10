'use client';
import React, { useEffect, useState } from 'react';
import { CheckCircle, Eye, Volume2, Keyboard, MousePointer } from 'lucide-react';

interface AdvancedAccessibilityEnhancerProps {
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableScreenReader?: boolean;
  enableKeyboardNavigation?: boolean;
  enableFocusIndicators?: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  enableHighContrast = true,
  enableLargeText = true,
  enableScreenReader = true,
  enableKeyboardNavigation = true,
  enableFocusIndicators = true
}) => {
  const [isActive, setIsActive] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    screenReader: false,
    keyboardNav: false,
    focusIndicators: false
  });

  useEffect(() => {
    // Initialize accessibility settings
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (settings.focusIndicators) {
      root.classList.add('focus-indicators');
    } else {
      root.classList.remove('focus-indicators');
    }
  }, [settings]);

  const toggleSetting = (key: keyof typeof settings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
  };

  const features = [
    {
      icon: Eye,
      title: 'High Contrast Mode',
      description: 'Improve visibility with high contrast colors',
      enabled: enableHighContrast,
      setting: 'highContrast' as keyof typeof settings
    },
    {
      icon: Volume2,
      title: 'Large Text',
      description: 'Increase text size for better readability',
      enabled: enableLargeText,
      setting: 'largeText' as keyof typeof settings
    },
    {
      icon: Volume2,
      title: 'Screen Reader Support',
      description: 'Optimize content for screen readers',
      enabled: enableScreenReader,
      setting: 'screenReader' as keyof typeof settings
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Enhanced keyboard navigation support',
      enabled: enableKeyboardNavigation,
      setting: 'keyboardNav' as keyof typeof settings
    },
    {
      icon: MousePointer,
      title: 'Focus Indicators',
      description: 'Clear focus indicators for better navigation',
      enabled: enableFocusIndicators,
      setting: 'focusIndicators' as keyof typeof settings
    }
  ];

  return (
    <div className="accessibility-enhancer">
      <button
        onClick={() => setIsActive(!isActive)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Toggle accessibility settings"
      >
        <Eye className="w-6 h-6" />
      </button>

      {isActive && (
        <div className="fixed bottom-20 right-4 bg-white border border-gray-200 rounded-lg shadow-xl p-6 w-80 z-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Settings</h3>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <feature.icon className="w-5 h-5 text-gray-600 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{feature.title}</div>
                    <div className="text-xs text-gray-500">{feature.description}</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting(feature.setting)}
                  disabled={!feature.enabled}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings[feature.setting] ? 'bg-blue-600' : 'bg-gray-200'
                  } ${!feature.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label={`Toggle ${feature.title}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings[feature.setting] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Accessibility features are now active
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --border-color: #000000;
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .focus-indicators *:focus {
          outline: 3px solid #0066cc !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;