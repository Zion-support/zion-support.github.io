import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  errorRate: number;
  criticalErrorsToday: number;
  userImpactScore: number;
  avgResolutionTime: number;
  aiPredictedImpact?: number;
  resolutionSuggestions?: string[];
  [key: string]: unknown;
}

interface ErrorReport {
  id: string;
  timestamp: number;
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  userImpact: number;
  aiPredictedImpact?: number;
  resolutionSuggestions?: string[];
  [key: string]: unknown;
}

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({
  isVisible,
  onClose,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [insights, setInsights] = useState<{
    predictedHighRiskActions: string[];
    recommendedImprovements: string[];
    errorTrends: Array<{ category: string; trend: string }>;
  }>({
    predictedHighRiskActions: [],
    recommendedImprovements: [],
    errorTrends: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorReports, setErrorReports] = useState<ErrorReport[]>([]);

  const loadPerformanceData = useCallback(async () => {
<<<<<<< HEAD
    try {
      setIsLoading(true);
      
      // Mock data for demonstration
      const mockMetrics: PerformanceMetrics = {
        errorRate: 2.3,
        criticalErrorsToday: 5,
        userImpactScore: 78,
        avgResolutionTime: 4.2,
      };

      const mockInsights: AIInsights = {
=======
    setIsLoading(true);
    try {
      // Simulate AI-powered performance analysis
      const mockMetrics: PerformanceMetrics = {
        errorRate: Math.random() * 5,
        criticalErrorsToday: Math.floor(Math.random() * 10),
        userImpactScore: Math.random() * 100,
        avgResolutionTime: Math.random() * 120,
        aiPredictedImpact: Math.random() * 100,
        resolutionSuggestions: [
          'Implement circuit breaker pattern',
          'Add retry logic with exponential backoff',
          'Optimize database queries'
        ]
      };

      const mockInsights = {
>>>>>>> 7ea1bb1fe213557f3676c1444a0258ff188b4a8e
        predictedHighRiskActions: [
          'Database connection timeout',
          'Memory leak in image processing',
          'API rate limit exceeded'
        ],
        recommendedImprovements: [
          'Implement caching layer',
          'Add monitoring alerts',
          'Optimize image compression'
        ],
        errorTrends: [
          { category: 'API Errors', trend: 'increasing' },
          { category: 'Database Errors', trend: 'stable' },
          { category: 'Client Errors', trend: 'decreasing' }
        ]
      };

      const mockErrorReports: ErrorReport[] = [
        {
          id: '1',
          timestamp: Date.now() - 3600000,
          message: 'Database connection timeout',
          severity: 'high',
          category: 'Database',
          userImpact: 85,
          aiPredictedImpact: 90,
          resolutionSuggestions: ['Increase connection pool size', 'Add retry logic']
        },
        {
          id: '2',
          timestamp: Date.now() - 7200000,
          message: 'Memory leak detected',
          severity: 'critical',
          category: 'Performance',
          userImpact: 95,
          aiPredictedImpact: 88,
          resolutionSuggestions: ['Implement garbage collection', 'Fix memory references']
        }
      ];

      setMetrics(mockMetrics);
      setInsights(mockInsights);
      setErrorReports(mockErrorReports);
    } catch (error) {
      console.error('Failed to load performance data:', error);
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading AI insights...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Performance Metrics */}
              {metrics && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Error Rate</h3>
                    <div className="text-3xl font-bold text-red-600">
                      {metrics.errorRate.toFixed(2)}%
                    </div>
                    <div className="text-sm text-red-700 mt-1">per 1000 requests</div>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-2">Critical Errors</h3>
                    <div className="text-3xl font-bold text-orange-600">
                      {metrics.criticalErrorsToday}
                    </div>
                    <div className="text-sm text-orange-700 mt-1">today</div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">User Impact</h3>
                    <div className="text-3xl font-bold text-blue-600">
                      {Math.round(metrics.userImpactScore)}
                    </div>
                    <div className="text-sm text-blue-700 mt-1">impact score</div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Resolution Time</h3>
                    <div className="text-3xl font-bold text-green-600">
                      {Math.round(metrics.avgResolutionTime)}m
                    </div>
                    <div className="text-sm text-green-700 mt-1">average</div>
                  </div>
                </div>
              )}

              {/* AI Insights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Predicted High-Risk Actions</h3>
                  <div className="space-y-2">
                    {insights.predictedHighRiskActions.map((action, index) => (
                      <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-800">{action}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommended Improvements</h3>
                  <div className="space-y-2">
                    {insights.recommendedImprovements.map((improvement, index) => (
                      <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm text-green-800">{improvement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Error Trends */}
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Error Trends Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {insights.errorTrends.map((trend, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900">{trend.category}</h4>
                      <div className={`text-sm mt-1 ${
                        trend.trend === 'increasing' ? 'text-red-600' :
                        trend.trend === 'decreasing' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        Trend: {trend.trend}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Error Reports */}
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Error Reports</h3>
                <div className="space-y-3">
                  {errorReports.map((report) => (
                    <div key={report.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{report.message}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          report.severity === 'critical' ? 'bg-red-100 text-red-800' :
                          report.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                          report.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {report.severity}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        Category: {report.category} | User Impact: {report.userImpact}%
                      </div>
                      {report.resolutionSuggestions && (
                        <div className="text-sm">
                          <p className="font-medium text-gray-700 mb-1">AI Suggestions:</p>
                          <ul className="list-disc list-inside text-gray-600">
                            {report.resolutionSuggestions.map((suggestion, index) => (
                              <li key={index}>{suggestion}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
<<<<<<< HEAD
=======
            </div>
          )}
>>>>>>> 7ea1bb1fe213557f3676c1444a0258ff188b4a8e
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;