import React, { useState, useEffect } from 'react';
import { enhancedErrorHandler } from '../utils/enhancedErrorHandling';

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface PerformanceMetrics {
  errorRate: number;
  criticalErrorsToday: number;
  userImpactScore: number;
  avgResolutionTime: number;
  [key: string]: unknown;
}

interface ErrorReport {
  id: string;
  message: string;
  severity: string;
  lastOccurrence: string;
  context: {
    component?: string;
    action?: string;
  };
  aiPredictedImpact?: number;
  resolutionSuggestions?: string[];
  [key: string]: unknown;
}

interface AIInsights {
  predictedHighRiskActions: string[];
  recommendedImprovements: string[];
  errorTrends: Array<{
    category: string;
    trend: 'increasing' | 'decreasing' | 'stable';
  }>;
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [insights, setInsights] = useState<AIInsights | null>(null);
  const [errorReports, setErrorReports] = useState<ErrorReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const updateData = () => {
        try {
          setMetrics(enhancedErrorHandler.getPerformanceMetrics() as PerformanceMetrics);
          setInsights(enhancedErrorHandler.getAIInsights() as AIInsights);
          setErrorReports(enhancedErrorHandler.getErrorReports().slice(0, 10) as unknown as ErrorReport[]);
        } catch (error) {
          console.error('Failed to fetch dashboard data:', error);
        }
      };

