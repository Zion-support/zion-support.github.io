import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  Activity,
  Zap,
  Target,
  DollarSign,
  ShoppingCart,
  Heart,
  Share2,
  Download,
  Play,
  Pause,
  RefreshCw,
  Settings,
  Filter,
  Calendar,
  MapPin,
  Globe,
  Device,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Database,
  Network,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  HelpCircle,
  BookOpen,
  FileText,
  Image,
  Video,
  Music,
  Code,
  Palette,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ path: string; views: number; conversion: number }>;
  userBehavior: Array<{ action: string; count: number; trend: 'up' | 'down' | 'stable' }>;
  deviceBreakdown: Array<{ device: string; percentage: number; trend: 'up' | 'down' | 'stable' }>;
  geographicData: Array<{ country: string; visitors: number; percentage: number }>;
  performanceMetrics: Array<{ metric: string; value: number; target: number; status: 'good' | 'warning' | 'critical' }>;
  conversionFunnels: Array<{ stage: string; visitors: number; conversion: number; dropoff: number }>;
  realTimeUsers: number;
  activeSessions: number;
  lastUpdated: Date;
}

interface AnalyticsProps {
  showRealTime?: boolean;
  showPerformance?: boolean;
  showConversions?: boolean;
  showUserBehavior?: boolean;
  refreshInterval?: number;
  onDataUpdate?: (data: AnalyticsData) => void;
}

