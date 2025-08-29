import { motion } from 'framer-motion';
import {
    Activity,
    ArrowDown,
    ArrowUp,
    BarChart3,
    DollarSign,
    Download,
    Eye,
    Minus,
    PieChart,
    RefreshCw,
    Share2,
    Target,
    TrendingUp,
    Users
} from 'lucide-react';
import React, { useState } from 'react';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
  color: string;
}

interface DataVisualizationProps {
  title?: string;
  showMetrics?: boolean;
  showCharts?: boolean;
  showActions?: boolean;
}

export const DataVisualization: React.FC<DataVisualizationProps> = ({
  title = "Data Analytics Dashboard",
  showMetrics = true,
  showCharts = true,
  showActions = true
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);
  const [activeChart, setActiveChart] = useState<'bar' | 'pie' | 'line'>('bar');

  // Sample data - in a real app, this would come from an API
  const [chartData, setChartData] = useState<ChartData>({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: ['rgba(34, 221, 210, 0.2)'],
      borderColor: ['rgba(34, 221, 210, 1)'],
      borderWidth: 2
    }]
  });

  const [metrics, setMetrics] = useState<MetricCard[]>([
    {
      title: 'Total Revenue',
      value: '$2.4M',
      change: 12.5,
      changeType: 'increase',
      icon: <DollarSign className="w-5 h-5" aria-hidden="true" />,
      color: 'text-green-400'
    },
    {
      title: 'Active Users',
      value: '45.2K',
      change: 8.1,
      changeType: 'increase',
      icon: <Users className="w-5 h-5" aria-hidden="true" />,
      color: 'text-blue-400'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: -2.4,
      changeType: 'decrease',
      icon: <Target className="w-5 h-5" aria-hidden="true" />,
      color: 'text-yellow-400'
    },
    {
      title: 'Avg Session',
      value: '2m 47s',
      change: 0.0,
      changeType: 'neutral',
      icon: <Activity className="w-5 h-5" aria-hidden="true" />,
      color: 'text-purple-400'
    }
  ]);

  const refreshData = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const getChangeDisplay = (change: number, changeType: 'increase' | 'decrease' | 'neutral') => {
    switch (changeType) {
      case 'increase':
        return {
          icon: <ArrowUp className="w-4 h-4" aria-hidden="true" />,
          color: 'text-green-400'
        };
      case 'decrease':
        return {
          icon: <ArrowDown className="w-4 h-4" aria-hidden="true" />,
          color: 'text-red-400'
        };
      default:
        return {
          icon: <Minus className="w-4 h-4" aria-hidden="true" />,
          color: 'text-zinc-400'
        };
    }
  };

  return (
    <div className="p-6 bg-zinc-900/20 border border-zinc-700/30 rounded-2xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-zinc-400">Real-time analytics and insights for your business</p>
        </div>

        {showActions && (
          <div className="flex flex-wrap items-center gap-3">
            {/* Time Range Selector */}
            <label htmlFor="time-range" className="sr-only">
              Select time range for data
            </label>
            <select
              id="time-range"
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
              aria-label="Select time range for data visualization"
            >
              <option value="1d">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>

            {/* Refresh Button */}
            <button
              onClick={refreshData}
              disabled={isLoading}
              aria-label={isLoading ? "Refreshing data..." : "Refresh data"}
              className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} aria-hidden="true" />
              Refresh
            </button>

            {/* Export Button */}
            <button 
              aria-label="Export data visualization"
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-zinc-700/50 focus:ring-offset-2"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Export
            </button>

            {/* Share Button */}
            <button 
              aria-label="Share data visualization"
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-zinc-700/50 focus:ring-offset-2"
            >
              <Share2 className="w-4 h-4" aria-hidden="true" />
              Share
            </button>
          </div>
        )}
      </div>

      {/* Metrics Cards */}
      {showMetrics && (
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          role="region"
          aria-label="Key performance metrics"
        >
          {metrics.map((metric, index) => {
            const { icon, color } = getChangeDisplay(metric.change, metric.changeType);
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
                role="article"
                aria-label={`${metric.title}: ${metric.value}, ${metric.change > 0 ? 'increased' : metric.change < 0 ? 'decreased' : 'unchanged'} by ${Math.abs(metric.change).toFixed(1)}%`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-zinc-800/50 ${metric.color}`}>
                    {metric.icon}
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${color}`}>
                    {icon}
                    <span>{Math.abs(metric.change).toFixed(1)}%</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
                <p className="text-zinc-400 text-sm">{metric.title}</p>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Charts Section */}
      {showCharts && (
        <div className="space-y-8" role="region" aria-label="Data charts and visualizations">
          {/* Chart Type Selector */}
          <div 
            className="flex items-center gap-2 p-2 bg-zinc-900/30 rounded-lg w-fit"
            role="tablist"
            aria-label="Chart type selection"
          >
            {[
              { id: 'bar', label: 'Bar Chart', icon: <BarChart3 className="w-4 h-4" aria-hidden="true" /> },
              { id: 'pie', label: 'Pie Chart', icon: <PieChart className="w-4 h-4" aria-hidden="true" /> },
              { id: 'line', label: 'Line Chart', icon: <TrendingUp className="w-4 h-4" aria-hidden="true" /> }
            ].map((chartType) => (
              <button
                key={chartType.id}
                onClick={() => setActiveChart(chartType.id as any)}
                role="tab"
                aria-selected={activeChart === chartType.id}
                aria-controls={`chart-${chartType.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2 ${
                  activeChart === chartType.id
                    ? 'bg-zion-cyan text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {chartType.icon}
                {chartType.label}
              </button>
            ))}
          </div>

          {/* Chart Display */}
          <div 
            className="bg-zinc-900/30 border border-zinc-700/50 rounded-xl p-6"
            role="tabpanel"
            id={`chart-${activeChart}`}
            aria-label={`${activeChart === 'bar' ? 'Revenue Trends' : activeChart === 'pie' ? 'Service Distribution' : 'Weekly Performance'} chart`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">
                {activeChart === 'bar' && 'Revenue Trends'}
                {activeChart === 'pie' && 'Service Distribution'}
                {activeChart === 'line' && 'Weekly Performance'}
              </h3>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Eye className="w-4 h-4" aria-hidden="true" />
                <span>Live Data</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-label="Data is live and updating"></div>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="h-80 bg-zinc-800/30 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-600">
              <div className="text-center text-zinc-400">
                <div className="text-6xl mb-4">
                  {activeChart === 'bar' && <BarChart3 className="mx-auto" aria-hidden="true" />}
                  {activeChart === 'pie' && <PieChart className="mx-auto" aria-hidden="true" />}
                  {activeChart === 'line' && <TrendingUp className="mx-auto" aria-hidden="true" />}
                </div>
                <p className="text-lg font-medium mb-2">
                  {activeChart === 'bar' && 'Bar Chart Visualization'}
                  {activeChart === 'pie' && 'Pie Chart Visualization'}
                  {activeChart === 'line' && 'Line Chart Visualization'}
                </p>
                <p className="text-sm">Chart data would be rendered here</p>
                <div className="mt-4 text-xs text-zinc-500">
                  <p>Sample data: {chartData.labels.join(', ')}</p>
                  <p>Values: {chartData.datasets[0].data.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};