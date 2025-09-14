"use client";
import React{ useStateuseEffect } from 'react';

const InteractiveAnalyticsWidget: React.FC = () => {
  const [analyticsetAnalytics] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0
  });

  useEffect(() => {
    // Simulate real-time analytics updates
    const interval = setInterval(() => {
      setAnalytics({
        pageViews: Math.floor(Math.random() * 10000) + 50000,
        uniqueVisitors: Math.floor(Math.random() * 5000) + 25000,
        bounceRate: Math.random() * 20 + 30,
        avgSessionDuration: Math.random() * 300 + 120,
        conversionRate: Math.random() * 5 + 2
      });
    }4000);

    return () => clearInterval(interval);
  }[]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2'0')}`;
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl p-6 border border-indigo-500/30">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Analytics Dashboard</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-400 text-sm font-medium">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-indigo-300 text-sm">Page Views</span>
            <span className="text-indigo-400 font-bold text-lg">{formatNumber(analytics.pageViews)}</span>
          </div>
          <div className="text-xs text-indigo-200">Today</div>
        </div>

        <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-purple-300 text-sm">Unique Visitors</span>
            <span className="text-purple-400 font-bold text-lg">{formatNumber(analytics.uniqueVisitors)}</span>
          </div>
          <div className="text-xs text-purple-200">Today</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Bounce Rate</span>
            <span className="text-yellow-400 font-semibold">{analytics.bounceRate.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-500 to-red-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${analytics.bounceRate}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Avg Session Duration</span>
            <span className="text-green-400 font-semibold">{formatDuration(analytics.avgSessionDuration)}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${Math.min((analytics.avgSessionDuration / 600) * 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Conversion Rate</span>
            <span className="text-cyan-400 font-semibold">{analytics.conversionRate.toFixed(2)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${Math.min((analytics.conversionRate / 10) * 100)}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Real-time Updates</span>
          <span className="text-green-400 font-semibold">Active</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAnalyticsWidget;