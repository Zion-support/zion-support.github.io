import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, Server, Database, Globe, Shield } from 'lucide-react';

const StatusPage: NextPage = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      description: 'Main website and user interface',
      icon: <Globe className="w-5 h-5" />
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      description: 'REST API and microservices',
      icon: <Server className="w-5 h-5" />
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Primary database services',
      icon: <Database className="w-5 h-5" />
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '95ms',
      description: 'User authentication and authorization',
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '200ms',
      description: 'File upload and storage services',
      icon: <Database className="w-5 h-5" />
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.6%',
      responseTime: '150ms',
      description: 'Email delivery and notifications',
      icon: <Server className="w-5 h-5" />
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'minor',
      startTime: '2025-01-25T02:00:00Z',
      endTime: '2025-01-25T04:00:00Z',
      description: 'Planned maintenance to optimize database performance and apply security updates.',
      affectedServices: ['Database', 'API Services']
    },
    {
      id: 2,
      title: 'API Response Time Degradation',
      status: 'investigating',
      severity: 'major',
      startTime: '2025-01-24T14:30:00Z',
      endTime: null,
      description: 'Some users experiencing slower API response times. We are investigating the root cause.',
      affectedServices: ['API Services', 'Website']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'partial':
        return 'text-orange-600 bg-orange-100';
      case 'major':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5" />;
      case 'partial':
        return <AlertCircle className="w-5 h-5" />;
      case 'major':
        return <XCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'minor':
        return 'text-blue-600 bg-blue-100';
      case 'major':
        return 'text-red-600 bg-red-100';
      case 'critical':
        return 'text-red-600 bg-red-100';
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
      description="Check the current status of Zion Tech Group services and systems. View uptime statistics, incident reports, and service health."
      keywords="system status, uptime, service status, incident reports, system health, monitoring"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            System Status
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Real-time status of all Zion Tech Group services and systems.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
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
      </section>

      {/* Overall Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-600 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">All Systems Operational</h2>
                  <p className="text-gray-600">All services are running normally</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-gray-600">Overall Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">6</div>
                  <div className="text-gray-600">Services Monitored</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-gray-600">Active Incidents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Status</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-blue-600 mr-3">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                    </div>
                    <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                      {getStatusIcon(service.status)}
                      <span className="ml-1 capitalize">{service.status}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Uptime:</span>
                      <span className="font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Response Time:</span>
                      <span className="font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{incident.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                        {incident.endTime && (
                          <span>Resolved: {new Date(incident.endTime).toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                      {incident.severity.toUpperCase()}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{incident.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Affected Services: </span>
                      <span className="text-sm font-medium">{incident.affectedServices.join(', ')}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      incident.status === 'resolved' 
                        ? 'text-green-600 bg-green-100' 
                        : 'text-yellow-600 bg-yellow-100'
                    }`}>
                      {incident.status === 'resolved' ? 'Resolved' : 'Investigating'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Status History</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                View detailed status history and uptime statistics for the past 30 days.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-gray-600">Last 30 Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.8%</div>
                  <div className="text-gray-600">Last 7 Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-gray-600">Last 24 Hours</div>
                </div>
              </div>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Detailed History
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to status updates and be notified of any service incidents or maintenance windows.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            You can unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default StatusPage;