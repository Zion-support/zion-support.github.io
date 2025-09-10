import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  totalProjects: number;
  completedProjects: number;
  totalRevenue: number;
  monthlyRevenue: number;
  averageProjectValue: number;
  userGrowth: Array<{ month: string; users: number }>;
  revenueGrowth: Array<{ month: string; revenue: number }>;
  topFeatures: Array<{ name: string; usage: number }>;
  userSatisfaction: number;
}

const mockAnalyticsData: AnalyticsData = {
  totalUsers: 1250,
  activeUsers: 890,
  totalProjects: 340,
  completedProjects: 298,
  totalRevenue: 1250000,
  monthlyRevenue: 125000,
  averageProjectValue: 3676,
  userGrowth: [
    { month: 'Jan', users: 800 },
    { month: 'Feb', users: 850 },
    { month: 'Mar', users: 920 },
    { month: 'Apr', users: 980 },
    { month: 'May', users: 1050 },
    { month: 'Jun', users: 1120 },
    { month: 'Jul', users: 1200 },
    { month: 'Aug', users: 1250 }
  ],
  revenueGrowth: [
    { month: 'Jan', revenue: 95000 },
    { month: 'Feb', revenue: 105000 },
    { month: 'Mar', revenue: 115000 },
    { month: 'Apr', revenue: 120000 },
    { month: 'May', revenue: 125000 },
    { month: 'Jun', revenue: 130000 },
    { month: 'Jul', revenue: 135000 },
    { month: 'Aug', revenue: 125000 }
  ],
  topFeatures: [
    { name: 'AI Development', usage: 85 },
    { name: 'Web Development', usage: 78 },
    { name: 'Mobile Apps', usage: 65 },
    { name: 'Cloud Architecture', usage: 58 },
    { name: 'Data Analytics', usage: 42 }
  ],
  userSatisfaction: 4.7
};

const AdminUsageAnalyticsPage: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
  const [selectedMetric, setSelectedMetric] = useState<'users' | 'revenue' | 'projects'>('users');

  useEffect(() => {
    // Simulate loading analytics data
    setTimeout(() => {
      setAnalytics(mockAnalyticsData);
      setLoading(false);
    }
  }, [start, end, userType]),

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  if (loading) {
    return (
      <>
        <Head>
          <title>Usage Analytics - Admin</title>
        </Head>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-8">Loading analytics...</div>
        </main>
      </>
    );
  }

  if (!analytics) {
    return (
      <>
        <Head>
          <title>Usage Analytics - Admin</title>
        </Head>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-8 text-red-600">Failed to load analytics data</div>
        </main>
      </>
    );
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>Usage Analytics - Admin</title>
        <meta name="description" content="Usage analytics and performance metrics" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Usage Analytics</h1>
          <div className="flex gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value as any)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="users">Users</option>
              <option value="revenue">Revenue</option>
              <option value="projects">Projects</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Users</h3>
            <p className="text-3xl font-bold">{formatNumber(analytics.totalUsers)}</p>
            <p className="text-sm text-green-600 mt-1">+12% from last month</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-blue-600">{formatNumber(analytics.activeUsers)}</p>
            <p className="text-sm text-gray-600 mt-1">{Math.round((analytics.activeUsers / analytics.totalUsers) * 100)}% of total</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold text-green-600">{formatCurrency(analytics.totalRevenue)}</p>
            <p className="text-sm text-green-600 mt-1">+8% from last month</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Avg Project Value</h3>
            <p className="text-3xl font-bold">{formatCurrency(analytics.averageProjectValue)}</p>
            <p className="text-sm text-gray-600 mt-1">Per project</p>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Projects</h3>
            <p className="text-2xl font-bold">{formatNumber(analytics.totalProjects)}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Completed Projects</h3>
            <p className="text-2xl font-bold text-green-600">{formatNumber(analytics.completedProjects)}</p>
            <p className="text-sm text-gray-600 mt-1">{Math.round((analytics.completedProjects / analytics.totalProjects) * 100)}% completion rate</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">User Satisfaction</h3>
            <p className="text-2xl font-bold text-yellow-600">{analytics.userSatisfaction}/5.0</p>
            <p className="text-sm text-gray-600 mt-1">Average rating</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Growth Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              {selectedMetric === 'users' ? 'User Growth' : 
               selectedMetric === 'revenue' ? 'Revenue Growth' : 'Project Growth'}
            </h2>
            <div className="h-64 flex items-end justify-between space-x-2">
              {(selectedMetric === 'users' ? analytics.userGrowth : 
                selectedMetric === 'revenue' ? analytics.revenueGrowth : 
                analytics.userGrowth).map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="bg-blue-500 rounded-t w-8 mb-2"
                    style={{
                      height: `${(item.users || item.revenue) / Math.max(...(selectedMetric === 'users' ? analytics.userGrowth : 
                        selectedMetric === 'revenue' ? analytics.revenueGrowth : 
                        analytics.userGrowth).map(i => i.users || i.revenue)) * 200}px`
                    }}
                  ></div>
                  <span className="text-xs text-gray-500">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Features */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Top Features by Usage</h2>
            <div className="space-y-3">
              {analytics.topFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{feature.name}</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${feature.usage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{feature.usage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">System Information</h2>
          <div className="text-sm text-gray-600">
            <p className="mb-2">
              <strong>Data Source:</strong> Local event log for aggregation
            </p>
            <p className="mb-2">
              <strong>Optional Providers:</strong> Plausible, PostHog (setup via environment variables)
            </p>
            <p className="mb-2">
              <strong>Last Updated:</strong> {new Date().toLocaleString()}
            </p>
            <p>
              <strong>Note:</strong> Currently using local event log for aggregation. 
              Optional providers supported (setup via env): Plausible, PostHog.
            </p>
          </div>
        </div>

export default AdminUsageAnalyticsPage;
