import React, { useState, useEffect } from 'react';

interface SystemMetrics {
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  uptime: number;
  requests: number;
  errors: number;
  responseTime: number;
}

const SystemDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    uptime: 0,
    requests: 0,
    errors: 0,
    responseTime: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate real-time metrics
    const updateMetrics = () => {
      setMetrics({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
        network: Math.random() * 100,
        uptime: Date.now() - performance.timeOrigin,
        requests: Math.floor(Math.random() * 1000),
        errors: Math.floor(Math.random() * 10),
        responseTime: Math.random() * 200 + 50
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.warning) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBgColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'bg-green-500';
    if (value <= thresholds.warning) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const formatUptime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        title="Show System Dashboard"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">System Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {/* System Resources */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">System Resources</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>CPU Usage</span>
                <span className={getStatusColor(metrics.cpu, { good: 50, warning: 80 })}>
                  {metrics.cpu.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getStatusBgColor(metrics.cpu, { good: 50, warning: 80 })}`}
                  style={{ width: `${metrics.cpu}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Memory Usage</span>
                <span className={getStatusColor(metrics.memory, { good: 60, warning: 80 })}>
                  {metrics.memory.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getStatusBgColor(metrics.memory, { good: 60, warning: 80 })}`}
                  style={{ width: `${metrics.memory}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Disk Usage</span>
                <span className={getStatusColor(metrics.disk, { good: 70, warning: 85 })}>
                  {metrics.disk.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getStatusBgColor(metrics.disk, { good: 70, warning: 85 })}`}
                  style={{ width: `${metrics.disk}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Network I/O</span>
                <span className={getStatusColor(metrics.network, { good: 50, warning: 80 })}>
                  {metrics.network.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getStatusBgColor(metrics.network, { good: 50, warning: 80 })}`}
                  style={{ width: `${metrics.network}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">System Status</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600">Uptime</div>
              <div className="font-semibold text-gray-900">{formatUptime(metrics.uptime)}</div>
            </div>
            <div>
              <div className="text-gray-600">Requests</div>
              <div className="font-semibold text-gray-900">{metrics.requests.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-gray-600">Errors</div>
              <div className={`font-semibold ${metrics.errors > 5 ? 'text-red-600' : 'text-gray-900'}`}>
                {metrics.errors}
              </div>
            </div>
            <div>
              <div className="text-gray-600">Response Time</div>
              <div className={`font-semibold ${metrics.responseTime > 200 ? 'text-red-600' : 'text-gray-900'}`}>
                {metrics.responseTime.toFixed(0)}ms
              </div>
            </div>
          </div>
        </div>

        {/* Health Status */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Health Status</h4>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              metrics.cpu < 80 && metrics.memory < 80 && metrics.errors < 5 
                ? 'bg-green-500' 
                : 'bg-yellow-500'
            }`}></div>
            <span className="text-sm text-gray-600">
              {metrics.cpu < 80 && metrics.memory < 80 && metrics.errors < 5 
                ? 'All systems operational' 
                : 'Performance degraded'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDashboard;