
'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock, RefreshCw } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'AI Services API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: '2024-09-15',
      description: 'Core AI prediction and model training services'
    },
    {
      name: 'Data Processing API',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '95ms',
      lastIncident: '2024-09-10',
      description: 'Data transformation and analytics services'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      lastIncident: '2024-08-20',
      description: 'User authentication and authorization'
    },
    {
      name: 'Web Dashboard',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      lastIncident: '2024-09-05',
      description: 'Main web application and user interface'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '80ms',
      lastIncident: '2024-08-15',
      description: 'File upload and storage services'
    },
    {
      name: 'Notification Service',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '300ms',
      lastIncident: '2024-10-08',
      description: 'Email and push notification delivery'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Notification Service Degraded Performance',
      status: 'investigating',
      severity: 'medium',
      startTime: '2024-10-08T14:30:00Z',
      description: 'We are experiencing slower than usual notification delivery times. Our team is investigating the issue.',
      updates: [
        {
          time: '2024-10-08T15:00:00Z',
          message: 'We have identified the issue and are working on a fix.'
        },
        {
          time: '2024-10-08T14:30:00Z',
          message: 'We are investigating reports of delayed notifications.'
        }
      ]
    },
    {
      id: 2,
      title: 'API Rate Limiting Issue Resolved',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-09-15T10:00:00Z',
      endTime: '2024-09-15T11:30:00Z',
      description: 'Some users experienced incorrect rate limiting on API requests. This has been resolved.',
      updates: [
        {
          time: '2024-09-15T11:30:00Z',
          message: 'The issue has been resolved. All API rate limiting is working correctly.'
        },
        {
          time: '2024-09-15T10:30:00Z',
          message: 'We have identified the root cause and are implementing a fix.'
        },
        {
          time: '2024-09-15T10:00:00Z',
          message: 'We are investigating reports of incorrect API rate limiting.'
        }
      ]
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-100';
      case 'high':
        return 'text-orange-600 bg-orange-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">System Status</h1>
              <p className="text-gray-600 mt-1">
                Real-time status of all Zion Tech Group services
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              {getStatusIcon(overallStatus)}
              <span className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(overallStatus)}`}>
                {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              All Systems Operational
            </h2>
            <p className="text-gray-600">
              All services are running normally with no known issues.
            </p>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                  {getStatusIcon(service.status)}
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Uptime:</span>
                    <span className="font-semibold text-gray-900">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-semibold text-gray-900">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Last Incident:</span>
                    <span className="font-semibold text-gray-900">{service.lastIncident}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(service.status)}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h3>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{incident.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Started: {formatTime(incident.startTime)}</span>
                      {incident.endTime && (
                        <span>Resolved: {formatTime(incident.endTime)}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(incident.severity)}`}>
                      {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(incident.status)}`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{incident.description}</p>
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900">Updates:</h5>
                  {incident.updates.map((update, updateIndex) => (
                    <div key={updateIndex} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">
                        {formatTime(update.time)}
                      </div>
                      <div className="text-gray-700">{update.message}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to status updates and get notified when incidents occur or are resolved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We'll only send you status updates. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            This status page is updated every minute. For more information, contact our support team.
          </p>
        </div>
      </section>

    </div>
  );
};

export default StatusPage;
