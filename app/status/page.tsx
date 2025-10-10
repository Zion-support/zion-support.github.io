'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  RefreshCw,
  Server,
  Database,
  Cloud,
  Shield,
  Activity,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      description: 'Core API endpoints and authentication services'
    },
    {
      name: 'AI Platform',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '250ms',
      description: 'Machine learning models and AI processing services'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      description: 'Primary and replica database clusters'
    },
    {
      name: 'Cloud Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '180ms',
      description: 'File storage and content delivery network'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '80ms',
      description: 'User authentication and authorization services'
    },
    {
      name: 'Monitoring',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '60ms',
      description: 'System monitoring and alerting services'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-01-15T02:00:00Z',
      endTime: '2024-01-15T04:00:00Z',
      description: 'Planned maintenance window for API infrastructure updates'
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-10T14:30:00Z',
      endTime: '2024-01-10T15:45:00Z',
      description: 'Temporary performance degradation in database queries'
    }
  ];

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

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
        return 'bg-red-500/20 text-red-400 border-red-500';
      case 'major':
        return 'bg-orange-500/20 text-orange-400 border-orange-500';
      case 'minor':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
      case 'maintenance':
        return 'bg-blue-500/20 text-blue-400 border-blue-500';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              System <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Status</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-time status of all Zion Tech Group services. We monitor our systems 24/7 
              to ensure optimal performance and reliability.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
              >
                <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Refreshing...' : 'Refresh Status'}</span>
              </button>
              <div className="text-gray-400 text-sm">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
              </div>
              <p className="text-gray-300 text-lg">
                All services are running normally. No incidents reported.
              </p>
            </div>
          </div>
        </section>

        {/* Service Status */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Service <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Status</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={service.name} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(service.status)}
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <span className={`text-sm font-semibold ${getStatusColor(service.status)}`}>
                      {service.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Uptime</span>
                      <span className="text-white font-semibold">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white font-semibold">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Recent <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Incidents</span>
            </h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="cyber-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300">{incident.description}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.toUpperCase()}
                      </span>
                      <span className={`text-sm font-semibold ${getStatusColor(incident.status)}`}>
                        {incident.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>Resolved: {new Date(incident.endTime).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Performance <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Metrics</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Overall Uptime</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <Activity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">150ms</div>
                <div className="text-gray-300">Average Response Time</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-gray-300">Security Incidents</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <Server className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">6</div>
                <div className="text-gray-300">Services Monitored</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to status updates and get notified about incidents and maintenance windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe to Updates
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Status Page
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StatusPage;