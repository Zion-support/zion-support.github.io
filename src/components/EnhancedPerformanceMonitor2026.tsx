import React from 'react';
const EnhancedPerformanceMonitor2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6 rounded-2xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Performance Monitor 2026</h3>
            <p className="text-sm text-gray-400">Real-time system metrics and analytics</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            Last updated: {lastUpdate.toLocaleTimeString()}
          </div>
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={`p-2 rounded-lg transition-colors ${
              isMonitoring 
                ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
            }`}
          >
            <RefreshCw className={`w-4 h-4 ${isMonitoring ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          {metrics.map((metricindex) => (
            <div
              key={metric.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <metric.icon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-300">{metric.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(metric.status)}
                  {getTrendIcon(metric.trend)}
                </div>
              </div>
              <div className="mb-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">
                    {metric.value.toFixed(metric.unit === '%' ? 0 : 1)}
                  </span>
                  <span className="text-sm text-gray-400">{metric.unit}</span>
                </div>
                <div className={`text-xs ${getStatusColor(metric.status)}`}>
                  {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${metric.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* System Status */}
      <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">System Status: All Systems Operational</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Settings className="w-4 h-4" />
            <span>Auto-refresh: {isMonitoring ? 'ON' : 'OFF'}</span>
          </div>
        </div>
      </div>
    </div>
  );

};

export default EnhancedPerformanceMonitor2026;
