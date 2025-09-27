import React, { useState, useEffect, useCallback } from 'react';

interface Setting {
  id: string;
  category: string;
  title: string;
  description: string;
  type: 'toggle' | 'select' | 'input' | 'textarea' | 'slider' | 'color' | 'file';
  value: any;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  required?: boolean;
  validation?: (value: any) => string | null;
}

interface SettingsPanelProps {
  className?: string;
  onSettingsChange?: (settings: Setting[]) => void;
  onSave?: (settings: Setting[]) => void;
  onReset?: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  className = '',
  onSettingsChange,
  onSave,
  onReset
}) => {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Initialize settings
  useEffect(() => {
    const initialSettings: Setting[] = [
      // General Settings
      {
        id: 'theme',
        category: 'General',
        title: 'Theme',
        description: 'Choose your preferred theme',
        type: 'select',
        value: 'light',
        options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'auto', label: 'Auto' }
        ]
      },
      {
        id: 'language',
        category: 'General',
        title: 'Language',
        description: 'Select your preferred language',
        type: 'select',
        value: 'en',
        options: [
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' }
        ]
      },
      {
        id: 'notifications',
        category: 'General',
        title: 'Enable Notifications',
        description: 'Receive notifications for important updates',
        type: 'toggle',
        value: true
      },
      {
        id: 'autoSave',
        category: 'General',
        title: 'Auto Save',
        description: 'Automatically save changes',
        type: 'toggle',
        value: true
      },

      // Appearance Settings
      {
        id: 'fontSize',
        category: 'Appearance',
        title: 'Font Size',
        description: 'Adjust the font size for better readability',
        type: 'slider',
        value: 16,
        min: 12,
        max: 24,
        step: 1
      },
      {
        id: 'primaryColor',
        category: 'Appearance',
        title: 'Primary Color',
        description: 'Choose your primary color theme',
        type: 'color',
        value: '#3B82F6'
      },
      {
        id: 'compactMode',
        category: 'Appearance',
        title: 'Compact Mode',
        description: 'Use compact layout to save space',
        type: 'toggle',
        value: false
      },
      {
        id: 'showAnimations',
        category: 'Appearance',
        title: 'Show Animations',
        description: 'Enable smooth animations and transitions',
        type: 'toggle',
        value: true
      },

      // Privacy Settings
      {
        id: 'dataCollection',
        category: 'Privacy',
        title: 'Data Collection',
        description: 'Allow collection of usage data to improve the service',
        type: 'toggle',
        value: false
      },
      {
        id: 'analytics',
        category: 'Privacy',
        title: 'Analytics',
        description: 'Enable analytics tracking',
        type: 'toggle',
        value: true
      },
      {
        id: 'cookies',
        category: 'Privacy',
        title: 'Accept Cookies',
        description: 'Allow cookies for enhanced functionality',
        type: 'toggle',
        value: true
      },
      {
        id: 'location',
        category: 'Privacy',
        title: 'Location Services',
        description: 'Allow access to your location for location-based features',
        type: 'toggle',
        value: false
      },

      // Security Settings
      {
        id: 'twoFactor',
        category: 'Security',
        title: 'Two-Factor Authentication',
        description: 'Enable two-factor authentication for enhanced security',
        type: 'toggle',
        value: false
      },
      {
        id: 'sessionTimeout',
        category: 'Security',
        title: 'Session Timeout',
        description: 'Automatically log out after inactivity',
        type: 'select',
        value: '30',
        options: [
          { value: '15', label: '15 minutes' },
          { value: '30', label: '30 minutes' },
          { value: '60', label: '1 hour' },
          { value: '120', label: '2 hours' },
          { value: '0', label: 'Never' }
        ]
      },
      {
        id: 'passwordStrength',
        category: 'Security',
        title: 'Password Strength',
        description: 'Require strong passwords',
        type: 'toggle',
        value: true
      },
      {
        id: 'loginNotifications',
        category: 'Security',
        title: 'Login Notifications',
        description: 'Get notified of new login attempts',
        type: 'toggle',
        value: true
      },

      // Advanced Settings
      {
        id: 'debugMode',
        category: 'Advanced',
        title: 'Debug Mode',
        description: 'Enable debug mode for development',
        type: 'toggle',
        value: false
      },
      {
        id: 'apiEndpoint',
        category: 'Advanced',
        title: 'API Endpoint',
        description: 'Custom API endpoint URL',
        type: 'input',
        value: 'https://api.example.com',
        placeholder: 'Enter API endpoint URL'
      },
      {
        id: 'cacheSize',
        category: 'Advanced',
        title: 'Cache Size',
        description: 'Maximum cache size in MB',
        type: 'slider',
        value: 100,
        min: 10,
        max: 1000,
        step: 10
      },
      {
        id: 'logLevel',
        category: 'Advanced',
        title: 'Log Level',
        description: 'Set the logging level',
        type: 'select',
        value: 'info',
        options: [
          { value: 'error', label: 'Error' },
          { value: 'warn', label: 'Warning' },
          { value: 'info', label: 'Info' },
          { value: 'debug', label: 'Debug' }
        ]
      }
    ];

    setSettings(initialSettings);
    setActiveCategory(initialSettings[0]?.category || '');
  }, []);

  const categories = [...new Set(settings.map(s => s.category))];

  const handleSettingChange = (id: string, value: any) => {
    setSettings(prev => {
      const updated = prev.map(setting => 
        setting.id === id ? { ...setting, value } : setting
      );
      setHasChanges(true);
      return updated;
    });

    if (onSettingsChange) {
      onSettingsChange(settings);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setHasChanges(false);
      
      if (onSave) {
        onSave(settings);
      }
      
      // Show success message
      if ((window as any).notifications) {
        (window as any).notifications.add({
          type: 'success',
          title: 'Settings Saved',
          message: 'Your settings have been saved successfully.'
        });
      }
    } catch (error) {
      // Show error message
      if ((window as any).notifications) {
        (window as any).notifications.add({
          type: 'error',
          title: 'Save Failed',
          message: 'Failed to save settings. Please try again.'
        });
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default values?')) {
      setSettings(prev => prev.map(setting => ({
        ...setting,
        value: getDefaultValue(setting)
      })));
      setHasChanges(false);
      
      if (onReset) {
        onReset();
      }
    }
  };

  const getDefaultValue = (setting: Setting): any => {
    switch (setting.type) {
      case 'toggle':
        return false;
      case 'select':
        return setting.options?.[0]?.value || '';
      case 'input':
      case 'textarea':
        return '';
      case 'slider':
        return setting.min || 0;
      case 'color':
        return '#000000';
      default:
        return null;
    }
  };

  const renderSetting = (setting: Setting) => {
    const commonClasses = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

    switch (setting.type) {
      case 'toggle':
        return (
          <label className="flex items-center">
            <input
              type="checkbox"
              id={`setting-${setting.id}`}
              checked={setting.value}
              onChange={(e) => handleSettingChange(setting.id, e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">
              {setting.value ? 'Enabled' : 'Disabled'}
            </span>
          </label>
        );

      case 'select':
        return (
          <select
            value={setting.value}
            onChange={(e) => handleSettingChange(setting.id, e.target.value)}
            className={commonClasses}
          >
            {setting.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'input':
        return (
          <input
            type="text"
            id={`setting-${setting.id}`}
            value={setting.value}
            onChange={(e) => handleSettingChange(setting.id, e.target.value)}
            placeholder={setting.placeholder}
            className={commonClasses}
            aria-label={setting.label}
          />
        );

      case 'textarea':
        return (
          <textarea
            value={setting.value}
            onChange={(e) => handleSettingChange(setting.id, e.target.value)}
            placeholder={setting.placeholder}
            rows={3}
            className={commonClasses}
          />
        );

      case 'slider':
        return (
          <div className="space-y-2">
            <input
              type="range"
              id={`setting-${setting.id}`}
              min={setting.min}
              max={setting.max}
              step={setting.step}
              value={setting.value}
              onChange={(e) => handleSettingChange(setting.id, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              aria-label={setting.label}
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>{setting.min}</span>
              <span className="font-medium">{setting.value}</span>
              <span>{setting.max}</span>
            </div>
          </div>
        );

      case 'color':
        return (
          <div className="flex items-center space-x-2">
            <input
              type="color"
              id={`setting-${setting.id}-color`}
              value={setting.value}
              onChange={(e) => handleSettingChange(setting.id, e.target.value)}
              className="h-10 w-20 border border-gray-300 rounded cursor-pointer"
              aria-label={`${setting.label} color picker`}
            />
            <input
              type="text"
              id={`setting-${setting.id}-text`}
              value={setting.value}
              onChange={(e) => handleSettingChange(setting.id, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`${setting.label} color value`}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const filteredSettings = settings.filter(s => s.category === activeCategory);

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div className="flex h-96">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 bg-gray-50">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900" id="settings">Settings</h2>
          </div>
          <nav className="space-y-1 px-4 pb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-label={`Select ${category} category`}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900" id="activecategory">{activeCategory}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={handleReset}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                 aria-label="Reset">
                  Reset
                </button>
                <button
                  onClick={handleSave}
                  disabled={!hasChanges || isSaving}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                 aria-label="{isSaving ? 'Saving...' : 'Save Changes'}">
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {filteredSettings.map(setting => (
                <div key={setting.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {setting.title}
                        {setting.required && <span className="text-red-500 ml-1">*</span>}
                      </h4>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                  </div>
                  <div className="max-w-md">
                    {renderSetting(setting)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};