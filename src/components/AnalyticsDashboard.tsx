import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  Activity,
  Globe,
  Smartphone,
  Monitor,
  MapPin,
  Calendar,
  Download,
  Share2,
  Filter,
  RefreshCw,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number; change: number }>;
  trafficSources: Array<{ source: string; percentage: number; color: string }>;
  deviceTypes: Array<{ device: string; percentage: number; color: string }>;
  geographicData: Array<{ country: string; visitors: number; change: number }>;
  hourlyTraffic: Array<{ hour: number; visitors: number }>;
  weeklyTrends: Array<{ week: string; visitors: number; pageViews: number }>;
}

interface AnalyticsDashboardProps {
  showPanel?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export function AnalyticsDashboard({
  showPanel = true,
  autoRefresh = true,
  refreshInterval = 30000
}: AnalyticsDashboardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeRange, setTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    geographicData: [],
    hourlyTraffic: [],
    weeklyTrends: []
  });

  // Mock data generation for demonstration
  const generateMockData = useCallback(() => {
    const now = new Date();
    const mockData: AnalyticsData = {
      pageViews: Math.floor(Math.random() * 10000) + 5000,
      uniqueVisitors: Math.floor(Math.random() * 3000) + 1500,
      bounceRate: Math.random() * 0.4 + 0.3, // 30-70%
      avgSessionDuration: Math.random() * 300 + 120, // 2-7 minutes
      topPages: [
        { page: '/', views: Math.floor(Math.random() * 5000) + 2000, change: Math.random() * 40 - 20 },
        { page: '/services', views: Math.floor(Math.random() * 3000) + 1500, change: Math.random() * 40 - 20 },
        { page: '/about', views: Math.floor(Math.random() * 2000) + 1000, change: Math.random() * 40 - 20 },
        { page: '/contact', views: Math.floor(Math.random() * 1500) + 800, change: Math.random() * 40 - 20 },
        { page: '/ai-services', views: Math.floor(Math.random() * 1200) + 600, change: Math.random() * 40 - 20 }
      ],
      trafficSources: [
        { source: 'Direct', percentage: 35, color: '#3b82f6' },
        { source: 'Organic Search', percentage: 45, color: '#10b981' },
        { source: 'Social Media', percentage: 15, color: '#f59e0b' },
        { source: 'Referral', percentage: 5, color: '#ef4444' }
      ],
      deviceTypes: [
        { device: 'Desktop', percentage: 60, color: '#3b82f6' },
        { device: 'Mobile', percentage: 35, color: '#10b981' },
        { device: 'Tablet', percentage: 5, color: '#f59e0b' }
      ],
      geographicData: [
        { country: 'United States', visitors: Math.floor(Math.random() * 2000) + 1000, change: Math.random() * 40 - 20 },
        { country: 'United Kingdom', visitors: Math.floor(Math.random() * 800) + 400, change: Math.random() * 40 - 20 },
        { country: 'Canada', visitors: Math.floor(Math.random() * 600) + 300, change: Math.random() * 40 - 20 },
        { country: 'Germany', visitors: Math.floor(Math.random() * 500) + 250, change: Math.random() * 40 - 20 },
        { country: 'Australia', visitors: Math.floor(Math.random() * 400) + 200, change: Math.random() * 40 - 20 }
      ],
      hourlyTraffic: Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        visitors: Math.floor(Math.random() * 200) + 50
      })),
      weeklyTrends: Array.from({ length: 7 }, (_, i) => ({
        week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
        visitors: Math.floor(Math.random() * 1000) + 500,
        pageViews: Math.floor(Math.random() * 3000) + 1500
      }))
    };

    setAnalyticsData(mockData);
  }, []);

  // Load analytics data
  const loadAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      generateMockData();
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [generateMockData]);

  // Auto-refresh data
  useEffect(() => {
    if (!autoRefresh) return;

    const intervalId = setInterval(loadAnalyticsData, refreshInterval);
    return () => clearInterval(intervalId);
  }, [autoRefresh, refreshInterval, loadAnalyticsData]);

  // Initial data load
  useEffect(() => {
    loadAnalyticsData();
  }, [loadAnalyticsData]);

  // Format numbers with appropriate units
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  // Format percentage
  const formatPercentage = (num: number): string => {
    return `${(num * 100).toFixed(1)}%`;
  };

  // Format duration
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Get change indicator
  const getChangeIndicator = (change: number) => {
    if (change > 0) {
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    } else if (change < 0) {
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    }
    return null;
  };

  if (!showPanel) return null;

  return (
    <>
      {/* Analytics Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark p-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2"
        aria-label="Analytics dashboard"
        aria-expanded={isOpen}
      >
        <BarChart3 className="w-6 h-6" />
      </motion.button>

      {/* Analytics Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            className="fixed top-0 left-0 h-full w-96 bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-zion-cyan" />
                  <span>Analytics</span>
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors"
                    title={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-zion-cyan" /> : <ChevronDown className="w-4 h-4 text-zion-cyan" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors"
                    aria-label="Close analytics panel"
                  >
                    <X className="w-4 h-4 text-zion-slate-light" />
                  </button>
                </div>
              </div>

              {/* Time Range Selector */}
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-zion-cyan" />
                  <span className="text-sm font-medium text-zion-slate-light">Time Range</span>
                </div>
                <div className="flex space-x-1 mt-2">
                  {(['1h', '24h', '7d', '30d'] as const).map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                        timeRange === range
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate-light/20 text-zion-slate-light hover:bg-zion-slate-light/30'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-cyan/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="w-4 h-4 text-zion-cyan" />
                    <span className="text-xs text-zion-slate-light">Page Views</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{formatNumber(analyticsData.pageViews)}</div>
                </div>
                
                <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-cyan/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span className="text-xs text-zion-slate-light">Unique Visitors</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{formatNumber(analyticsData.uniqueVisitors)}</div>
                </div>
                
                <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-cyan/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <MousePointer className="w-4 h-4 text-zion-cyan" />
                    <span className="text-xs text-zion-slate-light">Bounce Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{formatPercentage(analyticsData.bounceRate)}</div>
                </div>
                
                <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-cyan/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-zion-cyan" />
                    <span className="text-xs text-zion-slate-light">Avg Session</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{formatDuration(analyticsData.avgSessionDuration)}</div>
                </div>
              </div>

              {/* Weekly Trends Chart */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Weekly Trends</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsData.weeklyTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="week" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1f2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="visitors" 
                        stroke="#06b6d4" 
                        fill="#06b6d4" 
                        fillOpacity={0.3} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Traffic Sources</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={analyticsData.trafficSources}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="percentage"
                      >
                        {analyticsData.trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1f2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {analyticsData.trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: source.color }}
                      />
                      <span className="text-xs text-zion-slate-light">{source.source}</span>
                      <span className="text-xs text-white font-medium">{source.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Pages */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Top Pages</h3>
                <div className="space-y-3">
                  {analyticsData.topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-zion-slate-light/10 rounded-lg border border-zion-cyan/20">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-zion-cyan">#{index + 1}</span>
                        <span className="text-sm text-zion-slate-light">{page.page}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-white font-medium">{formatNumber(page.views)}</span>
                        <div className="flex items-center space-x-1">
                          {getChangeIndicator(page.change)}
                          <span className={`text-xs ${page.change > 0 ? 'text-green-500' : page.change < 0 ? 'text-red-500' : 'text-zion-slate-light'}`}>
                            {Math.abs(page.change).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geographic Data */}
              {isExpanded && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-zion-cyan" />
                    <span>Geographic Distribution</span>
                  </h3>
                  <div className="space-y-3">
                    {analyticsData.geographicData.map((geo, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-zion-slate-light/10 rounded-lg border border-zion-cyan/20">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-zion-slate-light">{geo.country}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-white font-medium">{formatNumber(geo.visitors)}</span>
                          <div className="flex items-center space-x-1">
                            {getChangeIndicator(geo.change)}
                            <span className={`text-xs ${geo.change > 0 ? 'text-green-500' : geo.change < 0 ? 'text-red-500' : 'text-zion-slate-light'}`}>
                              {Math.abs(geo.change).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Device Types */}
              {isExpanded && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Monitor className="w-5 h-5 text-zion-cyan" />
                    <span>Device Types</span>
                  </h3>
                  <div className="space-y-3">
                    {analyticsData.deviceTypes.map((device, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-zion-slate-light/10 rounded-lg border border-zion-cyan/20">
                        <div className="flex items-center space-x-3">
                          {device.device === 'Desktop' ? <Monitor className="w-4 h-4 text-zion-cyan" /> :
                           device.device === 'Mobile' ? <Smartphone className="w-4 h-4 text-zion-cyan" /> :
                           <Monitor className="w-4 h-4 text-zion-cyan" />}
                          <span className="text-sm text-zion-slate-light">{device.device}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-zion-slate-light/20 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full transition-all duration-300"
                              style={{ width: `${device.percentage}%`, backgroundColor: device.color }}
                            />
                          </div>
                          <span className="text-sm text-white font-medium">{device.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={loadAnalyticsData}
                  disabled={isLoading}
                  className="flex-1 py-2 px-4 bg-zion-cyan/20 hover:bg-zion-cyan/30 text-zion-cyan border border-zion-cyan/30 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>{isLoading ? 'Loading...' : 'Refresh'}</span>
                </button>
                
                <button
                  onClick={() => {/* Export functionality */}}
                  className="py-2 px-4 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border border-zion-purple/30 rounded-lg transition-colors"
                  title="Export data"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {/* Last Update */}
              <div className="mt-4 text-center">
                <span className="text-xs text-zion-slate-light">
                  Last updated: {lastUpdate.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}