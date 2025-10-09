import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Clock, Server, Database, Cloud, Globe } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      lastIncident: '2024-01-15',
      description: 'Main website and application'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      lastIncident: '2024-01-10',
      description: 'REST API and GraphQL endpoints'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: '2024-01-05',
      description: 'Primary database cluster'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      lastIncident: '2024-01-12',
      description: 'Content delivery network'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.7%',
      lastIncident: '2024-01-08',
      description: 'Email delivery and processing'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.6%',
      lastIncident: '2024-01-03',
      description: 'Machine learning and AI processing'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
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
      case 'maintenance':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'All Systems Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'outage':
        return 'Service Outage';
      case 'maintenance':
        return 'Scheduled Maintenance';
      default:
        return 'Unknown Status';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            System Status
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time status of all our services and systems. We're committed to providing reliable and secure services.
          </p>
        </div>

        {/* Overall Status */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-12">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-green-400 mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
              <p className="text-gray-300">All services are running normally</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">99.9%</div>
              <div className="text-gray-300">Overall Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">0</div>
              <div className="text-gray-300">Active Incidents</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Service Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Service Status</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-lg font-semibold ${getStatusColor(service.status)}`}>
                      {getStatusText(service.status)}
                    </div>
                    <div className="text-sm text-gray-400">
                      Uptime: {service.uptime}
                    </div>
                    <div className="text-sm text-gray-400">
                      Last incident: {service.lastIncident}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incident History */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Recent Incidents</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-center text-gray-400">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <p className="text-lg">No recent incidents</p>
              <p className="text-sm">All systems have been running smoothly</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            If you're experiencing issues not reflected in our status page, please contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@ziontechgroup.com"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Globe className="w-5 h-5 mr-2" />
              Email Support
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Server className="w-5 h-5 mr-2" />
              Call Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
