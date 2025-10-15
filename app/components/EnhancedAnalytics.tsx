import React, { useEffect, useState } from 'react';
import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';

interface EnhancedAnalyticsProps {
  children: React.ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [analytics, setAnalytics] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0
  });

  useEffect(() => {
    // Check if analytics is enabled
    const saved = localStorage.getItem('enhanced-analytics-enabled');
    if (saved === 'true') {
      setIsEnabled(true);
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    // Initialize analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Simulate analytics data (in real app, this would come from your analytics service)
    setAnalytics({
      pageViews: Math.floor(Math.random() * 1000) + 500,
      uniqueVisitors: Math.floor(Math.random() * 500) + 200,
      bounceRate: Math.random() * 50 + 20,
      avgSessionDuration: Math.random() * 300 + 120
    });
  };

  const toggleAnalytics = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('enhanced-analytics-enabled', newState.toString());
    
    if (newState) {
      initializeAnalytics();
    }
  };

  return (
    <>
      {children}
      
      {/* Analytics Toggle Button */}
      <button
        onClick={toggleAnalytics}
        className="fixed top-4 left-4 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        aria-label="Toggle enhanced analytics"
      >
        <BarChart3 className="w-6 h-6" />
      </button>

      {/* Analytics Panel */}
      {isEnabled && (
        <div className="fixed top-20 left-4 z-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Enhanced Analytics
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Page Views</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {analytics.pageViews.toLocaleString()}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Unique Visitors</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {analytics.uniqueVisitors.toLocaleString()}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Bounce Rate</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {analytics.bounceRate.toFixed(1)}%
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Avg Session</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {Math.floor(analytics.avgSessionDuration / 60)}m {analytics.avgSessionDuration % 60}s
              </span>
            </div>
          </div>
          
          <button
            onClick={toggleAnalytics}
            className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default EnhancedAnalytics;
