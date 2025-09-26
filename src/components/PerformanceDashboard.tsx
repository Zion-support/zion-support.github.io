import React, { useState, useEffect, useCallback } from 'react';
import { DataVisualization } from './DataVisualization';

interface PerformanceMetrics {
  timestamp: number;
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
  memoryUsage: number;
  networkRequests: number;
  errors: number;
}

interface PerformanceDashboardProps {
  className?: string;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = "" }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');

  const fetchPerformanceMetrics = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Simulate API call - in real implementation, this would fetch from your analytics API
      const mockMetrics: PerformanceMetrics[] = Array.from({ length: 24 }, (_, i) => ({
        timestamp: Date.now() - (23 - i) * 60 * 60 * 1000, // Last 24 hours
        pageLoadTime: Math.random() * 2000 + 500,
        firstContentfulPaint: Math.random() * 1000 + 200,
        largestContentfulPaint: Math.random() * 1500 + 300,
        cumulativeLayoutShift: Math.random() * 0.1,
        firstInputDelay: Math.random() * 100 + 10,
        totalBlockingTime: Math.random() * 300 + 50,
        memoryUsage: Math.random() * 50 + 10,
        networkRequests: Math.floor(Math.random() * 50 + 10),
        errors: Math.floor(Math.random() * 5)
      }));

      setMetrics(mockMetrics);
    } catch (error) {
      console.error('Failed to fetch performance metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPerformanceMetrics();
    const interval = setInterval(fetchPerformanceMetrics, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, [fetchPerformanceMetrics]);

  const getAverageMetric = (key: keyof PerformanceMetrics) => {
    if (metrics.length === 0) return 0;
    const sum = metrics.reduce((acc, metric) => acc + metric[key] as number, 0);
    return sum / metrics.length;
  };

  const getLatestMetric = (key: keyof PerformanceMetrics) => {
    if (metrics.length === 0) return 0;
    return metrics[metrics.length - 1][key] as number;
  };

  const getPerformanceScore = () => {
    const lcp = getAverageMetric('largestContentfulPaint');
    const fid = getAverageMetric('firstInputDelay');
    const cls = getAverageMetric('cumulativeLayoutShift');
    
    // Simplified Core Web Vitals scoring
    let score = 100;
    if (lcp > 2500) score -= 30;
    else if (lcp > 4000) score -= 50;
    
    if (fid > 100) score -= 20;
    else if (fid > 300) score -= 40;
    
    if (cls > 0.1) score -= 20;
    else if (cls > 0.25) score -= 40;
    
    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();
  const scoreColor = performanceScore >= 90 ? 'text-green-600' : 
                    performanceScore >= 70 ? 'text-yellow-600' : 'text-red-600';

  const chartData = {
    labels: metrics.map(m => new Date(m.timestamp).toLocaleTimeString()),
    datasets: [{
      label: 'Page Load Time (ms)',
      data: metrics.map(m => m.pageLoadTime),
      backgroundColor: '#3B82F6',
      borderColor: '#1D4ED8',
      borderWidth: 2
    }]
  };

  const memoryData = {
    labels: metrics.map(m => new Date(m.timestamp).toLocaleTimeString()),
    datasets: [{
      label: 'Memory Usage (MB)',
      data: metrics.map(m => m.memoryUsage),
      backgroundColor: '#10B981',
      borderColor: '#059669',
      borderWidth: 2
    }]
  };

  const errorData = {
    labels: ['Errors', 'Network Issues', 'Performance Issues', 'Other'],
    datasets: [{
      label: 'Error Count',
      data: [
        metrics.reduce((sum, m) => sum + m.errors, 0),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 3)
      ],
      backgroundColor: ['#EF4444', '#F59E0B', '#8B5CF6', '#6B7280'],
      borderColor: ['#DC2626', '#D97706', '#7C3AED', '#4B5563'],
      borderWidth: 2
    }]
  };

  if (isLoading) {
    return (
      <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Performance Score */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Performance Overview</h2>
          <div className="flex space-x-2">
            {(['1h', '24h', '7d', '30d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setSelectedTimeRange(range)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedTimeRange === range
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className={`text-3xl font-bold ${scoreColor}`}>
              {performanceScore}
            </div>
            <div className="text-sm text-gray-600">Performance Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(getAverageMetric('pageLoadTime'))}ms
            </div>
            <div className="text-sm text-gray-600">Avg Load Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(getAverageMetric('memoryUsage'))}MB
            </div>
            <div className="text-sm text-gray-600">Memory Usage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {metrics.reduce((sum, m) => sum + m.errors, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Errors</div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataVisualization
          type="line"
          data={chartData}
          title="Page Load Time Trend"
          height={300}
        />
        <DataVisualization
          type="line"
          data={memoryData}
          title="Memory Usage Trend"
          height={300}
        />
      </div>

      {/* Error Distribution */}
      <DataVisualization
        type="pie"
        data={errorData}
        title="Error Distribution"
        height={300}
      />

      {/* Detailed Metrics Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metric
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Largest Contentful Paint
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {Math.round(getLatestMetric('largestContentfulPaint'))}ms
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {Math.round(getAverageMetric('largestContentfulPaint'))}ms
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    getLatestMetric('largestContentfulPaint') < 2500 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {getLatestMetric('largestContentfulPaint') < 2500 ? 'Good' : 'Needs Improvement'}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  First Input Delay
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {Math.round(getLatestMetric('firstInputDelay'))}ms
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {Math.round(getAverageMetric('firstInputDelay'))}ms
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    getLatestMetric('firstInputDelay') < 100 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {getLatestMetric('firstInputDelay') < 100 ? 'Good' : 'Needs Improvement'}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Cumulative Layout Shift
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {getLatestMetric('cumulativeLayoutShift').toFixed(3)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {getAverageMetric('cumulativeLayoutShift').toFixed(3)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    getLatestMetric('cumulativeLayoutShift') < 0.1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {getLatestMetric('cumulativeLayoutShift') < 0.1 ? 'Good' : 'Needs Improvement'}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};