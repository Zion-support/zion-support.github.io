import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Shield, Globe, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  tti: number;
  speedIndex: number;
  totalBlockingTime: number;
  cumulativeLayoutShift: number;
}

interface PerformanceScore {
  overall: number;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

interface PerformanceData {
  metrics: PerformanceMetrics;
  scores: PerformanceScore;
  recommendations: string[];
  lastUpdated: string;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<keyof PerformanceMetrics>('fcp');

  const fetchPerformanceData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock performance data
      const mockData: PerformanceData = {
        metrics: {
          fcp: 1.2,
          lcp: 2.5,
          fid: 50,
          cls: 0.1,
          ttfb: 200,
          fmp: 1.8,
          tti: 3.2,
          speedIndex: 2.1,
          totalBlockingTime: 150,
          cumulativeLayoutShift: 0.05
        },
        scores: {
          overall: 85,
          performance: 78,
          accessibility: 92,
          bestPractices: 88,
          seo: 90
        },
        recommendations: [
          'Optimize images and use modern formats like WebP',
          'Implement lazy loading for below-the-fold content',
          'Minify CSS and JavaScript files',
          'Enable browser caching',
          'Use a Content Delivery Network (CDN)'
        ],
        lastUpdated: new Date().toISOString()
      };
      
      setPerformanceData(mockData);
    } catch (err) {
      setError('Failed to fetch performance data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPerformanceData();
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchPerformanceData, 30000);
    return () => clearInterval(interval);
  }, [fetchPerformanceData]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const formatMetricValue = (metric: keyof PerformanceMetrics, value: number): string => {
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fmp':
      case 'tti':
      case 'speedIndex':
        return `${value.toFixed(1)}s`;
      case 'fid':
      case 'ttfb':
      case 'totalBlockingTime':
        return `${value}ms`;
      case 'cls':
      case 'cumulativeLayoutShift':
        return value.toFixed(3);
      default:
        return value.toString();
    }
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds = {
      fcp: { good: 1.8, poor: 3.0 },
      lcp: { good: 2.5, poor: 4.0 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
      fmp: { good: 2.0, poor: 3.0 },
      tti: { good: 3.8, poor: 7.3 },
      speedIndex: { good: 3.4, poor: 5.8 },
      totalBlockingTime: { good: 200, poor: 600 },
      cumulativeLayoutShift: { good: 0.1, poor: 0.25 }
    };

    const threshold = thresholds[metric];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <p className="text-red-600">{error}</p>
        <button
          onClick={fetchPerformanceData}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!performanceData) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Performance Monitor</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Activity className="h-4 w-4" />
          Last updated: {new Date(performanceData.lastUpdated).toLocaleTimeString()}
        </div>
      </div>

      {/* Overall Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(performanceData.scores).map(([key, score]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${getScoreBgColor(score)}`}
          >
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                {score}
              </div>
              <div className="text-sm text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Web Vitals */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(['fcp', 'lcp', 'cls'] as const).map((metric) => {
            const value = performanceData.metrics[metric];
            const status = getMetricStatus(metric, value);
            const statusColors = {
              good: 'text-green-600 bg-green-100',
              'needs-improvement': 'text-yellow-600 bg-yellow-100',
              poor: 'text-red-600 bg-red-100'
            };

            return (
              <div key={metric} className="text-center">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
                  {status === 'good' && <CheckCircle className="h-4 w-4 mr-1" />}
                  {status === 'needs-improvement' && <AlertTriangle className="h-4 w-4 mr-1" />}
                  {status === 'poor' && <AlertTriangle className="h-4 w-4 mr-1" />}
                  {status.replace('-', ' ')}
                </div>
                <div className="mt-2">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatMetricValue(metric, value)}
                  </div>
                  <div className="text-sm text-gray-600 uppercase">
                    {metric}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(performanceData.metrics).map(([metric, value]) => (
            <div
              key={metric}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                selectedMetric === metric ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedMetric(metric as keyof PerformanceMetrics)}
            >
              <div className="text-sm text-gray-600 uppercase mb-1">
                {metric}
              </div>
              <div className="text-xl font-bold text-gray-900">
                {formatMetricValue(metric as keyof PerformanceMetrics, value)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
        <div className="space-y-3">
          {performanceData.recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{recommendation}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;