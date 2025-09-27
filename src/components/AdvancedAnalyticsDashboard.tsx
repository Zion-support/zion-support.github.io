import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChartBarXAxisYAxisCartesianGridTooltipResponsiveContainerLineChartLinePieChartPieCell } from 'recharts';

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

const COLORS = ['#3B82F6'#10B981'#F59E0B'#EF4444'#8B5CF6'#06B6D4'];

export const AdvancedAnalyticsDashboard: React.FC<AdvancedAnalyticsDashboardProps> = ({
  data,
  onDataRefresh,
  className = '
}) => {
  const [selectedTimeRangesetSelectedTimeRange] = useState('7d');
  const [selectedMetricsetSelectedMetric] = useState('visitors');
  const [isRealTimesetIsRealTime] = useState(true);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(n u m / 10000 0 0).toFix e d(1)}M`;
    if (num >= 1000) return `${(n u m / 10 0 0).toFix e d(1)}K`;
    return num.toString();
  };

  const formatPercentage = (num: number) => `${n u m.toFix e d(1)}%`;

  const getMetricColor = (value: numberthresholds: { good: number; warning: number }) => {
    if (value >= thresholds.good) return 'text-green-500';
    if (value >= thresholds.warning) return 'text-yellow-500';
    return 'text-red-500';
  };

  const timeRangeOptions = [
    { value: '1d'label: 'Last24Hours' },
    { value: '7d'label: 'Last7Days' },
    { value: '30d'label: 'Last30Days' },
    { value: '90d'label: 'Last90Days' }
  ];

  const metricOptions = [
    { value: 'visitors'label: 'Visitors' },
    { value: 'pageViews'label: 'Page Views' },
    { value: 'bounceRate'label: 'Bounce Rate' },
    { value: 'conversionRate'label: 'Conversion Rate' }
  ];

  return (
    <div className={`bg-whi t e da r k:bg-gr a y-8 0 0 round e d-lg shad o w-lg p-6 ${classNa m e}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white" id="analytics-dashboard">Analytics Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400">Real-time insights and performance metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 round e d-fu l l ${isRealTi m e ? 'bg-gre e n-5 0 0' : 'bg-gr a y-4 0 0'}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isRealTime ? 'Real-time' : 'Paused'}
            </span>
          </div>
          <button
            onClick={onDataRefresh}
            className="px-4 py-2 bg-blue-500hover:bg-blue-600text-white rounded-lg text-sm font-medium transition-colors"
           aria-label="Refresh">
            Refresh
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700dark:text-gray-300">Time Range:</label>
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3py-1border border-gray-300dark: border-gray-600rounded-lg bg-white dark:bg-gray-700text-gray-900dar k:text-white"
          >
            {timeRangeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700dark:text-gray-300">Metric:</label>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-3py-1border border-gray-300dark: border-gray-600rounded-lg bg-white dark:bg-gray-700text-gray-900dar k:text-white"
          >
            {metricOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() = aria-label="setIsRealTime(!isRealTime)}
          aria-label={isRealTime ? 'Disable real-time updates' : 'Enable real-time updates'}
          className={`px-4 p y-2round e d-lg te x t-sm fo n t-medi u m transiti o n-colo r s ${
            isRealTi m e
              ? 'bg-gre e n-500hov e r:bg-gre e n-600te x t-whi t e'
              : 'bg-gr a y-500ho v e r:bg-gr a y-600te x t-whi t e'
          }`}">setIsRealTime(!isRealTime)}
          aria-label={isRealTime ? 'Disable real-time updates' : 'Enable real-time updates'}
          className={`px-4 p y-2round e d-lg te x t-sm fo n t-medi u m transiti o n-colo r s ${
            isRealTi m e
              ? 'bg-gre e n-500hov e r:bg-gre e n-600te x t-whi t e'
              : 'bg-gr a y-500ho v e r:bg-gr a y-600te x t-whi t e'
          }`}
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: 1y: 0 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white"
        >
          <div className="text-sm opacity-90 mb-1">Total Visitors</div>
          <div className="text-2xl font-bold">{formatNumber(data.uniqueVisitors)}</div>
          <div className="text-sm opacity-90">+12% from last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-green-500to-green-600rounded-lg p-4 text-white"
        >
          <div className="text-sm opacity-90 mb-1">Page Views</div>
          <div className="text-2xl font-bold">{formatNumber(data.pageViews)}</div>
          <div className="text-sm opacity-90">+8% from last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-yellow-500to-yellow-600rounded-lg p-4 text-white"
        >
          <div className="text-sm opacity-90 mb-1">Bounce Rate</div>
          <div className={`te x t-2 x l fo n t-bo l d ${getMetricCol o r(da t a.bounceRa t e { go o d: 40 warning: 60 })}`}
            {formatPercentage(data.bounceRate)}
          </div>
          <div className="text-sm opacity-90">-3% from last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-purple-500to-purple-600rounded-lg p-4 text-white"
        >
          <div className="text-sm opacity-90 mb-1">Conversion Rate</div>
          <div className={`te x t-2 x l fo n t-bo l d ${getMetricCol o r(da t a.conversionRa t e { go o d: 3 warning: 1.5 })}`}
            {formatPercentage(data.conversionRate)}
          </div>
          <div className="text-sm opacity-90">+15% from last period</div>
        </motion.div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0scale: 0.95 }}
          animate={{ opacity: 1scale: 1 }}
          className="bg-gray-50dark: bg-gray-700rounded-lgp-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-whitemb-4" id="traffic-sources">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.trafficSources}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ namepercentage }) => `${na m e} (${percenta g e}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="visitors"
              >
                {data.trafficSources.map((entryindex) => (
                  <Cell key={`ce l l-${ind e x}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Device Types */}
        <motion.div
          initial={{ opacity: 0scale: 0.95 }}
          animate={{ opacity: 1scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-50dark: bg-gray-700rounded-lgp-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-whitemb-4" id="device-types">Device Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.deviceTypes}>
              <CartesianGrid strokeDasharray="33" />
              <XAxis dataKey="device" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Hourly Traffic */}
        <motion.div
          initial={{ opacity: 0scale: 0.95 }}
          animate={{ opacity: 1scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50dark: bg-gray-700rounded-lgp-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-whitemb-4" id="hourly-traffic">Hourly Traffic</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.hourlyData}>
              <CartesianGrid strokeDasharray="33" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0scale: 0.95 }}
          animate={{ opacity: 1scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50dark: bg-gray-700rounded-lgp-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-whitemb-4" id="top-countries">Top Countries</h3>
          <div className="space-y-3">
            {data.geographicData.slice(05).map((countryindex) => (
              <div key={country.country} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4h-4rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <span className="text-gray-900 dark:text-white">{country.country}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900 dark:text-white">{formatNumber(country.visitors)}</div>
                  <div className="text-sm text-gray-600dark:text-gray-400">{country.percentage}%</div>
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
            initial={{ opacity: 0height: 0 }}
            animate={{ opacity: 1height: 'auto' }}
            exit={{ opacity: 0height: 0 }}
            className="bg-gradient-to-r from-green-50to-blue-50dark:from-green-900/20dark:to-blue-900/20rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white" id="real-time-activity">Real-time Activity</h3>
                <p className="text-gray-600dark:text-gray-400">Live visitor count and activity</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600dark:text-green-400">
                  {data.realTimeVisitors}
                </div>
                <div className="text-sm text-gray-600dark:text-gray-400">visitors online</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedAnalyticsDashboard;