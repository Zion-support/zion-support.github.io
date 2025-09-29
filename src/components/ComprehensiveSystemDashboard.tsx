import React, { useState, useEffect, useCallback } from "react";

interface ComprehensiveSystemDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const ComprehensiveSystemDashboard: React.FC<ComprehensiveSystemDashboardProps> = ({ isVisible, onClose }) => {
  const [systemMetrics, setSystemMetrics] = useState({
    performance: 0,
    security: 0,
    reliability: 0,
    userExperience: 0,
  });

  const [preferences, setPreferences] = useState({
    autoOptimize: true,
    notifications: true,
    darkMode: false,
  });

  useEffect(() => {
    if (isVisible) {
      const analyzeSystem = () => {
        // Mock system analysis
        setSystemMetrics({
          performance: Math.floor(Math.random() * 20) + 80,
          security: Math.floor(Math.random() * 15) + 85,
          reliability: Math.floor(Math.random() * 10) + 90,
          userExperience: Math.floor(Math.random() * 25) + 75,
        });
      };

      analyzeSystem();
      const interval = setInterval(analyzeSystem, 10000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handlePreferenceChange = useCallback((key: string, value: unknown) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-100";
    if (score >= 80) return "bg-yellow-100";
    return "bg-red-100";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Comprehensive System Dashboard
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {Object.entries(systemMetrics).map(([key, value]) => (
            <div key={key} className={`p-4 rounded-lg ${getScoreBg(value)}`}>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <p className={`text-2xl font-bold ${getScoreColor(value)}`}>
                {value}%
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Preferences</h3>
          <div className="space-y-2">
            {Object.entries(preferences).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={value as boolean}
                  onChange={(e) => handlePreferenceChange(key, e.target.checked)}
                  className="rounded"
                />
                <span className="text-gray-700 dark:text-gray-300 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};