      updateData();
      const interval = setInterval(updateData, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const loadPerformanceData = async () => {
    setIsLoading(true);
    try {
      // Simulate AI-powered performance analysis
      const mockMetrics: PerformanceMetrics = {
        errorRate: Math.random() * 5,
        criticalErrorsToday: Math.floor(Math.random() * 10),
        userImpactScore: Math.random() * 100,
        avgResolutionTime: Math.random() * 120,
      };

      const mockInsights = {
        predictedHighRiskActions: [
          'High memory usage detected in component rendering',
          'Potential race condition in async operations',
          'Large bundle size affecting load times'
        ],
        recommendedImprovements: [
          'Implement lazy loading for heavy components',
          'Add error boundaries for better error handling',
          'Optimize image loading and compression'
        ],
        errorTrends: [
          { category: 'JavaScript Errors', trend: 'Decreasing' },
          { category: 'Network Errors', trend: 'Stable' },
          { category: 'Performance Issues', trend: 'Increasing' }
        ]
      };

      const mockErrorReports: ErrorReport[] = [
        {
          id: '1',
          message: 'Uncaught TypeError: Cannot read property of undefined',
          severity: 'high',
          lastOccurrence: '2 minutes ago',
          context: { component: 'UserProfile', action: 'loadData' },
          aiPredictedImpact: 85,
          resolutionSuggestions: [
            'Add null checks before accessing object properties',
            'Implement proper error boundaries',
            'Add defensive programming patterns'
          ]
        },
        {
          id: '2',
          message: 'Network request timeout',
          severity: 'medium',
          lastOccurrence: '15 minutes ago',
          context: { component: 'DataFetcher', action: 'fetchUserData' },
          aiPredictedImpact: 45,
          resolutionSuggestions: [
            'Implement retry logic with exponential backoff',
            'Add request timeout configuration',
            'Consider implementing offline fallback'
          ]
        }
      ];

      setMetrics(mockMetrics);
      setInsights(mockInsights);
      setErrorReports(mockErrorReports);
    } catch (error) {
      enhancedErrorHandler.handleError(error as Error, {
        component: 'AIPerformanceDashboard',
        action: 'loadPerformanceData'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-500 bg-red-100';
      case 'medium': return 'text-yellow-500 bg-yellow-100';
      case 'low': return 'text-green-500 bg-green-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const getImpactColor = (impact: number) => {
    if (impact >= 70) return 'text-red-500';
    if (impact >= 40) return 'text-yellow-500';
    return 'text-green-500';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Performance Metrics */}
              {metrics && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-blue-600">Error Rate</h3>
                    <p className="text-2xl font-bold text-blue-900">{metrics.errorRate.toFixed(2)}%</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-red-600">Critical Errors Today</h3>
                    <p className="text-2xl font-bold text-red-900">{metrics.criticalErrorsToday}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-yellow-600">User Impact Score</h3>
                    <p className="text-2xl font-bold text-yellow-900">{metrics.userImpactScore.toFixed(0)}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-green-600">Avg Resolution Time</h3>
                    <p className="text-2xl font-bold text-green-900">{metrics.avgResolutionTime.toFixed(0)}m</p>
                  </div>
                </div>
              )}

          {/* AI Insights */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
            {insights && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Predicted High-Risk Actions</h4>
                  {insights.predictedHighRiskActions.length > 0 ? (
                    <ul className="space-y-1">
                      {insights.predictedHighRiskActions.map((action: string, index: number) => (
                        <li key={index} className="text-sm text-red-600 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-green-600">No high-risk actions predicted</p>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Recommended Improvements</h4>
                  <ul className="space-y-1">
                    {insights.recommendedImprovements.map((improvement: string, index: number) => (
                      <li key={index} className="text-sm text-blue-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Error Trends</h4>
                  <div className="space-y-2">
                    {insights.errorTrends.map((trend, index: number) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium capitalize">{trend.category}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{getTrendIcon(trend.trend)}</span>
                          <span className="text-sm text-gray-600">
                            {trend.trend}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        )}

        {/* Recent Errors */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Recent Errors</h3>
          <div className="space-y-3">
            {errors.map((error) => (
              <div key={error.id} className="border rounded-lg p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(error.severity)}`}>
                    {error.severity}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(error.lastOccurrence).toLocaleString()}
                  </span>
                </div>
                <h4 className="font-medium text-gray-800 mb-1">{error.message}</h4>
                <div className="text-sm text-gray-600 mb-2">
                  Component: {error.context.component || 'Unknown'} |
                  Action: {error.context.action || 'Unknown'} |
                  ID: {error.id}
                </div>
                {error.aiPredictedImpact && (
                  <div className="text-sm text-blue-600 mt-1">
                    🤖 AI Impact Score: {Math.round(Number(error.aiPredictedImpact) * 100)}%
                  </div>
                )}
                {error.resolutionSuggestions && error.resolutionSuggestions.length > 0 && (
                  <div className="mt-3 p-3 bg-green-50 rounded">
                    <h5 className="font-medium text-green-800 mb-2">Resolution Suggestions:</h5>
                    <ul className="space-y-1">
                      {error.resolutionSuggestions.map((suggestion: string, idx: number) => (
                        <li key={idx} className="text-sm text-green-700 flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Error Trends */}
              {insights && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Error Trends</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {insights.errorTrends.map((trend, index) => (
                      <div key={index} className="text-center">
                        <p className="text-sm text-gray-600">{trend.category}</p>
                        <p className={`text-lg font-semibold ${
                          trend.trend === 'Increasing' ? 'text-red-500' :
                          trend.trend === 'Decreasing' ? 'text-green-500' : 'text-yellow-500'
                        }`}>
                          {trend.trend}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Reports */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Error Reports</h3>
                <div className="space-y-3">
                  {errorReports.map((report) => (
                    <div key={report.id} className="bg-white p-4 rounded border">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(report.severity)}`}>
                            {report.severity.toUpperCase()}
                          </span>
                          {report.aiPredictedImpact && (
                            <span className={`text-sm font-medium ${getImpactColor(report.aiPredictedImpact)}`}>
                              Impact: {report.aiPredictedImpact}%
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{report.lastOccurrence}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{report.message}</p>
                      {report.context.component && (
                        <p className="text-xs text-gray-500 mb-2">
                          Component: {report.context.component} | Action: {report.context.action}
                        </p>
                      )}
                      {report.resolutionSuggestions && report.resolutionSuggestions.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs font-medium text-gray-600 mb-1">AI Suggestions:</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {report.resolutionSuggestions.map((suggestion, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-blue-500 mr-1">•</span>
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
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