import React, { useState, useEffect } from 'react';
import { 
  CogIcon, 
  MoonIcon, 
  SunIcon, 
  ComputerDesktopIcon,
  BellIcon,
  EyeIcon,
  LanguageIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    updates: boolean;
    marketing: boolean;
  };
  accessibility: {
    reducedMotion: boolean;
    highContrast: boolean;
    largeText: boolean;
    screenReader: boolean;
  };
  privacy: {
    analytics: boolean;
    cookies: boolean;
    tracking: boolean;
    personalization: boolean;
  };
  display: {
    compactMode: boolean;
    showAnimations: boolean;
    autoplay: boolean;
  };
  content: {
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    interests: string[];
    region: string;
  };
}

interface AdvancedUserPreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (preferences: UserPreferences) => void;
  className?: string;
}

const defaultPreferences: UserPreferences = {
  theme: 'auto',
  language: 'en',
  notifications: {
    email: true,
    push: false,
    updates: true,
    marketing: false
  },
  accessibility: {
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    screenReader: false
  },
  privacy: {
    analytics: true,
    cookies: true,
    tracking: false,
    personalization: true
  },
  display: {
    compactMode: false,
    showAnimations: true,
    autoplay: false
  },
  content: {
    difficulty: 'intermediate',
    interests: ['AI', 'Quantum Computing'],
    region: 'global'
  }
};

const AdvancedUserPreferences: React.FC<AdvancedUserPreferencesProps> = ({
  isOpen,
  onClose,
  onSave,
  className = ""
}) => {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [activeTab, setActiveTab] = useState('general');
  const [hasChanges, setHasChanges] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferences({ ...defaultPreferences, ...parsed });
      } catch (error) {
        console.error('Error loading preferences:', error);
      }
    }
  }, []);

  // Track changes
  useEffect(() => {
    const saved = localStorage.getItem('userPreferences');
    const savedPrefs = saved ? JSON.parse(saved) : defaultPreferences;
    setHasChanges(JSON.stringify(preferences) !== JSON.stringify(savedPrefs));
  }, [preferences]);

  const updatePreference = (path: string, value: any) => {
    setPreferences(prev => {
      const keys = path.split('.');
      const updated = { ...prev };
      let current: any = updated;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const savePreferences = () => {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    setHasChanges(false);
    
    // Apply theme immediately
    document.documentElement.classList.remove('light', 'dark');
    if (preferences.theme !== 'auto') {
      document.documentElement.classList.add(preferences.theme);
    }
    
    // Apply accessibility settings
    if (preferences.accessibility.reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0s');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
    }
    
    if (preferences.accessibility.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }
    
    if (onSave) {
      onSave(preferences);
    }
    
    // Show success notification
    if ((window as any).notifications) {
      (window as any).notifications.success(
        'Preferences Saved',
        'Your preferences have been updated successfully.',
        { duration: 3000 }
      );
    }
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
    localStorage.removeItem('userPreferences');
    setHasChanges(true);
  };

  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' }
  ];

  const contentInterests = [
    'AI', 'Quantum Computing', 'Neural Interfaces', 'Robotics', 
    'Blockchain', 'Cybersecurity', 'IoT', 'Cloud Computing',
    'Machine Learning', 'Data Science', 'Biotechnology', 'Space Tech'
  ];

  const tabs = [
    { id: 'general', name: 'General', icon: CogIcon },
    { id: 'appearance', name: 'Appearance', icon: PaintBrushIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'accessibility', name: 'Accessibility', icon: EyeIcon },
    { id: 'privacy', name: 'Privacy', icon: ShieldCheckIcon }
  ];

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${className}`}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">User Preferences</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-50 border-r border-gray-200">
              <nav className="p-4 space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-3" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {/* General Tab */}
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">General Settings</h4>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {/* Language */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <LanguageIcon className="h-4 w-4 inline mr-1" />
                          Language
                        </label>
                        <select
                          value={preferences.language}
                          onChange={(e) => updatePreference('language', e.target.value)}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                          {availableLanguages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                              {lang.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Content Difficulty */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Content Difficulty Level
                        </label>
                        <select
                          value={preferences.content.difficulty}
                          onChange={(e) => updatePreference('content.difficulty', e.target.value)}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="beginner">Beginner - Basic concepts and introductions</option>
                          <option value="intermediate">Intermediate - Technical details with explanations</option>
                          <option value="advanced">Advanced - In-depth technical content</option>
                        </select>
                      </div>

                      {/* Content Interests */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Content Interests
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {contentInterests.map((interest) => (
                            <label key={interest} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={preferences.content.interests.includes(interest)}
                                onChange={(e) => {
                                  const current = preferences.content.interests;
                                  if (e.target.checked) {
                                    updatePreference('content.interests', [...current, interest]);
                                  } else {
                                    updatePreference('content.interests', current.filter(i => i !== interest));
                                  }
                                }}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <span className="ml-2 text-sm text-gray-700">{interest}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Appearance Tab */}
              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Appearance Settings</h4>
                    
                    {/* Theme */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Theme Preference
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: 'light', label: 'Light', icon: SunIcon },
                          { value: 'dark', label: 'Dark', icon: MoonIcon },
                          { value: 'auto', label: 'Auto', icon: ComputerDesktopIcon }
                        ].map((theme) => (
                          <button
                            key={theme.value}
                            onClick={() => updatePreference('theme', theme.value)}
                            className={`flex flex-col items-center p-4 border-2 rounded-lg ${
                              preferences.theme === theme.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <theme.icon className="h-8 w-8 mb-2" />
                            <span className="text-sm font-medium">{theme.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Display Options */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="flex flex-col">
                          <span className="text-sm font-medium text-gray-700">Compact Mode</span>
                          <span className="text-xs text-gray-500">Show more content in less space</span>
                        </label>
                        <input
                          type="checkbox"
                          checked={preferences.display.compactMode}
                          onChange={(e) => updatePreference('display.compactMode', e.target.checked)}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex flex-col">
                          <span className="text-sm font-medium text-gray-700">Show Animations</span>
                          <span className="text-xs text-gray-500">Enable smooth transitions and effects</span>
                        </label>
                        <input
                          type="checkbox"
                          checked={preferences.display.showAnimations}
                          onChange={(e) => updatePreference('display.showAnimations', e.target.checked)}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex flex-col">
                          <span className="text-sm font-medium text-gray-700">Autoplay Videos</span>
                          <span className="text-xs text-gray-500">Automatically play video content</span>
                        </label>
                        <input
                          type="checkbox"
                          checked={preferences.display.autoplay}
                          onChange={(e) => updatePreference('display.autoplay', e.target.checked)}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h4>
                    
                    <div className="space-y-4">
                      {Object.entries(preferences.notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <label className="flex flex-col">
                            <span className="text-sm font-medium text-gray-700 capitalize">
                              {key === 'email' ? 'Email Notifications' :
                               key === 'push' ? 'Push Notifications' :
                               key === 'updates' ? 'Product Updates' :
                               'Marketing Communications'}
                            </span>
                            <span className="text-xs text-gray-500">
                              {key === 'email' ? 'Receive notifications via email' :
                               key === 'push' ? 'Browser push notifications' :
                               key === 'updates' ? 'New features and improvements' :
                               'Promotional content and offers'}
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => updatePreference(`notifications.${key}`, e.target.checked)}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Accessibility Tab */}
              {activeTab === 'accessibility' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Accessibility Settings</h4>
                    
                    <div className="space-y-4">
                      {Object.entries(preferences.accessibility).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <label className="flex flex-col">
                            <span className="text-sm font-medium text-gray-700">
                              {key === 'reducedMotion' ? 'Reduced Motion' :
                               key === 'highContrast' ? 'High Contrast' :
                               key === 'largeText' ? 'Large Text' :
                               'Screen Reader Optimization'}
                            </span>
                            <span className="text-xs text-gray-500">
                              {key === 'reducedMotion' ? 'Minimize animations and transitions' :
                               key === 'highContrast' ? 'Increase color contrast for better visibility' :
                               key === 'largeText' ? 'Increase text size throughout the interface' :
                               'Optimize for screen reader compatibility'}
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => updatePreference(`accessibility.${key}`, e.target.checked)}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Privacy Settings</h4>
                    
                    <div className="space-y-4">
                      {Object.entries(preferences.privacy).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <label className="flex flex-col">
                            <span className="text-sm font-medium text-gray-700">
                              {key === 'analytics' ? 'Analytics Data' :
                               key === 'cookies' ? 'Functional Cookies' :
                               key === 'tracking' ? 'Cross-site Tracking' :
                               'Content Personalization'}
                            </span>
                            <span className="text-xs text-gray-500">
                              {key === 'analytics' ? 'Help us improve by sharing usage data' :
                               key === 'cookies' ? 'Enable cookies for enhanced functionality' :
                               key === 'tracking' ? 'Allow tracking for targeted advertising' :
                               'Customize content based on your preferences'}
                            </span>
                          </label>
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => updatePreference(`privacy.${key}`, e.target.checked)}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
            <button
              onClick={resetPreferences}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Reset to Defaults
            </button>
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={savePreferences}
                disabled={!hasChanges}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                  hasChanges
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedUserPreferences;