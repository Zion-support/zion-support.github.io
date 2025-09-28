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
  const [errors, setErrors] = useState<ErrorReport[]>([]);

  useEffect(() => {
    if (isVisible) {
      const updateData = () => {
        try {
          setMetrics(enhancedErrorHandler.getPerformanceMetrics() as PerformanceMetrics);
          setInsights(enhancedErrorHandler.getAIInsights() as AIInsights);
          setErrors(enhancedErrorHandler.getErrorReports().slice(0, 10) as unknown as ErrorReport[]);
        } catch (error) {
          console.error('Failed to fetch dashboard data:', error);
        }
      };

      updateData();
      const interval = setInterval(updateData, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Metrics */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Error Rate</p>
                <p className="text-2xl font-bold">{metrics?.errorRate || 0}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Critical Errors Today</p>
                <p className="text-2xl font-bold">{metrics?.criticalErrorsToday || 0}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">User Impact Score</p>
                <p className="text-2xl font-bold">{metrics?.userImpactScore || 0}/100</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Avg Resolution Time</p>
                <p className="text-2xl font-bold">{Math.round(Number(metrics?.avgResolutionTime) || 0)}min</p>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          {insights && (
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
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
                    {insights.errorTrends.map((trend: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                        <span className="text-sm text-gray-700">{trend.category}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">
                            {trend.trend}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Reports */}
          {errors && errors.length > 0 && (
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-800">Recent Errors</h3>
              <div className="space-y-3">
                {errors.slice(0, 5).map((error: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(error.severity)}`}>
                        {error.severity.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-500">
                        {error.lastOccurrence}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{error.message}</p>
                    {error.context && (
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Context:</span> {error.context.component || 'Unknown'} - {error.context.action || 'Unknown'}
                      </div>
                    )}
                    {error.resolutionSuggestions && error.resolutionSuggestions.length > 0 && (
                      <div className="mt-2">
                        <span className="text-xs font-medium text-gray-600">Suggestions:</span>
                        <ul className="mt-1 space-y-1">
                          {error.resolutionSuggestions.map((suggestion: string, suggestionIndex: number) => (
                            <li key={suggestionIndex} className="text-xs text-gray-600 flex items-start">
                              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></span>
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
          )}
        </div>
      </div>
    </div>
  );
};
                      <div className="mt-3 p-3 bg-green-50 rounded">
                        <h5 className="text-sm font-medium text-green-800 mb-2">💡 AI Suggestions:</h5>
                        <ul className="text-sm text-green-700 space-y-1">
                          {error.resolutionSuggestions.map((suggestion: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-600">•</span>
                              {suggestion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
=======
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
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;