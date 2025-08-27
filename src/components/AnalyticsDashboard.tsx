import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  Globe, 
  Smartphone,
  Monitor,
  BarChart3,
  PieChart,
  Activity,
  Zap
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ name: string; views: number; percentage: number }>;
  trafficSources: Array<{ source: string; percentage: number; color: string }>;
  deviceTypes: Array<{ device: string; percentage: number; icon: React.ReactNode }>;
}

export const AnalyticsDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: []
  });

  useEffect(() => {
    // Show dashboard after page load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulate real-time analytics data
    const interval = setInterval(() => {
      setAnalytics({
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
        bounceRate: Math.random() * 40 + 20,
        avgSessionDuration: Math.random() * 300 + 120,
        conversionRate: Math.random() * 8 + 2,
        topPages: [
          { name: 'Home', views: Math.floor(Math.random() * 5000) + 3000, percentage: 35 },
          { name: 'Services', views: Math.floor(Math.random() * 3000) + 2000, percentage: 25 },
          { name: 'About', views: Math.floor(Math.random() * 2000) + 1000, percentage: 20 },
          { name: 'Contact', views: Math.floor(Math.random() * 1500) + 800, percentage: 15 },
          { name: 'Blog', views: Math.floor(Math.random() * 1000) + 500, percentage: 5 }
        ],
        trafficSources: [
          { source: 'Direct', percentage: 40, color: '#22ddd2' },
          { source: 'Organic', percentage: 35, color: '#8c15e9' },
          { source: 'Social', percentage: 15, color: '#06b6d4' },
          { source: 'Referral', percentage: 10, color: '#10b981' }
        ],
        deviceTypes: [
          { device: 'Desktop', percentage: 65, icon: <Monitor className="w-4 h-4" /> },
          { device: 'Mobile', percentage: 30, icon: <Smartphone className="w-4 h-4" /> },
          { device: 'Tablet', percentage: 5, icon: <Monitor className="w-4 h-4" /> }
        ]
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-4 left-4 z-50"
    >
      <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-700/50 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-zinc-700/50">
          <div className="flex items-center justify-between">
            <h3 className="text-zion-cyan font-semibold text-sm flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Analytics
            </h3>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-zinc-400 hover:text-zion-cyan transition-colors"
              aria-label={isExpanded ? 'Collapse' : 'Expand'} analytics dashboard
            >
              {isExpanded ? <BarChart3 className="w-4 h-4" /> : <PieChart className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Compact View */}
        {!isExpanded && (
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <div className="text-lg font-bold text-white">{formatNumber(analytics.pageViews)}</div>
                <div className="text-xs text-zinc-400">Page Views</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">{formatNumber(analytics.uniqueVisitors)}</div>
                <div className="text-xs text-zinc-400">Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">{analytics.bounceRate.toFixed(1)}%</div>
                <div className="text-xs text-zinc-400">Bounce Rate</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">{formatDuration(analytics.avgSessionDuration)}</div>
                <div className="text-xs text-zinc-400">Avg Session</div>
              </div>
            </div>
          </div>
        )}

        {/* Expanded View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="border-t border-zinc-700/50"
            >
              <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-zinc-800/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-zion-cyan" />
                      <span className="text-xs text-zinc-300">Page Views</span>
                    </div>
                    <div className="text-lg font-bold text-white">{formatNumber(analytics.pageViews)}</div>
                  </div>
                  <div className="p-3 bg-zinc-800/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-zion-cyan" />
                      <span className="text-xs text-zinc-300">Unique Visitors</span>
                    </div>
                    <div className="text-lg font-bold text-white">{formatNumber(analytics.uniqueVisitors)}</div>
                  </div>
                  <div className="p-3 bg-zinc-800/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MousePointer className="w-4 h-4 text-zion-cyan" />
                      <span className="text-xs text-zinc-300">Bounce Rate</span>
                    </div>
                    <div className="text-lg font-bold text-white">{analytics.bounceRate.toFixed(1)}%</div>
                  </div>
                  <div className="p-3 bg-zinc-800/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                      <span className="text-xs text-zinc-300">Avg Session</span>
                    </div>
                    <div className="text-lg font-bold text-white">{formatDuration(analytics.avgSessionDuration)}</div>
                  </div>
                </div>

                {/* Top Pages */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-3">Top Pages</h4>
                  <div className="space-y-2">
                    {analytics.topPages.map((page, index) => (
                      <div key={page.name} className="flex items-center justify-between">
                        <span className="text-xs text-zinc-300">{page.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-zinc-700 rounded-full h-1.5">
                            <div 
                              className="h-1.5 bg-zion-cyan rounded-full transition-all duration-500"
                              style={{ width: `${page.percentage}%` }}
                            />
                          </div>
                          <span className="text-xs text-zinc-400 w-8 text-right">{page.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traffic Sources */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-3">Traffic Sources</h4>
                  <div className="space-y-2">
                    {analytics.trafficSources.map((source) => (
                      <div key={source.source} className="flex items-center justify-between">
                        <span className="text-xs text-zinc-300">{source.source}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-zinc-700 rounded-full h-1.5">
                            <div 
                              className="h-1.5 rounded-full transition-all duration-500"
                              style={{ width: `${source.percentage}%`, backgroundColor: source.color }}
                            />
                          </div>
                          <span className="text-xs text-zinc-400 w-8 text-right">{source.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Device Types */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-3">Device Types</h4>
                  <div className="space-y-2">
                    {analytics.deviceTypes.map((device) => (
                      <div key={device.device} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-zion-cyan">{device.icon}</span>
                          <span className="text-xs text-zinc-300">{device.device}</span>
                        </div>
                        <span className="text-xs text-zinc-400">{device.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversion Rate */}
                <div className="p-3 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />
                    <span className="text-sm font-medium text-zion-cyan">Conversion Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-zion-cyan">{analytics.conversionRate.toFixed(1)}%</div>
                  <div className="text-xs text-zinc-400">Goal completions per session</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
