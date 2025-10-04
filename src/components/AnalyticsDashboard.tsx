import React, { useState, useEffect } from 'react';

interface DashboardData {
  totalUsers: number;
  activeUsers: number;
  pageViews: number;
  conversionRate: number;
  revenue: number;
  topPages: Array<{
    page: string;
    views: number;
    bounceRate: number;
  }>;
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockData: DashboardData = {
          totalUsers: 125430,
          activeUsers: 45620,
          pageViews: 892340,
          conversionRate: 3.2,
          revenue: 125000,
          topPages: [
            { page: '/', views: 45230, bounceRate: 28.5 },
            { page: '/services', views: 32150, bounceRate: 35.2 },
            { page: '/about', views: 28940, bounceRate: 42.1 },
            { page: '/contact', views: 15680, bounceRate: 38.7 }
          ]
        };
        
        setData(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading dashboard data...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600">Failed to load dashboard data</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Analytics Dashboard</h2>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Total Users</h3>
          <p className="text-3xl font-bold">{data.totalUsers.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Active Users</h3>
          <p className="text-3xl font-bold">{data.activeUsers.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Page Views</h3>
          <p className="text-3xl font-bold">{data.pageViews.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Conversion Rate</h3>
          <p className="text-3xl font-bold">{data.conversionRate}%</p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium opacity-90">Revenue</h3>
          <p className="text-3xl font-bold">${data.revenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">📄 Top Pages</h3>
        <div className="space-y-3">
          {data.topPages.map((page, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded border">
              <div>
                <p className="font-medium text-gray-800">{page.page}</p>
                <p className="text-sm text-gray-600">Bounce Rate: {page.bounceRate}%</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{page.views.toLocaleString()}</p>
                <p className="text-xs text-gray-500">views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;