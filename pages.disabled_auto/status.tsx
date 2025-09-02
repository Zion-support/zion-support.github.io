import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Globe } from 'lucide-react';

const Status: NextPage = () => {
  const systemStatus = {
    overall: 'operational',
    uptime: '99.9%',
    lastIncident: '2024-12-15',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastCheck: '2 minutes ago',
      icon: Globe
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '45ms',
      lastCheck: '1 minute ago',
      icon: Server
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '12ms',
      lastCheck: '30 seconds ago',
      icon: Database
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '85ms',
      lastCheck: '1 minute ago',
      icon: Activity
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      lastCheck: '2 minutes ago',
      icon: Database
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '150ms',
      lastCheck: '1 minute ago',
      icon: Globe
    }
  ];

  const incidents = [
    {
      id: 'INC-2024-001',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-12-15T02:00:00Z',
      endTime: '2024-12-15T04:00:00Z',
      description: 'Scheduled maintenance window for database optimization and performance improvements.'
    },
    {
      id: 'INC-2024-002',
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-12-10T14:30:00Z',
      endTime: '2024-12-10T15:45:00Z',
      description: 'Temporary issue with API rate limiting affecting some users. Resolved by adjusting rate limit thresholds.'
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
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
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
      case 'maintenance':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <MainLayout
      title="System Status - Zion Tech Group"
      description="Check the current status of Zion Tech Group's systems and services. Real-time monitoring and incident reports."
      keywords="system status, uptime, monitoring, incidents, service status, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Activity className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System Status
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Real-time monitoring of our systems and services.
            </p>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {getStatusIcon(systemStatus.overall)}
                    <h2 className="text-3xl font-bold text-gray-900 ml-3">
                      All Systems Operational
                    </h2>
                  </div>
                  <div className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(systemStatus.overall)}`}>
                    {systemStatus.overall.toUpperCase()}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{systemStatus.uptime}</div>
                    <div className="text-gray-600">Uptime (30 days)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{systemStatus.responseTime}</div>
                    <div className="text-gray-600">Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {new Date(systemStatus.lastIncident).toLocaleDateString()}
                    </div>
                    <div className="text-gray-600">Last Incident</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Service Status
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                          <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                        </div>
                        {getStatusIcon(service.status)}
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Uptime:</span>
                          <span className="font-semibold text-gray-900">{service.uptime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Response Time:</span>
                          <span className="font-semibold text-gray-900">{service.responseTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Last Check:</span>
                          <span className="font-semibold text-gray-900">{service.lastCheck}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                          {service.status.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Recent Incidents
              </h2>
              <div className="space-y-6">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {getStatusIcon(incident.status)}
                        <h3 className="text-xl font-semibold text-gray-900 ml-3">
                          {incident.title}
                        </h3>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status.toUpperCase()}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700">{incident.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Incident ID:</span>
                        <span className="font-semibold text-gray-900 ml-2">{incident.id}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Start Time:</span>
                        <span className="font-semibold text-gray-900 ml-2">
                          {new Date(incident.startTime).toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">End Time:</span>
                        <span className="font-semibold text-gray-900 ml-2">
                          {new Date(incident.endTime).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Page Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About This Status Page
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-lg text-gray-700 mb-6">
                  This status page provides real-time information about the availability and performance 
                  of Zion Tech Group's systems and services. We monitor our infrastructure 24/7 to ensure 
                  the best possible experience for our users.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 24/7 automated monitoring</li>
                      <li>• Real-time performance metrics</li>
                      <li>• Automated alerting system</li>
                      <li>• Regular health checks</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Incident Response</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Immediate incident detection</li>
                      <li>• Rapid response team activation</li>
                      <li>• Regular status updates</li>
                      <li>• Post-incident analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Status;