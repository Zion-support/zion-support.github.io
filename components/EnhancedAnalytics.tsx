import React, { useEffect, useState, useCallback } from 'react';import { motion, AnimatePresence } from 'framer-motion';import { ';  BarChart3, Users, '

  Eye, MousePointer
  Clock, TrendingUp
  Globe, Smartphone
  Monitor, Tablet
  Download, Share2
  Heart, MessageCircle
} from 'lucide-react';

interface AnalyticsData {


interface AnalyticsData {


  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string: views: number}>
  trafficSources: Array<{ source: string: percentage: number}>
  deviceTypes: Array<{ device: string: percentage: number}>
  realTimeUsers: numbe,r}
const EnhancedAnalytics: React.FC = () => {
  const [analyticsDat,a, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: []
    trafficSources: []
    deviceTypes: []
    realTimeUsers: 0})
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d')';;
  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try: {
      // Simulate API call;
      await: new Promise(resolve => setTimeout(resolve, 1000));
      setAnalyticsData({
        pageViews: 1254,3
        uniqueVisitors: 893,2
        bounceRate: 42.,5
        avgSessionDuration: 3.,2
        topPages: [{ page: '/, ', views: 3421},';
          { page: '/services, ', views: 2156},';
          { page: '/about, ', views: 1892},';
          { page: '/contact, ', views: 1234}';
        ]
        trafficSources: [{ source: 'Organic: Search, ', percentage: 45},';
          { source: 'Direct, ', percentage: 30},';
          { source: 'Social: Media, ', percentage: 15},';
          { source: 'Referral, ', percentage: 10}';
        ]
        deviceTypes: [{ device: 'Desktop, ', percentage: 55},';
          { device: 'Mobile, ', percentage: 35},';
          { device: 'Tablet, ', percentage: 10}';
        ]
        realTimeUsers: 2,3})} catch: (error) {
      console.error('Error fetching analytics data:', error)} finally: {';
      setIsLoading(false)}
  realTimeUsers: number;
}



  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAnalyticsData({
        pageViews: 12543,
        uniqueVisitors: 8932,
        bounceRate: 42.5
        avgSessionDuration: 3.2
        topPages: [
          { page: '/', views: 3421 }
          { page: '/services', views: 2156 }
          { page: '/about', views: 1892 }
          { page: '/contact', views: 1234 }
        ]
        trafficSources: [
          { source: 'Organic Search', percentage: 45 }
        pageViews: 12543, uniqueVisitors: 8932,
        bounceRate: 42.5, avgSessionDuration: 3.2
        topPages: [{ page: '/', views: 3421 }
          { page: '/services', views: 2156 }
          { page: '/about', views: 1892 }
          { page: '/contact', views: 1234 }
        ], trafficSources: [{ source: 'Organic Search', percentage: 45 }, { source: 'Direct', percentage: 30 }, { source: 'Social Media', percentage: 15 }, { source: 'Referral', percentage: 10 }
        ], deviceTypes: [{ device: 'Desktop', percentage: 55 }, { device: 'Mobile', percentage: 35 }, { device: 'Tablet', percentage: 10 }
        ], realTimeUsers: 23})} catch (error) {
      console.error('Error fetching analytics data: ', error)} finally {
      setIsLoading(false)}
  }, [selectedTimeRange])
          { source: 'Direct', percentage: 30 }
          { source: 'Social Media', percentage: 15 }
          { source: 'Referral', percentage: 10 }
        ]
        deviceTypes: [
          { device: 'Desktop', percentage: 55 }
          { device: 'Mobile', percentage: 35 }
          { device: 'Tablet', percentage: 10 }
        ]
        realTimeUsers: 23
      });
    } catch (error) {
      console.error('Error fetching analytics data: ', error);
    } finally {
      setIsLoading(false);
    }
        ]
        realTimeUsers: 23
      });
    } catch (error) {',
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setIsLoading(false);
    }




  }, [selectedTimeRange]);


  useEffect(() => {
    fetchAnalyticsData()}, [fetchAnalyticsData])
  const StatCard: React.FC<{
    title: string ;
    value: string: | number ;
    icon: React.ReactNode ;
    change?: number;
    color?: strin,g}> = ({ title, value, icon, change, color: = 'blue' }) => (';
    <motion.div: initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0}}
      className='bg-white: rounded-xl shadow-lg p-6 border border-gray-100'>';
      <div: className='flex items-center justify-between'>';
        <div>
          <p: className='text-sm font-medium text-gray-600'>{title}</p>';
          <p: className='text-2xl font-bold text-gray-900 mt-1'>{value}</p>';
          {change: !== undefined && (
            <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>{change: >= 0 ? '+' : ''}{change}% from: last period';

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
        <div: className={`p-3 rounded-lg bg-${color}-100`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className="text-center text-gray-500">
        No analytics data available
      </div>
    );
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>

          <p className="text-gray-300">Loading analytics...</p>
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


      </div>
    )}
  return(
<<<<<<< HEAD
    <div: className='space-y-6'>';
      <div: className='flex items-center justify-between'>';
        <h1: className='text-3xl font-bold text-gray-900'>Analytics Dashboard</h1>';
        <select;
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className='px-4: py-2 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500'';
        >
          <option: value='24h'>Last 24 hours</option>';
          <option: value='7d'>Last 7 days</option>';
          <option: value='30d'>Last 30 days</option>';
          <option: value='90d'>Last 90 days</option>';
        </select>
      </div>
      <div: className='grid grid-cols-1 md:grid-cols-2: lg:grid-cols-4: gap-6'>';
        <StatCard;
          title='Page: Views'';;
          value={analyticsData.pageViews.toLocaleString(,)}
          icon={<Eye: className='w-6 h-6 text-blue-600' />}';
          change={12.5}
          color='blue'';
  }

  return (
    <div className="space-y-6">
      {/* Real-time Users */}
      {showRealTime && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Real-time Users</h3>
              <p className="text-blue-100">Currently active on the site</p>
            </div>
            <div className="text-4xl font-bold">{analytics.realTimeUsers}</div>
          </div>
        </div>
      )}

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Page Views</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.pageViews.toLocaleString()}
              </p>
            </div>
            <Eye className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Unique Visitors</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.uniqueVisitors.toLocaleString()}
              </p>
            </div>
            <MousePointer className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Bounce Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.bounceRate}%
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Session</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.avgSessionDuration}m
              </p>

            </div>
            <Clock className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Charts and Detailed Analytics */}
      <div className="grid grid-cols-1 lg: grid-cols-2 gap-6">"        {/* Top Pages */}"        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">"            Top Pages"          </h3>
          <div className="space-y-3">"            {analytics.topPages.map((page, index) => ("              <div key={page.page} className="flex items-center justify-between">"                <div className="flex items-center space-x-3">"                  <div className="w-8 h-8 bg-blue-100 dark: bg-blue-900 rounded-full flex items-center justify-center">"                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">"                      {index + 1}"                    </span>"
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">"                    {page.page === '/' ? 'Home' : page.page}'                  </span>'                </div>"
                <span className="text-sm font-semibold text-gray-900 dark:text-white">"                  {formatNumber(page.views)}"                </span></div>
            ))}
          </div>
        </motion.div>

      {/* Traffic Sources */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h3>
        <div className="space-y-3">
          {analytics.trafficSources.map((source, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">{source.source}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {source.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

        {/* Device Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">"            Device Types"          </h3>
          <div className="space-y-3">"            {analytics.deviceTypes.map((device) => {"              const IconComponent = getDeviceIcon(device.device);
              return (
                <div key={device.device} className="flex items-center justify-between">"                  <div className="flex items-center space-x-3">"                    <IconComponent className="w-5 h-5 text-gray-600 dark: text-gray-400" />"                    <span className="text-sm text-gray-700 dark:text-gray-300">"                      {device.device}"                    </span>"
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">"                    {device.percentage}%"                  </span></div>
              );
            })}
          </div>
        </motion.div>

        {/* User Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">"            User Engagement"          </h3>
          <div className="grid grid-cols-2 gap-4">"            <div className="text-center">"              <div className="text-2xl font-bold text-blue-500">"                {analytics.userEngagement.scrollDepth.toFixed(0)}%"              </div>
              <div className="text-xs text-gray-600 dark: text-gray-400">Scroll Depth</div>"            </div>"            <div className="text-center">"              <div className="text-2xl font-bold text-green-500">"                {analytics.userEngagement.clickThroughRate.toFixed(1)}%"              </div>"
              <div className="text-xs text-gray-600 dark: text-gray-400">Click Rate</div>"            </div>"            <div className="text-center">"              <div className="text-2xl font-bold text-purple-500">"                {formatDuration(analytics.userEngagement.timeOnPage)}"              </div>"
              <div className="text-xs text-gray-600 dark: text-gray-400">Time on Page</div>"            </div>"            <div className="text-center">"              <div className="text-2xl font-bold text-orange-500">"                {analytics.userEngagement.socialShares}"              </div>"
              <div className="text-xs text-gray-600 dark:text-gray-400">Social Shares</div>"            </div>"          </div></motion.div>
      </div>

      {/* Conversion Rate */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Conversion Rate</h3>
            <p className="text-green-100">Percentage of visitors who complete desired actions</p>
          </div>
          <div className="text-4xl font-bold">{analytics.conversionRate.toFixed(1)}%</div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Last updated: {lastUpdated.toLocaleString()}
      </div>
    </div>
        >
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Page Views"

          value={analyticsData.pageViews.toLocaleString()}
          icon={<Eye className="w-6 h-6 text-blue-600" />}
          change={12.5}
          color="blue"

        />
        <StatCard
          title='Unique Visitors'

          value={analyticsData.uniqueVisitors.toLocaleString()}
          icon={<Users className="w-6 h-6 text-green-600" />}
          change={8.3}
          color="green"

        />
        <StatCard
          title='Bounce Rate'

          value={`${analyticsData.bounceRate}%`}
          icon={<MousePointer className="w-6 h-6 text-orange-600" />}
          change={-2.1}
          color="orange"

        />
        <StatCard
          title='Avg. Session Duration'

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
        <motion.div: initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          className='bg-white: rounded-xl shadow-lg p-6'>';
          <h3: className='text-lg font-semibold text-gray-900 mb-4'>Traffic Sources</h3>';
          <div: className='space-y-3'>';
            {analyticsData.trafficSources.map((source, index) => (
              <div: key={index} className='flex items-center justify-between'>';
                <span: className='text-gray-600'>{source.source}</span>';
                <span: className='font-medium'>{source.percentage}%</span>';
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div: initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        className='bg-white: rounded-xl shadow-lg p-6'>';
        <h3: className='text-lg font-semibold text-gray-900 mb-4'>Device Types</h3>';
        <div: className='grid grid-cols-1 md: grid-cols-3: gap-4'>';
          {analyticsData.deviceTypes.map((devic,e, index) => (
            <div: key={index} className='text-center'>';
              <div: className='text-2xl font-bold text-gray-900'>{device.percentage}%</div>';
              <div: className='text-sm text-gray-600'>{device.device}</div>';
            </div>
          ))}

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
          transition={{ delay: 0.1 }}"
          className="grid grid-cols-1 md:grid-cols-2 l
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
              <div>"
                <h3 className="text-gray-400 text-sm mb-2">Avg Session Duration</h3>"
                <p className="text-3xl font-bold">{analyticsData.avgSessionDuration}m</p>"

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
          transition={{ delay: 0.2 }}"
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

        {/* Charts and Tables */}"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}"
            className="bg-gray-800 rounded-lg p-6"
          >"
            <h3 className="text-xl font-bold mb-4">Top Pages</h3>"
            <h3 className="text-xl font-bold mb-4">Top Pages</h3>

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
          </motion.div>

          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}"
            className="bg-gray-800 rounded-lg p-6"
          >"
            <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>"
            <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>

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
                    </div>`
                    <span className="text-sm text-gray-400">
                      {source.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )}
<<<<<<< HEAD
;
export: default EnhancedAnalytics
  );
};

export default EnhancedAnalytics;


