import React, { useState, useEffect } from 'react';
import errorHandler from '../utils/errorHandler';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  topPages: Array<{ path: string; views: number }>;
  errors: {
    total: number;
    recent: number;
    byType: Record<string, number>;
  };
  performance: {
    averageLoadTime: number;
    coreWebVitals: {
      lcp: number;
      fid: number;
      cls: number;
    };
  };
  userEngagement: {
    timeOnSite: number;
    pagesPerSession: number;
    conversionRate: number;
  };
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    loadAnalyticsData();
    const interval = setInterval(loadAnalyticsData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [timeRange]);

  const loadAnalyticsData = async () => {
    try {
      // Simulate API call - replace with actual analytics API
      const mockData: AnalyticsData = {
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        uniqueVisitors: Math.floor(Math.random() * 3000) + 1500,
        bounceRate: Math.random() * 30 + 20,
        averageSessionDuration: Math.random() * 300 + 120,
        topPages: [
          { path: '/pages/AIRevolutionaryBreakthrough2026', views: Math.floor(Math.random() * 1000) + 500 },
          { path: '/pages/FutureTechInnovations2026', views: Math.floor(Math.random() * 800) + 400 },
          { path: '/pages/BusinessAutomationGuide2025', views: Math.floor(Math.random() * 600) + 300 },
          { path: '/', views: Math.floor(Math.random() * 2000) + 1000 }
        ],
        errors: errorHandler.getErrorStatistics(),
        performance: {
          averageLoadTime: Math.random() * 1000 + 500,
          coreWebVitals: {
            lcp: Math.random() * 1000 + 1000,
            fid: Math.random() * 50 + 10,
            cls: Math.random() * 0.1
          }
        },
        userEngagement: {
          timeOnSite: Math.random() * 600 + 120,
          pagesPerSession: Math.random() * 3 + 2,
          conversionRate: Math.random() * 5 + 1
        }
      };

      setData(mockData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load analytics data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Failed to load analytics data</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <div className="flex space-x-2">
          {['1d', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Page Views</p>
              <p className="text-2xl font-bold text-blue-900">{data.pageViews.toLocaleString()}</p>
            </div>
            <div className="text-blue-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Unique Visitors</p>
              <p className="text-2xl font-bold text-green-900">{data.uniqueVisitors.toLocaleString()}</p>
            </div>
            <div className="text-green-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-600 text-sm font-medium">Bounce Rate</p>
              <p className="text-2xl font-bold text-yellow-900">{data.bounceRate.toFixed(1)}%</p>
            </div>
            <div className="text-yellow-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-medium">Session Duration</p>
              <p className="text-2xl font-bold text-purple-900">{Math.floor(data.averageSessionDuration / 60)}m</p>
            </div>
            <div className="text-purple-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Largest Contentful Paint</span>
              <span className={`font-semibold ${data.performance.coreWebVitals.lcp < 2500 ? 'text-green-600' : 'text-red-600'}`}>
                {data.performance.coreWebVitals.lcp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">First Input Delay</span>
              <span className={`font-semibold ${data.performance.coreWebVitals.fid < 100 ? 'text-green-600' : 'text-red-600'}`}>
                {data.performance.coreWebVitals.fid.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cumulative Layout Shift</span>
              <span className={`font-semibold ${data.performance.coreWebVitals.cls < 0.1 ? 'text-green-600' : 'text-red-600'}`}>
                {data.performance.coreWebVitals.cls.toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Error Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Errors</span>
              <span className="font-semibold text-red-600">{data.errors.total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Recent Errors (1h)</span>
              <span className="font-semibold text-orange-600">{data.errors.recent}</span>
            </div>
            <div className="space-y-2">
              {Object.entries(data.errors.byType).slice(0, 3).map(([type, count]) => (
                <div key={type} className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">{type}</span>
                  <span className="font-semibold text-sm">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
        <div className="space-y-3">
          {data.topPages.map((page, index) => (
            <div key={page.path} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                  #{index + 1}
                </span>
                <span className="text-gray-700">{page.path}</span>
              </div>
              <span className="font-semibold text-gray-900">{page.views.toLocaleString()} views</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Engagement */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-indigo-50 p-4 rounded-lg text-center">
          <div className="text-indigo-600 text-sm font-medium">Time on Site</div>
          <div className="text-2xl font-bold text-indigo-900">{Math.floor(data.userEngagement.timeOnSite / 60)}m</div>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg text-center">
          <div className="text-pink-600 text-sm font-medium">Pages per Session</div>
          <div className="text-2xl font-bold text-pink-900">{data.userEngagement.pagesPerSession.toFixed(1)}</div>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg text-center">
          <div className="text-teal-600 text-sm font-medium">Conversion Rate</div>
          <div className="text-2xl font-bold text-teal-900">{data.userEngagement.conversionRate.toFixed(1)}%</div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;