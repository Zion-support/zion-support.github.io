import React from 'react';

const ComprehensiveSecurityDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Security Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800">Critical Threats</h3>
          <p className="text-2xl font-bold text-red-600">0</p>
        </div>
        <div className="bg-orange-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800">High Threats</h3>
          <p className="text-2xl font-bold text-orange-600">2</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">Total Threats</h3>
          <p className="text-2xl font-bold text-green-600">5</p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSecurityDashboard;