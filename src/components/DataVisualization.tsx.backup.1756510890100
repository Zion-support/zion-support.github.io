import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  Users, 
  DollarSign,
  Calendar,
  Target,
  ArrowUp,
  ArrowDown,
  Minus,
  Eye,
  Download,
  Share2,
  RefreshCw
} from 'lucide-react';

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
      icon: <DollarSign className="w-5 h-5" />,
      color: 'text-green-400'
    },
    {
      title: 'Active Users',
      value: '45.2K',
      change: 8.1,
      changeType: 'increase',
      icon: <Users className="w-5 h-5" />,
      color: 'text-blue-400'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: -2.4,
      changeType: 'decrease',
      icon: <Target className="w-5 h-5" />,
      color: 'text-yellow-400'
    },
    {
      title: 'Avg Session',
      value: '2m 47s',
      change: 0.0,
      changeType: 'neutral',
      icon: <Activity className="w-5 h-5" />,
      color: 'text-purple-400'
    }
  ]);

  // Simulate data refresh
  const refreshData = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update chart data with new random values
    setChartData(prev => ({
      ...prev,
      datasets: [{
        ...prev.datasets[0],
        data: prev.datasets[0].data.map(() => Math.floor(Math.random() * 100) + 20)
      }]
    }));

    // Update metrics with new random values
    setMetrics(prev => prev.map(metric => ({
      ...metric,
      change: Math.random() > 0.5 ? 
        (Math.random() * 20 - 10) : 
        (Math.random() * 15 - 7.5),
      changeType: Math.random() > 0.6 ? 'increase' : 
                 Math.random() > 0.3 ? 'decrease' : 'neutral'
    })));

    setIsLoading(false);
  };

  // Get change icon and color
  const getChangeDisplay = (change: number, changeType: string) => {
    const icon = changeType === 'increase' ? <ArrowUp className="w-4 h-4" /> :
                 changeType === 'decrease' ? <ArrowDown className="w-4 h-4" /> :
                 <Minus className="w-4 h-4" />;
    
    const color = changeType === 'increase' ? 'text-green-400' :
                  changeType === 'decrease' ? 'text-red-400' :
                  'text-zinc-400';
    
    return { icon, color };
  };

  // Generate pie chart data
  const pieChartData = {
    labels: ['AI Services', 'Cloud Solutions', 'Security', 'Consulting', 'Development'],
    datasets: [{
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        'rgba(34, 221, 210, 0.8)',
        'rgba(140, 21, 233, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)'
      ],
      borderColor: [
        'rgba(34, 221, 210, 1)',
        'rgba(140, 21, 233, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(245, 158, 11, 1)'
      ],
      borderWidth: 2
    }]
  };

  // Generate line chart data
  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Performance',
      data: [65, 59, 80, 81, 56, 55, 70],
      backgroundColor: 'rgba(34, 221, 210, 0.1)',
      borderColor: 'rgba(34, 221, 210, 1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4
    }]
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
          <p className="text-zinc-400">Comprehensive analytics and insights for your business</p>
        </div>
        
        {showActions && (
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            {/* Time Range Selector */}
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
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
              className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>

            {/* Export Button */}
            <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>

            {/* Share Button */}
            <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        )}
      </div>

      {/* Metrics Cards */}
      {showMetrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const { icon, color } = getChangeDisplay(metric.change, metric.changeType);
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
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
        <div className="space-y-8">
          {/* Chart Type Selector */}
          <div className="flex items-center gap-2 p-2 bg-zinc-900/30 rounded-lg w-fit">
            {[
              { id: 'bar', label: 'Bar Chart', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'pie', label: 'Pie Chart', icon: <PieChart className="w-4 h-4" /> },
              { id: 'line', label: 'Line Chart', icon: <TrendingUp className="w-4 h-4" /> }
            ].map((chartType) => (
              <button
                key={chartType.id}
                onClick={() => setActiveChart(chartType.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
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
          <div className="bg-zinc-900/30 border border-zinc-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">
                {activeChart === 'bar' && 'Revenue Trends'}
                {activeChart === 'pie' && 'Service Distribution'}
                {activeChart === 'line' && 'Weekly Performance'}
              </h3>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Eye className="w-4 h-4" />
                <span>Live Data</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Chart Container */}
            <div className="h-80 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChart}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {activeChart === 'bar' && (
                    <div className="w-full h-full flex items-end justify-center gap-4">
                      {chartData.labels.map((label, index) => (
                        <div key={label} className="flex flex-col items-center">
                          <div className="text-sm text-zinc-400 mb-2">{label}</div>
                          <div className="relative">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${chartData.datasets[0].data[index]}%` }}
                              transition={{ delay: index * 0.1, duration: 0.8 }}
                              className="w-12 bg-gradient-to-t from-zion-cyan to-zion-cyan/50 rounded-t-lg"
                              style={{ maxHeight: '200px' }}
                            />
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-300 bg-zinc-800 px-2 py-1 rounded">
                              {chartData.datasets[0].data[index]}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeChart === 'pie' && (
                    <div className="relative w-64 h-64">
                      <svg className="w-full h-full transform -rotate-90">
                        {pieChartData.datasets[0].data.map((value, index) => {
                          const percentage = value / pieChartData.datasets[0].data.reduce((a, b) => a + b, 0);
                          const angle = percentage * 360;
                          const startAngle = pieChartData.datasets[0].data
                            .slice(0, index)
                            .reduce((a, b) => a + (b / pieChartData.datasets[0].data.reduce((c, d) => c + d, 0)) * 360, 0);
                          
                          const x1 = 128 + 100 * Math.cos(startAngle * Math.PI / 180);
                          const y1 = 128 + 100 * Math.sin(startAngle * Math.PI / 180);
                          const x2 = 128 + 100 * Math.cos((startAngle + angle) * Math.PI / 180);
                          const y2 = 128 + 100 * Math.sin((startAngle + angle) * Math.PI / 180);
                          
                          const largeArcFlag = angle > 180 ? 1 : 0;
                          
                          return (
                            <path
                              key={index}
                              d={`M 128 128 L ${x1} ${y1} A 100 100 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                              fill={pieChartData.datasets[0].backgroundColor[index]}
                              stroke={pieChartData.datasets[0].borderColor[index]}
                              strokeWidth="2"
                            />
                          );
                        })}
                      </svg>
                      
                      {/* Legend */}
                      <div className="absolute -right-32 top-0 space-y-2">
                        {pieChartData.labels.map((label, index) => (
                          <div key={label} className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded"
                              style={{ backgroundColor: pieChartData.datasets[0].backgroundColor[index] }}
                            />
                            <span className="text-sm text-zinc-300">{label}</span>
                            <span className="text-xs text-zinc-500">
                              ({pieChartData.datasets[0].data[index]}%)
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeChart === 'line' && (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 600 300">
                        {/* Grid lines */}
                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                          <line
                            key={i}
                            x1={i * 85.7}
                            y1="0"
                            x2={i * 85.7}
                            y2="300"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="1"
                          />
                        ))}
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                          <line
                            key={i}
                            x1="0"
                            y1={i * 60}
                            x2="600"
                            y2={i * 60}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="1"
                          />
                        ))}
                        
                        {/* Line chart */}
                        <polyline
                          fill="none"
                          stroke="rgba(34, 221, 210, 1)"
                          strokeWidth="3"
                          points={lineChartData.datasets[0].data.map((value, index) => 
                            `${index * 85.7 + 42.85},${300 - (value / 100) * 300}`
                          ).join(' ')}
                        />
                        
                        {/* Data points */}
                        {lineChartData.datasets[0].data.map((value, index) => (
                          <circle
                            key={index}
                            cx={index * 85.7 + 42.85}
                            cy={300 - (value / 100) * 300}
                            r="4"
                            fill="rgba(34, 221, 210, 1)"
                          />
                        ))}
                        
                        {/* Labels */}
                        {lineChartData.labels.map((label, index) => (
                          <text
                            key={label}
                            x={index * 85.7 + 42.85}
                            y="295"
                            textAnchor="middle"
                            fill="rgba(255,255,255,0.6)"
                            fontSize="12"
                          >
                            {label}
                          </text>
                        ))}
                      </svg>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      {/* Insights Section */}
      <div className="mt-8 p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-zinc-800/30 rounded-lg">
            <h4 className="font-medium text-white mb-2">Revenue Growth</h4>
            <p className="text-zinc-400 text-sm">
              Revenue has increased by 12.5% compared to last month, driven by strong AI service adoption.
            </p>
          </div>
          <div className="p-4 bg-zinc-800/30 rounded-lg">
            <h4 className="font-medium text-white mb-2">User Engagement</h4>
            <p className="text-zinc-400 text-sm">
              Active users grew by 8.1%, with improved conversion rates in the mobile segment.
            </p>
          </div>
          <div className="p-4 bg-zinc-800/30 rounded-lg">
            <h4 className="font-medium text-white mb-2">Service Performance</h4>
            <p className="text-zinc-400 text-sm">
              AI services continue to lead revenue generation, accounting for 35% of total sales.
            </p>
          </div>
          <div className="p-4 bg-zinc-800/30 rounded-lg">
            <h4 className="font-medium text-white mb-2">Market Trends</h4>
            <p className="text-zinc-400 text-sm">
              Cloud solutions show strong growth potential with increasing enterprise adoption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};