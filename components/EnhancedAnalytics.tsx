import React, { useEffect, useState, useCallback } from 'react';
import { BarChart3, Users, Eye, MousePointer, Clock, TrendingUp, Globe, Smartphone, Monitor, Tablet, Download, Share2, Heart, MessageCircle } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
  realTimeUsers: number;
}

interface EnhancedAnalyticsProps {
  data?: AnalyticsData;
  refreshInterval?: number;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  data,
  refreshInterval = 30000
}) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>(data || {
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    realTimeUsers: 0
  });

  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (refreshInterval > 0) {
      const interval = setInterval(fetchAnalyticsData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [fetchAnalyticsData, refreshInterval]);

  const StatCard = ({ title, value, icon: Icon, change, color = "blue" }: {
    title: string;
    value: string | number;
    icon: React.ComponentType<any>;
    change?: string;
    color?: string;
  }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {change} from last period
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full bg-${color}-100`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
          <button
            onClick={fetchAnalyticsData}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Page Views"
          value={analyticsData.pageViews.toLocaleString()}
          icon={Eye}
          change="+12.5%"
          color="blue"
        />
        <StatCard
          title="Unique Visitors"
          value={analyticsData.uniqueVisitors.toLocaleString()}
          icon={Users}
          change="+8.2%"
          color="green"
        />
        <StatCard
          title="Bounce Rate"
          value={`${analyticsData.bounceRate}%`}
          icon={MousePointer}
          change="-2.1%"
          color="yellow"
        />
        <StatCard
          title="Avg. Session"
          value={`${analyticsData.avgSessionDuration}m`}
          icon={Clock}
          change="+5.3%"
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
          <div className="space-y-3">
            {analyticsData.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{page.page}</span>
                <span className="text-sm font-medium text-gray-900">{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {analyticsData.trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{source.source}</span>
                <span className="text-sm font-medium text-gray-900">{source.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {analyticsData.deviceTypes.map((device, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{device.percentage}%</div>
              <div className="text-sm text-gray-600">{device.device}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;