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
              <p className="text-2xl font-bold">{metrics.errorRate.toFixed(2)}</p>
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
              <p className="text-2xl font-bold">{metrics.avgResolutionTime.toFixed(1)}m</p>
            </div>
          </div>
        )}

        {/* AI Insights */}
        {insights && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">🧠 AI Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">⚠️ Predicted High Risk Actions</h4>
                <ul className="space-y-1">
                  {insights.predictedHighRiskActions.map((action, index) => (
                    <li key={index} className="text-sm text-blue-700">• {action}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">💡 Recommended Improvements</h4>
                <ul className="space-y-1">
                  {insights.recommendedImprovements.map((improvement, index) => (
                    <li key={index} className="text-sm text-green-700">• {improvement}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Error Trends */}
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">📊 Error Trends</h4>
              <div className="space-y-2">
                {insights.errorTrends.map((trend, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{trend.category}</span>
                    <span className="flex items-center text-sm">
                      {getTrendIcon(trend.trend)} {trend.trend}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Error Reports */}
        {errors.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">🚨 Recent Error Reports</h3>
            <div className="space-y-3">
              {errors.map((error) => (
                <div key={error.id} className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-800">{error.message}</h4>
                      <p className="text-sm text-red-600 mt-1">
                        Severity: {error.severity} | Last: {error.lastOccurrence}
                      </p>
                      {error.context.component && (
                        <p className="text-xs text-red-500 mt-1">
                          Component: {error.context.component}
                        </p>
                      )}
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      error.severity === 'critical' ? 'bg-red-100 text-red-800' :
                      error.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {error.severity}
                    </span>
                  </div>
                  {error.aiPredictedImpact && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        AI Predicted Impact: {error.aiPredictedImpact}/100
                      </p>
                    </div>
                  )}
                  {error.resolutionSuggestions && error.resolutionSuggestions.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-700">Suggested Actions:</p>
                      <ul className="text-sm text-gray-600 mt-1">
                        {error.resolutionSuggestions.map((suggestion, index) => (
                          <li key={index}>• {suggestion}</li>
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
  );
};

export default AIPerformanceDashboard;