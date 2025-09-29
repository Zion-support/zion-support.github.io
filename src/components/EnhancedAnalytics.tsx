import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number; color: string }>;
  performanceMetrics: Array<{ metric: string; value: number; target: number }>;
}

const EnhancedAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call for analytics data
    const fetchAnalyticsData = async () => {
      try {
        // Mock data - replace with actual API call
        const mockData: AnalyticsData = {
          pageViews: 125430,
          uniqueVisitors: 89420,
          bounceRate: 32.5,
          avgSessionDuration: 4.2,
          conversionRate: 8.7,
          topPages: [
            { page: '/', views: 45230 },
            { page: '/services', views: 32150 },
            { page: '/about', views: 18940 },
            { page: '/contact', views: 15680 },
            { page: '/portfolio', views: 13430 }
          ],
          trafficSources: [
            { source: 'Organic Search', percentage: 45, color: '#3B82F6' },
            { source: 'Direct', percentage: 25, color: '#10B981' },
            { source: 'Social Media', percentage: 15, color: '#F59E0B' },
            { source: 'Referral', percentage: 10, color: '#EF4444' },
            { source: 'Email', percentage: 5, color: '#8B5CF6' }
          ],
          performanceMetrics: [
            { metric: 'LCP', value: 1.2, target: 2.5 },
            { metric: 'FID', value: 85, target: 100 },
            { metric: 'CLS', value: 0.08, target: 0.1 },
            { metric: 'TTFB', value: 180, target: 200 }
          ]
        };

        setTimeout(() => {
          setAnalyticsData(mockData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
        setLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan"></div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="text-center text-zion-slate-light">
        <p>Unable to load analytics data</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <div className="card text-center">
          <div className="text-2xl font-bold text-zion-cyan mb-2">
            {analyticsData.pageViews.toLocaleString()}
          </div>
          <div className="text-sm text-zion-slate-light">Page Views</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-zion-blue-light mb-2">
            {analyticsData.uniqueVisitors.toLocaleString()}
          </div>
          <div className="text-sm text-zion-slate-light">Unique Visitors</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-zion-purple-light mb-2">
            {analyticsData.bounceRate}%
          </div>
          <div className="text-sm text-zion-slate-light">Bounce Rate</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-zion-cyan mb-2">
            {analyticsData.avgSessionDuration}m
          </div>
          <div className="text-sm text-zion-slate-light">Avg Session</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-zion-blue-light mb-2">
            {analyticsData.conversionRate}%
          </div>
          <div className="text-sm text-zion-slate-light">Conversion Rate</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Top Pages */}
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-6">Top Pages</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.topPages}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="page" 
                stroke="#9CA3AF"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Bar dataKey="views" fill="#06B6D4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources */}
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-6">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={analyticsData.trafficSources}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ source, percentage }) => `${source}: ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="percentage"
              >
                {analyticsData.trafficSources.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="card">
        <h3 className="text-xl font-semibold text-white mb-6">Performance Metrics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={analyticsData.performanceMetrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="metric" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis stroke="#9CA3AF" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#06B6D4" 
              strokeWidth={3}
              dot={{ fill: '#06B6D4', strokeWidth: 2, r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              stroke="#EF4444" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;