
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnalyticsData {
  visitors: number;
  pageViews: number;
  conversionRate: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
}

export const AdvancedAnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>({
    visitors: 0,
    pageViews: 0,
    conversionRate: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: []
  });

  useEffect(() => {
    // Simulate data loading
    setData({
      visitors: 15420,
      pageViews: 89230,
      conversionRate: 3.2,
      bounceRate: 45.8,
      avgSessionDuration: 4.2,
      topPages: [
        { page: '/services', views: 12340 },
        { page: '/about', views: 8920 },
        { page: '/contact', views: 6780 }
      ],
      trafficSources: [
        { source: 'Organic Search', percentage: 45 },
        { source: 'Direct', percentage: 30 },
        { source: 'Social Media', percentage: 15 },
        { source: 'Referral', percentage: 10 }
      ]
    });
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Advanced Analytics Dashboard</h1>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Visitors', value: data.visitors.toLocaleString(), color: 'bg-blue-500' },
            { label: 'Page Views', value: data.pageViews.toLocaleString(), color: 'bg-green-500' },
            { label: 'Conversion Rate', value: \`\${data.conversionRate}%\`, color: 'bg-purple-500' },
            { label: 'Bounce Rate', value: \`\${data.bounceRate}%\`, color: 'bg-red-500' }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={\`\${metric.color} p-6 rounded-lg text-white\`}
            >
              <h3 className="text-lg font-semibold">{metric.label}</h3>
              <p className="text-3xl font-bold mt-2">{metric.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts and Data Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Top Pages</h2>
            <div className="space-y-3">
              {data.topPages.map((page, index) => (
                <div key={page.page} className="flex justify-between items-center">
                  <span className="text-gray-300">{page.page}</span>
                  <span className="text-white font-semibold">{page.views.toLocaleString()} views</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Traffic Sources</h2>
            <div className="space-y-3">
              {data.trafficSources.map((source, index) => (
                <div key={source.source} className="flex justify-between items-center">
                  <span className="text-gray-300">{source.source}</span>
                  <span className="text-white font-semibold">{source.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedAnalyticsDashboard;
