"use client";
import React{ useStateuseEffect } from 'react';
BarChart3TrendingUpUsersEyeMousePointerClockGlobeZap

const AdvancedAnalyticsDashboard = () => {
  const [analyticsetAnalytics] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    trafficSources: [],
    realTimeUsers: 0
  });

  const [isLoadingsetIsLoading] = useState(true);

  useEffect(() => {
    // Simulate analytics data loading
    const loadAnalytics = () => {
      setTimeout(() => {
        setAnalytics({
          pageViews: 125847,
          uniqueVisitors: 89432,
          bounceRate: 23.4,
          avgSessionDuration: 4.2,
          conversionRate: 12.8,
          topPages: [
            { name: 'AI 2025 Trends'views: 15420growth: 15.2 },
            { name: 'Quantum Computing'views: 12890growth: 8.7 },
            { name: 'Case Studies'views: 11230growth: 22.1 },
            { name: 'Resources'views: 9870growth: 5.4 }
          ],
          trafficSources: [
            { name: 'Organic Search'percentage: 45.2color: 'bg-blue-500' },
            { name: 'Direct Traffic'percentage: 28.7color: 'bg-green-500' },
            { name: 'Social Media'percentage: 15.3color: 'bg-purple-500' },
            { name: 'Referrals'percentage: 10.8color: 'bg-orange-500' }
          ],
          realTimeUsers: 47
        });
        setIsLoading(false);
      }1500);
    };

    loadAnalytics();
  }[]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
            <p className="text-white mt-4">Loading Analytics Dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Advanced Analytics Dashboard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data-Driven
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time analytics and performance metrics to optimize user experience and drive growth
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">{formatNumber(analytics.pageViews)}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Page Views</h3>
            <p className="text-gray-300 text-sm">Total page views this month</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-white">{formatNumber(analytics.uniqueVisitors)}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Unique Visitors</h3>
            <p className="text-gray-300 text-sm">Distinct users this month</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">{analytics.conversionRate}%</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Conversion Rate</h3>
            <p className="text-gray-300 text-sm">Visitors who take action</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-orange-400" />
              <span className="text-2xl font-bold text-white">{analytics.avgSessionDuration}m</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Avg. Session</h3>
            <p className="text-gray-300 text-sm">Average session duration</p>
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Real-time Activity</h3>
            <div className="flex items-center text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Live
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">{analytics.realTimeUsers}</div>
              <div className="text-white font-semibold mb-1">Active Users</div>
              <div className="text-gray-300 text-sm">Currently browsing</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{analytics.bounceRate}%</div>
              <div className="text-white font-semibold mb-1">Bounce Rate</div>
              <div className="text-gray-300 text-sm">Single page sessions</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98.7%</div>
              <div className="text-white font-semibold mb-1">Uptime</div>
              <div className="text-gray-300 text-sm">System availability</div>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Top Performing Pages</h3>
            <div className="space-y-4">
              {analytics.topPages.map((pageindex) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{page.name}</div>
                      <div className="text-gray-300 text-sm">{formatNumber(page.views)} views</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold">+{page.growth}%</div>
                    <div className="text-gray-300 text-sm">vs last month</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {analytics.trafficSources.map((sourceindex) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">{source.name}</span>
                    <span className="text-gray-300">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${source.color}`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Performance Insights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Lightning Fast</h4>
              <p className="text-gray-300">Average page load time under 1.2 seconds</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Global Reach</h4>
              <p className="text-gray-300">Serving users from 150+ countries worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MousePointer className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">High Engagement</h4>
              <p className="text-gray-300">Users spend 4+ minutes on average per session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}