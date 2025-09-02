import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{
    path: string;
    views: number;
    change: number;
  }>;
  trafficSources: Array<{
    source: string;
    visitors: number;
    percentage: number;
  }>;
  deviceTypes: Array<{
    type: string;
    count: number;
    percentage: number;
  }>;
  realTimeVisitors: number;
}

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon, color }) => {
  const getChangeIcon = () => {
    if (change === undefined) return <Minus className="w-4 h-4 text-gray-400" />;
    if (change > 0) return <ArrowUp className="w-4 h-4 text-green-500" />;
    if (change < 0) return <ArrowDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getChangeColor = () => {
    if (change === undefined) return 'text-gray-500';
    if (change > 0) return 'text-green-500';
    if (change < 0) return 'text-red-500';
    return 'text-gray-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change !== undefined && (
            <div className={`flex items-center mt-2 ${getChangeColor()}`}>
              {getChangeIcon()}
              <span className="text-sm ml-1">{Math.abs(change)}%</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

interface TopPagesListProps {
  pages: Array<{
    path: string;
    views: number;
    change: number;
  }>;
}

const TopPagesList: React.FC<TopPagesListProps> = ({ pages }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
      <div className="space-y-3">
        {pages.map((page, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
              <span className="text-sm text-gray-900 truncate max-w-xs">{page.path}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{page.views.toLocaleString()}</span>
              <div className={`flex items-center ${page.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {page.change > 0 ? (
                  <ArrowUp className="w-3 h-3" />
                ) : (
                  <ArrowDown className="w-3 h-3" />
                )}
                <span className="text-xs ml-1">{Math.abs(page.change)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface TrafficSourcesProps {
  sources: Array<{
    source: string;
    visitors: number;
    percentage: number;
  }>;
}

const TrafficSources: React.FC<TrafficSourcesProps> = ({ sources }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
      <div className="space-y-4">
        {sources.map((source, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700">{source.source}</span>
              <span className="text-sm text-gray-600">{source.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-zion-cyan h-2 rounded-full transition-all duration-300"
                style={{ width: `${source.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface DeviceTypesProps {
  devices: Array<{
    type: string;
    count: number;
    percentage: number;
  }>;
}

const DeviceTypes: React.FC<DeviceTypesProps> = ({ devices }) => {
  const getDeviceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'desktop':
        return <Monitor className="w-5 h-5" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'tablet':
        return <Tablet className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
      <div className="space-y-4">
        {devices.map((device, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getDeviceIcon(device.type)}
              <span className="text-sm text-gray-700">{device.type}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{device.count.toLocaleString()}</span>
              <span className="text-sm text-gray-500">({device.percentage}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  // Mock data - in real app, this would come from an API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setData({
        pageViews: 125430,
        uniqueVisitors: 45620,
        bounceRate: 42.3,
        avgSessionDuration: 3.2,
        topPages: [
          { path: '/', views: 45230, change: 12.5 },
          { path: '/services', views: 23450, change: -3.2 },
          { path: '/pricing', views: 18920, change: 8.7 },
          { path: '/about', views: 15680, change: 5.1 },
          { path: '/contact', views: 12340, change: -1.8 }
        ],
        trafficSources: [
          { source: 'Direct', visitors: 18240, percentage: 40 },
          { source: 'Google', visitors: 13680, percentage: 30 },
          { source: 'Social Media', visitors: 9120, percentage: 20 },
          { source: 'Referrals', visitors: 4560, percentage: 10 }
        ],
        deviceTypes: [
          { type: 'Desktop', count: 22810, percentage: 50 },
          { type: 'Mobile', count: 18248, percentage: 40 },
          { type: 'Tablet', count: 4562, percentage: 10 }
        ],
        realTimeVisitors: 23
      });
      setLoading(false);
    };

    fetchData();
  }, [timeRange]);

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-32"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor your website performance and user engagement</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">{data.realTimeVisitors} live</span>
            </div>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="1d">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Page Views"
          value={data.pageViews.toLocaleString()}
          change={12.5}
          icon={<Eye className="w-6 h-6 text-white" />}
          color="bg-blue-500"
        />
        <MetricCard
          title="Unique Visitors"
          value={data.uniqueVisitors.toLocaleString()}
          change={8.3}
          icon={<Users className="w-6 h-6 text-white" />}
          color="bg-green-500"
        />
        <MetricCard
          title="Bounce Rate"
          value={`${data.bounceRate}%`}
          change={-2.1}
          icon={<MousePointer className="w-6 h-6 text-white" />}
          color="bg-yellow-500"
        />
        <MetricCard
          title="Avg. Session"
          value={`${data.avgSessionDuration}m`}
          change={5.7}
          icon={<Clock className="w-6 h-6 text-white" />}
          color="bg-purple-500"
        />
      </div>

      {/* Charts and Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopPagesList pages={data.topPages} />
        <TrafficSources sources={data.trafficSources} />
        <DeviceTypes devices={data.deviceTypes} />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;