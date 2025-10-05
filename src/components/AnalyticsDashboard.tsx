import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversions: number;
  topPages: Array<{
    page: string;
    views: number;
  }>;
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversions: 0,
    topPages: []
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setData({
        pageViews: 12543,
        uniqueVisitors: 8921,
        bounceRate: 32.5,
        avgSessionDuration: 245,
        conversions: 156,
        topPages: [
          { page: '/', views: 3245 },
          { page: '/services', views: 2156 },
          { page: '/about', views: 1890 },
          { page: '/contact', views: 1234 },
          { page: '/blog', views: 987 }
        ]
      });
      
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Analytics Dashboard
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-600 dark:text-blue-400">Page Views</h3>
          <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">{data.pageViews.toLocaleString()}</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <h3 className="text-sm font-medium text-green-600 dark:text-green-400">Unique Visitors</h3>
          <p className="text-3xl font-bold text-green-900 dark:text-green-100">{data.uniqueVisitors.toLocaleString()}</p>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
          <h3 className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Bounce Rate</h3>
          <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">{data.bounceRate}%</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
          <h3 className="text-sm font-medium text-purple-600 dark:text-purple-400">Avg Session</h3>
          <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">{data.avgSessionDuration}s</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Pages</h3>
          <div className="space-y-2">
            {data.topPages.map((page, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-900 dark:text-white">{page.page}</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conversions</h3>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-green-600 dark:text-green-400">{data.conversions}</p>
            <p className="text-green-800 dark:text-green-200 mt-2">Total Conversions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

=======
const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      <p>Analytics data will be displayed here.</p>
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
export default AnalyticsDashboard;