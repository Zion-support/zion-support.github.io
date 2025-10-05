import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{
    path: string;
    views: number;
  }>;
  trafficSources: Array<{
    source: string;
    percentage: number;
  }>;
}

interface AnalyticsDashboardProps {
  className?: string;
  refreshInterval?: number;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  className = '',
  refreshInterval = 30000
}) => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API call with mock data
        const mockData: AnalyticsData = {
          pageViews: Math.floor(Math.random() * 10000) + 5000,
          uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
          bounceRate: Math.random() * 30 + 20,
          avgSessionDuration: Math.random() * 300 + 120,
          topPages: [
            { path: '/', views: Math.floor(Math.random() * 2000) + 1000 },
            { path: '/services', views: Math.floor(Math.random() * 1500) + 800 },
            { path: '/about', views: Math.floor(Math.random() * 1000) + 500 },
            { path: '/contact', views: Math.floor(Math.random() * 800) + 300 },
            { path: '/blog', views: Math.floor(Math.random() * 600) + 200 }
          ],
          trafficSources: [
            { source: 'Direct', percentage: Math.random() * 30 + 40 },
            { source: 'Google', percentage: Math.random() * 25 + 25 },
            { source: 'Social Media', percentage: Math.random() * 15 + 10 },
            { source: 'Referral', percentage: Math.random() * 10 + 5 },
            { source: 'Email', percentage: Math.random() * 10 + 5 }
          ]
        };

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        setData(mockData);
      } catch (err) {
        setError('Failed to load analytics data');
        console.error('Analytics fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyticsData();

    // Set up auto-refresh
    const interval = setInterval(fetchAnalyticsData, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="text-center text-red-600">
          <div className="text-4xl mb-2">⚠️</div>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Analytics Dashboard</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">
            {formatNumber(data.pageViews)}
          </div>
          <div className="text-sm text-gray-600">Page Views</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {formatNumber(data.uniqueVisitors)}
          </div>
          <div className="text-sm text-gray-600">Unique Visitors</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">
            {data.bounceRate.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-600">Bounce Rate</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">
            {formatDuration(data.avgSessionDuration)}
          </div>
          <div className="text-sm text-gray-600">Avg. Session</div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Pages</h3>
        <div className="space-y-2">
          {data.topPages.map((page, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">{page.path}</span>
              <span className="text-blue-600 font-semibold">
                {formatNumber(page.views)} views
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Traffic Sources */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic Sources</h3>
        <div className="space-y-3">
          {data.trafficSources.map((source, index) => (
            <div key={index} className="flex items-center">
              <div className="w-24 text-sm font-medium text-gray-700">
                {source.source}
              </div>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-16 text-sm text-gray-600 text-right">
                {source.percentage.toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;