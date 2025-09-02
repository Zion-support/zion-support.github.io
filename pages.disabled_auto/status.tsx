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
      responseTime: '180ms',
      description: 'Email delivery and notification services'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '65ms',
      description: 'File upload and storage services'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-10T02:00:00Z',
      endTime: '2024-01-10T04:00:00Z',
      description: 'Planned maintenance window for API infrastructure updates. All services restored successfully.'
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-05T14:30:00Z',
      endTime: '2024-01-05T16:45:00Z',
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
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-100';
      case 'major':
        return 'text-orange-600 bg-orange-100';
      case 'minor':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
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
      description="Real-time status of Zion Tech Group services. Monitor uptime, performance, and any ongoing incidents."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Activity className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Status</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Real-time monitoring of all Zion Tech Group services. 
            Stay informed about uptime, performance, and any ongoing incidents.
          </p>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">All Systems Operational</h2>
              <p className="text-gray-600">All services are running normally</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="text-sm text-gray-500">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-lg font-semibold text-green-800">Operational</span>
              </div>
              <p className="text-2xl font-bold text-green-900">6</p>
              <p className="text-sm text-green-700">Services running normally</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-2">
                <AlertCircle className="w-6 h-6 text-yellow-500 mr-2" />
                <span className="text-lg font-semibold text-yellow-800">Degraded</span>
              </div>
              <p className="text-2xl font-bold text-yellow-900">0</p>
              <p className="text-sm text-yellow-700">Services with issues</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-2">
                <XCircle className="w-6 h-6 text-red-500 mr-2" />
                <span className="text-lg font-semibold text-red-800">Outage</span>
              </div>
              <p className="text-2xl font-bold text-red-900">0</p>
              <p className="text-sm text-red-700">Services down</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Status</h2>
            <p className="text-gray-600">Detailed status of all our services</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Uptime
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Response Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {services.map((service, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getStatusIcon(service.status)}
                          <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                            {service.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {service.uptime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {service.responseTime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Incidents</h2>
            <p className="text-gray-600">History of recent service disruptions and maintenance</p>
          </div>

          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{incident.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                      <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">{incident.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Page Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Status Page</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This status page provides real-time information about the availability and performance of Zion Tech Group services. 
              We update this page automatically when incidents occur and resolve.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
                <p className="text-gray-600">24/7 monitoring with automatic status updates</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Communication</h3>
                <p className="text-gray-600">Honest and timely updates about any issues</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Historical Data</h3>
                <p className="text-gray-600">Track uptime and performance over time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to status updates and get notified immediately when incidents occur or are resolved.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Status;