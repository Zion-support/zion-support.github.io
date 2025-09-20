'use client';

import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  conversionRate: number;
}

const ModernAnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    conversionRate: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate analytics data fetching
    const fetchAnalytics = () => {
      setTimeout(() => {
        setAnalyticsData({
          pageViews: 125847,
          uniqueVisitors: 89234,
          bounceRate: 32.5,
          avgSessionDuration: 245,
          topPages: [
            { page: '/ai-2025', views: 15234 },
            { page: '/automation', views: 12456 },
            { page: '/tools/ai-roi-calculator', views: 9876 },
            { page: '/services', views: 8765 },
            { page: '/contact', views: 6543 }
          ],
          conversionRate: 4.2
        });
        setLoading(false);
      }, 1000);
    };

    fetchAnalytics();
  }, []);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8 rounded-xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded mb-6 w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-8 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Real-Time Analytics Dashboard</h2>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Page Views</h3>
            <p className="text-3xl font-bold text-blue-400">{formatNumber(analyticsData.pageViews)}</p>
            <p className="text-sm text-green-400 mt-2">↗ +12.5% vs last month</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Unique Visitors</h3>
            <p className="text-3xl font-bold text-purple-400">{formatNumber(analyticsData.uniqueVisitors)}</p>
            <p className="text-sm text-green-400 mt-2">↗ +8.3% vs last month</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Bounce Rate</h3>
            <p className="text-3xl font-bold text-yellow-400">{analyticsData.bounceRate}%</p>
            <p className="text-sm text-green-400 mt-2">↘ -2.1% vs last month</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Avg. Session</h3>
            <p className="text-3xl font-bold text-indigo-400">{formatDuration(analyticsData.avgSessionDuration)}</p>
            <p className="text-sm text-green-400 mt-2">↗ +15.7% vs last month</p>
          </div>
        </div>

        {/* Top Pages and Conversion Rate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Top Performing Pages</h3>
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-400">#{index + 1}</span>
                    <span className="text-sm text-white">{page.page}</span>
                  </div>
                  <span className="text-sm font-bold text-blue-400">{formatNumber(page.views)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Conversion Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300">Conversion Rate</span>
                  <span className="text-sm font-bold text-green-400">{analyticsData.conversionRate}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${analyticsData.conversionRate * 10}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-300 mb-2">Key Insights:</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• AI tools pages have 23% higher conversion</li>
                  <li>• Mobile traffic increased by 34%</li>
                  <li>• Average deal size: $15,750</li>
                  <li>• Customer satisfaction: 94.5%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to see these results for your business?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
            Get Your Free Analytics Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernAnalyticsDashboard;