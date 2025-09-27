import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number; bounceRate: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  deviceTypes: Array<{ device: string; count: number; percentage: number }>;
  geographicData: Array<{ country: string; visitors: number; percentage: number }>;
  hourlyData: Array<{ hour: number; visitors: number }>;
  dailyData: Array<{ date: string; visitors: number; pageViews: number }>;
  realTimeVisitors: number;
  topKeywords: Array<{ keyword: string; searches: number; position: number }>;
  errorRate: number;
  performanceScore: number;
}

interface AdvancedAnalyticsDashboardProps {
  data: AnalyticsData;
  onDataRefresh?: () => void;
  className?: string;
}

const COLORS = ['#3B8 2 F6', '#1 0 B9 8 1', '#F5 9 E 0 B', '#EF 4 4 4 4', '#8B 5 CF6', '#0 6 B 6 D4'];

export const AdvancedAnalyticsDashboard: React.FC<AdvancedAnalyticsDashboardProps> = ({
  data,
  onDataRefresh,
  className = ''
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('visitors');
  const [isRealTime, setIsRealTime] = useState(true);

  const formatNumber = (num: number) => {
    if (num >= 1 0 0 0 0 0 0) return `${(num / 1 0 0 0 0 0 0).toFixed(1)}M`;
    if (num >= 10 0 0) return `${(num / 10 0 0).toFixed(1)}K`;
    return num.toString();
  };

  const formatPercentage = (num: number) => `${num.toFixed(1)}%`;

  const getMetricColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value >= thresholds.good) return 'text-green-5 0 0';
    if (value >= thresholds.warning) return 'text-yellow-5 0 0';
    return 'text-red-5 0 0';
  };

  const timeRangeOptions = [
    { value: '1d', label: 'Last2 4 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '3 0 d', label: 'Last3 0 Days' },
    { value: '9 0 d', label: 'Last9 0 Days' }
  ];

  const metricOptions = [
    { value: 'visitors', label: 'Visitors' },
    { value: 'pageViews', label: 'Page Views' },
    { value: 'bounceRate', label: 'Bounce Rate' },
    { value: 'conversionRate', label: 'Conversion Rate' }
  ];

  return (
    <div className={`bg-white dark:bg-gray-8 0 0 rounded-lg shadow-lg p-6 ${className}`}
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white" id="analytics-dashboard">Analytics Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400">Real-time insights and performance metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isRealTime ? 'bg-green-500' : 'bg-gray-400'}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isRealTime ? 'Real-time' : 'Paused'}
            </span>
          </div>
          <button
            onClick={onDataRefresh}
            className="px-4 py-2bg-blue-50 0 hover:bg-blue-60 0 text-white rounded-lg text-sm font-mediumtransition-colors"
           aria-label="Refresh">
            Refresh
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4mb-6">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-70 0 dark:text-gray-3 0 0">Time Rang, e:</label>
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3py-1border border-gray-30 0 dark: border-gray-60 0 rounded-lg bg-white dar, k:bg-gray-70 0 text-gray-90 0 dar,k:text-white"
          >
            {timeRangeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-70 0 dark:text-gray-3 0 0">Metri, c:</label>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-3py-1border border-gray-30 0 dark: border-gray-60 0 rounded-lg bg-white dar, k:bg-gray-70 0 text-gray-90 0 dar,k:text-white"
          >
            {metricOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() =>setIsRealTime(!isRealTime)}
          aria-label={isRealTime ? 'Disable real-time updates' : 'Enable real-time updates'}
          className={`px-4 py-2rounded-lg text-sm font-medium transition-colors ${
            isRealTime
              ? 'bg-green-50 0 hover:bg-green-60 0 text-white'
              : 'bg-gray-50 0 hove, r:bg-gray-60 0 text-white'
          }`}
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1md: grid-cols-2l, g:grid-cols-4gap-4mb-6">
        <motion.div
          initial={{ opacit, y: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-50 0 to-blue-60 0 rounded-lg p-4text-white"
        >
          <div className="text-sm opacity-9 0 mb-1">Total Visitors</div>
          <div className="text-2xlfont-bold">{formatNumber(data.uniqueVisitors)}</div>
          <div className="text-smopacity-90">+12% from last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-green-50 0 to-green-60 0 rounded-lg p-4text-white"
        >
          <div className="text-sm opacity-9 0 mb-1">Page Views</div>
          <div className="text-2xlfont-bold">{formatNumber(data.pageViews)}</div>
          <div className="text-smopacity-90">+8% from last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-yellow-50 0 to-yellow-60 0 rounded-lg p-4text-white"
        >
          <div className="text-sm opacity-9 0 mb-1">Bounce Rate</div>
          <div className={`text-2xl font-bold ${getMetricColor(data.bounceRate, { good: 40, warning: 60 })}`}
            {formatPercentage(data.bounceRate)}
          </div>
          <div className="text-smopacity-90">-3% from last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-purple-50 0 to-purple-60 0 rounded-lg p-4text-white"
        >
          <div className="text-sm opacity-9 0 mb-1">Conversion Rate</div>
          <div className={`text-2xl font-bold ${getMetricColor(data.conversionRate, { good: 3, warning: 1.5 })}`}
            {formatPercentage(data.conversionRate)}
          </div>
          <div className="text-smopacity-90">+15% from last period</div>
        </motion.div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1lg:grid-cols-2gap-6mb-6">
        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-5 0 dark: bg-gray-70 0 rounded-lgp-4"
        >
          <h 3 className="text-lg font-semibold text-gray-90 0 dar, k:text-whitemb-4" id="traffic-sources">Traffic Sources</h3>
          <ResponsiveContainer width="1 0 0%" height={3 0 0}>
            <PieChart>
              <Pie
                data={data.trafficSources}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name} (${percentage}%)`}
                outerRadius={80}
                fill="#8 8 8 4 d8"
                dataKey="visitors"
              >
                {data.trafficSources.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Device Types */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-5 0 dark: bg-gray-70 0 rounded-lgp-4"
        >
          <h 3 className="text-lg font-semibold text-gray-90 0 dar, k:text-whitemb-4" id="device-types">Device Types</h3>
          <ResponsiveContainer width="1 0 0%" height={3 0 0}>
            <BarChart data={data.deviceTypes}>
              <CartesianGrid strokeDasharray="33" />
              <XAxis dataKey="device" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B8 2 F6" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1lg:grid-cols-2gap-6mb-6">
        {/* Hourly Traffic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-5 0 dark: bg-gray-70 0 rounded-lgp-4"
        >
          <h 3 className="text-lg font-semibold text-gray-90 0 dar, k:text-whitemb-4" id="hourly-traffic">Hourly Traffic</h3>
          <ResponsiveContainer width="1 0 0%" height={3 0 0}>
            <LineChart data={data.hourlyData}>
              <CartesianGrid strokeDasharray="33" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke="#1 0 B9 8 1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-5 0 dark: bg-gray-70 0 rounded-lgp-4"
        >
          <h 3 className="text-lg font-semibold text-gray-90 0 dar, k:text-whitemb-4" id="top-countries">Top Countries</h3>
          <div className="space-y-3">
            {data.geographicData.slice(0, 5).map((country, index) => (
              <div key={country.country} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4h-4rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <span className="text-gray-90 0 dark:text-white">{country.country}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-90 0 dark:text-white">{formatNumber(country.visitors)}</div>
                  <div className="text-sm text-gray-60 0 dark:text-gray-4 0 0">{country.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Real-time Stats */}
      <AnimatePresence>
        {isRealTime && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-green-5 0 to-blue-5 0 dark:from-green-9 0 0/2 0 dark:to-blue-9 0 0/2 0 rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h 3 className="text-lg font-semibold text-gray-90 0 dark:text-white" id="real-time-activity">Real-time Activity</h3>
                <p className="text-gray-60 0 dark:text-gray-4 0 0">Live visitor count and activity</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-60 0 dark:text-green-4 0 0">
                  {data.realTimeVisitors}
                </div>
                <div className="text-sm text-gray-60 0 dark:text-gray-4 0 0">visitors online</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedAnalyticsDashboard;