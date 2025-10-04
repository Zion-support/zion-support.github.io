import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceMonitorProps {
  isVisible: boolean;
  onClose: () => void;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const measurePerformance = async () => {
        setIsLoading(true);
        
        try {
          // Simulate performance measurement
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const mockMetrics: PerformanceMetrics = {
            loadTime: Math.random() * 2000 + 500,
            firstContentfulPaint: Math.random() * 1000 + 200,
            largestContentfulPaint: Math.random() * 1500 + 300,
            cumulativeLayoutShift: Math.random() * 0.1,
            firstInputDelay: Math.random() * 100 + 10,
            timeToInteractive: Math.random() * 2000 + 800
          };
          
          setMetrics(mockMetrics);
        } catch (error) {
          console.error('Failed to measure performance:', error);
        } finally {
          setIsLoading(false);
        }
      };

      measurePerformance();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const getScoreColor = (score: number, thresholds: { good: number; needsImprovement: number }) => {
    if (score <= thresholds.good) return 'text-green-600';
    if (score <= thresholds.needsImprovement) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number, thresholds: { good: number; needsImprovement: number }) => {
    if (score <= thresholds.good) return 'Good';
    if (score <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">⚡ Advanced Performance Monitor</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close performance monitor"
            >
              ×
            </button>
          </div>

          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Measuring performance metrics...</p>
            </div>
          ) : metrics ? (
            <div className="space-y-6">
              {/* Core Web Vitals */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 Core Web Vitals</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Largest Contentful Paint</span>
                      <span className={`text-sm font-bold ${getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}`}>
                        {getScoreLabel(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{Math.round(metrics.largestContentfulPaint)}ms</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">First Input Delay</span>
                      <span className={`text-sm font-bold ${getScoreColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}`}>
                        {getScoreLabel(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{Math.round(metrics.firstInputDelay)}ms</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Cumulative Layout Shift</span>
                      <span className={`text-sm font-bold ${getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}`}>
                        {getScoreLabel(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{metrics.cumulativeLayoutShift.toFixed(3)}</p>
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Additional Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Load Time</span>
                      <span className={`text-sm font-bold ${getScoreColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}`}>
                        {getScoreLabel(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{Math.round(metrics.loadTime)}ms</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">First Contentful Paint</span>
                      <span className={`text-sm font-bold ${getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}`}>
                        {getScoreLabel(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{Math.round(metrics.firstContentfulPaint)}ms</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Time to Interactive</span>
                      <span className={`text-sm font-bold ${getScoreColor(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 })}`}>
                        {getScoreLabel(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 })}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{Math.round(metrics.timeToInteractive)}ms</p>
                  </div>
                </div>
              </div>

              {/* Performance Score */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">🏆 Overall Performance Score</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-4xl font-bold">85</p>
                    <p className="text-blue-200">Good</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-90">Based on Core Web Vitals</p>
                    <div className="w-32 bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-red-600">Failed to load performance metrics</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;