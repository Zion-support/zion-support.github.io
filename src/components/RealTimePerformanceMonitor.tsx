import React, { useState, useEffect } from 'react';

interface RealTimePerformanceMonitorProps {
  isVisible: boolean;
  onClose: () => void;
}

interface PerformanceData {
  timestamp: number;
  fps: number;
  memory: number;
  cpu: number;
  network: number;
  requests: number;
  errors: number;
}

const RealTimePerformanceMonitor: React.FC<RealTimePerformanceMonitorProps> = ({
  isVisible,
  onClose
}) => {
  const [data, setData] = useState<PerformanceData[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [maxDataPoints] = useState(50);

  useEffect(() => {
    if (isVisible && !isMonitoring) {
      setIsMonitoring(true);
      const interval = setInterval(() => {
        const newDataPoint: PerformanceData = {
          timestamp: Date.now(),
          fps: 50 + Math.random() * 20,
          memory: 60 + Math.random() * 30,
          cpu: 40 + Math.random() * 40,
          network: Math.random() * 100,
          requests: Math.floor(Math.random() * 10),
          errors: Math.floor(Math.random() * 3)
        };

        setData(prev => {
          const newData = [...prev, newDataPoint];
          return newData.length > maxDataPoints ? newData.slice(-maxDataPoints) : newData;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
        setIsMonitoring(false);
      };
    }
  }, [isVisible, isMonitoring, maxDataPoints]);

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value >= thresholds.good) return 'text-green-600';
    if (value >= thresholds.warning) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBgColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value >= thresholds.good) return 'bg-green-100';
    if (value >= thresholds.warning) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const currentData = data[data.length - 1];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Real-Time Performance Monitor</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isMonitoring ? 'Monitoring' : 'Stopped'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close Real-Time Performance Monitor"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {currentData ? (
            <div className="space-y-6">
              {/* Current Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">FPS</p>
                      <p className={`text-2xl font-bold ${getStatusColor(currentData.fps, { good: 55, warning: 45 })}`}>
                        {currentData.fps.toFixed(0)}
                      </p>
                    </div>
                    <div className={`p-2 rounded-full ${getStatusBgColor(currentData.fps, { good: 55, warning: 45 })}`}>
                      <div className="w-6 h-6 text-current">🎮</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Memory</p>
                      <p className={`text-2xl font-bold ${getStatusColor(currentData.memory, { good: 70, warning: 85 })}`}>
                        {currentData.memory.toFixed(1)}%
                      </p>
                    </div>
                    <div className={`p-2 rounded-full ${getStatusBgColor(currentData.memory, { good: 70, warning: 85 })}`}>
                      <div className="w-6 h-6 text-current">🧠</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">CPU</p>
                      <p className={`text-2xl font-bold ${getStatusColor(currentData.cpu, { good: 60, warning: 80 })}`}>
                        {currentData.cpu.toFixed(1)}%
                      </p>
                    </div>
                    <div className={`p-2 rounded-full ${getStatusBgColor(currentData.cpu, { good: 60, warning: 80 })}`}>
                      <div className="w-6 h-6 text-current">💻</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Network</p>
                      <p className={`text-2xl font-bold ${getStatusColor(currentData.network, { good: 80, warning: 50 })}`}>
                        {currentData.network.toFixed(1)}%
                      </p>
                    </div>
                    <div className={`p-2 rounded-full ${getStatusBgColor(currentData.network, { good: 80, warning: 50 })}`}>
                      <div className="w-6 h-6 text-current">🌐</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Requests/min</h3>
                  <p className="text-3xl font-bold text-blue-600">{currentData.requests}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Errors/min</h3>
                  <p className="text-3xl font-bold text-red-600">{currentData.errors}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Points</h3>
                  <p className="text-3xl font-bold text-green-600">{data.length}</p>
                </div>
              </div>

              {/* Performance Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">FPS Over Time</h3>
                  <div className="h-32 flex items-end space-x-1">
                    {data.slice(-20).map((point, index) => (
                      <div
                        key={index}
                        className="bg-blue-500 rounded-t"
                        style={{
                          height: `${(point.fps / 70) * 100}%`,
                          width: '100%'
                        }}
                        title={`FPS: ${point.fps.toFixed(0)}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Memory Usage</h3>
                  <div className="h-32 flex items-end space-x-1">
                    {data.slice(-20).map((point, index) => (
                      <div
                        key={index}
                        className="bg-green-500 rounded-t"
                        style={{
                          height: `${point.memory}%`,
                          width: '100%'
                        }}
                        title={`Memory: ${point.memory.toFixed(1)}%`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Data Table */}
              <div className="bg-white rounded-lg shadow border">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">Recent Performance Data</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">FPS</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Memory</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">CPU</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Network</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Requests</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Errors</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {data.slice(-10).reverse().map((point, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            {new Date(point.timestamp).toLocaleTimeString()}
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">{point.fps.toFixed(0)}</td>
                          <td className="px-4 py-2 text-sm text-gray-900">{point.memory.toFixed(1)}%</td>
                          <td className="px-4 py-2 text-sm text-gray-900">{point.cpu.toFixed(1)}%</td>
                          <td className="px-4 py-2 text-sm text-gray-900">{point.network.toFixed(1)}%</td>
                          <td className="px-4 py-2 text-sm text-gray-900">{point.requests}</td>
                          <td className="px-4 py-2 text-sm text-gray-900">{point.errors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-white p-4 rounded-lg shadow border">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Monitor Controls</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setIsMonitoring(!isMonitoring)}
                    className={`px-4 py-2 rounded transition-colors ${
                      isMonitoring 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                  </button>
                  <button
                    onClick={() => setData([])}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    Clear Data
                  </button>
                  <button
                    onClick={() => {
                      const csv = [
                        'Time,FPS,Memory,CPU,Network,Requests,Errors',
                        ...data.map(point => 
                          `${new Date(point.timestamp).toISOString()},${point.fps},${point.memory},${point.cpu},${point.network},${point.requests},${point.errors}`
                        )
                      ].join('\n');
                      
                      const blob = new Blob([csv], { type: 'text/csv' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'performance-data.csv';
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Export Data
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center p-8">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Initializing performance monitoring...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealTimePerformanceMonitor;