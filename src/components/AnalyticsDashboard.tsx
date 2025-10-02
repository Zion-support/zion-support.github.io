import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

interface AnalyticsData {
visitors: {,,
total: number,
unique: number,
returning: number,
new: number;
};
  pageViews: {,
total: number;
average: number;
topPages: Array<{ page: string; views: number; bounceRate: number
}>;
  };
  traffic: {,
    sources: Array<{ source: string; visitors: number; percentage: number }>;
    countries: Array<{ country: string; visitors: number; percentage: number }>;
    devices: Array<{ device: string; visitors: number; percentage: number }>;
  };
  performance: {,
averageLoadTime: number;
bounceRate: number;
conversionRate: number;
engagementScore: number;
};
  trends: {,
    daily: Array<{ date: string; visitors: number; pageViews: number }>;
    weekly: Array<{ week: string; visitors: number; pageViews: number }>;
  };
  realTime: {,
activeUsers: number;
currentPages: Array<{ page: string; users: number
}>;
    referrers: Array<{ source: string; users: number }>;
  };
}

const AnalyticsDashboard: React.FC = () => {,
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | '90d'>('7d');
  const [isLoading, setIsLoading] = useState(false);

  const generateMockData = (range: string): AnalyticsData => {,
    const baseMultiplier = range === '24h' ? 1 : range === '7d' ? 7 : range === '30d' ? 30 : 90;
    return {
      visitors: {,
        total: Math.floor(Math.random() * 10000 * baseMultiplier) + 5000 * baseMultiplier,
        unique: Math.floor(Math.random() * 8000 * baseMultiplier) + 4000 * baseMultiplier,
        returning: Math.floor(Math.random() * 3000 * baseMultiplier) + 1500 * baseMultiplier,
        new: Math.floor(Math.random() * 7000 * baseMultiplier) + 3500 * baseMultiplier
      }
      pageViews: {,
        total: Math.floor(Math.random() * 50000 * baseMultiplier) + 25000 * baseMultiplier,
        average: Math.floor(Math.random() * 5) + 3,
        topPages: [,
          { page: '/', views: Math.floor(Math.random() * 5000) + 3000, bounceRate: Math.random() * 0.4 + 0.2 }
          { page: '/services', views: Math.floor(Math.random() * 3000) + 1500, bounceRate: Math.random() * 0.3 + 0.3 }
          { page: '/about', views: Math.floor(Math.random() * 2000) + 1000, bounceRate: Math.random() * 0.2 + 0.2 }
          { page: '/contact', views: Math.floor(Math.random() * 1500) + 800, bounceRate: Math.random() * 0.5 + 0.1 }
          { page: '/blog', views: Math.floor(Math.random() * 1200) + 600, bounceRate: Math.random() * 0.3 + 0.4 }
        ]
      }
      traffic: {,
        sources: [,
          { source: 'Organic Search', visitors: Math.floor(Math.random() * 3000) + 2000, percentage: 45 }
          { source: 'Direct', visitors: Math.floor(Math.random() * 2000) + 1500, percentage: 30 }
          { source: 'Social Media', visitors: Math.floor(Math.random() * 1000) + 500, percentage: 15 }
          { source: 'Referral', visitors: Math.floor(Math.random() * 800) + 300, percentage: 10 }
        ]
        countries: [,
          { country: 'United States', visitors: Math.floor(Math.random() * 2000) + 1500, percentage: 35 }
          { country: 'United Kingdom', visitors: Math.floor(Math.random() * 800) + 500, percentage: 15 }
          { country: 'Canada', visitors: Math.floor(Math.random() * 600) + 400, percentage: 12 }
          { country: 'Germany', visitors: Math.floor(Math.random() * 500) + 300, percentage: 10 }
          { country: 'Australia', visitors: Math.floor(Math.random() * 400) + 250, percentage: 8 }
        ]
        devices: [,
          { device: 'Desktop', visitors: Math.floor(Math.random() * 3000) + 2000, percentage: 60 }
          { device: 'Mobile', visitors: Math.floor(Math.random() * 2000) + 1500, percentage: 35 }
          { device: 'Tablet', visitors: Math.floor(Math.random() * 500) + 200, percentage: 5 }
        ]
      }
      performance: {,
        averageLoadTime: Math.random() * 2 + 1.5,
        bounceRate: Math.random() * 0.3 + 0.4,
        conversionRate: Math.random() * 0.05 + 0.02,
        engagementScore: Math.random() * 30 + 70
      }
      trends: {,
        daily: Array.from({ length: baseMultiplier }, (_, i) => ({,
          date: new Date(Date.now() - (baseMultiplier - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
          visitors: Math.floor(Math.random() * 500) + 200,
          pageViews: Math.floor(Math.random() * 1500) + 800
        }))
        weekly: Array.from({ length: Math.ceil(baseMultiplier / 7) }, (_, i) => ({,
          week: `Week ${i + 1}`,
          visitors: Math.floor(Math.random() * 2000) + 1000,
          pageViews: Math.floor(Math.random() * 8000) + 4000
        }))
      }
      realTime: {,
        activeUsers: Math.floor(Math.random() * 50) + 20,
        currentPages: [,
          { page: '/', users: Math.floor(Math.random() * 10) + 5 }
          { page: '/services', users: Math.floor(Math.random() * 8) + 3 }
          { page: '/about', users: Math.floor(Math.random() * 5) + 2 }
        ]
        referrers: [,
          { source: 'Google', users: Math.floor(Math.random() * 15) + 10 }
          { source: 'Direct', users: Math.floor(Math.random() * 10) + 5 }
          { source: 'LinkedIn', users: Math.floor(Math.random() * 5) + 2 }
        ]
      }
    };
  };

  const loadAnalyticsData = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setData(generateMockData(timeRange));
    setIsLoading(false);
  };

  useEffect(() => {
    loadAnalyticsData();
  }, [timeRange]);

  const formatNumber = (num: number) => {,
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getTrendIcon = (current: number, previous: number) => {,
    if (current > previous) return <TrendingUp className="w-4 h-4 text-green-600/>;";
    if (current < previous) return <TrendingDown className="w-4 h-4 text-red-600/>;";
    return <Activity className="w-4 h-4 text-gray-600/>;";
  };

  const getPerformanceColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BarChart3 className="w-6 h-6/>
            Analytics Dashboard
          </h2>
          <p className="text-gray-600 mt-1">Website performance and user behavior insights</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value as any)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
        >
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4 mb-6">",
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-blue-100 text-sm">Total Visitors</p>
              <p className="text-2xl font-bold">{formatNumber(data.visitors.total)}</p>
            </div>
            <Users className="w-8 h-8 text-blue-200/>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-green-600 text-sm">Page Views</p>
              <p className="text-2xl font-bold text-green-700">{formatNumber(data.pageViews.total)}</p>
            </div>
            <Eye className="w-6 h-6 text-green-500/>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-purple-600 text-sm">Bounce Rate</p>
              <p className="text-2xl font-bold text-purple-700">{(data.performance.bounceRate * 100).toFixed(1)}%</p>
            </div>
            <MousePointer className="w-6 h-6 text-purple-500/>
          </div>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-orange-600 text-sm">Avg. Load Time</p>
              <p className={`text-2xl font-bold ${getPerformanceColor(data.performance.averageLoadTime, { good: 2, poor: 4 })}`}>`;
                {data.performance.averageLoadTime.toFixed(1)}s
              </p>
            </div>
            <Clock className="w-6 h-6 text-orange-500/>
          </div>
        </div>
      </div>

      {/* Real-time Activity */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Live Activity</h3>
            <p className="text-green-100">Users currently on your site</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{data.realTime.activeUsers}</p>
            <p className="text-green-100 text-sm">Active Users</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md: grid-cols-2 gap-4 mt-4">",
          <div>
            <h4 className="font-medium mb-2">Current Pages</h4>
            <div className="space-y-1">
              {data.realTime.currentPages.map((page, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-green-100">{page.page}</span>
                  <span className="font-medium">{page.users} users</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Traffic Sources</h4>
            <div className="space-y-1">
              {data.realTime.referrers.map((ref, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-green-100">{ref.source}</span>
                  <span className="font-medium">{ref.users} users</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="grid grid-cols-1 lg: grid-cols-2 gap-6 mb-6">",
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {data.traffic.sources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="font-medium">{source.source}</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{formatNumber(source.visitors)}</p>
                  <p className="text-sm text-gray-600">{source.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
          <div className="space-y-3">
            {data.traffic.devices.map((device, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {device.device === 'Desktop' && <Monitor className="w-4 h-4 text-gray-600/>}";
                  {device.device === 'Mobile' && <Smartphone className="w-4 h-4 text-gray-600/>}";
                  {device.device === 'Tablet' && <Monitor className="w-4 h-4 text-gray-600/>}";
                  <span className="font-medium">{device.device}</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{formatNumber(device.visitors)}</p>
                  <p className="text-sm text-gray-600">{device.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
        <div className="space-y-3">
          {data.pageViews.topPages.map((page, index) => (
            <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3">
              <div>
                <p className="font-medium">{page.page}</p>
                <p className="text-sm text-gray-600">Bounce Rate: {(page.bounceRate * 100).toFixed(1)}%</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{formatNumber(page.views)} views</p>
                <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(page.views / Math.max(...data.pageViews.topPages.map(p => p.views))) * 100}%` }}`;
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md: grid-cols-3 gap-4">",
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-blue-600/>
            <h4 className="font-semibold text-blue-900">Conversion Rate</h4>
          </div>
          <p className="text-2xl font-bold text-blue-700">{(data.performance.conversionRate * 100).toFixed(2)}%</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-green-600/>
            <h4 className="font-semibold text-green-900">Engagement Score</h4>
          </div>
          <p className="text-2xl font-bold text-green-700">{data.performance.engagementScore.toFixed(0)}/100</p>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-purple-600/>
            <h4 className="font-semibold text-purple-900">Pages per Session</h4>
          </div>
          <p className="text-2xl font-bold text-purple-700">{data.pageViews.average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;