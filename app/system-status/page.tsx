import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Clock, Server, Database, Cloud } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  const systems = [
    { name: 'Web Server', status: 'operational', uptime: '99.9%', icon: Server },
    { name: 'Database', status: 'operational', uptime: '99.8%', icon: Database },
    { name: 'CDN', status: 'operational', uptime: '99.7%', icon: Cloud },
    { name: 'API Gateway', status: 'operational', uptime: '99.9%', icon: Server }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">System Status</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((system, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <system.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{system.name}</h3>
                </div>
                {getStatusIcon(system.status)}
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Status: <span className="capitalize text-green-600">{system.status}</span></p>
                <p>Uptime: {system.uptime}</p>
                <p>Last Updated: {new Date().toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemStatusPage;

