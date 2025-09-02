import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, Activity } from 'lucide-react';

const Status: NextPage = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Core API endpoints and authentication services'
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      description: 'Main website and user interface'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '8ms',
      description: 'Primary database and data storage'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      description: 'Content delivery network and static assets'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      description: 'Email delivery and notification services'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '85ms',
      description: 'File upload and storage services'
    },
    {
      name: 'Analytics',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '150ms',
      description: 'Analytics and reporting services'
    },
    {
      name: 'Monitoring',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '30ms',
      description: 'System monitoring and alerting'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      severity: 'minor',
      startTime: '2025-01-25T02:00:00Z',
      endTime: '2025-01-25T04:00:00Z',
      description: 'Scheduled maintenance window for API infrastructure updates. All services restored successfully.'
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      severity: 'major',
      startTime: '2025-01-20T14:30:00Z',
      endTime: '2025-01-20T16:45:00Z',
      description: 'Temporary performance degradation in database queries. Issue resolved with query optimization.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout
      title="System Status - Zion Tech Group"
      description="Real-time status of Zion Tech Group's services and infrastructure. Monitor uptime, performance, and incidents."
      keywords="system status, uptime, service status, monitoring, incidents, performance"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Activity className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">System Status</h1>
              <p className="text-xl text-gray-200 mb-8">
                Real-time status of our services and infrastructure
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
                <span>Last updated: {lastUpdated.toLocaleString()}</span>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center space-x-2 hover:text-white transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-green-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">All Systems Operational</h2>
                </div>
                <p className="text-xl text-gray-600">
                  All services are running normally. No incidents reported.
                </p>
              </div>

              {/* Service Status Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      {getStatusIcon(service.status)}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Uptime:</span>
                        <span className="font-medium text-gray-900">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Response:</span>
                        <span className="font-medium text-gray-900">{service.responseTime}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Incidents</h2>
              {incidents.length > 0 ? (
                <div className="space-y-6">
                  {incidents.map((incident) => (
                    <div key={incident.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{incident.title}</h3>
                          <p className="text-gray-600">{incident.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div>
                          <span className="font-medium">Started:</span> {new Date(incident.startTime).toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">Resolved:</span> {new Date(incident.endTime).toLocaleString()}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                          {incident.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Recent Incidents</h3>
                  <p className="text-gray-600">All systems have been running smoothly with no reported issues.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Status History */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Status History</h2>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Status History</h3>
                <p className="text-gray-600 mb-6">
                  View detailed uptime statistics and historical performance data.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  View Full History
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
              <p className="text-xl mb-8 text-blue-100">
                Subscribe to status updates and get notified about incidents and maintenance windows.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-r-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Status;