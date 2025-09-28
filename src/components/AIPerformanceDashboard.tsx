import React, { useState, useEffect, useCallback } from 'react';
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

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({
  isVisible,
  onClose
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    errorRate: 0,
    criticalErrorsToday: 0,
    userImpactScore: 0,
    avgResolutionTime: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMetrics = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate loading performance metrics
      const mockMetrics: PerformanceMetrics = {
        errorRate: Math.random() * 5,
        criticalErrorsToday: Math.floor(Math.random() * 10),
        userImpactScore: Math.random() * 100,
        avgResolutionTime: Math.random() * 60
      };
      
      setMetrics(mockMetrics);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load metrics');
      enhancedErrorHandler.handleError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      loadMetrics();
      const interval = setInterval(loadMetrics, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, loadMetrics]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#10B981';
    if (score >= 70) return '#F59E0B';
    return '#EF4444';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="text-red-600 text-lg font-semibold mb-2">Error Loading Metrics</div>
              <div className="text-gray-600 mb-4">{error}</div>
              <button
                onClick={loadMetrics}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Key Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Error Rate</h3>
                  <div className="text-3xl font-bold">{metrics.errorRate.toFixed(2)}%</div>
                  <div className="text-blue-100">System Errors</div>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Critical Errors</h3>
                  <div className="text-3xl font-bold">{metrics.criticalErrorsToday}</div>
                  <div className="text-red-100">Today</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">User Impact Score</h3>
                  <div className="text-3xl font-bold">{metrics.userImpactScore.toFixed(0)}</div>
                  <div className="text-green-100">Performance</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Avg Resolution</h3>
                  <div className="text-3xl font-bold">{metrics.avgResolutionTime.toFixed(0)}m</div>
                  <div className="text-purple-100">Resolution Time</div>
                </div>
              </div>

              {/* Performance Overview */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Performance Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">System Health</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${100 - metrics.errorRate * 20}%`,
                          backgroundColor: getScoreColor(100 - metrics.errorRate * 20)
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {100 - metrics.errorRate * 20}% Healthy
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">User Impact</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${metrics.userImpactScore}%`,
                          backgroundColor: getScoreColor(metrics.userImpactScore)
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {metrics.userImpactScore.toFixed(0)}% Impact Score
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>System performance optimized</span>
                    </div>
                    <span className="text-sm text-gray-500">2 minutes ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Warning: High memory usage detected</span>
                    </div>
                    <span className="text-sm text-gray-500">5 minutes ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Error recovery system activated</span>
                    </div>
                    <span className="text-sm text-gray-500">10 minutes ago</span>
                  </div>
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