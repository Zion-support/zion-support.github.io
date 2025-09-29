import React, { useState, useEffect, useCallback } from "react";
import { enhancedErrorHandler } from "../utils/enhancedErrorHandling";

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

interface AIInsights {
  predictedHighRiskActions: string[];
  recommendedImprovements: string[];
  errorTrends: Array<{
    category: string;
    trend: "increasing" | "decreasing" | "stable";
  }>;
}

interface ErrorReport {
  id: string;
  message: string;
  lastOccurrence: string | Date;
  occurrenceCount: number;
  severity?: "low" | "medium" | "high" | "critical";
  context: {
    component?: string;
    action?: string;
  };
  aiPredictedImpact?: number;
  resolutionSuggestions?: string[];
  [key: string]: unknown;
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [insights, setInsights] = useState<{
    predictedHighRiskActions: string[];
    recommendedImprovements: string[];
    errorTrends: Array<{ category: string; trend: string }>;
  } | null>(null);
  const [errorReports, setErrorReports] = useState<ErrorReport[]>([]);

  useEffect(() => {
    if (isVisible) {
      const updateData = () => {
        try {
          // TODO: Implement dashboard data fetching
          console.log('Dashboard data update triggered');
          // For now, set some mock data
          setMetrics({
            errorRate: 0.5,
            criticalErrorsToday: 0,
            userImpactScore: 95,
            avgResolutionTime: 15
          });
          setInsights({
            predictedHighRiskActions: [],
            recommendedImprovements: ['Monitor performance metrics regularly', 'Implement error tracking'],
            errorTrends: [
              { category: 'API', trend: 'stable' },
              { category: 'UI', trend: 'decreasing' },
              { category: 'Database', trend: 'stable' }
            ]
          });
          setErrorReports([]);
        } catch (error) {
          console.error('Failed to fetch dashboard data:', error);
        }
      };

      const mockInsights: AIInsights = {
        predictedHighRiskActions: [
          "High memory usage detected in component rendering",
          "Potential race condition in async operations",
          "Unoptimized image loading may impact LCP",
        ],
        recommendedImprovements: [
          "Implement React.memo for expensive components",
          "Add error boundaries to prevent cascade failures",
          "Optimize bundle size with code splitting",
          "Add request timeout configuration",
          "Consider implementing offline fallback",
        ],
        errorTrends: [
          { category: "API", trend: "stable" as const },
          { category: "UI", trend: "decreasing" as const },
          { category: "Database", trend: "stable" as const },
        ],
      };

      const mockErrorReports: ErrorReport[] = [
        {
          id: "1",
          severity: "high",
          message: "Failed to load user data",
          lastOccurrence: new Date(),
          occurrenceCount: 15,
          context: { component: "UserProfile", action: "fetchUserData" },
          aiPredictedImpact: 75,
          resolutionSuggestions: [
            "Check API endpoint availability",
            "Implement retry logic with exponential backoff",
            "Add fallback data loading",
          ],
        },
        {
          id: "2",
          severity: "medium",
          message: "Slow rendering detected",
          lastOccurrence: new Date(Date.now() - 300000),
          occurrenceCount: 8,
          context: { component: "DataTable", action: "render" },
          aiPredictedImpact: 45,
          resolutionSuggestions: [
            "Implement virtual scrolling",
            "Add loading states",
            "Optimize data processing",
          ],
        },
      ];

      setMetrics(mockMetrics);
      setInsights(mockInsights);
      setErrorReports(mockErrorReports);
    } catch (error) {
      enhancedErrorHandler.handleComponentError(
        error as Error,
        "AIPerformanceDashboard",
        {
          retryable: true,
          maxRetries: 3,
          retryDelay: 1000,
          component: "AIPerformanceDashboard",
          action: "loadPerformanceData",
        },
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      loadPerformanceData();
    }
  }, [isVisible, loadPerformanceData]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-600 bg-red-100";
      case "high":
        return "text-orange-600 bg-orange-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getImpactColor = (impact: number) => {
    if (impact >= 70) return "text-red-500";
    if (impact >= 40) return "text-yellow-500";
    return "text-green-500";
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing":
        return "📈";
      case "decreasing":
        return "📉";
      case "stable":
        return "➡️";
      default:
        return "❓";
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            🤖 AI Performance Dashboard
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close dashboard"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
              {/* Performance Metrics */}
              {metrics && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-blue-600">
                      Error Rate
                    </h3>
                    <p className="text-2xl font-bold text-blue-900">
                      {metrics.errorRate.toFixed(2)}%
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-red-600">
                      Critical Errors Today
                    </h3>
                    <p className="text-2xl font-bold text-red-900">
                      {metrics.criticalErrorsToday}
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-yellow-600">
                      User Impact Score
                    </h3>
                    <p className="text-2xl font-bold text-yellow-900">
                      {metrics.userImpactScore.toFixed(0)}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-green-600">
                      Avg Resolution Time
                    </h3>
                    <p className="text-2xl font-bold text-green-900">
                      {metrics.avgResolutionTime.toFixed(0)}m
                    </p>
                  </div>
                </div>
              )}

              {/* AI Insights */}
              {insights && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      🔮 AI Predictions
                    </h3>
                    <div className="space-y-2">
                      {insights.predictedHighRiskActions.map(
                        (action, index) => (
                          <div
                            key={index}
                            className="text-sm text-gray-700 bg-yellow-100 p-2 rounded"
                          >
                            ⚠️ {action}
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      💡 AI Recommendations
                    </h3>
                    <div className="space-y-2">
                      {insights.recommendedImprovements.map(
                        (improvement, index) => (
                          <div
                            key={index}
                            className="text-sm text-gray-700 bg-blue-100 p-2 rounded"
                          >
                            ✨ {improvement}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Error Trends */}
              {insights?.errorTrends && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    📊 Error Trends
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {insights.errorTrends.map((trend, index) => (
                      <div key={index} className="bg-white p-3 rounded border">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{trend.category}</span>
                          <span className="text-lg">
                            {getTrendIcon(trend.trend)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {trend.trend}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Reports */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🐛 Error Reports
                </h3>
                <div className="space-y-3">
                  {errorReports.length > 0 ? (
                    errorReports.map((report) => (
                      <div
                        key={report.id}
                        className="bg-white p-4 rounded border"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center space-x-2">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(report.severity || "unknown")}`}
                            >
                              {(report.severity || "unknown").toUpperCase()}
                            </span>
                            {report.aiPredictedImpact && (
                              <div>
                                <span
                                  className={`text-sm font-medium ${getImpactColor(report.aiPredictedImpact)}`}
                                >
                                  Impact: {report.aiPredictedImpact}%
                                </span>
                              </div>
                            )}
                            <span className="text-sm text-gray-500">
                              {report.occurrenceCount} occurrences
                            </span>
                          </div>
                          <div className="mt-2">
                            <p className="text-gray-900 font-medium">
                              {report.message}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              Component: {report.context.component} | Action:{" "}
                              {report.context.action}
                            </p>
                            {report.resolutionSuggestions && (
                              <div className="mt-2">
                                <p className="text-sm font-medium text-gray-700 mb-1">
                                  AI Suggestions:
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {report.resolutionSuggestions.map(
                                    (suggestion, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-1"
                                      >
                                        <span>•</span>
                                        <span>{suggestion}</span>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      ✨ No errors detected! Your application is running
                      smoothly.
                    </div>
                  )}
                </div>
              )}

              {/* No data state */}
              {!metrics && !insights && errorReports.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">📊</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Available</h3>
                  <p className="text-gray-500">Performance data will appear here once available.</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;
