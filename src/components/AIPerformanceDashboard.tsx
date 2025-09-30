import React, { useState, useEffect } from 'react';

interface AIPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface AIMetrics {
  modelAccuracy: number;
  responseTime: number;
  throughput: number;
  errorRate: number;
  activeModels: number;
  totalRequests: number;
  costPerRequest: number;
  energyUsage: number;
}

const AIPerformanceDashboard: React.FC<AIPerformanceDashboardProps> = ({
  isVisible,
  onClose
}) => {
  const [metrics, setMetrics] = useState<AIMetrics>({
    modelAccuracy: 0,
    responseTime: 0,
    throughput: 0,
    errorRate: 0,
    activeModels: 0,
    totalRequests: 0,
    costPerRequest: 0,
    energyUsage: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isVisible) {
      // Simulate loading AI metrics
      const loadMetrics = () => {
        setIsLoading(false);
        setMetrics({
          modelAccuracy: 85 + Math.random() * 10,
          responseTime: 50 + Math.random() * 100,
          throughput: 1000 + Math.random() * 500,
          errorRate: Math.random() * 5,
          activeModels: 3 + Math.floor(Math.random() * 5),
          totalRequests: 50000 + Math.floor(Math.random() * 10000),
          costPerRequest: 0.001 + Math.random() * 0.005,
          energyUsage: 50 + Math.random() * 30
        });
      };

      const timer = setTimeout(loadMetrics, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value >= thresholds.good) return 'text-green-600 bg-green-100';
    if (value >= thresholds.warning) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">AI Performance Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close AI Performance Dashboard"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4">
          {isLoading ? (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Model Accuracy</p>
                      <p className={`text-2xl font-bold ${getPerformanceColor(metrics.modelAccuracy, { good: 90, warning: 80 })}`}>
                        {metrics.modelAccuracy.toFixed(1)}%
                      </p>
                    </div>
                    <div className="p-2 bg-blue-100 rounded-full">
                      <div className="w-6 h-6 text-blue-600">🎯</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Response Time</p>
                      <p className={`text-2xl font-bold ${getPerformanceColor(metrics.responseTime, { good: 100, warning: 200 })}`}>
                        {metrics.responseTime.toFixed(0)}ms
                      </p>
                    </div>
                    <div className="p-2 bg-green-100 rounded-full">
                      <div className="w-6 h-6 text-green-600">⚡</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Throughput</p>
                      <p className={`text-2xl font-bold ${getPerformanceColor(metrics.throughput, { good: 1000, warning: 500 })}`}>
                        {metrics.throughput.toFixed(0)}/s
                      </p>
                    </div>
                    <div className="p-2 bg-purple-100 rounded-full">
                      <div className="w-6 h-6 text-purple-600">📊</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Error Rate</p>
                      <p className={`text-2xl font-bold ${getPerformanceColor(metrics.errorRate, { good: 1, warning: 3 })}`}>
                        {metrics.errorRate.toFixed(2)}%
                      </p>
                    </div>
                    <div className="p-2 bg-red-100 rounded-full">
                      <div className="w-6 h-6 text-red-600">⚠️</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Models</h3>
                  <p className="text-3xl font-bold text-blue-600">{metrics.activeModels}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Requests</h3>
                  <p className="text-3xl font-bold text-green-600">{metrics.totalRequests.toLocaleString()}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Cost/Request</h3>
                  <p className="text-3xl font-bold text-yellow-600">${metrics.costPerRequest.toFixed(4)}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Energy Usage</h3>
                  <p className="text-3xl font-bold text-purple-600">{metrics.energyUsage.toFixed(1)}W</p>
                </div>
              </div>

              {/* Performance Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Model Performance</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'GPT-4', accuracy: 92.5, latency: 120 },
                      { label: 'Claude-3', accuracy: 89.3, latency: 95 },
                      { label: 'Gemini Pro', accuracy: 87.8, latency: 110 },
                      { label: 'Custom Model', accuracy: 85.2, latency: 85 }
                    ].map((model) => (
                      <div key={model.label} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-700">{model.label}</span>
                          <span className="text-gray-500">{model.accuracy}% accuracy</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${model.accuracy}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Resource Usage</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'CPU Usage', value: 65, color: 'bg-blue-500' },
                      { label: 'Memory Usage', value: 78, color: 'bg-green-500' },
                      { label: 'GPU Usage', value: 85, color: 'bg-purple-500' },
                      { label: 'Storage Usage', value: 45, color: 'bg-yellow-500' }
                    ].map((resource) => (
                      <div key={resource.label} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-700">{resource.label}</span>
                          <span className="text-gray-500">{resource.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${resource.color} transition-all duration-300`}
                            style={{ width: `${resource.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Actions */}
              <div className="bg-white p-4 rounded-lg shadow border">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Management</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Retrain Models
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                    Scale Resources
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                    Optimize Performance
                  </button>
                  <button className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors">
                    Update Models
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Emergency Stop
                  </button>
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