const EnhancedAnalytics: React.FC<AnalyticsProps> = ({
  showRealTime = true,
  showPerformance = true,
  showConversions = true,
  showUserBehavior = true,
  refreshInterval = 30000,
  onDataUpdate
}) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    userBehavior: [],
    deviceBreakdown: [],
    geographicData: [],
    performanceMetrics: [],
    conversionFunnels: [],
    realTimeUsers: 0,
    activeSessions: 0,
    lastUpdated: new Date()
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [isRealTimeActive, setIsRealTimeActive] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [selectedMetric, setSelectedMetric] = useState<'overview' | 'performance' | 'conversions' | 'behavior'>('overview');
  const [isLoading, setIsLoading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Simulate analytics data collection
  const collectAnalyticsData = useCallback(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newData: AnalyticsData = {
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        uniqueVisitors: Math.floor(Math.random() * 3000) + 1500,
        bounceRate: Math.random() * 40 + 20, // 20-60%
        avgSessionDuration: Math.random() * 300 + 120, // 2-7 minutes
        conversionRate: Math.random() * 15 + 2, // 2-17%
        topPages: [
          { path: '/', views: Math.floor(Math.random() * 2000) + 1000, conversion: Math.random() * 20 + 5 },
          { path: '/services', views: Math.floor(Math.random() * 1500) + 800, conversion: Math.random() * 25 + 10 },
          { path: '/ai-solutions', views: Math.floor(Math.random() * 1200) + 600, conversion: Math.random() * 30 + 15 },
          { path: '/contact', views: Math.floor(Math.random() * 800) + 400, conversion: Math.random() * 40 + 20 },
          { path: '/about', views: Math.floor(Math.random() * 600) + 300, conversion: Math.random() * 15 + 5 }
        ],
        userBehavior: [
          { action: 'Page View', count: Math.floor(Math.random() * 5000) + 3000, trend: 'up' as const },
          { action: 'Click', count: Math.floor(Math.random() * 3000) + 2000, trend: 'up' as const },
          { action: 'Scroll', count: Math.floor(Math.random() * 2000) + 1500, trend: 'stable' as const },
          { action: 'Form Interaction', count: Math.floor(Math.random() * 500) + 300, trend: 'down' as const },
          { action: 'Download', count: Math.floor(Math.random() * 200) + 100, trend: 'up' as const }
        ],
        deviceBreakdown: [
          { device: 'Desktop', percentage: Math.random() * 30 + 50, trend: 'up' as const },
          { device: 'Mobile', percentage: Math.random() * 30 + 30, trend: 'up' as const },
          { device: 'Tablet', percentage: Math.random() * 20 + 10, trend: 'stable' as const }
        ],
        geographicData: [
          { country: 'United States', visitors: Math.floor(Math.random() * 2000) + 1500, percentage: Math.random() * 20 + 60 },
          { country: 'Canada', visitors: Math.floor(Math.random() * 500) + 300, percentage: Math.random() * 10 + 15 },
          { country: 'United Kingdom', visitors: Math.floor(Math.random() * 400) + 200, percentage: Math.random() * 10 + 10 },
          { country: 'Germany', visitors: Math.floor(Math.random() * 300) + 150, percentage: Math.random() * 8 + 8 },
          { country: 'Australia', visitors: Math.floor(Math.random() * 200) + 100, percentage: Math.random() * 5 + 5 }
        ],
        performanceMetrics: [
          { metric: 'Page Load Time', value: Math.random() * 2000 + 800, target: 1000, status: 'good' as const },
          { metric: 'First Contentful Paint', value: Math.random() * 1500 + 600, target: 800, status: 'warning' as const },
          { metric: 'Largest Contentful Paint', value: Math.random() * 3000 + 1500, target: 2000, status: 'warning' as const },
          { metric: 'Cumulative Layout Shift', value: Math.random() * 0.2 + 0.05, target: 0.1, status: 'critical' as const },
          { metric: 'Time to Interactive', value: Math.random() * 3000 + 1500, target: 2000, status: 'good' as const }
        ],
        conversionFunnels: [
          { stage: 'Landing Page', visitors: Math.floor(Math.random() * 5000) + 3000, conversion: 100, dropoff: 0 },
          { stage: 'Service Selection', visitors: Math.floor(Math.random() * 4000) + 2500, conversion: Math.random() * 20 + 70, dropoff: Math.random() * 20 + 10 },
          { stage: 'Contact Form', visitors: Math.floor(Math.random() * 3000) + 2000, conversion: Math.random() * 30 + 50, dropoff: Math.random() * 30 + 20 },
          { stage: 'Quote Request', visitors: Math.floor(Math.random() * 2000) + 1500, conversion: Math.random() * 40 + 40, dropoff: Math.random() * 40 + 30 },
          { stage: 'Conversion', visitors: Math.floor(Math.random() * 1000) + 800, conversion: Math.random() * 50 + 30, dropoff: Math.random() * 50 + 40 }
        ],
        realTimeUsers: Math.floor(Math.random() * 100) + 50,
        activeSessions: Math.floor(Math.random() * 200) + 100,
        lastUpdated: new Date()
      };

      setAnalyticsData(newData);
      setIsLoading(false);
      
      if (onDataUpdate) {
        onDataUpdate(newData);
      }
    }, 1000);
  }, [onDataUpdate]);

  // Start real-time data collection
  useEffect(() => {
    if (isRealTimeActive) {
      collectAnalyticsData();
      intervalRef.current = setInterval(collectAnalyticsData, refreshInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRealTimeActive, refreshInterval, collectAnalyticsData]);

  // Toggle real-time monitoring
  const toggleRealTime = () => {
    setIsRealTimeActive(!isRealTimeActive);
  };

  // Get trend icon and color
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case 'stable':
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  // Get performance status color
  const getPerformanceStatusColor = (status: 'good' | 'warning' | 'critical') => {
    switch (status) {
      case 'good':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'critical':
        return 'text-red-600 bg-red-100';
    }
  };

  // Format duration
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl max-w-md">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleRealTime}
              className={`p-1 rounded ${isRealTimeActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
              title={isRealTimeActive ? 'Stop Real-time' : 'Start Real-time'}
            >
              <div className={`w-2 h-2 rounded-full ${isRealTimeActive ? 'bg-green-500' : 'bg-gray-400'}`} />
            </button>
            <button
              onClick={collectAnalyticsData}
              disabled={isLoading}
              className="p-1 rounded hover:bg-gray-100 text-gray-600 disabled:opacity-50"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded hover:bg-gray-100 text-gray-600"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Timeframe Selector */}
        <div className="flex items-center space-x-2 mt-3">
          {(['1h', '24h', '7d', '30d'] as const).map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-2 py-1 text-xs rounded ${
                selectedTimeframe === timeframe
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-1">
          Last updated: {analyticsData.lastUpdated.toLocaleTimeString()}
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Page Views</span>
            </div>
            <p className="text-lg font-bold text-blue-900">
              {formatNumber(analyticsData.pageViews)}
            </p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">Unique Visitors</span>
            </div>
            <p className="text-lg font-bold text-green-900">
              {formatNumber(analyticsData.uniqueVisitors)}
            </p>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Conversion Rate</span>
            </div>
            <p className="text-lg font-bold text-purple-900">
              {analyticsData.conversionRate.toFixed(1)}%
            </p>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-900">Avg Session</span>
            </div>
            <p className="text-lg font-bold text-orange-900">
              {formatDuration(analyticsData.avgSessionDuration)}
            </p>
          </div>
        </div>

        {/* Real-time Users */}
        {showRealTime && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium opacity-90">Real-time Users</h4>
                <p className="text-2xl font-bold">{analyticsData.realTimeUsers}</p>
                <p className="text-sm opacity-75">{analyticsData.activeSessions} active sessions</p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
            </div>
          </div>
        )}

        {/* Top Pages */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Top Pages</span>
          </h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {analyticsData.topPages.map((page, index) => (
              <div key={page.path} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-600">#{index + 1}</span>
                  <span className="text-sm text-gray-900 truncate max-w-32">{page.path}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{formatNumber(page.views)}</p>
                  <p className="text-xs text-gray-500">{page.conversion.toFixed(1)}% conv.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        {showPerformance && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Performance</span>
            </div>
            <div className="space-y-2">
              {analyticsData.performanceMetrics.map((metric) => (
                <div key={metric.metric} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">{metric.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">
                      {metric.metric.includes('Time') ? `${metric.value.toFixed(0)}ms` : metric.value.toFixed(2)}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getPerformanceStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Conversion Funnel */}
        {showConversions && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Conversion Funnel</span>
            </div>
            <div className="space-y-2">
              {analyticsData.conversionFunnels.map((stage, index) => (
                <div key={stage.stage} className="relative">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">{stage.stage}</span>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{formatNumber(stage.visitors)}</p>
                      <p className="text-xs text-gray-500">{stage.conversion.toFixed(1)}%</p>
                    </div>
                  </div>
                  {index < analyticsData.conversionFunnels.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Device Breakdown */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <Device className="w-4 h-4" />
            <span>Device Breakdown</span>
          </h4>
          <div className="space-y-2">
            {analyticsData.deviceBreakdown.map((device) => (
              <div key={device.device} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">{device.device}</span>
                  {getTrendIcon(device.trend)}
                </div>
                <span className="text-sm font-medium text-gray-900">{device.percentage.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button
            onClick={() => window.open('https://analytics.google.com/', '_blank')}
            className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            <BarChart3 className="w-3 h-3 inline mr-1" />
            Google Analytics
          </button>
          <button
            onClick={() => window.open('https://search.google.com/search-console', '_blank')}
            className="flex-1 bg-green-600 text-white text-xs py-2 px-3 rounded-md hover:bg-green-700 transition-colors"
          >
            <Target className="w-3 h-3 inline mr-1" />
            Search Console
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;