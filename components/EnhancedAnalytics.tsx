import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Eye,
  MousePointer,
  Clock
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
  realTimeUsers: number;
}

const EnhancedAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    realTimeUsers: 0
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data
      setAnalyticsData({
        pageViews: 15420,
        uniqueVisitors: 8234,
        bounceRate: 32.5,
        avgSessionDuration: 245,
        topPages: [
          { page: "/", views: 6540 },
          { page: "/about", views: 2340 },
          { page: "/contact", views: 1890 },
          { page: "/services", views: 1560 },
          { page: "/technologies", views: 890 }
        ],
        trafficSources: [
          { source: "Direct", percentage: 45 },
          { source: "Google", percentage: 30 },
          { source: "Social Media", percentage: 15 },
          { source: "Referrals", percentage: 10 }
        ],
        deviceTypes: [
          { device: "Desktop", percentage: 48 },
          { device: "Mobile", percentage: 45 },
          { device: "Tablet", percentage: 7 }
        ],
        realTimeUsers: 23
      });
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedTimeRange]);

  useEffect(() => {
    fetchAnalyticsData();
  }, [fetchAnalyticsData]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Enhanced Analytics</h1>
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="bg-gray-800 border border-gray-600 rounded px-3 py-2"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <span className="text-gray-400">Data updated in real-time</span>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-400 text-sm mb-2">Page Views</h3>
                <p className="text-3xl font-bold">{analyticsData.pageViews.toLocaleString()}</p>
                <span className="text-green-400 text-sm">+12.5% from last period</span>
              </div>
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-400 text-sm mb-2">Unique Visitors</h3>
                <p className="text-3xl font-bold">{analyticsData.uniqueVisitors.toLocaleString()}</p>
                <span className="text-green-400 text-sm">+8.3% from last period</span>
              </div>
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-400 text-sm mb-2">Bounce Rate</h3>
                <p className="text-3xl font-bold">{analyticsData.bounceRate}%</p>
                <span className="text-red-400 text-sm">+2.1% from last period</span>
              </div>
              <MousePointer className="w-8 h-8 text-red-400" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-400 text-sm mb-2">Avg Session Duration</h3>
                <p className="text-3xl font-bold">
                  {Math.round(analyticsData.avgSessionDuration / 60)}m{" "}
                  {analyticsData.avgSessionDuration % 60}s
                </p>
                <span className="text-green-400 text-sm">+5.7% from last period</span>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </motion.div>

        {/* Real-time Users */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Real-time Activity</h3>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-2xl font-bold">{analyticsData.realTimeUsers}</span>
              <span className="text-gray-400">users online now</span>
            </div>
          </div>
        </motion.div>

        {/* Charts and Additional Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Top Pages */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Top Pages</h3>
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => (
                <div key={page.page} className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 text-sm">#{index + 1}</span>
                    <span className="font-medium">{page.page}</span>
                  </div>
                  <span className="text-blue-400 font-semibold">
                    {page.views.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>
            <div className="space-y-3">
              {analyticsData.trafficSources.map((source) => (
                <div key={source.source} className="flex justify-between items-center">
                  <span>{source.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">{source.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Types */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Device Types</h3>
            <div className="space-y-3">
              {analyticsData.deviceTypes.map((device) => (
                <div key={device.device} className="flex justify-between items-center">
                  <span>{device.device}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">{device.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;