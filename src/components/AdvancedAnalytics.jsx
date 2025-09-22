import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Advanced Analytics Dashboard Component
const AdvancedAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    conversionRate: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    realTimeUsers: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadAnalyticsData = async () => {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setAnalyticsData({
        pageViews: 125430,
        uniqueVisitors: 45620,
        conversionRate: 3.2,
        bounceRate: 28.5,
        avgSessionDuration: 4.2,
        topPages: [
          { page: '/', views: 45230, growth: 12.5 },
          { page: '/services', views: 32150, growth: 8.3 },
          { page: '/about', views: 18920, growth: -2.1 },
          { page: '/contact', views: 15680, growth: 15.7 }
        ],
        trafficSources: [
          { source: 'Organic Search', percentage: 45.2, visitors: 20620 },
          { source: 'Direct', percentage: 28.7, visitors: 13120 },
          { source: 'Social Media', percentage: 15.3, visitors: 6980 },
          { source: 'Referral', percentage: 10.8, visitors: 4900 }
        ],
        realTimeUsers: 23
      });
      
      setIsLoading(false);
    };

    loadAnalyticsData();
  }, []);

  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      const startCount = 0;
      const endCount = end;
      const increment = endCount / (duration / 16);

      const timer = setInterval(() => {
        startTime = startTime || Date.now();
        const progress = Math.min((Date.now() - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (endCount - startCount) + startCount);
        
        setCount(currentCount);
        
        if (progress >= 1) {
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights and comprehensive data analysis to drive your business forward
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={analyticsData.pageViews} />
            </div>
            <div className="text-gray-300">Page Views</div>
            <div className="text-green-400 text-sm mt-2">+12.5% from last month</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={analyticsData.uniqueVisitors} />
            </div>
            <div className="text-gray-300">Unique Visitors</div>
            <div className="text-green-400 text-sm mt-2">+8.3% from last month</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={analyticsData.conversionRate} suffix="%" />
            </div>
            <div className="text-gray-300">Conversion Rate</div>
            <div className="text-green-400 text-sm mt-2">+2.1% from last month</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={analyticsData.realTimeUsers} />
            </div>
            <div className="text-gray-300">Real-time Users</div>
            <div className="text-blue-400 text-sm mt-2">Live data</div>
          </motion.div>
        </div>

        {/* Charts and Data Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Top Pages</h3>
            <div className="space-y-4">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">{page.page}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-white font-semibold">
                      {page.views.toLocaleString()}
                    </span>
                    <span className={`text-sm ${
                      page.growth >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {page.growth >= 0 ? '+' : ''}{page.growth}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {analyticsData.trafficSources.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">{source.source}</span>
                    <span className="text-white font-semibold">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400">
                    {source.visitors.toLocaleString()} visitors
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Real-time Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Real-time Activity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <AnimatedCounter end={analyticsData.realTimeUsers} />
              </div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                <AnimatedCounter end={analyticsData.avgSessionDuration} suffix="m" />
              </div>
              <div className="text-gray-300">Avg. Session</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                <AnimatedCounter end={analyticsData.bounceRate} suffix="%" />
              </div>
              <div className="text-gray-300">Bounce Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedAnalytics;