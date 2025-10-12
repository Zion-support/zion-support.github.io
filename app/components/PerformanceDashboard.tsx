import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  renderTime: number;
  memoryUsage: number;
}

interface PerformanceDashboardProps {
  className?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    bundleSize: 0,
    renderTime: 0,
    memoryUsage: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Simulate performance monitoring
    const updateMetrics = () => {
      setMetrics({
        loadTime: Math.random() * 2000 + 500,
        bundleSize: Math.random() * 1000 + 200,
        renderTime: Math.random() * 100 + 10,
        memoryUsage: Math.random() * 50 + 10
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsOptimizing(false);
  };

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 ${className}`}>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white mb-2">Performance Dashboard</h3>
        <p className="text-gray-300 text-sm">Monitor and optimize your app's performance</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400">{metrics.loadTime.toFixed(0)}ms</div>
          <div className="text-sm text-gray-400">Load Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{metrics.bundleSize.toFixed(0)}KB</div>
          <div className="text-sm text-gray-400">Bundle Size</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{metrics.renderTime.toFixed(0)}ms</div>
          <div className="text-sm text-gray-400">Render Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{metrics.memoryUsage.toFixed(1)}MB</div>
          <div className="text-sm text-gray-400">Memory Usage</div>
        </div>
      </div>
      
      <button
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        onClick={optimizePerformance}
        disabled={isOptimizing}
      >
        {isOptimizing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Optimizing...</span>
          </>
        ) : (
          <span>Optimize Performance</span>
        )}
      </button>
    </div>
  );
};

export default PerformanceDashboard;