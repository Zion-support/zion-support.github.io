import React, { useState, useEffect } from 'react';

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface PerformanceMetrics {
  errorRate: number;
  avgResolutionTime: number;
  criticalErrorsToday: number;
  userImpactScore: number;
}

interface AIInsights {
  predictedHighRiskActions: string[];
  recommendedImprovements: string[];
  errorTrends: Array<{ category: string;
    trend: 'increasing' | 'decreasing' | 'stable';
   }>;
}

interface ErrorReport {
  id: string;
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
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [insights, setInsights] = useState<AIInsights | null>(null);
  const [errors, setErrors] = useState<ErrorReport[]>([]);

  useEffect(() => {
    if (isVisible) {
      const loadPerformanceData = async () => {
        try {
          // Simulate API calls for performance data
          const mockMetrics: PerformanceMetrics = { errorRate: Math.random() * 5,
            avgResolutionTime: Math.random() * 30 + 10,
            criticalErrorsToday: Math.floor(Math.random() * 10),
            userImpactScore: Math.floor(Math.random() * 40 + 60)
           };

          const mockInsights: AIInsights = { predictedHighRiskActions: [
              'High memory usage detected in user authentication flow',
              'Potential race condition in data synchronization',
              'Slow database queries affecting user experience'
            ].slice(0, Math.floor(Math.random() * 3)),
            recommendedImprovements: [
              'Implement caching for frequently accessed data',
              'Add error boundaries to prevent cascading failures',
              'Optimize database indexes for better query performance',
              'Consider implementing circuit breaker pattern'
            ],
            errorTrends: [
              { category: 'authentication', trend: 'decreasing'  },
              { category: 'database', trend: 'stable' },
              { category: 'ui', trend: 'increasing' }
            ]
          };

          const mockErrors: ErrorReport[] = [
            {
              id: '1',
              severity: 'high',
              message: 'Failed to load user profile data',
              lastOccurrence: new Date(Date.now() - Math.random() * 3600000),
              occurrenceCount: Math.floor(Math.random() * 50 + 10),
              context: { component: 'UserProfile', action: 'load' },
              aiPredictedImpact: Math.random() * 0.8 + 0.2,
              resolutionSuggestions: [
                'Check database connection pool',
                'Implement retry mechanism with exponential backoff',
                'Add fallback to cached data'
              ]
            },
            {
              id: '2',
              severity: 'medium',
              message: 'Slow response time in search functionality',
              lastOccurrence: new Date(Date.now() - Math.random() * 1800000),
              occurrenceCount: Math.floor(Math.random() * 20 + 5),
              context: { component: 'SearchBar', action: 'query' },
              aiPredictedImpact: Math.random() * 0.6 + 0.1,
              resolutionSuggestions: [
                'Implement search result caching',
                'Add debouncing to search input',
                'Consider using Elasticsearch for better performance'
              ]
            }
          ].slice(0, Math.floor(Math.random() * 2) + 1);

          // Simulate async data loading
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Update state with mock data
          setMetrics(mockMetrics);
          setInsights(mockInsights);
          setErrors(mockErrors);
          
          console.log('Performance data loaded successfully');
        } catch (error) {
          console.error('Failed to fetch dashboard data:', error);
        }
      };

      loadPerformanceData();
      const interval = setInterval(loadPerformanceData, 30000); // Update every 30 seconds

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto m-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">🤖 AI Performance Dashboard</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Performance Metrics */}
          {metrics ? (
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
                <p className="text-2xl font-bold">{Math.round(metrics.avgResolutionTime)}min</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading performance metrics...</p>
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
          {insights?.errorTrends && (
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
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {errors.length > 0 ? (
                errors.map((error, index) => (
                  <div key={index} className="bg-white p-4 rounded border">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
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
                          Action: {error.context.action || 'Unknown'} |",
      Count: {String(error.occurrenceCount)}
                        </div>
                        {error.aiPredictedImpact && (
                          <div className="text-sm text-blue-600 mt-1">
                            🤖 AI Impact Score: {Math.round(error.aiPredictedImpact * 100)}%
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {error.resolutionSuggestions && error.resolutionSuggestions.length > 0 && (
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
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-8">
                  ✨ No errors detected! Your application is running smoothly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;