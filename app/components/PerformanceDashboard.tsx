import React, { useState, useEffect, useCallback } from 'react';
import { BarChart3, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  timestamp: number;
}

interface PerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const measurePerformance = useCallback(async () => {
    setIsLoading(true);
    
    try {
      // Simulate performance measurement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock metrics for demonstration
      const mockMetrics: PerformanceMetrics = {
        lcp: Math.random() * 2000 + 1000, // 1-3 seconds
        fid: Math.random() * 100, // 0-100ms
        cls: Math.random() * 0.1, // 0-0.1
        fcp: Math.random() * 1000 + 500, // 0.5-1.5 seconds
        ttfb: Math.random() * 200 + 100, // 100-300ms
        timestamp: Date.now(),
      };
      
      setMetrics(mockMetrics);
    } catch (error) {
      console.error('Performance measurement failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      measurePerformance();
    }
  }, [isVisible, measurePerformance]);

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return <CheckCircle className="w-4 h-4" />;
    if (value <= thresholds.needsImprovement) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-semibold text-white">Performance Dashboard</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
              <span className="ml-3 text-gray-300">Measuring performance...</span>
            </div>
          ) : metrics ? (
            <div className="space-y-6">
              {/* Core Web Vitals */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                  Core Web Vitals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* LCP */}
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Largest Contentful Paint</span>
                      <div className={`flex items-center ${getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}`}>
                        {getScoreIcon(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {metrics.lcp.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Target: &lt; 2.5s
                    </div>
                  </div>

                  {/* FID */}
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">First Input Delay</span>
                      <div className={`flex items-center ${getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}`}>
                        {getScoreIcon(metrics.fid, { good: 100, needsImprovement: 300 })}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {metrics.fid.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Target: &lt; 100ms
                    </div>
                  </div>

                  {/* CLS */}
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Cumulative Layout Shift</span>
                      <div className={`flex items-center ${getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}`}>
                        {getScoreIcon(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {metrics.cls.toFixed(3)}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Target: &lt; 0.1
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
                  Additional Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">First Contentful Paint</span>
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {metrics.fcp.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Target: &lt; 1.8s
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Time to First Byte</span>
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {metrics.ttfb.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Target: &lt; 200ms
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Score */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-white mb-4">Overall Performance Score</h3>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold text-cyan-400">
                    {Math.round((metrics.lcp <= 2500 ? 100 : 80) + (metrics.fid <= 100 ? 100 : 80) + (metrics.cls <= 0.1 ? 100 : 80)) / 3}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">Performance Grade</div>
                    <div className="text-lg font-semibold text-white">A+</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={measurePerformance}
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Refresh Metrics
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-300">Failed to load performance metrics</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;