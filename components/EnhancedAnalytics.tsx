import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
<<<<<<< HEAD
  Users, Eye, MousePointer, Clock
} from 'lucide-react';

=======
<<<<<<< HEAD
  Users, Eye, MousePointer, Clock} from 'lucide-react';
=======
<<<<<<< HEAD
  Users, Eye, MousePointer, Clock} from 'lucide-react';
=======
  Users,
  Eye,
  MousePointer,
  Clock'
} from 'lucide-react';

>>>>>>> main
>>>>>>> main
>>>>>>> main
interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
<<<<<<< HEAD
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
  realTimeUsers: number;
}
=======
<<<<<<< HEAD
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
=======
  topPages: Array<{ pag,
    e: string; view,
    s: number }>;
  trafficSources: Array<{ sourc,
    e: string; percentag,
    e: number }>;
  deviceTypes: Array<{ devic,
    e: string; percentag,
    e: number }>;
>>>>>>> main
  realTimeUsers: number;
}

>>>>>>> main
const EnhancedAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
<<<<<<< HEAD
=======
<<<<<<< HEAD
    pageViews: 0, uniqueVisitors: 0,
    bounceRate: 0, avgSessionDuration: 0,
    topPages: [], trafficSources: [], deviceTypes: [], realTimeUsers: 0})
=======
<<<<<<< HEAD
    pageViews: 0, uniqueVisitors: 0,
    bounceRate: 0, avgSessionDuration: 0,
    topPages: [], trafficSources: [], deviceTypes: [], realTimeUsers: 0})
=======
>>>>>>> main
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    realTimeUsers: 0
  });
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
=======
  
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAnalyticsData({
<<<<<<< HEAD
        pageViews: 12543,
        uniqueVisitors: 8932,
        bounceRate: 42.5,
        avgSessionDuration: 3.2,
        topPages: [
          { page: '/', views: 3421 },
          { page: '/services', views: 2156 },
          { page: '/about', views: 1892 },
          { page: '/contact', views: 1234 }
        ],
        trafficSources: [
          { source: 'Organic Search', percentage: 45 },
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
        pageViews: 12543, uniqueVisitors: 8932,
        bounceRate: 42.5, avgSessionDuration: 3.2,
        topPages: [{ page: '/', views: 3421 },
          { page: '/services', views: 2156 },
          { page: '/about', views: 1892 },
          { page: '/contact', views: 1234 }
        ], trafficSources: [{ source: 'Organic Search', percentage: 45 }, { source: 'Direct', percentage: 30 }, { source: 'Social Media', percentage: 15 }, { source: 'Referral', percentage: 10 }
        ], deviceTypes: [{ device: 'Desktop', percentage: 55 }, { device: 'Mobile', percentage: 35 }, { device: 'Tablet', percentage: 10 }
        ], realTimeUsers: 23})} catch (error) {
      console.error('Error fetching analytics data: ', error)} finally {
      setIsLoading(false)}
<<<<<<< HEAD
  }, [selectedTimeRange])
=======
<<<<<<< HEAD
=======
=======
        pageViews: 12543,
        uniqueVisitors: 8932,
        bounceRate: 42.5,
        avgSessionDuration: 3.2,
        topPages: ['
          { pag,
    e: '/', views: 3421 },
          { page: '/services', views: 2156 },
          { page: '/about', views: 1892 },
          { page: '/contact', views: 1234 }
        ],
        trafficSources: ['
          { sourc,
    e: 'Organic Search', percentage: 45 },
>>>>>>> main
          { source: 'Direct', percentage: 30 },
          { source: 'Social Media', percentage: 15 },
          { source: 'Referral', percentage: 10 }
        ],
<<<<<<< HEAD
        deviceTypes: [
          { device: 'Desktop', percentage: 55 },
          { device: 'Mobile', percentage: 35 },
          { device: 'Tablet', percentage: 10 }
        ],
        realTimeUsers: 23
      });
    } catch (error) {
      console.error('Error fetching analytics data: ', error);
    } finally {
      setIsLoading(false);
    }
=======
        deviceTypes: ['
          { devic,
    e: 'Desktop', percentage: 55 },
          { device: 'Mobile', percentage: 35 },
          { device: 'Tablet', percentage: 10 }
=======
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
>>>>>>> main
        ],
        realTimeUsers: 23
      });
    } catch (error) {'
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setIsLoading(false);
    }
>>>>>>> main
>>>>>>> main
>>>>>>> main
  }, [selectedTimeRange]);

>>>>>>> main
  useEffect(() => {
    fetchAnalyticsData();
  }, [fetchAnalyticsData]);

