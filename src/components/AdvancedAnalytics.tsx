import React, { useEffect, useState } from 'react';
import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';

interface AnalyticsConfig {
  enableConversionTracking?: boolean;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
  enableUserTracking?: boolean;
}

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
}

const AdvancedAnalytics: React.FC<AnalyticsConfig> = ({
  enableConversionTracking = true,
  enablePerformanceTracking = true,
  enableErrorTracking = true,
  enableUserTracking = true
}) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0
  });

  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Simulate analytics data collection
      setAnalyticsData({
        pageViews: Math.floor(Math.random() * 10000) + 1000,
        uniqueVisitors: Math.floor(Math.random() * 5000) + 500,
        bounceRate: Math.random() * 50 + 20,
        avgSessionDuration: Math.random() * 300 + 60,
        conversionRate: Math.random() * 10 + 2
      });
    };

    initAnalytics();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Advanced Analytics</h2>
        <BarChart3 className="w-8 h-8 text-blue-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-blue-900">Page Views</h3>
            <Eye className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-900">
            {analyticsData.pageViews.toLocaleString()}
          </div>
          <div className="text-sm text-blue-600">
            <TrendingUp className="w-4 h-4 inline mr-1" />
            +12.5%
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-green-900">Unique Visitors</h3>
            <Users className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-900">
            {analyticsData.uniqueVisitors.toLocaleString()}
          </div>
          <div className="text-sm text-green-600">
            <TrendingUp className="w-4 h-4 inline mr-1" />
            +8.3%
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-yellow-900">Bounce Rate</h3>
            <BarChart3 className="w-5 h-5 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-yellow-900">
            {analyticsData.bounceRate.toFixed(1)}%
          </div>
          <div className="text-sm text-yellow-600">
            <TrendingUp className="w-4 h-4 inline mr-1" />
            -2.1%
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-purple-900">Avg. Session</h3>
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-900">
            {Math.floor(analyticsData.avgSessionDuration / 60)}m {Math.floor(analyticsData.avgSessionDuration % 60)}s
          </div>
          <div className="text-sm text-purple-600">
            <TrendingUp className="w-4 h-4 inline mr-1" />
            +15.2%
          </div>
        </div>
      </div>

      {enableConversionTracking && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversion Rate</h3>
          <div className="text-3xl font-bold text-gray-900">
            {analyticsData.conversionRate.toFixed(2)}%
          </div>
          <div className="text-sm text-gray-600">
            Based on {analyticsData.pageViews.toLocaleString()} page views
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedAnalytics;