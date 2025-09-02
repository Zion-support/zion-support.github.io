import React, { useState } from 'react';
import {
  Settings,
  Palette,
  Monitor,
  Bell,
  Shield,
  Database,
  Globe,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
  RotateCcw,
  Download,
  Upload,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../components/ui/NotificationSystem';
import { ModernLoader } from '../components/ui/ModernLoader';

interface SettingsSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const settingsSections: SettingsSection[] = [
  {
    id: 'appearance',
    title: 'Appearance',
    icon: <Palette className="w-5 h-5" />,
    description: 'Customize the look and feel of your application'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: <Bell className="w-5 h-5" />,
    description: 'Manage notification preferences and alerts'
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    icon: <Shield className="w-5 h-5" />,
    description: 'Control your privacy settings and security options'
  },
  {
    id: 'data',
    title: 'Data & Storage',
    icon: <Database className="w-5 h-5" />,
    description: 'Manage your data, storage, and backup settings'
  },
  {
    id: 'account',
    title: 'Account',
    icon: <User className="w-5 h-5" />,
    description: 'Update your account information and preferences'
  },
  {
    id: 'system',
    title: 'System',
    icon: <Monitor className="w-5 h-5" />,
    description: 'System settings and performance monitoring'
  }
];

export const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('appearance');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
      marketing: false
    },
    privacy: {
      analytics: true,
      cookies: true,
      location: false,
      dataSharing: false
    },
    data: {
      autoBackup: true,
      dataRetention: '1year',
      exportFormat: 'json'
    },
    account: {
      email: 'user@example.com',
      name: 'John Doe',
      timezone: 'UTC',
      language: 'en'
    }
  });

  const { theme, colorScheme, config } = useTheme();
  const { addNotification } = useNotifications();

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addNotification({
        type: 'success',
        title: 'Settings Saved',
        message: 'Your preferences have been updated successfully.'
      });
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Save Failed',
        message: 'There was an error saving your settings. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    addNotification({
      type: 'warning',
      title: 'Reset Settings',
      message: 'This will reset all settings to their default values.',
      action: {
        label: 'Confirm Reset',
        onClick: () => {
          addNotification({
            type: 'info',
            title: 'Settings Reset',
            message: 'All settings have been reset to default values.'
          });
        }
      }
    });
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'settings-backup.json';
    link.click();
    URL.revokeObjectURL(url);
    
    addNotification({
      type: 'success',
      title: 'Settings Exported',
      message: 'Your settings have been exported successfully.'
    });
  };

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Theme Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Theme & Color Scheme
            </label>
            <ThemeToggle showColorSchemes={true} />
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Preview</h4>
            <div className="space-y-2">
              <div 
                className="p-3 rounded border"
                style={{ 
                  backgroundColor: config.backgroundColor,
                  color: config.textColor,
                  borderColor: config.borderColor
                }}
              >
                <div className="text-sm font-medium">Sample Text</div>
                <div className="text-xs opacity-70">Secondary text with reduced opacity</div>
              </div>
              <div 
                className="p-3 rounded"
                style={{ 
                  backgroundColor: config.primaryColor,
                  color: 'white'
                }}
              >
                <div className="text-sm font-medium">Primary Button</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {Object.entries(settings.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {key === 'email' && 'Receive notifications via email'}
                  {key === 'push' && 'Receive push notifications in browser'}
                  {key === 'sms' && 'Receive SMS notifications'}
                  {key === 'marketing' && 'Receive marketing and promotional emails'}
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    notifications: {
                      ...prev.notifications,
                      [key]: e.target.checked
                    }
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Privacy & Security</h3>
        <div className="space-y-4">
          {Object.entries(settings.privacy).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {key === 'analytics' && 'Help improve our service by sharing anonymous usage data'}
                  {key === 'cookies' && 'Allow cookies for enhanced functionality'}
                  {key === 'location' && 'Allow location-based features'}
                  {key === 'dataSharing' && 'Share data with third-party partners'}
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    privacy: {
                      ...prev.privacy,
                      [key]: e.target.checked
                    }
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDataSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data & Storage</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Auto Backup
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.data.autoBackup}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  data: { ...prev.data, autoBackup: e.target.checked }
                }))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Data Retention
            </label>
            <select
              value={settings.data.dataRetention}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                data: { ...prev.data, dataRetention: e.target.value }
              }))}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="30days">30 Days</option>
              <option value="90days">90 Days</option>
              <option value="1year">1 Year</option>
              <option value="forever">Forever</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleExport}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export Data</span>
            </button>
            <button
              onClick={() => document.getElementById('import-file')?.click()}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Upload className="w-4 h-4" />
              <span>Import Data</span>
            </button>
            <input
              id="import-file"
              type="file"
              accept=".json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  addNotification({
                    type: 'info',
                    title: 'Import Started',
                    message: 'Processing imported settings...'
                  });
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={settings.account.name}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                account: { ...prev.account, name: e.target.value }
              }))}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={settings.account.email}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                account: { ...prev.account, email: e.target.value }
              }))}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Timezone
            </label>
            <select
              value={settings.account.timezone}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                account: { ...prev.account, timezone: e.target.value }
              }))}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="UTC">UTC</option>
              <option value="America/New_York">Eastern Time</option>
              <option value="America/Chicago">Central Time</option>
              <option value="America/Denver">Mountain Time</option>
              <option value="America/Los_Angeles">Pacific Time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Language
            </label>
            <select
              value={settings.account.language}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                account: { ...prev.account, language: e.target.value }
              }))}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Current Theme</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white capitalize">{theme}</div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Color Scheme</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white capitalize">{colorScheme}</div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Browser</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {navigator.userAgent.split(' ').pop()?.split('/')[0] || 'Unknown'}
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Screen Resolution</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {window.screen.width} × {window.screen.height}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'appearance':
        return renderAppearanceSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'privacy':
        return renderPrivacySettings();
      case 'data':
        return renderDataSettings();
      case 'account':
        return renderAccountSettings();
      case 'system':
        return renderSystemSettings();
      default:
        return renderAppearanceSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your application preferences and configuration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {settingsSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {section.icon}
                    <div>
                      <div className="font-medium">{section.title}</div>
                      <div className="text-xs opacity-75">{section.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                {renderSectionContent()}
              </div>
              
              {/* Action Buttons */}
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 rounded-b-lg">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleReset}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset to Defaults</span>
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    {isLoading && <ModernLoader size="sm" variant="dots" />}
                    <button
                      onClick={handleSave}
                      disabled={isLoading}
                      className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;