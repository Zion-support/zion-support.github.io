import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  Target,
  Zap,
  AlertCircle,
  CheckCircle,
  Info,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Globe,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{
    page: string;
    views: number;
    bounceRate: number;
    avgTime: number;
  }>;
  trafficSources: Array<{
    source: string;
    visitors: number;
    percentage: number;
    conversionRate: number;
  }>;
  deviceTypes: Array<{
    device: string;
    visitors: number;
    percentage: number;
  }>;
  userBehavior: Array<{
    action: string;
    count: number;
    trend: 'up' | 'down' | 'stable';
  }>;
  performance: {
    pageLoadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number;
  };
  realTime: {
    activeUsers: number;
    currentPage: string;
    location: string;
    device: string;
  }[];
}

interface Insight {
  id: string;
  type: 'opportunity' | 'warning' | 'success' | 'info';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  category: 'performance' | 'conversion' | 'engagement' | 'technical';
  actionable: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
  metrics: {
    current: number;
    target: number;
    change: number;
  };
}

interface AdvancedAnalyticsInsightsProps {
  data?: AnalyticsData;
  enableRealTime?: boolean;
  refreshInterval?: number;
  onInsightAction?: (insight: Insight) => void;
}

export const AdvancedAnalyticsInsights: React.FC<AdvancedAnalyticsInsightsProps> = ({
  data: propData,
  enableRealTime = true,
  refreshInterval = 30000,
  onInsightAction
}) => {
  const [data, setData] = useState<AnalyticsData | null>(propData || null);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [isLoading, setIsLoading] = useState(false);

  // Generate sample data if not provided
  const generateSampleData = useCallback((): AnalyticsData => {
    const baseViews = Math.floor(Math.random() * 100000) + 50000;
    const baseVisitors = Math.floor(baseViews * 0.7);
    
    return {
      pageViews: baseViews,
      uniqueVisitors: baseVisitors,
      bounceRate: Math.random() * 20 + 30,
      avgSessionDuration: Math.random() * 120 + 60,
      conversionRate: Math.random() * 5 + 8,
      topPages: [
        { page: '/', views: Math.floor(baseViews * 0.4), bounceRate: 25 + Math.random() * 10, avgTime: 120 + Math.random() * 60 },
        { page: '/services', views: Math.floor(baseViews * 0.25), bounceRate: 30 + Math.random() * 15, avgTime: 180 + Math.random() * 90 },
        { page: '/blog', views: Math.floor(baseViews * 0.15), bounceRate: 40 + Math.random() * 20, avgTime: 240 + Math.random() * 120 },
        { page: '/contact', views: Math.floor(baseViews * 0.1), bounceRate: 35 + Math.random() * 15, avgTime: 90 + Math.random() * 30 },
        { page: '/about', views: Math.floor(baseViews * 0.1), bounceRate: 45 + Math.random() * 20, avgTime: 150 + Math.random() * 60 }
      ],
      trafficSources: [
        { source: 'Organic Search', visitors: Math.floor(baseVisitors * 0.5), percentage: 50, conversionRate: 12 + Math.random() * 5 },
        { source: 'Direct', visitors: Math.floor(baseVisitors * 0.25), percentage: 25, conversionRate: 15 + Math.random() * 5 },
        { source: 'Social Media', visitors: Math.floor(baseVisitors * 0.15), percentage: 15, conversionRate: 8 + Math.random() * 4 },
        { source: 'Referral', visitors: Math.floor(baseVisitors * 0.1), percentage: 10, conversionRate: 10 + Math.random() * 5 }
      ],
      deviceTypes: [
        { device: 'Desktop', visitors: Math.floor(baseVisitors * 0.6), percentage: 60 },
        { device: 'Mobile', visitors: Math.floor(baseVisitors * 0.35), percentage: 35 },
        { device: 'Tablet', visitors: Math.floor(baseVisitors * 0.05), percentage: 5 }
      ],
      userBehavior: [
        { action: 'Page Views', count: baseViews, trend: Math.random() > 0.5 ? 'up' : 'down' },
        { action: 'Clicks', count: Math.floor(baseViews * 0.8), trend: Math.random() > 0.5 ? 'up' : 'down' },
        { action: 'Scrolls', count: Math.floor(baseViews * 0.6), trend: Math.random() > 0.5 ? 'up' : 'down' },
        { action: 'Form Submissions', count: Math.floor(baseViews * 0.05), trend: Math.random() > 0.5 ? 'up' : 'down' }
      ],
      performance: {
        pageLoadTime: Math.random() * 2000 + 1000,
        firstContentfulPaint: Math.random() * 1000 + 500,
        largestContentfulPaint: Math.random() * 2000 + 1000,
        cumulativeLayoutShift: Math.random() * 0.1,
        firstInputDelay: Math.random() * 100 + 50
      },
      realTime: Array.from({ length: Math.floor(Math.random() * 20) + 5 }, (_, i) => ({
        activeUsers: Math.floor(Math.random() * 5) + 1,
        currentPage: ['/', '/services', '/blog', '/contact'][Math.floor(Math.random() * 4)],
        location: ['United States', 'Canada', 'United Kingdom', 'Germany', 'France'][Math.floor(Math.random() * 5)],
        device: ['Desktop', 'Mobile', 'Tablet'][Math.floor(Math.random() * 3)]
      }))
    };
  }, []);

  // Generate insights based on data
  const generateInsights = useCallback((analyticsData: AnalyticsData): Insight[] => {
    const insights: Insight[] = [];

    // Performance insights
    if (analyticsData.performance.pageLoadTime > 3000) {
      insights.push({
        id: 'slow-page-load',
        type: 'warning',
        title: 'Slow Page Load Time',
        description: `Page load time is ${analyticsData.performance.pageLoadTime.toFixed(0)}ms, which is above the recommended 3s threshold.`,
        impact: 'high',
        category: 'performance',
        actionable: true,
        action: {
          label: 'Optimize Performance',
          onClick: () => console.log('Optimizing performance...')
        },
        metrics: {
          current: analyticsData.performance.pageLoadTime,
          target: 3000,
          change: -((analyticsData.performance.pageLoadTime - 3000) / 3000) * 100
        }
      });
    }

    // Conversion rate insights
    if (analyticsData.conversionRate < 10) {
      insights.push({
        id: 'low-conversion',
        type: 'opportunity',
        title: 'Low Conversion Rate',
        description: `Conversion rate is ${analyticsData.conversionRate.toFixed(1)}%, which is below industry average.`,
        impact: 'high',
        category: 'conversion',
        actionable: true,
        action: {
          label: 'Improve CTA',
          onClick: () => console.log('Improving CTA...')
        },
        metrics: {
          current: analyticsData.conversionRate,
          target: 10,
          change: ((10 - analyticsData.conversionRate) / analyticsData.conversionRate) * 100
        }
      });
    }

    // Bounce rate insights
    if (analyticsData.bounceRate > 50) {
      insights.push({
        id: 'high-bounce-rate',
        type: 'warning',
        title: 'High Bounce Rate',
        description: `Bounce rate is ${analyticsData.bounceRate.toFixed(1)}%, indicating users are leaving quickly.`,
        impact: 'medium',
        category: 'engagement',
        actionable: true,
        action: {
          label: 'Improve Content',
          onClick: () => console.log('Improving content...')
        },
        metrics: {
          current: analyticsData.bounceRate,
          target: 50,
          change: -((analyticsData.bounceRate - 50) / 50) * 100
        }
      });
    }

    // Mobile traffic insights
    const mobilePercentage = analyticsData.deviceTypes.find(d => d.device === 'Mobile')?.percentage || 0;
    if (mobilePercentage > 40) {
      insights.push({
        id: 'mobile-optimization',
        type: 'info',
        title: 'High Mobile Traffic',
        description: `${mobilePercentage.toFixed(1)}% of traffic is from mobile devices. Ensure mobile optimization.`,
        impact: 'medium',
        category: 'technical',
        actionable: true,
        action: {
          label: 'Check Mobile UX',
          onClick: () => console.log('Checking mobile UX...')
        },
        metrics: {
          current: mobilePercentage,
          target: 40,
          change: ((mobilePercentage - 40) / 40) * 100
        }
      });
    }

    // Performance success
    if (analyticsData.performance.pageLoadTime < 2000) {
      insights.push({
        id: 'fast-page-load',
        type: 'success',
        title: 'Excellent Page Load Time',
        description: `Page load time is ${analyticsData.performance.pageLoadTime.toFixed(0)}ms, which is excellent!`,
        impact: 'low',
        category: 'performance',
        actionable: false,
        metrics: {
          current: analyticsData.performance.pageLoadTime,
          target: 2000,
          change: -((analyticsData.performance.pageLoadTime - 2000) / 2000) * 100
        }
      });
    }

    return insights;
  }, []);

  // Load data
  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newData = generateSampleData();
      setData(newData);
      setInsights(generateInsights(newData));
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [generateSampleData, generateInsights]);

  // Auto-refresh data
  useEffect(() => {
    if (!enableRealTime) return;

    const interval = setInterval(loadData, refreshInterval);
    return () => clearInterval(interval);
  }, [enableRealTime, refreshInterval, loadData]);

  // Initial load
  useEffect(() => {
    if (!data) {
      loadData();
    }
  }, [data, loadData]);

  const getInsightIcon = (type: Insight['type']) => {
    switch (type) {
      case 'opportunity': return <Target className="w-5 h-5 text-blue-500" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'info': return <Info className="w-5 h-5 text-blue-500" />;
      default: return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  const getInsightColor = (type: Insight['type']) => {
    switch (type) {
      case 'opportunity': return 'border-blue-200 bg-blue-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'success': return 'border-green-200 bg-green-50';
      case 'info': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getImpactColor = (impact: Insight['impact']) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'Desktop': return <Monitor className="w-4 h-4" />;
      case 'Mobile': return <Smartphone className="w-4 h-4" />;
      case 'Tablet': return <Tablet className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center text-gray-500">
          <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p>No analytics data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Analytics Insights</h2>
              <p className="text-sm text-gray-500">Real-time analytics and actionable insights</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            
            <button
              onClick={loadData}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {data.pageViews.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Page Views</div>
            <div className="flex items-center justify-center mt-1">
              <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+12.5%</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">
              {data.uniqueVisitors.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Unique Visitors</div>
            <div className="flex items-center justify-center mt-1">
              <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+8.3%</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-1">
              {data.bounceRate.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-500">Bounce Rate</div>
            <div className="flex items-center justify-center mt-1">
              <ArrowDownRight className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">-2.1%</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {data.conversionRate.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-500">Conversion Rate</div>
            <div className="flex items-center justify-center mt-1">
              <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+1.2%</span>
            </div>
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Real-time Activity</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">
                {data.realTime.reduce((sum, item) => sum + item.activeUsers, 0)} active users
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {data.realTime.length} locations
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Actionable Insights</h3>
        
        {insights.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <p>No insights available at this time</p>
          </div>
        ) : (
          <div className="space-y-4">
            {insights.map((insight) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border-2 ${getInsightColor(insight.type)}`}
              >
                <div className="flex items-start space-x-3">
                  {getInsightIcon(insight.type)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{insight.title}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                          {insight.impact} impact
                        </span>
                        <span className="text-sm text-gray-500 capitalize">
                          {insight.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Current: </span>
                          <span className="font-medium">{insight.metrics.current.toFixed(1)}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Target: </span>
                          <span className="font-medium">{insight.metrics.target.toFixed(1)}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Change: </span>
                          <span className={`font-medium ${insight.metrics.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {insight.metrics.change > 0 ? '+' : ''}{insight.metrics.change.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                      
                      {insight.actionable && insight.action && (
                        <button
                          onClick={() => {
                            insight.action?.onClick();
                            onInsightAction?.(insight);
                          }}
                          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          {insight.action.label}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Device Analytics */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Device Analytics</h3>
        <div className="space-y-3">
          {data.deviceTypes.map((device) => (
            <div key={device.device} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {getDeviceIcon(device.device)}
                <span className="font-medium">{device.device}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  {device.visitors.toLocaleString()} visitors
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {device.percentage.toFixed(1)}%
                </div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsInsights;