import React, { useState, useEffect, useCallback } from 'react';
import { BarChart3, TrendingUp, Users, Eye, MousePointer, Clock, Globe } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
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
      pageViews: Math.floor(Math.random() * 1000) + 5000,
      uniqueVisitors: Math.floor(Math.random() * 500) + 2000,
      bounceRate: Math.random() * 20 + 30, // 30-50%
      avgSessionDuration: Math.random() * 300 + 120, // 2-7 minutes
      topPages: [
        { page: '/', views: Math.floor(Math.random() * 1000) + 2000 },
        { page: '/services', views: Math.floor(Math.random() * 500) + 800 },
        { page: '/about', views: Math.floor(Math.random() * 300) + 500 },
        { page: '/contact', views: Math.floor(Math.random() * 200) + 300 },
        { page: '/blog', views: Math.floor(Math.random() * 150) + 200 }
      ],
      trafficSources: [
        { source: 'Direct', percentage: Math.random() * 20 + 40 },
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
      const interval = setInterval(updateAnalytics, 3000);
      return () => clearInterval(interval);
    }
  }, [isLive, updateAnalytics]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`real-time-analytics ${className}`}>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Real-Time Analytics
          </h3>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-sm font-medium text-gray-600">
              {isLive ? 'Live' : 'Paused'}
            </span>
            <button
              onClick={() => setIsLive(!isLive)}
              className="ml-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {isLive ? 'Pause' : 'Resume'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Eye className="w-5 h-5" />
              <span className="text-sm opacity-90">Page Views</span>
            </div>
            <div className="text-2xl font-bold">{analytics.pageViews.toLocaleString()}</div>
            <div className="text-sm opacity-90">+12% from yesterday</div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5" />
              <span className="text-sm opacity-90">Unique Visitors</span>
            </div>
            <div className="text-2xl font-bold">{analytics.uniqueVisitors.toLocaleString()}</div>
            <div className="text-sm opacity-90">+8% from yesterday</div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <MousePointer className="w-5 h-5" />
              <span className="text-sm opacity-90">Bounce Rate</span>
            </div>
            <div className="text-2xl font-bold">{analytics.bounceRate.toFixed(1)}%</div>
            <div className="text-sm opacity-90">-2% from yesterday</div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm opacity-90">Avg. Session</span>
            </div>
            <div className="text-2xl font-bold">{formatDuration(analytics.avgSessionDuration)}</div>
            <div className="text-sm opacity-90">+15% from yesterday</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Top Pages
            </h4>
            <div className="space-y-3">
              {analytics.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{page.page}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(page.views / analytics.topPages[0].views) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800">{page.views.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Traffic Sources
            </h4>
            <div className="space-y-3">
              {analytics.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{source.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800">{source.percentage.toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-medium text-blue-800">
                {analytics.realTimeUsers} users online now
              </span>
            </div>
            <span className="text-xs text-blue-600">Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeAnalytics;