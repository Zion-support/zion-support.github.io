import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
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

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  const handleSettingChange = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <React.Fragment>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleVisibility}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Toggle accessibility settings"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </button>

        {isVisible && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-6 w-80 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Settings</h3>
            
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                  className="rounded"
                />
                <span className="text-gray-700">High Contrast</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                  className="rounded"
                />
                <span className="text-gray-700">Large Text</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                  className="rounded"
                />
                <span className="text-gray-700">Reduced Motion</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.focusVisible}
                  onChange={(e) => handleSettingChange('focusVisible', e.target.checked)}
                  className="rounded"
                />
                <span className="text-gray-700">Enhanced Focus</span>
              </label>
            </div>

            <button
              onClick={toggleVisibility}
              className="mt-4 w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .large-text {
          font-size: 1.125rem;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible *:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AccessibilityEnhancer;