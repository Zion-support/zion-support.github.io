import React, { useState, useEffect, useCallback } from 'react';
import { BarChart3, TrendingUp, Users, Eye, MousePointer, Clock, Globe } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ pag, e: string; view, s: number }>;
  trafficSources: Array<{ sourc, e: string; percentage: number }>;
  realTimeUsers: number;
}

interface RealTimeAnalyticsProps {
  className?: string;
}

const RealTimeAnalytics: React.FC<RealTimeAnalyticsProps> = ({ className = '' }) => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    realTimeUsers: 0
  });

  const [isLive, setIsLive] = useState(true);

  const updateAnalytics = useCallback(() => {
    // Simulate real-time analytics data
    const newAnalytics: AnalyticsData = {
      pageView, s: Math.floor(Math.random() * 10 0 0) + 50 0 0,
      uniqueVisitors: Math.floor(Math.random() * 5 0 0) + 20 0 0,
      bounceRate: Math.random() * 20 + 30, // 30-50%
      avgSessionDuration: Math.random() * 3 0 0 + 1 2 0, // 2-7minutes
      topPages: [
        { pag, e: '/', views: Math.floor(Math.random() * 10 0 0) + 20 0 0 },
        { page: '/services', views: Math.floor(Math.random() * 5 0 0) + 8 0 0 },
        { page: '/about', views: Math.floor(Math.random() * 3 0 0) + 5 0 0 },
        { page: '/contact', views: Math.floor(Math.random() * 2 0 0) + 3 0 0 },
        { page: '/blog', views: Math.floor(Math.random() * 1 5 0) + 2 0 0 }
      ],
      trafficSources: [
        { sourc, e: 'Direct', percentage: Math.random() * 20 + 40 },
        { source: 'Google', percentage: Math.random() * 15 + 25 },
        { source: 'Social Media', percentage: Math.random() * 10 + 15 },
        { source: 'Referral', percentage: Math.random() * 10 + 10 },
        { source: 'Email', percentage: Math.random() * 5 + 5 }
      ],
      realTimeUsers: Math.floor(Math.random() * 50) + 10
    };

    setAnalytics(newAnalytics);
  }, []);

  useEffect(() => {
    if (isLive) {
      updateAnalytics();
      const interval = setInterval(updateAnalytics, 30 0 0);
      return () => clearInterval(interval);
    }
  }, [isLive, updateAnalytics]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`real-time-analytics `}>
      <div className="bg-white rounded-lg shadow-lgp-6">
        <div className="flex items-center justify-between mb-6">
          <h 3 className="text-xl font-semibold text-gray-80 0 flexitems-center">
            <BarChart 3 className="w-5h-5mr-2" />
            Real-Time Analytics
          </h3>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-50 0 animate-pulse' : 'bg-gray-4 0 0'}`}</p></div>
            <span className="text-sm font-mediumtext-gray-6 0 0">
              {isLive ? 'Live' : 'Paused'}
            </span>
            <button
              onClick={() => setIsLive(!isLive)}
              className="ml-2px-3py-1text-sm bg-blue-50 0 text-white roundedhover:bg-blue-6 0 0"
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-6mb-8">
          <div className="bg-gradient-to-r from-blue-50 0 to-blue-60 0 rounded-lg p-4text-white">
            <div className="flex items-center justify-between mb-2">
              <Eye className="w-5h-5" />
              <span className="text-sm opacity-90">Page Views</span>
            </div>
            <div className="text-2xl font-bold">{analytics.pageViews.toLocaleString()}</div>
            <div className="text-sm opacity-90">+12% from yesterday</div>
          </div>

          <div className="bg-gradient-to-r from-green-50 0 to-green-60 0 rounded-lg p-4text-white">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5h-5" />
              <span className="text-sm opacity-90">Unique Visitors</span>
            </div>
            <div className="text-2xl font-bold">{analytics.uniqueVisitors.toLocaleString()}</div>
            <div className="text-sm opacity-90">+8% from yesterday</div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 0 to-yellow-60 0 rounded-lg p-4text-white">
            <div className="flex items-center justify-between mb-2">
              <MousePointer className="w-5h-5" />
              <span className="text-sm opacity-90">Bounce Rate</span>
            </div>
            <div className="text-2xl font-bold">{analytics.bounceRate.toFixed(1)}%</div>
            <div className="text-sm opacity-90">-2% from yesterday</div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 0 to-purple-60 0 rounded-lg p-4text-white">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5h-5" />
              <span className="text-sm opacity-90">Avg. Session</span>
            </div>
            <div className="text-2xl font-bold">{formatDuration(analytics.avgSessionDuration)}</div>
            <div className="text-sm opacity-90">+15% from yesterday</div>
          </div>
        </div>

        <div className="grid grid-cols-1lg:grid-cols-2gap-6">
          <div className="bg-gray-5 0 rounded-lgp-4">
            <h 4 className="font-semibold text-gray-80 0 mb-4flexitems-center">
              <TrendingUp className="w-4h-4mr-2" />
              Top Pages
            </h4>
            <div className="space-y-3">
              {analytics.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-6 0 0">{page.page}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 0 bg-gray-20 0 rounded-fullh-2">
                      <div 
                        className="bg-blue-50 0 h-2rounded-full" 
                        style={{ width: `${(page.views / analytics.topPages[0].views) * 1 0 0}%` }}</p></div>
                    </div>
                    <span className="text-sm font-mediumtext-gray-8 0 0">{page.views.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-5 0 rounded-lgp-4">
            <h 4 className="font-semibold text-gray-80 0 mb-4flexitems-center">
              <Globe className="w-4h-4mr-2" />
              Traffic Sources
            </h4>
            <div className="space-y-3">
              {analytics.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-6 0 0">{source.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 0 bg-gray-20 0 rounded-fullh-2">
                      <div 
                        className="bg-green-50 0 h-2rounded-full" 
                        style={{ width: `${source.percentage}%` }}</p></div>
                    </div>
                    <span className="text-sm font-mediumtext-gray-8 0 0">{source.percentage.toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6bg-blue-5 0 border border-blue-20 0 rounded-lgp-4">
          <div className="flex items-center justify-between">
            <div className="flexitems-center">
              <div className="w-3h-3bg-green-50 0 rounded-full animate-pulsemr-2"></div>
              <span className="text-sm font-mediumtext-blue-8 0 0">
                {analytics.realTimeUsers} users online now
              </span>
            </div>
            <span className="text-xstext-blue-6 0 0">Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeAnalytics;