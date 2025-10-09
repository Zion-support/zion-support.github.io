import React from 'react';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Activity, Server, Database, Globe } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-11-15',
      description: 'Core API endpoints and authentication'
    },
    {
      name: 'AI Models',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      lastIncident: '2024-11-10',
      description: 'Machine learning models and predictions'
    },
    {
      name: 'Data Processing',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      lastIncident: '2024-11-05',
      description: 'Data ingestion and processing pipelines'
    },
    {
      name: 'Web Dashboard',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '80ms',
      lastIncident: '2024-10-28',
      description: 'Web interface and user dashboard'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '30ms',
      lastIncident: '2024-10-20',
      description: 'User authentication and authorization'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '150ms',
      lastIncident: '2024-10-15',
      description: 'File upload and storage services'
    }
  ];

  const recentIncidents = [
    {
      id: 'INC-2024-001',
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-11-15T14:30:00Z',
      endTime: '2024-11-15T16:45:00Z',
      description: 'Some API endpoints experienced increased response times due to high traffic load. We scaled our infrastructure and resolved the issue.',
      affectedServices: ['API Services', 'AI Models']
    },
    {
      id: 'INC-2024-002',
      title: 'Data Processing Pipeline Delay',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-11-10T09:15:00Z',
      endTime: '2024-11-10T11:30:00Z',
      description: 'Data processing jobs were delayed due to a temporary issue with our queue system. All jobs completed successfully after resolution.',
      affectedServices: ['Data Processing']
    },
    {
      id: 'INC-2024-003',
      title: 'Scheduled Maintenance',
      status: 'completed',
      severity: 'maintenance',
      startTime: '2024-11-05T02:00:00Z',
      endTime: '2024-11-05T04:00:00Z',
      description: 'Scheduled maintenance to upgrade our database infrastructure. All services were restored after the maintenance window.',
      affectedServices: ['Database', 'API Services']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'outage':
        return 'bg-red-100 text-red-800';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'major':
        return 'bg-orange-100 text-orange-800';
      case 'minor':
        return 'bg-yellow-100 text-yellow-800';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';
  const overallUptime = '99.9%';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System Status
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Real-time status of all Zion Tech Group services
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                {getStatusIcon(overallStatus)}
                <span className="ml-2 text-lg font-semibold">
                  All Systems {overallStatus === 'operational' ? 'Operational' : 'Degraded'}
                </span>
              </div>
              <div className="text-blue-200">•</div>
              <div className="text-lg">
                Uptime: <span className="font-semibold">{overallUptime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System Overview
            </h2>
            <p className="text-xl text-gray-600">
              Current status of all our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">All Systems Operational</h3>
              <p className="text-green-700">All services are running normally</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Activity className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Uptime</h3>
              <p className="text-2xl font-bold text-blue-600">{overallUptime}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Last Updated</h3>
              <p className="text-purple-700">{new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Status
            </h2>
            <p className="text-xl text-gray-600">
              Detailed status of each service component
            </p>
          </div>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Uptime</div>
                      <div className="font-semibold text-gray-900">{service.uptime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Response Time</div>
                      <div className="font-semibold text-gray-900">{service.responseTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Last Incident</div>
                      <div className="font-semibold text-gray-900">{service.lastIncident}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Incidents
            </h2>
            <p className="text-xl text-gray-600">
              Latest incidents and maintenance windows
            </p>
          </div>
          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{incident.description}</p>
                    <div className="text-sm text-gray-500">
                      <div>Incident ID: {incident.id}</div>
                      <div>Start: {new Date(incident.startTime).toLocaleString()}</div>
                      <div>End: {new Date(incident.endTime).toLocaleString()}</div>
                      <div>Affected Services: {incident.affectedServices.join(', ')}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Informed
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to status updates and get notified about incidents and maintenance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We'll only send you important status updates. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300">
                Status page powered by Zion Tech Group
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                <RefreshCw className="w-4 h-4 mr-2" />
                Last updated: {new Date().toLocaleTimeString()}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;