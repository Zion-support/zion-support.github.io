import React, { useState, useEffect } from 'react';

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface PerformanceMetrics {
  errorRate: number;
  avgResolutionTime: number;
  throughput: number;
  cpuUsage: number;
  memoryUsage: number;
  responseTime: number;
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    errorRate: 0.02,
    avgResolutionTime: 150,
    throughput: 1250,
    cpuUsage: 45,
    memoryUsage: 67,
    responseTime: 89
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsLoading(true);
      // Simulate data loading
      setTimeout(() => {
        setMetrics({
          errorRate: Math.random() * 0.05,
          avgResolutionTime: Math.random() * 200 + 100,
          throughput: Math.random() * 500 + 1000,
          cpuUsage: Math.random() * 100,
          memoryUsage: Math.random() * 100,
          responseTime: Math.random() * 150 + 50
        });
        setIsLoading(false);
      }, 1000);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Error Rate</h3>
              <p className="text-3xl font-bold text-red-600">{(metrics.errorRate * 100).toFixed(2)}%</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Avg Resolution Time</h3>
              <p className="text-3xl font-bold text-blue-600">{metrics.avgResolutionTime.toFixed(0)}ms</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Throughput</h3>
              <p className="text-3xl font-bold text-green-600">{metrics.throughput.toFixed(0)}/s</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">CPU Usage</h3>
              <p className="text-3xl font-bold text-orange-600">{metrics.cpuUsage.toFixed(1)}%</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Memory Usage</h3>
              <p className="text-3xl font-bold text-purple-600">{metrics.memoryUsage.toFixed(1)}%</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Response Time</h3>
              <p className="text-3xl font-bold text-indigo-600">{metrics.responseTime.toFixed(0)}ms</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;