<<<<<<< HEAD
  const StatCard: React.FC<{
    title: string;
    value: string | number;
    icon: React.ReactNode;
    change?: number;
    color?: string;
  }> = ({ title, value, icon, change, color = 'blue' }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change !== undefined && (
            <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '+' : ''}{change}% from last period
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
=======
  if (isLoading) {
<<<<<<< HEAD
    return ('
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">"
        <div className="text-center">"
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>"
=======
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
>>>>>>> main
          <p className="text-gray-300">Loading analytics...</p>
<<<<<<< HEAD
        </div>
      </div>
    );
  }

  return ("
    <div className="min-h-screen bg-gray-900 text-white p-6">"
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}"
          className="mb-8"
        >"
          <h1 className="text-4xl font-bold mb-4">Enhanced Analytics Dashboard</h1>"
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}"
              className="bg-gray-800 border border-gray-600 rounded px-3 py-2"
            >"
              <option value="24h">Last 24 Hours</option>"
              <option value="7d">Last 7 Days</option>"
              <option value="30d">Last 30 Days</option>"
              <option value="90d">Last 90 Days</option>
            </select>"
            <span className="text-gray-400">Data updated in real-time</span>
          </div>
        </motion.div>

=======
=======
      <div className='flex items-center justify-center h-64'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
>>>>>>> main
      </div>
<<<<<<< HEAD
    )}
  return(
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-gray-900'>Analytics Dashboard</h1>
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
=======
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
>>>>>>> main
        >
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>
<<<<<<< HEAD

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Page Views"
=======
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
<<<<<<< HEAD
        <StatCard
          title='Page Views'
=======
        <StatCard;
          title='Page Views'
>>>>>>> main
>>>>>>> main
          value={analyticsData.pageViews.toLocaleString()}
          icon={<Eye className="w-6 h-6 text-blue-600" />}
          change={12.5}
          color="blue"
        />
<<<<<<< HEAD
        <StatCard
          title='Unique Visitors'
=======
<<<<<<< HEAD
        <StatCard
          title="Unique Visitors"
=======
        <StatCard;
          title='Unique Visitors'
>>>>>>> main
>>>>>>> main
          value={analyticsData.uniqueVisitors.toLocaleString()}
          icon={<Users className="w-6 h-6 text-green-600" />}
          change={8.3}
          color="green"
        />
<<<<<<< HEAD
        <StatCard
          title='Bounce Rate'
=======
<<<<<<< HEAD
        <StatCard
          title="Bounce Rate"
=======
        <StatCard;
          title='Bounce Rate'
>>>>>>> main
>>>>>>> main
          value={`${analyticsData.bounceRate}%`}
          icon={<MousePointer className="w-6 h-6 text-orange-600" />}
          change={-2.1}
          color="orange"
        />
<<<<<<< HEAD
        <StatCard
          title='Avg. Session Duration'
=======
<<<<<<< HEAD
        <StatCard
          title="Avg. Session Duration"
=======
        <StatCard;
          title='Avg. Session Duration'
>>>>>>> main
>>>>>>> main
          value={`${analyticsData.avgSessionDuration}m`}
          icon={<Clock className="w-6 h-6 text-purple-600" />}
          change={5.7}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
          <div className="space-y-3">
            {analyticsData.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600">{page.page}</span>
                <span className="font-medium">{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {analyticsData.trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600">{source.source}</span>
                <span className="font-medium">{source.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {analyticsData.deviceTypes.map((device, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{device.percentage}%</div>
              <div className="text-sm text-gray-600">{device.device}</div>
            </div>
          ))}
>>>>>>> main
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

>>>>>>> main
        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}"
          className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-6 mb-8"
        >"
          <div className="bg-gray-800 rounded-lg p-6">"
            <div className="flex items-center justify-between">
              <div>"
                <h3 className="text-gray-400 text-sm mb-2">Page Views</h3>"
                <p className="text-3xl font-bold">{analyticsData.pageViews.toLocaleString()}</p>"
                <span className="text-green-400 text-sm">+12.5% from last period</span>
              </div>"
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
          </div>
"
          <div className="bg-gray-800 rounded-lg p-6">"
            <div className="flex items-center justify-between">
              <div>"
                <h3 className="text-gray-400 text-sm mb-2">Unique Visitors</h3>"
                <p className="text-3xl font-bold">{analyticsData.uniqueVisitors.toLocaleString()}</p>"
                <span className="text-green-400 text-sm">+8.3% from last period</span>
              </div>"
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </div>
"
          <div className="bg-gray-800 rounded-lg p-6">"
            <div className="flex items-center justify-between">
              <div>"
                <h3 className="text-gray-400 text-sm mb-2">Bounce Rate</h3>"
                <p className="text-3xl font-bold">{analyticsData.bounceRate}%</p>"
                <span className="text-red-400 text-sm">+2.1% from last period</span>
              </div>"
              <MousePointer className="w-8 h-8 text-red-400" />
            </div>
          </div>
"
          <div className="bg-gray-800 rounded-lg p-6">"
            <div className="flex items-center justify-between">
<<<<<<< HEAD
              <div>"
                <h3 className="text-gray-400 text-sm mb-2">Avg Session Duration</h3>"
                <p className="text-3xl font-bold">{analyticsData.avgSessionDuration}m</p>"
=======
              <div>
                <h3 className="text-gray-400 text-sm mb-2">Avg Session Duration</h3>
<<<<<<< HEAD
                <p className="text-3xl font-bold">{analyticsData.avgSessionDuration}m</p>
=======
                <p className="text-3xl font-bold">
                  {Math.round(analyticsData.avgSessionDuration / 60)}m{" "}
                  {analyticsData.avgSessionDuration % 60}s
                </p>
>>>>>>> main
>>>>>>> main
                <span className="text-green-400 text-sm">+5.7% from last period</span>
              </div>"
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </motion.div>

        {/* Real-time Users */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ delay: 0.2 }}"
=======
          transition={{ delay: 0.2 }}
<<<<<<< HEAD
>>>>>>> main
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-8"
        >"
          <div className="flex items-center justify-between">
            <div>"
              <h3 className="text-xl font-bold mb-2">Real-time Users</h3>"
              <p className="text-4xl font-bold">{analyticsData.realTimeUsers}</p>"
              <span className="text-blue-100 text-sm">Currently active on your site</span>
            </div>"
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">"
              <Users className="w-8 h-8 text-white" />
=======
          className="mb-8"
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Real-time Activity</h3>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-2xl font-bold">{analyticsData.realTimeUsers}</span>
              <span className="text-gray-400">users online now</span>
>>>>>>> main
            </div>
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* Charts and Tables */}"
=======
<<<<<<< HEAD
        {/* Charts and Tables */}
>>>>>>> main
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}"
            className="bg-gray-800 rounded-lg p-6"
<<<<<<< HEAD
          >"
            <h3 className="text-xl font-bold mb-4">Top Pages</h3>"
=======
          >
=======
        {/* Charts and Additional Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Top Pages */}
          <div className="bg-gray-800 rounded-lg p-6">
>>>>>>> main
            <h3 className="text-xl font-bold mb-4">Top Pages</h3>
>>>>>>> main
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => ("
                <div key={page.page} className="flex justify-between items-center">"
                  <div className="flex items-center space-x-3">"
                    <span className="text-gray-400 text-sm">#{index + 1}</span>"
                    <span className="font-medium">{page.page}</span>
                  </div>"
                  <span className="text-blue-400 font-semibold">
                    {page.views.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
<<<<<<< HEAD
          </motion.div>

          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}"
            className="bg-gray-800 rounded-lg p-6"
<<<<<<< HEAD
          >"
            <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>"
=======
          >
=======
          </div>

          {/* Traffic Sources */}
          <div className="bg-gray-800 rounded-lg p-6">
>>>>>>> main
            <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>
>>>>>>> main
            <div className="space-y-3">
              {analyticsData.trafficSources.map((source) => ("
                <div key={source.source} className="flex justify-between items-center">
                  <span>{source.source}</span>"
                  <div className="flex items-center space-x-2">"
                    <div className="w-20 bg-gray-700 rounded-full h-2">
                      <div"
                        className="bg-blue-500 h-2 rounded-full""
                        style={{ width: `${source.percentage}%` }}
                      ></div>
<<<<<<< HEAD
                    </div>`
=======
                    </div>
<<<<<<< HEAD
>>>>>>> main
                    <span className="text-sm text-gray-400">
                      {source.percentage}%
                    </span>
=======
                    <span className="text-sm text-gray-400">{source.percentage}%</span>
>>>>>>> main
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
          </motion.div>
        </div>
=======
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
>>>>>>> main
      </div>
    </div>
<<<<<<< HEAD
  )}

export default EnhancedAnalytics
=======
  );
};

<<<<<<< HEAD
export default EnhancedAnalytics;
=======
export default EnhancedAnalytics;"
>>>>>>> main
>>>>>>> main
