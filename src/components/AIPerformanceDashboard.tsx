import React, { useState, useEffect } from 'react';

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface PerformanceMetrics {
  errorRate: number;
  avgResolutionTime: number;
  throughput: number;
  accuracy: number;
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    errorRate: 0,
    avgResolutionTime: 0,
    throughput: 0,
    accuracy: 0
  });

  useEffect(() => {
    // Simulate real-time metrics updates
    const interval = setInterval(() => {
      setMetrics({
        errorRate: Math.random() * 5,
        avgResolutionTime: Math.random() * 1000 + 500,
        throughput: Math.random() * 1000 + 5000,
        accuracy: Math.random() * 10 + 90
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-600 mb-2">Error Rate</h3>
            <p className="text-2xl font-bold text-blue-800">{metrics.errorRate.toFixed(2)}%</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-600 mb-2">Avg Resolution Time</h3>
            <p className="text-2xl font-bold text-green-800">{metrics.avgResolutionTime.toFixed(0)}ms</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-600 mb-2">Throughput</h3>
            <p className="text-2xl font-bold text-purple-800">{metrics.throughput.toFixed(0)} req/s</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-orange-600 mb-2">Accuracy</h3>
            <p className="text-2xl font-bold text-orange-800">{metrics.accuracy.toFixed(1)}%</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Trends</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Performance monitoring and analytics coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;