import React, { useState, useEffect } from 'react';
import { productionOptimizer, ProductionMetrics } from '../utils/productionOptimizer';
import { errorMonitoring, ErrorStats } from '../utils/errorMonitoring';
import { logger } from '../utils/logger';

interface ProductionMonitoringDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const ProductionMonitoringDashboard: React.FC<ProductionMonitoringDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<ProductionMetrics | null>(null);
  const [errorStats, setErrorStats] = useState<ErrorStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'errors' | 'optimization'>('overview');

  useEffect(() => {
    if (isVisible) {
      loadMonitoringData();
    }
  }, [isVisible]);

  const loadMonitoringData = async () => {
    setIsLoading(true);
    try {
      const productionMetrics = await productionOptimizer.analyzeProductionBuild();
      const errorStatsData = errorMonitoring.getErrorStats();
      
      setMetrics(productionMetrics);
      setErrorStats(errorStatsData);
      
      logger.info('Production monitoring data loaded', 'ProductionMonitoringDashboard');
    } catch (error) {
      logger.error('Failed to load monitoring data', 'ProductionMonitoringDashboard', { error });
    } finally {
      setIsLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-500 bg-yellow-50';
      case 'low': return 'text-green-500 bg-green-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;
    
    let score = 100;
    if (metrics.bundleSize > 1000000) score -= 20;
    else if (metrics.bundleSize > 500000) score -= 10;
    
    if (metrics.compressionRatio < 0.7) score -= 15;
    else if (metrics.compressionRatio < 0.8) score -= 10;
    
    if (metrics.chunkCount > 20) score -= 10;
    else if (metrics.chunkCount > 10) score -= 5;
    
    return Math.max(0, score);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Production Monitoring Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'performance', label: 'Performance' },
              { id: 'errors', label: 'Errors' },
              { id: 'optimization', label: 'Optimization' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'overview' | 'performance' | 'errors' | 'optimization')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-blue-600">Performance Score</h3>
                      <p className="text-2xl font-bold text-blue-900">{getPerformanceScore()}%</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-green-600">Bundle Size</h3>
                      <p className="text-2xl font-bold text-green-900">
                        {metrics ? `${(metrics.bundleSize / 1024).toFixed(2)} KB` : 'N/A'}
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-yellow-600">Total Errors</h3>
                      <p className="text-2xl font-bold text-yellow-900">
                        {errorStats?.totalErrors || 0}
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-purple-600">Error Rate</h3>
                      <p className="text-2xl font-bold text-purple-900">
                        {errorStats?.errorRate ? `${errorStats.errorRate.toFixed(2)}/hr` : '0/hr'}
                      </p>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">App initialized</span>
                        <span className="text-xs text-gray-500">Just now</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Production optimizations enabled</span>
                        <span className="text-xs text-gray-500">Just now</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Error monitoring active</span>
                        <span className="text-xs text-gray-500">Just now</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Performance Tab */}
              {activeTab === 'performance' && metrics && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-600">Build Time</h3>
                      <p className="text-2xl font-bold text-gray-900">{metrics.buildTime}s</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-600">Gzipped Size</h3>
                      <p className="text-2xl font-bold text-gray-900">
                        {(metrics.gzippedSize / 1024).toFixed(2)} KB
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-600">Compression Ratio</h3>
                      <p className="text-2xl font-bold text-gray-900">
                        {(metrics.compressionRatio * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-600">Chunk Count</h3>
                      <p className="text-xl font-bold text-gray-900">{metrics.chunkCount}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-600">Asset Count</h3>
                      <p className="text-xl font-bold text-gray-900">{metrics.assetCount}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-600">Unused Exports</h3>
                      <p className="text-xl font-bold text-gray-900">{metrics.unusedExports}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-600">Duplicate Modules</h3>
                      <p className="text-xl font-bold text-gray-900">{metrics.duplicateModules}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Errors Tab */}
              {activeTab === 'errors' && errorStats && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Errors by Category</h3>
                      <div className="space-y-2">
                        {Object.entries(errorStats.errorsByCategory).map(([category, count]) => (
                          <div key={category} className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 capitalize">{category}</span>
                            <span className="text-sm font-bold text-gray-900">{count}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Errors by Severity</h3>
                      <div className="space-y-2">
                        {Object.entries(errorStats.errorsBySeverity).map(([severity, count]) => (
                          <div key={severity} className="flex justify-between items-center">
                            <span className={`text-sm px-2 py-1 rounded ${getSeverityColor(severity)}`}>
                              {severity}
                            </span>
                            <span className="text-sm font-bold text-gray-900">{count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {errorStats.topErrors.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Errors</h3>
                      <div className="space-y-2">
                        {errorStats.topErrors.slice(0, 5).map((error, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 truncate flex-1 mr-4">{error.message}</span>
                            <span className="text-sm font-bold text-gray-900">{error.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Optimization Tab */}
              {activeTab === 'optimization' && (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Recommendations</h3>
                    <div className="space-y-3">
                      {productionOptimizer.getOptimizationRecommendations().map((rec, index) => (
                        <div key={index} className="bg-white p-4 rounded border">
                          <div className="flex justify-between items-start mb-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              rec.priority === 'high' ? 'text-red-500 bg-red-100' :
                              rec.priority === 'medium' ? 'text-yellow-500 bg-yellow-100' :
                              'text-green-500 bg-green-100'
                            }`}>
                              {rec.priority.toUpperCase()}
                            </span>
                            <span className="text-sm font-medium text-blue-500">
                              {rec.improvement}% improvement
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{rec.description}</p>
                          <p className="text-xs text-gray-500">{rec.implementation}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Report</h3>
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap bg-white p-4 rounded border overflow-x-auto">
                      {productionOptimizer.generateOptimizationReport()}
                    </pre>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={loadMonitoringData}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Refresh Data
                </button>
                <button
                  onClick={() => {
                    const report = productionOptimizer.generateOptimizationReport();
                    navigator.clipboard.writeText(report);
                    alert('Report copied to clipboard!');
                  }}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Copy Report
                </button>
                <button
                  onClick={() => {
                    const errorData = errorMonitoring.exportErrorData();
                    navigator.clipboard.writeText(errorData);
                    alert('Error data copied to clipboard!');
                  }}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                >
                  Export Error Data
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductionMonitoringDashboard;