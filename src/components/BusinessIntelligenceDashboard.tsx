import React, { useState } from 'react';

interface BusinessIntelligenceDashboardProps {
  className?: string;
}

const BusinessIntelligenceDashboard: React.FC<BusinessIntelligenceDashboardProps> = ({ className = '' }) => {
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const metrics = [
    { id: 'revenue', label: 'Revenue', value: '$2.4M', change: '+12%' },
    { id: 'users', label: 'Active Users', value: '45.2K', change: '+8%' },
    { id: 'conversion', label: 'Conversion', value: '3.2%', change: '+0.5%' },
    { id: 'retention', label: 'Retention', value: '87%', change: '+2%' }
  ];

  return (
    <div className={`business-intelligence-dashboard ${className}`}>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">📊 Business Intelligence Dashboard</h3>
          <div className="text-xs opacity-80">Real-time Analytics</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              onClick={() => setSelectedMetric(metric.id)}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                selectedMetric === metric.id 
                  ? 'bg-white/20' 
                  : 'bg-white/10 hover:bg-white/15'
              }`}
            >
              <div className="text-xs opacity-80">{metric.label}</div>
              <div className="text-lg font-bold">{metric.value}</div>
              <div className="text-xs text-green-300">{metric.change}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-white/10 rounded-lg">
          <p className="text-xs opacity-80">
            📈 {selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)} trending upward
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligenceDashboard;