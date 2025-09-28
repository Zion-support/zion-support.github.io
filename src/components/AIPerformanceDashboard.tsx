import React, { useState, useEffect, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

interface PerformanceMetrics {
  lcp: number;
  fcp: number;
  ttfb: number;
  fid: number;
  cls: number;
  overallScore: number;
}

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
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
  id: string;
  message: string;
  lastOccurrence: string | Date;
  occurrenceCount: number;
  severity: string;
  context: {
    component?: string;
    action?: string;
  };
  aiPredictedImpact?: number;
  resolutionSuggestions?: string[];
  severity?: string;
  [key: string]: unknown;
}

interface AIPerformanceInsights {
  predictedHighRiskActions: string[];
  recommendedImprovements: string[];
  errorTrends: Array<{ category: string; trend: string }>;
}
const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [insights, setInsights] = useState<AIPerformanceInsights | null>(null);
  const [errors, setErrors] = useState<ErrorReport[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPerformanceData = useCallback(async () => {
    if (!isVisible) return;
    
    setIsLoading(true);
    try {
      // Mock data for demonstration
      const mockMetrics: PerformanceMetrics = {
        lcp: Math.random() * 1000 + 500,
        fcp: Math.random() * 500 + 200,
        ttfb: Math.random() * 200 + 100,
        fid: Math.random() * 50 + 10,
        cls: Math.random() * 0.1,
        overallScore: Math.floor(Math.random() * 40) + 60
      };

      const mockInsights: AIInsights = {
        predictedHighRiskActions: [
          'Memory leak detected in component unmounting',
          'Potential race condition in async operations',
          'Large bundle size affecting load times'
        ],
        recommendedImprovements: [
          'Implement React.memo for expensive components',
          'Add error boundaries for better error handling',
          'Optimize image loading with lazy loading'
        ],
        errorTrends: [
          { category: 'JavaScript Errors', trend: 'decreasing' },
          { category: 'Network Errors', trend: 'stable' },
          { category: 'Performance Issues', trend: 'increasing' }
        ]
      };

      const mockErrorReports: ErrorReport[] = [
        {
          id: '1',
          message: 'Uncaught TypeError: Cannot read property of undefined',
          lastOccurrence: new Date(),
          occurrenceCount: 15,
          context: { component: 'UserProfile', action: 'loadData' },
          aiPredictedImpact: 0.8,
          resolutionSuggestions: ['Add null checks before property access', 'Implement proper error boundaries'],
          severity: 'high'
        },
        {
          id: '2',
          message: 'Network request failed',
          lastOccurrence: new Date(),
          occurrenceCount: 3,
          context: { component: 'DataFetcher', action: 'fetchUserData' },
          aiPredictedImpact: 0.3,
          resolutionSuggestions: ['Implement retry logic', 'Add offline fallback'],
          severity: 'medium'
        }
      ];

      setMetrics(mockMetrics);
      setInsights(mockInsights);
      setErrors(mockErrorReports);
    } catch (error) {
      console.error('Failed to load performance data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isVisible]);

  useEffect(() => {
    loadPerformanceData();
  }, [loadPerformanceData]);

  if (!isVisible) return null;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const performanceData = metrics ? [
    { name: 'LCP', value: metrics.lcp, threshold: 2500 },
    { name: 'FCP', value: metrics.fcp, threshold: 1800 },
    { name: 'TTFB', value: metrics.ttfb, threshold: 800 },
    { name: 'FID', value: metrics.fid, threshold: 100 },
    { name: 'CLS', value: metrics.cls * 1000, threshold: 100 }
  ] : [];

  const trendData = insights?.errorTrends.map(trend => ({
    name: trend.category,
    trend: trend.trend === 'increasing' ? 1 : trend.trend === 'decreasing' ? -1 : 0
  })) || [];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
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

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Overall Score */}
            {metrics && (
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">AI Performance Score</h3>
                  <div className={`text-4xl font-bold ${getScoreColor(metrics.overallScore)}`}>
                    {metrics.overallScore}/100
                  </div>
                  <div className="mt-2 text-blue-100">
                    {metrics.overallScore >= 90 ? 'Excellent' : 
                     metrics.overallScore >= 70 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>
              </div>
            )}

            {/* Performance Metrics */}
            {metrics && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Error Trends</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[-1, 1]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="trend" stroke="#ef4444" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* AI Insights */}
            {insights && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Predicted High-Risk Actions</h3>
                  <ul className="space-y-2">
                    {insights.predictedHighRiskActions.map((action, index) => (
                      <li key={index} className="text-sm text-yellow-700">• {action}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">💡 AI Recommendations</h3>
                  <ul className="space-y-2">
                    {insights.recommendedImprovements.map((improvement, index) => (
                      <li key={index} className="text-sm text-green-700">• {improvement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Error Reports */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🐛 Error Reports</h3>
              <div className="space-y-3">
                {errors.length > 0 ? (
                  errors.map((report) => (
                    <div key={report.id} className="bg-white p-4 rounded border">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(report.severity || 'low')}`}>
                              {report.severity?.toUpperCase() || 'LOW'}
                            </span>
                            <span className="text-sm text-gray-500">
                              {report.occurrenceCount} occurrences
                            </span>
                          </div>
                          <p className="text-sm text-gray-800 mb-2">{report.message}</p>
                          {report.resolutionSuggestions && (
                            <div className="mt-2">
                              <p className="text-xs font-medium text-gray-600 mb-1">AI Suggestions:</p>
                              <ul className="text-xs text-gray-600 space-y-1">
                                {report.resolutionSuggestions.map((suggestion, index) => (
                                  <li key={index}>• {suggestion}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="text-right text-xs text-gray-500">
                          <div>Last: {new Date(report.lastOccurrence).toLocaleDateString()}</div>
                          {report.aiPredictedImpact && (
                            <div>Impact: {(report.aiPredictedImpact * 100).toFixed(0)}%</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">No errors detected</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;