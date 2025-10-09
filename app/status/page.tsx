import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Globe, Zap } from 'lucide-react';

const StatusPage: React.FC = () => {
  const systemStatus = {
    overall: 'operational',
    uptime: '99.9%',
    lastIncident: 'None',
    lastUpdate: '2024-12-15T10:30:00Z'
  };

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: 'None',
      description: 'Core AI API endpoints and services'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '23ms',
      lastIncident: 'None',
      description: 'User authentication and authorization'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '12ms',
      lastIncident: 'None',
      description: 'Primary database services'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '67ms',
      lastIncident: 'None',
      description: 'File upload and storage services'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '34ms',
      lastIncident: 'None',
      description: 'Content delivery network'
    },
    {
      name: 'Monitoring',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '8ms',
      lastIncident: 'None',
      description: 'System monitoring and alerting'
    }
  ];

  const recentIncidents = [
    {
      id: 'INC-2024-001',
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      impact: 'minor',
      startTime: '2024-12-10T02:00:00Z',
      endTime: '2024-12-10T04:00:00Z',
      description: 'Scheduled maintenance window for API service updates. All services were restored within the planned window.',
      affectedServices: ['API Services', 'Authentication']
    },
    {
      id: 'INC-2024-002',
      title: 'Database Performance Degradation',
      status: 'resolved',
      impact: 'minor',
      startTime: '2024-11-28T14:30:00Z',
      endTime: '2024-11-28T15:45:00Z',
      description: 'Temporary performance issues with database queries. Resolved by optimizing query performance.',
      affectedServices: ['Database', 'API Services']
    }
  ];

  const metrics = [
    {
      name: 'Response Time',
      value: '45ms',
      trend: 'down',
      change: '-5ms',
      icon: Activity,
      color: 'text-green-600'
    },
    {
      name: 'Error Rate',
      value: '0.01%',
      trend: 'down',
      change: '-0.02%',
      icon: AlertCircle,
      color: 'text-green-600'
    },
    {
      name: 'Throughput',
      value: '1.2M',
      trend: 'up',
      change: '+15%',
      icon: Server,
      color: 'text-blue-600'
    },
    {
      name: 'Availability',
      value: '99.9%',
      trend: 'stable',
      change: '0%',
      icon: CheckCircle,
      color: 'text-green-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return CheckCircle;
      case 'degraded':
        return AlertCircle;
      case 'outage':
        return XCircle;
      default:
        return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time system status and uptime information for Zion Tech Group's AI services and infrastructure." />
        <meta name="keywords" content="system status, uptime, service status, API status, monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            System Status
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time status of our AI services and infrastructure. We're committed to providing reliable, high-performance services.
          </p>
          
          {/* Overall Status */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <span className="text-2xl font-bold text-gray-900">All Systems Operational</span>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{systemStatus.uptime}</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-gray-600">Active Incidents</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Last updated: {new Date(systemStatus.lastUpdate).toLocaleString()}
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Status</h2>
          
          <div className="space-y-4">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <StatusIcon className="w-6 h-6 text-green-600" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{service.uptime}</div>
                        <div className="text-sm text-gray-500">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{service.responseTime}</div>
                        <div className="text-sm text-gray-500">Response</div>
                      </div>
                      <div className="text-center">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                          {service.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Performance Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <MetricIcon className={`w-8 h-8 ${metric.color}`} />
                    <div className={`flex items-center text-sm ${
                      metric.trend === 'up' ? 'text-green-600' :
                      metric.trend === 'down' ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      <span>{metric.change}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600">{metric.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Incidents</h2>
          
          {recentIncidents.length > 0 ? (
            <div className="space-y-6">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{incident.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          incident.status === 'resolved' ? 'bg-green-100 text-green-800' :
                          incident.status === 'investigating' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {incident.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          incident.impact === 'minor' ? 'bg-blue-100 text-blue-800' :
                          incident.impact === 'major' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {incident.impact} impact
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Incident ID: {incident.id}
                      </div>
                      <div className="text-sm text-gray-600">
                        {new Date(incident.startTime).toLocaleString()} - {new Date(incident.endTime).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{incident.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Affected Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {incident.affectedServices.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Recent Incidents</h3>
              <p className="text-gray-600">All systems are running smoothly with no reported issues.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Subscribe to status updates and get notified about incidents and maintenance windows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;