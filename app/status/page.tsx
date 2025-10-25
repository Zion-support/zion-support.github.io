'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  CheckCircle,
  XCircle,
  Clock,
  Server, 
  Database, 
  Cloud, 
  Shield,
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const services = [
    {
      name: 'AI Analytics API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: null,
      icon: Activity
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      lastIncident: null,
      icon: Cloud
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: null,
      icon: Database
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '200ms',
      lastIncident: null,
      icon: Shield
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '300ms',
      lastIncident: null,
      icon: Server
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-01-10T02:00:00Z',
      endTime: '2024-01-10T04:00:00Z',
      description: 'Database optimization and performance improvements were completed successfully.',
      affectedServices: ['Database Services', 'AI Analytics API']
    },
    {
      id: 2,
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-08T14:30:00Z',
      endTime: '2024-01-08T15:45:00Z',
      description: 'Temporary rate limiting issue affecting some API endpoints. Resolved by adjusting rate limits.',
      affectedServices: ['AI Analytics API']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400 bg-green-500/10';
      case 'degraded': return 'text-yellow-400 bg-yellow-500/10';
      case 'outage': return 'text-red-400 bg-red-500/10';
      case 'maintenance': return 'text-blue-400 bg-blue-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return CheckCircle;
      case 'degraded': return AlertTriangle;
      case 'outage': return XCircle;
      case 'maintenance': return Clock;
      default: return Clock;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-500/10';
      case 'major': return 'text-orange-400 bg-orange-500/10';
      case 'minor': return 'text-yellow-400 bg-yellow-500/10';
      case 'maintenance': return 'text-blue-400 bg-blue-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="System Status - Zion Tech Group"
        description="Real-time status of our AI, cloud, and cybersecurity services. Monitor uptime, performance, and incidents."
        keywords={["system status","uptime","service status","incidents","monitoring","Zion Tech Group"]}
        canonicalUrl="https://ziontechgroup.com/status"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              System Status
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time status of our AI, cloud, and cybersecurity services. Monitor uptime, performance, and incidents.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">All Systems Operational</span>
              </div>
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50">
                <Activity className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Service Status</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const StatusIcon = getStatusIcon(service.status);
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                          <StatusIcon className="w-4 h-4" />
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Uptime</span>
                        <span className="text-white font-medium">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Response Time</span>
                        <span className="text-white font-medium">{service.responseTime}</span>
                      </div>
                      {service.lastIncident && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Last Incident</span>
                          <span className="text-red-400 text-sm">{service.lastIncident}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${getSeverityColor(incident.severity).split(' ')[1]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <AlertTriangle className={`w-6 h-6 ${getSeverityColor(incident.severity).split(' ')[0]}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          incident.status === 'resolved' ? 'text-green-400 bg-green-500/10' : 'text-yellow-400 bg-yellow-500/10'
                        }`}>
                          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{incident.description}</p>
                      <div className="text-sm text-gray-400 mb-3">
                        <div>Start: {new Date(incident.startTime).toLocaleString()}</div>
                        {incident.endTime && (
                          <div>End: {new Date(incident.endTime).toLocaleString()}</div>
                        )}
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">Affected Services: </span>
                        <span className="text-sm text-white">{incident.affectedServices.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Metrics */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">System Metrics</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Overall Uptime</div>
                  <div className="text-sm text-gray-400">Last 30 days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">150ms</div>
                  <div className="text-gray-300">Average Response Time</div>
                  <div className="text-sm text-gray-400">Last 24 hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                  <div className="text-gray-300">Active Incidents</div>
                  <div className="text-sm text-gray-400">Current status</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Report an Issue
            </h2>
            <p className="text-gray-300 mb-8">
              If you're experiencing issues not reflected in our status page, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/support"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Contact Support
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StatusPage;