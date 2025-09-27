import React, { useState, useEffect, useCallback } from 'react';
import { User, Settings, Palette, Globe, Smartphone, MonitorSunMoon } from 'lucide-react';

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  animations: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  screenReader: boolean;
}

interface EnhancedUserExperienceProps {
  className?: string;
}

const EnhancedUserExperience: React.FC<EnhancedUserExperienceProps> = ({ className = '' }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'auto',
    language: 'en',
    fontSize: 'medium',
    animations: true,
    reducedMotion: false,
    highContrast: false,
    screenReader: false
  });

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'appearance' | 'accessibility' | 'language'>('appearance');

  const updatePreference = useCallback((key: keyof UserPreferences, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
    
    // Apply preferences immediately
    if (key === 'theme') {
      document.documentElement.setAttribute('data-theme', value);
    }
    if (key === 'fontSize') {
      document.documentElement.setAttribute('data-font-size', value);
    }
    if (key === 'highContrast') {
      document.documentElement.setAttribute('data-high-contrast', value.toString());
    }
    if (key === 'reducedMotion') {
      document.documentElement.setAttribute('data-reduced-motion', value.toString());
    }
  }, []);

  useEffect(() => {
    // Load saved preferences
    const savedPreferences = localStorage.getItem('user-preferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse saved preferences:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Save preferences to localStorage
    localStorage.setItem('user-preferences', JSON.stringify(preferences));
  }, [preferences]);

  const renderAppearanceTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
        <select
          value={preferences.theme}
          onChange={(e) => updatePreference('theme', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
        <select
          value={preferences.fontSize}
          onChange={(e) => updatePreference('fontSize', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Animations</label>
        <input
          type="checkbox"
          checked={preferences.animations}
          onChange={(e) => updatePreference('animations', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>
    </div>
  );

  const renderAccessibilityTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">High Contrast</label>
        <input
          type="checkbox"
          checked={preferences.highContrast}
          onChange={(e) => updatePreference('highContrast', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Reduced Motion</label>
        <input
          type="checkbox"
          checked={preferences.reducedMotion}
          onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Screen Reader</label>
        <input
          type="checkbox"
          checked={preferences.screenReader}
          onChange={(e) => updatePreference('screenReader', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>
    </div>
  );

  const renderLanguageTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
        <select
          value={preferences.language}
          onChange={(e) => updatePreference('language', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open user experience settings"
      >
        <Settings className="h-6 w-6" />
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">User Experience</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close settings"
            >
              ×
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('appearance')}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'appearance'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Palette className="h-4 w-4 inline mr-2" />
              Appearance
            </button>
            <button
              onClick={() => setActiveTab('accessibility')}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'accessibility'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <User className="h-4 w-4 inline mr-2" />
              Accessibility
            </button>
            <button
              onClick={() => setActiveTab('language')}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'language'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Globe className="h-4 w-4 inline mr-2" />
              Language
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[200px]">
            {activeTab === 'appearance' && renderAppearanceTab()}
            {activeTab === 'accessibility' && renderAccessibilityTab()}
            {activeTab === 'language' && renderLanguageTab()}
          </div>

          {/* Reset Button */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={() => {
                setPreferences({
                  theme: 'auto',
                  language: 'en',
                  fontSize: 'medium',
                  animations: true,
                  reducedMotion: false,
                  highContrast: false,
                  screenReader: false
                });
              }}
              className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedUserExperience;