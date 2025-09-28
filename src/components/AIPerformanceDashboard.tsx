import React, { useState, useEffect, useCallback } from 'react';
import { enhancedErrorHandler } from '../utils/enhancedErrorHandling';

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface AIInsights {
  predictedHighRiskActions: string[];
  recommendedImprovements: string[];
  errorTrends: Array<{
    category: string;
    count: number;
    trend: 'increasing' | 'decreasing' | 'stable';
  }>;
  performanceScore: number;
  optimizationSuggestions: string[];
}

interface ErrorReport {
  id: string;
  message: string;
  stack: string;
  timestamp: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  userAgent: string;
  url: string;
  lineNumber?: number;
  columnNumber?: number;
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [insights, setInsights] = useState<AIInsights | null>(null);
  const [errors, setErrors] = useState<ErrorReport[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration
  const mockMetrics: PerformanceMetrics = {
    loadTime: 1250,
    renderTime: 850,
    memoryUsage: 45.2,
    fps: 58,
    lcp: 2100,
    fid: 85,
    cls: 0.05,
    ttfb: 180
  };

  const mockInsights: AIInsights = {
    predictedHighRiskActions: [
      'Large image files detected',
      'Unused CSS rules found',
      'JavaScript bundle size exceeds threshold'
    ],
    recommendedImprovements: [
      'Implement image compression',
      'Remove unused CSS',
      'Enable code splitting',
      'Add service worker caching'
    ],
    errorTrends: [
      { category: 'JavaScript', count: 12, trend: 'decreasing' },
      { category: 'Network', count: 3, trend: 'stable' },
      { category: 'Rendering', count: 8, trend: 'increasing' }
    ],
    performanceScore: 78,
    optimizationSuggestions: [
      'Consider lazy loading for below-the-fold images',
      'Implement critical CSS inlining',
      'Add resource preloading for critical assets'
    ]
  };

  const mockErrorReports: ErrorReport[] = [
    {
      id: '1',
      message: 'Uncaught TypeError: Cannot read property of undefined',
      stack: 'Error: Cannot read property of undefined\n    at Component.render (App.js:45:12)',
      timestamp: Date.now() - 3600000,
      severity: 'high',
      category: 'JavaScript',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      url: 'https://example.com/app',
      lineNumber: 45,
      columnNumber: 12
    },
    {
      id: '2',
      message: 'Failed to load resource: net::ERR_CONNECTION_TIMED_OUT',
      stack: '',
      timestamp: Date.now() - 7200000,
      severity: 'medium',
      category: 'Network',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      url: 'https://api.example.com/data'
    }
  ];

  const loadPerformanceData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMetrics(mockMetrics);
      setInsights(mockInsights);
      setErrors(mockErrorReports);
    } catch (error) {
      console.error('Failed to load performance data:', error);
      enhancedErrorHandler.handleError(error as Error, {
        context: 'AIPerformanceDashboard',
        userId: 'anonymous',
        sessionId: 'session-123'
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      loadPerformanceData();
    }
  }, [isVisible, loadPerformanceData]);

  if (!isVisible) return null;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return '📈';
      case 'decreasing': return '📉';
      case 'stable': return '➡️';
      default: return '❓';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            🤖 AI Performance Dashboard
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Metrics */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">📊 Performance Metrics</h3>
                {metrics && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-blue-600 dark:text-blue-400">Load Time</h4>
                      <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{metrics.loadTime}ms</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-green-600 dark:text-green-400">Memory Usage</h4>
                      <p className="text-2xl font-bold text-green-900 dark:text-green-100">{metrics.memoryUsage}MB</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-purple-600 dark:text-purple-400">FPS</h4>
                      <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">{metrics.fps}</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-orange-600 dark:text-orange-400">LCP</h4>
                      <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">{metrics.lcp}ms</p>
                    </div>
                  </div>
                )}
              </div>

              {/* AI Insights */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🧠 AI Insights</h3>
                {insights && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Performance Score</h4>
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-3">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${insights.performanceScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{insights.performanceScore}/100</span>
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">⚠️ High Risk Actions</h4>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                        {insights.predictedHighRiskActions.map((action, index) => (
                          <li key={index}>• {action}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">💡 Recommendations</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        {insights.recommendedImprovements.map((improvement, index) => (
                          <li key={index}>• {improvement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Trends */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">📈 Error Trends</h3>
                {insights?.errorTrends && (
                  <div className="space-y-3">
                    {insights.errorTrends.map((trend, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-900 dark:text-white">{trend.category}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{trend.count} errors</span>
                          <span className="text-lg">{getTrendIcon(trend.trend)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Error Reports */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🐛 Error Reports</h3>
                <div className="space-y-3">
                  {errors.length > 0 ? (
                    errors.map((report) => (
                      <div key={report.id} className="bg-white dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(report.severity)}`}>
                                {report.severity.toUpperCase()}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{report.category}</span>
                            </div>
                            <p className="text-sm text-gray-900 dark:text-white font-medium mb-1">{report.message}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(report.timestamp).toLocaleString()}
                            </p>
                            {report.lineNumber && (
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Line {report.lineNumber}, Column {report.columnNumber}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      No errors reported
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;