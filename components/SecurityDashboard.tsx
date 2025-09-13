import React from 'react';

interface SecurityDashboardProps {
  className?: string;
}

const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="text-center">
        <div className="text-4xl mb-4">🛡️</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Dashboard</h3>
        <p className="text-gray-600 mb-6">
          Comprehensive security monitoring and management dashboard with real-time 
          threat detection and automated response capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg">
            <div className="text-2xl mb-2">🔍</div>
            <div className="font-semibold text-gray-900">Threat Detection</div>
            <div className="text-sm text-gray-600">Real-time security monitoring</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-semibold text-gray-900">Auto Response</div>
            <div className="text-sm text-gray-600">Automated security responses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;