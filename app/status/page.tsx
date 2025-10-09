import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, ExternalLink } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-10',
      description: 'Core API endpoints and authentication'
    },
    {
      name: 'AI Models',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      lastIncident: '2024-01-05',
      description: 'Machine learning models and predictions'
    },
    {
      name: 'Data Processing',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      lastIncident: '2024-01-01',
      description: 'Data ingestion and processing pipelines'
    },
    {
      name: 'Web Dashboard',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '80ms',
      lastIncident: '2023-12-28',
      description: 'Customer portal and management interface'
    },
    {
      name: 'Webhooks',
      status: 'operational',
      uptime: '99.6%',
      responseTime: '150ms',
      lastIncident: '2023-12-20',
      description: 'Event notifications and integrations'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '60ms',
      lastIncident: '2023-12-15',
      description: 'Document and media storage services'
    }
  ];

  const incidents = [
    {
      id: 'inc-001',
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-10T14:30:00Z',
      endTime: '2024-01-10T16:45:00Z',
      description: 'Some API endpoints experienced increased response times due to high traffic load.',
      impact: 'API response times were 2-3x slower than normal for approximately 2 hours.',
      resolution: 'Scaling up server capacity resolved the issue.'
    },
    {
      id: 'inc-002',
      title: 'AI Model Training Delays',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-05T09:00:00Z',
      endTime: '2024-01-05T12:30:00Z',
      description: 'Custom model training jobs were experiencing delays due to resource constraints.',
      impact: 'New model training requests were delayed by 3-4 hours.',
      resolution: 'Additional compute resources were allocated to the training cluster.'
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

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time status of Zion Tech Group services. Check uptime, performance metrics, and incident reports." />
        <meta name="keywords" content="status, uptime, system status, incidents, monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                System Status
              </h1>
              <p className="text-xl text-gray-300">
                Real-time status of all Zion Tech Group services
              </p>
            </div>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>

          {/* Overall Status */}
          <div className="mb-12">
            <div className={`rounded-2xl p-8 border ${
              overallStatus === 'operational' 
                ? 'bg-green-600/20 border-green-500/30' 
                : 'bg-yellow-600/20 border-yellow-500/30'
            }`}>
              <div className="flex items-center space-x-4 mb-4">
                {getStatusIcon(overallStatus)}
                <h2 className="text-2xl font-bold text-white">
                  All Systems {overallStatus === 'operational' ? 'Operational' : 'Experiencing Issues'}
                </h2>
              </div>
              <p className="text-gray-300 mb-4">
                {overallStatus === 'operational' 
                  ? 'All services are running normally with no known issues.'
                  : 'Some services may be experiencing issues. Check individual service status below.'
                }
              </p>
              <div className="text-sm text-gray-400">
                Last updated: {lastUpdated.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Services Status */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{service.name}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Uptime</span>
                      <span className="text-white font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Response Time</span>
                      <span className="text-white font-medium">{service.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Last Incident</span>
                      <span className="text-white font-medium">{service.lastIncident}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Incidents */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Recent Incidents</h2>
            {incidents.length > 0 ? (
              <div className="space-y-6">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                          <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{incident.description}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <h4 className="text-white font-medium mb-1">Impact</h4>
                        <p className="text-gray-300 text-sm">{incident.impact}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Resolution</h4>
                        <p className="text-gray-300 text-sm">{incident.resolution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No Recent Incidents</h3>
                <p className="text-gray-300">All services have been running smoothly with no incidents in the past 30 days.</p>
              </div>
            )}
          </section>

          {/* Performance Metrics */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                <div className="text-gray-300">Overall Uptime</div>
                <div className="text-gray-400 text-sm mt-1">Last 30 days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">85ms</div>
                <div className="text-gray-300">Avg Response Time</div>
                <div className="text-gray-400 text-sm mt-1">Last 24 hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2.1M</div>
                <div className="text-gray-300">API Requests</div>
                <div className="text-gray-400 text-sm mt-1">Last 24 hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
                <div className="text-gray-300">Active Incidents</div>
                <div className="text-gray-400 text-sm mt-1">Current status</div>
              </div>
            </div>
          </section>

          {/* Subscribe to Updates */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to status updates and get notified immediately when there are service issues or maintenance windows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default StatusPage;