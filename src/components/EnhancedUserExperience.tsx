import React, { useState, useEffect, useCallback } from 'react';

interface EnhancedUserExperienceProps {
  isVisible: boolean;
  onClose: () => void;
}

const EnhancedUserExperience: React.FC<EnhancedUserExperienceProps> = ({ isVisible, onClose }) => {
  const [userPreferences, setUserPreferences] = useState({
    theme: 'auto',
    animations: true,
    notifications: true,
    analytics: true,
    accessibility: true,
    performance: 'balanced' as 'performance' | 'balanced' | 'quality'
  });

  const [systemStats, setSystemStats] = useState({
    performanceScore: 0,
    accessibilityScore: 0,
    seoScore: 0,
    securityScore: 0
  });

  useEffect(() => {
    if (isVisible) {
      // Simulate system analysis
      const analyzeSystem = () => {
        setSystemStats({
          performanceScore: Math.floor(Math.random() * 20) + 80,
          accessibilityScore: Math.floor(Math.random() * 15) + 85,
          seoScore: Math.floor(Math.random() * 10) + 90,
          securityScore: Math.floor(Math.random() * 5) + 95
        });
      };

      analyzeSystem();
      const interval = setInterval(analyzeSystem, 10000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handlePreferenceChange = useCallback((key: string, value: any) => {
    setUserPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 80) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🎨 Enhanced User Experience</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close dashboard"
          >
            ×
          </button>
        </div>

        {/* System Performance Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className={`p-4 rounded-lg ${getScoreBg(systemStats.performanceScore)}`}>
            <h3 className="text-sm font-medium text-gray-700">Performance</h3>
            <p className={`text-2xl font-bold ${getScoreColor(systemStats.performanceScore)}`}>
              {systemStats.performanceScore}/100
            </p>
          </div>
          <div className={`p-4 rounded-lg ${getScoreBg(systemStats.accessibilityScore)}`}>
            <h3 className="text-sm font-medium text-gray-700">Accessibility</h3>
            <p className={`text-2xl font-bold ${getScoreColor(systemStats.accessibilityScore)}`}>
              {systemStats.accessibilityScore}/100
            </p>
          </div>
          <div className={`p-4 rounded-lg ${getScoreBg(systemStats.seoScore)}`}>
            <h3 className="text-sm font-medium text-gray-700">SEO</h3>
            <p className={`text-2xl font-bold ${getScoreColor(systemStats.seoScore)}`}>
              {systemStats.seoScore}/100
            </p>
          </div>
          <div className={`p-4 rounded-lg ${getScoreBg(systemStats.securityScore)}`}>
            <h3 className="text-sm font-medium text-gray-700">Security</h3>
            <p className={`text-2xl font-bold ${getScoreColor(systemStats.securityScore)}`}>
              {systemStats.securityScore}/100
            </p>
          </div>
        </div>

        {/* User Preferences */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">⚙️ User Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <select
                value={userPreferences.theme}
                onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="auto">Auto</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Performance Mode</label>
              <select
                value={userPreferences.performance}
                onChange={(e) => handlePreferenceChange('performance', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="performance">Performance</option>
                <option value="balanced">Balanced</option>
                <option value="quality">Quality</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={userPreferences.animations}
                onChange={(e) => handlePreferenceChange('animations', e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Enable Animations</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={userPreferences.notifications}
                onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Enable Notifications</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={userPreferences.accessibility}
                onChange={(e) => handlePreferenceChange('accessibility', e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Accessibility Features</span>
            </label>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">🚀 Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
              Optimize Performance
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
              Clear Cache
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors">
              Export Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedUserExperience;