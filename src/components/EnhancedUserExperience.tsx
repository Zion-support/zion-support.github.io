import React from 'react';
import { Settings, User, Bell, Palette } from 'lucide-react';

interface EnhancedUserExperienceProps {
  className?: string;
}

export const EnhancedUserExperience: React.FC<EnhancedUserExperienceProps> = ({
  className = ''
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [theme, setTheme] = React.useState('light');
  const [notifications, setNotifications] = React.useState(true);

  const toggleSettings = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  const handleNotificationToggle = () => {
    setNotifications(!notifications);
  };

  if (isOpen) {
    return (
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center ${className}`}>
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <h2 className="text-xl font-bold mb-4">User Experience Settings</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <select
                value={theme}
                onChange={(e) => handleThemeChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Notifications</label>
              <button
                onClick={handleNotificationToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <button
              onClick={toggleSettings}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={toggleSettings}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleSettings}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Open user experience settings"
      >
        <Settings className="w-6 h-6" />
      </button>
    </div>
  );
};

export default EnhancedUserExperience;