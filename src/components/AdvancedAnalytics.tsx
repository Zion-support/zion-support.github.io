import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{
    path: string;
    views: number;
    title: string;
  }>;
  trafficSources: Array<{
    source: string;
    percentage: number;
    visitors: number;
  }>;
}

const AdvancedAnalytics: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockData: AnalyticsData = {
          pageViews: 125430,
          uniqueVisitors: 45620,
          bounceRate: 32.5,
          avgSessionDuration: 4.2,
          topPages: [
            { path: '/', views: 45230, title: 'Home' },
            { path: '/services', views: 32150, title: 'Services' },
            { path: '/about', views: 28940, title: 'About' },
            { path: '/contact', views: 15680, title: 'Contact' }
          ],
          trafficSources: [
            { source: 'Organic Search', percentage: 45.2, visitors: 20620 },
            { source: 'Direct', percentage: 28.7, visitors: 13093 },
            { source: 'Social Media', percentage: 15.3, visitors: 6980 },
            { source: 'Referral', percentage: 10.8, visitors: 4927 }
          ]
        };
        
        setData(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch analytics data:', error);
        setLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading analytics data...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600">Failed to load analytics data</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Advanced Analytics Dashboard</h2>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Page Views</h3>
          <p className="text-3xl font-bold">{data.pageViews.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Unique Visitors</h3>
          <p className="text-3xl font-bold">{data.uniqueVisitors.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Bounce Rate</h3>
          <p className="text-3xl font-bold">{data.bounceRate}%</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Avg Session</h3>
          <p className="text-3xl font-bold">{data.avgSessionDuration}m</p>
        </div>
      </div>

      {/* Top Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📄 Top Pages</h3>
          <div className="space-y-3">
            {data.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                <div>
                  <p className="font-medium text-gray-800">{page.title}</p>
                  <p className="text-sm text-gray-600">{page.path}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">{page.views.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">views</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🌐 Traffic Sources</h3>
          <div className="space-y-3">
            {data.trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                <div>
                  <p className="font-medium text-gray-800">{source.source}</p>
                  <p className="text-sm text-gray-600">{source.visitors.toLocaleString()} visitors</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{source.percentage}%</p>
                  <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;