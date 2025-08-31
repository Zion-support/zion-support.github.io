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
  RefreshCw,
  Settings,
  Download,
  Share2,
  Filter,
  Calendar,
  MapPin,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface AnalyticsEvent {
  id: string;
  type: 'pageview' | 'click' | 'scroll' | 'conversion' | 'error';
  page: string;
  timestamp: Date;
  userId?: string;
  sessionId: string;
  metadata: Record<string, any>;
}

interface UserSession {
  id: string;
  startTime: Date;
  endTime?: Date;
  duration: number;
  pageViews: number;
  conversions: number;
  device: 'desktop' | 'mobile' | 'tablet';
  location: string;
  referrer: string;
}

interface ConversionFunnel {
  stage: string;
  visitors: number;
  conversions: number;
  rate: number;
  dropoff: number;
}

interface AnalyticsData {
  totalVisitors: number;
  totalSessions: number;
  totalConversions: number;
  averageSessionDuration: number;
  bounceRate: number;
  topPages: Array<{ page: string; views: number; conversions: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number }>;
  locationBreakdown: Array<{ location: string; percentage: number }>;
  conversionFunnel: ConversionFunnel[];
  realTimeUsers: number;
  events: AnalyticsEvent[];
  sessions: UserSession[];
}

interface EnhancedAnalyticsProps {
  enabled?: boolean;
  trackingId?: string;
  showRealTime?: boolean;
  autoRefresh?: boolean;
}

export const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  enabled = true,
  trackingId = 'zion-tech-group',
  showRealTime = true,
  autoRefresh = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [selectedMetric, setSelectedMetric] = useState<'visitors' | 'sessions' | 'conversions' | 'revenue'>('visitors');

  // Generate mock analytics data
  const generateMockAnalyticsData = useCallback((): AnalyticsData => {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    // Generate mock events
    const events: AnalyticsEvent[] = Array.from({ length: 50 }, (_, i) => ({
      id: `event-${i}`,
      type: ['pageview', 'click', 'scroll', 'conversion', 'error'][Math.floor(Math.random() * 5)] as any,
      page: ['/', '/services', '/about', '/contact', '/pricing'][Math.floor(Math.random() * 5)],
      timestamp: new Date(oneDayAgo.getTime() + Math.random() * (now.getTime() - oneDayAgo.getTime())),
      userId: Math.random() > 0.7 ? `user-${Math.floor(Math.random() * 1000)}` : undefined,
      sessionId: `session-${Math.floor(Math.random() * 100)}`,
      metadata: {
        button: Math.random() > 0.5 ? 'cta-button' : 'nav-link',
        scrollDepth: Math.floor(Math.random() * 100),
        timeOnPage: Math.floor(Math.random() * 300)
      }
    }));

    // Generate mock sessions
    const sessions: UserSession[] = Array.from({ length: 25 }, (_, i) => ({
      id: `session-${i}`,
      startTime: new Date(oneDayAgo.getTime() + Math.random() * (now.getTime() - oneDayAgo.getTime())),
      endTime: Math.random() > 0.3 ? new Date(oneDayAgo.getTime() + Math.random() * (now.getTime() - oneDayAgo.getTime())) : undefined,
      duration: Math.floor(Math.random() * 1800) + 60,
      pageViews: Math.floor(Math.random() * 10) + 1,
      conversions: Math.random() > 0.8 ? 1 : 0,
      device: ['desktop', 'mobile', 'tablet'][Math.floor(Math.random() * 3)] as any,
      location: ['United States', 'United Kingdom', 'Canada', 'Germany', 'Australia'][Math.floor(Math.random() * 5)],
      referrer: ['google.com', 'direct', 'linkedin.com', 'twitter.com', 'github.com'][Math.floor(Math.random() * 5)]
    }));

    // Calculate metrics
    const totalVisitors = Math.floor(Math.random() * 5000) + 2000;
    const totalSessions = sessions.length;
    const totalConversions = sessions.filter(s => s.conversions > 0).length;
    const averageSessionDuration = sessions.reduce((acc, s) => acc + s.duration, 0) / sessions.length;
    const bounceRate = (sessions.filter(s => s.pageViews === 1).length / sessions.length) * 100;

    // Top pages
    const pageViews = events.filter(e => e.type === 'pageview').reduce((acc, e) => {
      acc[e.page] = (acc[e.page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topPages = Object.entries(pageViews)
      .map(([page, views]) => ({
        page,
        views,
        conversions: Math.floor(Math.random() * views * 0.1)
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);

    // Device breakdown
    const deviceCounts = sessions.reduce((acc, s) => {
      acc[s.device] = (acc[s.device] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const deviceBreakdown = Object.entries(deviceCounts).map(([device, count]) => ({
      device: device.charAt(0).toUpperCase() + device.slice(1),
      percentage: (count / sessions.length) * 100
    }));

    // Location breakdown
    const locationCounts = sessions.reduce((acc, s) => {
      acc[s.location] = (acc[s.location] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const locationBreakdown = Object.entries(locationCounts).map(([location, count]) => ({
      location,
      percentage: (count / sessions.length) * 100
    }));

    // Conversion funnel
    const conversionFunnel: ConversionFunnel[] = [
      { stage: 'Landing Page', visitors: totalVisitors, conversions: Math.floor(totalVisitors * 0.8), rate: 80, dropoff: 0 },
      { stage: 'Services Page', visitors: Math.floor(totalVisitors * 0.8), conversions: Math.floor(totalVisitors * 0.6), rate: 75, dropoff: 5 },
      { stage: 'Pricing Page', visitors: Math.floor(totalVisitors * 0.6), conversions: Math.floor(totalVisitors * 0.4), rate: 67, dropoff: 8 },
      { stage: 'Contact Form', visitors: Math.floor(totalVisitors * 0.4), conversions: Math.floor(totalVisitors * 0.2), rate: 50, dropoff: 17 },
      { stage: 'Conversion', visitors: Math.floor(totalVisitors * 0.2), conversions: totalConversions, rate: (totalConversions / Math.floor(totalVisitors * 0.2)) * 100, dropoff: 50 - ((totalConversions / Math.floor(totalVisitors * 0.2)) * 100) }
    ];

    return {
      totalVisitors,
      totalSessions,
      totalConversions,
      averageSessionDuration,
      bounceRate,
      topPages,
      deviceBreakdown,
      locationBreakdown,
      conversionFunnel,
      realTimeUsers: Math.floor(Math.random() * 50) + 10,
      events,
      sessions
    };
  }, []);

  // Refresh analytics data
  const refreshData = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const newData = generateMockAnalyticsData();
      setAnalyticsData(newData);
    } catch (error) {
      console.error('Failed to refresh analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [generateMockAnalyticsData]);

  // Auto-refresh data
  useEffect(() => {
    if (!enabled || !autoRefresh) return;

    refreshData();
    const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [enabled, autoRefresh, refreshData]);

  // Format duration
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  if (!enabled || !analyticsData) return null;

  return (
    <>
      {/* Floating Analytics Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-24 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(!isVisible)}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center text-white"
          aria-label="Analytics Dashboard"
        >
          <BarChart3 className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Analytics Dashboard Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-24 right-6 z-40 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden ${
              isExpanded ? 'w-[500px] h-[600px]' : 'w-80 h-80'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <h3 className="font-semibold">Analytics Dashboard</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-full overflow-y-auto">
              {/* Timeframe Selector */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {(['1h', '24h', '7d', '30d'] as const).map((timeframe) => (
                    <button
                      key={timeframe}
                      onClick={() => setSelectedTimeframe(timeframe)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                        selectedTimeframe === timeframe
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
                <button
                  onClick={refreshData}
                  disabled={isLoading}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Total Visitors</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                    {formatNumber(analyticsData.totalVisitors)}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Conversions</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                    {formatNumber(analyticsData.totalConversions)}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Avg Session</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                    {formatDuration(analyticsData.averageSessionDuration)}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Real-time</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                    {analyticsData.realTimeUsers}
                  </div>
                </div>
              </div>

              {/* Conversion Funnel */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 dark:text-white">Conversion Funnel</h4>
                <div className="space-y-2">
                  {analyticsData.conversionFunnel.map((stage, index) => (
                    <div key={stage.stage} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {stage.stage}
                        </span>
                        <span className="text-sm text-gray-500">
                          {stage.rate.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${stage.rate}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{formatNumber(stage.visitors)} visitors</span>
                        <span>{formatNumber(stage.conversions)} conversions</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expanded View Content */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4"
                >
                  {/* Top Pages */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Top Pages</h4>
                    <div className="space-y-2">
                      {analyticsData.topPages.map((page, index) => (
                        <div key={page.page} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {page.page}
                          </span>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-500">{formatNumber(page.views)} views</span>
                            <span className="text-green-600">{formatNumber(page.conversions)} conversions</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Device & Location Breakdown */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 dark:text-white">Devices</h4>
                      {analyticsData.deviceBreakdown.map((device) => (
                        <div key={device.device} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{device.device}</span>
                          <span className="text-sm font-medium text-gray-800 dark:text-white">
                            {device.percentage.toFixed(1)}%
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 dark:text-white">Locations</h4>
                      {analyticsData.locationBreakdown.map((location) => (
                        <div key={location.location} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{location.location}</span>
                          <span className="text-sm font-medium text-gray-800 dark:text-white">
                            {location.percentage.toFixed(1)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};