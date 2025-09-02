import React, { useState, useEffect } from 'react';
import {
  Eye, MousePointer, 
  Clock, TrendingUp, 
  Globe, Smartphone,
  Monitor, Tablet,
  Download, Share2,
  Heart, MessageCircle
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
  userEngagement: {
    scrollDepth: number;
    clickThroughRate: number;
    timeOnPage: number;
    socialShares: number;
  };
  realTimeUsers: number;
  conversionRate: number;
}

interface EnhancedAnalyticsProps {
  showRealTime?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  showRealTime = true,
  autoRefresh = true,
  refreshInterval = 30000
}) => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Mock data for demonstration
  const mockAnalytics: AnalyticsData = {
    pageViews: 125430,
    uniqueVisitors: 89420,
    bounceRate: 32.5,
    avgSessionDuration: 4.2,
    topPages: [
      { page: '/services', views: 15420 },
      { page: '/about', views: 12300 },
      { page: '/contact', views: 9800 },
      { page: '/pricing', views: 7600 }
    ],
    trafficSources: [
      { source: 'Organic Search', percentage: 45.2 },
      { source: 'Direct', percentage: 28.7 },
      { source: 'Social Media', percentage: 15.3 },
      { source: 'Referral', percentage: 10.8 }
    ],
    deviceTypes: [
      { device: 'Desktop', percentage: 52.3 },
      { device: 'Mobile', percentage: 38.7 },
      { device: 'Tablet', percentage: 9.0 }
    ],
    userEngagement: {
      scrollDepth: 68.5,
      clickThroughRate: 12.3,
      timeOnPage: 3.8,
      socialShares: 245
    },
    realTimeUsers: 127,
    conversionRate: 8.7
  };

  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnalytics(mockAnalytics);
      setLastUpdated(new Date());
      setLoading(false);
    };

    fetchAnalytics();

    if (autoRefresh) {
      const interval = setInterval(fetchAnalytics, refreshInterval);
      return () => clearInterval(interval);
    }
    
    return () => {}; // Return empty cleanup function
  }, [autoRefresh, refreshInterval]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="text-center text-gray-500">
        No analytics data available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Real-time Users */}
      {showRealTime && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Real-time Users</h3>
              <p className="text-blue-100">Currently active on the site</p>
            </div>
            <div className="text-4xl font-bold">{analytics.realTimeUsers}</div>
          </div>
        </div>
      )}

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Page Views</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.pageViews.toLocaleString()}
              </p>
            </div>
            <Eye className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Unique Visitors</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.uniqueVisitors.toLocaleString()}
              </p>
            </div>
            <MousePointer className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Bounce Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.bounceRate}%
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Session</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.avgSessionDuration}m
              </p>
            </div>
            <Clock className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Pages</h3>
        <div className="space-y-3">
          {analytics.topPages.map((page, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">{page.page}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {page.views.toLocaleString()} views
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h3>
        <div className="space-y-3">
          {analytics.trafficSources.map((source, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">{source.source}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {source.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Device Types */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Device Types</h3>
        <div className="space-y-3">
          {analytics.deviceTypes.map((device, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                {device.device === 'Desktop' && <Monitor className="h-5 w-5 text-blue-600 mr-2" />}
                {device.device === 'Mobile' && <Smartphone className="h-5 w-5 text-green-600 mr-2" />}
                {device.device === 'Tablet' && <Tablet className="h-5 w-5 text-purple-600 mr-2" />}
                <span className="text-gray-700 dark:text-gray-300">{device.device}</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                {device.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* User Engagement */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Engagement</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Scroll Depth</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {analytics.userEngagement.scrollDepth}%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Click Through Rate</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {analytics.userEngagement.clickThroughRate}%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Time on Page</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {analytics.userEngagement.timeOnPage}m
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Social Shares</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {analytics.userEngagement.socialShares}
            </span>
          </div>
        </div>
      </div>

      {/* Conversion Rate */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Conversion Rate</h3>
            <p className="text-green-100">Percentage of visitors who complete desired actions</p>
          </div>
          <div className="text-4xl font-bold">{analytics.conversionRate.toFixed(1)}%</div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Last updated: {lastUpdated.toLocaleString()}
      </div>
    </div>
  );
};

export default EnhancedAnalytics;