import React from 'react';
import { CheckCircle, AlertCircle, XCircle, Clock, Server, Database, Globe } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      icon: Server
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '45ms',
      icon: Database
    },
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '200ms',
      icon: Globe
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '300ms',
      icon: Server
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            System Status
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time status of all our services and systems. We're committed to maintaining 99.9% uptime.
          </p>
        </div>

        {/* Overall Status */}
        <div className="cyber-card hologram-card p-8 mb-16 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
          </div>
          <p className="text-gray-300">Last updated: {new Date().toLocaleString()}</p>
        </div>

        {/* Services Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">{service.name}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(service.status)}
                  <span className={`font-medium ${getStatusColor(service.status)}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Uptime</p>
                  <p className="text-white font-medium">{service.uptime}</p>
                </div>
                <div>
                  <p className="text-gray-400">Response Time</p>
                  <p className="text-white font-medium">{service.responseTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Incidents */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">No recent incidents</h3>
                <span className="text-gray-400 text-sm">All systems running smoothly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Overall Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">150ms</div>
              <div className="text-gray-300">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
              <div className="text-gray-300">Active Incidents</div>
            </div>
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">Get notified about service status changes and incidents.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
