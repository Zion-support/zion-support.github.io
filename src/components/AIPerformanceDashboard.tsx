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
}

interface AIInsights {
  predictedHighRiskActions: string[];
  recommendedImprovements: string[];
  errorTrends: Array<{
    category: string;
    trend: 'increasing' | 'decreasing' | 'stable';
  }>;
}

interface ErrorReport {
  severity: string;
  message: string;
  lastOccurrence: string | number;
  occurrenceCount: number;
  context: {
    component?: string;
    action?: string;
  };
  aiPredictedImpact?: number;
  resolutionSuggestions?: string[];
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [insights, setInsights] = useState<AIInsights | null>(null);
  const [errors, setErrors] = useState<ErrorReport[]>([]);

  useEffect(() => {
    if (isVisible) {
      const updateData = () => {
        try {
          const performanceMetrics = enhancedErrorHandler.getPerformanceMetrics();
          const aiInsights = enhancedErrorHandler.getAIInsights();
          const errorReports = enhancedErrorHandler.getErrorReports().slice(0, 10);
          
          // Type-safe conversion
          setMetrics(performanceMetrics as {
            errorRate: number;
            avgResolutionTime: number;
            criticalErrorsToday: number;
            userImpactScore: number;
          });
          
          setInsights(aiInsights as {
            predictedHighRiskActions: string[];
            recommendedImprovements: string[];
            errorTrends: Array<{ category: string; trend: "increasing" | "decreasing" | "stable" }>;
          });
          
          setErrors(errorReports.map(error => ({
            ...error,
            occurrenceCount: 1,
            lastOccurrence: new Date(error.lastOccurrence).getTime()
          })));
        } catch (error) {
          console.error('Failed to fetch dashboard data:', error);
        }
      };

      updateData();
      const interval = setInterval(updateData, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return '📈';
      case 'decreasing': return '📉';
      case 'stable': return '➡️';
      default: return '❓';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🤖 AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close dashboard"
          >
            ×
          </button>
        </div>

        {/* Performance Metrics */}
        {metrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
              <h3 className="text-sm font-medium opacity-90">Error Rate (per hour)</h3>
              <p className="text-2xl font-bold">{metrics.errorRate}</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-lg">
              <h3 className="text-sm font-medium opacity-90">Critical Errors Today</h3>
              <p className="text-2xl font-bold">{metrics.criticalErrorsToday}</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-lg">
              <h3 className="text-sm font-medium opacity-90">User Impact Score</h3>
              <p className="text-2xl font-bold">{metrics.userImpactScore}/100</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
              <h3 className="text-sm font-medium opacity-90">Avg Resolution Time</h3>
              <p className="text-2xl font-bold">{Math.round(metrics.avgResolutionTime)}min</p>
            </div>
          </div>
        )}

        {/* AI Insights */}
        {insights && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">🎯 High-Risk Actions</h3>
              <div className="space-y-2">
                {insights.predictedHighRiskActions.length > 0 ? (
                  insights.predictedHighRiskActions.map((action: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span className="text-sm text-gray-700">{action}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No high-risk actions predicted</p>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">💡 Recommended Improvements</h3>
              <div className="space-y-2">
                {insights.recommendedImprovements.map((improvement: string, index: number) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">💡</span>
                    <span className="text-sm text-gray-700">{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Error Trends */}
        {insights && (
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">📊 Error Trends (7 days)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {insights.errorTrends.map((trend, index: number) => (
                <div key={index} className="bg-white p-3 rounded border">
                  <div className="flex items-center justify-between">
                    <span className="font-medium capitalize">{String(trend.category)}</span>
                    <span className="text-lg">{getTrendIcon(String(trend.trend))}</span>
                  </div>
                  <div className={`text-sm mt-1 ${
                    trend.trend === 'increasing' ? 'text-red-600' :
                    trend.trend === 'decreasing' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {String(trend.trend)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Errors */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">🚨 Recent Errors</h3>
          <div className="space-y-4">
            {errors.length > 0 ? (
              errors.map((error, index) => (
                <div key={index} className="bg-white p-4 rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(error.severity)}`}>
                      {error.severity}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(typeof error.lastOccurrence === 'string' ? error.lastOccurrence : error.lastOccurrence).toLocaleString()}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">{error.message}</h4>
                  <div className="text-sm text-gray-600">
                    Component: {error.context.component || 'Unknown'} | 
                    Action: {error.context.action || 'Unknown'} |
                    Count: {String(error.occurrenceCount)}
                  </div>
                  {error.aiPredictedImpact && (
                    <div className="text-sm text-blue-600 mt-1">
                      🤖 AI Impact Score: {Math.round(error.aiPredictedImpact * 100)}%
                    </div>
                  )}
                  {error.resolutionSuggestions && error.resolutionSuggestions.length > 0 && (
                    <div className="mt-3 p-3 bg-green-50 rounded">
                      <h5 className="font-medium text-green-800 mb-2">💡 Resolution Suggestions:</h5>
                      <ul className="space-y-1">
                        {error.resolutionSuggestions.map((suggestion: string, idx: number) => (
                          <li key={idx} className="text-sm text-green-700 flex items-start">
                            <span className="mr-2">•</span>
                            <span>{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No recent errors</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;