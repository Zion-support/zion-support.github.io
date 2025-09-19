import React, { useState, useEffect } from 'react';
import { enhancedAnalytics } from '../utils/enhancedAnalytics';

interface AnalyticsData {
  sessionDuration: number;
  eventCount: number;
  pageViewCount: number;
  lastActivity: string;
}

const AnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    sessionDuration: 0,
    eventCount: 0,
    pageViewCount: 0,
    lastActivity: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const updateAnalytics = () => {
      const sessionData = enhancedAnalytics.getSessionData();
      setAnalyticsData({
        sessionDuration: enhancedAnalytics.getSessionDuration(),
        eventCount: enhancedAnalytics.getEventCount(),
        pageViewCount: enhancedAnalytics.getPageViewCount(),
        lastActivity: new Date(sessionData.lastActivity).toLocaleTimeString()
      });
    };

    // Update every 5 seconds
    const interval = setInterval(updateAnalytics, 5000);
    updateAnalytics(); // Initial update

    return () => clearInterval(interval);
  }, []);

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const formatDuration = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
        title="Toggle Analytics Dashboard"
      >
        📊</button>
      </button>
      {/* Analytics Dashboard */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-xl z-50 min-w-64 border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-cyan-400">Analytics Dashboard</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ×</button>
            </button>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Session Duration:</span>
              <span className="text-green-400 font-mono">{formatDuration(analyticsData.sessionDuration)}</span>
            <div className="flex justify-between">
              <span className="text-gray-300">Page Views:</span>
              <span className="text-blue-400 font-mono">{analyticsData.pageViewCount}</span>
            <div className="flex justify-between">
              <span className="text-gray-300">Events:</span>
              <span className="text-purple-400 font-mono">{analyticsData.eventCount}</span>
            <div className="flex justify-between">
              <span className="text-gray-300">Last Activity:</span>
              <span className="text-yellow-400 font-mono">{analyticsData.lastActivity}</span>
          <div className="mt-3 pt-3 border-t border-gray-700">
            <button
              onClick={() => {
                const sessionData = enhancedAnalytics.exportSessionData();
                // console.log('Session Data:', sessionData);
                if (typeof window !== 'undefined' && window.navigator?.clipboard) {
                  window.navigator.clipboard.writeText(sessionData);
                }
              }}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white py-1 px-2 rounded text-xs transition-colors duration-200"
            >
              Export Session Data</button>
            </button>
      )}
    </>
  );
};

export default AnalyticsDashboard;