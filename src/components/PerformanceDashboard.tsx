import React, { useState, useEffect } from 'react';
import { bundleOptimizer } from '../utils/bundleOptimizer';

interface BundleMetrics {
  totalSize: number;
  gzippedSize: number;
  chunkCount: number;
  recommendations: string[];
  compressionRatio: number;
  largestChunk: string;
  duplicateModules: number;
  unusedCode: number;
}

interface OptimizationStrategy {
  name: string;
  description: string;
  impact: string;
  priority: number;
  type: string;
  implementation: string;
}

interface PerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<BundleMetrics | null>(null);
  const [strategies, setStrategies] = useState<OptimizationStrategy[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState('');

  useEffect(() => {
    if (isVisible) {
      loadPerformanceData();
    }
  }, [isVisible]);

  const loadPerformanceData = async () => {
    setIsLoading(true);
    try {
      // Use available methods from bundleOptimizer
      const analysis = bundleOptimizer.getAnalysis();
      const bundleMetrics: BundleMetrics = {
        totalSize: bundleOptimizer.getBundleSize(),
        gzippedSize: bundleOptimizer.getGzippedSize(),
        chunkCount: bundleOptimizer.getChunkCount(),
        recommendations: bundleOptimizer.getRecommendations(),
        compressionRatio: bundleOptimizer.getGzippedSize() / bundleOptimizer.getBundleSize(),
        largestChunk: 'main.js',
        duplicateModules: 0,
        unusedCode: 0
      };

      // Mock optimization strategies
      const optimizationStrategies: OptimizationStrategy[] = [
        {
          name: 'Code Splitting',
          description: 'Split large bundles into smaller chunks',
          impact: 'High',
          priority: 1,
          type: 'performance',
          implementation: 'Dynamic imports'
        },
        {
          name: 'Tree Shaking',
          description: 'Remove unused code from bundles',
          impact: 'Medium',
          priority: 2,
          type: 'optimization',
          implementation: 'ES6 modules'
        }
      ];

      setMetrics(bundleMetrics);
      setStrategies(optimizationStrategies);
      setReport(JSON.stringify(analysis, null, 2));
    } catch (error) {
      console.error('Failed to load performance data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-100';
      case 'medium': return 'text-yellow-500 bg-yellow-100';
      case 'low': return 'text-green-500 bg-green-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const getImpactColor = (impact: number) => {
    if (impact >= 25) return 'text-green-500';
    if (impact >= 15) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Bundle Metrics */}
              {metrics && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-blue-600">Total Bundle Size</h3>
                    <p className="text-2xl font-bold text-blue-900">
                      {(metrics.totalSize / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-green-600">Gzipped Size</h3>
                    <p className="text-2xl font-bold text-green-900">
                      {(metrics.gzippedSize / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-purple-600">Compression Ratio</h3>
                    <p className="text-2xl font-bold text-purple-900">
                      {(metrics.compressionRatio * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              )}

              {/* Additional Metrics */}
              {metrics && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600">Chunk Count</h3>
                    <p className="text-xl font-bold text-gray-900">{metrics.chunkCount}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600">Largest Chunk</h3>
                    <p className="text-sm font-bold text-gray-900 truncate">{metrics.largestChunk}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600">Duplicate Modules</h3>
                    <p className="text-xl font-bold text-gray-900">{metrics.duplicateModules}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600">Unused Code</h3>
                    <p className="text-xl font-bold text-gray-900">
                      {(metrics.unusedCode / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
              )}

              {/* Optimization Strategies */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Strategies</h3>
                <div className="space-y-3">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="bg-white p-4 rounded border">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(strategy.priority === 1 ? 'high' : 'medium')}`}>
                            {strategy.priority === 1 ? 'HIGH' : 'MEDIUM'}
                          </span>
                          <span className={`text-sm font-medium ${getImpactColor(strategy.impact === 'High' ? 25 : 15)}`}>
                            {strategy.impact} Impact
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 capitalize">
                          {strategy.type.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{strategy.description}</p>
                      <p className="text-xs text-gray-500">{strategy.implementation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization Report */}
              {report && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Report</h3>
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap bg-white p-4 rounded border overflow-x-auto">
                    {report}
                  </pre>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={loadPerformanceData}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Refresh Analysis
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(report);
                    alert('Report copied to clipboard!');
                  }}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Copy Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;