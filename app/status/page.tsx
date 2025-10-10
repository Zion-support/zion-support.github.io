'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Globe, Server, Database, Cloud, Shield, Zap, Activity, TrendingUp, Users, Eye, BarChart } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-15',
      description: 'Core API endpoints and authentication'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      lastIncident: '2024-01-10',
      description: 'Machine learning and AI processing'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '25ms',
      lastIncident: '2024-01-05',
      description: 'Cloud hosting and storage services'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      lastIncident: '2024-01-12',
      description: 'Primary and backup databases'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '8ms',
      lastIncident: '2024-01-08',
      description: 'Content delivery network'
    },
    {
      name: 'Monitoring',
      status: 'operational',
      uptime: '100%',
      responseTime: '5ms',
      lastIncident: 'Never',
      description: 'System monitoring and alerts'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-15T10:30:00Z',
      endTime: '2024-01-15T11:45:00Z',
      description: 'Some API endpoints experienced increased response times due to high traffic load.',
      affectedServices: ['API Services', 'AI Services']
    },
    {
      id: 2,
      title: 'Database Connection Issues',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-12T14:20:00Z',
      endTime: '2024-01-12T16:30:00Z',
      description: 'Intermittent database connection issues affecting some user operations.',
      affectedServices: ['Database', 'API Services']
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'major':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'minor':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational')
    ? 'operational'
    : services.some(service => service.status === 'outage')
      ? 'outage'
      : 'degraded';

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group | Service Status</title>
        <meta name="description" content="Real-time status of Zion Tech Group's AI and IT services. Monitor uptime, performance, and incidents." />
        <meta name="keywords" content="status, uptime, monitoring, incidents, service status, system health" />
        <link rel="canonical" href="https://ziontechgroup.com/status" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time status of all our services. We're committed to providing reliable,
              high-performance AI and IT solutions.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                {getStatusIcon(overallStatus)}
                <span className={`text-lg font-semibold ${getStatusColor(overallStatus)}`}>
                  {
                    overallStatus === 'operational' ? 'All Systems Operational' :
                    overallStatus === 'degraded' ? 'Degraded Performance' : 'Service Outage'
                  }
                </span>
              </div>
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
            <p className="text-gray-400">
              Last updated: {lastUpdated.toLocaleString()}
            </p>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(service.status)}
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Incident:</span>
                      <span className="text-white">{service.lastIncident}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                        <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/50">
                        {incident.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{incident.description}</p>
                  <div>
                    <span className="text-gray-400 text-sm">Affected Services: </span>
                    <span className="text-white text-sm">{incident.affectedServices.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Overall Uptime</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">45ms</div>
                <div className="text-gray-400">Avg Response Time</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">1.2M</div>
                <div className="text-gray-400">Requests Today</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need More Information?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to status updates or contact our support team for more details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Subscribe to Updates
              </button>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StatusPage;