import React from 'react';
import PerformanceOptimizer from './PerformanceOptimizer';
import SecurityMonitor from './SecurityMonitor';

const SystemDashboard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">System Dashboard</h2>
        <p className="text-xl text-gray-300">
          Real-time monitoring of system performance and security metrics
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PerformanceOptimizer />
        <SecurityMonitor />
      <div className="mt-8 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold">
          <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
          All Systems Operational
        </div>
    </div>
  );
};
export default SystemDashboard;
