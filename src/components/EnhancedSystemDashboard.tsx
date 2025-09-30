import React, { useState, useEffect } from 'react';

interface SystemMetrics {
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  uptime: string;
  requests: number;
  errors: number;
}

const EnhancedSystemDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    uptime: '0s',
    requests: 0,
    errors: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading system metrics
    const loadMetrics = () => {
      setIsLoading(false);
      setMetrics({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
        network: Math.random() * 100,
        uptime: `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
        requests: Math.floor(Math.random() * 10000),
        errors: Math.floor(Math.random() * 100)
      });
    };

    const timer = setTimeout(loadMetrics, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (value: number) => {
    if (value < 50) return 'text-green-600';
    if (value < 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBgColor = (value: number) => {
    if (value < 50) return 'bg-green-100';
    if (value < 80) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">CPU Usage</p>
              <p className={`text-2xl font-bold ${getStatusColor(metrics.cpu)}`}>
                {metrics.cpu.toFixed(1)}%
              </p>
            </div>
            <div className={`p-2 rounded-full ${getStatusBgColor(metrics.cpu)}`}>
              <div className="w-6 h-6 text-current">💻</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Memory</p>
              <p className={`text-2xl font-bold ${getStatusColor(metrics.memory)}`}>
                {metrics.memory.toFixed(1)}%
              </p>
            </div>
            <div className={`p-2 rounded-full ${getStatusBgColor(metrics.memory)}`}>
              <div className="w-6 h-6 text-current">🧠</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Disk Space</p>
              <p className={`text-2xl font-bold ${getStatusColor(metrics.disk)}`}>
                {metrics.disk.toFixed(1)}%
              </p>
            </div>
            <div className={`p-2 rounded-full ${getStatusBgColor(metrics.disk)}`}>
              <div className="w-6 h-6 text-current">💾</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Network</p>
              <p className={`text-2xl font-bold ${getStatusColor(metrics.network)}`}>
                {metrics.network.toFixed(1)}%
              </p>
            </div>
            <div className={`p-2 rounded-full ${getStatusBgColor(metrics.network)}`}>
              <div className="w-6 h-6 text-current">🌐</div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">System Uptime</h3>
          <p className="text-2xl font-bold text-blue-600">{metrics.uptime}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Requests</h3>
          <p className="text-2xl font-bold text-green-600">{metrics.requests.toLocaleString()}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Errors</h3>
          <p className="text-2xl font-bold text-red-600">{metrics.errors}</p>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h3>
        <div className="space-y-4">
          {[
            { label: 'CPU Usage', value: metrics.cpu, color: 'bg-blue-500' },
            { label: 'Memory Usage', value: metrics.memory, color: 'bg-green-500' },
            { label: 'Disk Usage', value: metrics.disk, color: 'bg-yellow-500' },
            { label: 'Network Usage', value: metrics.network, color: 'bg-purple-500' }
          ].map((metric) => (
            <div key={metric.label} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">{metric.label}</span>
                <span className="text-gray-500">{metric.value.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${metric.color} transition-all duration-300`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Actions */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">System Actions</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Refresh Metrics
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
            Clear Cache
          </button>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors">
            Restart Services
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
            Emergency Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSystemDashboard;