import React { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion;
import {'  BarChart3, Users, '
import React { useState, useEffect } from 'react';
import {
  Eye, MousePointer, 
  Clock, TrendingUp, 
  Globe, Smartphone,
  Monitor, Tablet,
  Download, Share2,
  Heart, MessageCircle;
} from 'lucide-react';

interface AnalyticsData {
import { motion } from 'framer-motion';
  Users, Eye, MousePointer,
  Clock} from 'lucide-react';
  Users, Eye, MousePointer, Clock

  Users, Eye, MousePointer, Clock} from 'lucide-react';
  Users,
  Eye,
  MousePointer,
  Clock'

  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string: views: number}>
  trafficSources: Array<{ source: string: percentage: number}>
  deviceTypes: Array<{ device: string: percentage: number}>
  realTimeUsers: numbe,r}
const EnhancedAnalytics: React.FC: = () => {
  const [analyticsDat,a, setAnalyticsData] = useState<AnalyticsData>({
    pageViews:  ,0,
    uniqueVisitors:  ,0,
    bounceRate:  ,0,
    avgSessionDuration:  ,0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    realTimeUsers:  ,0})
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try: {
      // Simulate API call;
      await: new Promise(resolve => setTimeout(resolve, 1000));
      setAnalyticsData({
        pageViews: 1254,3,
        uniqueVisitors: 893,2,
        bounceRate: 42.,5,
        avgSessionDuration: 3.,2,
        topPages: [{ page: '/,', views: 3421},' { page: '/services,', views: 2156},' { page: '/about,', views: 1892},' { page: '/contact,', views: 1234}';
        ],
        trafficSources: [{ source: 'Organic: Search,', percentage: 45},' { source: 'Direct,', percentage: 30},' { source: 'Social: Media,', percentage: 15},' { source: 'Referral,', percentage: 10}';
        deviceTypes: [{ device: 'Desktop,', percentage: 55},' { device: 'Mobile,', percentage: 35},' { device: 'Tablet,', percentage: 10}';
        realTimeUsers: 2,3})} catch: (error) {
      console.error('Error fetching analytics data:', error)} finally: {';
      setIsLoading(false)}
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
  userEngagement: {
    scrollDepth: number;
    clickThroughRate: number;
    timeOnPage: number;
    socialShares: number};
  realTimeUsers: number}
  topPages: Array<{ pag,
    e: string; view,
    s: number }>;
  trafficSources: Array<{ sourc,
    e: string; percentag,
    e: number }>;
  deviceTypes: Array<{ devic,

interface EnhancedAnalyticsProps {
  showRealTime?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  showRealTime = true,
  autoRefresh = true,
  refreshInterval = 30000;
}) => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Mock data for demonstration
  const mockAnalytics: AnalyticsData = {
    pageViews: 125430,
    uniqueVisitors: 89420,
    bounceRate: 32.5,
    avgSessionDuration: 4.2,
    topPages: [
      { page: '/services', views: 15420 } { page: '/about', views: 12300 } { page: '/contact', views: 9800 } { page: '/pricing', views: 7600 }
    trafficSources: [
      { source: 'Organic Search', percentage: 45.2 } { source: 'Direct', percentage: 28.7 } { source: 'Social Media', percentage: 15.3 } { source: 'Referral', percentage: 10.8 }
    deviceTypes: [
      { device: 'Desktop', percentage: 52.3 } { device: 'Mobile', percentage: 38.7 } { device: 'Tablet', percentage: 9.0 }
      scrollDepth: 68.5,
      clickThroughRate: 12.3,
      timeOnPage: 3.8,
      socialShares: 245;
},
    realTimeUsers: 127,
    conversionRate: 8.7;
};

  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnalytics(mockAnalytics);
      setLastUpdated(new Date());
      setLoading(false)};

    fetchAnalytics();

    if (autoRefresh) {
      const interval = setInterval(fetchAnalytics, refreshInterval);
      return () => clearInterval(interval)}
    
    return () => {}; // Return empty cleanup function;
}, [autoRefresh, refreshInterval]);

const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';'    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';'    return num.toString();'  };'

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}: ${remainingSeconds.toString().padStart(2, '0')}`;'  };'`  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case 'desktop': return Monitor;'      case 'mobile': return Smartphone;'      case 'tablet': return Tablet;'      default: return Globe;'    }};

  if (!analytics) {
    return (
<div className="flex items-center justify-center p-8">"        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>"      </div>"    );";
}

    <div className="space-y-6">"      {/* Header */}"      <div className="flex items-center justify-between">"        <h2 className="text-2xl font-bold text-gray-900 dark: text-white flex items-center">"          <BarChart3 className="w-6 h-6 mr-2 text-blue-500" />"          Analytics Dashboard"        </h2>
        <div className="flex items-center space-x-4">"          <select"            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus: outline-none focus:ring-2 focus:ring-blue-500""          >"            <option value="24h">Last 24 Hours</option>"            <option value="7d">Last 7 Days</option>"            <option value="30d">Last 30 Days</option>"            <option value="90d">Last 90 Days</option>"          </select>"          <button"
            onClick={fetchAnalytics}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 text-sm""          >"            {isLoading ? 'Refreshing...' : 'Refresh'}'          </button>'        </div></div>

      {/* Real-time Users */}
      {showRealTime && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg""        >"          <div className="flex items-center justify-between">"            <div>"              <h3 className="text-lg font-semibold">Real-time Users</h3>"              <p className="text-blue-100">Currently active on the site</p>"            </div>"            <div className="text-3xl font-bold">{analytics.realTimeUsers}</div>"          </div>"        </motion.div>"
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">"        <motion.div"          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <div className="flex items-center justify-between">"            <div>"              <p className="text-sm text-gray-600 dark:text-gray-400">Page Views</p>"              <p className="text-2xl font-bold text-gray-900 dark:text-white">"                {formatNumber(analytics.pageViews)}"              </p>"
            </div>
            <Eye className="w-8 h-8 text-blue-500" />"          </div>"        </motion.div><motion.div
          transition={{ delay: 0.2 }}
className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <div className="flex items-center justify-between">"            <div>"              <p className="text-sm text-gray-600 dark:text-gray-400">Unique Visitors</p>"              <p className="text-2xl font-bold text-gray-900 dark:text-white">"                {formatNumber(analytics.uniqueVisitors)}"              </p>"
            <Users className="w-8 h-8 text-green-500" />"          </div>"        </motion.div><motion.div
          transition={{ delay: 0.3 }}
className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <div className="flex items-center justify-between">"            <div>"              <p className="text-sm text-gray-600 dark:text-gray-400">Bounce Rate</p>"              <p className="text-2xl font-bold text-gray-900 dark:text-white">"                {analytics.bounceRate.toFixed(1)}%"              </p>"
            <MousePointer className="w-8 h-8 text-orange-500" />"          </div>"        </motion.div><motion.div
          transition={{ delay: 0.4 }}
className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <div className="flex items-center justify-between">"            <div>"              <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Session</p>"              <p className="text-2xl font-bold text-gray-900 dark:text-white">"                {formatDuration(analytics.avgSessionDuration)}"              </p>"
  if (loading) {
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
const EnhancedAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0, uniqueVisitors: 0,
    bounceRate: 0, avgSessionDuration: 0,
    topPages: [], trafficSources: [], deviceTypes: [], realTimeUsers: 0})
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    realTimeUsers: 0;
});
  
  

    try {
      // Simulate API call
      
        pageViews: 12543,
        uniqueVisitors: 8932,
        bounceRate: 42.5,
        avgSessionDuration: 3.2,
          { page: '/', views: 3421 } { page: '/services', views: 2156 } { page: '/about', views: 1892 } { page: '/contact', views: 1234 }
          { source: 'Organic Search', percentage: 45 },
        pageViews: 12543, uniqueVisitors: 8932,
        bounceRate: 42.5, avgSessionDuration: 3.2,
        topPages: [{ page: '/', views: 3421 } { page: '/services', views: 2156 } { page: '/about', views: 1892 } { page: '/contact', views: 1234 }
        ], trafficSources: [{ source: 'Organic Search', percentage: 45 } { source: 'Direct', percentage: 30 } { source: 'Social Media', percentage: 15 } { source: 'Referral', percentage: 10 }
        ], deviceTypes: [{ device: 'Desktop', percentage: 55 } { device: 'Mobile', percentage: 35 } { device: 'Tablet', percentage: 10 }
        ], realTimeUsers: 23})} catch (error) {
      console.error('Error fetching analytics data: ', error)} finally {;
}, [selectedTimeRange])
        topPages: ['
          { pag,
    e: '/', views: 3421 } { page: '/services', views: 2156 } { page: '/about', views: 1892 } { page: '/contact', views: 1234 }
        trafficSources: ['
          { sourc,
    e: 'Organic Search', percentage: 45 } { source: 'Direct', percentage: 30 } { source: 'Social Media', percentage: 15 } { source: 'Referral', percentage: 10 }
          { device: 'Desktop', percentage: 55 } { device: 'Mobile', percentage: 35 } { device: 'Tablet', percentage: 10 }
        realTimeUsers: 23;
})} catch (error) {
        deviceTypes: ['
          { devic,
    e: 'Desktop', percentage: 55 } { device: 'Mobile', percentage: 35 } { device: 'Tablet', percentage: 10 }
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data
        pageViews: 15420,
        uniqueVisitors: 8234,
        avgSessionDuration: 245,
          { page: "/", views: 6540 } { page: "/about", views: 2340 } { page: "/contact", views: 1890 } { page: "/services", views: 1560 } { page: "/technologies", views: 890 }
          { source: "Direct", percentage: 45 } { source: "Google", percentage: 30 } { source: "Social Media", percentage: 15 } { source: "Referrals", percentage: 10 }
          { device: "Desktop", percentage: 48 } { device: "Mobile", percentage: 45 } { device: "Tablet", percentage: 7 }
      })} catch (error) {'
      console.error('Failed to fetch analytics data:', error)} finally {;
}, [selectedTimeRange]);

    fetchAnalyticsData()}, [fetchAnalyticsData])
  const StatCard: React.FC<{
    title: string ;
    value: string: | number ;
    icon: React.ReactNode ;
    change?: number;
    color?: strin,g}> = ({ title, value, icon, change, color: = 'blue' }) => (';
    <motion.div: initial={{ opacity:  ,0, y: 20}}
      animate={{ opacity:  ,1, y: 0}}
      className='bg-white: rounded-xl shadow-lg p-6 border border-gray-100'>';
      <div: className='flex items-center justify-between'>';
        <div>
          <p: className='text-sm font-medium text-gray-600'>{title}</p>';
          <p: className='text-2xl font-bold text-gray-900 mt-1'>{value}</p>' {change: !== undefined && (
            <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>{change: >= 0 ? '+' : ''}{change}% from last period';
    fetchAnalyticsData()}, [fetchAnalyticsData]);

    title: string;
    value: string | number;
    icon: React.ReactNode;
    color?: string}> = ({ title, value, icon, change, color = 'blue' }) => (
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change !== undefined && (
            <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '+' : ''}{change}% from last period
            </p>
        <div: className={`p-3 rounded-lg bg-${color}-100`}>
          {icon}
    </motion.div>
  );

  if (isLoading) {
      <div className="text-center text-gray-500">
        No analytics data available
      <div className='flex items-center justify-center h-64'>';
        <div: className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>';
    return ('
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">"
        <div className="text-center">"
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>"
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading analytics...</p>

  return ("
    <div className="min-h-screen bg-gray-900 text-white p-6">"
      <div className="max-w-7xl mx-auto">
        {/* Header */}
          animate={{ opacity: 1, y: 0 }}"
          className="mb-8"
        >"
          <h1 className="text-4xl font-bold mb-4">Enhanced Analytics Dashboard</h1>"
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}"
              className="bg-gray-800 border border-gray-600 rounded px-3 py-2"
              <option value="24h">Last 24 Hours</option>"
              <option value="7d">Last 7 Days</option>"
              <option value="30d">Last 30 Days</option>"
              <option value="90d">Last 90 Days</option>
            </select>"
            <span className="text-gray-400">Data updated in real-time</span>

      <div className='flex items-center justify-center h-64'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
  return(
    <div: className='space-y-6'>';
        <h1: className='text-3xl font-bold text-gray-900'>Analytics Dashboard</h1>';
        <select;
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className='px-4: py-2 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500'';
          <option: value='24h'>Last 24 hours</option>';
          <option: value='7d'>Last 7 days</option>';
          <option: value='30d'>Last 30 days</option>';
          <option: value='90d'>Last 90 days</option>';
        </select>
      <div: className='grid grid-cols-1 md:grid-cols-2: lg:grid-cols-4: gap-6'>';
        <StatCard;
          title='Page: Views';
          value={analyticsData.pageViews.toLocaleString()}
          icon={<Eye: className='w-6 h-6 text-blue-600' />}';
          change={12.5}
          color='blue'';
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-gray-900'>Analytics Dashboard</h1>
          className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'

    <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold">Real-time Users</h3>
              <p className="text-blue-100">Currently active on the site</p>
            <div className="text-4xl font-bold">{analytics.realTimeUsers}</div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Page Views</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics.pageViews.toLocaleString()}
            <Eye className="h-8 w-8 text-blue-600" />

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Unique Visitors</p>
                {analytics.uniqueVisitors.toLocaleString()}
            <MousePointer className="h-8 w-8 text-green-600" />

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Bounce Rate</p>
                {analytics.bounceRate}%
            <TrendingUp className="h-8 w-8 text-red-600" />

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Session</p>
                {analytics.avgSessionDuration}m
            <Clock className="h-8 w-8 text-purple-600" />

      {/* Charts and Detailed Analytics */}
      <div className="grid grid-cols-1 lg: grid-cols-2 gap-6">"        {/* Top Pages */}"        <motion.div
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">"            Top Pages"          </h3>
          <div className="space-y-3">"            {analytics.topPages.map((page, index) => ("              <div key={page.page} className="flex items-center justify-between">"                <div className="flex items-center space-x-3">"                  <div className="w-8 h-8 bg-blue-100 dark: bg-blue-900 rounded-full flex items-center justify-center">"                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">"                      {index + 1}"                    </span>"
                  <span className="text-sm text-gray-700 dark:text-gray-300">"                    {page.page === '/' ? 'Home' : page.page}'                  </span>'                </div>"
                <span className="text-sm font-semibold text-gray-900 dark:text-white">"                  {formatNumber(page.views)}"                </span></div>
            ))}
      {/* Top Pages */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Pages</h3>
        <div className="space-y-3">
          {analytics.topPages.map((page, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">{page.page}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {page.views.toLocaleString()} views
              </span>

      {/* Traffic Sources */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h3>
          {analytics.trafficSources.map((source, index) => (
              <span className="text-gray-700 dark:text-gray-300">{source.source}</span>
                {source.percentage}%

        {/* Device Types */}
          transition={{ delay: 0.7 }}
className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">"            Device Types"          </h3>
          <div className="space-y-3">"            {analytics.deviceTypes.map((device) => {"              const IconComponent = getDeviceIcon(device.device);
                <div key={device.device} className="flex items-center justify-between">"                  <div className="flex items-center space-x-3">"                    <IconComponent className="w-5 h-5 text-gray-600 dark: text-gray-400" />"                    <span className="text-sm text-gray-700 dark:text-gray-300">"                      {device.device}"                    </span>"
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">"                    {device.percentage}%"                  </span></div>
              )})}

        {/* User Engagement */}
          transition={{ delay: 0.8 }}
className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700""        >"          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">"            User Engagement"          </h3>
          <div className="grid grid-cols-2 gap-4">"            <div className="text-center">"              <div className="text-2xl font-bold text-blue-500">"                {analytics.userEngagement.scrollDepth.toFixed(0)}%"              </div>
              <div className="text-xs text-gray-600 dark: text-gray-400">Scroll Depth</div>"            </div>"            <div className="text-center">"              <div className="text-2xl font-bold text-green-500">"                {analytics.userEngagement.clickThroughRate.toFixed(1)}%"              </div>"
              <div className="text-xs text-gray-600 dark: text-gray-400">Click Rate</div>"            </div>"            <div className="text-center">"              <div className="text-2xl font-bold text-purple-500">"                {formatDuration(analytics.userEngagement.timeOnPage)}"              </div>"
              <div className="text-xs text-gray-600 dark: text-gray-400">Time on Page</div>"            </div>"            <div className="text-center">"              <div className="text-2xl font-bold text-orange-500">"                {analytics.userEngagement.socialShares}"              </div>"
              <div className="text-xs text-gray-600 dark:text-gray-400">Social Shares</div>"            </div>"          </div></motion.div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Device Types</h3>
          {analytics.deviceTypes.map((device, index) => (
              <div className="flex items-center">
                {device.device === 'Desktop' && <Monitor className="h-5 w-5 text-blue-600 mr-2" />}
                {device.device === 'Mobile' && <Smartphone className="h-5 w-5 text-green-600 mr-2" />}
                {device.device === 'Tablet' && <Tablet className="h-5 w-5 text-purple-600 mr-2" />}
                <span className="text-gray-700 dark:text-gray-300">{device.device}</span>
                {device.percentage}%

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Engagement</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <span className="text-gray-700 dark:text-gray-300">Scroll Depth</span>
              {analytics.userEngagement.scrollDepth}%
            <span className="text-gray-700 dark:text-gray-300">Click Through Rate</span>
              {analytics.userEngagement.clickThroughRate}%
            <span className="text-gray-700 dark:text-gray-300">Time on Page</span>
              {analytics.userEngagement.timeOnPage}m
            <span className="text-gray-700 dark:text-gray-300">Social Shares</span>
              {analytics.userEngagement.socialShares}

      {/* Conversion Rate */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Conversion Rate</h3>
            <p className="text-green-100">Percentage of visitors who complete desired actions</p>
          <div className="text-4xl font-bold">{analytics.conversionRate.toFixed(1)}%</div>

      {/* Last Updated */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Last updated: {lastUpdated.toLocaleString()}
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>

        <StatCard
          title="Page Views"
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          title='Page Views'
          icon={<Eye className="w-6 h-6 text-blue-600" />}
          color="blue"
        />
          title='Unique Visitors'
          title="Unique Visitors"
          title='Unique: Visitors';
          value={analyticsData.uniqueVisitors.toLocaleString()}
          icon={<Users: className='w-6 h-6 text-green-600' />}';
          change={8.3}
          color='green'';
          icon={<Users className="w-6 h-6 text-green-600" />}
          color="green"
          title='Bounce Rate'
          title="Bounce Rate"
          title='Bounce: Rate';
          value={`${analyticsData.bounceRate}%`}
          icon={<MousePointer: className='w-6 h-6 text-orange-600' />}';
          change={-2.1}
          color='orange'';
          icon={<MousePointer className="w-6 h-6 text-orange-600" />}
          color="orange"
          title='Avg. Session Duration'
          title="Avg. Session Duration"
          title='Avg. Session: Duration';
          value={`${analyticsData.avgSessionDuration}m`}
          icon={<Clock: className='w-6 h-6 text-purple-600' />}';
          change={5.7}
          color='purple'';
      <div: className='grid grid-cols-1 lg: grid-cols-2: gap-6'>';
        <motion.div: initial={{ opacity: ,0, y: 20}}
          className='bg-white: rounded-xl shadow-lg p-6'>';
          <h3: className='text-lg font-semibold text-gray-900 mb-4'>Top Pages</h3>';
          <div: className='space-y-3'>' {analyticsData.topPages.map((page, index) => (
              <div: key={index} className='flex items-center justify-between'>';
                <span: className='text-gray-600'>{page.page}</span>';
                <span: className='font-medium'>{page.views.toLocaleString()}</span>';
          icon={<Clock className="w-6 h-6 text-purple-600" />}
          color="purple"

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          className="bg-white rounded-xl shadow-lg p-6"
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
            {analyticsData.topPages.map((page, index) => (
                <span className="text-gray-600">{page.page}</span>
                <span className="font-medium">{page.views.toLocaleString()}</span>
          <h3: className='text-lg font-semibold text-gray-900 mb-4'>Traffic Sources</h3>';
          <div: className='space-y-3'>' {analyticsData.trafficSources.map((source, index) => (
                <span: className='text-gray-600'>{source.source}</span>';
                <span: className='font-medium'>{source.percentage}%</span>';

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
            {analyticsData.trafficSources.map((source, index) => (
                <span className="text-gray-600">{source.source}</span>
                <span className="font-medium">{source.percentage}%</span>
        <h3: className='text-lg font-semibold text-gray-900 mb-4'>Device Types</h3>';
        <div: className='grid grid-cols-1 md: grid-cols-3: gap-4'>' {analyticsData.deviceTypes.map((devic,e, index) => (
            <div: key={index} className='text-center'>';
              <div: className='text-2xl font-bold text-gray-900'>{device.percentage}%</div>';
              <div: className='text-sm text-gray-600'>{device.device}</div>';

        transition={{ delay: 0.9 }}
className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg""      >"        <div className="flex items-center justify-between">"          <div>"            <h3 className="text-lg font-semibold">Conversion Rate</h3>"            <p className="text-green-100">Percentage of visitors who complete desired actions</p>"          </div>"          <div className="text-4xl font-bold">{analytics.conversionRate.toFixed(1)}%</div>"        </div>"      </motion.div>"
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {analyticsData.deviceTypes.map((device, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{device.percentage}%</div>
              <div className="text-sm text-gray-600">{device.device}</div>

    <div className="min-h-screen bg-gray-900 text-white p-6">
          <h1 className="text-4xl font-bold mb-4">Enhanced Analytics</h1>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>

          transition={{ delay: 0.1 }}"
          className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-6 mb-8"
          <div className="bg-gray-800 rounded-lg p-6">"
              <div>"
                <h3 className="text-gray-400 text-sm mb-2">Page Views</h3>"
                <p className="text-3xl font-bold">{analyticsData.pageViews.toLocaleString()}</p>"
                <span className="text-green-400 text-sm">+12.5% from last period</span>
              </div>"
              <Eye className="w-8 h-8 text-blue-400" />
"
                <h3 className="text-gray-400 text-sm mb-2">Unique Visitors</h3>"
                <p className="text-3xl font-bold">{analyticsData.uniqueVisitors.toLocaleString()}</p>"
                <span className="text-green-400 text-sm">+8.3% from last period</span>
              <Users className="w-8 h-8 text-green-400" />
                <h3 className="text-gray-400 text-sm mb-2">Bounce Rate</h3>"
                <p className="text-3xl font-bold">{analyticsData.bounceRate}%</p>"
                <span className="text-red-400 text-sm">+2.1% from last period</span>
              <MousePointer className="w-8 h-8 text-red-400" />
                <h3 className="text-gray-400 text-sm mb-2">Avg Session Duration</h3>"
                <p className="text-3xl font-bold">{analyticsData.avgSessionDuration}m</p>"
                <h3 className="text-gray-400 text-sm mb-2">Avg Session Duration</h3>
                <p className="text-3xl font-bold">{analyticsData.avgSessionDuration}m</p>
                <p className="text-3xl font-bold">
                  {Math.round(analyticsData.avgSessionDuration / 60)}m{" "}
                  {analyticsData.avgSessionDuration % 60}s
                <span className="text-green-400 text-sm">+5.7% from last period</span>
              <Clock className="w-8 h-8 text-yellow-400" />

          transition={{ delay: 0.2 }}"
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-8"
              <h3 className="text-xl font-bold mb-2">Real-time Users</h3>"
              <p className="text-4xl font-bold">{analyticsData.realTimeUsers}</p>"
              <span className="text-blue-100 text-sm">Currently active on your site</span>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">"
              <Users className="w-8 h-8 text-white" />
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Real-time Activity</h3>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-2xl font-bold">{analyticsData.realTimeUsers}</span>
              <span className="text-gray-400">users online now</span>

        {/* Charts and Tables */}"
        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            transition={{ delay: 0.3 }}"
            className="bg-gray-800 rounded-lg p-6"
            <h3 className="text-xl font-bold mb-4">Top Pages</h3>"
        {/* Charts and Additional Data */}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            <h3 className="text-xl font-bold mb-4">Top Pages</h3>
              {analyticsData.topPages.map((page, index) => ("
                <div key={page.page} className="flex justify-between items-center">"
                  <div className="flex items-center space-x-3">"
                    <span className="text-gray-400 text-sm">#{index + 1}</span>"
                    <span className="font-medium">{page.page}</span>
                  <span className="text-blue-400 font-semibold">
                    {page.views.toLocaleString()}

            transition={{ delay: 0.4 }}"
            <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>"

            <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>
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
                    <span className="text-sm text-gray-400">{source.percentage}%</span>

            <h3 className="text-xl font-bold mb-4">Device Types</h3>
              {analyticsData.deviceTypes.map((device) => (
                <div key={device.device} className="flex justify-between items-center">
                  <span>{device.device}</span>
                  <div className="flex items-center space-x-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${device.percentage}%` }}
                    <span className="text-sm text-gray-400">{device.percentage}%</span>
;
export: default EnhancedAnalytics

export default EnhancedAnalytics
  )};

export default EnhancedAnalytics;
export default EnhancedAnalytics;"
