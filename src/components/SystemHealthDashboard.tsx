import React from 'react';

const SystemHealthDashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">System Health Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Database</h3>
          <p className="text-green-600">Healthy</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">API</h3>
          <p className="text-green-600">Operational</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Cache</h3>
          <p className="text-yellow-600">Warning</p>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthDashboard;