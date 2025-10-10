import React, { useState, useEffect } from 'react';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
      }
    }
  }, [settings]);

  const updateSetting = (key: keyof typeof settings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsVisible(false);
    }
  };

  return (
    <>
      {children}
      
      {/* Accessibility Settings Button */}
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition-colors z-50"
        aria-label="Open accessibility settings"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>

      {/* Accessibility Settings Modal */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsVisible(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Accessibility Settings</h2>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close accessibility settings"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Size
                </label>
                <div className="flex space-x-2">
                  {(['small', 'medium', 'large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`px-3 py-1 rounded text-sm ${
                        settings.fontSize === size
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => updateSetting('highContrast', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">High Contrast Mode</span>
                </label>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">Reduce Motion</span>
                </label>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings.screenReader}
                    onChange={(e) => updateSetting('screenReader', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">Screen Reader Optimized</span>
                </label>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">Enhanced Keyboard Navigation</span>
                </label>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setSettings({
                    fontSize: 'medium',
                    highContrast: false,
                    reducedMotion: false,
                    screenReader: false,
                    keyboardNavigation: false
                  });
                  localStorage.removeItem('accessibility-settings');
                }}
                className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibility;