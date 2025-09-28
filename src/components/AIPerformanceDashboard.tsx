import React, { useState, useEffect } from 'react';

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
    trend: 'increasing' | 'decreasing' | 'stable';
  }>;
  [key: string]: unknown;
}

interface ErrorReport {
  severity: string;
  message: string;
  lastOccurrence: string | Date;
  occurrenceCount: number;
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
  const [insights, setInsights] = useState<AIInsights | null>(null);
  const [errorReports, setErrorReports] = useState<ErrorReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const getImpactColor = (impact: number) => {
    if (impact >= 80) return 'text-red-600';
    if (impact >= 60) return 'text-orange-600';
    if (impact >= 40) return 'text-yellow-600';
    return 'text-green-600';
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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
            aria-label="Close dashboard"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading dashboard data...</span>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Performance Metrics */}
              {metrics && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                    <h3 className="text-sm font-medium opacity-90">Error Rate</h3>
                    <p className="text-2xl font-bold">{metrics.errorRate.toFixed(2)}%</p>
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
                          <div key={index} className="bg-red-100 text-red-800 px-3 py-2 rounded text-sm">
                            ⚠️ {action}
                          </div>
                        ))
                      ) : (
                        <div className="text-green-600">✅ No high-risk actions detected</div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">💡 AI Recommendations</h3>
                    <div className="space-y-2">
                      {insights.recommendedImprovements.map((improvement: string, index: number) => (
                        <div key={index} className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm">
                          💡 {improvement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Error Trends */}
              {insights && insights.errorTrends && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">📊 Error Trends</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {insights.errorTrends.map((trend, index) => (
                      <div key={index} className="bg-white p-3 rounded border">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-700">{trend.category}</span>
                          <span className="text-2xl">{getTrendIcon(trend.trend)}</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {trend.trend.charAt(0).toUpperCase() + trend.trend.slice(1)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Reports */}
              {errorReports.length > 0 && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Error Reports</h3>
                  <div className="space-y-3">
                    {errorReports.map((report, index) => (
                      <div key={index} className="bg-white p-4 rounded border">
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
                              {report.resolutionSuggestions.map((suggestion, suggestionIndex) => (
                                <li key={suggestionIndex} className="flex items-start">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;